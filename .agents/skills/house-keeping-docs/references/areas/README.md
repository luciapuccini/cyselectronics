# Docs area map

An inventory of every documentation area an agent navigates. The skill uses it to decide what to check and what counts as fixed. Humans can use it as the docs-health checklist.

There is one file per area. Shared conventions live in this README, and the cross-area probe queries are in a single file at the end.

## Progressive-disclosure layers

| Layer | Area | Role |
| ----- | ---- | ---- |
| 0, always loaded | [router](router.md) | Routes to the layer 1 indexes and the skills index. |
| 1, entry indexes | [context](context.md), [research-docs](research-docs.md) | Vocabulary and maps: one-line summary plus link per concept. |
| 2, topic docs | [research-docs](research-docs.md) sub-folders | One topic per file; a folder index lists its children. |
| 3, source | `src/**`, config files | Ground truth that the docs link to. |

The ideal path for a query is 0 → 1 → 2 → 3, opening one file per layer. If a query needs a grep before it finds an entry point, an index is missing or stale.

## Baseline preconditions

- Run from the repo root. `docs/` is gitignored, so on a fresh clone it's absent and the scanner skips refs into it.
- Scan offline first. Use `--online` only when the network is reachable; network errors stay VERIFY, not BROKEN.
- Fix one area at a time with `--only <prefix>`, then re-run the full scan.
- Don't touch content outside the four areas below. The source code is only read here, never edited.

## Index rules

- **One index per folder.** Each folder's `README.md` lists every child as a link plus a one-line "what it is / when to read it".
- **No orphans.** Every doc can be reached from layer 0 by following links. Backticked paths count as links for reachability.
- **Link, don't describe.** Point at a path, not "the atom in the atoms folder". Links can be checked; prose can't.
- **Relative links.** Resolve them from the linking file so they survive a clone anywhere.
- **Symbols in backticks must exist.** A renamed component in backticks is stale even without a link.
- **External refs carry state.** Note an issue's or ticket's status, or remove it once closed.
- **Keep layers 0 and 1 thin.** Move detail down a layer, because every query pays for a long entry file.

## Proof and skip reporting

The area file defines what to check. A broken reference is fixed when the scanner no longer reports it **and** the link points to the right target, not just any existing file. Suffix matching can make shorthand like `en.ts` resolve to the wrong file, so spot-check those.

When a check can't run, name it, say what blocked it (network, `gh`, Jira credentials, a missing `docs/`), and run the closest check that remains.

## Full sweep

Walk this map top to bottom, then finish with `probes.md`.

1. [router](router.md): `CLAUDE.md` → `AGENTS.md`, the layer 0 router and skills index.
2. [context](context.md): `CONTEXT.md`, the project vocabulary, locked-in rules, and links into `src/`.
3. [research-docs](research-docs.md): `docs/`, the maintainer's personal research folder and its indexes. This is the primary target.
4. [skills](skills.md): `.agents/skills/*/SKILL.md` and their reference files.
5. [probes](probes.md): cold-agent probe queries that cross layers, plus the prompt template. Always walk this last.

## Entry contract

Every area file uses the same four H2s:

1. `Contents` <!-- refcheck:ignore -->
2. `How an agent reaches it`
3. `Checking it with check-refs`
4. `Gotchas` <!-- refcheck:ignore -->
