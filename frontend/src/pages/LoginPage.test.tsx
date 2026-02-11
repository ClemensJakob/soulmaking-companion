import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'

import { AuthProvider } from '@/contexts/AuthContext'
import { LoginPage } from './LoginPage'

vi.mock('@/api-client', () => ({
  getAuthUser: vi.fn(() => null),
  isAuthenticated: vi.fn(() => false),
  login: vi.fn(),
  register: vi.fn(),
  logout: vi.fn(),
  onAuthChange: vi.fn(() => vi.fn()),
}))

function renderLoginPage() {
  return render(
    <MemoryRouter>
      <AuthProvider>
        <LoginPage />
      </AuthProvider>
    </MemoryRouter>,
  )
}

test('renders login form by default', () => {
  renderLoginPage()

  expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
  expect(screen.getByLabelText(/^password$/i)).toBeInTheDocument()
  expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument()
})

test('does not show password confirm field in login mode', () => {
  renderLoginPage()

  expect(screen.queryByLabelText(/confirm password/i)).not.toBeInTheDocument()
})

test('can switch to register mode', async () => {
  const user = userEvent.setup()
  renderLoginPage()

  await user.click(screen.getByRole('button', { name: /create an account/i }))

  expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument()
  expect(screen.getByRole('button', { name: /sign up/i })).toBeInTheDocument()
})

test('can switch back to login mode', async () => {
  const user = userEvent.setup()
  renderLoginPage()

  await user.click(screen.getByRole('button', { name: /create an account/i }))
  await user.click(screen.getByRole('button', { name: /sign in instead/i }))

  expect(screen.queryByLabelText(/confirm password/i)).not.toBeInTheDocument()
  expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument()
})

test('calls login with email and password on submit', async () => {
  const { login } = await import('@/api-client')
  const user = userEvent.setup()
  renderLoginPage()

  await user.type(screen.getByLabelText(/email/i), 'test@example.com')
  await user.type(screen.getByLabelText(/^password$/i), 'secret123')
  await user.click(screen.getByRole('button', { name: /sign in/i }))

  expect(login).toHaveBeenCalledWith('test@example.com', 'secret123')
})

test('calls register with email, password and confirm on submit', async () => {
  const { register } = await import('@/api-client')
  const user = userEvent.setup()
  renderLoginPage()

  await user.click(screen.getByRole('button', { name: /create an account/i }))

  await user.type(screen.getByLabelText(/email/i), 'new@example.com')
  await user.type(screen.getByLabelText(/^password$/i), 'secret123')
  await user.type(screen.getByLabelText(/confirm password/i), 'secret123')
  await user.click(screen.getByRole('button', { name: /sign up/i }))

  expect(register).toHaveBeenCalledWith('new@example.com', 'secret123', 'secret123')
})

test('shows error message on login failure', async () => {
  const { login } = await import('@/api-client')
  vi.mocked(login).mockRejectedValueOnce(new Error('Invalid credentials.'))
  const user = userEvent.setup()
  renderLoginPage()

  await user.type(screen.getByLabelText(/email/i), 'bad@example.com')
  await user.type(screen.getByLabelText(/^password$/i), 'wrong')
  await user.click(screen.getByRole('button', { name: /sign in/i }))

  expect(await screen.findByRole('alert')).toHaveTextContent(/invalid credentials/i)
})

test('shows error message on register failure', async () => {
  const { register } = await import('@/api-client')
  vi.mocked(register).mockRejectedValueOnce(new Error('Email already in use.'))
  const user = userEvent.setup()
  renderLoginPage()

  await user.click(screen.getByRole('button', { name: /create an account/i }))

  await user.type(screen.getByLabelText(/email/i), 'dup@example.com')
  await user.type(screen.getByLabelText(/^password$/i), 'secret123')
  await user.type(screen.getByLabelText(/confirm password/i), 'secret123')
  await user.click(screen.getByRole('button', { name: /sign up/i }))

  expect(await screen.findByRole('alert')).toHaveTextContent(/email already in use/i)
})

test('has a link back to the home page', () => {
  renderLoginPage()

  const homeLink = screen.getByRole('link', { name: /back/i })
  expect(homeLink).toHaveAttribute('href', '/')
})
