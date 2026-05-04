# Milestone 00: Foundation Cleanup

## Goal

Prepare the repo for focused MVP development by removing abandoned Azure B2C work from the active path, clarifying environment configuration, and cleaning dependency/project drift.

## Why This Matters

Future milestones depend on stable local auth, predictable dependencies, and clear deployment assumptions. Cleaning this up first prevents agents from building new features around unused Azure B2C code or mismatched package state.

## In Scope

- Preserve the current Azure B2C/MSAL work on a separate branch before removing it from `main`.
- Remove Azure B2C/MSAL dependencies and unused config from the active app path.
- Update project docs so local JWT auth is the v1 authentication path.
- Clarify required environment variables in `.env.example`.
- Resolve obvious package drift, especially Prisma package version mismatch.
- Keep `contactUS` and `Indoor` page as known backlog items unless directly touched for cleanup.
- Confirm the app still installs, lints, builds, and tests after cleanup.

## Out Of Scope

- Replacing local JWT auth.
- Adding user-owned plants.
- Adding reminders.
- Migrating the database to Postgres.
- Rebuilding the UI.

## Current Repo State

- App root is `plantParentHood/`.
- `@azure/msal-browser` and `@azure/msal-react` are installed.
- `src/authConfig.js` exists but is not wired into the active auth flow.
- Local auth routes exist at `src/pages/api/auth/login.js` and `src/pages/api/auth/register.js`.
- `@prisma/client` and `prisma` versions are not aligned.
- `CLAUDE.md`, `AGENTS.md`, and `CHANGELOG.md` describe Azure B2C as in progress.

## Expected Implementation Direction

- Create an archive branch for Azure B2C work before deleting active files from the main development branch.
- Remove MSAL packages from `package.json` and regenerate the lockfile.
- Delete or archive Azure-only source files from the active app tree.
- Update docs to describe local JWT auth as the v1 auth strategy.
- Keep environment docs limited to required v1 values: database URL, JWT secret, Trefle API key, and later provider placeholders.
- Align Prisma CLI/client versions to the same major version.

## Acceptance Criteria

- Azure B2C work is preserved on a branch or otherwise recoverable from git history.
- Active app docs no longer tell implementers to complete Azure B2C for v1.
- `npm install` or `npm ci` succeeds from `plantParentHood/`.
- `npm test` passes.
- `npm run lint` passes or any existing lint blocker is documented.
- No real secrets or credential values are committed.

## Tests Required

- Existing API tests pass.
- Add or update tests only if cleanup changes behavior.
- Run `npm test`.
- Run `npm run lint`.

## Agent Handoff Notes

- Do not implement new auth behavior in this milestone.
- Do not remove local JWT auth.
- If Azure files are deleted, mention the preservation branch in the PR description.
- Update `CHANGELOG.md` under `[Unreleased]` when this milestone is implemented.

## Dependencies And Follow-Ups

- Unlocks `01-accounts-and-sessions.md`.
- Hosted database migration is deferred to `06-polish-and-deploy.md`.
