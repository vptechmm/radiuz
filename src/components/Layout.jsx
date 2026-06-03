import { useCallback, useEffect, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import {
  ArrowIcon,
  MailIcon,
  MapPinIcon,
  btnHero,
  container,
} from '../ui.jsx'

const navLinks = [
  { label: 'Features', href: '/#features' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'About Us', href: '/about_us' },
]

// Scrolls to the hashed element on navigation, or to the top on a plain
// route change so each page starts from the top.
function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1)
      const target = document.getElementById(id)
      if (target) {
        requestAnimationFrame(() => {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        })
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname, hash])

  return null
}

function Layout() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const openContactModal = useCallback((event) => {
    if (event) event.preventDefault()
    setIsContactModalOpen(true)
  }, [])

  const closeContactModal = useCallback(() => {
    setIsContactModalOpen(false)
  }, [])

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
      <ScrollManager />

      <header className="sticky top-0 z-20 backdrop-blur-[18px] bg-white border-b border-[rgba(28,31,56,0.08)]">
        <nav
          className={`${container} py-[18px] flex items-center justify-between gap-6 max-[1080px]:flex-col max-[1080px]:items-start max-[720px]:py-[14px]`}
        >
          <Link className="flex-shrink-0" to="/" aria-label="Radiuz home">
            <img
              className="w-[172px] max-[720px]:w-[146px] h-auto block"
              src="/radiuz-logo.png"
              alt="Radiuz"
            />
          </Link>

          <div className="flex items-center gap-[22px] flex-wrap max-[720px]:gap-[14px]">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-[#111111] no-underline transition-transform duration-200 hover:-translate-y-px"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-[14px] flex-wrap max-[1080px]:w-full">
            <a className={btnHero} href="/#contact" onClick={openContactModal}>
              Get started
              <ArrowIcon />
            </a>
          </div>
        </nav>
      </header>

      <main>
        <Outlet context={{ openContactModal }} />
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
              <a className={btnHero} href="/#contact" onClick={openContactModal}>
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

export default Layout
