'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react'
import { SiInstagram } from '@icons-pack/react-simple-icons'

type NavbarProps = {
  lang: 'en' | 'sw'
  setLang: (lang: 'en' | 'sw') => void
}

const navLinks = {
  en: [
    ['About us', '/about'],
    ['Blog', '/blog'],
    ['Our impact', '/#impact'],
    ['Contact', '/#contact'],
  ],
  sw: [
    ['Kuhusu sisi', '/about'],
    ['Blogu', '/blog'],
    ['Athari', '/#impact'],
    ['Mawasiliano', '/#contact'],
  ],
}

const products = [
  { name: 'Dawa Kwanza', description: { en: 'Stock financing', sw: 'Ufadhili wa stoo' }, href: '/products/dawa-kwanza' },
  { name: 'Nora AI', description: { en: 'Your ordering assistant', sw: 'Msaidizi wa kuagiza' }, href: '/products/nora' },
  { name: 'Pharmacy POS', description: { en: 'Manage stock and sales', sw: 'Simamia stoo na mauzo' }, href: '/products/pos' },
]

export function Navbar({ lang, setLang }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const closeTimer = useRef<number | undefined>(undefined)
  const closeMenu = () => {
    setMobileOpen(false)
    setProductsOpen(false)
  }
  const canHover = () => window.matchMedia('(hover: hover) and (min-width: 1024px)').matches
  const openProducts = () => {
    if (!canHover()) return
    window.clearTimeout(closeTimer.current)
    setProductsOpen(true)
  }
  const closeProducts = () => {
    if (!canHover()) return
    window.clearTimeout(closeTimer.current)
    closeTimer.current = window.setTimeout(() => setProductsOpen(false), 150)
  }

  useEffect(() => () => window.clearTimeout(closeTimer.current), [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white text-slate-800 shadow-[0_1px_0_rgba(15,23,42,0.08)]">
      <div className="hidden h-8 items-center justify-end gap-5 border-b border-slate-100 px-6 text-[#F24A4B] sm:flex lg:px-12">
        <a className="inline-flex items-center gap-1.5 text-[11px] font-medium transition hover:text-[#B8191A]" href="https://www.linkedin.com/company/dawa-mkononi/" target="_blank" rel="noreferrer">
          <svg aria-hidden="true" viewBox="0 0 24 24" className="size-[15px] fill-current"><path d="M5.2 3.3a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM3.5 9h3.4v11H3.5V9Zm5.5 0h3.2v1.5h.05A3.55 3.55 0 0 1 15.5 8.7c3.5 0 4.1 2.3 4.1 5.2V20h-3.4v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V20H9V9Z" /></svg>
          <span>LinkedIn</span>
        </a>
        <a className="inline-flex items-center gap-1.5 text-[11px] font-medium transition hover:text-[#B8191A]" href="https://www.instagram.com/dawamkononi?psln=NGd1anlweWkzaG16" target="_blank" rel="noreferrer">
          <SiInstagram size={16} title="Instagram" />
          <span>Instagram</span>
        </a>
      </div>

      <div className="relative mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:h-[86px] lg:px-12">
        <Link className="shrink-0" href="/#top" aria-label="Dawa Mkononi home" onClick={closeMenu}>
          <Image className="h-auto w-[116px] sm:w-[128px]" src="/DM - Dark.png" alt="Dawa Mkononi" width={632} height={232} priority />
        </Link>

        <button
          className="inline-flex size-11 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:border-[#F24A4B] hover:text-[#D42021] lg:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav
          className={`${mobileOpen ? 'flex' : 'hidden'} absolute inset-x-0 top-full flex-col gap-1 border-t border-slate-100 bg-white px-5 pb-5 pt-3 shadow-xl lg:static lg:flex lg:flex-row lg:items-center lg:gap-7 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none xl:gap-9`}
          aria-label="Main navigation"
        >
          <div className="relative" onMouseEnter={openProducts} onMouseLeave={closeProducts}>
            <button
              className="navbar-link flex w-full items-center justify-between gap-2 py-3 text-left text-sm font-semibold text-slate-700 transition hover:text-[#D42021] lg:w-auto lg:py-2"
              aria-expanded={productsOpen}
              onClick={() => setProductsOpen(!productsOpen)}
            >
              <span className="navbar-link-label">{lang === 'en' ? 'Products' : 'Bidhaa'}</span>
              <ChevronDown className={`transition-transform ${productsOpen ? 'rotate-180' : ''}`} size={16} />
            </button>
            <div className={`${productsOpen ? 'grid' : 'hidden'} static gap-1 rounded-none border border-slate-100 bg-white p-2 lg:fixed lg:left-1/2 lg:top-[128px] lg:w-[min(680px,calc(100vw-48px))] lg:-translate-x-1/2 lg:grid-cols-3 lg:gap-2 lg:p-3 lg:shadow-2xl lg:before:absolute lg:before:inset-x-0 lg:before:-top-12 lg:before:h-12 lg:before:content-['']`}>
              {products.map((product) => (
                <Link className="px-3 py-2.5 transition hover:bg-[#fff5f2] lg:px-5 lg:py-4" key={product.name} href={product.href} onClick={closeMenu}>
                  <span className="block text-sm font-semibold text-slate-800">{product.name}</span>
                  <span className="mt-0.5 block text-xs text-slate-500">{product.description[lang]}</span>
                </Link>
              ))}
            </div>
          </div>

          {navLinks[lang].map(([label, href]) => (
            <Link className="navbar-link py-3 text-sm font-semibold text-slate-700 transition hover:text-[#D42021] lg:py-2" key={href} href={href} onClick={closeMenu}>
              <span className="navbar-link-label">{label}</span>
            </Link>
          ))}

          <div className="flex items-center justify-between gap-5 border-t border-slate-100 pt-4 lg:hidden">
            <LanguageButtons lang={lang} setLang={setLang} />
            <ContactLink lang={lang} />
          </div>
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <LanguageButtons lang={lang} setLang={setLang} />
          <ContactLink lang={lang} />
        </div>
      </div>
    </header>
  )
}

function ContactLink({ lang }: { lang: 'en' | 'sw' }) {
  return (
    <a className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#ED2B2C] px-4 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#D42021]" href="https://wa.me/255747665664" target="_blank" rel="noreferrer">
      {lang === 'en' ? 'Talk to our team' : 'Wasiliana nasi'}
      <ArrowUpRight size={16} aria-hidden="true" />
    </a>
  )
}

function LanguageButtons({ lang, setLang }: NavbarProps) {
  return (
    <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-slate-400" aria-label="Choose language">
      <button className={`transition ${lang === 'en' ? 'text-[#D42021]' : 'hover:text-slate-700'}`} aria-pressed={lang === 'en'} onClick={() => setLang('en')}>EN</button>
      <span>/</span>
      <button className={`transition ${lang === 'sw' ? 'text-[#D42021]' : 'hover:text-slate-700'}`} aria-pressed={lang === 'sw'} onClick={() => setLang('sw')}>SW</button>
    </div>
  )
}
