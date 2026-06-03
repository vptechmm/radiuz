// Reusable class strings
export const container =
  'w-[min(1180px,calc(100%-40px))] mx-auto max-[720px]:w-[min(100%-24px,1180px)]'

const btnBase =
  'inline-flex items-center justify-center gap-[0.65rem] no-underline cursor-pointer leading-none transition-all duration-200 [&_svg]:w-4 [&_svg]:h-4'

export const btnHero =
  `${btnBase} min-h-[38px] px-4 rounded-[12px] border border-transparent bg-gradient-to-br from-brand to-brand-deep text-white font-semibold text-[0.84rem] shadow-[0_16px_38px_rgba(66,50,232,0.22)] hover:-translate-y-0.5 hover:shadow-[0_22px_46px_rgba(57,59,222,0.24)] max-[720px]:w-full`

export const btnHeroXl =
  `${btnBase} min-h-[40px] px-[1.05rem] rounded-[12px] border border-transparent bg-gradient-to-br from-brand to-brand-deep text-white font-semibold text-[0.88rem] shadow-[0_16px_38px_rgba(66,50,232,0.22)] hover:-translate-y-0.5 hover:shadow-[0_22px_46px_rgba(57,59,222,0.24)] max-[720px]:w-full`

export const btnFull =
  `${btnBase} w-full px-[1.1rem] py-[0.72rem] rounded-[14px] border border-transparent bg-gradient-to-br from-brand to-brand-deep text-white font-semibold text-[0.9rem] shadow-[0_18px_40px_rgba(57,59,222,0.18)] hover:-translate-y-0.5 hover:shadow-[0_22px_46px_rgba(57,59,222,0.24)]`

export const btnLight =
  `${btnBase} px-[1.1rem] py-[0.72rem] rounded-[14px] border border-transparent bg-white text-brand-deep font-semibold text-[0.9rem] hover:-translate-y-0.5 hover:shadow-[0_22px_46px_rgba(57,59,222,0.24)] max-[720px]:w-full`

export const eyebrow =
  'mb-4 text-brand-deep font-display font-extrabold text-[0.83rem] leading-[1.2] tracking-[0.14em] uppercase'

export const heading =
  'm-0 font-display font-bold text-ink tracking-[-0.04em] leading-[0.96]'

export const sectionParagraph = 'text-ink-muted text-[1.04rem] leading-[1.7]'

export const cardBase =
  'border border-[rgba(28,31,56,0.08)] bg-[rgba(255,255,255,0.82)] shadow-[0_18px_45px_rgba(28,31,56,0.08)]'

export const pill =
  'inline-flex items-center justify-center whitespace-nowrap rounded-full font-bold'

export function ArrowIcon() {
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

export function CheckIcon() {
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

export function MailIcon() {
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

export function MapPinIcon() {
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

export function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 3 5 6v5c0 4.5 3 7.6 7 9 4-1.4 7-4.5 7-9V6l-7-3Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="m9 12 2 2 4-4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

export function ScaleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 20h16M7 20v-6m5 6V8m5 12v-9"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

export function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M13 3 5 13h6l-1 8 8-10h-6l1-8Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}
