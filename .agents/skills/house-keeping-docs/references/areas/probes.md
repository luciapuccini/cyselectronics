# Probes

Fixed queries that cross layers, used to measure how easy the docs are to navigate. Per-area details live in the linked files, and the baseline preconditions in [the area-map README](README.md) apply. Always run these last.

Keep probe queries **stable**, because a query is only comparable with its own history. If you change one, give it a new id (Q1 → Q1b) and start a new baseline row for it in `runs/log.md`.

## Q1: project context

> Where is the Spanish site copy defined, and what makes it available to components? Give the file paths.

- **Expected:** `src/content/es.ts` (typed by `src/content/types.ts`); `LanguageContext` / `useLanguage()` in `src/context/LanguageContext.tsx`; the provider is mounted in `src/index.tsx`.
- **Ideal path:** router → [context](context.md) → answer. About 1–2 turns.

## Q2: research docs

> In the maintainer's research docs, which decision record covers the ES/EN language switcher? Give its path.

- **Expected:** `docs/adr/0003-native-es-en-language-switcher.md`
- **Ideal path:** `docs/README.md` → the decision-record folder index → the file ([research-docs](research-docs.md)). About 2–3 turns. Without indexes, expect a directory listing or grep first.

## Running a probe

Use one fresh subagent per query. Use `general-purpose`, with the same type and model on every run, and never a fork. Replace `{QUERY}` in the prompt below. Take **turns** from the subagent's `tool_uses`. If none is reported, count its FILES OPENED.

```text
You are a navigation probe. Answer the question below using the repository
at the current working directory.

Rules:
- Explore with progressive disclosure: start from the entry files already
  loaded (CLAUDE.md / AGENTS.md), follow the most relevant index link
  (CONTEXT.md for project questions, docs/README.md for research-doc
  questions), and open only what you need. For this probe, docs/ is in scope.
- Prefer following links over searching. Search only if no index points
  the way.
- Stop as soon as you can answer.

Question: {QUERY}

Reply in exactly this format:
ANSWER: <answer with file paths>
FILES OPENED: <ordered list of every file or directory you read or listed>
SEARCHES: <number of grep/glob/find calls you made>
DEAD ENDS: <files you opened that didn't help, or "none">
```

## Gotchas

- A subagent gets the copy of `CLAUDE.md` / `AGENTS.md` that was loaded when the parent session started, so router edits made during the run don't show up until a new session. Note this in the log when the router changed.
- Q2 depends on `docs/` being present. On a machine without it, skip Q2 and say so.
- If the expected answer itself drifted (a file moved), update the expected answer and start a new baseline for that query.
