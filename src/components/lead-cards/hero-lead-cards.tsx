import { LeadCard } from '@/components/lead-cards/lead-card'
import {
  CarDealerIllustration,
  GymIllustration,
  LawyerIllustration,
  MuseumIllustration,
  PlumberIllustration,
  RestaurantIllustration,
} from '@/components/lead-cards/lead-card-illustrations'

const cards = [
  {
    illustration: <CarDealerIllustration />,
    ariaLabel: 'Lead profile: Skyline Motors NYC',
    score: '91 / 100',
    scoreDot: 'green' as const,
    categoryBadge: 'Car dealership · Chelsea, Manhattan',
    name: 'Skyline Motors NYC',
    location: 'Chelsea, Manhattan · 140+ vehicles · Premium inventory',
    signals: [
      {
        severity: 'red' as const,
        title: '47 unanswered reviews · avg. 3.9★',
        note: ' — reputation risk at scale',
      },
      {
        severity: 'red' as const,
        title: 'No AI receptionist',
        note: ' — high-intent leads lost after hours',
      },
      {
        severity: 'orange' as const,
        title: 'No online test-drive booking',
        note: ' — competitors offer this',
      },
      {
        severity: 'green' as const,
        title: 'Strong inventory · 140+ vehicles listed',
        note: ' high transaction value',
      },
    ],
    offerPct: 91,
    offerName: 'Reputation management + AI receptionist + Booking',
    quote:
      '47 unanswered reviews is costing you 4–5 sales a month in lost trust. We fix your reputation and add online test-drive booking in under a week.',
  },
  {
    illustration: <GymIllustration />,
    ariaLabel: 'Lead profile: Iron House Fitness',
    score: '79 / 100',
    scoreDot: 'orange' as const,
    categoryBadge: 'Gym · Williamsburg, Brooklyn',
    name: 'Iron House Fitness',
    location: 'Williamsburg, Brooklyn · Fitness · Near Bedford L',
    signals: [
      { severity: 'red' as const, title: 'Social media inactive', note: ' — last post 3 months ago' },
      { severity: 'orange' as const, title: 'No paid ads running', note: ' — high local search competition' },
      { severity: 'orange' as const, title: 'No online membership signup', note: ' — sign-ups require in-person visit' },
      { severity: 'green' as const, title: '4.4★ · High search volume nearby', note: ' strong local intent' },
    ],
    offerPct: 79,
    offerName: 'Social media management + Paid ads + Online booking',
    quote:
      'Iron House has great ratings but you are invisible to people searching for a gym in Williamsburg right now — your last social post was 3 months ago.',
  },
  {
    illustration: <LawyerIllustration />,
    ariaLabel: 'Lead profile: Moreau & Associates LLP',
    score: '85 / 100',
    scoreDot: 'green' as const,
    categoryBadge: 'Law firm · Midtown Manhattan',
    name: 'Moreau & Associates LLP',
    location: 'Midtown Manhattan · Corporate law · 8 attorneys',
    signals: [
      { severity: 'red' as const, title: 'No AI receptionist', note: ' — leads lost after business hours' },
      { severity: 'red' as const, title: 'No online consultation booking', note: ' — friction at point of intent' },
      {
        severity: 'orange' as const,
        title: 'Google Ads running, no conversion tracking',
        note: ' — budget wasted',
      },
      { severity: 'green' as const, title: '4.7★ · 34 reviews', note: ' strong existing reputation' },
    ],
    offerPct: 85,
    offerName: 'AI receptionist + Booking page + Ads audit',
    quote:
      'Your 4.7★ reputation is excellent — but anyone calling after 6pm hits voicemail and calls your competitor instead. We fix that with an AI receptionist in a day.',
  },
  {
    illustration: <MuseumIllustration />,
    ariaLabel: 'Lead profile: Hudson River Art Museum',
    score: '74 / 100',
    scoreDot: 'orange' as const,
    categoryBadge: 'Fine arts museum · Upper West Side',
    name: 'Hudson River Art Museum',
    location: 'Upper West Side, Manhattan · Public institution · Fine arts',
    signals: [
      {
        severity: 'red' as const,
        title: 'No online ticketing system',
        note: " — cash or door only, visitors can't pre-book",
      },
      { severity: 'red' as const, title: 'No social media presence', note: ' — zero content reach' },
      {
        severity: 'orange' as const,
        title: 'Google visibility score: very low',
        note: ' — missing in local discovery searches',
      },
      {
        severity: 'green' as const,
        title: 'TripAdvisor 4.6★ · 280 reviews',
        note: ' strong existing audience to activate',
      },
    ],
    offerPct: 74,
    offerName: 'Digital presence + Online ticketing + Social media',
    quote:
      'Visitors find you on TripAdvisor but cannot buy tickets before they visit the Upper West Side — you are losing spontaneous visits from tourists every single day.',
  },
  {
    illustration: <PlumberIllustration />,
    ariaLabel: 'Lead profile: Dupont Plumbing Co.',
    score: '88 / 100',
    scoreDot: 'green' as const,
    categoryBadge: 'Plumbing · Astoria, Queens',
    name: 'Dupont Plumbing Co.',
    location: 'Astoria, Queens · Contractor · Est. 2016',
    signals: [
      {
        severity: 'red' as const,
        title: 'No online booking system',
        note: ' — losing emergency calls at night',
      },
      { severity: 'orange' as const, title: 'Only 7 Google reviews · avg. 4.1★', note: ' below local average' },
      { severity: 'orange' as const, title: 'No paid ads running', note: ' competitors visible on Google' },
      { severity: 'green' as const, title: 'Strong word of mouth', note: ' ~12 new clients/month' },
    ],
    offerPct: 88,
    offerName: 'Google Ads + Online booking integration',
    quote:
      'Mr. Dupont — your competitors all have online booking now. You are losing emergency calls every evening. We can fix that in 48 hours.',
  },
  {
    illustration: <RestaurantIllustration />,
    ariaLabel: "Lead profile: Marco's Kitchen",
    score: '91 / 100',
    scoreDot: 'green' as const,
    categoryBadge: 'Italian restaurant · Little Italy, Manhattan',
    name: "Marco's Kitchen",
    location: 'Little Italy, Manhattan · Est. 2019 · Dining',
    signals: [
      { severity: 'red' as const, title: 'No website detected', note: ' — critical revenue gap' },
      { severity: 'orange' as const, title: '23 unanswered Google reviews', note: ' avg. 3.7★' },
      { severity: 'orange' as const, title: 'GBP profile 40% complete', note: ' missing menu & photos' },
      { severity: 'green' as const, title: 'Active Instagram · 2.4k followers', note: ' owner engaged' },
    ],
    offerPct: 91,
    offerName: 'Local SEO + Reputation management',
    quote:
      "Hi Marco — noticed your restaurant has 23 unanswered reviews and no website. That's real revenue off the table. We help New York restaurants fix that, fast.",
  },
]

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
  width: 'min(22.5rem, calc(100vw - 3rem))',
  scrollSnapAlign: 'start' as const,
}

export function HeroLeadCards() {
  return (
    <div className="hero-lead-cards-outer">
      <div className="hero-lead-cards-slider" role="region" aria-label="Example lead profiles">
        <div style={trackStyle}>
          {cards.map((card) => (
            <div key={card.ariaLabel} style={slideStyle}>
              <LeadCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
