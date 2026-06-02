import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

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

// Reusable class strings
const container =
  'w-[min(1180px,calc(100%-40px))] mx-auto max-[720px]:w-[min(100%-24px,1180px)]'

const btnBase =
  'inline-flex items-center justify-center gap-[0.65rem] no-underline cursor-pointer leading-none transition-all duration-200 [&_svg]:w-4 [&_svg]:h-4'

const btnHero =
  `${btnBase} min-h-[38px] px-4 rounded-[12px] border border-transparent bg-gradient-to-br from-brand to-brand-deep text-white font-semibold text-[0.84rem] shadow-[0_16px_38px_rgba(66,50,232,0.22)] hover:-translate-y-0.5 hover:shadow-[0_22px_46px_rgba(57,59,222,0.24)] max-[720px]:w-full`

const btnHeroXl =
  `${btnBase} min-h-[40px] px-[1.05rem] rounded-[12px] border border-transparent bg-gradient-to-br from-brand to-brand-deep text-white font-semibold text-[0.88rem] shadow-[0_16px_38px_rgba(66,50,232,0.22)] hover:-translate-y-0.5 hover:shadow-[0_22px_46px_rgba(57,59,222,0.24)] max-[720px]:w-full`

const btnFull =
  `${btnBase} w-full px-[1.1rem] py-[0.72rem] rounded-[14px] border border-transparent bg-gradient-to-br from-brand to-brand-deep text-white font-semibold text-[0.9rem] shadow-[0_18px_40px_rgba(57,59,222,0.18)] hover:-translate-y-0.5 hover:shadow-[0_22px_46px_rgba(57,59,222,0.24)]`

const btnLight =
  `${btnBase} px-[1.1rem] py-[0.72rem] rounded-[14px] border border-transparent bg-white text-brand-deep font-semibold text-[0.9rem] hover:-translate-y-0.5 hover:shadow-[0_22px_46px_rgba(57,59,222,0.24)] max-[720px]:w-full`

const eyebrow =
  'mb-4 text-brand-deep font-display font-extrabold text-[0.83rem] leading-[1.2] tracking-[0.14em] uppercase'

const heading = 'm-0 font-display font-bold text-ink tracking-[-0.04em] leading-[0.96]'

const sectionParagraph = 'text-ink-muted text-[1.04rem] leading-[1.7]'

const cardBase =
  'border border-[rgba(28,31,56,0.08)] bg-[rgba(255,255,255,0.82)] shadow-[0_18px_45px_rgba(28,31,56,0.08)]'

const pill =
  'inline-flex items-center justify-center whitespace-nowrap rounded-full font-bold'

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M7 17 17 7M9 7h8v8"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="m5 12 4 4L19 7"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 6h16v12H4zM4 7l8 6 8-6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <circle
        cx="12"
        cy="10"
        r="2.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function App() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const currentFeature = features[activeFeature]

  const openContactModal = (event) => {
    event.preventDefault()
    setIsContactModalOpen(true)
  }

  const closeContactModal = () => {
    setIsContactModalOpen(false)
  }

  useEffect(() => {
    if (!isContactModalOpen) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsContactModalOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isContactModalOpen])

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-20 backdrop-blur-[18px] bg-white border-b border-[rgba(28,31,56,0.08)]">
        <nav
          className={`${container} py-[18px] flex items-center justify-between gap-6 max-[1080px]:flex-col max-[1080px]:items-start max-[720px]:py-[14px]`}
        >
          <a className="flex-shrink-0" href="#top" aria-label="Radiuz home">
            <img
              className="w-[172px] max-[720px]:w-[146px] h-auto block"
              src="/radiuz-logo.png"
              alt="Radiuz"
            />
          </a>

          <div className="flex items-center gap-[22px] flex-wrap max-[720px]:gap-[14px]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#111111] no-underline transition-transform duration-200 hover:-translate-y-px"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-[14px] flex-wrap max-[1080px]:w-full">
            <a className={btnHero} href="#contact" onClick={openContactModal}>
              Get started
              <ArrowIcon />
            </a>
          </div>
        </nav>
      </header>

      <main>
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
              <a className={btnHeroXl} href="#contact" onClick={openContactModal}>
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

        <section
          className={`${container} py-[72px] grid grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] gap-[1.4rem] items-stretch max-[1080px]:grid-cols-1 max-[720px]:py-[56px]`}
          id="about"
        >
          <div className="pr-4 max-[1080px]:pr-0">
            <p className={eyebrow}>Born Inside a Fast-Growing Agency.</p>
            <h2 className={`${heading} text-[clamp(2.2rem,4vw,3.7rem)]`}>
              Built from real operational challenges.
            </h2>
            <p className={`${sectionParagraph} mt-4`}>
              Radiuz started as an internal platform developed to manage the
              complexity of running a growing agency.
            </p>
            <p className={`${sectionParagraph} mt-4`}>
              As our team expanded, we needed a better way to connect sales,
              client management, subscriptions, projects, billing, and daily
              operations. Existing tools solved individual problems, but none
              connected the entire journey.
            </p>
            <p className="mt-[1.3rem] text-ink font-bold">So we built our own.</p>
            <p className={`${sectionParagraph} mt-4`}>
              Today, Radiuz powers the workflows we depend on every day and is
              now available to agencies looking for the same level of visibility,
              control, and operational efficiency.
            </p>
          </div>

          <div className="grid gap-4">
            <article className={`${cardBase} rounded-[30px] p-6 max-[720px]:p-[1.2rem] max-[720px]:rounded-[24px]`}>
              <span className={`${pill} mb-[10px] px-[0.78rem] py-[0.45rem] bg-[rgba(28,31,56,0.06)] text-ink text-[0.78rem]`}>
                What changed
              </span>
              <h3 className="font-display font-bold text-ink tracking-[-0.04em] leading-[1.1] text-[1.35rem]">
                Disconnected tools became one shared operating layer.
              </h3>
              <p className={`${sectionParagraph} mt-3`}>
                Sales, subscriptions, billing, delivery, and updates no longer
                live in separate systems that need manual reconciliation.
              </p>
            </article>

            <article className="rounded-[30px] p-6 border border-[rgba(255,255,255,0.08)] shadow-[0_18px_45px_rgba(28,31,56,0.08)] bg-gradient-to-b from-[rgba(57,59,222,0.96)] to-[rgba(38,41,177,0.96)] max-[720px]:p-[1.2rem] max-[720px]:rounded-[24px]">
              <span className={`${pill} mb-[10px] px-[0.78rem] py-[0.45rem] bg-white/12 text-white text-[0.78rem]`}>
                Why it matters
              </span>
              <h3 className="mt-5 font-display font-bold text-white tracking-[-0.04em] leading-[1.1] text-[1.35rem]">
                Operational clarity compounds as your agency grows.
              </h3>
              <p className="mt-3 text-white text-[1.04rem] leading-[1.7]">
                Better visibility creates better follow-through, cleaner billing,
                stronger accountability, and more room for growth.
              </p>
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
                <a className={btnFull} href="#contact" onClick={openContactModal}>
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
              <a className={btnLight} href="#contact" onClick={openContactModal}>
                Get Started
                <ArrowIcon />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className={`${container} pt-0 pb-[0.4rem]`} id="contact">
        <div className="flex gap-4 items-start pt-[0.8rem] pb-4 max-[1080px]:flex-col">
          <div className="flex-1">
            <h3 className="mb-4 text-ink font-display text-[1.1rem]">Contact</h3>
            <p className="flex items-start gap-[0.55rem] mb-[0.8rem] text-ink-muted leading-[1.5]">
              <span className="flex-shrink-0 inline-flex w-[18px] h-[18px] mt-[0.15rem] text-ink-soft [&_svg]:w-full [&_svg]:h-full">
                <MailIcon />
              </span>
              info@radiuz.net
            </p>
            <p className="flex items-start gap-[0.55rem] text-ink-muted leading-[1.5]">
              <span className="flex-shrink-0 inline-flex w-[18px] h-[18px] mt-[0.15rem] text-ink-soft [&_svg]:w-full [&_svg]:h-full">
                <MapPinIcon />
              </span>
              The Leaf Tower, Dhamma Thukha Kyaung Street, Hlaing, Yangon,
              Myanmar
            </p>
            <div className="flex items-center gap-[0.7rem] mt-[1.3rem] flex-wrap">
              <a
                className="inline-flex items-center justify-center w-10 h-10 rounded-[12px] overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_26px_rgba(24,119,242,0.28)]"
                href="https://www.facebook.com/radiuztool"
                target="_blank"
                rel="noreferrer"
                aria-label="Radiuz on Facebook"
              >
                <img
                  className="w-full h-full object-cover block"
                  src="/facebook.jpeg"
                  alt="Facebook"
                />
              </a>
              <a className={btnHero} href="#contact" onClick={openContactModal}>
                Contact Us
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-[0.9rem] pb-[0.45rem] border-t border-[rgba(28,31,56,0.08)] text-ink-soft text-[0.92rem] text-center">
          <span>© 2026 Radiuz. All rights reserved.</span>
        </div>
      </footer>

      {isContactModalOpen && (
        <div
          className="fixed inset-0 z-[1000] bg-[rgba(15,18,39,0.56)] grid place-items-center p-5 max-[720px]:p-3"
          role="presentation"
          onClick={closeContactModal}
        >
          <div
            className="relative w-[min(620px,100%)] bg-white rounded-[16px] border border-[rgba(23,26,52,0.12)] shadow-[0_28px_68px_rgba(18,21,46,0.26)] overflow-hidden px-[14px] pt-[14px] pb-[10px] max-[720px]:w-full max-[720px]:px-[10px] max-[720px]:pt-[10px] max-[720px]:pb-[8px]"
            role="dialog"
            aria-modal="true"
            aria-label="Contact us form"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute top-2 right-[10px] w-8 h-8 border-0 rounded-lg bg-[rgba(23,26,52,0.08)] text-[#1d2140] text-[1.45rem] leading-none cursor-pointer hover:bg-[rgba(23,26,52,0.16)] max-[720px]:top-[6px] max-[720px]:right-[6px]"
              aria-label="Close contact form"
              onClick={closeContactModal}
            >
              ×
            </button>
            <iframe
              data-tally-src="https://tally.so/embed/wQbZr7?hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="500"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Contact us"
              className="block border-0 rounded-[10px] min-h-[500px] max-[720px]:h-[72vh] max-[720px]:min-h-[460px]"
              src="https://tally.so/embed/wQbZr7?hideTitle=1&transparentBackground=1&dynamicHeight=1"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
