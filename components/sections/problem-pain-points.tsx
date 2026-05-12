import { clsx } from 'clsx/lite'
import type { ComponentProps, ReactNode } from 'react'
import { Container } from '../elements/container'
import { Subheading } from '../elements/subheading'
import { Text } from '../elements/text'

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
  quote,
  quoteAttribution,
  children,
  className,
  ...props
}: {
  eyebrow?: ReactNode
  headline: ReactNode
  subheadline?: ReactNode
  quote: ReactNode
  quoteAttribution: ReactNode
  children: ReactNode
} & ComponentProps<'section'>) {
  return (
    <section className={clsx('py-24', className)} {...props}>
      <Container className="flex flex-col gap-10 sm:gap-16">
        <div className="flex max-w-2xl flex-col gap-6">
          <div className="flex flex-col gap-2">
            {eyebrow && (
              <div className="text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent dark:from-orange-400 dark:to-rose-400">
                {eyebrow}
              </div>
            )}
            <Subheading>{headline}</Subheading>
          </div>
          {subheadline && <Text className="text-pretty">{subheadline}</Text>}
        </div>

        <div className="flex flex-col gap-10 sm:gap-12">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">{children}</div>
          <figure className="rounded-xl bg-white p-8 ring-1 ring-mist-950/5 dark:bg-white/5 dark:ring-white/10 sm:p-10">
            <blockquote className="font-display text-xl/9 italic tracking-tight text-pretty text-mist-950 sm:text-2xl/10 dark:text-white">
              {quote}
            </blockquote>
            <figcaption className="mt-6 text-sm/6 text-mist-700 dark:text-mist-400">{quoteAttribution}</figcaption>
          </figure>
        </div>
      </Container>
    </section>
  )
}
