import { AnnouncementBadge } from '@/components/elements/announcement-badge'
import { ButtonLink, PlainButtonLink, SoftButtonLink } from '@/components/elements/button'
import { Link } from '@/components/elements/link'
import { Logo, LogoGrid } from '@/components/elements/logo-grid'
import { Main } from '@/components/elements/main'
import { Screenshot } from '@/components/elements/screenshot'
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
import { HeroLeftAlignedWithDemo } from '@/components/sections/hero-left-aligned-with-demo'
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
            <span className="font-['Instrument_Serif'] text-2xl text-mist-950 dark:text-white">Yuzuu</span>
          </NavbarLogo>
        }
        actions={
          <ButtonLink href="https://calendly.com/yuzuu/early-access" target="_blank" rel="noopener noreferrer">Get early access</ButtonLink>
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
          eyebrow={<AnnouncementBadge href="#hero" text="‼️ Free during early access, 3 spots left" />}
          headline="The first revenue engine for marketing agencies"
          subheadline={
            <p>
              Yuzuu finds relevant local businesses, scores each lead against your offer, and tells you exactly who to contact and what to say. You run outbound campaigns on autopilot and manage pipelines in one place.
            </p>
          }
          cta={
            <div className="flex items-center gap-4">
              <ButtonLink href="https://calendly.com/yuzuu/early-access" target="_blank" rel="noopener noreferrer" size="lg">
                Get early access
              </ButtonLink>
            </div>
          }
          demo={
            <>
              <Screenshot className="rounded-md lg:hidden" wallpaper="blue" placement="bottom-right">
                <img
                  src="/img/screenshots/1.png"
                  alt=""
                  width={1670}
                  height={1408}
                  className="bg-white/75 md:hidden dark:hidden"
                />
                <img
                  src="/img/screenshots/1.png"
                  alt=""
                  width={1670}
                  height={1408}
                  className="bg-black/75 not-dark:hidden md:hidden"
                />
                <img
                  src="/img/screenshots/1.png"
                  alt=""
                  width={2000}
                  height={1408}
                  className="bg-white/75 max-md:hidden dark:hidden"
                />
                <img
                  src="/img/screenshots/1.png"
                  alt=""
                  width={2000}
                  height={1408}
                  className="bg-black/75 not-dark:hidden max-md:hidden"
                />
              </Screenshot>
              <Screenshot className="rounded-lg max-lg:hidden" wallpaper="blue" placement="bottom">
                <img src="/img/screenshots/1.png" alt="" className="bg-white/75 dark:hidden" width={3440} height={1990} />
                <img
                  className="bg-black/75 not-dark:hidden"
                  src="/img/screenshots/1.png"
                  alt=""
                  width={3440}
                  height={1990}
                />
              </Screenshot>
            </>
          }
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
          quoteAttribution="Any agency owner, selling local SEO for X years, struggling to get new clients"
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
          eyebrow="Prospecting infrastructure built for busy agencies"
          headline="Grow your revenue faster, all in one place"
          subheadline={
            <p>
              Yuzuu agents automate demand gen, pipeline management, and follow-ups so you can spend your time with customers.
            </p>
          }
          cta={
            <Link href="https://calendly.com/yuzuu/early-access" target="_blank" rel="noopener noreferrer">
              Show me how it works <ArrowNarrowRightIcon />
            </Link>
          }
          features={
            <>
              <FeatureThreeColumnWithDemos
                demo={
                  <Screenshot wallpaper="blue" placement="bottom-right">
                    <img
                      src="/img/leads-counter.gif"
                      alt="Animated counter showing leads increasing"
                      className="w-full bg-white/75 dark:bg-white/10"
                      width={1200}
                      height={675}
                      loading="lazy"
                    />
                  </Screenshot>
                }
                headline={
                  <>
                    <span className="mb-2 block text-sm font-semibold tabular-nums text-mist-500 dark:text-mist-400">
                      01
                    </span>
                    Leads keep flowing in—not only when someone squeezes in prospecting time
                  </>
                }
                subheadline={
                  <>
                    <p>
                      Your scored queue stays fed from Google Maps so there&apos;s always the next batch of local
                      businesses to review—without another manual scrape or spreadsheet marathon.
                    </p>
                    <p className="pt-1 text-xs font-semibold tracking-wide text-mist-600 dark:text-mist-400">
                      Always-on lead intake
                    </p>
                  </>
                }
              />
              <FeatureThreeColumnWithDemos
                demo={
                  <Screenshot wallpaper="purple" placement="top-left">
                    <img
                      src="/img/meetings-counter.gif"
                      alt="Animated counter showing meetings booked"
                      className="w-full bg-white/75 dark:bg-white/10"
                      width={1200}
                      height={675}
                      loading="lazy"
                    />
                  </Screenshot>
                }
                headline={
                  <>
                    <span className="mb-2 block text-sm font-semibold tabular-nums text-mist-500 dark:text-mist-400">
                      02
                    </span>
                    Meetings booked on autopilot—not endless scheduling ping-pong
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
                  <Screenshot wallpaper="brown" placement="bottom-left">
                    <img
                      src="https://assets.tailwindplus.com/screenshots/1.webp?right=1200&top=736"
                      alt=""
                      className="bg-white/75 sm:hidden dark:hidden"
                      width={1200}
                      height={736}
                    />
                    <img
                      src="https://assets.tailwindplus.com/screenshots/1.webp?right=1200&top=736&color=mist"
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
                      src="https://assets.tailwindplus.com/screenshots/1.webp?right=1800&top=736&color=mist"
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
                      src="https://assets.tailwindplus.com/screenshots/1.webp?right=1200&top=736&color=mist"
                      alt=""
                      className="bg-black/75 not-dark:hidden max-lg:hidden"
                      width={1200}
                      height={736}
                    />
                  </Screenshot>
                }
                headline={
                  <>
                    <span className="mb-2 block text-sm font-semibold tabular-nums text-mist-500 dark:text-mist-400">
                      03
                    </span>
                    Pipeline management that grows deal value—not just tidy columns
                  </>
                }
                subheadline={
                  <>
                    <p>
                      Stages, owners, and next steps stay visible in one place so opportunities don&apos;t stall. Less
                      guesswork means faster progression—and a pipeline total that reflects real upside.
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
          eyebrow="Time to value"
          headline="Yuzuu starts working for you right away"
          subheadline={
            <p>
                Your start getting your first calls with businesses in a few days, not weeks.
            </p>
          }
        >
          <Stat stat="Effortless onboarding" text="You get warm leads in seconds." />
          <Stat stat="White-glove activation" text="People answer you, you close deals." />
        </StatsWithGraph>

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
              <ButtonLink href="https://calendly.com/yuzuu/early-access" target="_blank" rel="noopener noreferrer" size="lg">
               Get early access
              </ButtonLink>

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
        fineprint="Made with 💚 from 🇫🇷 Paris © 2026 Yuzuu. All rights reserved."
      />
    </>
  )
}
