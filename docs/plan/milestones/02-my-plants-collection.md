# Milestone 02: My Plants Collection

## Goal

Add the user's personal plant collection, separate from the global plant catalog, with photos, placement, and basic care preferences.

## Why This Matters

The current app can show catalog plants, but it cannot represent "my snake plant in the living room." Personal plants are the core object that schedules, reminders, health logs, and photos attach to.

## In Scope

- Add a user-owned plant model linked to `User`.
- Allow optional linking to a global `Plants` catalog record.
- Support custom plant name, common name, scientific name, placement type, room/location notes, light notes, pot notes, and active/inactive state.
- Support an initial plant photo.
- Build protected APIs for listing, creating, updating, and deleting user plants.
- Build a basic "My Plants" page and add/edit flow.
- Keep indoor/outdoor/patio as placement metadata on the user's plant.

## Out Of Scope

- Automated plant identification from images.
- Reminder delivery.
- Full care task generation.
- Advanced photo history.
- Weather-aware care adjustments.

## Current Repo State

- Global `Plants` model exists.
- `User` model exists.
- There is no model for plants owned by a user.
- Login persistence is not complete until milestone 01.
- Indoor and Outdoor pages are catalog-style pages, not user collection pages.

## Expected Implementation Direction

- Add a `UserPlant` concept with ownership enforced by authenticated user ID.
- Add a `PlantPhoto` concept if photo history is needed immediately; otherwise store one primary photo on the user plant and add history in milestone 05.
- Use Cloudinary as the default image storage direction for v1 uploaded photos unless the owner chooses another provider before implementation.
- Validate required fields on create: at minimum display name and placement type.
- All user plant APIs must require authentication and scope queries by `userId`.
- The UI should focus on the user's collection first, not marketing content.

## Acceptance Criteria

- A signed-in user can add a plant to their collection.
- A signed-in user can see only their own plants.
- A signed-in user can edit and delete only their own plants.
- A plant can include a photo and placement details.
- API routes validate inputs and return appropriate 400, 401, 404, and 500 responses.
- Tests do not hit the real database.

## Tests Required

- Create user plant requires authentication.
- Create user plant validates required fields.
- List user plants returns only records owned by the current user.
- Update/delete rejects plants owned by another user.
- UI smoke tests for the collection page and add flow if practical.
- Run `npm test` and `npm run lint`.

## Agent Handoff Notes

- Keep the global `Plants` catalog intact.
- Do not overload the existing `Plants` model with user-specific fields.
- Prefer Tailwind for new collection UI.
- Avoid adding care schedule fields directly onto the user plant if they belong to milestone 03.

## Dependencies And Follow-Ups

- Depends on `01-accounts-and-sessions.md`.
- Unlocks `03-care-planning.md`.
- Photo prompt history expands in `05-smarter-care.md`.
