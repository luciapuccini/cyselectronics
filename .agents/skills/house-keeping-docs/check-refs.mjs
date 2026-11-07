#!/usr/bin/env node
// Stale-reference scanner for the house-keeping-docs skill. `--help` is canonical.

import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { execFileSync } from "node:child_process";

const HELP = `Usage: node .agents/skills/house-keeping-docs/check-refs.mjs [options]

Scans docs/ and the context .md files (CLAUDE.md, AGENTS.md, CONTEXT.md,
README.md, .agents/**/*.md) for stale references.

Severities:
  BROKEN  markdown link, backticked path, @import or #anchor that doesn't resolve
  WARN    backticked code symbol not found in src/; doc unreachable from an index (orphan)
  VERIFY  external ref: URL, GitHub issue (#12, owner/repo#12), Jira key (ABC-123)

Options:
  --online          HEAD-check URLs (HTTP 4xx/5xx => BROKEN) and look up GitHub
                    issue state via \`gh api\`. Network errors stay VERIFY.
  --only <prefix>   Report findings only for files under <prefix> (repeatable),
                    e.g. --only docs/ --only CONTEXT.md. The whole set is still
                    scanned so orphan detection stays correct.
  --json            Machine-readable output.
  --help            Show this help.

Lines containing "refcheck:ignore" are skipped. Fenced code blocks are skipped.
Exit code: 1 when any BROKEN finding is reported, else 0.

Examples:
  node .agents/skills/house-keeping-docs/check-refs.mjs
  node .agents/skills/house-keeping-docs/check-refs.mjs --online
  node .agents/skills/house-keeping-docs/check-refs.mjs --only docs/
  node .agents/skills/house-keeping-docs/check-refs.mjs --json > "$TMPDIR/refs.json"`;

const argv = process.argv.slice(2);
if (argv.includes("--help") || argv.includes("-h")) {
  console.log(HELP);
  process.exit(0);
}
const ONLINE = argv.includes("--online");
const JSON_OUT = argv.includes("--json");
const ONLY = argv.flatMap((a, i) => (a === "--only" && argv[i + 1] ? [argv[i + 1].replace(/^\.\//, "")] : []));

const ROOT = execFileSync("git", ["rev-parse", "--show-toplevel"], { encoding: "utf8" }).trim();
const SKIP_DIRS = new Set(["node_modules", ".git", "dist", "build", ".netlify", "coverage"]);
const ENTRY_POINTS = ["CLAUDE.md", "AGENTS.md", "README.md"];
const CONTEXT_FILES = ["CLAUDE.md", "AGENTS.md", "CONTEXT.md", "README.md"];
const SOURCE_DIRS = ["src", "netlify"];
const SOURCE_FILES = ["index.html", "vite.config.ts"];
const SOURCE_EXT = /\.(tsx?|jsx?|mjs|css|html)$/;
const PATH_EXT = /\.(md|tsx?|jsx?|mjs|cjs|css|json|ya?ml|html|svg|png|jpe?g|webp|pdf|sh|py|toml|txt)$/;
// Uppercase-dash-digits tokens that are not tickets.
const NOT_TICKETS = new Set(["ADR", "UTF", "ISO", "RFC", "SHA", "ES", "EN", "HTTP", "TLS", "WCAG", "R"]);
const DOCS_PRESENT = existsSync(join(ROOT, "docs"));

const rel = (p) => relative(ROOT, p) || ".";

function walk(dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const name of readdirSync(dir)) {
    if (SKIP_DIRS.has(name)) continue;
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

// --- collect files -----------------------------------------------------------

const mdFiles = [
  ...CONTEXT_FILES.map((f) => join(ROOT, f)).filter(existsSync),
  ...walk(join(ROOT, "docs")).filter((f) => f.endsWith(".md")),
  ...walk(join(ROOT, ".agents")).filter((f) => f.endsWith(".md")),
];

const sourceText = [
  ...SOURCE_DIRS.flatMap((d) => walk(join(ROOT, d))).filter((f) => SOURCE_EXT.test(f)),
  ...SOURCE_FILES.map((f) => join(ROOT, f)).filter(existsSync),
]
  .map((f) => readFileSync(f, "utf8"))
  .join("\n");

// --- helpers -----------------------------------------------------------------

const slug = (heading) =>
  heading
    .trim()
    .toLowerCase()
    .replace(/[`*_~[\]()]/g, "")
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .replace(/\s/g, "-");

const anchorCache = new Map();
function anchorsOf(file) {
  if (!anchorCache.has(file)) {
    const set = new Set();
    for (const line of readFileSync(file, "utf8").split("\n")) {
      const m = line.match(/^#{1,6}\s+(.*)$/);
      if (m) set.add(slug(m[1]));
    }
    anchorCache.set(file, set);
  }
  return anchorCache.get(file);
}

// Every repo path (files and dirs), for resolving shorthand like `en.ts` or `atoms/Surface`.
const repoPaths = (function collect(dir, out = []) {
  for (const name of readdirSync(dir)) {
    if (SKIP_DIRS.has(name)) continue;
    const p = join(dir, name);
    out.push(rel(p));
    if (statSync(p).isDirectory()) collect(p, out);
  }
  return out;
})(ROOT);

// Resolve against the linking file's dir, then the repo root, then as a path suffix.
function resolveRef(fromFile, target) {
  const candidates = target.startsWith("/")
    ? [join(ROOT, target)]
    : [resolve(dirname(fromFile), target), join(ROOT, target)];
  const direct = candidates.find(existsSync);
  if (direct) return direct;
  const suffix = target.replace(/^\.?\//, "").replace(/\/$/, "");
  const hit = repoPaths.find((p) => p.endsWith(`/${suffix}`));
  return hit ? join(ROOT, hit) : null;
}

const insideDocs = (target) => /^\/?docs(\/|$)/.test(target);

function looksLikePath(tok) {
  if (/[\s*<>{}~$#|[\]()]/.test(tok) || /^\.\w+$/.test(tok) || /^(https?:|mailto:|--)/.test(tok)) return false;
  if (tok.startsWith("/") && !PATH_EXT.test(tok)) return false; // routes like /contact
  if (/^\.{1,2}$/.test(tok)) return false;
  return tok.includes("/") || PATH_EXT.test(tok);
}

function looksLikeSymbol(tok) {
  return /^[A-Z][a-z]+[A-Za-z0-9]*$/.test(tok) || /^use[A-Z]\w*$/.test(tok);
}

// --- scan --------------------------------------------------------------------

const findings = [];
const add = (severity, kind, file, line, ref, detail = "") =>
  findings.push({ severity, kind, file: rel(file), line, ref, detail });

const graph = new Map(); // md file -> Set of reached files
const external = []; // { kind, ref, file, line }

for (const file of mdFiles) {
  const reached = new Set();
  graph.set(file, reached);
  const lines = readFileSync(file, "utf8").split("\n");
  let inFence = false;

  lines.forEach((raw, i) => {
    const ln = i + 1;
    if (/^\s*(```|~~~)/.test(raw)) {
      inFence = !inFence;
      return;
    }
    if (inFence || raw.includes("refcheck:ignore")) return;

    const checkTarget = (target, kind) => {
      const [pathPart, anchor] = target.split("#");
      if (!pathPart) {
        if (anchor && !anchorsOf(file).has(anchor.toLowerCase()))
          add("BROKEN", "anchor", file, ln, target, "no such heading in this file");
        return;
      }
      const hit = resolveRef(file, decodeURI(pathPart));
      if (!hit) {
        if (insideDocs(pathPart) && !DOCS_PRESENT) return; // docs/ is gitignored; absent on fresh clones
        add("BROKEN", kind, file, ln, target, "path does not exist");
        return;
      }
      const isDir = statSync(hit).isDirectory();
      const node = isDir ? join(hit, "README.md") : hit;
      if (existsSync(node)) reached.add(node);
      if (anchor && !isDir && hit.endsWith(".md") && !anchorsOf(hit).has(anchor.toLowerCase()))
        add("BROKEN", "anchor", file, ln, target, `no heading "#${anchor}" in ${rel(hit)}`);
    };

    // @imports (CLAUDE.md style)
    const imp = raw.match(/^@(\S+)\s*$/);
    if (imp) checkTarget(imp[1], "import");

    // markdown links and images: [text](target "title")
    for (const m of raw.matchAll(/!?\[[^\]]*\]\(\s*<?([^)\s>]+)>?(?:\s+"[^"]*")?\s*\)/g)) {
      const target = m[1];
      if (/^(https?:)/.test(target)) external.push({ kind: "url", ref: target, file, line: ln });
      else if (!/^(mailto:|tel:)/.test(target)) checkTarget(target, "link");
    }

    // inline code: paths and symbols
    for (const m of raw.matchAll(/(`+)([^`]+?)\1/g)) {
      const tok = m[2].trim().replace(/\(\)$/, "").replace(/^@(?=\S)/, "");
      if (looksLikePath(tok)) checkTarget(tok, "path");
      else if (looksLikeSymbol(tok) && !new RegExp(`\\b${tok}\\b`).test(sourceText))
        add("WARN", "symbol", file, ln, tok, "not found in source");
    }

    // external refs in prose (inline code and link targets stripped)
    const prose = raw.replace(/(`+)[^`]*?\1/g, "").replace(/\]\([^)]*\)/g, "]");
    for (const m of prose.matchAll(/https?:\/\/[^\s)>\]]+/g))
      external.push({ kind: "url", ref: m[0].replace(/[.,;]+$/, ""), file, line: ln });
    for (const m of prose.matchAll(/(?:^|[\s(])([\w.-]+\/[\w.-]+)?#(\d+)\b/g))
      external.push({ kind: "github", ref: `${m[1] ?? ""}#${m[2]}`, file, line: ln });
    for (const m of prose.matchAll(/\b([A-Z][A-Z0-9]{1,9})-(\d+)\b/g))
      if (!NOT_TICKETS.has(m[1])) external.push({ kind: "jira", ref: m[0], file, line: ln });
  });
}

// --- orphans: docs not reachable from the entry points ------------------------

const seen = new Set();
const queue = ENTRY_POINTS.map((f) => join(ROOT, f)).filter(existsSync);
while (queue.length) {
  const f = queue.shift();
  if (seen.has(f)) continue;
  seen.add(f);
  for (const next of graph.get(f) ?? []) queue.push(next);
}
for (const f of mdFiles)
  if (!seen.has(f)) add("WARN", "orphan", f, 0, rel(f), "not reachable from CLAUDE.md/AGENTS.md/README.md via links");

// --- external refs -----------------------------------------------------------

function originRepo() {
  try {
    const url = execFileSync("git", ["remote", "get-url", "origin"], { encoding: "utf8" }).trim();
    return url.match(/github\.com[:/](.+?)(\.git)?$/)?.[1] ?? null;
  } catch {
    return null;
  }
}

async function checkUrl(url) {
  for (const method of ["HEAD", "GET"]) {
    try {
      const res = await fetch(url, { method, redirect: "follow", signal: AbortSignal.timeout(8000) });
      if (res.ok) return `ok ${res.status}`;
      if (method === "GET") return `HTTP ${res.status}`;
    } catch (e) {
      if (method === "GET") return `unverified: network error ${e.cause?.code ?? e.message}`;
    }
  }
}

function checkGithub(ref) {
  const [repoPart, num] = ref.split("#");
  const repo = repoPart || originRepo();
  if (!repo) return "unverified: no GitHub origin";
  try {
    const out = execFileSync("gh", ["api", `repos/${repo}/issues/${num}`, "--jq", ".state + \" \" + .title"], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    }).trim();
    return out;
  } catch {
    return "unverified: gh lookup failed";
  }
}

for (const e of external) {
  let detail = "unverified";
  if (ONLINE && e.kind === "url") {
    detail = await checkUrl(e.ref);
    if (detail.startsWith("HTTP")) {
      add("BROKEN", "url", e.file, e.line, e.ref, detail);
      continue;
    }
  } else if (ONLINE && e.kind === "github") {
    detail = checkGithub(e.ref);
  } else if (e.kind === "jira") {
    detail = "unverified: check ticket status manually";
  }
  add("VERIFY", e.kind, e.file, e.line, e.ref, detail);
}

// --- report ------------------------------------------------------------------

const reported = ONLY.length ? findings.filter((f) => ONLY.some((p) => f.file.startsWith(p))) : findings;
const counts = { BROKEN: 0, WARN: 0, VERIFY: 0 };
for (const f of reported) counts[f.severity]++;

if (JSON_OUT) {
  console.log(
    JSON.stringify({ scanned: mdFiles.map(rel), only: ONLY, docsPresent: DOCS_PRESENT, counts, findings: reported }, null, 2),
  );
} else {
  const scope = ONLY.length ? `, reporting only ${ONLY.join(", ")}` : "";
  console.log(
    `Scanned ${mdFiles.length} markdown files${scope}${DOCS_PRESENT ? "" : " (docs/ absent — docs refs skipped)"}\n`,
  );
  for (const sev of ["BROKEN", "WARN", "VERIFY"]) {
    const group = reported.filter((f) => f.severity === sev);
    if (!group.length) continue;
    console.log(`${sev} (${group.length})`);
    for (const f of group) {
      const loc = f.line ? `${f.file}:${f.line}` : f.file;
      console.log(`  [${f.kind}] ${loc}  ${f.ref}${f.detail ? `  — ${f.detail}` : ""}`);
    }
    console.log();
  }
  console.log(`Summary: ${counts.BROKEN} broken, ${counts.WARN} warn, ${counts.VERIFY} verify`);
}

process.exit(counts.BROKEN ? 1 : 0);
