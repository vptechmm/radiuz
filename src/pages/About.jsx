import { useOutletContext } from 'react-router-dom'
import {
  ArrowIcon,
  BoltIcon,
  ScaleIcon,
  ShieldIcon,
  btnHeroXl,
  cardBase,
  container,
  eyebrow,
  heading,
  pill,
  sectionParagraph,
} from '../ui.jsx'

const turningPoint = [
  'Once Radiuz was live within our own walls, something shifted. Our internal teams stopped stressing over manual processes and started focusing on what they do best: delivering incredible results.',
  'We realized we had built something too good to keep to ourselves. We quietly opened the doors, letting a handful of partner agencies take Radiuz for a test drive. The feedback was unanimous: “You need to launch this.”',
  'That was our lightbulb moment. We took that agency-tested, battle-hardened internal tool and refined it into the cloud SaaS platform you see today.',
]

const whyRadiuz = [
  {
    Icon: ShieldIcon,
    title: 'Battle-Tested DNA',
    body:
      "Radiuz wasn't built in a vacuum. It was forged in the trenches of real agency workflows and proven to drive efficiency before it ever hit the market.",
  },
  {
    Icon: ScaleIcon,
    title: 'Built for Scale',
    body:
      'Cloud-native, secure, and designed to grow as your client roster grows.',
  },
  {
    Icon: BoltIcon,
    title: 'Zero Fluff',
    body:
      'We cut out the bloated features you never use and focused entirely on the high-impact tools that actually move the needle for agencies.',
  },
]

function About() {
  const { openContactModal } = useOutletContext()

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <span className="absolute left-1/2 top-[-460px] -translate-x-1/2 rounded-full border border-[rgba(31,37,64,0.08)] w-[920px] h-[920px] max-[1080px]:w-[760px] max-[1080px]:h-[760px]"></span>
          <span className="absolute left-1/2 top-[-460px] -translate-x-1/2 rounded-full border border-[rgba(31,37,64,0.08)] w-[1320px] h-[1320px] max-[1080px]:w-[1080px] max-[1080px]:h-[1080px]"></span>
        </div>

        <div className={`${container} relative z-[1] pt-[96px] pb-[16px] text-center max-[720px]:pt-[64px]`}>
          <p className={eyebrow}>About Radiuz</p>
          <img
            src="/built-by-agencies.png"
            alt="Built by Agencies, for Agencies"
            className="mt-6 mb-7 mx-auto w-full max-w-[560px] rounded-[24px]"
          />
          <h1 className={`${heading} mx-auto max-w-[20ch] text-[clamp(2.6rem,6vw,4rem)]`}>
            Built by Agencies, for Agencies.
          </h1>
          <p className="mt-[1.6rem] mx-auto max-w-[720px] text-[18px] leading-[1.6] text-[#525772] [text-wrap:balance] max-[720px]:text-base">
            Every great tool starts with a problem that needs solving. For us,
            that problem was internal.
          </p>
        </div>
      </section>

      <section className={`${container} py-[56px] max-[720px]:py-[40px]`}>
        <div className="mx-auto max-w-[760px] flex flex-col gap-[1.4rem] text-center">
          <div>
            <p className={eyebrow}>The Origin</p>
            <p className={`${sectionParagraph} mt-4`}>
              We didn&apos;t set out to build a commercial SaaS platform.
              Originally, Radiuz was just our secret weapon — a powerful,
              custom-built cloud solution engineered exclusively for our
              in-house team to streamline workflows, eliminate bottlenecks, and
              scale our output.
            </p>
            <p className={`${sectionParagraph} mt-4`}>
              We built it because the off-the-shelf tools we tried just
              couldn&apos;t keep up with the chaotic, fast-paced demands of
              agency life. We needed something faster, smarter, and more
              intuitive. So, we coded it ourselves.
            </p>
          </div>

          <article className="relative overflow-hidden rounded-[30px] p-7 border border-[rgba(28,31,56,0.08)] bg-[rgba(255,255,255,0.82)] shadow-[0_18px_45px_rgba(28,31,56,0.08)] max-[720px]:p-[1.4rem] max-[720px]:rounded-[24px]">
            <div
              className="absolute inset-0 pointer-events-none"
              aria-hidden="true"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(45deg, rgba(88,86,234,0.07) 0, rgba(88,86,234,0.07) 1px, transparent 1px, transparent 22px)',
              }}
            ></div>
            <div className="relative text-center">
              <img
                src="/turning-point.png"
                alt="The Turning Point"
                className="mb-5 mx-auto w-full max-w-[420px] rounded-[20px]"
              />
              <span className={`${pill} mb-4 px-[0.85rem] py-[0.55rem] bg-[rgba(57,59,222,0.1)] text-brand-deep text-[0.8rem]`}>
                The Turning Point
              </span>
              <h3 className="font-display font-bold text-ink tracking-[-0.04em] leading-[1.12] text-[clamp(1.5rem,2.6vw,1.9rem)]">
                Too good to keep to ourselves.
              </h3>
              {turningPoint.map((paragraph, i) => (
                <p
                  key={paragraph}
                  className={`${sectionParagraph} ${i === 0 ? 'mt-4' : 'mt-[0.85rem]'}`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className={`${container} py-[40px] max-[720px]:py-[24px]`}>
        <div className="text-center max-w-[820px] mx-auto mb-8">
          <p className={eyebrow}>Why Choose Radiuz?</p>
          <h2 className={`${heading} text-[clamp(2rem,4vw,3rem)]`}>
            Agency veterans who understand your grind.
          </h2>
          <p className={`${sectionParagraph} mt-4`}>
            We aren&apos;t just software developers looking at a market
            spreadsheet; we are agency veterans who understand your day-to-day
            grind.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-[1.2rem] max-[1080px]:grid-cols-1">
          {whyRadiuz.map(({ Icon, title, body }) => (
            <article
              key={title}
              className={`${cardBase} rounded-[30px] p-6 max-[720px]:p-[1.4rem] max-[720px]:rounded-[24px]`}
            >
              <span className="inline-flex w-12 h-12 rounded-[16px] bg-[rgba(57,59,222,0.1)] text-brand-deep items-center justify-center [&_svg]:w-[1.4rem] [&_svg]:h-[1.4rem]">
                <Icon />
              </span>
              <h3 className="mt-5 font-display font-bold text-ink tracking-[-0.03em] leading-[1.2] text-[1.3rem]">
                {title}
              </h3>
              <p className={`${sectionParagraph} mt-3`}>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${container} py-[56px] max-[720px]:py-[40px]`}>
        <figure className="rounded-[34px] p-[2.4rem] text-center text-white border border-[rgba(255,255,255,0.08)] shadow-[0_24px_60px_rgba(28,31,56,0.18)] bg-[radial-gradient(circle_at_top_left,rgba(103,111,255,0.22),transparent_30%),linear-gradient(135deg,#151935_0%,#2629b1_100%)] max-[720px]:p-[1.6rem] max-[720px]:rounded-[24px]">
          <blockquote className="m-0 mx-auto max-w-[820px] font-display font-bold tracking-[-0.03em] leading-[1.25] text-[clamp(1.5rem,3vw,2.2rem)] [text-wrap:balance]">
            “We built Radiuz to solve our own headaches. Today, we&apos;re on a
            mission to cure them for agencies everywhere.”
          </blockquote>
          <figcaption className="mt-5 text-white/70 font-semibold tracking-[0.08em] uppercase text-[0.82rem]">
            The Radiuz Team
          </figcaption>

          <div className="flex items-center justify-center gap-[14px] flex-wrap mt-8 max-[720px]:w-full">
            <a className={btnHeroXl} href="/#contact" onClick={openContactModal}>
              Get started
              <ArrowIcon />
            </a>
          </div>
        </figure>
      </section>
    </>
  )
}

export default About
