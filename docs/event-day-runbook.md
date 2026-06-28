# Event-Day Runbook

Use this checklist on the event machine before players arrive and before every round.

## Before the Event

- Run `npm run lint`, `npm run typecheck`, `npm run test`, and `npm run build` on the release branch.
- Confirm production environment variables are set in Vercel and not committed to Git.
- Confirm Supabase migrations are applied.
- Run `npm run import:charts` and confirm required pools have at least 7 eligible charts.
- Run `npm run cache:chart-images` before the event, or `npm run cache:chart-images -- --fallback-only` for a local fallback manifest.
- Confirm chart artwork is cached locally or has fallback cards.
- Confirm the tournament logo renders correctly.
- Confirm the admin password hash and session secret are configured.
- Confirm the player roster has been imported and reviewed.
- Run a complete four-round rehearsal using `docs/rehearsal-runbook.md`.
- Reset rehearsal data and confirm `Tournament mode` before importing or using real event data.

## Stage Laptop Checklist

- Open `/stage` in the browser used for projector/stream capture.
- Confirm the tournament logo is visible.
- Confirm the current round number is correct.
- Confirm chart card titles fit at projector resolution.
- Confirm the timer and QR panel are readable from the room.
- Disable browser UI or use fullscreen if the venue setup expects it.

## Projector / Stream Capture Checklist

- Confirm the capture source sees the full `/stage` viewport.
- Confirm no admin route, private CSV, or browser address bar is visible in the capture.
- Confirm the final two-chart screen is framed and readable.
- Confirm no extreme flashing or unreadable shake is visible during reveal animations.

## QR Readability Checklist

- Open `/room` from the QR destination.
- Confirm the room page offers `I am a player voting` and `View charts only`.
- Scan from at least two phones.
- Confirm cellular and venue Wi-Fi both work if available.

## Phone Testing Checklist

- Open `/vote` from a player phone.
- Confirm the dropdown label is exactly `Select your start.gg username`.
- Submit a test ballot during rehearsal.
- Confirm editing works until voting closes.
- Confirm phones show the closed/revealing message before final reveal.
- Confirm phones show selected charts first after final reveal.

## Admin Laptop Checklist

- Open `/coolguy69`.
- Log in with the shared admin password.
- Take host control.
- Confirm the page shows `Tournament mode`.
- Confirm current round is correct.
- Confirm active roster count is correct.
- Keep the admin laptop off the projector/stream capture.

## Host Lock Checklist

- Confirm only the intended host has active control.
- Confirm other admin browsers are read-only.
- Keep the host browser open so heartbeat continues.
- If the host laptop fails, wait for lock expiry or deliberately take over from the backup admin laptop.

## Host Setup

- Open `/coolguy69`.
- Log in with the shared admin password.
- Click `Take Host Control`.
- Confirm the host lock heartbeat is active.
- Open `/stage` on the projector display.
- Open `/room` and verify the QR destination works on a phone.

## Round Flow

For each round:

- Draw both chart sets.
- Confirm both sets have 7 charts.
- Open voting.
- Monitor turnout without exposing chart-by-chart counts publicly.
- Pause voting only if the event needs a temporary stop.
- Close voting through the normal timer or admin controls.
- Reveal results on stage.
- Confirm phones do not show results before stage reveal finishes.
- Confirm the final two selected charts are visible together.

## After the Final Reveal

- Confirm the private ballot CSV auto-downloads.
- Use the manual `Download private ballot CSV` button if needed.
- Store the private CSV somewhere appropriate for tournament records.
- Confirm the private CSV file name includes the round number.
- Do not publish player-level ballot data unless explicitly approved.

## Private CSV Download Location Checklist

- Confirm the browser download folder before the event.
- After each final reveal, confirm the CSV appears in that folder.
- Move or copy the CSV to the tournament records location.
- Do not store rehearsal CSV files with real tournament records.

## Emergency Notes

- Dangerous actions must summarize the change and require admin password re-entry.
- Manual ballots and overrides must be auditable.
- If a real secret is exposed, rotate it before continuing.
- If the website fails, pause and fix the website unless the tournament director explicitly decides on an outside-the-app fallback.
