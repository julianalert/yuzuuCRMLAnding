import { clsx } from 'clsx/lite'

export type LeadCardV2Signal = {
  severity: 'red' | 'orange'
  title: string
  note: string
}

export function LeadCardV2({
  ariaLabel,
  name,
  locationLine,
  score,
  signals,
  quote,
  className,
}: {
  ariaLabel: string
  name: string
  locationLine: string
  score: number
  signals: LeadCardV2Signal[]
  quote: string
  className?: string
}) {
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
        className="h-1 bg-gradient-to-r from-orange-500 to-rose-500"
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
          <div className="flex shrink-0 flex-col items-end gap-[5px]">
            <div className="text-lg font-semibold tracking-[-0.02em] text-mist-950 dark:text-white">
              {score}
              <span className="text-xs font-normal text-mist-600 dark:text-mist-400">/100</span>
            </div>
            <span className="inline-flex items-center gap-0.5 rounded-full bg-gradient-to-r from-orange-500/12 to-rose-500/12 px-2 py-0.5 text-[11px] font-semibold text-rose-700 dark:from-orange-500/20 dark:to-rose-500/20 dark:text-rose-300">
              <span aria-hidden>🔥</span>
              <span>Warm lead</span>
            </span>
          </div>
        </div>

        <hr className="my-3.5 border-0 border-t border-mist-200 dark:border-mist-800" />

        <ul className="mb-3.5 flex list-none flex-col gap-[9px]" role="list">
          {signals.map((s) => (
            <li key={`${s.title}${s.note}`} className="flex items-start gap-[9px]">
              <span
                className={clsx(
                  'mt-[5px] size-1.5 shrink-0 rounded-full',
                  s.severity === 'red' ? 'bg-red-500' : 'bg-orange-500',
                )}
                aria-label={s.severity === 'red' ? 'Critical' : 'Warning'}
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
            className="absolute bottom-0 left-0 top-0 w-0.5 rounded-full bg-gradient-to-b from-orange-500 to-rose-500"
            aria-hidden
          />
          <p className="text-[13px] font-normal italic leading-snug text-mist-600 dark:text-mist-400">
            &ldquo;{quote}&rdquo;
          </p>
        </div>
      </div>
    </article>
  )
}
