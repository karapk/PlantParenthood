# Changelog — PlantParenthood

Tracks all meaningful changes to the project. Intended for project managers, team leads, and stakeholders.

Format per entry:
- **Type** — Security / Feature / Refactor / Fix / Chore / Test / CI / Docs
- **Risk** — Low / Medium / High
- **Status** — In Progress / In Review / Merged / Deployed
- **PR** — linked pull request
- **Tests** — coverage added or impacted

---

## [Unreleased] — In Review
> Branch: `refactor/remove-deprecated-code` → PR [#46](https://github.com/karapk/PlantParenthood/pull/46)
> Opened: 2026-04-23 | Author: Claude (AI) + kk

---

### SECURITY — Move hardcoded secrets to environment variables
- **Date:** 2026-04-22
- **Risk:** High (secrets were exposed in source history)
- **Files changed:** `src/pages/api/auth/login.js`, `src/pages/api/plantnet.js`, `.gitignore`, `.env.example`
- **Detail:** JWT signing secret (`550250`) and Trefle API key were hardcoded directly in source files and committed to git history. Both moved to `process.env` via `.env.local` (gitignored). `.env.example` added to document required variables for new developers.
- **Follow-up required:** Rotate the Trefle API key and generate a new strong JWT secret — the old values are in git history.

---

### FEATURE — Central environment config with fail-fast validation
- **Date:** 2026-04-23
- **Risk:** Low
- **Files changed:** `src/config/env.js`
- **Detail:** New `env.js` config module validates all required environment variables at startup. App fails immediately on boot with a clear error if any variable is missing, rather than silently failing at request time. All API routes now import from `env` instead of reading `process.env` directly.
- **Architectural decision:** Single source of truth for env vars. Adding a new variable requires updating `env.js` first — prevents undocumented env var sprawl.

---

### REFACTOR — Replace hardcoded plant data with Prisma database query
- **Date:** 2026-04-22
- **Risk:** Medium (changes API response shape)
- **Files changed:** `src/pages/api/plants.js`
- **Detail:** `/api/plants` was returning a static 220-line JavaScript array instead of querying the database. Replaced with a live Prisma query against the `Plants` table. Added optional `?type=indoor|outdoor` query parameter for filtering. Invalid type values now return 400 instead of silently returning all plants.
- **Note:** Response shape changed — fields now match the DB schema (`isOutdoor`, `imgURL`, `genus`, `description`) rather than the old hardcoded shape (`type`, `care`, `image_url`). Any client code consuming `/api/plants` will need to be updated.

---

### FIX — Input validation on user registration endpoint
- **Date:** 2026-04-22
- **Risk:** Low
- **Files changed:** `src/pages/api/auth/register.js`
- **Detail:** `POST /api/auth/register` accepted any input and returned a generic 500 for all failures including duplicate emails. Now validates: required fields (email + password), email format (regex), minimum password length (8 characters). Duplicate email now returns 409 with a clear message (Prisma error code P2002). Hashed password is no longer returned in the response (`select` field added).

---

### FIX — Copilot code review recommendations
- **Date:** 2026-04-23
- **Risk:** Low
- **Files changed:** `src/pages/api/auth/login.js`, `src/pages/api/plantnet.js`, `src/pages/api/plants.js`, `.gitignore`, `package.json`
- **Detail:** Six issues flagged by GitHub Copilot automated review on PR #46:
  1. `login.js` — unset `JWT_SECRET` caused cryptic 500; now uses central env config
  2. `plantnet.js` — missing `TREFLE_API_KEY` called Trefle with `token=undefined`; now uses central env config
  3. `plants.js` — unknown `?type` silently returned all plants; now returns 400
  4. `.gitignore` — redundant `.env.local` entry removed (`.env*.local` already covers it)
  5. `package.json` / `.nvmrc` — Node version not enforced; added `engines: { node: "20.x" }` and `.nvmrc`
  6. Test double-invocation bug fixed (see Tests section)

---

### CHORE — Remove duplicate bcrypt dependency
- **Date:** 2026-04-22
- **Risk:** Low
- **Files changed:** `package.json`, `package-lock.json`
- **Detail:** Both `bcrypt` (native C++ bindings) and `bcryptjs` (pure JS) were installed. Only `bcryptjs` was used in code. `bcrypt` removed — 39 packages eliminated from the dependency tree. `bcryptjs` is preferred for Next.js/edge compatibility.

---

### CHORE — Upgrade Next.js from 15.2.4 to 15.3.9
- **Date:** 2026-04-23
- **Risk:** Low–Medium
- **Files changed:** `package.json`, `package-lock.json`
- **Detail:** Vercel flagged Next.js 15.2.4 as containing a known vulnerability. Updated to 15.3.9 (latest stable 15.x patch). Node engine range changed from `>=20.19.0` to `20.x` to prevent Vercel auto-upgrading Node on future major releases. All 15 tests pass against the new version.

---

### TEST — Vitest testing infrastructure setup
- **Date:** 2026-04-22
- **Risk:** Low
- **Files changed:** `vitest.config.js`, `src/test/setup.js`, `package.json`
- **Detail:** No testing framework existed. Installed Vitest + React Testing Library + jest-dom. Config includes `@/` path alias to match Next.js. Scripts added: `npm test` (single run) and `npm run test:watch` (interactive).
- **Coverage:** 15 tests across 2 API routes — all passing.

---

### TEST — API route test suites
- **Date:** 2026-04-22–23
- **Risk:** Low
- **Files changed:** `src/__tests__/api/plants.test.js`, `src/__tests__/api/auth/register.test.js`
- **Detail:** Tests written for both modified API routes following AAA (Arrange / Act / Assert) pattern. Prisma and bcryptjs are mocked — tests do not touch the real database. Grouped by route then by concern (method validation, input validation, success, error handling).

| Route | Tests | Cases covered |
|---|---|---|
| `GET /api/plants` | 6 | No filter, indoor filter, outdoor filter, invalid type (400), wrong method (405), DB error (500) |
| `POST /api/auth/register` | 9 | Missing email, missing password, bad email format, short password, success, optional name, duplicate email (409), DB error (500), wrong method (405) |

---

### CI — GitHub Actions: run tests on every push
- **Date:** 2026-04-23
- **Risk:** Low
- **Files changed:** `.github/workflows/ci.yml`
- **Detail:** Workflow runs `npm test` on every push and pull request across all branches. Uses Node 20 with npm cache keyed to lockfile. `working-directory` set to `plantParentHood/` to match monorepo layout.

---

### CI — GitHub Copilot automated PR review
- **Date:** 2026-04-22
- **Risk:** Low
- **Files changed:** `.github/workflows/copilot-review.yml`
- **Detail:** Workflow automatically requests `copilot-pull-request-reviewer` on every non-draft PR when opened or marked ready for review. Requires GitHub Copilot enabled at the org/repo level.

---

### DOCS — CLAUDE.md project conventions file
- **Date:** 2026-04-22
- **Risk:** None
- **Files changed:** `CLAUDE.md`
- **Detail:** Created project conventions document covering: stack, project layout, development workflow, commit conventions (Conventional Commits), coding standards, database usage, known refactor targets, environment variable spec, auth architecture, testing conventions, and a pre-commit checklist. Intended as the source of truth for AI-assisted development and onboarding.

---

## Historical — Pre-Refactor (selected milestones)
> Pre-dates structured changelog. Reconstructed from git history.

| Date (approx.) | Change | PR |
|---|---|---|
| 2024–2025 | Azure B2C / MSAL setup (WIP — not completed) | — |
| 2024–2025 | User authentication — local JWT login + register | #44 |
| 2024–2025 | Chatbot integration (Botpress) | #40 |
| 2024–2025 | About Us page | #42 |
| 2024–2025 | PlantNet + Weather API integration | — |
| 2024–2025 | Contact Us page and API | — |
| 2024–2025 | Outdoor page with Prisma SSR | #28 |
| 2024–2025 | Plant search functionality | #39 |
| 2024–2025 | Navbar, Header, Footer components | #35, #16, #18 |
| 2024–2025 | Tailwind CSS installed | — |
| 2024–2025 | Prisma + SQLite database setup | — |
| 2024–2025 | Initial Next.js project bootstrap | — |

---

## Upcoming Work (Backlog)

| Priority | Item | Notes |
|---|---|---|
| High | `contactUS` API — implement actual email sending | Currently only `console.log`s — no email sent |
| High | Indoor page — replace stub with real Prisma query | Currently a Bootstrap card template with no data |
| High | Azure B2C / MSAL — complete auth integration | Libraries installed, `authConfig.js` exists, not wired up |
| Medium | Expand test coverage to remaining routes | `login.js`, `plantnet.js`, `contactUS.js` untested |
| Medium | Migrate to TypeScript | Incremental — start with new files |
| Low | Resolve mixed Tailwind + Bootstrap usage | Decide on one system or document boundaries |
| Low | Add rate limiting to auth endpoints | No protection against brute force currently |
