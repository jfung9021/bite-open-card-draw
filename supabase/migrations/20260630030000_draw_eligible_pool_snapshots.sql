alter table public.draws
  add column if not exists eligible_chart_ids uuid[] not null default '{}'::uuid[],
  add column if not exists excluded_chart_keys_snapshot text[] not null default '{}'::text[],
  add column if not exists selected_song_keys_snapshot text[] not null default '{}'::text[],
  add column if not exists same_round_blocked_song_keys_snapshot text[] not null default '{}'::text[];

comment on column public.draws.eligible_chart_ids is
  'Immutable chart IDs that were eligible for this draw or reroll replacement at decision time.';
comment on column public.draws.excluded_chart_keys_snapshot is
  'Chart exclusion keys applied before this draw decision.';
comment on column public.draws.selected_song_keys_snapshot is
  'Selected prior song keys blocked before this draw decision.';
comment on column public.draws.same_round_blocked_song_keys_snapshot is
  'Same-round song keys blocked before this draw decision.';
