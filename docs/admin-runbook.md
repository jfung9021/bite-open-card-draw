# Admin Runbook

Phase 4 provides the first operational admin route at `/coolguy69`.

Implemented now:

- shared password login
- HTTP-only signed admin session cookie
- 30-minute session max age
- host lock with heartbeat
- roster add, bulk import, active/inactive toggle, and restore
- duplicate active start.gg username blocking
- emergency current-round eligibility form with password re-entry and audit reason
- chart draw controls for all round sets
- reroll one chart, one set, or one round with password re-entry and audit reason
- current-round controls
- rehearsal mode start/reset with disposable test roster
- rehearsal forced tiebreak seeding
- voting open, pause, resume, and close controls
- manual ballot overrides with password re-entry and audit reason
- result computation and reveal controls
- private CSV auto/manual download

## Required Admin Rules

- Use one shared admin password.
- Store only `ADMIN_PASSWORD_HASH`, never a plaintext password.
- Use the supported local hash format `scrypt:v1:<salt_hex>:<hash_hex>`.
- Set HTTP-only admin session cookies after login.
- Expire sessions after inactivity.
- Require password re-entry for dangerous actions.
- Show a clear action summary before a dangerous action password prompt.
- Keep tournament-changing actions server-side.
- Use the host lock so only one active host controls the tournament.

## Dangerous Actions

Dangerous actions include:

- rerolling a set
- rerolling a round
- replacing a chart
- reopening voting
- manually entering a ballot
- overwriting an existing ballot
- adding an inactive player back into the current round
- overriding a result
- resetting a round

## Current Phase Notes

The Phase 11 implementation still uses server-only in-memory operational stores because Supabase
credentials/tooling are not wired into runtime mutations yet. This keeps all mutations server-side
for local testing and rehearsal, but persistence must move to Supabase tables before multi-instance
or serverless event use.
