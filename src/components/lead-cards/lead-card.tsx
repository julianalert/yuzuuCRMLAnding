import type { ReactNode } from 'react'
import { clsx } from 'clsx/lite'

export type LeadSignal = {
  severity: 'red' | 'orange' | 'green'
  title: string
  note: string
}

export function LeadCard({
  illustration,
  ariaLabel,
  score,
  scoreDot,
  categoryBadge,
  name,
  location,
  signals,
  offerPct,
  offerName,
  quote,
  className,
}: {
  illustration: ReactNode
  ariaLabel: string
  score: string
  scoreDot: 'green' | 'orange'
  categoryBadge: string
  name: string
  location: string
  signals: LeadSignal[]
  offerPct: number
  offerName: string
  quote: string
  className?: string
}) {
  return (
    <article
      className={clsx('lead-card h-full', className)}
      aria-label={ariaLabel}
    >
      <div className="lead-card__photo" aria-hidden="true">
        {illustration}
        <div className="lead-card__score-badge">
          <span
            className={clsx(
              'lead-card__score-dot',
              scoreDot === 'orange' && 'lead-card__score-dot--orange',
            )}
          />
          <span className="lead-card__score-text">{score}</span>
        </div>
        <div className="lead-card__category-badge">{categoryBadge}</div>
      </div>

      <div className="lead-card__body">
        <div>
          <div className="lead-card__header">
            <h3 className="lead-card__name">{name}</h3>
            <span className="lead-card__warm-badge">Warm lead</span>
          </div>
          <p className="lead-card__location">{location}</p>
        </div>

        <hr className="lead-card__divider" />

        <section aria-label="Intent signals">
          <h4 className="lead-card__eyebrow">Intent signals</h4>
          <ul className="lead-card__signals" role="list">
            {signals.map((s) => (
              <li key={s.title} className="lead-card__signal">
                <span
                  className={clsx(
                    'lead-card__signal-dot',
                    s.severity === 'red' && 'lead-card__signal-dot--red',
                    s.severity === 'orange' && 'lead-card__signal-dot--orange',
                    s.severity === 'green' && 'lead-card__signal-dot--green',
                  )}
                  aria-label={s.severity === 'red' ? 'Critical' : s.severity === 'orange' ? 'Warning' : 'Positive'}
                />
                <span className="lead-card__signal-content">
                  <span className="lead-card__signal-title">{s.title}</span>
                  <span className="lead-card__signal-note">{s.note}</span>
                </span>
              </li>
            ))}
          </ul>
        </section>

        <hr className="lead-card__divider" />

        <section aria-label="Offer match">
          <div className="lead-card__offer-header">
            <h4 className="lead-card__eyebrow lead-card__eyebrow--inline">Offer match</h4>
            <span className="lead-card__offer-pct">{offerPct}%</span>
          </div>
          <p className="lead-card__offer-name">{offerName}</p>
          <div
            className="lead-card__progress"
            role="progressbar"
            aria-valuenow={offerPct}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`${offerPct}% offer match`}
          >
            <div className="lead-card__progress-fill" style={{ width: `${offerPct}%` }} />
          </div>
        </section>

        <div className="lead-card__draft">
          <h4 className="lead-card__eyebrow">AI outreach draft</h4>
          <blockquote className="lead-card__quote">&ldquo;{quote}&rdquo;</blockquote>
        </div>
      </div>
    </article>
  )
}
