# Source Control

Follow these conventions when performing any git or GitHub operations in this project.

## Branching

- Always branch from `main` unless told otherwise.
- Branch names must describe the work, not the tool or agent doing it.
  - Good: `feat/add-agents`, `fix/auth-validation`, `refactor/remove-msal`
  - Bad: `feat/add-claude-agents`, `feat/copilot-refactor`
  - Do NOT label branches as tool-specific (e.g. "claude", "copilot", "codex") unless explicitly instructed.
- Use the prefix that matches the change type:
  - `feat/` — new feature or capability
  - `fix/` — bug fix
  - `refactor/` — code restructure without behavior change
  - `chore/` — tooling, config, dependencies
  - `docs/` — documentation only
  - `test/` — tests only

## Commits

Follow Conventional Commits as defined in `CLAUDE.md`:
- Format: `<type>(<scope>): <short summary>`
- Imperative mood, max 72 chars, no trailing period
- One logical change per commit
- Every commit must leave the codebase in a working state

## Pull Requests

- PR title should match the branch intent, short and imperative
- PR body must include a summary of changes and a test plan
- Never push directly to `main`
- Delete the remote branch after merging

## What NOT to do

- Never force-push unless explicitly asked
- Never commit `.env.local` or files containing secrets
- Never use `--no-verify` to skip hooks
- Never amend a published commit
