import { type ReactNode, useEffect, useState } from 'react'
import { getSession, onAuthChange } from '../lib/auth'
import { AuthContext, type AuthState } from './auth-context'

/**
 * Loads the persisted Supabase session once on mount and keeps it in sync via
 * onAuthStateChange, so the guard and login page can react without each doing
 * their own network call. `status` stays 'loading' until the first check ends.
 */
export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AuthState>({
    status: 'loading',
    session: null,
  })

  useEffect(() => {
    let active = true

    getSession().then((session) => {
      if (!active) return
      setState({ status: session ? 'authed' : 'anon', session })
    })

    const unsubscribe = onAuthChange((session) => {
      setState({ status: session ? 'authed' : 'anon', session })
    })

    return () => {
      active = false
      unsubscribe()
    }
  }, [])

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>
}
