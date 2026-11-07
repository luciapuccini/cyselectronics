# Router (layer 0)

`CLAUDE.md` and `AGENTS.md`: the files every agent has loaded before its first tool call. Their only job is routing.

## Contents

- `CLAUDE.md`: a single `@AGENTS.md` import, so Claude Code loads the shared guide.
- `AGENTS.md`: points to `CONTEXT.md` as project context, marks `docs/` as personal, and holds the skills index (one row per skill in `.agents/skills/`).

## How an agent reaches it

Automatically. Claude Code loads `CLAUDE.md` at session start and follows the import; other agents read `AGENTS.md` by convention. A running session keeps the copy it loaded at start, so edits only show up in new sessions.

## Checking it with check-refs

```bash
node .agents/skills/house-keeping-docs/check-refs.mjs --only CLAUDE.md --only AGENTS.md
```

- The `@AGENTS.md` import resolves.
- Every skills-index row links to a `SKILL.md` that exists, and every skill folder has a row.
- `AGENTS.md` stays under about 40 lines. Routing only; detail belongs in `CONTEXT.md` or a skill.

## Gotchas

- The scanner checks links but not index completeness. Compare `ls .agents/skills` with the index rows by hand.
- A skill marked manual or scheduled only must say so in its index row. Agents follow any row whose "Use when" matches their task.
- `.claude/skills` may be a symlink to `.agents/skills`. Never index both paths.
