import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import {
  ArrowIcon,
  CheckIcon,
  btnFull,
  btnHeroXl,
  btnLight,
  cardBase,
  container,
  eyebrow,
  heading,
  pill,
  sectionParagraph,
} from '../ui.jsx'

const workflowChips = [
  'CRM',
  'Subscriptions',
  'Billing',
  'Products',
  'Tasks',
  'Team Collaboration',
]

const features = [
  {
    name: 'CRM',
    title: 'Every Client Relationship Starts Here.',
    summary:
      'Capture leads, organize customer information, and track opportunities through every stage of your sales pipeline.',
    detail:
      'Know who needs attention, what deals are progressing, and where your next growth opportunity is coming from.',
    bullets: [
      'Lead capture and client history in one place',
      'Pipeline stages that match your agency process',
      'Clear ownership across new business conversations',
    ],
    stats: [
      { label: 'Lead intake', value: 'Centralized' },
      { label: 'Pipeline', value: 'Visible' },
      { label: 'Handoffs', value: 'Tracked' },
    ],
  },
  {
    name: 'Subscription Management',
    title: 'Designed for Retainers and Recurring Revenue.',
    summary:
      'Manage monthly retainers, recurring services, and one-off projects from a single workspace.',
    detail:
      'Track active subscriptions, renewals, service periods, and client commitments without relying on spreadsheets.',
    bullets: [
      'Recurring services and one-time work side by side',
      'Renewal awareness without calendar chaos',
      'Service periods tied directly to client records',
    ],
    stats: [
      { label: 'Retainers', value: 'Structured' },
      { label: 'Renewals', value: 'Visible' },
      { label: 'Commitments', value: 'Connected' },
    ],
  },
  {
    name: 'Billing & Payments',
    title: 'From Invoice to Payment, Simplified.',
    summary:
      'Generate invoices in seconds, track outstanding balances, and keep your cash flow visible at all times.',
    detail:
      'Less administrative work. More time focused on clients and growth.',
    bullets: [
      'Invoice creation tied to actual services delivered',
      'Outstanding balances visible without extra reconciliation',
      'Payment status built into the client workflow',
    ],
    stats: [
      { label: 'Invoices', value: 'Fast' },
      { label: 'Cash flow', value: 'Clear' },
      { label: 'Collections', value: 'Reduced friction' },
    ],
  },
  {
    name: 'Product Management',
    title: 'Package Your Expertise.',
    summary:
      'Create services, retainers, bundles, and pricing plans that your team can deploy consistently across clients.',
    detail:
      'Standardized offerings lead to smoother operations and faster sales cycles.',
    bullets: [
      'Reusable service packages and bundles',
      'Consistent pricing structure across the team',
      'Faster quoting and cleaner delivery setup',
    ],
    stats: [
      { label: 'Services', value: 'Standardized' },
      { label: 'Pricing', value: 'Repeatable' },
      { label: 'Sales cycles', value: 'Shorter' },
    ],
  },
  {
    name: 'Task Management',
    title: 'Keep Work Moving.',
    summary:
      'Assign tasks, share updates, attach photos, and collaborate directly within client workflows.',
    detail:
      'Give your team complete visibility into what needs to be done and what has already been delivered.',
    bullets: [
      'Task execution linked to the right client and service',
      'Updates, files, and progress in a shared context',
      'Clear accountability for delivery across the team',
    ],
    stats: [
      { label: 'Ownership', value: 'Assigned' },
      { label: 'Updates', value: 'Shared' },
      { label: 'Delivery', value: 'Accountable' },
    ],
  },
]

const planFeatures = [
  'CRM and pipeline tracking',
  'Retainers, subscriptions, and service periods',
  'Invoice and payment visibility',
  'Productized service setup',
  'Task collaboration inside client workflows',
]

const plans = [
  {
    name: 'Starter',
    badge: '500 clients',
    price: '199,000',
    label: 'MMK',
    cta: 'Get Started',
    description:
      'For agencies centralizing operations across a smaller active client base.',
    features: planFeatures,
  },
  {
    name: 'Growth',
    badge: '1000 clients',
    price: '299,000',
    label: 'MMK',
    cta: 'Get Started',
    description:
      'For agencies scaling retainers, billing, delivery, and team execution in one platform.',
    featured: true,
    features: planFeatures,
  },
  {
    name: 'Contact Us',
    badge: 'Custom',
    cta: 'Contact Us',
    description:
      'For agencies needing tailored rollout, higher operational volume, or implementation support.',
    features: planFeatures,
  },
]

function Home() {
  const { openContactModal } = useOutletContext()
  const [activeFeature, setActiveFeature] = useState(0)
  const currentFeature = features[activeFeature]

  return (
    <>
      <section
        className="relative w-full block overflow-hidden pb-[72px] max-[1080px]:pb-[56px]"
        id="top"
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <span className="absolute left-1/2 top-[-420px] -translate-x-1/2 rounded-full border border-[rgba(31,37,64,0.08)] w-[920px] h-[920px] max-[1080px]:w-[760px] max-[1080px]:h-[760px]"></span>
          <span className="absolute left-1/2 top-[-420px] -translate-x-1/2 rounded-full border border-[rgba(31,37,64,0.08)] w-[1240px] h-[1240px] max-[1080px]:w-[1040px] max-[1080px]:h-[1040px]"></span>
          <span className="absolute left-1/2 top-[-420px] -translate-x-1/2 rounded-full border border-[rgba(31,37,64,0.08)] w-[1580px] h-[1580px] max-[1080px]:w-[1340px] max-[1080px]:h-[1340px]"></span>
          <span className="absolute left-1/2 top-[-420px] -translate-x-1/2 rounded-full border border-[rgba(31,37,64,0.08)] w-[1920px] h-[1920px] max-[1080px]:w-[1640px] max-[1080px]:h-[1640px]"></span>
        </div>

        <div className="relative z-[1] w-[min(1180px,calc(100%-40px))] max-w-full mx-auto pt-[112px] text-center max-[1080px]:pt-[88px] max-[720px]:pt-[72px] max-[720px]:w-[min(100%-24px,1180px)]">
          <h1 className={`${heading} mx-auto max-w-[30ch] text-[60px] tracking-[-0.055em] max-[720px]:text-[clamp(2.5rem,10.5vw,3.65rem)]`}>
            Agency Operations, Unified.
          </h1>
          <p className="mt-[1.8rem] mx-auto max-w-[1160px] text-[18px] leading-[1.55] text-[#525772] [text-wrap:balance] max-[720px]:text-base max-[720px]:leading-[1.6]">
            The command center for clients, projects, subscriptions, billing,
            and team execution. Radiuz brings every moving part of your agency
            into a single platform — without jumping between disconnected
            tools.
          </p>

          <div className="flex items-center justify-center gap-[14px] flex-wrap mt-[2.3rem] max-[720px]:w-full">
            <a className={btnHeroXl} href="/#contact" onClick={openContactModal}>
              Get started
              <ArrowIcon />
            </a>
          </div>

          <p className="mt-[1.2rem] text-center text-[#525772] text-[0.98rem] font-medium">
            Built for agencies that are ready to scale with clarity.
          </p>
        </div>

        <div className="relative z-[1] w-[min(1600px,calc(100%-40px))] mx-auto mt-[72px] rounded-[24px] bg-[rgba(255,255,255,0.88)] border border-[rgba(31,37,64,0.08)] shadow-[0_18px_50px_rgba(23,26,52,0.08)] overflow-hidden max-[720px]:w-[min(100%-24px,1600px)] max-[720px]:mt-[56px] max-[720px]:rounded-[20px]">
          <img
            src="/HeroSectionImage.png"
            alt="Radiuz command center preview"
            className="block w-full h-full object-cover rounded-[24px] max-[720px]:rounded-[20px]"
          />
        </div>
      </section>

      <section className={`${container} pt-[44px] pb-[38px]`}>
        <div className="text-center max-w-[760px] mx-auto mb-8">
          <p className={eyebrow}>Everything Connected.</p>
          <h2 className={`${heading} text-[clamp(2.2rem,4vw,3.7rem)]`}>
            When your tools work together, your team works better.
          </h2>
          <p className={`${sectionParagraph} mt-4`}>
            Radiuz eliminates operational blind spots by connecting sales,
            service delivery, finance, and team workflows in one place.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-[2.2rem] max-[720px]:justify-start">
          {workflowChips.map((chip) => (
            <div
              key={chip}
              className="flex items-center gap-3 px-[1.15rem] py-4 rounded-full font-bold bg-[rgba(255,255,255,0.72)] border border-[rgba(28,31,56,0.08)] text-ink"
            >
              {chip}
            </div>
          ))}
        </div>
      </section>

      <section className={`${container} py-[72px] max-[720px]:py-[56px]`} id="features">
        <div className="mb-8 text-center max-w-[980px] mx-auto">
          <div>
            <p className={eyebrow}>Platform Modules</p>
            <h2 className={`${heading} text-[clamp(2.1rem,4vw,3.3rem)]`}>
              One operating system for the full agency journey.
            </h2>
          </div>
          <p className={`${sectionParagraph} max-w-[900px] mx-auto mt-4`}>
            From lead intake to payment collection to delivery execution,
            Radiuz keeps every workflow connected to the same client record.
          </p>
        </div>

        <div className="grid grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] gap-[1.4rem] max-[1080px]:grid-cols-1">
          <div className="grid gap-[0.9rem]" role="tablist" aria-label="Radiuz features">
            {features.map((feature, index) => {
              const active = index === activeFeature
              return (
                <button
                  key={feature.name}
                  type="button"
                  className={`text-left p-5 rounded-[24px] border cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(57,59,222,0.18)] hover:bg-[rgba(255,255,255,0.9)] hover:shadow-[0_18px_36px_rgba(28,31,56,0.08)] ${
                    active
                      ? '-translate-y-0.5 border-[rgba(57,59,222,0.18)] bg-[rgba(255,255,255,0.9)] shadow-[0_18px_36px_rgba(28,31,56,0.08)]'
                      : 'border-[rgba(28,31,56,0.08)] bg-[rgba(255,255,255,0.6)]'
                  }`}
                  aria-pressed={active}
                  onClick={() => setActiveFeature(index)}
                >
                  <span className="block text-ink font-display font-bold text-base leading-[1.3] tracking-[-0.02em]">
                    {feature.name}
                  </span>
                  <span className="block mt-[0.55rem] text-ink-muted leading-[1.6]">
                    {feature.summary}
                  </span>
                </button>
              )
            })}
          </div>

          <article className={`${cardBase} rounded-[30px] p-[1.7rem] max-[720px]:p-[1.2rem] max-[720px]:rounded-[24px]`}>
            <span className={`${pill} w-fit mb-4 px-[0.85rem] py-[0.55rem] bg-[rgba(57,59,222,0.1)] text-brand-deep text-[0.8rem]`}>
              {currentFeature.name}
            </span>
            <h3 className={`${heading} text-[clamp(1.8rem,3vw,2.55rem)] mb-4`}>
              {currentFeature.title}
            </h3>
            <p className={sectionParagraph}>{currentFeature.summary}</p>
            <p className={`${sectionParagraph} mt-[0.85rem]`}>{currentFeature.detail}</p>

            <div className="flex gap-4 mt-6 items-stretch max-[1080px]:flex-col">
              <div className="flex-1">
                {currentFeature.bullets.map((bullet, i) => (
                  <div
                    key={bullet}
                    className={`flex items-start gap-[0.8rem] ${i > 0 ? 'mt-[0.9rem]' : ''}`}
                  >
                    <span className="flex-shrink-0 w-[1.4rem] h-[1.4rem] rounded-full bg-[rgba(57,59,222,0.1)] text-brand-deep inline-flex items-center justify-center [&_svg]:w-[0.85rem] [&_svg]:h-[0.85rem]">
                      <CheckIcon />
                    </span>
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              <div className="flex-1 grid gap-[0.9rem]">
                {currentFeature.stats.map((stat) => (
                  <div key={stat.label} className="rounded-[22px] p-4 bg-[rgba(28,31,56,0.04)]">
                    <span className="block text-ink-soft text-[0.85rem] uppercase tracking-[0.08em]">
                      {stat.label}
                    </span>
                    <strong className="block mt-[0.3rem] text-ink font-display font-bold text-[1.2rem] leading-[1.2]">
                      {stat.value}
                    </strong>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className={`${container} py-[72px] max-[720px]:py-[56px]`} id="pricing">
        <div className="text-center max-w-[760px] mx-auto mb-8">
          <p className={eyebrow}>Pricing</p>
          <h2 className={`${heading} text-[clamp(2.2rem,4vw,3.7rem)]`}>
            Choose the rollout that matches your agency stage.
          </h2>
          <p className={`${sectionParagraph} mt-4`}>
            Radiuz is set up around how your team sells, delivers, and bills.
            Plans are tailored to the complexity of your operating model.
          </p>
        </div>

        <div className="flex gap-[1.2rem] items-stretch max-[1080px]:flex-col">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`flex-1 rounded-[30px] p-[1.6rem] max-[720px]:p-[1.2rem] max-[720px]:rounded-[24px] ${
                plan.featured
                  ? 'border border-[rgba(57,59,222,0.18)] shadow-[0_18px_45px_rgba(28,31,56,0.08)] bg-gradient-to-b from-[rgba(245,246,255,0.98)] to-[rgba(255,255,255,0.94)] -translate-y-2 max-[1080px]:translate-y-0'
                  : cardBase
              }`}
            >
              <span className={`${pill} px-[0.8rem] py-[0.45rem] bg-[rgba(57,59,222,0.1)] text-brand-deep text-[0.78rem]`}>
                {plan.badge}
              </span>
              <h3 className={`${heading} text-[2rem] mt-4 mb-[0.7rem]`}>{plan.name}</h3>
              <p className={sectionParagraph}>{plan.description}</p>
              <div className="flex items-end gap-4 mt-[1.4rem]">
                <strong className="text-ink font-bold text-[30px]">{plan.price}</strong>
                <span className="text-ink-soft pb-[0.35rem]">{plan.label}</span>
              </div>
              <div className="my-[1.4rem] h-px bg-[rgba(28,31,56,0.08)]"></div>
              <div className="my-4">
                {plan.features.map((feature, i) => (
                  <div
                    key={feature}
                    className={`flex items-start gap-[0.8rem] ${i > 0 ? 'mt-[0.9rem]' : ''}`}
                  >
                    <span className="flex-shrink-0 w-[1.4rem] h-[1.4rem] rounded-full bg-[rgba(57,59,222,0.1)] text-brand-deep inline-flex items-center justify-center [&_svg]:w-[0.85rem] [&_svg]:h-[0.85rem]">
                      <CheckIcon />
                    </span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <a className={btnFull} href="/#contact" onClick={openContactModal}>
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className={`${container} py-[72px] max-[720px]:py-[56px]`}>
        <div className="flex items-center justify-between gap-[30px] p-[2.2rem] rounded-[34px] text-white border border-[rgba(255,255,255,0.08)] shadow-[0_24px_60px_rgba(28,31,56,0.18)] bg-[radial-gradient(circle_at_top_left,rgba(103,111,255,0.22),transparent_30%),linear-gradient(135deg,#151935_0%,#2629b1_100%)] max-[1080px]:flex-col max-[720px]:p-[1.2rem] max-[720px]:rounded-[24px]">
          <div className="max-w-[700px]">
            <p className={`${eyebrow} text-white/70`}>Less Administration. More Growth.</p>
            <h2 className={`${heading} text-white text-[clamp(2.2rem,4vw,3.7rem)]`}>
              Focus on clients, not operational overhead.
            </h2>
            <p className="mt-4 text-white text-[1.04rem] leading-[1.7]">
              Radiuz helps agencies streamline operations, improve team
              accountability, and create a scalable foundation for long-term
              growth.
            </p>
            <p className="mt-[1.3rem] text-white font-bold">
              Start building a more organized agency today.
            </p>
          </div>

          <div className="flex items-center gap-[14px] flex-wrap max-[720px]:w-full">
            <a className={btnLight} href="/#contact" onClick={openContactModal}>
              Get Started
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
