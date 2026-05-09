import { clsx } from 'clsx/lite'
import type { ComponentProps, ReactNode } from 'react'
import { Container } from '../elements/container'
import { Heading } from '../elements/heading'
import { Text } from '../elements/text'

export function HeroLeftAlignedWithDemo({
  eyebrow,
  headline,
  subheadline,
  cta,
  demo,
  footer,
  className,
  stackGapClassName = 'gap-32',
  ...props
}: {
  eyebrow?: ReactNode
  headline: ReactNode
  subheadline: ReactNode
  cta?: ReactNode
  demo?: ReactNode
  footer?: ReactNode
  /** Vertical gap between intro (headline + CTA) and demo; default matches Tailwind Plus spacing */
  stackGapClassName?: string
} & ComponentProps<'section'>) {
  return (
    <section className={clsx('py-16', className)} {...props}>
      <Container className="flex min-w-0 w-full flex-col gap-16">
        <div className={clsx('flex min-w-0 w-full flex-col', stackGapClassName)}>
          <div className="flex flex-col items-start gap-6">
            {eyebrow}
            <Heading className="max-w-5xl">{headline}</Heading>
            <Text size="lg" className="flex max-w-3xl flex-col gap-4">
              {subheadline}
            </Text>
            {cta}
          </div>
          {demo ? <div className="min-w-0 w-full">{demo}</div> : null}
        </div>
        {footer}
      </Container>
    </section>
  )
}
