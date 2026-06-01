import { useEffect, useState } from 'react'
import './App.css'

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
    cta: "Get Started",
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

const footerGroups = [
  {
    title: 'Platform',
    links: ['CRM', 'Subscriptions', 'Billing', 'Tasks'],
  },
  {
    title: 'Company',
    links: ['About Radiuz', 'Pricing', 'Start Demo', 'Agency Workflows'],
  },
  {
    title: 'Why Radiuz',
    links: ['Unified operations', 'Recurring revenue control', 'Delivery visibility', 'Team accountability'],
  },
]

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
    <div className="page-shell">
      <header className="site-header">
        <nav className="nav">
          <a className="brand-link" href="#top" aria-label="Radiuz home">
            <img className="brand-logo" src="/radiuz-logo.png" alt="Radiuz" />
          </a>

          <div className="nav-links">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <a className="button button--ghost button--hero-ghost" href="#contact">
              Sign in
            </a>
            <a className="button button--hero-primary" href="#contact" onClick={openContactModal}>
              Get started
              <ArrowIcon />
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero hero--centered" id="top">
          <div className="hero-rings" aria-hidden="true">
            <span className="hero-ring hero-ring--1"></span>
            <span className="hero-ring hero-ring--2"></span>
            <span className="hero-ring hero-ring--3"></span>
            <span className="hero-ring hero-ring--4"></span>
          </div>

          <div className="hero-copy hero-copy--centered">
            <div className="hero-icon-shell" aria-hidden="true">
              <svg viewBox="0 0 24 24" className="hero-icon">
                <path
                  d="M5 19V9m5 10V5m5 14v-7m4 7H3"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.9"
                />
              </svg>
            </div>

            <h1>Agency Operations, Unified.</h1>
            <p className="lead hero-lead">
              The command center for clients, projects, subscriptions, billing,
              and team execution. Radiuz brings every moving part of your agency
              into a single platform — without jumping between disconnected
              tools.
            </p>

            <div className="hero-actions hero-actions--centered">
              <a className="button button--hero-primary button--xl" href="#contact" onClick={openContactModal}>
                Get started
                <ArrowIcon />
              </a>
            </div>

            <p className="hero-note hero-note--centered">
              Built for agencies that are ready to scale with clarity.
            </p>
          </div>

          <div className="hero-preview hero-preview--image">
            <img
              src="/HeroSectionImage.png"
              alt="Radiuz command center preview"
              className="hero-preview-image"
            />
          </div>
        </section>

        <section className="logos section">
          <div className="section-intro section-intro--centered">
            <p className="eyebrow">Everything Connected.</p>
            <h2>When your tools work together, your team works better.</h2>
            <p>
              Radiuz eliminates operational blind spots by connecting sales,
              service delivery, finance, and team workflows in one place.
            </p>
          </div>

          <div className="logo-cloud">
            {workflowChips.map((chip) => (
              <div key={chip} className="logo-chip">
                <span className="logo-chip__mark"></span>
                {chip}
              </div>
            ))}
          </div>
        </section>

        <section className="features section" id="features">
          <div className="section-intro section-intro--split">
            <div>
              <p className="eyebrow">Platform Modules</p>
              <h2>One operating system for the full agency journey.</h2>
            </div>
            <p>
              From lead intake to payment collection to delivery execution,
              Radiuz keeps every workflow connected to the same client record.
            </p>
          </div>

          <div className="feature-layout">
            <div className="feature-tabs" role="tablist" aria-label="Radiuz features">
              {features.map((feature, index) => (
                <button
                  key={feature.name}
                  type="button"
                  className={index === activeFeature ? 'feature-tab is-active' : 'feature-tab'}
                  aria-pressed={index === activeFeature}
                  onClick={() => setActiveFeature(index)}
                >
                  <span className="feature-tab__name">{feature.name}</span>
                  <span className="feature-tab__text">{feature.summary}</span>
                </button>
              ))}
            </div>

            <article className="feature-preview-panel">
              <span className="status-pill status-pill--soft">{currentFeature.name}</span>
              <h3>{currentFeature.title}</h3>
              <p>{currentFeature.summary}</p>
              <p>{currentFeature.detail}</p>

              <div className="feature-preview-grid">
                <div className="feature-checklist">
                  {currentFeature.bullets.map((bullet) => (
                    <div key={bullet} className="check-row">
                      <span className="check-icon">
                        <CheckIcon />
                      </span>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                <div className="feature-stats">
                  {currentFeature.stats.map((stat) => (
                    <div key={stat.label} className="stat-card">
                      <span>{stat.label}</span>
                      <strong>{stat.value}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="about section" id="about">
          <div className="about-story">
            <p className="eyebrow">Born Inside a Fast-Growing Agency.</p>
            <h2>Built from real operational challenges.</h2>
            <p>
              Radiuz started as an internal platform developed to manage the
              complexity of running a growing agency.
            </p>
            <p>
              As our team expanded, we needed a better way to connect sales,
              client management, subscriptions, projects, billing, and daily
              operations. Existing tools solved individual problems, but none
              connected the entire journey.
            </p>
            <p className="about-highlight">So we built our own.</p>
            <p>
              Today, Radiuz powers the workflows we depend on every day and is
              now available to agencies looking for the same level of visibility,
              control, and operational efficiency.
            </p>
          </div>

          <div className="about-panels">
            <article className="about-panel">
              <span className="panel-kicker">What changed</span>
              <h3>Disconnected tools became one shared operating layer.</h3>
              <p>
                Sales, subscriptions, billing, delivery, and updates no longer
                live in separate systems that need manual reconciliation.
              </p>
            </article>

            <article className="about-panel about-panel--accent">
              <span className="panel-kicker">Why it matters</span>
              <h3 className='mt-5'>Operational clarity compounds as your agency grows.</h3>
              <p>
                Better visibility creates better follow-through, cleaner billing,
                stronger accountability, and more room for growth.
              </p>
            </article>
          </div>
        </section>

        <section className="pricing section" id="pricing">
          <div className="section-intro section-intro--centered">
            <p className="eyebrow">Pricing</p>
            <h2>Choose the rollout that matches your agency stage.</h2>
            <p>
              Radiuz is set up around how your team sells, delivers, and bills.
              Plans are tailored to the complexity of your operating model.
            </p>
          </div>

          <div className="pricing-grid">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={plan.featured ? 'pricing-card pricing-card--featured' : 'pricing-card'}
              >
                <span className="pricing-badge">{plan.badge}</span>
                <h3>{plan.name}</h3>
                <p>{plan.description}</p>
                <div className="price-row">
                  <strong>{plan.price}</strong>
                  <span>{plan.label}</span>
                </div>
                <div className="pricing-divider"></div>
                <div className="pricing-list">
                  {plan.features.map((feature) => (
                    <div key={feature} className="check-row">
                      <span className="check-icon">
                        <CheckIcon />
                      </span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <a className="button button--full" href="#contact" onClick={openContactModal}>
                  {plan.cta}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="cta section">
          <div className="cta-panel">
            <div>
              <p className="eyebrow eyebrow--light">Less Administration. More Growth.</p>
              <h2>Focus on clients, not operational overhead.</h2>
              <p>
                Radiuz helps agencies streamline operations, improve team
                accountability, and create a scalable foundation for long-term
                growth.
              </p>
              <p className="cta-note">
                Start building a more organized agency today.
              </p>
            </div>

            <div className="cta-actions">
              <a className="button button--light" href="#contact" onClick={openContactModal}>
                Start a demo
                <ArrowIcon />
              </a>
              <a className="button button--outline-light" href="#about">
                Read the story
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section" id="contact">
        <div className="footer-grid">
          <div className="footer-brand">
            <img className="brand-logo" src="/radiuz-logo.png" alt="Radiuz" />
            <p>
              The operational backbone for agencies that want cleaner systems,
              better visibility, and room to scale.
            </p>
          </div>

          <div className="footer-column footer-contact">
            <h3>Contact</h3>
            <a href="mailto:kpps@radiuz.net">kpps@radiuz.net</a>
            <a href="tel:+959695930350">+959695930350</a>
            <a
              href="https://maps.google.com/?q=The+Leaf+Tower,+Dhamma+Thukha+Kyaung+Street,+Hlaing,+Yangon,+Myanmar"
              target="_blank"
              rel="noreferrer"
            >
              The Leaf Tower, Dhamma Thukha Kyaung Street, Hlaing, Yangon,
              Myanmar
            </a>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title} className="footer-column">
              <h3>{group.title}</h3>
              {group.links.map((link) => (
                <a key={link} href="#top">
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <span>© 2026 Radiuz. All rights reserved.</span>
        </div>
      </footer>

      {isContactModalOpen && (
        <div
          className="contact-modal-backdrop"
          role="presentation"
          onClick={closeContactModal}
        >
          <div
            className="contact-modal-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Contact us form"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="contact-modal-close"
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
              className="contact-tally-frame"
              src="https://tally.so/embed/wQbZr7?hideTitle=1&transparentBackground=1&dynamicHeight=1"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
