import { createContext, useEffect, useState, type ReactNode } from 'react'

import { type AuthUser, getAuthUser, login, register, logout, onAuthChange } from '@/api-client'

export type AuthContextType = {
  user: AuthUser | null
  login: (email: string, password: string) => Promise<void>
  register: (email: string, password: string, passwordConfirm: string) => Promise<void>
  logout: () => void
}

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(getAuthUser)

  useEffect(() => {
    return onAuthChange(setUser)
  }, [])

  async function handleLogin(email: string, password: string) {
    await login(email, password)
    setUser(getAuthUser())
  }

  async function handleRegister(email: string, password: string, passwordConfirm: string) {
    await register(email, password, passwordConfirm)
    setUser(getAuthUser())
  }

  function handleLogout() {
    logout()
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{ user, login: handleLogin, register: handleRegister, logout: handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  )
}
