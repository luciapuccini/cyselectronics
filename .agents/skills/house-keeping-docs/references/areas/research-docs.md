# Research docs (layers 1–2, primary target)

`docs/` is the maintainer's personal research and documentation folder. It's gitignored and not project context for normal tasks, but it's this skill's main target.

## Contents

- `docs/README.md`: the layer 1 index. Create it if it's missing; it lists every sub-folder and top-level doc.
- One sub-folder per topic (for example decision records or agent notes), each with its own `README.md` index.
- Docs that reference code paths, symbols, URLs, issues, and tickets. These are what goes stale.

## How an agent reaches it

Only through this skill, or when the maintainer points to a file. `AGENTS.md` tells normal agents not to read it. A probe agent enters via `docs/README.md`, then follows the folder index, then the doc.

## Checking it with check-refs

```bash
node .agents/skills/house-keeping-docs/check-refs.mjs --only docs/
```

- BROKEN: paths into `src/` that moved or were removed, links between docs, and anchors.
- WARN orphans: any doc not linked from an index. Add a one-line entry to its folder's `README.md`.
- WARN symbols: decision records often describe code that was later replaced. Flag these, don't rewrite them.

## Gotchas

- No git history. `git log --follow` doesn't work for files inside `docs/`, so find moved docs by searching `docs/` for the file name or title.
- Decision records are historical. A record describing a superseded approach is valid content. Fix its links, or add a short `(superseded by …)` note when the maintainer agrees, but keep the body.
- Creating `README.md` indexes is in scope. Deleting or merging docs needs the maintainer's approval.
- Scheduled runs only report on this folder and never edit it.
