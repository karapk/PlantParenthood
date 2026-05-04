# Source Control

Follow these conventions when performing any git or GitHub operations in this project.

## Branching

- Always branch from `main` unless told otherwise.
- Branch names must describe the work, not the tool or agent doing it.
  - Good: `feat/add-agents`, `fix/auth-validation`, `refactor/remove-msal`
  - Bad: `feat/add-claude-agents`, `feat/copilot-refactor`
  - Do NOT label branches as tool-specific (e.g. "claude", "copilot", "codex") unless explicitly instructed.
- Use the prefix that matches the change type — these mirror the Conventional Commits types already used for commit messages in `CLAUDE.md`:
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

### Workflow

1. Push the branch: `git push -u origin <branch>`
2. Create the PR: `gh pr create --title "..." --body "..."`
3. The CI pipeline will automatically post `@github-copilot review` on PR open/ready-for-review via `.github/workflows/copilot-review.yml`.
4. Wait for CI checks and the Copilot review before merging.
5. Address all review comments before merging (see PR review workflow in `CLAUDE.md`).
6. If substantial changes are pushed after the initial review, trigger a follow-up Copilot review manually:
   ```
   gh pr comment <pr-number> --body "@github-copilot review"
   ```

## What NOT to do

- Never force-push unless explicitly asked
- Never commit `.env.local` or files containing secrets
- Never use `--no-verify` to skip hooks
- Never amend a published commit
