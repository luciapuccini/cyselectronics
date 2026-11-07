---
name: house-keeping-docs
description: "Audit and repair stale references (paths, symbols, links, URLs, GitHub issues, Jira keys) in docs/ and the context .md files, and benchmark how many turns a cold agent needs to answer fixed probe queries. Manual or scheduled maintenance only: run it when a human invokes it or a controlled scheduled job (e.g. weekly) calls it, never on your own initiative during other tasks."
disable-model-invocation: true
allowed-tools: Bash(node .agents/skills/house-keeping-docs/check-refs.mjs:*) Bash(git log:*) Bash(gh api:*) Agent Edit(.agents/skills/house-keeping-docs/runs/log.md) Write(.agents/skills/house-keeping-docs/runs/log.md)
---

# House-keeping docs

Keep documentation pointing at things that exist, and prove it got easier to navigate. A run succeeds when the scanner reports **zero BROKEN** and the probe queries take **no more turns** than the last logged run.

`node .agents/skills/house-keeping-docs/check-refs.mjs --help` lists flags, severities, and examples.

## Pick a flow

Check [runs/log.md](runs/log.md) first.

- **First run** (log has no rows): the "before" probe sets the baseline. Still finish every step; before and after together become the first log rows.
- **Routine** (a human invoked it): the full flow. Fix references and indexes, and ask before deleting any doc content.
- **Scheduled** (an unattended job invoked it): report only. Probe, scan, and log; propose fixes in the report but don't edit `docs/` or the context files.

Every flow runs in this order: **probe → scan → fix → index pass → probe → log**. Don't skip the first probe; without it you can't show the cleanup helped.

## Quick start

```bash
# 1. baseline probe: one fresh cold subagent per query in references/areas/probes.md
# 2. scan everything (offline), then with network checks
node .agents/skills/house-keeping-docs/check-refs.mjs
node .agents/skills/house-keeping-docs/check-refs.mjs --online
# 3–4. fix, one area at a time
node .agents/skills/house-keeping-docs/check-refs.mjs --only docs/
node .agents/skills/house-keeping-docs/check-refs.mjs --only CONTEXT.md
# 5. re-probe with the same queries, subagent type, and model
# 6. append rows to runs/log.md, then rotate it if it's over 100 lines
```

## Command surface

`--help` is canonical. Categories:

- **Scan:** default run (offline), `--online` (URLs and GitHub issue state)
- **Scope:** `--only <prefix>` (repeatable; orphan detection still sees the whole set)
- **Output:** human-readable by default, `--json` for diffing runs
- **Silence:** `refcheck:ignore` anywhere on a line skips it

Severities: **BROKEN** (always fix), **WARN** (missing symbol, orphan doc), **VERIFY** (external ref; check by hand if `--online` couldn't).

## Proof bar

A run counts only when a skeptical reviewer could check it from the report.

- Both probes ran in **fresh cold subagents**, never forks: a fork inherits your context and skews the turn count. Use the same subagent type and model before and after.
- Turns come from the subagent's usage report (`tool_uses`). Each turn delta is backed by the subagent's "files opened" list.
- The final scanner output shows **0 BROKEN**, or names every leftover with the reason it stays.
- Every WARN is either fixed or explained.
- `runs/log.md` has one new row per probe, and every flow writes it, scheduled runs included.
- **Log rotation:** the log is capped at **100 lines**. After appending, re-read it (Read shows line numbers). If it's over 100, rewrite it to keep the header (everything above the table rows) plus only the rows from the run you just finished, which are the baseline for the next run. Say in the report that the log was rotated.
- **Skip reporting:** name every check that couldn't run and what blocked it, such as no network for `--online`, `gh` unavailable, or Jira needing credentials.

Turn counts are noisy: treat ±1 as no change. A real regression is a query that got slower with the same accuracy. Find the step in "files opened" where the subagent hit a dead end, and fix the index that sent it there.

## Fixing conventions

- Fix **references and indexes only**. Don't rewrite what a doc says; the maintainer owns `docs/` content.
- **Moved or renamed file:** if the target is tracked (anything in `src/`), find it with `git log --follow --name-status -- <old-path>` or `git log --diff-filter=R --summary`. `docs/` is gitignored and has no history, so find moved docs files by searching `docs/` for the file name or title.
- **Renamed or removed symbol:** `git log -S<Symbol> --oneline` finds the commit; use the new name, or drop the reference if it's gone.
- **Deleted for good:** remove the reference. If the surrounding sentence depends on it, flag it instead of rewording.
- **Closed issue or done ticket:** drop it, or mark it `(resolved)` when the history matters.
- **Dead URL:** look for a replacement; otherwise flag it.
- Link, don't describe. Every folder gets an index, and every doc is reachable from one. The rules are in [references/areas/README.md](references/areas/README.md).

## Area map

The docs inventory lives in [`references/areas/`](references/areas/). For a full sweep, walk its README top to bottom and finish with `probes.md`. Each area file uses the same four H2s: `Contents`, `How an agent reaches it`, `Checking it with check-refs`, `Gotchas`. <!-- refcheck:ignore -->

