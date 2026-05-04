# Milestone 03: Care Planning

## Goal

Add recommended but editable care schedules and a weekly plan that shows what each user needs to do for their plants.

## Why This Matters

This is the heart of the product promise: users should know when to water, feed, rotate, inspect, prune, repot, and photograph each plant.

## In Scope

- Add care schedule data for each user plant.
- Support care types: watering, nutrients, rotation, pruning, repotting, pest check, and photo update.
- Generate upcoming care tasks from schedules.
- Build a weekly plan view with due, overdue, upcoming, completed, skipped, and snoozed states.
- Let users mark tasks complete, skip them, or snooze them.
- Store care history so future recommendations can improve.
- Allow users to adjust schedule cadence.

## Out Of Scope

- Sending reminders.
- Weather-aware adjustments.
- Plant identification.
- Complex recommendation engine.

## Current Repo State

- No care schedule, care task, or care history models exist.
- No weekly dashboard exists.
- Existing catalog data has basic descriptions but no structured care cadence.

## Expected Implementation Direction

- Add concepts for `CareSchedule`, `CareTask`, and `CareEvent`.
- Care schedules belong to a user plant and define care type, cadence, next due date, and enabled/disabled state.
- Care tasks represent actionable due work generated from schedules.
- Care events represent user actions such as completed, skipped, or snoozed.
- Generate tasks for a rolling window, such as the next 14 days, when schedules change or the weekly plan is requested.
- Start recommendations with simple defaults and external plant-care enrichment where available; user edits take precedence.

## Acceptance Criteria

- A user plant can have schedules for all MVP care types.
- The app can show the current week of care tasks for the signed-in user.
- Completing a task records history and advances the next due date.
- Skipping or snoozing a task is reflected in the weekly plan.
- Disabled schedules do not generate active tasks.
- Users cannot view or mutate another user's care data.

## Tests Required

- Schedule creation validates care type and cadence.
- Weekly plan returns only the current user's tasks.
- Completing a task creates a care event and updates future due work.
- Snoozing a task changes its due date without deleting history.
- Disabled schedules are ignored.
- Run `npm test` and `npm run lint`.

## Agent Handoff Notes

- Keep task generation deterministic and easy to test.
- Avoid hidden background jobs in this milestone; reminder delivery comes later.
- Build the UI around the weekly plan, not a dense calendar.
- Keep recommendation logic separate from API route handlers.

## Dependencies And Follow-Ups

- Depends on `02-my-plants-collection.md`.
- Unlocks `04-reminders.md`.
- Weather and health-informed recommendations expand in `05-smarter-care.md`.
