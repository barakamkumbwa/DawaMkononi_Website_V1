'use client'

import Image from 'next/image'
import { useEffect, useState, type ReactNode } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { getProductPage } from '@/lib/products'
import { delay, useReveal } from '@/lib/use-reveal'

type Lang = 'en' | 'sw'

const ui = {
  en: {
    overview: 'OVERVIEW',
    qualifies: 'WHO QUALIFIES',
    howItWorks: 'HOW IT WORKS',
    stepsTitle: 'Get started in a few simple steps.',
    step: 'Step',
    capabilities: 'WHAT NORA CAN DO',
    capabilitiesTitle: 'Ask in your own words.',
    benefits: 'BENEFITS',
    faq: 'FAQ',
    faqTitle: 'Frequently asked questions',
    help: 'Need help getting started? Our team will set up your facility.',
    talk: 'Talk to our team',
    whatsapp: (name: string) => `Hello Dawa Mkononi, I would like to know more about ${name}.`,
  },
  sw: {
    overview: 'KWA UFUPI',
    qualifies: 'NANI ANASTAHILI',
    howItWorks: 'INAVYOFANYA KAZI',
    stepsTitle: 'Anza kwa hatua chache rahisi.',
    step: 'Hatua',
    capabilities: 'NORA ANAWEZA KUFANYA NINI',
    capabilitiesTitle: 'Uliza kwa maneno yako.',
    benefits: 'FAIDA',
    faq: 'MASWALI',
    faqTitle: 'Maswali yanayoulizwa mara kwa mara',
    help: 'Unahitaji msaada wa kuanza? Timu yetu itaandaa kituo chako.',
    talk: 'Wasiliana na timu yetu',
    whatsapp: (name: string) => `Habari Dawa Mkononi, ningependa kujua zaidi kuhusu ${name}.`,
  },
}

const accents = ['#ED2B2C', '#527da4', '#4d8767', '#e2b85d']
const stepColumns: Record<number, string> = { 4: 'lg:grid-cols-4', 5: 'lg:grid-cols-5', 6: 'lg:grid-cols-3' }
const container = 'relative z-10 mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:translate-x-3 lg:px-12'
const columns = 'relative z-10 mx-auto w-full max-w-[1240px] text-[#321e20]'

export default function ProductPageContent({ slug }: { slug: string }) {
  const [lang, setLang] = useState<Lang>('en')
  const product = getProductPage(slug)!
  const copy = ui[lang]
  const whatsapp = `https://wa.me/255747665664?text=${encodeURIComponent(copy.whatsapp(product.name))}`

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => window.scrollTo(0, 0))
    return () => window.cancelAnimationFrame(frame)
  }, [])

  return (
    <>
      <Navbar lang={lang} setLang={setLang} />
      <main className="font-asap">
        <ProductHero title={product.name} />

        <OverviewSection overview={product.overview[lang]} purpose={product.purpose.map((item) => ({ label: item.label[lang], text: item.text[lang] }))} label={copy.overview} stats={product.highlights.map((item) => ({ value: item.value, label: item.label[lang] }))} image={product.image} />

        <LightSection id="how-it-works">
          <CenteredHeading label={copy.howItWorks} title={copy.stepsTitle} />
          <ol className={`mt-12 grid gap-6 sm:grid-cols-2 lg:gap-8 ${stepColumns[product.steps.length] ?? 'lg:grid-cols-4'}`}>
            {product.steps.map((step, index) => (
              <li key={step.en} className="reveal" style={delay(560 + index * 140)}>
                <AccentTitle accent={accents[index % accents.length]} delayMs={700 + index * 140}>{copy.step} 0{index + 1}</AccentTitle>
                <p className="mt-4 text-[15px] leading-7 text-[#5f5052]">{step[lang]}</p>
              </li>
            ))}
          </ol>
          <div className="mt-20">
            <Label text={copy.benefits} />
            <div className={`mt-8 grid gap-4 max-[1100px]:grid-cols-2 max-[540px]:grid-cols-1 ${product.benefits.length === 5 ? 'grid-cols-5' : 'grid-cols-4'}`}>
              {product.benefits.map((item, index) => {
                const accent = accents[index % accents.length]
                return (
                  <article key={item.title.en} className="reveal group relative flex flex-col bg-[#fffaf8] p-6 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_44px_rgba(50,30,32,0.12)]" style={delay(200 + index * 90)}>
                    <span className="grid size-10 place-items-center text-sm font-bold text-white" style={{ backgroundColor: accent }}>0{index + 1}</span>
                    <h3 className="mt-5 text-[17px] font-bold leading-snug tracking-[-0.02em]">{item.title[lang]}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#5f5052]">{item.text[lang]}</p>
                    <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" style={{ backgroundColor: accent }} />
                  </article>
                )
              })}
            </div>
          </div>
          <div className="mt-12 flex items-center justify-between gap-6 border-t border-[#321e20]/10 pt-6 max-[760px]:flex-col max-[760px]:items-start">
            <p className="max-w-[720px] text-sm leading-6 text-[#76696a]">{copy.help}</p>
            <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#321e20]/[0.06] px-5 py-2.5 text-sm font-semibold text-[#321e20] transition hover:bg-[#ED2B2C] hover:text-white">{copy.talk} <span aria-hidden="true">↗</span></a>
          </div>
        </LightSection>

        {product.capabilities && (
          <DarkSection>
            <div className="grid grid-cols-[0.78fr_1.22fr] items-start gap-10 py-12 max-[760px]:grid-cols-1 max-[760px]:gap-8 max-[760px]:py-8">
              <div>
                <Label text={copy.capabilities} />
                <h2 className="reveal mt-3 max-w-[460px] text-[clamp(34px,3.2vw,46px)] font-bold leading-[1.12] tracking-[-0.045em] text-white" style={delay(120)}>{copy.capabilitiesTitle}</h2>
              </div>
              <div className="grid grid-cols-3 gap-x-6 gap-y-8 pt-[26px] max-[1000px]:grid-cols-2 max-[540px]:grid-cols-1 max-[760px]:pt-0">
                {product.capabilities.map((item, index) => (
                  <div key={item.title.en} className="reveal" style={delay(260 + index * 80)}>
                    <AccentTitle accent={accents[index % accents.length]} delayMs={400 + index * 80} dark>{item.title[lang]}</AccentTitle>
                    <p className="mt-3 text-sm leading-6 text-white/70">{item.text[lang]}</p>
                  </div>
                ))}
              </div>
            </div>
          </DarkSection>
        )}

        {product.faq && (
          <DarkSection>
            <div className="grid grid-cols-[0.78fr_1.22fr] items-start gap-10 py-12 max-[760px]:grid-cols-1 max-[760px]:gap-8 max-[760px]:py-8">
              <div>
                <Label text={copy.faq} />
                <h2 className="reveal mt-3 max-w-[420px] text-[clamp(34px,3.2vw,46px)] font-bold leading-[1.12] tracking-[-0.045em] text-white" style={delay(120)}>{copy.faqTitle}</h2>
              </div>
              <div className="pt-[26px] max-[760px]:pt-0">
                {product.faq.map((item, index) => (
                  <details key={item.question.en} className="reveal group border-b border-white/15 py-4" style={delay(260 + index * 100)}>
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-white [&::-webkit-details-marker]:hidden">
                      {item.question[lang]}
                      <span aria-hidden="true" className="shrink-0 text-xl font-light leading-none text-[#e2b85d] transition-transform duration-200 group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-2 pr-8 text-[clamp(15px,1.15vw,17px)] leading-[1.7] text-white/75">{item.answer[lang]}</p>
                  </details>
                ))}
              </div>
            </div>
          </DarkSection>
        )}
      </main>
      <Footer lang={lang} />
    </>
  )
}

function DarkSection({ children }: { children: ReactNode }) {
  const [ref, visible] = useReveal<HTMLElement>()
  return (
    <section ref={ref} className={`${visible ? 'is-visible ' : ''}relative isolate w-full overflow-hidden bg-[#191c1d] py-12 text-white sm:py-16 lg:py-20`}>
      <div aria-hidden="true" className="absolute inset-0 z-0 bg-[linear-gradient(90deg,rgba(25,28,29,0.97)_0%,rgba(25,28,29,0.88)_48%,rgba(25,28,29,0.65)_100%)]" />
      <div aria-hidden="true" className="about-glow absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_90%_45%,rgba(237,43,44,0.14),transparent_48%)]" />
      <div className={container}>{children}</div>
    </section>
  )
}

function LightSection({ children, id }: { children: ReactNode; id?: string }) {
  const [ref, visible] = useReveal<HTMLElement>()
  return (
    <section ref={ref} id={id} className={`${visible ? 'is-visible ' : ''}relative isolate w-full scroll-mt-24 overflow-hidden bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24`}>
      <div className={columns}>{children}</div>
    </section>
  )
}

function Label({ text }: { text: string }) {
  return (
    <p className="reveal inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.16em] text-[#ED2B2C]">
      <span aria-hidden="true" className="reveal-rule h-px w-8 bg-[#ED2B2C]" style={delay(150)} />{text}
    </p>
  )
}

function CenteredHeading({ label, title }: { label: string; title: string }) {
  return (
    <div className="mx-auto flex max-w-[780px] flex-col items-center text-center">
      <p className="reveal inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.16em] text-[#ED2B2C]" style={delay(120)}>
        <span aria-hidden="true" className="reveal-rule h-px w-8 bg-[#ED2B2C]" style={delay(260)} />{label}
      </p>
      <h2 className="reveal mt-3 text-[clamp(34px,3.2vw,46px)] font-bold leading-[1.12] tracking-[-0.045em]" style={delay(200)}>{title}</h2>
    </div>
  )
}

function AccentTitle({ children, accent, delayMs, dark = false }: { children: ReactNode; accent: string; delayMs: number; dark?: boolean }) {
  return (
    <p className={`flex items-center gap-3 text-base font-bold tracking-[-0.01em] ${dark ? 'text-white' : ''}`}>
      <span aria-hidden="true" className="reveal-rule-y h-6 w-[4px] shrink-0 rounded-full" style={{ ...delay(delayMs), backgroundColor: accent }} />
      {children}
    </p>
  )
}

function OverviewSection({ overview, purpose, label, stats, image }: { overview: string; purpose: { label: string; text: string }[]; label: string; stats: { value: string; label: string }[]; image: string }) {
  const [ref, visible] = useReveal<HTMLElement>()

  return (
    <section ref={ref} className={`${visible ? 'is-visible ' : ''}relative isolate w-full overflow-hidden bg-[#111315] px-5 py-14 text-white sm:px-8 sm:py-20 lg:px-12 lg:py-24`}>
      <Image src={image} alt="" fill sizes="100vw" className={`-z-20 object-cover object-[center_36%] transition-transform duration-[1400ms] ease-out ${visible ? 'scale-100' : 'scale-110 motion-reduce:scale-100'}`} aria-hidden="true" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(13,16,17,0.94)_0%,rgba(13,16,17,0.88)_48%,rgba(13,16,17,0.78)_100%)] max-[680px]:bg-[rgba(13,16,17,0.9)]" />
      <span aria-hidden="true" className={`absolute left-0 top-0 h-px bg-gradient-to-l from-[#d6a53c] to-transparent transition-[width] duration-1000 ease-out ${visible ? 'w-1/2' : 'w-0'}`} />
      <span aria-hidden="true" className={`absolute bottom-0 right-0 h-px bg-gradient-to-r from-[#d6a53c] to-transparent transition-[width] delay-300 duration-1000 ease-out ${visible ? 'w-1/2' : 'w-0'}`} />
      <div className="mx-auto grid w-full max-w-[1240px] grid-cols-[1.15fr_0.85fr] items-stretch gap-16 max-[900px]:grid-cols-1 max-[900px]:gap-10">
        <div className="flex flex-col">
          <p className="reveal inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.16em] text-[#f0c76e]">
            <span aria-hidden="true" className="reveal-rule h-px w-8 bg-[#d6a53c]" style={delay(150)} />{label}
          </p>
          <p className="reveal mt-6 border-l-[3px] border-[#ED2B2C] pl-6 text-[clamp(17px,1.35vw,20px)] leading-[1.75] text-white/85 min-[901px]:my-auto" style={delay(150)}>{overview}</p>
          <dl className="mt-auto grid grid-cols-3 border-y border-white/15 max-[900px]:mt-10 max-[480px]:grid-cols-1">
            {stats.map((item, index) => (
              <div key={item.value} className={`reveal py-5 ${index > 0 ? 'border-l border-white/15 pl-6 max-[480px]:border-l-0 max-[480px]:border-t max-[480px]:pl-0' : ''}`} style={delay(250 + index * 120)}>
                <dt className="sr-only">{item.label}</dt>
                <dd className="text-[clamp(24px,2.4vw,32px)] font-bold leading-none tracking-[-0.04em]">{item.value}</dd>
                <dd className="mt-2 text-sm leading-5 text-white/65">{item.label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mt-44 border-t border-white/15 max-[900px]:mt-0">
          {purpose.map((item, index) => (
            <div key={item.label} className="reveal border-b border-white/15 py-4" style={delay(300 + index * 160)}>
              <h3 className="text-lg font-bold tracking-[-0.02em]">{item.label}</h3>
              <p className="mt-2 text-[clamp(15px,1.15vw,17px)] leading-[1.7] text-white/75">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductHero({ title }: { title: string }) {
  const [ref, visible] = useReveal<HTMLElement>()
  return (
    <section ref={ref} className={`${visible ? 'is-visible ' : ''}relative w-full border-b border-[#f1e4e1] bg-white px-5 pb-9 pt-[100px] text-center text-[#321e20] sm:px-8 sm:pb-10 sm:pt-[132px] lg:px-12`}>
      <h1 className="reveal inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.16em] text-[#ED2B2C]">
        <span aria-hidden="true" className="reveal-rule h-px w-8 bg-[#ED2B2C]" style={delay(150)} />{title}
      </h1>
    </section>
  )
}
