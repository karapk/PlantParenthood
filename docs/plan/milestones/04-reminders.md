# Milestone 04: Reminders

## Goal

Send email and Telegram reminders for due and overdue plant care tasks, with user preferences and delivery tracking.

## Why This Matters

The app feels complete when it actively prompts the user instead of requiring them to remember to open the dashboard.

## In Scope

- Add notification preferences for email and Telegram.
- Add daily reminder digest behavior for due and overdue tasks.
- Add Telegram bot integration.
- Add email reminder integration.
- Add delivery logging for sent, skipped, and failed notifications.
- Add a scheduled endpoint suitable for Vercel Cron.
- Add settings UI for reminder channels and preferred reminder time.

## Out Of Scope

- SMS.
- Push notifications.
- Exact-time per-task alerts.
- Marketing emails.

## Current Repo State

- No reminder models exist.
- No scheduled job exists.
- No email provider is configured.
- Telegram is not configured.
- Care tasks are not available until milestone 03.

## Expected Implementation Direction

- Use a daily digest as the v1 reminder format.
- Default reminder time should be 8:00 AM in the user's configured timezone.
- Use Resend as the default email provider direction unless the owner chooses another provider before implementation.
- Store the Telegram bot token in environment variables; store each user's Telegram chat ID in database-backed notification preferences, with an optional env override only for single-user local development.
- Protect scheduled reminder execution with a `CRON_SECRET` style environment variable.
- Store notification delivery attempts so failures can be reviewed.
- Do not send duplicate reminders for the same user, channel, task set, and date.

## Acceptance Criteria

- A user can enable or disable email reminders.
- A user can enable or disable Telegram reminders.
- The scheduled reminder endpoint finds due and overdue tasks.
- Email reminders send a daily digest when enabled.
- Telegram reminders send a daily digest when enabled.
- Failed sends are logged without crashing the whole reminder run.
- Duplicate sends for the same reminder window are prevented.

## Tests Required

- Reminder endpoint rejects missing or invalid cron secret.
- Reminder query selects due and overdue tasks for opted-in users.
- Email provider is mocked in tests.
- Telegram provider is mocked in tests.
- Delivery failures are recorded.
- Duplicate delivery prevention is tested.
- Run `npm test` and `npm run lint`.

## Agent Handoff Notes

- Never commit provider tokens, bot tokens, chat IDs, or sender secrets.
- Keep provider-specific code behind small service modules.
- Make the scheduled route safe to call repeatedly.
- Document any new environment variables in `.env.example`.

## Dependencies And Follow-Ups

- Depends on `03-care-planning.md`.
- Weather-aware changes in `05-smarter-care.md` can influence future reminder language.
