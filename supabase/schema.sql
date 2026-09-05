-- Run this script in Supabase Dashboard > SQL Editor.
-- The browser only receives the publishable/anon key; RLS protects the table.

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(trim(name)) between 2 and 100),
  email text not null check (char_length(trim(email)) between 3 and 254),
  message text not null check (char_length(trim(message)) between 10 and 5000),
  created_at timestamptz not null default timezone('utc', now())
);

alter table public.contact_messages enable row level security;

create policy "Anyone can submit a contact message"
on public.contact_messages
for insert
to anon, authenticated
with check (true);

create policy "Only the admin can read contact messages"
on public.contact_messages
for select
to authenticated
using ((auth.jwt() ->> 'email') = 'admin@codeboxx.com');

create policy "Only the admin can update contact messages"
on public.contact_messages
for update
to authenticated
using ((auth.jwt() ->> 'email') = 'admin@codeboxx.com')
with check ((auth.jwt() ->> 'email') = 'admin@codeboxx.com');

create policy "Only the admin can delete contact messages"
on public.contact_messages
for delete
to authenticated
using ((auth.jwt() ->> 'email') = 'admin@codeboxx.com');

revoke all on table public.contact_messages from anon, authenticated;
grant insert on table public.contact_messages to anon, authenticated;
grant select, update, delete on table public.contact_messages to authenticated;
