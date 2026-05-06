import { clsx } from 'clsx/lite'
import type { ComponentProps, ReactNode } from 'react'
import { Container } from '../elements/container'
import { Eyebrow } from '../elements/eyebrow'
import { Subheading } from '../elements/subheading'
import { Text } from '../elements/text'

export function CallToActionSimple({
  eyebrow,
  headline,
  subheadline,
  subheadlineFullWidth,
  cta,
  className,
  ...props
}: {
  eyebrow?: ReactNode
  headline: ReactNode
  subheadline?: ReactNode
  subheadlineFullWidth?: boolean
  cta?: ReactNode
} & ComponentProps<'section'>) {
  return (
    <section className={clsx('py-16', className)} {...props}>
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <div className="flex max-w-4xl flex-col gap-2">
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            <Subheading>{headline}</Subheading>
          </div>
          {subheadline && (
            <Text
              className={clsx(
                'flex flex-col gap-4 text-pretty',
                subheadlineFullWidth ? 'max-w-none' : 'max-w-3xl',
              )}
            >
              {subheadline}
            </Text>
          )}
        </div>
        {cta}
      </Container>
    </section>
  )
}
