import { type ChangeEvent, type FormEvent, useState } from 'react'
import { createContactMessage } from '../lib/contactMessages'
import { isSupabaseConfigured } from '../lib/supabaseClient'

const initialForm = {
  name: '',
  email: '',
  message: '',
}

function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target
    setForm((currentForm) => ({ ...currentForm, [name]: value }))
    setStatus(null)
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus(null)

    if (form.name.trim().length < 2) {
      setStatus('Please enter your name.')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setStatus('Please enter a valid email address.')
      return
    }

    if (form.message.trim().length < 10) {
      setStatus('Your message must be at least 10 characters.')
      return
    }

    setIsSubmitting(true)
    const result = await createContactMessage({
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
    })
    setIsSubmitting(false)

    if (result.ok) {
      setForm(initialForm)
      setStatus('Thanks. Your message has been sent.')
      return
    }

    setStatus(
      result.reason === 'not-configured'
        ? 'Contact storage is not configured yet. Please use the email link instead.'
        : 'Your message could not be sent. Please try again later.',
    )
  }

  return (
    <section aria-labelledby="contact-heading">
      <h2 id="contact-heading">Contact</h2>
      {!isSupabaseConfigured && (
        <p role="status">
          Supabase is not configured for this environment. The form is disabled until
          the local or deployment variables are provided.
        </p>
      )}
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="contact-name">Name</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="contact-email">Email</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={isSubmitting || !isSupabaseConfigured}>
          {isSubmitting ? 'Sending...' : 'Send message'}
        </button>
        {status && <p role="status">{status}</p>}
      </form>
    </section>
  )
}

export default ContactForm
