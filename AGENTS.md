## Agent guide

### Domain context

Read `CONTEXT.md` at the repo root before exploring. It's the project's shared vocabulary and locked-in rules. Name things with its terms; if a concept you need is missing, add it to `CONTEXT.md` rather than inventing a synonym.

`docs/` ([index](docs/README.md)) is the maintainer's personal research folder (gitignored). It is not project context; don't read it for rules or conventions.

### Skills

Project skills live in `.agents/skills/<name>/SKILL.md`. Before starting a task, check the index below; if one matches, read its `SKILL.md` and follow it.

#### Skills index

| Skill | Use when |
| ----- | -------- |
| [house-keeping-docs](.agents/skills/house-keeping-docs/SKILL.md) | **Manual / scheduled only.** Run only when a human asks for it or a scheduled maintenance job invokes it. Don't pick it up during other tasks. |
