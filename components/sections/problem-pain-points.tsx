import { clsx } from 'clsx/lite'
import type { ComponentProps, ReactNode } from 'react'
import { Container } from '../elements/container'
import { Eyebrow } from '../elements/eyebrow'
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
      <div className="flex size-10 items-center justify-center rounded-lg bg-mist-950/5 text-mist-950 dark:bg-white/10 dark:text-white">
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
              <Eyebrow className="text-xs font-semibold uppercase tracking-wider text-mist-600 dark:text-mist-400">
                {eyebrow}
              </Eyebrow>
            )}
            <Subheading>{headline}</Subheading>
          </div>
          {subheadline && <Text className="text-pretty">{subheadline}</Text>}
        </div>

        <div className="flex flex-col gap-10 sm:gap-12">
          <figure className="rounded-xl bg-white p-8 ring-1 ring-mist-950/5 dark:bg-white/5 dark:ring-white/10 sm:p-10">
            <blockquote className="font-display text-xl/9 italic tracking-tight text-pretty text-mist-950 sm:text-2xl/10 dark:text-white">
              {quote}
            </blockquote>
            <figcaption className="mt-6 text-sm/6 text-mist-700 dark:text-mist-400">{quoteAttribution}</figcaption>
          </figure>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">{children}</div>
        </div>
      </Container>
    </section>
  )
}
