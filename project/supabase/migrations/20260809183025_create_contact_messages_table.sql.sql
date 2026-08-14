/*
# Create contact_messages table

1. New Tables
- `contact_messages`
  - `id` (uuid, primary key)
  - `name` (text, not null) - the sender's full name
  - `email` (text, not null) - the sender's email address
  - `subject` (text, not null) - the message subject
  - `message` (text, not null) - the message body
  - `created_at` (timestamptz, defaults to now())
  - `is_read` (boolean, defaults to false) - tracks whether the message has been read

2. Security
- Enable RLS on `contact_messages`.
- This is a single-tenant no-auth portfolio site, so any visitor can submit a message.
- INSERT is allowed for anon + authenticated (so visitors can send messages without signing in).
- SELECT, UPDATE, DELETE are not exposed — only the portfolio owner would read these, which happens through the Supabase dashboard.

3. Important Notes
- The contact form on the portfolio writes to this table via the anon key.
- No user_id or auth relationship is needed since this is a public contact form.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  is_read boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages"
  ON contact_messages FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
