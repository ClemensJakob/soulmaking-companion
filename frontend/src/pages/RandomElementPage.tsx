import { useCallback, useState } from 'react'

import { ElementDetailCard } from '@/components/ElementDetailCard'
import { elementKeys, elements } from '@/domain'

function getRandomElementKey(excludeKey?: string): string {
  const available = excludeKey ? elementKeys.filter((k) => k !== excludeKey) : elementKeys
  return available[Math.floor(Math.random() * available.length)]
}

export function RandomElementPage() {
  const [currentKey, setCurrentKey] = useState<string>(() => getRandomElementKey())
  const [isAnimating, setIsAnimating] = useState(false)

  const handleNewElement = useCallback(() => {
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentKey((prev) => getRandomElementKey(prev))
      setIsAnimating(false)
    }, 300)
  }, [])

  const element = elements[currentKey]

  return (
    <main className="min-h-dvh bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div
          className={`transition-all duration-300 ease-out transform ${
            isAnimating
              ? 'opacity-0 scale-95 -translate-y-4 rotate-1'
              : 'opacity-100 scale-100 translate-y-0 rotate-0'
          }`}
        >
          <ElementDetailCard element={element} elementKey={currentKey} />
        </div>

        <button
          onClick={handleNewElement}
          disabled={isAnimating}
          className="mt-8 px-8 py-3 bg-gray-900 text-white font-semibold rounded-full shadow-lg hover:bg-gray-800 hover:shadow-xl active:scale-95 transition-all duration-200 disabled:opacity-50"
        >
          Show Another Element
        </button>
      </div>
    </main>
  )
}
