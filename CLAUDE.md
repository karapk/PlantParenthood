# Project: PlantParenthood

A full-stack plant care web app built with Next.js. Users can browse indoor/outdoor plants, identify plants via the Trefle API, and manage accounts. Azure B2C auth is in-progress.

## Stack

- **Language:** JavaScript (Next.js pages router — no TypeScript yet)
- **Framework:** Next.js 15 (pages router), React 18
- **Styling:** Tailwind CSS + Bootstrap 5 (both are used — prefer Tailwind for new code)
- **ORM:** Prisma 6 with SQLite (`prisma/dev.db`)
- **Auth:** Local JWT (bcryptjs + jsonwebtoken) + Azure B2C via MSAL (WIP)
- **External APIs:** Trefle plant API (via `/api/plantnet`)
- **HTTP Client:** axios
- **Package manager:** npm
- **Testing:** Vitest + React Testing Library + jest-dom

## Project Layout

```
PlantParenthood/
└── plantParentHood/          ← main app (run all commands from here)
    ├── src/
    │   ├── pages/
    │   │   ├── api/          ← API route handlers
    │   │   │   ├── auth/     ← login.js, register.js
    │   │   │   ├── plants.js
    │   │   │   ├── plantnet.js
    │   │   │   └── contactUS.js
    │   │   ├── Indoor/
    │   │   ├── Outdoor/
    │   │   └── plantnet/
    │   ├── components/       ← React components
    │   ├── server/
    │   │   └── prisma.js     ← Prisma singleton (always import from here)
    │   └── authConfig.js     ← Azure B2C / MSAL config
    └── prisma/
        ├── schema.prisma
        └── seed.js
```

## Development Workflow

- Work inside `plantParentHood/` — that is the Next.js root
- Always create a feature branch: `git checkout -b feat/feature-name`
- Run dev server: `npm run dev`
- Lint before committing: `npm run lint`
- DB changes: edit `prisma/schema.prisma` → `npm run db:push` → `npm run db:seed`
- Never commit directly to `main`

## Commit Conventions

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <short summary>
```

**Types:**
- `feat` — new feature
- `fix` — bug fix
- `refactor` — code change that is neither a fix nor a feature
- `chore` — dependency updates, config, tooling
- `docs` — documentation only
- `test` — adding or updating tests

**Rules:**
- Commit early and often — one logical change per commit
- Summary line: imperative mood, max 72 chars, no period (`fix: remove hardcoded JWT secret`)
- Never bundle unrelated changes into one commit
- Each commit should leave the codebase in a working state

## NPM Scripts

```
npm run dev            → start dev server
npm run build          → prisma generate + next build
npm run lint           → ESLint
npm run db:push        → push schema changes to SQLite
npm run db:studio      → open Prisma Studio
npm run db:seed        → seed the database
npm run prisma:generate → regenerate Prisma client
```

## Database Models (Prisma)

- **Plants** — id, name, genus, description, isOutdoor, imgURL
- **User** — id (UUID), email (unique), name, password (hashed), createdAt, updatedAt

Always import Prisma from `@/server/prisma` (singleton), never instantiate `new PrismaClient()` directly.

## Coding Standards

- JavaScript (not TypeScript) — migrate incrementally if desired
- camelCase for variables/functions, PascalCase for React components
- Path alias `@/` maps to `src/` — use it instead of relative imports
- Prefer Tailwind CSS for new UI; avoid adding more Bootstrap where Tailwind can do the job
- No hardcoded secrets, API keys, or credentials in source files — use `.env.local`
- Keep API route handlers thin — move logic to a service function if it grows beyond ~40 lines

## Known Issues to Fix (Refactor Targets)

These are the main things to address during refactoring:

1. **Hardcoded JWT secret** in `src/pages/api/auth/login.js` (`"550250"`) → move to `JWT_SECRET` env var
2. **Hardcoded Trefle API key** in `src/pages/api/plantnet.js` → move to `TREFLE_API_KEY` env var
3. **`/api/plants` returns hardcoded data** instead of querying Prisma → replace with a DB query
4. **`contactUS` API** only `console.log`s — no email sending implemented
5. **Indoor page** is a stub/template with no real data
6. **Azure B2C / MSAL** integration is incomplete — `authConfig.js` and MSAL libraries installed but not wired up
7. **bcrypt and bcryptjs both installed** — consolidate on one (prefer `bcryptjs` for pure-JS compatibility with Next.js edge)
8. **No tests** — add a testing framework (Vitest + React Testing Library recommended for Next.js)
9. **Mixed Tailwind + Bootstrap** — decide on one or document which to use where

## Environment Variables

Required in `.env.local` (never `.env` for secrets):

```
DATABASE_URL="file:./dev.db"
JWT_SECRET=<strong-random-secret>
TREFLE_API_KEY=<your-trefle-key>
```

Azure B2C values belong in `.env.local` once that integration is completed.

## Auth Architecture

- Local auth: `POST /api/auth/register` and `POST /api/auth/login`
  - Passwords hashed with bcryptjs
  - JWT returned on login (currently 1hr expiry, secret must come from env)
- Azure B2C: in progress — MSAL browser/react libraries are installed, config in `src/authConfig.js`

## What NOT to Do

- Never commit `.env.local` or any file containing real secrets
- Never instantiate `new PrismaClient()` outside of `src/server/prisma.js`
- Never return raw database errors to the client
- Never skip input validation on API route handlers
- Never add Bootstrap components where Tailwind already handles it cleanly
- Never leave `console.log` statements in production paths
- Never skip writing tests — every API route change needs a corresponding test

## Testing Conventions

- Framework: Vitest + React Testing Library
- Test location: `src/__tests__/<mirror of src path>` (e.g. `src/__tests__/api/plants.test.js`)
- Naming: `*.test.js`
- Pattern: **AAA** — Arrange / Act / Assert, one behaviour per `it`
- `it` descriptions read as a sentence: `'returns 400 when email is missing'`
- Group with `describe` by route/component, then by concern (validation, success, errors)
- Mock Prisma and external services — tests must not hit the real database
- Reset mocks in `beforeEach` with `vi.clearAllMocks()`
- Run tests before every commit: `npm test`

## Before Finishing a Task

- [ ] `npm run lint` passes with no errors
- [ ] No hardcoded secrets introduced
- [ ] Prisma schema updated and pushed if models changed
- [ ] API routes validate inputs and return proper HTTP status codes
- [ ] Commit message is clear and describes the why, not just the what
