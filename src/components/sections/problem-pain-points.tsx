import { clsx } from 'clsx/lite'
import type { ComponentProps, ReactNode } from 'react'
import { Container } from '../elements/container'
import { Subheading } from '../elements/subheading'
import { Text } from '../elements/text'

export type ProblemPainItem = {
  label: string
  /** Body copy; use <strong className="font-semibold text-mist-950 dark:text-white"> for emphasis. */
  scene: ReactNode
}

export function ProblemPainCard({
  icon,
  headline,
  description,
  className,
  ...props
}: {
  icon: ReactNode
  headline: ReactNode
  description: ReactNode
} & ComponentProps<'div'>) {
  return (
    <div
      className={clsx(
        'flex flex-col rounded-xl bg-white p-6 ring-1 ring-mist-950/5 dark:bg-white/5 dark:ring-white/10',
        className,
      )}
      {...props}
    >
      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-rose-500 text-white shadow-lg shadow-orange-500/20">
        {icon}
      </div>
      <h3 className="mt-4 text-base/8 font-semibold text-mist-950 dark:text-white">{headline}</h3>
      <p className="mt-2 text-sm/7 text-mist-700 dark:text-mist-400">{description}</p>
    </div>
  )
}

export function ProblemPainPoints({
  eyebrow,
  headline,
  subheadline,
  pains,
  closing,
  quote,
  quoteAttribution,
  className,
  ...props
}: {
  eyebrow?: ReactNode
  headline: ReactNode
  subheadline?: ReactNode
  pains: ProblemPainItem[]
  /** Optional line below the testimonial quote. */
  closing?: ReactNode
  quote: ReactNode
  quoteAttribution: ReactNode
} & ComponentProps<'section'>) {
  return (
    <section className={clsx('py-24', className)} {...props}>
      <Container className="flex w-full min-w-0 flex-col gap-10 sm:gap-14">
        <div className="flex max-w-3xl flex-col gap-6">
          {eyebrow ? (
            <div className="flex items-center gap-3">
              <span
                className="h-px w-7 shrink-0 bg-gradient-to-r from-orange-500 to-rose-500"
                aria-hidden
              />
              <div className="text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent dark:from-orange-400 dark:to-rose-400">
                {eyebrow}
              </div>
            </div>
          ) : null}
          <Subheading>{headline}</Subheading>
          {subheadline ? <Text className="text-pretty">{subheadline}</Text> : null}
        </div>

        <ol className="w-full min-w-0 list-none border-t border-mist-200 dark:border-mist-800">
          {pains.map((pain, i) => (
            <li
              key={pain.label}
              className="group relative grid grid-cols-1 border-b border-mist-200 bg-white dark:border-mist-800 dark:bg-white/[0.06] md:grid-cols-[minmax(10rem,16.25rem)_1fr]"
            >
              <span
                className="pointer-events-none absolute inset-y-0 left-0 w-0.5 origin-top scale-y-0 bg-gradient-to-b from-orange-500 to-rose-500 transition-transform duration-200 ease-out group-hover:scale-y-100"
                aria-hidden
              />
              <div className="flex flex-col justify-center gap-1.5 border-mist-200 py-8 pl-3 pr-6 dark:border-mist-800 max-md:border-b max-md:pb-6 md:border-r md:py-10 md:pl-4 md:pr-8">
                <span className="text-[11px] font-semibold tabular-nums tracking-widest text-mist-500 transition-colors group-hover:text-orange-600 dark:text-mist-400 dark:group-hover:text-orange-400">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-base font-semibold tracking-tight text-mist-950 transition-colors group-hover:text-orange-700 dark:text-white dark:group-hover:text-orange-300">
                  {pain.label}
                </span>
              </div>
              <div className="flex items-center py-8 pl-3 pr-2 md:py-10 md:pl-10 md:pr-6">
                <div
                  className={clsx(
                    'w-full text-sm/7 text-mist-600 dark:text-mist-400',
                    '[&_strong]:font-semibold [&_strong]:text-mist-950 dark:[&_strong]:text-white',
                  )}
                >
                  {pain.scene}
                </div>
              </div>
            </li>
          ))}
        </ol>

        <figure className="rounded-xl bg-white p-8 ring-1 ring-mist-950/5 dark:bg-white/5 dark:ring-white/10 sm:p-10">
          <blockquote className="font-display text-xl/9 italic tracking-tight text-pretty text-mist-950 sm:text-2xl/10 dark:text-white">
            {quote}
          </blockquote>
          <figcaption className="mt-6 text-sm/6 text-mist-700 dark:text-mist-400">{quoteAttribution}</figcaption>
        </figure>

        {closing ? (
          <div className="border-l-2 border-orange-500/25 pl-4 dark:border-orange-400/30">{closing}</div>
        ) : null}
      </Container>
    </section>
  )
}
