import { useMemo } from 'react'
import { Link } from 'react-router-dom'

import { elementKeys, elementTagColors } from '@/domain'

function getRandomColor(): string {
  const randomKey = elementKeys[Math.floor(Math.random() * elementKeys.length)]
  return elementTagColors[randomKey].bg
}

function App() {
  const [color1, color2] = useMemo(() => [getRandomColor(), getRandomColor()], [])

  return (
    <main className="min-h-dvh flex flex-col md:flex-row">
      <Link
        to="/elements"
        className="flex-1 flex items-center justify-center text-white text-2xl md:text-3xl font-bold hover:opacity-90 transition-opacity"
        style={{ backgroundColor: color1 }}
      >
        All Elements
      </Link>
      <Link
        to="/elements/random"
        className="flex-1 flex items-center justify-center text-white text-2xl md:text-3xl font-bold hover:opacity-90 transition-opacity"
        style={{ backgroundColor: color2 }}
      >
        Random Element
      </Link>
    </main>
  )
}

export default App
