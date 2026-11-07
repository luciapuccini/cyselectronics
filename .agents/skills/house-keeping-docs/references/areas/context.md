# Context (layer 1, project)

`CONTEXT.md` holds the project's shared vocabulary, locked-in visual rules (R1–R4), tokens, page layout topology, and i18n setup. Most of it links straight into `src/`, so it's the area that goes stale fastest after a refactor.

## Contents

- Module taxonomy: atoms, molecules, organisms, and routes under `src/components/` and `src/routes/`.
- Design-system vocabulary: named primitives with links to their files.
- Visual rules R1–R4 (locked-in), tokens, layout topology, and EN/ES internationalisation.

## How an agent reaches it

`AGENTS.md` tells every agent to read `CONTEXT.md` before exploring. For project questions it's the first file opened after layer 0.

## Checking it with check-refs

```bash
node .agents/skills/house-keeping-docs/check-refs.mjs --only CONTEXT.md
```

- Every BROKEN link usually means a moved or deleted component. Trace it with `git log --follow` or `git log -S`.
- Every WARN symbol, such as a primitive named in backticks, must exist in `src/`.

## Gotchas

- **Locked-in rules are content, not references.** If a rule names a component that no longer exists, flag it to the maintainer. Don't rewrite the rule.
- Some names are mentioned on purpose as removed (for example, legacy radius tokens). Mark those lines with `refcheck:ignore` rather than deleting them.
- Removing a primitive from the vocabulary list is a content change. Confirm with the maintainer when the code removal looks deliberate (check the commit message).
