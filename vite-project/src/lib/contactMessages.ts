import { supabase } from './supabaseClient'

export type ContactMessageInput = {
  name: string
  email: string
  message: string
}

export type ContactMessageResult =
  | { ok: true }
  | { ok: false; reason: 'not-configured' | 'failed' }

export async function createContactMessage(
  input: ContactMessageInput,
): Promise<ContactMessageResult> {
  if (!supabase) {
    return { ok: false, reason: 'not-configured' }
  }

  const { error } = await supabase.from('messages').insert(input)

  return error ? { ok: false, reason: 'failed' } : { ok: true }
}
