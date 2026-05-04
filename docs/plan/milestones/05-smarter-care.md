# Milestone 05: Smarter Care

## Goal

Improve care recommendations with weather-aware outdoor adjustments, recurring photo prompts, health logs, and external plant-care data enrichment.

## Why This Matters

Once the core care loop works, the app should become more helpful by adapting to the user's plant context and observations.

## In Scope

- Add optional user location for weather-aware outdoor care.
- Adjust outdoor watering guidance based on heat and precipitation.
- Ask for picture updates every two weeks.
- Add plant health logs driven by user observations.
- Track statuses such as healthy, needs water, overwatered, pests, yellowing, wilting, dormant, and unknown.
- Enrich plant records with external plant-care data where available.
- Show care insights based on recent care events and health logs.

## Out Of Scope

- Image-based diagnosis.
- Fully automated plant disease detection.
- Replacing user control with automatic schedule changes.
- Native mobile camera flow.

## Current Repo State

- A simple `Weather` component exists, but no weather-aware care logic exists.
- Trefle API route exists for plant data, but structured care enrichment is not part of the domain yet.
- No health log or recurring photo prompt models exist.

## Expected Implementation Direction

- Use a weather API suitable for server-side calls. Prefer no-key or low-friction services for v1 unless requirements change.
- Weather should suggest adjustments rather than silently overwrite user schedules.
- Add two-week photo update tasks through the care planning system.
- Store health logs as user-entered observations attached to a user plant.
- Keep external API enrichment cached or persisted enough to avoid repeated unnecessary calls.
- Clearly distinguish user-entered plant facts from external API facts.

## Acceptance Criteria

- Outdoor user plants can use location-aware weather context.
- The weekly plan can include biweekly photo update tasks.
- Users can log plant health observations.
- Plant detail pages show recent health history and care insights.
- External plant data failures do not block core care workflows.
- User-edited schedules remain authoritative.

## Tests Required

- Weather service success and failure paths are mocked.
- Outdoor watering guidance responds to precipitation/heat inputs.
- Photo update tasks appear on the expected cadence.
- Health log create/list behavior is scoped to the signed-in user.
- External API failures return graceful fallback behavior.
- Run `npm test` and `npm run lint`.

## Agent Handoff Notes

- Do not add image diagnosis in this milestone.
- Avoid making health claims stronger than the available user data supports.
- Keep insights explainable in plain language.
- Update milestone 03 docs if care-task behavior changes.

## Dependencies And Follow-Ups

- Depends on `03-care-planning.md`.
- Reminder language may be improved after `04-reminders.md`.
- More advanced plant identification can be planned after this milestone.
