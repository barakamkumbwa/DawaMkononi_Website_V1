'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { MapPin } from 'lucide-react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'

const wa = 'https://wa.me/255747665664'

const copy = {
  en: {
    nav: ['Products', 'About us', 'Blog', 'Our impact', 'Contact'],
    problemLabel: 'WHO WE ARE',
    problemTitle: 'Improving Access to Medicines in Africa',
    problemText: 'Founded in Dar es Salaam in 2023, Dawa Mkononi helps pharmacies, clinics and dispensaries access reliable medicines, get stock credit, and manage inventory, orders and daily operations with simple digital tools.',
    howLabel: 'HOW WE WORK', howTitle: ['Order what you need,', 'wherever you are.'],
    steps: [['01', 'Join Dawa Mkononi', 'Register your pharmacy, clinic or dispensary with our team and get set up on the app.'], ['02', 'Choose and order', 'Find medicines in the app or ask Nora to help prepare your order. Review it, then confirm.'], ['03', 'Receive your medicines', 'Our team processes your order and arranges delivery to your facility.'], ['04', 'Pay within 28 days', 'Eligible facilities can receive medicine stock on Dawa Kwanza credit and repay within 28 days. You can also pay at checkout with Selcom Pay.']],
    impact: [['TZS 2.4B+', 'in medicine stock financed'], ['1,000+', 'pharmacies reached'], ['500,000+', 'patients served']],
    faqTitle: 'FAQ',
    faqs: [['Does Nora cost anything?', 'No. Nora AI is free to use in the Dawa Mkononi app.'], ['Can Nora change or cancel a confirmed order?', 'No. Contact customer care for help with a confirmed order. Nora can connect you with the care team on WhatsApp.'], ['Can I ask Nora about doses or treatment?', 'No. Nora helps with products, prices, stock and orders, but does not give medical advice.'], ['Who qualifies for Dawa Kwanza?', 'Your facility must be an active Dawa Mkononi customer for at least 3 consecutive months, have a good credit score based on purchase history, make at least 5 purchases with a mix of cash and credit, and have an active Vodacom M-Pesa Lipa Number.'], ['How do I repay Dawa Kwanza?', 'After approving the order with your Vodacom Lipa Number, repay through that number within 28 days.'], ['Can I make partial repayments?', 'Yes. A partial repayment immediately restores that amount to your available credit. Each new order starts its own 28-day repayment period.'], ['Does POS cost anything?', 'No. Dawa Mkononi POS is free in the mobile app.'], ['Can POS track stock bought from other suppliers?', 'Yes. You can record restocks from any supplier in the POS.'], ['Does POS work on a computer?', 'Not yet. POS currently works in the Dawa Mkononi mobile app.'], ['Does Nora work without internet?', 'No. Typing can work on a weak signal, but photos and files need a steadier connection.']],
  },
  sw: {
    nav: ['Bidhaa', 'Kuhusu sisi', 'Blogu', 'Athari', 'Mawasiliano'],
    problemLabel: 'SISI NI NANI',
    problemTitle: 'Kuboresha upatikanaji wa dawa barani Afrika',
    problemText: 'Ilianzishwa Dar es Salaam mwaka 2023, Dawa Mkononi husaidia famasia, kliniki na zahanati kupata dawa na mkopo wa stoo, na kusimamia bidhaa, oda na shughuli za kila siku kwa kutumia zana rahisi za kidijitali.',
    howLabel: 'JINSI TUNAVYOFANYA KAZI', howTitle: ['Agiza unachohitaji,', 'popote ulipo.'],
    steps: [['01', 'Jiunge na Dawa Mkononi', 'Sajili famasia, kliniki au zahanati yako kwa timu yetu na ufungue akaunti kwenye programu.'], ['02', 'Chagua na uagize', 'Tafuta dawa kwenye programu au mwombe Nora akusaidie kuandaa oda. Kagua kisha thibitisha.'], ['03', 'Pokea dawa kituoni', 'Timu yetu huchakata oda yako na kupanga dawa zifikishwe kwenye kituo chako.'], ['04', 'Lipa ndani ya siku 28', 'Vituo vinavyostahili vinaweza kupata dawa kwa mkopo wa Dawa Kwanza na kulipa ndani ya siku 28. Pia unaweza kulipa wakati wa kuagiza kupitia Selcom Pay.']],
    impact: [['TZS 2.4B+', 'ya stoo ya dawa imefadhiliwa'], ['1,000+', 'famasia zimefikiwa'], ['500,000+', 'wagonjwa wamehudumiwa']],
    faqTitle: 'FAQ',
    faqs: [['Je, Nora inahitaji malipo?', 'Hapana. Nora AI inapatikana bure kwenye programu ya Dawa Mkononi.'], ['Je, Nora inaweza kubadilisha au kufuta oda iliyothibitishwa?', 'Hapana. Wasiliana na huduma kwa wateja wakusaidie. Nora inaweza kukuunganisha nao kupitia WhatsApp.'], ['Je, naweza kumuuliza Nora kuhusu dozi au tiba?', 'Hapana. Nora husaidia kuhusu bidhaa, bei, stoo na oda, lakini haitoi ushauri wa kitabibu.'], ['Nani anastahili kupata Dawa Kwanza?', 'Kituo kiwe mteja hai wa Dawa Mkononi kwa angalau miezi 3 mfululizo, kiwe na alama nzuri ya mkopo kulingana na historia ya manunuzi, kiwe kimenunua angalau mara 5 kwa mchanganyiko wa malipo ya fedha na mkopo, na kiwe na namba hai ya Vodacom M-Pesa Lipa.'], ['Nitalipaje mkopo wa Dawa Kwanza?', 'Baada ya kuthibitisha oda kwa namba yako ya Vodacom Lipa, rejesha mkopo kupitia namba hiyo ndani ya siku 28.'], ['Je, naweza kurejesha mkopo kwa awamu?', 'Ndiyo. Malipo ya sehemu huongeza mara moja kiasi hicho kwenye kiwango chako cha mkopo kinachopatikana. Kila oda mpya huanza kipindi chake cha siku 28 cha marejesho.'], ['Je, POS inahitaji malipo?', 'Hapana. Dawa Mkononi POS inapatikana bure ndani ya programu ya simu.'], ['Je, POS inaweza kufuatilia bidhaa kutoka kwa wasambazaji wengine?', 'Ndiyo. Unaweza kurekodi bidhaa ulizopokea kutoka kwa msambazaji yeyote.'], ['Je, POS inafanya kazi kwenye kompyuta?', 'Bado. Kwa sasa POS inafanya kazi ndani ya programu ya simu ya Dawa Mkononi.'], ['Je, Nora inafanya kazi bila intaneti?', 'Hapana. Kuandika kunaweza kufanya kazi kwenye mtandao dhaifu, lakini picha na faili zinahitaji mtandao imara zaidi.']],
  },
}

function Arrow() { return <span aria-hidden="true">↗</span> }

function CountUpValue({ value, active }: { value: string; active: boolean }) {
  const isCurrency = value.startsWith('TZS')
  const target = isCurrency ? 2.4 : 1000
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    let frame = 0
    const startedAt = performance.now()
    const duration = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 1800
    const animate = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(target * eased)
      if (progress < 1) frame = window.requestAnimationFrame(animate)
    }

    frame = window.requestAnimationFrame(animate)
    return () => window.cancelAnimationFrame(frame)
  }, [active, target])

  const display = isCurrency
    ? `TZS ${count.toFixed(1)}B+`
    : `${Math.floor(count).toLocaleString('en-US')}+`

  return <>{display}</>
}

export default function HomePage() {
  const [lang, setLang] = useState<'en' | 'sw'>('en')
  const [aboutVisible, setAboutVisible] = useState(false)
  const aboutRef = useRef<HTMLElement>(null)
  const [howVisible, setHowVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(-1)
  const howRef = useRef<HTMLElement>(null)
  const t = copy[lang]
  const aboutMetrics = lang === 'en'
    ? [['2023', 'Founded in Dar es Salaam'], ['1,000+', 'pharmacies reached'], ['TZS 2.4B+', 'medicine stock financed']]
    : [['2023', 'Ilianzishwa Dar es Salaam'], ['1,000+', 'famasia zimefikiwa'], ['TZS 2.4B+', 'ya stoo ya dawa imefadhiliwa']]

  useEffect(() => {
    const section = aboutRef.current
    if (!section) return
    const observer = new IntersectionObserver(([entry]) => {
      setAboutVisible(entry.isIntersecting)
    }, { threshold: 0.01, rootMargin: '0px 0px -35% 0px' })
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const section = howRef.current
    if (!section) return
    let wasVisible = false
    let pulseTimers: number[] = []
    const clearPulseTimers = () => {
      pulseTimers.forEach((timer) => window.clearTimeout(timer))
      pulseTimers = []
    }
    const observer = new IntersectionObserver(([entry]) => {
      setHowVisible(entry.isIntersecting)
      if (entry.isIntersecting && !wasVisible) {
        wasVisible = true
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
        clearPulseTimers()
        for (let index = 0; index < 4; index += 1) {
          const startDelay = 350 + index * 720
          pulseTimers.push(window.setTimeout(() => setActiveStep(index), startDelay))
          pulseTimers.push(window.setTimeout(() => setActiveStep(-1), startDelay + 430))
        }
      } else if (!entry.isIntersecting) {
        wasVisible = false
        setActiveStep(-1)
        clearPulseTimers()
      }
    }, { threshold: 0.12 })
    observer.observe(section)
    return () => {
      observer.disconnect()
      clearPulseTimers()
    }
  }, [])

  return <>
    <Navbar lang={lang} setLang={setLang} />
    <main>
      <Hero lang={lang} />
      <section
        ref={aboutRef}
        className="relative isolate w-full overflow-hidden bg-[#111315] py-10 font-asap sm:py-14 lg:py-16"
        id="about-us"
        aria-labelledby="about-title"
      >
        <Image
          src="/pharmacist holding medicine2.jpeg"
          alt=""
          fill
          sizes="100vw"
          className={`z-0 object-cover object-[center_36%] transition-transform duration-[1400ms] ease-out ${aboutVisible ? 'scale-100' : 'scale-110 motion-reduce:scale-100'}`}
          aria-hidden="true"
        />
        <div aria-hidden="true" className={`absolute inset-0 z-10 bg-[linear-gradient(100deg,rgba(13,16,17,0.94)_0%,rgba(13,16,17,0.88)_48%,rgba(13,16,17,0.76)_100%)] transition-opacity duration-1000 max-[680px]:bg-[rgba(13,16,17,0.88)] ${aboutVisible ? 'opacity-100' : 'opacity-70'}`} />
        <span aria-hidden="true" className={`absolute left-0 top-0 z-20 h-px bg-gradient-to-l from-[#d6a53c] to-transparent transition-[width] duration-1000 ease-out ${aboutVisible ? 'w-1/2' : 'w-0'}`} />
        <span aria-hidden="true" className={`absolute bottom-0 right-0 z-20 h-px bg-gradient-to-r from-[#d6a53c] to-transparent transition-[width] duration-1000 ease-out delay-300 ${aboutVisible ? 'w-1/2' : 'w-0'}`} />
        <div className="relative z-20 mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:translate-x-3 lg:px-12">
          <div className="grid grid-cols-[0.78fr_1.22fr] items-center gap-16 py-10 max-[760px]:grid-cols-1 max-[760px]:gap-7 max-[760px]:py-8">
            <div>
              <span className={`inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.16em] text-[#f0c76e] transition-all duration-700 ease-out ${aboutVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100'}`}>
                <span aria-hidden="true" className="h-px w-8 bg-[#d6a53c]" />
                {t.problemLabel}
              </span>
              <span className={`mt-3 block max-w-[420px] font-asap text-[clamp(34px,3.2vw,46px)] font-bold leading-[1.12] tracking-[-0.045em] text-white transition-all delay-75 duration-700 ease-out ${aboutVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100'}`}>
                {lang === 'en' ? 'Medicine supply,' : 'Ugavi wa dawa,'}
              </span>
              <h2 id="about-title" className={`mt-2 max-w-[420px] font-asap text-[clamp(34px,3.2vw,46px)] font-bold leading-[1.12] tracking-[-0.045em] text-white transition-all delay-100 duration-700 ease-out ${aboutVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100'}`}>
                {t.problemTitle}
              </h2>
              <p className={`mt-5 inline-flex items-center gap-2 text-sm font-medium text-white/75 transition-all delay-200 duration-700 ease-out ${aboutVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100'}`}>
                <MapPin size={16} className="shrink-0 text-[#e7ad50]" aria-hidden="true" />
                {lang === 'en' ? 'Dar es Salaam, Tanzania · Since 2023' : 'Dar es Salaam, Tanzania · Tangu 2023'}
              </p>
            </div>
            <div className="max-w-[760px]">
              <p className={`m-0 font-asap text-[clamp(17px,1.35vw,20px)] leading-[1.75] text-white/85 transition-all delay-200 duration-700 ease-out ${aboutVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100'}`}>
                {t.problemText}
              </p>
              <a className={`mt-6 inline-flex min-h-12 items-center gap-3 rounded-md bg-[#ED2B2C] px-5 font-asap text-sm font-semibold text-white shadow-[0_5px_14px_rgba(35,48,71,0.14)] transition-all delay-300 duration-700 ease-out hover:-translate-y-0.5 hover:bg-[#D42021] hover:shadow-[0_9px_22px_rgba(35,48,71,0.2)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#ED2B2C] ${aboutVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100'}`}
                href="#how-it-works"
              >
                {lang === 'en' ? 'Explore our solutions' : 'Gundua suluhisho zetu'}
                <span aria-hidden="true" className="text-lg leading-none">→</span>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-3 py-6 max-[680px]:grid-cols-1 max-[680px]:divide-y max-[680px]:divide-white/20 max-[680px]:py-2">
            {aboutMetrics.map(([value, label], index) => (
              <div
                key={value}
                className={`flex items-baseline gap-2 px-5 text-white transition-all duration-700 ease-out max-[680px]:px-2 max-[680px]:py-4 ${index > 0 ? 'border-l border-white/20 max-[680px]:border-l-0' : ''} ${aboutVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100'}`}
                style={{ transitionDelay: aboutVisible ? `${160 + index * 100}ms` : '0ms' }}
              >
                <strong className="shrink-0 font-asap text-xl font-bold tracking-[-0.04em] text-white sm:text-2xl">
                  {value === '2023' ? value : <CountUpValue value={value} active={aboutVisible} />}
                </strong>
                <span className="font-asap text-sm leading-snug text-white/70">{label}</span>
              </div>
            ))}
          </div>
          <section aria-labelledby="investors-title" className="mt-7 rounded-2xl border border-[#eee8e4] bg-white px-5 py-5 shadow-[0_15px_40px_rgba(20,15,15,0.16)] sm:mt-9 sm:px-8 sm:py-6">
            <h2 id="investors-title" className="flex items-center justify-center gap-2.5 text-center font-asap text-xs font-bold uppercase tracking-[0.16em] text-[#321e20]">
              <span aria-hidden="true" className="h-px w-7 bg-[#321e20]" />
              {lang === 'en' ? 'Our Valued Investors' : 'Wawekezaji Wetu'}
            </h2>
            <div className="mx-auto mt-5 grid max-w-[1160px] grid-cols-5 items-center gap-4 max-[680px]:grid-cols-2 max-[680px]:[&>div:last-child]:col-span-2 max-[680px]:[&>div:last-child]:mx-auto max-[680px]:[&>div:last-child]:w-1/2 sm:mt-6 sm:gap-8">
              {[
                ['/image copy 3.png', 'Warioba Ventures'],
                ['/image copy 2.png', 'Villgro Africa'],
                ['/image copy 4.png', 'Sanofi'],
                ['/image.png', 'Pontem Ventures'],
                ['/image copy.png', 'AXIAN'],
              ].map(([src, name], index) => (
                <div
                  key={name}
                  className={`transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:translate-x-0 motion-reduce:scale-100 motion-reduce:opacity-100 ${aboutVisible ? 'translate-x-0 scale-100 opacity-100' : 'translate-x-16 scale-90 opacity-0'}`}
                  style={{ transitionDelay: aboutVisible ? `${index * 160}ms` : '0ms' }}
                >
                  <div className="group rounded-xl transition duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-[0_10px_22px_rgba(35,35,35,0.1)]">
                    <Image src={src} alt={name} width={272} height={88} className="mx-auto h-12 w-full rounded-xl object-contain transition duration-300 group-hover:drop-shadow-[0_5px_8px_rgba(35,35,35,0.14)] sm:h-[52px]" />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
      <section ref={howRef} id="how-it-works" className="relative isolate w-full overflow-hidden bg-[#fffaf8] px-5 py-14 font-asap sm:px-8 sm:py-16 lg:py-20">
        <Image src="/topography.svg" alt="" fill sizes="100vw" className="pointer-events-none z-0 object-cover opacity-70" aria-hidden="true" />
        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:translate-x-3 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.16em] text-[#ED2B2C]"><span aria-hidden="true" className="h-px w-7 bg-[#ED2B2C]" />{t.howLabel}</span>
            <h2 className="mx-auto mt-4 max-w-[620px] font-asap text-[clamp(28px,3.2vw,38px)] font-bold leading-[1.12] tracking-[-0.04em] text-[#321e20]"><span className="block">{t.howTitle[0]}</span><span className="block">{t.howTitle[1]}</span></h2>
          </div>
          <div className="mt-20 grid grid-cols-[0.82fr_1.18fr] items-start gap-14 lg:mt-24 lg:gap-16 max-[760px]:grid-cols-1 max-[760px]:gap-9">
            <div className="mx-auto w-full max-w-[440px] max-[760px]:max-w-[360px]">
              <div id="impact" tabIndex={0} role="group" aria-label={lang === 'en' ? 'Dawa Mkononi impact statistics' : 'Takwimu za matokeo ya Dawa Mkononi'} className="group relative aspect-[0.94] w-full overflow-hidden rounded-[42%_42%_30px_30px] shadow-[0_24px_55px_rgba(68,29,31,0.15)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ED2B2C]">
                <Image src="/bodaman.png" alt={lang === 'en' ? 'Dawa Mkononi delivery rider ready to bring medicines to a health facility' : 'Mwendesha bodaboda wa Dawa Mkononi akiwa tayari kupeleka dawa kituoni'} fill sizes="(max-width: 760px) 90vw, 440px" className="object-cover object-center" />
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus:opacity-100 max-[760px]:opacity-100" />
                {t.impact.map(([value, label], index) => (
                  <div key={value} className={`absolute z-10 flex max-w-[180px] items-center gap-2 rounded-xl border border-white/90 bg-white px-2.5 py-2 shadow-[0_8px_24px_rgba(35,22,22,0.2)] opacity-0 translate-y-2 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus:translate-y-0 group-focus:opacity-100 max-[760px]:translate-y-0 max-[760px]:opacity-100 ${index === 0 ? 'left-3 top-[20%]' : index === 1 ? 'right-3 top-[47%]' : 'bottom-[10%] left-3'}`} style={{ transitionDelay: `${index * 180}ms` }}>
                    <span aria-hidden="true" className="grid size-7 shrink-0 place-items-center rounded-full bg-[#ED2B2C] font-roboto text-xs font-bold text-white">@</span>
                    <span className="min-w-0 text-left"><strong className="block whitespace-nowrap font-roboto text-sm font-bold leading-tight tracking-[-0.03em] text-[#321e20]">{value}</strong><span className="mt-1 block font-roboto text-[11px] font-medium leading-4 text-[#5f5052]">{label}</span></span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="relative">
                <div aria-hidden="true" className="absolute bottom-7 left-[27px] top-7 w-px bg-[#e5dedb]">
                  <span className="block h-full w-full bg-gradient-to-b from-[#ED2B2C] via-[#ED2B2C]/80 to-[#e5dedb]" />
                </div>
                <ol className="relative m-0 grid list-none gap-6 p-0">
              {t.steps.map(([number, title, text], index) => (
                <li key={number} className={`group relative flex items-start gap-5 text-left transition-all duration-700 ease-out motion-reduce:translate-x-0 motion-reduce:opacity-100 ${howVisible ? 'translate-x-0 opacity-100' : 'translate-x-5 opacity-0'}`} style={{ transitionDelay: howVisible ? `${index * 180}ms` : '0ms' }}>
                  <div className={`relative z-10 grid size-14 shrink-0 place-items-center rounded-full border-[5px] border-white bg-[#ED2B2C] font-asap text-sm font-bold tracking-[0.04em] text-white shadow-[0_0_0_1px_rgba(237,43,44,0.2)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_0_7px_rgba(237,43,44,0.14),0_8px_20px_rgba(237,43,44,0.2)] ${activeStep === index ? 'scale-110 shadow-[0_0_0_7px_rgba(237,43,44,0.14),0_8px_20px_rgba(237,43,44,0.2)] ring-4 ring-[#ED2B2C]/20' : ''}`}>{number}</div>
                  <div className="pt-1.5">
                    <span className="text-[11px] font-bold tracking-[0.14em] text-[#ED2B2C]">{lang === 'en' ? 'STEP' : 'HATUA'} 0{index + 1}</span>
                    <h3 className="mt-1 font-asap text-lg font-bold leading-snug tracking-[-0.035em] text-[#321e20] sm:text-xl">{title}</h3>
                    <p className="mt-1 max-w-[620px] font-asap text-sm leading-6 text-[#716562] sm:text-base sm:leading-7">{text}</p>
                  </div>
                </li>
              ))}
                </ol>
              </div>
              <a href={wa} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 border-b border-[#ED2B2C]/50 pb-1 font-asap text-sm font-semibold text-[#D42021] transition-colors hover:border-[#D42021] hover:text-[#B8191A]">
                {lang === 'en' ? 'Need help getting started? Talk to our team' : 'Unahitaji msaada wa kuanza? Wasiliana na timu yetu'} <Arrow />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="faq" aria-labelledby="faq-title" className="relative isolate w-full overflow-hidden bg-[#111315] py-10 font-asap sm:py-14 lg:flex lg:min-h-[560px] lg:items-center lg:py-16">
        <Image src="/image copy 5.png" alt="" fill sizes="100vw" className="z-0 object-cover object-center" aria-hidden="true" />
        <div aria-hidden="true" className="absolute inset-0 z-10 bg-[linear-gradient(100deg,rgba(13,16,17,0.94)_0%,rgba(13,16,17,0.88)_48%,rgba(13,16,17,0.76)_100%)] max-[680px]:bg-[rgba(13,16,17,0.88)]" />
        <span aria-hidden="true" className="absolute left-0 top-0 z-20 h-px w-1/2 bg-gradient-to-l from-[#d6a53c] to-transparent" />
        <span aria-hidden="true" className="absolute bottom-0 right-0 z-20 h-px w-1/2 bg-gradient-to-r from-[#d6a53c] to-transparent" />
        <div className="relative z-20 mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:translate-x-3 lg:px-12">
          <div className="grid grid-cols-[0.78fr_1.22fr] items-center gap-16 py-10 max-[760px]:grid-cols-1 max-[760px]:gap-6 max-[760px]:py-4">
            <div>
              <span className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.16em] text-[#f0c76e]"><span aria-hidden="true" className="h-px w-8 bg-[#d6a53c]" />FAQ</span>
              <h2 id="faq-title" className="mt-3 max-w-[420px] font-asap text-[clamp(34px,3.2vw,46px)] font-bold leading-[1.12] tracking-[-0.045em] text-white">{lang === 'en' ? 'Frequently asked questions' : 'Maswali yanayoulizwa mara kwa mara'}</h2>
              <p className="mt-5 max-w-[390px] font-asap text-base leading-7 text-white/75">{lang === 'en' ? 'Quick answers about ordering, stock credit and managing your pharmacy.' : 'Majibu mafupi kuhusu oda, mkopo wa stoo na usimamizi wa famasia.'}</p>
              <a id="contact" href={wa} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 border-b border-[#d6a53c]/60 pb-1 font-asap text-sm font-semibold text-white transition-colors hover:text-[#f0c76e]">{lang === 'en' ? 'Still have a question? Talk to our team' : 'Bado una swali? Wasiliana na timu yetu'} <Arrow /></a>
            </div>
            <div className="grid grid-cols-2 gap-x-8 max-[760px]:grid-cols-1">
              {t.faqs.map(([question, answer]) => (
                <details key={question} className="group border-b border-white/25">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 py-3 text-left marker:hidden [&::-webkit-details-marker]:hidden">
                    <span className="font-asap text-sm font-semibold leading-snug text-white sm:text-base">{question}</span>
                    <span aria-hidden="true" className="shrink-0 font-asap text-xl font-light leading-none text-[#f0c76e] transition-transform duration-200 group-open:rotate-45">+</span>
                  </summary>
                  <p className="mb-3 pr-4 font-asap text-xs leading-5 text-white/75 sm:text-sm sm:leading-6">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer lang={lang} />
  </>
}
