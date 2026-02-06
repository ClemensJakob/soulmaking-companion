import { render, screen } from '@testing-library/react'

import { ElementsPage } from './ElementsPage'

test('renders hello world page', () => {
  render(<ElementsPage />)
  expect(screen.getByRole('heading', { name: /hello world/i })).toBeInTheDocument()
})
