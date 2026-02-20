import { X } from 'lucide-react'
import { type CSSProperties } from 'react'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { elementTagColors, type Element } from '@/domain'

type ElementDetailCardProps = {
  element: Element
  elementKey: string
  className?: string
  onClose?: () => void
}

export function ElementDetailCard({ element, elementKey, className = '', onClose }: ElementDetailCardProps) {
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
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div
              className="w-3 h-3 rounded-full flex-shrink-0"
              style={{ backgroundColor: tagColor.bg }}
            />
            <CardTitle className="text-xl font-bold text-gray-900">{element.name}</CardTitle>
          </div>
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="flex-shrink-0 rounded-full p-1 text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <X size={18} aria-hidden="true" />
            </button>
          )}
        </div>
        <CardDescription className="text-base text-gray-600 mt-2 italic border-l-4 pl-3 border-[var(--accent-color)]">
          {element.short_desc}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-2">
        <p className="text-gray-700 leading-relaxed">{element.long_desc}</p>

        {element.questions && element.questions.length > 0 && (
          <div className="mt-6 pt-4 border-t border-gray-200">
            <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
              Questions to Explore
            </h4>
            <ul className="space-y-2">
              {element.questions.map((question, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-gray-700 text-sm leading-relaxed"
                >
                  <span
                    className="inline-block w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: tagColor.bg }}
                  />
                  <span>{question}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
