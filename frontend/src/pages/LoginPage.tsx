import { ArrowLeft } from 'lucide-react'
import { type FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useAuth } from '@/hooks/useAuth'

export function LoginPage() {
  const { user, login, register } = useAuth()
  const navigate = useNavigate()

  const [isRegister, setIsRegister] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  if (user) {
    navigate('/')
    return null
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      if (isRegister) {
        await register(email, password, passwordConfirm)
      } else {
        await login(email, password)
      }
      navigate('/')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-dvh bg-stone-950 flex flex-col items-center justify-center px-6 py-12 relative">
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse bg-violet-500/30"
          style={{ animationDuration: '6s' }}
        />
        <div
          className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full blur-3xl opacity-20 animate-pulse bg-amber-500/30"
          style={{ animationDuration: '8s', animationDelay: '1s' }}
        />
      </div>

      <div className="relative z-10 w-full max-w-sm">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 transition-colors mb-8 text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          back
        </Link>

        <h1 className="text-3xl font-serif text-white/90 mb-8">
          {isRegister ? 'Create Account' : 'Sign In'}
        </h1>

        {error && (
          <div
            role="alert"
            className="mb-6 rounded-lg bg-red-500/20 border border-red-500/30 px-4 py-3 text-red-200 text-sm"
          >
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-white/60 text-sm">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-white placeholder-white/30 focus:border-white/40 focus:outline-none transition-colors"
              placeholder="you@example.com"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="password" className="text-white/60 text-sm">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-white placeholder-white/30 focus:border-white/40 focus:outline-none transition-colors"
              placeholder="••••••••"
            />
          </div>

          {isRegister && (
            <div className="flex flex-col gap-1.5">
              <label htmlFor="passwordConfirm" className="text-white/60 text-sm">
                Confirm Password
              </label>
              <input
                id="passwordConfirm"
                type="password"
                required
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                className="rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-white placeholder-white/30 focus:border-white/40 focus:outline-none transition-colors"
                placeholder="••••••••"
              />
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-2 rounded-lg bg-white/10 border border-white/20 px-4 py-2.5 text-white font-medium hover:bg-white/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? '...' : isRegister ? 'Sign Up' : 'Sign In'}
          </button>
        </form>

        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => {
              setIsRegister(!isRegister)
              setError(null)
            }}
            className="text-white/50 hover:text-white/80 transition-colors text-sm"
          >
            {isRegister ? 'Sign in instead' : 'Create an account'}
          </button>
        </div>
      </div>
    </main>
  )
}
