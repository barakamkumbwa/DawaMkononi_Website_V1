import { useEffect, useRef, useState } from 'react'
import { ArrowRight, ArrowUpRight, MessageCircle } from 'lucide-react'

type HeroProps = {
  lang: 'en' | 'sw'
}

const content = {
  en: {
    title: <>Better stocked.<br />Better access.<br /><span className="block whitespace-nowrap font-roboto text-[0.72em] font-semibold tracking-[-0.035em] text-[#ED2B2C] sm:text-[0.86em] lg:text-[0.9em]">Better health for all.</span></>,
    intro: 'Trusted medicines, easy ordering and flexible credit—built for pharmacies and health facilities.',
    primary: 'Chat with our team',
    secondary: 'Explore solutions',
  },
  sw: {
    title: <>Stoo bora.<br />Dawa karibu.<br /><span className="block whitespace-nowrap font-roboto text-[0.72em] font-semibold tracking-[-0.035em] text-[#ED2B2C] sm:text-[0.86em] lg:text-[0.9em]">Afya bora kwa wote.</span></>,
    intro: 'Dawa za kuaminika, oda rahisi na ufadhili wa stoo kwa famasia na vituo vya afya.',
    primary: 'Tuongee na timu yetu',
    secondary: 'Gundua suluhisho',
  },
}

export function Hero({ lang }: HeroProps) {
  const copy = content[lang]
  const heroRef = useRef<HTMLElement>(null)
  const [heroVisible, setHeroVisible] = useState(false)
  const services = [
    { href: '#contact', kind: 'medicine' as const, title: lang === 'en' ? 'Medicine supply' : 'Ugavi wa dawa', subtitle: lang === 'en' ? 'Trusted products' : 'Bidhaa za kuaminika' },
    { href: '/products/dawa-kwanza', kind: 'credit' as const, title: lang === 'en' ? 'Stock credit' : 'Mkopo wa stoo', subtitle: lang === 'en' ? 'Pay within 28 days' : 'Lipa ndani ya siku 28' },
    { href: '/products/nora', kind: 'nora' as const, title: lang === 'en' ? 'Nora AI' : 'Nora AI', subtitle: lang === 'en' ? 'Order with ease' : 'Agiza kwa urahisi' },
    { href: '/products/pos', kind: 'pos' as const, title: lang === 'en' ? 'Pharmacy POS' : 'POS ya famasia', subtitle: lang === 'en' ? 'Track sales and stock' : 'Fuatilia mauzo na stoo' },
  ]

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return
    let revealTimer: number | undefined

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        revealTimer = window.setTimeout(() => setHeroVisible(true), 140)
      } else {
        if (revealTimer !== undefined) window.clearTimeout(revealTimer)
        revealTimer = undefined
        setHeroVisible(false)
      }
    }, { threshold: 0.01 })

    observer.observe(hero)
    return () => {
      observer.disconnect()
      if (revealTimer !== undefined) window.clearTimeout(revealTimer)
    }
  }, [])

  return (
    <section ref={heroRef} id="top" className="relative isolate min-h-svh overflow-hidden bg-[#fffaf8] pt-[72px] text-[#321e20] lg:pt-[118px]">
      <div className="pointer-events-none absolute inset-0 -z-10 text-[#ED2B2C]/[0.09]" aria-hidden="true">
        <svg className="h-full min-h-[620px] w-full" viewBox="0 0 1440 760" preserveAspectRatio="xMidYMid slice" fill="none">
          <g stroke="currentColor" strokeWidth="1.2">
            <path d="M-90 180C25 85 120 102 188 177s116 112 206 61 151-125 249-69 99 162 205 170 125-100 229-98 155 91 241 59 131-91 232-52" />
            <path d="M-90 205C20 115 111 129 176 198s116 107 206 57 151-119 245-67 103 157 203 163 126-93 225-92 157 85 243 55 132-84 232-48" />
            <path d="M-90 231C16 145 102 155 164 219s118 103 206 53 151-113 241-65 106 152 201 155 126-86 220-86 158 80 245 52 134-77 232-44" />
            <path d="M-90 258C10 176 94 183 151 240s119 99 205 50 151-107 237-62 108 145 198 147 127-80 215-80 160 75 247 48 136-70 232-40" />
            <path d="M-90 500C35 407 125 423 202 489s117 95 204 47 145-116 242-65 113 149 211 154 126-90 222-83 157 80 245 53 136-86 235-50" />
            <path d="M-90 528C29 440 119 452 190 514s119 90 204 44 145-109 237-63 117 144 209 146 127-82 218-76 159 74 247 49 138-79 235-46" />
            <path d="M-90 557C23 473 112 482 178 539s121 85 204 41 145-102 233-60 121 138 207 138 128-73 213-69 161 68 249 45 140-72 235-42" />
            <path d="M1020-95C937-26 933 25 1004 69s164 27 185 104-50 127-24 194 119 54 157 121-8 131-70 170-103 79-75 145 88 85 67 166" />
            <path d="M1052-95C977-31 973 14 1037 53s149 27 170 97-47 118-22 180 109 50 144 111-8 120-65 156-94 73-68 133 80 79 61 153" />
            <path d="M1085-95C1018-36 1012 4 1070 38s135 26 154 89-43 108-20 165 99 46 131 101-7 109-59 143-86 67-62 122 73 72 56 139" />
            <path d="M1118-95C1058-41 1052-6 1104 23s120 24 138 81-39 98-18 150 89 41 118 91-7 98-53 129-79 61-56 111 65 65 50 125" />
          </g>
        </svg>
      </div>

      <div className="mx-auto grid min-h-[calc(100svh-72px-145px)] max-w-[1440px] items-center gap-8 px-5 pb-10 pt-7 sm:px-8 lg:min-h-[calc(100svh-118px-105px)] lg:translate-x-3 lg:grid-cols-[1fr_0.95fr] lg:gap-12 lg:px-12 lg:pb-14 lg:pt-8">
        <div className={`relative z-10 max-w-[620px] py-2 lg:py-10 ${heroVisible ? 'hero-copy-enter' : 'opacity-0 motion-reduce:translate-x-0 motion-reduce:opacity-100'}`}>
          <h1 className="font-asap text-balance text-[clamp(2.8rem,5vw,4.5rem)] font-bold leading-[1.04] tracking-[-0.045em] text-[#321e20]">
            {copy.title}
          </h1>
          <p className="mt-6 max-w-[440px] font-asap text-lg leading-8 text-[#5f5052] sm:text-xl sm:leading-8">
            {copy.intro}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a className="group inline-flex min-h-[60px] items-center gap-3 rounded-2xl bg-gradient-to-r from-[#ED2B2C] to-[#D42021] px-5 font-asap text-sm font-semibold text-white shadow-[0_12px_26px_rgba(237,43,44,0.22)] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_18px_34px_rgba(237,43,44,0.3)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ED2B2C] active:translate-y-0 active:scale-[0.99]" href="https://wa.me/255747665664" target="_blank" rel="noreferrer">
              <span className="grid size-10 place-items-center rounded-xl bg-white/15 ring-1 ring-inset ring-white/15 transition duration-300 group-hover:bg-white/25"><MessageCircle size={18} aria-hidden="true" /></span>
              <span>{copy.primary}</span>
              <ArrowUpRight size={16} aria-hidden="true" className="ml-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a className="group inline-flex min-h-[60px] items-center gap-3 rounded-2xl border border-[#e4d1ce] bg-white/90 px-5 font-asap text-sm font-semibold text-[#572e30] shadow-[0_5px_16px_rgba(68,29,31,0.06)] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:border-[#c77c73] hover:bg-[#fff4f1] hover:shadow-[0_14px_28px_rgba(68,29,31,0.12)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ED2B2C] active:translate-y-0 active:scale-[0.99]" href="#how-it-works">
              <span>{copy.secondary}</span>
              <ArrowRight size={17} aria-hidden="true" className="text-[#ED2B2C] transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div className={`group relative mx-auto h-[330px] w-full max-w-[580px] sm:h-[420px] lg:h-[480px] ${heroVisible ? 'hero-image-enter' : 'translate-x-8 scale-[0.96] opacity-0 motion-reduce:translate-x-0 motion-reduce:scale-100 motion-reduce:opacity-100'}`} role="img" aria-label={lang === 'en' ? 'One pharmacist photo inside three connected medicine shapes' : 'Picha moja ya mfamasia ndani ya maumbo matatu ya dawa yaliyoungana'}>
          <svg className="h-full w-full overflow-visible drop-shadow-[0_20px_28px_rgba(68,29,31,0.18)]" viewBox="0 0 500 460" preserveAspectRatio="xMidYMid meet" fill="none" aria-hidden="true">
            <defs>
              <clipPath id="connected-pill-shapes">
                <rect x="25" y="55" width="165" height="350" rx="82.5" />
                <rect x="165" y="15" width="170" height="430" rx="85" />
                <rect x="310" y="55" width="165" height="350" rx="82.5" />
              </clipPath>
              <linearGradient id="pill-photo-tint" x1="250" y1="0" x2="250" y2="460" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" stopOpacity="0.08" />
                <stop offset="1" stopColor="#B8191A" stopOpacity="0.16" />
              </linearGradient>
            </defs>
            <image
              href="/pharmacist%20holding%20medicine3.jpeg"
              x="0"
              y="0"
              width="500"
              height="460"
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#connected-pill-shapes)"
              className="origin-center transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            <rect x="0" y="0" width="500" height="460" fill="url(#pill-photo-tint)" clipPath="url(#connected-pill-shapes)" />
          </svg>
        </div>
      </div>

      <section aria-label={lang === 'en' ? 'Explore Dawa Mkononi services' : 'Gundua huduma za Dawa Mkononi'} className="relative z-10 mx-auto -mt-5 w-[calc(100%-2.5rem)] max-w-[1080px] overflow-hidden rounded-2xl border border-[#f3e9e6] bg-white shadow-[0_18px_48px_rgba(68,29,31,0.08)] sm:w-[calc(100%-4rem)]">
        <div className="grid grid-cols-4 max-[760px]:grid-cols-2">
          {services.map(({ href, title, subtitle }) => (
            <a key={title} href={href} className="group flex min-h-[88px] flex-col items-center justify-center px-5 py-4 text-center transition-colors duration-300 hover:bg-[#fffaf8] focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#ED2B2C] sm:min-h-[96px] sm:px-8">
              <strong className="font-asap text-sm font-semibold tracking-[-0.02em] text-[#321e20] transition-colors duration-200 group-hover:text-[#ED2B2C] sm:text-base">{title}</strong>
              <span className="mt-1 text-xs leading-5 text-[#79696a] sm:text-sm">{subtitle}</span>
            </a>
          ))}
        </div>
      </section>
    </section>
  )
}
