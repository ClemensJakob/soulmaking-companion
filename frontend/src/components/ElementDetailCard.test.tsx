import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'

import { ElementDetailCard } from './ElementDetailCard'

import { elements } from '@/domain'

const element = elements.the_lattice
const elementKey = 'the_lattice'

test('renders element name', () => {
  render(<ElementDetailCard element={element} elementKey={elementKey} />)
  expect(screen.getByText(element.name)).toBeInTheDocument()
})

test('does not render close button when onClose is not provided', () => {
  render(<ElementDetailCard element={element} elementKey={elementKey} />)
  expect(screen.queryByRole('button', { name: /close/i })).not.toBeInTheDocument()
})

test('renders a close button when onClose is provided', () => {
  const onClose = vi.fn()
  render(<ElementDetailCard element={element} elementKey={elementKey} onClose={onClose} />)
  expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument()
})

test('calls onClose when close button is clicked', async () => {
  const user = userEvent.setup()
  const onClose = vi.fn()
  render(<ElementDetailCard element={element} elementKey={elementKey} onClose={onClose} />)
  await user.click(screen.getByRole('button', { name: /close/i }))
  expect(onClose).toHaveBeenCalledTimes(1)
})
