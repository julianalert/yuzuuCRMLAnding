'use client'

import { useEffect } from 'react'

export function FocusEmailOnHash({ formId, inputSelector }: { formId: string; inputSelector?: string }) {
  useEffect(() => {
    function focusInput() {
      if (window.location.hash === `#${formId}`) {
        const selector = inputSelector ?? `#${formId} input[type="email"]`
        setTimeout(() => {
          const input = document.querySelector<HTMLInputElement>(selector)
          input?.focus()
        }, 600)
      }
    }
    focusInput()
    window.addEventListener('hashchange', focusInput)
    return () => window.removeEventListener('hashchange', focusInput)
  }, [formId, inputSelector])

  return null
}
