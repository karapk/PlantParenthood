# Milestone 06: Polish And Deploy

## Goal

Prepare PlantParenthood for real personal use on Vercel with a responsive interface, production database, release documentation, and clean setup flow.

## Why This Matters

The owner wants to use the app personally first, then potentially show it as a polished project. Deployment and UX polish make the product usable beyond local development.

## In Scope

- Improve mobile responsiveness for core flows.
- Clean up navigation around dashboard, My Plants, weekly plan, and settings.
- Prepare Vercel deployment.
- Move production data from SQLite to hosted Postgres.
- Document local setup, deployment setup, and required environment variables.
- Add seed/demo data that does not include secrets or personal data.
- Update changelog and release workflow.

## Out Of Scope

- Azure production migration.
- Native mobile app.
- Public marketing site.
- Paid subscription features.

## Current Repo State

- App currently uses SQLite.
- Vercel is the likely first deployment target.
- UI mixes Tailwind and Bootstrap.
- README is minimal.
- The app is not yet organized around the weekly care dashboard.

## Expected Implementation Direction

- Use hosted Postgres for production, with Prisma handling the provider change.
- Keep local development simple and documented.
- Prefer Tailwind for new and revised UI.
- Preserve Bootstrap only where removing it would create unnecessary churn.
- Treat the weekly plan as the first signed-in screen.
- Add clear deployment docs for Vercel environment variables and database setup.

## Acceptance Criteria

- Core screens work on mobile and desktop widths.
- Production database setup is documented and tested.
- Vercel build succeeds.
- README explains local development and deployment.
- Changelog reflects completed milestones.
- No secret values are committed.

## Tests Required

- Run `npm test`.
- Run `npm run lint`.
- Run `npm run build`.
- Verify core flows manually in a browser: register/login, add plant, view weekly plan, complete care task, reminder settings.
- If available, capture screenshots for desktop and mobile review.

## Agent Handoff Notes

- Do not start a broad visual redesign before core flows are complete.
- Keep the app practical and work-focused, not a marketing landing page.
- Document any deployment limitations clearly.
- If Azure deployment planning begins, create a new milestone rather than mixing it into Vercel launch.

## Dependencies And Follow-Ups

- Depends on milestones 00 through 04 for MVP launch.
- Can run partly in parallel with `05-smarter-care.md` if deployment work avoids care-logic changes.
