import { clsx } from 'clsx/lite'

export type LeadCardV2Signal = {
  severity: 'red' | 'orange'
  title: string
  note: string
}

export type LeadCardV2BookedDemo = {
  amount: number
  unit: 'min' | 'hour' | 'day'
}

function formatBookedAgo({ amount, unit }: LeadCardV2BookedDemo) {
  if (unit === 'min') return `${amount} min`
  if (unit === 'hour') return `${amount} hour${amount === 1 ? '' : 's'}`
  return `${amount} day${amount === 1 ? '' : 's'}`
}

export function LeadCardV2({
  ariaLabel,
  name,
  locationLine,
  score,
  displayScore,
  bookedDemoAgo,
  signals,
  quote,
  className,
}: {
  ariaLabel: string
  name: string
  locationLine: string
  score: number
  /** When set (e.g. during a count-up), overrides the numeric display while keeping semantic `score` for context */
  displayScore?: number
  /** Relative recency, e.g. call booked */
  bookedDemoAgo?: LeadCardV2BookedDemo
  signals: LeadCardV2Signal[]
  quote: string
  className?: string
}) {
  const shownScore = displayScore ?? score
  const bookedPhrase = bookedDemoAgo ? formatBookedAgo(bookedDemoAgo) : null
  return (
    <article
      className={clsx(
        'w-full overflow-hidden rounded-xl border bg-white shadow-none dark:bg-white/[0.05]',
        'border-mist-950/[0.07] dark:border-white/10',
        className,
      )}
      aria-label={ariaLabel}
    >
      <div
        className="h-1 bg-gradient-to-r from-emerald-500 to-teal-500 dark:from-emerald-400 dark:to-teal-500"
        aria-hidden
      />
      <div className="px-5 pb-[22px] pt-[18px]">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="font-display text-xl leading-snug tracking-[-0.02em] text-mist-950 dark:text-white">
              {name}
            </h3>
            <p className="mt-0.5 text-xs text-mist-600 dark:text-mist-400">{locationLine}</p>
          </div>
          <div
            className="shrink-0 text-lg font-semibold tracking-[-0.02em] tabular-nums text-mist-950 transition-[color] duration-300 dark:text-white"
            aria-label={`Fit score ${score} out of 100`}
          >
            {shownScore}
            <span className="text-xs font-normal text-mist-600 dark:text-mist-400">/100</span>
          </div>
        </div>

        <hr className="my-3.5 border-0 border-t border-mist-200 dark:border-mist-800" />

        <ul className="mb-3.5 flex list-none flex-col gap-[9px]" role="list">
          {signals.map((s) => (
            <li key={`${s.title}${s.note}`} className="flex items-start gap-[9px]">
              <span
                className={clsx(
                  'mt-[5px] size-1.5 shrink-0 rounded-full',
                  s.severity === 'red' ? 'bg-emerald-600 dark:bg-emerald-500' : 'bg-teal-500 dark:bg-teal-400',
                )}
                aria-label={s.severity === 'red' ? 'Key fit signal' : 'Fit signal'}
              />
              <span className="text-[13px] leading-snug text-mist-950 dark:text-mist-100">
                {s.title}
                <span className="text-mist-600 dark:text-mist-400">{s.note}</span>
              </span>
            </li>
          ))}
        </ul>

        <hr className="my-3.5 border-0 border-t border-mist-200 dark:border-mist-800" />

        <div className="relative pl-3">
          <span
            className="absolute bottom-0 left-0 top-0 w-0.5 rounded-full bg-gradient-to-b from-emerald-500 to-teal-600 dark:from-emerald-400 dark:to-teal-500"
            aria-hidden
          />
          <p className="text-[13px] font-normal italic leading-snug text-mist-600 dark:text-mist-400">
            &ldquo;{quote}&rdquo;
          </p>
        </div>

        {bookedPhrase ? (
          <div
            className={clsx(
              'mt-4 flex items-center gap-2 rounded-lg border px-3 py-2 text-[13px] font-medium tabular-nums',
              'border-emerald-500/25 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 text-mist-950',
              'dark:border-emerald-400/30 dark:from-emerald-500/15 dark:to-teal-500/15 dark:text-white',
            )}
          >
            <span className="text-[15px] leading-none" aria-hidden>
              📞
            </span>
            <span>Booked a call {bookedPhrase} ago</span>
          </div>
        ) : null}
      </div>
    </article>
  )
}
