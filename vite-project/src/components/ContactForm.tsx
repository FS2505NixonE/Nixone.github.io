import {
  type ChangeEvent,
  type FormEvent,
  useEffect,
  useRef,
  useState,
} from 'react'
import { createContactMessage } from '../lib/contactMessages'
import { isSupabaseConfigured } from '../lib/supabaseClient'

const initialForm = {
  name: '',
  email: '',
  message: '',
}

type FieldName = 'name' | 'email' | 'message'

function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [invalidField, setInvalidField] = useState<FieldName | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)

  const isIncomplete =
    !form.name.trim() || !form.email.trim() || !form.message.trim()

  // Success message auto-dismisses after a few seconds (it also clears on the
  // next field edit via handleChange).
  useEffect(() => {
    if (!success) return
    const timer = setTimeout(() => setSuccess(null), 5000)
    return () => clearTimeout(timer)
  }, [success])

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target
    setForm((currentForm) => ({ ...currentForm, [name]: value }))
    setError(null)
    setSuccess(null)
    setInvalidField(null)
  }

  function fail(field: FieldName, message: string) {
    setInvalidField(field)
    setError(message)
    if (field === 'name') nameRef.current?.focus()
    else if (field === 'email') emailRef.current?.focus()
    else messageRef.current?.focus()
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)
    setSuccess(null)
    setInvalidField(null)

    const name = form.name.trim()
    const email = form.email.trim()
    const message = form.message.trim()

    if (!name || !email || !message) {
      fail(
        !name ? 'name' : !email ? 'email' : 'message',
        'Please fill in all fields.',
      )
      return
    }

    if (name.length < 2) {
      fail('name', 'Please enter your name (at least 2 characters).')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      fail('email', 'Please enter a valid email address.')
      return
    }

    if (message.length < 10) {
      fail('message', 'Your message must be at least 10 characters.')
      return
    }

    setIsSubmitting(true)
    const result = await createContactMessage({ name, email, message })
    setIsSubmitting(false)

    if (result.ok) {
      setForm(initialForm)
      setSuccess('Thanks. Your message has been sent.')
      return
    }

    setError(
      result.reason === 'not-configured'
        ? 'Contact storage is not configured yet. Please use the email link instead.'
        : 'Your message could not be sent. Please try again later.',
    )
  }

  return (
    <section
      id="contact"
      className="portfolio-section contact-section"
      aria-labelledby="contact-heading"
    >
      <h2 id="contact-heading">Contact</h2>
      {!isSupabaseConfigured && (
        <p role="status">
          Supabase is not configured for this environment. The form is disabled until
          the local or deployment variables are provided.
        </p>
      )}
      <form onSubmit={handleSubmit} noValidate>
        <p className="form-hint">All fields are required.</p>

        <label htmlFor="contact-name">
          Name <span aria-hidden="true">*</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          value={form.name}
          onChange={handleChange}
          ref={nameRef}
          required
          aria-invalid={invalidField === 'name' || undefined}
          aria-describedby={
            invalidField === 'name' ? 'contact-feedback' : undefined
          }
        />

        <label htmlFor="contact-email">
          Email <span aria-hidden="true">*</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={handleChange}
          ref={emailRef}
          required
          aria-invalid={invalidField === 'email' || undefined}
          aria-describedby={
            invalidField === 'email' ? 'contact-feedback' : undefined
          }
        />

        <label htmlFor="contact-message">
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          ref={messageRef}
          required
          aria-invalid={invalidField === 'message' || undefined}
          aria-describedby={
            invalidField === 'message' ? 'contact-feedback' : undefined
          }
        />

        <button
          type="submit"
          disabled={isSubmitting || !isSupabaseConfigured || isIncomplete}
        >
          {isSubmitting ? 'Sending...' : 'Send message'}
        </button>

        {error && (
          <p id="contact-feedback" role="alert" className="form-error">
            <span className="feedback-icon" aria-hidden="true">
              &#10005;
            </span>
            {error}
          </p>
        )}
        {success && (
          <p role="status" className="form-success">
            <span className="feedback-icon" aria-hidden="true">
              &#10003;
            </span>
            {success}
          </p>
        )}
      </form>
    </section>
  )
}

export default ContactForm
