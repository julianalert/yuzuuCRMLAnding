import { clsx } from 'clsx/lite'
import type { ComponentProps } from 'react'

export function FeatureStatCard({
  emoji,
  label,
  value,
  caption,
  delta,
  deltaHint = 'vs last month',
  period,
  className,
  ...props
}: {
  emoji: string
  label: string
  value: string
  caption: string
  delta: string
  deltaHint?: string
  period: string
} & ComponentProps<'div'>) {
  const longValue = value.length > 4

  return (
    <div
      className={clsx(
        'box-border flex h-[204px] w-full max-w-[30rem] flex-col justify-between rounded-xl border border-mist-950/12 bg-white px-8 py-5 shadow-sm dark:border-mist-950/15 dark:shadow-none',
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <span className="text-sm" aria-hidden="true">
          {emoji}
        </span>
        <span className="text-[11px] font-medium tracking-wide text-mist-600 uppercase">{label}</span>
      </div>

      <div>
        <div
          className={clsx(
            'font-medium tracking-[-0.03em] text-mist-950',
            longValue ? 'text-3xl sm:text-4xl' : 'text-4xl sm:text-5xl lg:text-[3rem] lg:leading-[1.05]',
          )}
        >
          {value}
        </div>
        <p className="mt-1 text-sm text-mist-600">{caption}</p>
      </div>

      <div className="flex items-center justify-between border-t border-mist-950/10 pt-3">
        <div className="flex min-w-0 items-center gap-2">
          <span className="shrink-0 rounded-full bg-[#e6faf2] px-2.5 py-0.5 text-[11px] font-medium text-[#00784a]">
            {delta}
          </span>
          <span className="truncate text-[11px] text-mist-600">{deltaHint}</span>
        </div>
        <span className="shrink-0 text-[11px] text-mist-600 tabular-nums">{period}</span>
      </div>
    </div>
  )
}
