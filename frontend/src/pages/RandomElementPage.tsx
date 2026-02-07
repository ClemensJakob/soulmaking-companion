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
    <main className="min-h-dvh bg-stone-950 flex flex-col relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl" />
      </div>
      {/* Subtle grain texture */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-8">
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
          className="mt-8 px-8 py-3 border border-white/20 text-white/70 font-light tracking-wide rounded-full hover:border-white/40 hover:text-white hover:tracking-wider active:scale-95 transition-all duration-300 disabled:opacity-50"
        >
          another
        </button>
      </div>
    </main>
  )
}
