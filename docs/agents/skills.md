# Skills

How project skills are stored, discovered, and written in this repo.

## Where skills live

```
.agents/skills/            ← canonical location (committed)
└── <skill-name>/
    ├── SKILL.md           ← required: frontmatter + instructions
    └── ...                ← optional: scripts, references, templates
```

- **`.agents/skills/`** is the single source of truth. It's the cross-agent convention (Codex, Cursor, Copilot, Gemini CLI and others look here).
- Discovery goes through the **Skills index** in `AGENTS.md` (which `CLAUDE.md` imports): read the index, then open the matching `SKILL.md` before starting the task.
- Claude Code only auto-discovers skills (and exposes `/skill-name`) from `.claude/skills/`. That isn't wired up yet; when it is, it should point at `.agents/skills/` rather than hold copies.

## SKILL.md format

```markdown
---
name: skill-name
description: What it does and when to use it. Triggers on "phrase a", "phrase b".
---

# Skill Name

Step-by-step instructions the agent follows once the skill is loaded.
```

- **`name`**: kebab-case, identical to the directory name. Becomes the `/skill-name` slash command in Claude Code.
- **`description`**: the *only* thing an agent sees before deciding to load the skill, so it carries discovery. Say what the skill does **and** when to use it, including the words a user would actually type (Spanish and English when relevant to this project). Keep it to a sentence or three.
- Optional Claude Code frontmatter: `disable-model-invocation: true` (only runs when the user types `/skill-name`, for side-effecting workflows like deploys), `allowed-tools`, `argument-hint`.

## Writing good skills

- One job per skill. Split if the description needs "and also".
- Keep `SKILL.md` short. Move long references into sibling files and link them by relative path so they're read only when needed.
- Use the vocabulary from `CONTEXT.md` and respect `docs/adr/` (see `docs/agents/domain.md`).
- Reference repo commands from `package.json` (`npm run dev`, `npm run build`, `npm run type-check`) rather than restating them differently.

## Adding a skill (checklist)

1. Create `.agents/skills/<name>/SKILL.md` with `name` + `description` frontmatter.
2. Add a row to the **Skills index** in `AGENTS.md`.
3. Start a new agent session and check it picks the skill up from the index.
