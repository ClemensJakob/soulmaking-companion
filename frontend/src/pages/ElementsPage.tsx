import { useState } from 'react'

import { Card, CardContent } from '@/components/ui/card'
import { elements, elementKeys, type Element } from '@/domain'

const COLUMNS = 3

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

export function ElementsPage() {
  const [selectedKey, setSelectedKey] = useState<string | null>(null)

  function handleSelect(key: string) {
    setSelectedKey((prev) => (prev === key ? null : key))
  }

  const rows: string[][] = []
  for (let i = 0; i < elementKeys.length; i += COLUMNS) {
    rows.push(elementKeys.slice(i, i + COLUMNS))
  }

  return (
    <main className="min-h-[100dvh]">
      {selectedKey && (
        <ElementDetail element={elements[selectedKey]} onClose={() => setSelectedKey(null)} />
      )}
      <div className="mx-auto grid max-w-4xl grid-cols-3 gap-2">
        {rows.map((row) => (
          <div key={row[0]} className="col-span-3 contents">
            {row.map((key) => {
              const shortName = elements[key].short_name
              const firstLetter = shortName.slice(0, 1).toUpperCase()
              const rest = shortName.slice(1)

              return (
                <button
                  key={key}
                  onClick={() => handleSelect(key)}
                  className={`min-h-14 px-1 py-1 text-center text-md transition-colors`}
                >
                  <span className="font-semibold">{firstLetter}</span>
                  {rest}
                </button>
              )
            })}
          </div>
        ))}
      </div>
    </main>
  )
}
