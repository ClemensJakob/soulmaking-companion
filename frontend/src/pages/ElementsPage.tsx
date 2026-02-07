import { useEffect, useRef, useState } from 'react'

import { Card, CardContent } from '@/components/ui/card'
import { elements, elementKeys, type Element } from '@/domain'

export function ElementsPage() {
  const [selectedKey, setSelectedKey] = useState<string | null>(null)
  const [positions, setPositions] = useState<Map<string, { x: number; y: number }>>(new Map())
  const containerRef = useRef<HTMLDivElement>(null)

  function handleSelect(key: string) {
    setSelectedKey((prev) => (prev === key ? null : key))
  }

  useEffect(() => {
    function layout() {
      if (!containerRef.current) return
      const { clientWidth, clientHeight } = containerRef.current
      setPositions(computePositions(elementKeys, clientWidth, clientHeight))
    }

    layout()

    window.addEventListener('resize', layout)
    return () => window.removeEventListener('resize', layout)
  }, [])

  return (
    <main className="p-1 fixed inset-0 overflow-hidden">
      {selectedKey && (
        <ElementDetail element={elements[selectedKey]} onClose={() => setSelectedKey(null)} />
      )}
      <div ref={containerRef} className="relative h-full w-full">
        {elementKeys.map((key) => {
          const pos = positions.get(key)
          if (!pos) return null
          const shortName = elements[key].short_name
          const firstLetter = shortName.slice(0, 1).toUpperCase()
          const rest = shortName.slice(1)

          return (
            <button
              key={key}
              onClick={() => handleSelect(key)}
              style={{ left: pos.x, top: pos.y }}
              className="absolute whitespace-nowrap text-sm transition-colors hover:opacity-70"
            >
              <span className="font-semibold">{firstLetter}</span>
              {rest}
            </button>
          )
        })}
      </div>
    </main>
  )
}

function ElementDetail({ element, onClose }: { element: Element; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-start bg-black/50 px-4"
      onClick={onClose}
    >
      <Card
        className="w-full max-w-lg m-4 pt-4 shadow-2xl bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <CardContent className="space-y-3">
          <p className="text-lg font-semibold">{element.name}</p>
          <p>{element.short_desc}</p>
          <p>{element.long_desc}</p>
        </CardContent>
      </Card>
    </div>
  )
}

type Rect = { x: number; y: number; w: number; h: number }
type Position = { x: number; y: number }

function collides(a: Rect, b: Rect, padding: number): boolean {
  return (
    a.x < b.x + b.w + padding &&
    a.x + a.w + padding > b.x &&
    a.y < b.y + b.h + padding &&
    a.y + a.h + padding > b.y
  )
}

function seededRandom(seed: number): () => number {
  let s = seed
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff
    return (s >>> 0) / 0xffffffff
  }
}

function getLayoutMetrics(containerW: number, containerH: number) {
  const isSmall = Math.min(containerW, containerH) < 500
  return {
    charW: isSmall ? 7 : 8.5,
    lineH: isSmall ? 20 : 24,
    padding: isSmall ? 6 : 10,
    margin: 4,
  }
}

function measureLabel(key: string, charW: number, lineH: number) {
  const name = elements[key].short_name
  return { key, w: name.length * charW + 16, h: lineH + 8 }
}

function scoreCandidate(candidate: Rect, placed: Rect[], containerW: number, containerH: number) {
  const cx = candidate.x + candidate.w / 2
  const cy = candidate.y + candidate.h / 2
  const distFromCenter = Math.abs(cx - containerW / 2) + Math.abs(cy - containerH / 2)
  const yNorm = cy / containerH
  const edgeBonus = yNorm < 0.3 || yNorm > 0.7 ? -80 : 0

  const minDistToOther =
    placed.length > 0
      ? Math.min(
          ...placed.map((p) => Math.abs(cx - (p.x + p.w / 2)) + Math.abs(cy - (p.y + p.h / 2))),
        )
      : containerW

  return distFromCenter * 0.5 - Math.min(minDistToOther, 200) * 0.5 + edgeBonus
}

function computePositions(
  keys: string[],
  containerW: number,
  containerH: number,
): Map<string, Position> {
  const random = seededRandom(42)
  const { charW, lineH, padding, margin } = getLayoutMetrics(containerW, containerH)

  const sizes = keys.map((key) => measureLabel(key, charW, lineH))
  const placed: Rect[] = []
  const result = new Map<string, Position>()

  const sorted = [...sizes].sort((a, b) => b.w - a.w)

  for (const { key, w, h } of sorted) {
    let bestPos: Position | null = null
    let bestScore = Infinity

    for (let attempt = 0; attempt < 800; attempt++) {
      const x = margin + random() * (containerW - w - margin * 2)
      const y = margin + random() * (containerH - h - margin * 2)
      const candidate: Rect = { x, y, w, h }

      if (placed.some((p) => collides(candidate, p, padding))) continue

      const score = scoreCandidate(candidate, placed, containerW, containerH)
      if (score < bestScore) {
        bestScore = score
        bestPos = { x, y }
      }
    }

    if (!bestPos) {
      bestPos = {
        x: margin + random() * (containerW - w - margin * 2),
        y: margin + random() * (containerH - h - margin * 2),
      }
    }

    placed.push({ x: bestPos.x, y: bestPos.y, w, h })
    result.set(key, bestPos)
  }

  return result
}
