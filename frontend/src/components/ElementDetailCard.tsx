import { type CSSProperties } from 'react'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { elementTagColors, type Element } from '@/domain'

type ElementDetailCardProps = {
  element: Element
  elementKey: string
  className?: string
}

export function ElementDetailCard({ element, elementKey, className = '' }: ElementDetailCardProps) {
  const tagColor = elementTagColors[elementKey]

  const cardStyle = {
    '--accent-color': tagColor.bg,
    '--accent-text': tagColor.text,
  } as CSSProperties

  return (
    <Card
      className={`w-full max-w-lg shadow-2xl bg-white overflow-hidden ${className}`}
      style={cardStyle}
    >
      <div className="h-2 w-full bg-[var(--accent-color)]" />
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          <div
            className="w-3 h-3 rounded-full flex-shrink-0"
            style={{ backgroundColor: tagColor.bg }}
          />
          <CardTitle className="text-xl font-bold text-gray-900">{element.name}</CardTitle>
        </div>
        <CardDescription className="text-base text-gray-600 mt-2 italic border-l-4 pl-3 border-[var(--accent-color)]">
          {element.short_desc}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-2">
        <p className="text-gray-700 leading-relaxed">{element.long_desc}</p>
      </CardContent>
    </Card>
  )
}
