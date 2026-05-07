'use client'

import type { ComponentProps } from 'react'

import { ButtonLink } from '@/components/elements/button'
import { Link } from '@/components/elements/link'
import { saEvent } from '@/lib/sa-event'

const CALENDLY_EARLY_ACCESS = 'https://calendly.com/yuzuu/early-access'

type ButtonLinkProps = Omit<ComponentProps<typeof ButtonLink>, 'href'> & { href?: string }

export function CalendlyEarlyAccessButtonLink({
  onClick,
  href = CALENDLY_EARLY_ACCESS,
  target = '_blank',
  rel = 'noopener noreferrer',
  ...props
}: ButtonLinkProps) {
  return (
    <ButtonLink
      href={href}
      target={target}
      rel={rel}
      {...props}
      onClick={(e) => {
        saEvent('click_get_early_access')
        onClick?.(e)
      }}
    />
  )
}

type LinkProps = Omit<ComponentProps<typeof Link>, 'href'> & { href?: string }

export function CalendlyHowItWorksLink({
  onClick,
  href = CALENDLY_EARLY_ACCESS,
  target = '_blank',
  rel = 'noopener noreferrer',
  ...props
}: LinkProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      {...props}
      onClick={(e) => {
        saEvent('click_see_how_it_works')
        onClick?.(e)
      }}
    />
  )
}
