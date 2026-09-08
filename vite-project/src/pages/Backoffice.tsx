import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/auth-context'
import { signOut } from '../lib/auth'

/**
 * Placeholder for the protected admin area. The contact-message management
 * interface is a later feature (F-08); this only proves the session and
 * sign-out flow. It renders only behind RequireAuth.
 */
function Backoffice() {
  const navigate = useNavigate()
  const { session } = useAuth()
  const [isSigningOut, setIsSigningOut] = useState(false)

  useEffect(() => {
    const previous = document.title
    document.title = 'Back office'
    return () => {
      document.title = previous
    }
  }, [])

  async function handleSignOut() {
    setIsSigningOut(true)
    await signOut()
    navigate('/login', { replace: true })
  }

  return (
    <main id="main-content" className="admin-shell">
      <section className="admin-card" aria-labelledby="backoffice-heading">
        <p className="eyebrow">Admin</p>
        <h1 id="backoffice-heading">Back office</h1>
        <p className="route-status">
          Signed in as {session?.user.email ?? 'the administrator'}.
        </p>
        <p className="route-status">
          The contact-message management interface is coming in a later feature.
        </p>
        <button type="button" onClick={handleSignOut} disabled={isSigningOut}>
          {isSigningOut ? 'Signing out…' : 'Sign out'}
        </button>
      </section>
    </main>
  )
}

export default Backoffice
