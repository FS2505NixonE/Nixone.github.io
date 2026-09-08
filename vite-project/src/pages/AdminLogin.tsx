import {
  type ChangeEvent,
  type FormEvent,
  useEffect,
  useRef,
  useState,
} from 'react'
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom'
import { useAuth } from '../context/auth-context'
import { signIn } from '../lib/auth'
import { isSupabaseConfigured } from '../lib/supabaseClient'

type FieldName = 'email' | 'password'

// Only follow a same-origin path; anything else falls back to the back office.
function safeRedirect(raw: string | null): string {
  if (raw && raw.startsWith('/') && !raw.startsWith('//')) return raw
  return '/backoffice'
}

function AdminLogin() {
  const { status } = useAuth()
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const target = safeRedirect(params.get('redirect'))

  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState<string | null>(null)
  const [invalidField, setInvalidField] = useState<FieldName | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const isIncomplete = !form.email.trim() || !form.password

  useEffect(() => {
    const previous = document.title
    document.title = 'Admin sign in'
    return () => {
      document.title = previous
    }
  }, [])

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setError(null)
    setInvalidField(null)
  }

  function fail(field: FieldName, message: string) {
    setInvalidField(field)
    setError(message)
    if (field === 'email') emailRef.current?.focus()
    else passwordRef.current?.focus()
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)
    setInvalidField(null)

    const email = form.email.trim()
    const { password } = form

    if (!email || !password) {
      fail(!email ? 'email' : 'password', 'Please enter your email and password.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      fail('email', 'Please enter a valid email address.')
      return
    }

    setIsSubmitting(true)
    const result = await signIn(email, password)
    setIsSubmitting(false)

    if (result.ok) {
      navigate(target, { replace: true })
      return
    }

    setForm((current) => ({ ...current, password: '' }))
    if (result.reason === 'invalid') {
      setError('Invalid login credentials')
    } else if (result.reason === 'unavailable') {
      setError('Authentication is not available in this environment.')
    } else {
      setError('Could not sign in right now. Please try again.')
    }
  }

  if (status === 'loading') {
    return (
      <main id="main-content" className="admin-shell">
        <p className="route-status" role="status">
          Checking your session…
        </p>
      </main>
    )
  }

  if (status === 'authed') {
    return <Navigate to={target} replace />
  }

  return (
    <main id="main-content" className="admin-shell">
      <section className="admin-card" aria-labelledby="login-heading">
        <p className="eyebrow">Restricted</p>
        <h1 id="login-heading">Admin sign in</h1>

        {!isSupabaseConfigured && (
          <p className="form-hint" role="status">
            Authentication is not configured for this environment.
          </p>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor="login-email">Email</label>
          <input
            id="login-email"
            name="email"
            type="email"
            autoComplete="username"
            value={form.email}
            onChange={handleChange}
            ref={emailRef}
            required
            aria-invalid={invalidField === 'email' || undefined}
            aria-describedby={
              invalidField === 'email' ? 'login-feedback' : undefined
            }
          />

          <label htmlFor="login-password">Password</label>
          <input
            id="login-password"
            name="password"
            type="password"
            autoComplete="current-password"
            value={form.password}
            onChange={handleChange}
            ref={passwordRef}
            required
            aria-invalid={invalidField === 'password' || undefined}
            aria-describedby={
              invalidField === 'password' ? 'login-feedback' : undefined
            }
          />

          <button
            type="submit"
            disabled={isSubmitting || !isSupabaseConfigured || isIncomplete}
          >
            {isSubmitting ? 'Signing in…' : 'Sign in'}
          </button>

          {error && (
            <p id="login-feedback" role="alert" className="form-error">
              <span className="feedback-icon" aria-hidden="true">
                &#10005;
              </span>
              {error}
            </p>
          )}
        </form>
      </section>
    </main>
  )
}

export default AdminLogin
