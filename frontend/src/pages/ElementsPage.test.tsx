import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { ElementsPage } from './ElementsPage'

import { elements, elementKeys, elementTagColors } from '@/domain'

function getElementButton(shortName: string) {
  return screen.getByRole('button', { name: new RegExp(shortName, 'i') })
}

test('renders all element short names in the grid', () => {
  render(<ElementsPage />)
  for (const element of Object.values(elements)) {
    expect(getElementButton(element.short_name)).toBeInTheDocument()
  }
})

test('shows element details when clicking an element', async () => {
  const user = userEvent.setup()
  render(<ElementsPage />)

  const element = elements.the_lattice
  await user.click(getElementButton(element.short_name))

  expect(screen.getByText(element.name)).toBeInTheDocument()
  expect(screen.getByText(element.short_desc)).toBeInTheDocument()
  expect(screen.getByText(element.long_desc)).toBeInTheDocument()
})

test('hides element details when clicking the same element again', async () => {
  const user = userEvent.setup()
  render(<ElementsPage />)

  const element = elements.the_lattice
  await user.click(getElementButton(element.short_name))
  expect(screen.getByText(element.name)).toBeInTheDocument()

  await user.click(getElementButton(element.short_name))
  expect(screen.queryByText(element.long_desc)).not.toBeInTheDocument()
})

test('replaces details when clicking a different element', async () => {
  const user = userEvent.setup()
  render(<ElementsPage />)

  const first = elements.the_lattice
  const second = elements.eros

  await user.click(getElementButton(first.short_name))
  expect(screen.getByText(first.name)).toBeInTheDocument()

  await user.click(getElementButton(second.short_name))
  expect(screen.queryByText(first.long_desc)).not.toBeInTheDocument()
  expect(screen.getByText(second.name)).toBeInTheDocument()
  expect(screen.getByText(second.short_desc)).toBeInTheDocument()
  expect(screen.getByText(second.long_desc)).toBeInTheDocument()
})

test('applies unique tag colors per element', () => {
  render(<ElementsPage />)

  const backgroundColors = new Set(Object.values(elementTagColors).map((style) => style.bg))
  expect(backgroundColors.size).toBe(Object.keys(elementTagColors).length)

  for (const key of elementKeys) {
    const element = elements[key]
    const button = getElementButton(element.short_name)
    const style = elementTagColors[key]

    expect(button).toHaveStyle({ '--tag-bg': style.bg })
    expect(button).toHaveStyle({ '--tag-text': style.text })
    expect(button).toHaveStyle({ '--tag-hover': style.hover })
  }
})
