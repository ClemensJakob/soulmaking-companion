import { User } from 'lucide-react'
import { type CSSProperties, useMemo } from 'react'
import { Link } from 'react-router-dom'

import { elementKeys, elementTagColors } from '@/domain'

function getRandomColors(count: number): Array<{ bg: string; text: string }> {
  const shuffled = [...elementKeys].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count).map((key) => elementTagColors[key])
}

function App() {
  const colors = useMemo(() => getRandomColors(8), [])

  return (
    <main className="min-h-dvh bg-stone-950 overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden">
        {colors.map((color, i) => (
          <div
            key={i}
            className="absolute rounded-full blur-3xl opacity-30 animate-pulse"
            style={{
              backgroundColor: color.bg,
              width: `${150 + i * 40}px`,
              height: `${150 + i * 40}px`,
              left: `${10 + (i % 4) * 25}%`,
              top: `${15 + Math.floor(i / 4) * 50}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i}s`,
            }}
          />
        ))}
      </div>

      {/* Auth icon */}
      <Link
        to="/login"
        className="absolute top-6 right-6 z-20 p-2 rounded-full border border-white/20 text-white/50 hover:text-white hover:border-white/40 transition-colors"
        aria-label="Sign in"
      >
        <User className="w-5 h-5" />
      </Link>

      {/* Subtle grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />

      {/* Content */}
      <div className="relative z-10 min-h-dvh flex flex-col gap-16 items-center justify-center px-6 py-12">
        <h1 className="text-5xl sm:text-7xl font-serif text-white/90 mb-4 tracking-tight">
          Soulmaking
        </h1>
        {/* <p className="text-white/40 text-lg sm:text-xl mb-16 font-light italic">
          elements of the imaginal
        </p> */}

        <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
          <Link
            to="/elements"
            className="group relative"
            style={{ '--glow': colors[0].bg } as CSSProperties}
          >
            <div className="absolute inset-0 bg-(--glow) opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500" />
            <div className="relative px-8 py-4 border border-white/20 rounded-full text-white/70 text-lg font-light tracking-wide text-center transition-all duration-300 group-hover:border-white/40 group-hover:text-white group-hover:tracking-wider">
              explore elements
            </div>
          </Link>
        </div>
      </div>
    </main>
  )
}

export default App
