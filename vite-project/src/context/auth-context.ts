import type { Session } from '@supabase/supabase-js'
import { createContext, useContext } from 'react'

export type AuthState = {
  /** 'loading' until the initial session check resolves. */
  status: 'loading' | 'authed' | 'anon'
  session: Session | null
}

export const AuthContext = createContext<AuthState>({
  status: 'loading',
  session: null,
})

export function useAuth(): AuthState {
  return useContext(AuthContext)
}
