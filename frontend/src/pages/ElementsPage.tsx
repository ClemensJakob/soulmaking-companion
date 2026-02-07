import { type CSSProperties, useEffect, useRef, useState } from 'react'

import { ElementDetailCard } from '@/components/ElementDetailCard'
import { elementTagColors, elements, elementKeys, type Element } from '@/domain'

export function ElementsPage() {
  const [selectedKey, setSelectedKey] = useState<string | null>(null)
  const [positions, setPositions] = useState<Map<string, { x: number; y: number }>>(new Map())
  const [fontSize, setFontSize] = useState(14)
  const containerRef = useRef<HTMLDivElement>(null)

  function handleSelect(key: string) {
    setSelectedKey((prev) => (prev === key ? null : key))
  }

  useEffect(() => {
    function layout() {
      if (!containerRef.current) return
      const { clientWidth, clientHeight } = containerRef.current
      const layoutResult = computeLayout(elementKeys, clientWidth, clientHeight)
      setPositions(layoutResult.positions)
      setFontSize(layoutResult.fontSize)
    }

    layout()

    window.addEventListener('resize', layout)
    return () => window.removeEventListener('resize', layout)
  }, [])

  return (
    <main className="fixed inset-0 overflow-hidden bg-stone-950">
      {selectedKey && (
        <ElementDetailOverlay
          element={elements[selectedKey]}
          elementKey={selectedKey}
          onClose={() => setSelectedKey(null)}
        />
      )}
      {/* Floating colored orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full blur-3xl opacity-20 animate-pulse bg-violet-500/30"
          style={{ animationDuration: '6s' }}
        />
        <div
          className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full blur-3xl opacity-20 animate-pulse bg-amber-500/30"
          style={{ animationDuration: '8s', animationDelay: '1s' }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full blur-3xl opacity-15 animate-pulse bg-rose-500/20"
          style={{ animationDuration: '7s', animationDelay: '2s' }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] rounded-full blur-3xl opacity-15 animate-pulse bg-emerald-500/20"
          style={{ animationDuration: '9s', animationDelay: '0.5s' }}
        />
      </div>
      {/* Subtle grain texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />
      <div ref={containerRef} className="relative h-full w-full">
        {elementKeys.map((key) => {
          const pos = positions.get(key)
          if (!pos) return null
          const shortName = elements[key].short_name
          const firstLetter = shortName.slice(0, 1).toUpperCase()
          const rest = shortName.slice(1)
          const tagColor = elementTagColors[key]

          const tagStyle = {
            left: pos.x,
            top: pos.y,
            fontSize: `${fontSize}px`,
            lineHeight: `${Math.round(fontSize * 1.4)}px`,
            '--tag-bg': tagColor.bg,
            '--tag-text': tagColor.text,
            '--tag-hover': tagColor.hover,
          } as CSSProperties

          return (
            <button
              key={key}
              onClick={() => handleSelect(key)}
              style={tagStyle}
              className="absolute whitespace-nowrap rounded-md bg-[var(--tag-bg)] px-3 py-1 text-[var(--tag-text)] shadow-sm transition-colors hover:bg-[var(--tag-hover)]"
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

type ElementDetailOverlayProps = {
  element: Element
  elementKey: string
  onClose: () => void
}

function ElementDetailOverlay({ element, elementKey, onClose }: ElementDetailOverlayProps) {
  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Escape') {
      onClose()
    }
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Details for ${element.name}`}
      className="fixed inset-0 z-50 flex flex-col items-center justify-start bg-black/50 px-4 pt-4 overflow-y-auto"
      onClick={onClose}
      onKeyDown={handleKeyDown}
    >
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
      <div
        role="document"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <ElementDetailCard element={element} elementKey={elementKey} />
      </div>
    </div>
  )
}

type Rect = { x: number; y: number; w: number; h: number }
type Position = { x: number; y: number }
type Layout = { positions: Map<string, Position>; fontSize: number }

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

function clampNumber(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

function getLayoutMetrics(containerW: number, containerH: number) {
  const minDim = Math.min(containerW, containerH)
  const fontSize = clampNumber(Math.round(minDim / 24), 13, 22)
  const lineH = Math.round(fontSize * 1.4)
  const charW = fontSize * 0.6
  const padding = fontSize < 14 ? 6 : 10
  const margin = 4

  return { fontSize, charW, lineH, padding, margin }
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

function computeLayout(keys: string[], containerW: number, containerH: number): Layout {
  const random = seededRandom(42)
  const { fontSize, charW, lineH, padding, margin } = getLayoutMetrics(containerW, containerH)

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

  return { positions: result, fontSize }
}
