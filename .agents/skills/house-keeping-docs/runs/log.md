# Run log

Add one row per query per run, newest at the bottom. The latest `after` value
for a query is the baseline for the next run.

Capped at 100 lines. When a run pushes the file past that, rewrite it with this
header plus only that run's rows. Older history is dropped on purpose.

- **turns**: the subagent's tool calls before it answered
- **ok**: whether the answer matched the expected answer
- **refs**: the BROKEN count from `check-refs.mjs`

| date | commit | agent / model | query | turns before | turns after | ok | refs before | refs after | notes |
| ---- | ------ | ------------- | ----- | ------------ | ----------- | -- | ----------- | ---------- | ----- |
