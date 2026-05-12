import Image from 'next/image'

import { AnnouncementBadge } from '@/components/elements/announcement-badge'
import { CalendlyEarlyAccessButtonLink } from '@/components/elements/calendly-tracking'
import { Main } from '@/components/elements/main'
import { FeatureStatCard } from '@/components/elements/feature-stat-card'
import { HeroLeadCards } from '@/components/lead-cards/hero-lead-cards'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { ClockIcon } from '@/components/icons/clock-icon'
import { CheckmarkIcon } from '@/components/icons/checkmark-icon'
import { MailIcon } from '@/components/icons/mail-icon'
import { RepeatIcon } from '@/components/icons/repeat-icon'
import { TargetIcon } from '@/components/icons/target-icon'
import { XIcon } from '@/components/icons/social/x-icon'
import { CallToActionSimple } from '@/components/sections/call-to-action-simple'
import { FAQsTwoColumnAccordion, Faq } from '@/components/sections/faqs-two-column-accordion'
import { FeatureThreeColumnWithDemos, Features } from '@/components/sections/features-three-column-with-demos'
import { FooterWithLinksAndSocialIcons, SocialLink } from '@/components/sections/footer-with-links-and-social-icons'
import { HeroLeftAlignedWithDemo } from '@/components/sections/hero-left-aligned-with-demo'
import {
  NavbarLink,
  NavbarLogo,
  NavbarWithLogoActionsAndCenteredLinks,
} from '@/components/sections/navbar-with-logo-actions-and-centered-links'
import { ProblemPainCard, ProblemPainPoints } from '@/components/sections/problem-pain-points'
import { Stat, StatsWithGraph } from '@/components/sections/stats-with-graph'

export default function Page() {
  return (
    <>
      <NavbarWithLogoActionsAndCenteredLinks
        id="navbar"
        links={
          <>
            <NavbarLink href="#features">How it works?</NavbarLink>
            <NavbarLink href="#faqs">FAQ</NavbarLink>
            <NavbarLink href="#call-to-action">Get early access</NavbarLink>
          </>
        }
        logo={
          <NavbarLogo href="#hero">
            <span className="font-['Instrument_Serif'] text-2xl text-mist-950 dark:text-white">Yuzuu</span>
          </NavbarLogo>
        }
        actions={
          <CalendlyEarlyAccessButtonLink href="#call-to-action" target="_self">
            Get early access
          </CalendlyEarlyAccessButtonLink>
        }
      />

      <Main>
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
        <HeroLeftAlignedWithDemo
          id="hero"
          stackGapClassName="gap-16 lg:gap-20"
          eyebrow={
            <AnnouncementBadge
              href="#call-to-action"
              text="free early access, no credit card · 1 out of 3 spots left"
              cta="Get early access"
            />
          }
          headline="Stop prospecting. Show up to calls. Close deals."
          subheadline={
            <p>
              Tell Yuzuu what you sell and where. It fills your agency pipeline with scored, local leads. You only show up to the calls.
            </p>
          }
          cta={
            <div className="flex max-w-xl flex-col items-start gap-4 sm:flex-row sm:items-center">
              <CalendlyEarlyAccessButtonLink
                href="#call-to-action"
                target="_self"
                size="lg"
                className="!bg-gradient-to-r !from-orange-500 !to-rose-500 !text-white !shadow-lg hover:!from-orange-600 hover:!to-rose-600"
              >
                Get early access
              </CalendlyEarlyAccessButtonLink>
              <p className="flex items-center gap-2 text-sm italic text-mist-700 dark:text-mist-400">
                you'll be granted early access
              </p>
            </div>
          }
          demo={<HeroLeadCards />}
        />

        <ProblemPainPoints
          id="problem"
          eyebrow="The problem"
          headline={
            <>
              Finding new customers for your agency is painfully time-consuming today
            </>
          }
          subheadline={
            <p>
              Building a qualified list of local prospects still means living in Google Maps and spreadsheets, with
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
          quoteAttribution={
            <span className="flex items-center gap-4">
              <Image
                src="/img/clementb.jpeg"
                alt="Clément Bernard"
                width={56}
                height={56}
                className="size-14 shrink-0 rounded-full object-cover ring-1 ring-mist-950/10 dark:ring-white/10"
              />
              <span className="text-pretty">
                <a
                  href="https://www.linkedin.com/in/clementbernard-/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-mist-950 underline decoration-mist-950/25 underline-offset-2 hover:decoration-mist-950/50 dark:text-white dark:decoration-white/25 dark:hover:decoration-white/50"
                >
                  Clément Bernard
                </a>
                <span className="font-normal">
                  {' '}
                  — Local SEO Marketing Agency Owner
                </span>
              </span>
            </span>
          }
        >
          <ProblemPainCard
            icon={<ClockIcon className="size-5" />}
            headline="Hours wasted on manual research"
            description="You open dozens of listings, skim sites and reviews, and still end up guessing whether a business is a fit."
          />
          <ProblemPainCard
            icon={<TargetIcon className="size-5" />}
            headline="No way to prioritise the list"
            description="You scrape Google Maps, it gives you a raw dump of pins, not a ranked queue of who to call first based on your offer."
          />
          <ProblemPainCard
            icon={<MailIcon className="size-5" />}
            headline="Generic outreach that gets ignored"
            description="Without clear signals per lead, cold email defaults to vague templates that never earn replies."
          />
          <ProblemPainCard
            icon={<RepeatIcon className="size-5" />}
            headline="No repeatable process"
            description="Every rep does it differently: different tabs, notes, spreadsheets, so quality varies and nothing scales."
          />
        </ProblemPainPoints>

        {/* Features */}
        <Features
          id="features"
          eyebrow={
            <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-xs font-semibold uppercase tracking-wider text-transparent dark:from-orange-400 dark:to-rose-400">
              Prospecting infrastructure built for busy agencies
            </span>
          }
          headline="Grow your revenue faster, all in one place"
          subheadline={
            <p>
              Yuzuu agents automate demand gen, pipeline management, and follow-ups so you can spend your time with customers.
            </p>
          }
          cta={
            <CalendlyEarlyAccessButtonLink
              href="#call-to-action"
              target="_self"
              size="lg"
              className="!w-fit self-start inline-flex !items-center !gap-2 !bg-gradient-to-r !from-orange-500 !to-rose-500 !font-semibold !text-white !shadow-lg hover:!from-orange-600 hover:!to-rose-600"
            >
              Get early access
              <ArrowNarrowRightIcon className="size-3.5 shrink-0" aria-hidden />
            </CalendlyEarlyAccessButtonLink>
          }
          features={
            <>
              <FeatureThreeColumnWithDemos
                demo={
                  <div className="flex w-full flex-col items-center gap-2 px-4 sm:px-6">
                    <FeatureStatCard
                      className="mx-auto w-full max-w-[min(30rem,100%)]"
                      emoji="🔥"
                      label="Warm opportunities"
                      value="350"
                      caption="found this month"
                      delta="+18%"
                      period="May 2026"
                    />
                  </div>
                }
                headline={
                  <>
                    <span className="mb-2 block text-sm font-semibold tabular-nums text-mist-500 dark:text-mist-400">
                      01
                    </span>
                    Leads keep flowing in, not only when someone squeezes in prospecting time
                  </>
                }
                subheadline={
                  <>
                    <p>
                      Your scored queue stays fed from Google Maps so there&apos;s always the next batch of local
                      businesses to review, without another manual scrape or spreadsheet marathon.
                    </p>
                    <p className="pt-1 text-xs font-semibold tracking-wide text-mist-600 dark:text-mist-400">
                      Always-on lead intake
                    </p>
                  </>
                }
              />
              <FeatureThreeColumnWithDemos
                demo={
                  <div className="flex w-full flex-col items-center gap-2 px-4 sm:px-6">
                    <FeatureStatCard
                      className="mx-auto w-full max-w-[min(30rem,100%)]"
                      emoji="📅"
                      label="Meetings booked"
                      value="24"
                      caption="scheduled this month"
                      delta="+12%"
                      period="May 2026"
                    />
                  </div>
                }
                headline={
                  <>
                    <span className="mb-2 block text-sm font-semibold tabular-nums text-mist-500 dark:text-mist-400">
                      02
                    </span>
                    Meetings booked on autopilot, not endless scheduling ping-pong
                  </>
                }
                subheadline={
                  <>
                    <p>
                      Outreach runs on rails: drafts, reminders, and hand-offs so interested prospects land on your
                      calendar while you stay focused on the conversations that close deals.
                    </p>
                    <p className="pt-1 text-xs font-semibold tracking-wide text-mist-600 dark:text-mist-400">
                      Calendar fills in the background
                    </p>
                  </>
                }
              />
              <FeatureThreeColumnWithDemos
                demo={
                  <div className="flex w-full flex-col items-center gap-2 px-4 sm:px-6">
                    <FeatureStatCard
                      className="mx-auto w-full max-w-[min(30rem,100%)]"
                      emoji="📈"
                      label="Pipeline value"
                      value="$67,204"
                      caption="in qualified stages"
                      delta="+24%"
                      period="May 2026"
                    />
                  </div>
                }
                headline={
                  <>
                    <span className="mb-2 block text-sm font-semibold tabular-nums text-mist-500 dark:text-mist-400">
                      03
                    </span>
                    Pipeline management that grows deal value, not just tidy columns
                  </>
                }
                subheadline={
                  <>
                    <p>
                      Stages, owners, and next steps stay visible in one place so opportunities don&apos;t stall. Less
                      guesswork means faster progression, and a pipeline total that reflects real upside.
                    </p>
                    <p className="pt-1 text-xs font-semibold tracking-wide text-mist-600 dark:text-mist-400">
                      Compounding pipeline value
                    </p>
                  </>
                }
              />
            </>
          }
        />

        <StatsWithGraph
          id="stats"
          eyebrow={
            <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-xs font-semibold uppercase tracking-wider text-transparent dark:from-orange-400 dark:to-rose-400">
              Time to value
            </span>
          }
          headline="Yuzuu starts working for you right away"
          subheadline={
            <p>
              You start getting your first calls with your ideal customers in a few days, not weeks, all while you
              focus on closing deals, not outbound prospecting.
            </p>
          }
          belowChart={
            <div className="w-full min-w-0">
              <div className="grid w-full min-w-0 grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                <div className="flex min-w-0 flex-col overflow-hidden rounded-xl border border-mist-950/[0.07] bg-white dark:border-white/10 dark:bg-white/[0.05]">
                  <div className="h-2 bg-gradient-to-r from-orange-500 to-rose-500 dark:from-orange-400 dark:to-rose-400" aria-hidden />
                  <div className="flex min-w-0 flex-col p-6 sm:p-8">
                    <h3 className="text-base font-semibold leading-snug text-mist-950 dark:text-white">
                      Big B2B databases (Google Maps, Apollo, ZoomInfo)
                    </h3>
                    <ul className="mt-5 flex list-none flex-col gap-3 text-sm text-mist-700 dark:text-mist-400" role="list">
                      <li className="flex min-w-0 items-start gap-[9px]">
                        <span className="flex h-7 shrink-0 items-center" aria-hidden>
                          <span className="size-1.5 rounded-full bg-mist-400 dark:bg-mist-500" />
                        </span>
                        <span className="min-w-0 flex-1 leading-7">Generic firmographic data</span>
                      </li>
                      <li className="flex min-w-0 items-start gap-[9px]">
                        <span className="flex h-7 shrink-0 items-center" aria-hidden>
                          <span className="size-1.5 rounded-full bg-mist-400 dark:bg-mist-500" />
                        </span>
                        <span className="min-w-0 flex-1 leading-7">Spray-and-pray lists of thousands</span>
                      </li>
                      <li className="flex min-w-0 items-start gap-[9px]">
                        <span className="flex h-7 shrink-0 items-center" aria-hidden>
                          <span className="size-1.5 rounded-full bg-mist-400 dark:bg-mist-500" />
                        </span>
                        <span className="min-w-0 flex-1 leading-7">No signal on why to reach out</span>
                      </li>
                      <li className="flex min-w-0 items-start gap-[9px]">
                        <span className="flex h-7 shrink-0 items-center" aria-hidden>
                          <span className="size-1.5 rounded-full bg-mist-400 dark:bg-mist-500" />
                        </span>
                        <span className="min-w-0 flex-1 leading-7">You write the pitch</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex min-w-0 flex-col overflow-hidden rounded-xl border border-mist-950/[0.07] bg-white dark:border-white/10 dark:bg-white/[0.05]">
                  <div className="h-2 bg-gradient-to-r from-emerald-500 to-green-600 dark:from-emerald-400 dark:to-green-500" aria-hidden />
                  <div className="flex min-w-0 flex-col p-6 sm:p-8">
                    <h3 className="text-base font-semibold leading-snug text-mist-950 dark:text-white">Yuzuu</h3>
                    <ul className="mt-5 flex list-none flex-col gap-3 text-sm text-mist-950 dark:text-mist-200" role="list">
                      <li className="flex min-w-0 items-start gap-[9px]">
                        <span className="flex h-7 shrink-0 items-center" aria-hidden>
                          <span className="size-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-green-600" />
                        </span>
                        <span className="min-w-0 flex-1 leading-7">Scored against your specific offer</span>
                      </li>
                      <li className="flex min-w-0 items-start gap-[9px]">
                        <span className="flex h-7 shrink-0 items-center" aria-hidden>
                          <span className="size-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-green-600" />
                        </span>
                        <span className="min-w-0 flex-1 leading-7">Curated queue of ready-to-pitch locals</span>
                      </li>
                      <li className="flex min-w-0 items-start gap-[9px]">
                        <span className="flex h-7 shrink-0 items-center" aria-hidden>
                          <span className="size-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-green-600" />
                        </span>
                        <span className="min-w-0 flex-1 leading-7">
                          Intent signals: missing reviews, no booking, no website
                        </span>
                      </li>
                      <li className="flex min-w-0 items-start gap-[9px]">
                        <span className="flex h-7 shrink-0 items-center" aria-hidden>
                          <span className="size-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-green-600" />
                        </span>
                        <span className="min-w-0 flex-1 leading-7">Draft is pre-written for you</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          }
        >
          <Stat stat="Effortless onboarding" text="You get warm opportunities in seconds." />
          <Stat stat="White-glove activation" text="People answer you, you close deals." />
        </StatsWithGraph>

        <FAQsTwoColumnAccordion
          id="faqs"
          headline="Common questions before you book"
          subheadline={
            <p>
              Quick answers about the demo and pilot. If yours isn&apos;t here, grab a slot and we&apos;ll cover it on
              the call.
            </p>
          }
        >
          <Faq
            id="faq-1"
            question={<span>What happens on the 15‑minute call?</span>}
            answer={
              <p>
                We align on what you sell and where you operate, walk through scored local leads tailored to your
                offer, similar to what you saw above, and show how drafts and pipeline fit your team&apos;s workflow.
              </p>
            }
          />
          <Faq
            id="faq-2"
            question={<span>Do I need a credit card to book?</span>}
            answer={
              <p>
                No. Booking is just choosing a Calendly time. The pilot stays no-commitment until you explicitly move to
                a paid tier later on.
              </p>
            }
          />
          <Faq
            id="faq-3"
            question={<span>Is Yuzuu only for the US, or only big cities?</span>}
            answer={
              <p>
                It&apos;s built around Google Maps discovery, so geography depends on listings coverage for your
                niche. Urban and suburban markets typically work best. On the demo we sanity-check whether your turf is a
                good fit before you invest time.
              </p>
            }
          />
          <Faq
            id="faq-4"
            question={<span>What should I prepare?</span>}
            answer={
              <p>
                A one-line pitch of what you sell, your ideal buyer (e.g. restaurants vs. gym vs. lawyers vs. etc.), and a region or
                city you hunt in. Screenshots or a sample offer help but aren&apos;t required.
              </p>
            }
          />
          <Faq
            id="faq-5"
            question={<span>How is this different from a big B2B database?</span>}
            answer={
              <p>
                Yuzuu is focused on local businesses surfaced from Maps-style data, ranked against your specific
                packaging, not generic firmographics, so outbound starts with relevance instead of spraying huge lists.
              </p>
            }
          />
        </FAQsTwoColumnAccordion>

        {/* Pricing - hidden
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
          headline="We're looking for 3 more agencies to use Yuzuu for free"
          subheadline={
            <>
              <p>
                We want to work directly with a handful of agencies to make it genuinely useful, not just technically
                functional. <br /> In exchange for free access, we ask for honest weekly feedback: what&apos;s working,
                what&apos;s broken, what&apos;s missing.
              </p>
              <ul className="space-y-2">
                <li className="flex gap-4">
                  <CheckmarkIcon className="h-lh shrink-0 stroke-mist-950 dark:stroke-white" />
                  <p>Full access to all features: search, scoring, enrichment, email drafts, pipeline management</p>
                </li>
                <li className="flex gap-4">
                  <CheckmarkIcon className="h-lh shrink-0 stroke-mist-950 dark:stroke-white" />
                  <p>Unlimited searches and enrichments for the duration of the trial</p>
                </li>
                <li className="flex gap-4">
                  <CheckmarkIcon className="h-lh shrink-0 stroke-mist-950 dark:stroke-white" />
                  <p>Direct line to the founder: YOU shape what gets built next</p>
                </li>
                <li className="flex gap-4">
                  <CheckmarkIcon className="h-lh shrink-0 stroke-mist-950 dark:stroke-white" />
                  <p>Locked-in early pricing when paid plans launch</p>
                </li>
                <li className="flex gap-4">
                  <CheckmarkIcon className="h-lh shrink-0 stroke-mist-950 dark:stroke-white" />
                  <p>No commitment, no credit card</p>
                </li>
              </ul>
            </>
          }
          cta={
            <div className="flex items-center gap-4">
              <CalendlyEarlyAccessButtonLink
                size="lg"
                className="!bg-gradient-to-r !from-orange-500 !to-rose-500 !text-white !shadow-lg hover:!from-orange-600 hover:!to-rose-600"
              >
                Get early access
              </CalendlyEarlyAccessButtonLink>
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
        fineprint="Made with 💚 from New York © 2026 Yuzuu. All rights reserved."
      />
    </>
  )
}
