'use client'

import { useEffect, useRef, useState } from 'react'

import { LeadCardV2 } from '@/components/lead-cards/lead-card-v2'

const cards = [
  {
    ariaLabel: 'Lead profile: Skyline Motors NYC',
    name: 'Skyline Motors NYC',
    locationLine: 'Car dealership · Chelsea, Manhattan',
    score: 91,
    signals: [
      {
        severity: 'red' as const,
        title: '47 unanswered reviews · avg 3.9★ ',
        note: 'reputation risk at scale',
      },
      {
        severity: 'red' as const,
        title: 'No AI receptionist ',
        note: 'high-intent leads lost after hours',
      },
      {
        severity: 'orange' as const,
        title: 'No online test-drive booking ',
        note: 'competitors offer this',
      },
    ],
    quote:
      '47 unanswered reviews is costing you 4–5 sales a month in lost trust. We fix your reputation and add online test-drive booking in under a week.',
  },
  {
    ariaLabel: 'Lead profile: Pulse Fitness',
    name: 'Pulse Fitness',
    locationLine: 'Gym · Greenwich Village, Manhattan',
    score: 79,
    signals: [
      {
        severity: 'red' as const,
        title: 'Social media inactive ',
        note: 'last post 3 months ago',
      },
      {
        severity: 'orange' as const,
        title: 'No paid ads running ',
        note: 'high local search competition',
      },
      {
        severity: 'orange' as const,
        title: 'No online membership signup ',
        note: 'requires in-person visit',
      },
    ],
    quote:
      "Pulse Fitness has great ratings but you're invisible to people searching 'gym Greenwich Village' right now, and your last social post was 3 months ago.",
  },
  {
    ariaLabel: 'Lead profile: Moreau & Associates LLP',
    name: 'Moreau & Associates LLP',
    locationLine: 'Law firm · Midtown, Manhattan',
    score: 85,
    signals: [
      {
        severity: 'red' as const,
        title: 'No AI receptionist ',
        note: 'leads lost after business hours',
      },
      {
        severity: 'red' as const,
        title: 'No online consultation booking ',
        note: 'friction at point of intent',
      },
      {
        severity: 'orange' as const,
        title: 'Google Ads running, no conversion tracking ',
        note: 'budget wasted',
      },
    ],
    quote:
      'Your 4.7★ reputation is excellent, but anyone calling after 6pm hits voicemail and calls your competitor instead. We fix that with an AI receptionist in a day.',
  },
  {
    ariaLabel: 'Lead profile: Hudson River Art Museum',
    name: 'Hudson River Art Museum',
    locationLine: 'Fine arts museum · Upper West Side, Manhattan',
    score: 74,
    signals: [
      {
        severity: 'red' as const,
        title: 'No online ticketing ',
        note: "visitors can't pre-book",
      },
      {
        severity: 'red' as const,
        title: 'No social media presence ',
        note: 'zero content reach',
      },
      {
        severity: 'orange' as const,
        title: 'Google visibility very low ',
        note: 'missing in local discovery',
      },
    ],
    quote:
      "Visitors find you on TripAdvisor but can't buy tickets before they visit the Upper West Side. You're losing spontaneous visits from tourists every single day.",
  },
  {
    ariaLabel: 'Lead profile: Dupont Plumbing Co.',
    name: 'Dupont Plumbing Co.',
    locationLine: "Plumbing contractor · Hell's Kitchen, Manhattan",
    score: 88,
    signals: [
      {
        severity: 'red' as const,
        title: 'No online booking system ',
        note: 'losing emergency calls at night',
      },
      {
        severity: 'orange' as const,
        title: 'Only 7 Google reviews · avg 4.1★ ',
        note: 'below local average',
      },
      {
        severity: 'orange' as const,
        title: 'No paid ads running ',
        note: 'competitors visible on Google',
      },
    ],
    quote:
      "Your competitors all have online booking now. You're losing emergency calls every evening. We can fix that in 48 hours.",
  },
  {
    ariaLabel: "Lead profile: Marco's Kitchen",
    name: "Marco's Kitchen",
    locationLine: 'Italian restaurant · Little Italy, Manhattan',
    score: 91,
    signals: [
      {
        severity: 'red' as const,
        title: 'No website ',
        note: 'invisible to search',
      },
      {
        severity: 'orange' as const,
        title: '23 unanswered reviews ',
        note: '· avg 4.1★',
      },
      {
        severity: 'orange' as const,
        title: 'Google profile 40% complete ',
        note: 'missing hours, photos',
      },
    ],
    quote:
      "23 unanswered reviews and no website mean you're invisible where clients look first. We fix that in a week.",
  },
]

const SCORE_TARGETS = cards.map((c) => c.score)
const DURATION_MS = 1500
const STAGGER_MS = 95

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3
}

const trackStyle = {
  display: 'flex',
  flexDirection: 'row' as const,
  flexWrap: 'nowrap' as const,
  width: 'max-content',
  gap: '1.25rem',
  padding: '2px 0 4px',
}

const slideStyle = {
  flex: '0 0 auto',
  width: 'min(20rem, calc(100vw - 3rem))',
  scrollSnapAlign: 'start' as const,
}

export function HeroLeadCards() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const startedRef = useRef(false)
  const rafRef = useRef<number | null>(null)
  /** null → use each card's static score; non-null → live count-up values */
  const [displayScores, setDisplayScores] = useState<number[] | null>(null)

  useEffect(() => {
    const root = sectionRef.current
    if (!root) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const startAnimation = () => {
      if (startedRef.current) return
      startedRef.current = true
      const start = performance.now()

      const tick = (now: number) => {
        const elapsed = now - start
        let complete = true
        const next = SCORE_TARGETS.map((target, i) => {
          const staggered = elapsed - i * STAGGER_MS
          if (staggered <= 0) {
            complete = false
            return 0
          }
          const t = Math.min(1, staggered / DURATION_MS)
          if (t < 1) complete = false
          return Math.round(easeOutCubic(t) * target)
        })
        setDisplayScores(next)
        if (!complete) {
          rafRef.current = requestAnimationFrame(tick)
        }
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) startAnimation()
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(root)
    return () => {
      observer.disconnect()
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div ref={sectionRef} className="hero-lead-cards-outer">
      <div
        className="hero-lead-cards-slider"
        role="region"
        aria-label="Recent scored leads for a NYC social media agency"
      >
        <div style={trackStyle}>
          {cards.map((card, i) => (
            <div key={card.ariaLabel} style={slideStyle}>
              <LeadCardV2
                {...card}
                displayScore={displayScores ? displayScores[i] : undefined}
                className="h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
