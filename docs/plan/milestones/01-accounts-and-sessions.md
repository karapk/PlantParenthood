# Milestone 01: Accounts And Sessions

## Goal

Make local authentication reliable for real use by adding persistent sessions, authenticated user lookup, logout, and protected API helpers.

## Why This Matters

The app cannot support personal plant collections or reminders until it can identify the signed-in user consistently across page refreshes and API requests.

## In Scope

- Keep local email/password auth with bcryptjs and JWT.
- Store the auth token in an HTTP-only cookie instead of relying on UI-only state.
- Add a server auth helper for protected API routes.
- Add `GET /api/me` to return the current user without exposing password data.
- Add logout behavior that clears the auth cookie.
- Update login/register UI so the navbar reflects persisted session state.
- Add tests for login validation, `/api/me`, logout, and protected-route helper behavior.

## Out Of Scope

- Azure B2C.
- OAuth/social login.
- Password reset.
- Email verification.
- Role-based access control.

## Current Repo State

- `POST /api/auth/register` validates input and creates users.
- `POST /api/auth/login` returns a JWT but does not return full user data.
- `_app.js` keeps user state in memory only.
- Refreshing the page loses the displayed user.
- No shared protected API helper exists yet.

## Expected Implementation Direction

- Add a server-side helper that reads the auth cookie, verifies the JWT with `env.jwtSecret`, fetches the user, and returns a safe user object.
- Change login to set an HTTP-only cookie and return safe user data.
- Use a cookie name such as `plant_parent_token`.
- Use a practical v1 expiration such as 7 days.
- Add `POST /api/auth/logout` to clear the cookie.
- Add `GET /api/me` for session hydration.
- Keep API handlers thin; move repeated auth logic into `src/server/`.
- The client should hydrate user state from `/api/me` on app load.

## Acceptance Criteria

- A user can log in, refresh the page, and remain recognized.
- A user can log out and no longer access protected APIs.
- Auth responses never include password hashes.
- Invalid or expired cookies return 401 from protected APIs.
- Existing register behavior still works.
- Tests cover success and failure paths.

## Tests Required

- Login returns 401 for invalid credentials.
- Login sets the cookie and returns safe user data for valid credentials.
- `/api/me` returns 401 with no valid session.
- `/api/me` returns the safe user with a valid session.
- Logout clears the cookie.
- Existing register tests still pass.
- Run `npm test` and `npm run lint`.

## Agent Handoff Notes

- Prefer small auth helper functions over repeating JWT verification in each route.
- Keep cookie settings centralized so production security flags can be adjusted in one place.
- Do not introduce Azure auth or client-side token storage in this milestone.

## Dependencies And Follow-Ups

- Depends on `00-foundation-cleanup.md`.
- Unlocks protected user-owned APIs in `02-my-plants-collection.md`.
