# Phase 0 Cloud Project Prep

This document records the optional Phase 0.21 cloud setup work.

## Vercel

Status: PARTIAL PASS

Created Vercel project shell:

- Scope: `jonathansminigameparty`
- Project name: `bite-open-card-draw`
- Project ID: `prj_ErtnAKr3XvY7Ud3ftaNvyIDkzI5k`
- Root directory: `.`
- Node.js version: `24.x`
- Framework preset: `Other`

Notes:

- The framework preset is expected to remain `Other` until Phase 1 scaffolds the Next.js app.
- No Vercel environment variables were set during Phase 0.
- No `.vercel/` directory was committed.
- Link the local project and set framework/build settings after Phase 1 creates the app scaffold.

Commands run:

```bash
rtk vercel whoami
rtk vercel teams ls
rtk vercel project list --scope jonathansminigameparty
rtk vercel project inspect bite-open-card-draw --scope jonathansminigameparty
rtk vercel project add bite-open-card-draw --scope jonathansminigameparty
rtk vercel project inspect bite-open-card-draw --scope jonathansminigameparty
```

## Supabase

Status: READY FOR MANUAL SECRET STEP

Supabase CLI access works through `npx`:

```bash
rtk npx supabase --version
rtk npx supabase orgs list
rtk npx supabase projects list
```

Current observed Supabase organization:

- Organization name: `jfung9021's Org`

Current observed Supabase projects:

- `jonathans-minigame-party` in `us-east-2`

No new Supabase project was created during this step because project creation requires a database password and region decision.

When creating the project, do not paste the database password, service-role key, or session secret into chat or committed files.

Recommended project values:

- Project name: `bite-open-card-draw`
- Region: choose the region closest to the tournament venue and expected players.
- Instance size: use the smallest suitable free-tier-conscious size unless production needs require otherwise.

Values to save privately after project creation:

```text
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
Database password
```

Do not add real values to Git. Add them to `.env.local` only after Phase 1 scaffolds the app, or set them in Vercel project settings when deployment work begins.

## Manual Phase 0 Work Remaining

- Decide whether to create the Supabase project now or wait until Phase 2 database work.
- Choose the Supabase region based on the tournament venue.
- Create and save the Supabase database password in a private password manager.
- Retrieve Supabase URL, anon key, and service-role key from the Supabase dashboard after project creation.
- Store production/staging environment variables in Vercel project settings later; do not commit them.
- Link the Vercel project to the local repo after Phase 1 creates the Next.js app.
- Create or designate a `main` branch on GitHub if you want pull requests into `main`; currently the remote only has `phase/00-setup`.
- Review the GitHub warning about `public/brand/tournament-logo.png` being larger than 50 MB and decide in Phase 1 or Phase 3 whether to replace it with an optimized committed asset or use external controlled storage.
