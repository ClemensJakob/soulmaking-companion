import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'

import App from './App'

import { AuthProvider } from '@/contexts/AuthContext'

vi.mock('@/api-client', () => ({
  getAuthUser: vi.fn(() => null),
  isAuthenticated: vi.fn(() => false),
  login: vi.fn(),
  register: vi.fn(),
  logout: vi.fn(),
  onAuthChange: vi.fn(() => vi.fn()),
}))

function renderApp() {
  return render(
    <MemoryRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </MemoryRouter>,
  )
}

test('renders a button link to elements', () => {
  renderApp()

  const link = screen.getByRole('link', { name: /explore elements/i })
  expect(link).toHaveAttribute('href', '/elements')
})

test('renders a sign-in icon link when logged out', () => {
  renderApp()

  const link = screen.getByRole('link', { name: /sign in/i })
  expect(link).toHaveAttribute('href', '/login')
})

test('shows user menu dropdown with logout when logged in', async () => {
  const { getAuthUser, logout } = await import('@/api-client')
  vi.mocked(getAuthUser).mockReturnValue({ id: '123', email: 'test@example.com' })
  const user = userEvent.setup()

  renderApp()

  expect(screen.queryByRole('link', { name: /sign in/i })).not.toBeInTheDocument()

  const menuButton = screen.getByRole('button', { name: /user menu/i })
  await user.click(menuButton)

  expect(screen.getByText('test@example.com')).toBeInTheDocument()
  const logoutButton = screen.getByRole('button', { name: /logout/i })
  await user.click(logoutButton)
  expect(logout).toHaveBeenCalled()
})

test('closes user menu when clicking outside', async () => {
  const { getAuthUser } = await import('@/api-client')
  vi.mocked(getAuthUser).mockReturnValue({ id: '123', email: 'test@example.com' })
  const user = userEvent.setup()

  renderApp()

  await user.click(screen.getByRole('button', { name: /user menu/i }))
  expect(screen.getByText('test@example.com')).toBeInTheDocument()

  await user.click(document.body)
  expect(screen.queryByText('test@example.com')).not.toBeInTheDocument()
})
