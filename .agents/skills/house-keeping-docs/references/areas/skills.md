# Skills

`.agents/skills/<name>/` holds the project skills, including this one. A skill's docs reference its own scripts and reference files, so they drift when a skill is restructured.

## Contents

- `SKILL.md` per skill: frontmatter (`name` matches the folder; `description` is the only discovery text) and the workflow.
- Bundled scripts and `references/` files, linked from their `SKILL.md`.

## How an agent reaches it

Through the skills index in `AGENTS.md`, or as a native skill when `.claude/skills` links here. The `description` and the index row decide whether an agent picks a skill up.

## Checking it with check-refs

```bash
node .agents/skills/house-keeping-docs/check-refs.mjs --only .agents/
```

- Every file a skill bundles is linked from its `SKILL.md` or from a reference index (no orphans).
- Command examples point at script paths that exist.
- `name` matches the folder name.

## Gotchas

- The scanner skips fenced code blocks, so bash examples aren't checked automatically. Run each script's `--help` to confirm the path still works.
- Example links in reference docs (placeholders like `[name](path)`) need `refcheck:ignore` on the same line.
- `allowed-tools` and `disable-model-invocation` only take effect for skills Claude Code loads natively (from `.claude/skills`).
