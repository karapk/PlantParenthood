# PlantParenthood Project Brain

This file is the shared product brain for Codex, Claude, Copilot, and human maintainers. Read it when starting a new planning or implementation session, when product intent is unclear, or when a milestone brief references the brain directly.

For day-to-day implementation, prefer the active milestone file in `docs/plan/milestones/` plus the project conventions in `CLAUDE.md` or `AGENTS.md`. This keeps agent context small and avoids re-reading the whole roadmap for every ticket.

## Product Vision

PlantParenthood helps casual plant owners know how to care for each plant before it becomes a problem. The product should feel like a practical weekly plant-care assistant: users add their plants, get a care plan, and receive reminders for watering, nutrients, rotation, photos, and other recurring care.

The first real tester is the project owner. Build for personal usefulness first, then polish toward portfolio-quality public usage.

## Primary User

- Casual plant owners who want help keeping plants alive.
- Users who know what plant they own, but need help with recurring care.
- Users who want reminders and a simple weekly plan more than advanced plant science.

## MVP Definition

The app is MVP-complete when a user can:

- Create an account and stay signed in.
- Save their personal plant collection.
- Add a plant photo and basic placement details.
- Receive recommended care schedules that can be edited.
- View a weekly plan for watering, feeding, rotation, pruning, repotting, pest checks, and photo updates.
- Mark care tasks complete, skipped, or snoozed.
- See a user-driven plant health status.
- Receive Telegram and email reminders for due or overdue care.

## V1 Non-Goals

- Azure B2C authentication.
- Image-based plant identification.
- Native mobile app.
- Social/community features.
- Perfect botanical data coverage.
- SMS reminders.

Plant identification can return later as a separate milestone. For v1, the user is expected to know the plant they are adding.

## Product Defaults

- Treat indoor and outdoor plants as placement choices for a user's plant, not as completely separate products.
- Use placement values such as `indoor`, `outdoor`, and `patio` so the same catalog plant can be cared for differently by context.
- Outdoor care should eventually consider weather and location.
- Indoor care should emphasize room/location, light notes, humidity notes, pot size, and rotation.
- Care recommendations should be editable by the user.
- User decisions should override generated recommendations.
- Prefer a weekly dashboard and daily reminder digest before exact-time notifications.

## Architecture Defaults

- App root: `plantParentHood/`.
- Framework: Next.js pages router with React 18.
- Language: JavaScript, not TypeScript yet.
- Styling: Tailwind CSS for new UI. Avoid adding new Bootstrap patterns.
- ORM: Prisma.
- Current local database: SQLite.
- Deployment target: Vercel first, Azure later.
- Production database target: hosted Postgres before public Vercel deployment.
- Auth: local JWT auth only for v1.
- External plant data: use external APIs for enrichment, but store user-specific care data locally.
- Prisma imports: always import from `@/server/prisma`.
- Secrets: use `.env.local` locally and documented names in `.env.example`; never commit real values.

## Agent Workflow

- Codex owns planning, architecture review, and final code review.
- Claude owns feature implementation branches when assigned.
- Copilot reviews pull requests after code is pushed to GitHub.
- Claude addresses review comments.
- Codex performs final review before merge.

Every coding assignment should point to one milestone file and define acceptance criteria. Avoid giving agents broad instructions like "build reminders" without the active milestone context.

## Reading Rules For Agents

- Starting a new phase: read this file and the next milestone brief.
- Implementing a task: read only the active milestone brief, project conventions, and relevant code.
- Reviewing a PR: read the milestone brief, the changed files, tests, and `CHANGELOG.md`.
- Updating scope: update the relevant milestone brief first, then update this brain only if the product direction changes.

## Milestone Map

1. `00-foundation-cleanup.md` - remove abandoned Azure B2C from main, clean dependencies, clarify env and deployment direction.
2. `01-accounts-and-sessions.md` - make local auth persistent and protect user-owned APIs.
3. `02-my-plants-collection.md` - add user-owned plants, photos, placement, and collection UI.
4. `03-care-planning.md` - add schedules, generated tasks, weekly plan, and care history.
5. `04-reminders.md` - add email and Telegram reminders with delivery tracking.
6. `05-smarter-care.md` - add weather-aware outdoor care, photo prompts, health logs, and API enrichment.
7. `06-polish-and-deploy.md` - improve responsive UX, prepare Vercel, migrate production DB, and document release flow.

## Current Repo Snapshot

- Local register/login APIs exist.
- JWT is returned from login, but session persistence is not complete.
- Global `Plants` catalog exists in Prisma.
- User-owned plant collection does not exist yet.
- Care schedules, care history, reminders, photos, and health logs do not exist yet.
- `/api/plants` is backed by Prisma and has tests.
- `contactUS` only logs form data.
- `Indoor` page is a placeholder.
- Azure B2C/MSAL files and dependencies exist but are not wired into the main user flow.

## Decision Log

- 2026-05-04: MVP should focus on correct care data, accounts, user plant collection, weekly care planning, and reminders.
- 2026-05-04: Azure B2C should be preserved off-main and removed from the active v1 path.
- 2026-05-04: Plant image identification is a later feature, not part of MVP.
- 2026-05-04: Use one shared product brain plus milestone briefs to reduce agent token usage.
