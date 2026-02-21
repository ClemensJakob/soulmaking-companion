import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

import App from './App'
import { AuthProvider } from './contexts/AuthContext'
import { ElementsPage } from './pages/ElementsPage'

vi.mock('@/api-client', () => ({
  getAuthUser: vi.fn(() => null),
  isAuthenticated: vi.fn(() => false),
  login: vi.fn(),
  register: vi.fn(),
  logout: vi.fn(),
  onAuthChange: vi.fn(() => vi.fn()),
}))

function renderRouter(initialPath: string) {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/elements" element={<ElementsPage />} />
        </Routes>
      </AuthProvider>
    </MemoryRouter>,
  )
}

test('navigating directly to /elements renders the elements page', () => {
  renderRouter('/elements')

  // ElementsPage renders a button for every element; check one known element
  expect(screen.getByRole('button', { name: /the lattice/i })).toBeInTheDocument()
})

test('navigating directly to / renders the home page', () => {
  renderRouter('/')

  expect(screen.getByRole('link', { name: /explore elements/i })).toBeInTheDocument()
})
