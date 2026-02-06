import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import App from './App'

test('renders a button link to elements', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  )

  const link = screen.getByRole('link', { name: /elements/i })
  expect(link).toHaveAttribute('href', '/elements')
})
