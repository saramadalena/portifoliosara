import type { ReactNode } from 'react'

export function Expandable({ title = 'Ver detalhes', children }: { title?: string; children: ReactNode }) {
  return (
    <details className="portfolio-details">
      <summary>
        <span>{title}</span>
        <span aria-hidden="true">+</span>
      </summary>
      <div className="portfolio-details-body">{children}</div>
    </details>
  )
}
