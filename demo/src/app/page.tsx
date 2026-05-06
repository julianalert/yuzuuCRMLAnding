import { AnnouncementBadge } from '@/components/elements/announcement-badge'
import { ButtonLink, PlainButtonLink, SoftButtonLink } from '@/components/elements/button'
import { EmailSignupForm } from '@/components/elements/email-signup-form'
import { Link } from '@/components/elements/link'
import { Logo, LogoGrid } from '@/components/elements/logo-grid'
import { Main } from '@/components/elements/main'
import { Screenshot } from '@/components/elements/screenshot'
import { FocusEmailOnHash } from '@/components/elements/focus-email-on-hash'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { ChevronIcon } from '@/components/icons/chevron-icon'
import { ClockIcon } from '@/components/icons/clock-icon'
import { CheckmarkIcon } from '@/components/icons/checkmark-icon'
import { MailIcon } from '@/components/icons/mail-icon'
import { RepeatIcon } from '@/components/icons/repeat-icon'
import { TargetIcon } from '@/components/icons/target-icon'
import { GitHubIcon } from '@/components/icons/social/github-icon'
import { XIcon } from '@/components/icons/social/x-icon'
import { YouTubeIcon } from '@/components/icons/social/youtube-icon'
import { CallToActionSimple } from '@/components/sections/call-to-action-simple'
import { FAQsTwoColumnAccordion, Faq } from '@/components/sections/faqs-two-column-accordion'
import { FeatureThreeColumnWithDemos, Features } from '@/components/sections/features-three-column-with-demos'
import {
  FooterLink,
  FooterWithLinksAndSocialIcons,
  SocialLink,
} from '@/components/sections/footer-with-links-and-social-icons'
import { HeroWithDemoOnBackground } from '@/components/sections/hero-with-demo-on-background'
import {
  NavbarLink,
  NavbarLogo,
  NavbarWithLogoActionsAndCenteredLinks,
} from '@/components/sections/navbar-with-logo-actions-and-centered-links'
import { Plan, PricingMultiTier } from '@/components/sections/pricing-multi-tier'
import { ProblemPainCard, ProblemPainPoints } from '@/components/sections/problem-pain-points'
import { Stat, StatsWithGraph } from '@/components/sections/stats-with-graph'
import { TestimonialLargeQuote } from '@/components/sections/testimonial-with-large-quote'

export default function Page() {
  return (
    <>
      <NavbarWithLogoActionsAndCenteredLinks
        id="navbar"
        links={<></>}
        logo={
          <NavbarLogo href="#">
            <span className="font-['Instrument_Serif'] text-2xl text-olive-950 dark:text-white">Yuzuu</span>
          </NavbarLogo>
        }
        actions={
          <ButtonLink href="#hero">Get early access</ButtonLink>
        }
      />

      <Main>
        <FocusEmailOnHash formId="hero" inputSelector="#email-signup input[type='email']" />
        {/* Hero */}
        {/* Hidden: logo grid footer prop
        <LogoGrid>
          <Logo>
            <img src="https://assets.tailwindplus.com/logos/9.svg?color=black&height=32" className="dark:hidden" alt="" width={51} height={32} />
            <img src="https://assets.tailwindplus.com/logos/9.svg?color=white&height=32" className="bg-black/75 not-dark:hidden" alt="" width={51} height={32} />
          </Logo>
          <Logo>
            <img src="https://assets.tailwindplus.com/logos/10.svg?color=black&height=32" className="dark:hidden" alt="" width={70} height={32} />
            <img src="https://assets.tailwindplus.com/logos/10.svg?color=white&height=32" className="bg-black/75 not-dark:hidden" alt="" width={70} height={32} />
          </Logo>
          <Logo>
            <img src="https://assets.tailwindplus.com/logos/11.svg?color=black&height=32" className="dark:hidden" alt="" width={100} height={32} />
            <img src="https://assets.tailwindplus.com/logos/11.svg?color=white&height=32" className="bg-black/75 not-dark:hidden" alt="" width={100} height={32} />
          </Logo>
          <Logo>
            <img src="https://assets.tailwindplus.com/logos/12.svg?color=black&height=32" className="dark:hidden" alt="" width={85} height={32} />
            <img src="https://assets.tailwindplus.com/logos/12.svg?color=white&height=32" className="bg-black/75 not-dark:hidden" alt="" width={85} height={32} />
          </Logo>
          <Logo>
            <img src="https://assets.tailwindplus.com/logos/13.svg?color=black&height=32" className="dark:hidden" alt="" width={75} height={32} />
            <img src="https://assets.tailwindplus.com/logos/13.svg?color=white&height=32" className="bg-black/75 not-dark:hidden" alt="" width={75} height={32} />
          </Logo>
          <Logo>
            <img src="https://assets.tailwindplus.com/logos/8.svg?color=black&height=32" className="dark:hidden" alt="" width={85} height={32} />
            <img src="https://assets.tailwindplus.com/logos/8.svg?color=white&height=32" className="bg-black/75 not-dark:hidden" alt="" width={85} height={32} />
          </Logo>
        </LogoGrid>
        */}
        <HeroWithDemoOnBackground
          id="hero"
          eyebrow={
            <AnnouncementBadge href="#hero" text="Free during early access. Limited spots available." variant="overlay" />
          }
          headline="Find local businesses that need exactly what you sell."
          subheadline={
            <p>
              Yuzuu searches Google Maps, scores every lead against your offer, and tells you exactly who to contact and what to say.
            </p>
          }
          cta={
            <EmailSignupForm
              id="email-signup"
              className="max-w-full"
              variant="overlay"
              cta={
                <>
                  Get early access <ArrowNarrowRightIcon />
                </>
              }
            />
          }
          demo={<img src="/img/screenshots/1.png" alt="" className="w-full" />}
        />

        <ProblemPainPoints
          id="problem"
          eyebrow="The problem"
          headline={
            <>
              Prospecting local businesses is painfully manual today.
            </>
          }
          subheadline={
            <p>
              Building a qualified list of local prospects still means living in Google Maps and spreadsheets — with
              almost no signal on who actually needs what you sell before you reach out.
            </p>
          }
          quote={
            <p>
              I spend half my week building lead lists in Google Maps, copy-pasting into spreadsheets, then still not
              knowing if they even need what I sell. Half the time the business already has a website and I wasted an
              hour.
            </p>
          }
          quoteAttribution="— Agency owner, selling local SEO for 3 years"
        >
          <ProblemPainCard
            icon={<ClockIcon className="size-5" />}
            headline="Hours wasted on manual research"
            description="You open dozens of listings, skim sites and reviews, and still end up guessing whether a business is a fit."
          />
          <ProblemPainCard
            icon={<TargetIcon className="size-5" />}
            headline="No way to prioritise the list"
            description="Google Maps gives you a raw dump of pins — not a ranked queue of who to call first based on your offer."
          />
          <ProblemPainCard
            icon={<MailIcon className="size-5" />}
            headline="Generic outreach that gets ignored"
            description="Without clear signals per lead, cold email defaults to vague templates that never earn replies."
          />
          <ProblemPainCard
            icon={<RepeatIcon className="size-5" />}
            headline="No repeatable process"
            description="Every rep does it differently — different tabs, notes, spreadsheets — so quality varies and nothing scales."
          />
        </ProblemPainPoints>

        {/* Features */}
        <Features
          id="features"
          headline="A prospecting tool that understands your offer and finds who actually needs it."
          subheadline={
            <p>
              Stop guessing who needs what you sell. Let Yuzuu do the research. You show up to the conversation already knowing the pitch.
            </p>
          }
          cta={
            <Link href="#">
              See how it works <ArrowNarrowRightIcon />
            </Link>
          }
          features={
            <>
              <FeatureThreeColumnWithDemos
                demo={
                  <Screenshot wallpaper="blue" placement="bottom-right">
                    <img
                      src="https://assets.tailwindplus.com/screenshots/1.webp?left=1200&top=736"
                      alt=""
                      className="bg-white/75 sm:hidden dark:hidden"
                      width={1200}
                      height={736}
                    />
                    <img
                      src="https://assets.tailwindplus.com/screenshots/1.webp?left=1200&top=736&color=olive"
                      alt=""
                      width={1200}
                      height={736}
                      className="bg-black/75 not-dark:hidden sm:hidden"
                    />
                    <img
                      src="https://assets.tailwindplus.com/screenshots/1.webp?left=1800&top=736"
                      alt=""
                      className="bg-white/75 max-sm:hidden lg:hidden dark:hidden"
                      width={1800}
                      height={736}
                    />
                    <img
                      src="https://assets.tailwindplus.com/screenshots/1.webp?left=1800&top=736&color=olive"
                      alt=""
                      width={1800}
                      height={736}
                      className="bg-black/75 not-dark:hidden max-sm:hidden lg:hidden"
                    />
                    <img
                      src="https://assets.tailwindplus.com/screenshots/1.webp?left=1200&top=736"
                      alt=""
                      className="bg-white/75 max-lg:hidden dark:hidden"
                      width={1200}
                      height={736}
                    />
                    <img
                      src="https://assets.tailwindplus.com/screenshots/1.webp?left=1200&top=736&color=olive"
                      alt=""
                      width={1200}
                      height={736}
                      className="bg-black/75 not-dark:hidden max-lg:hidden"
                    />
                  </Screenshot>
                }
                headline={
                  <>
                    <span className="mb-2 block text-sm font-semibold tabular-nums text-olive-500 dark:text-olive-400">
                      01
                    </span>
                    Tell us what you sell and where you&apos;re looking
                  </>
                }
                subheadline={
                  <>
                    <p>Enter a business category, a city, and describe your offer.</p>
                    <p className="pt-1 text-xs font-semibold tracking-wide text-olive-600 dark:text-olive-400">
                      1-min setup
                    </p>
                  </>
                }
              />
              <FeatureThreeColumnWithDemos
                demo={
                  <Screenshot wallpaper="purple" placement="top-left">
                    <img
                      src="https://assets.tailwindplus.com/screenshots/1.webp?right=1200&bottom=736"
                      alt=""
                      className="bg-white/75 sm:hidden dark:hidden"
                      width={1200}
                      height={736}
                    />
                    <img
                      src="https://assets.tailwindplus.com/screenshots/1.webp?right=1200&bottom=736&color=olive"
                      alt=""
                      width={1200}
                      height={736}
                      className="bg-black/75 not-dark:hidden sm:hidden"
                    />
                    <img
                      src="https://assets.tailwindplus.com/screenshots/1.webp?right=1800&bottom=736"
                      alt=""
                      className="bg-white/75 max-sm:hidden lg:hidden dark:hidden"
                      width={1800}
                      height={736}
                    />
                    <img
                      src="https://assets.tailwindplus.com/screenshots/1.webp?right=1800&bottom=736&color=olive"
                      alt=""
                      width={1800}
                      height={736}
                      className="bg-black/75 not-dark:hidden max-sm:hidden lg:hidden"
                    />
                    <img
                      src="https://assets.tailwindplus.com/screenshots/1.webp?right=1200&bottom=736"
                      alt=""
                      className="bg-white/75 max-lg:hidden dark:hidden"
                      width={1200}
                      height={736}
                    />
                    <img
                      src="https://assets.tailwindplus.com/screenshots/1.webp?right=1200&bottom=736&color=olive"
                      alt=""
                      width={1200}
                      height={736}
                      className="bg-black/75 not-dark:hidden max-lg:hidden"
                    />
                  </Screenshot>
                }
                headline={
                  <>
                    <span className="mb-2 block text-sm font-semibold tabular-nums text-olive-500 dark:text-olive-400">
                      02
                    </span>
                    Get a scored list of local businesses instantly
                  </>
                }
                subheadline={
                  <>
                    <p>
                      Yuzuu pulls local businesses from Google Maps and computes a surface score for each one based on
                      rating, review count, website presence, and fit with your offer. Browse, filter, sort.
                    </p>
                    <p className="pt-1 text-xs font-semibold tracking-wide text-olive-600 dark:text-olive-400">
                      seconds
                    </p>
                  </>
                }
              />
              <FeatureThreeColumnWithDemos
                demo={
                  <Screenshot wallpaper="brown" placement="bottom-left">
                    <img
                      src="https://assets.tailwindplus.com/screenshots/1.webp?right=1200&top=736"
                      alt=""
                      className="bg-white/75 sm:hidden dark:hidden"
                      width={1200}
                      height={736}
                    />
                    <img
                      src="https://assets.tailwindplus.com/screenshots/1.webp?right=1200&top=736&color=olive"
                      alt=""
                      width={1200}
                      height={736}
                      className="bg-black/75 not-dark:hidden sm:hidden"
                    />
                    <img
                      src="https://assets.tailwindplus.com/screenshots/1.webp?right=1800&top=736"
                      alt=""
                      className="bg-white/75 max-sm:hidden lg:hidden dark:hidden"
                      width={1800}
                      height={736}
                    />
                    <img
                      src="https://assets.tailwindplus.com/screenshots/1.webp?right=1800&top=736&color=olive"
                      alt=""
                      className="bg-black/75 not-dark:hidden max-sm:hidden lg:hidden"
                      width={1800}
                      height={736}
                    />
                    <img
                      src="https://assets.tailwindplus.com/screenshots/1.webp?right=1200&top=736"
                      alt=""
                      className="bg-white/75 max-lg:hidden dark:hidden"
                      width={1200}
                      height={736}
                    />
                    <img
                      src="https://assets.tailwindplus.com/screenshots/1.webp?right=1200&top=736&color=olive"
                      alt=""
                      className="bg-black/75 not-dark:hidden max-lg:hidden"
                      width={1200}
                      height={736}
                    />
                  </Screenshot>
                }
                headline={
                  <>
                    <span className="mb-2 block text-sm font-semibold tabular-nums text-olive-500 dark:text-olive-400">
                      03
                    </span>
                    Enrich the leads that look promising, on demand.
                  </>
                }
                subheadline={
                  <p>
                    Click &quot;Enrich&quot; on any lead. Yuzuu scrapes their website, checks social presence, and
                    analyses review sentiment. They enter your cold outreach process.
                  </p>
                }
              />
            </>
          }
        />

        {/* Stats — hidden
        <StatsWithGraph
          id="stats"
          eyebrow="Built for scale"
          headline="The inbox powering customer conversations everywhere."
          subheadline={
            <p>
              Yuzuu helps teams deliver personal, organized, and fast customer support across the world. From small
              startups to enterprise teams, we process millions of messages each month — using a massive network of low
              wage workers stationed around the globe.
            </p>
          }
        >
          <Stat stat="2M+" text="Emails manually processed every week across thousands of teams." />
          <Stat stat="99.98%" text="Uptime — because your customers never stop complaining." />
        </StatsWithGraph>
        */}

        {/* Testimonial — hidden
        <TestimonialLargeQuote
          id="testimonial"
          quote={
            <p>
              Yuzuu has completely transformed our customer support operations. The blend of AI efficiency and human
              empathy has allowed us to provide exceptional service while significantly reducing costs.
            </p>
          }
          img={
            <img
              src="https://assets.tailwindplus.com/avatars/10.webp?size=160"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="Jordan Rogers"
          byline="Founder at Anomaly"
        />
        */}

        {/* FAQs — hidden
        <FAQsTwoColumnAccordion id="faqs" headline="Questions & Answers">
          <Faq
            id="faq-1"
            question="Do I need a credit card to start the free trial?"
            answer="Yes, but don't worry, you won't be charged until the trial period is over. We won't send you an email reminding you when this happens because we are really hoping you'll forget and we can keep charging you until your cards expires"
          />
          <Faq
            id="faq-2"
            question="Can my whole team use the same inbox?"
            answer="Yes, the more the merrier! Yuzuu works best when your entire company has access. We will charge you per additional seat, but we won't tell you about this until you get your invoice."
          />
          <Faq
            id="faq-3"
            question="Is the AI agent actually a bunch of people in India?"
            answer="Not just India! We have people in lots of countries around the world pretending to be an AI, including some that are currently under sanctions, so we can't legally mention them here."
          />
          <Faq
            id="faq-4"
            question="Does Yuzuu replace my email client?"
            answer="Absolutely. The idea is that we transition you away from email entirely, so you become completely dependent on our service. Like a parasite living off a host."
          />
        </FAQsTwoColumnAccordion>
        */}

        {/* Pricing — hidden
        <PricingMultiTier
          id="pricing"
          headline="Pricing to fit your business needs."
          plans={
            <>
              <Plan
                name="Starter"
                price="$12"
                period="/mo"
                subheadline={<p>Small teams getting started with shared inboxes</p>}
                features={[
                  'Shared inbox for up to 2 mailboxes',
                  'Tagging & assignment',
                  'Private notes',
                  'Automatic replies',
                  'Email support',
                ]}
                cta={
                  <SoftButtonLink href="#" size="lg">
                    Start free trial
                  </SoftButtonLink>
                }
              />
              <Plan
                name="Growth"
                price="$49"
                period="/mo"
                subheadline={<p>Growing teams needing collaboration and insights</p>}
                badge="Most popular"
                features={[
                  'Everything in Starter',
                  'Inbox Agent',
                  'Unlimited mailboxes',
                  'Collision detection',
                  'Snippets and templates',
                  'Reporting dashboard',
                  'Slack integration',
                ]}
                cta={
                  <ButtonLink href="#" size="lg">
                    Start free trial
                  </ButtonLink>
                }
              />
              <Plan
                name="Pro"
                price="$299"
                period="/mo"
                subheadline={<p>Support-focused organizations and larger teams</p>}
                features={[
                  'Everything in Growth',
                  'Custom roles & permissions',
                  'Automation engine',
                  'API access',
                  'SLA tracking',
                  'SSO support',
                  'SOC 2 compliance',
                ]}
                cta={
                  <SoftButtonLink href="#" size="lg">
                    Start free trial
                  </SoftButtonLink>
                }
              />
            </>
          }
        />
        */}

        <CallToActionSimple
          id="call-to-action"
          subheadlineFullWidth
          headline="We're looking for 3 agencies to use Yuzuu for free"
          subheadline={
            <>
              <p>
                We want to work directly with a handful of agencies to make it genuinely useful, not just technically
                functional. <br /> In exchange for free access, we ask for honest weekly feedback: what&apos;s working,
                what&apos;s broken, what&apos;s missing.
              </p>
              <ul className="space-y-2">
                <li className="flex gap-4">
                  <CheckmarkIcon className="h-lh shrink-0 stroke-olive-950 dark:stroke-white" />
                  <p>Full access to all features: search, scoring, enrichment, email drafts</p>
                </li>
                <li className="flex gap-4">
                  <CheckmarkIcon className="h-lh shrink-0 stroke-olive-950 dark:stroke-white" />
                  <p>Unlimited searches and enrichments for the duration of the trial</p>
                </li>
                <li className="flex gap-4">
                  <CheckmarkIcon className="h-lh shrink-0 stroke-olive-950 dark:stroke-white" />
                  <p>Direct line to the founder: you shape what gets built next</p>
                </li>
                <li className="flex gap-4">
                  <CheckmarkIcon className="h-lh shrink-0 stroke-olive-950 dark:stroke-white" />
                  <p>Locked-in early pricing when paid plans launch</p>
                </li>
                <li className="flex gap-4">
                  <CheckmarkIcon className="h-lh shrink-0 stroke-olive-950 dark:stroke-white" />
                  <p>No commitment, no credit card</p>
                </li>
              </ul>
            </>
          }
          cta={
            <div className="flex items-center gap-4">
              <ButtonLink href="#hero" size="lg">
               Get early access
              </ButtonLink>

              <PlainButtonLink href="https://calendly.com/not-another-marketer/free-ai-growth-audit-call" size="lg">
                Book a demo <ChevronIcon />
              </PlainButtonLink>
            </div>
          }
        />
      </Main>

      <FooterWithLinksAndSocialIcons
        id="footer"
        links={<></>}
        socialLinks={
          <SocialLink href="https://x.com/notanothermrktr" name="X">
            <XIcon />
          </SocialLink>
        }
        fineprint="Made with 💚 in France © 2026 Yuzuu. All rights reserved."
      />
    </>
  )
}
