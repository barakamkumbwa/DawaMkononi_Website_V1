import Link from 'next/link'
import Image from 'next/image'

type FooterProps = {
  lang: 'en' | 'sw'
}

export function Footer({ lang }: FooterProps) {
  const en = lang === 'en'
  const usefulLinks = en
    ? [['Products', '/#how-it-works'], ['About us', '/about'], ['Our impact', '/#impact'], ['Blog', '/blog']]
    : [['Bidhaa', '/#how-it-works'], ['Kuhusu sisi', '/about'], ['Athari', '/#impact'], ['Blogu', '/blog']]
  const productLinks = en
    ? [['Dawa Kwanza', '/products/dawa-kwanza'], ['Nora AI', '/products/nora'], ['Pharmacy POS', '/products/pos']]
    : [['Dawa Kwanza', '/products/dawa-kwanza'], ['Nora AI', '/products/nora'], ['POS ya famasia', '/products/pos']]

  return (
    <footer className="relative isolate overflow-hidden border-t border-white/15 bg-[#080808]/95 font-asap text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-2xl">
      <Image src="/backgroundgalss.jpeg" alt="" fill sizes="100vw" className="pointer-events-none z-0 object-cover object-center blur-[6px] [transform:translateX(18%)_translateY(8px)_scale(1.33)]" aria-hidden="true" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 bg-[rgba(8,8,8,0.86)] backdrop-blur-[2px]" />
      <div className="relative z-10 mx-auto grid w-full max-w-[1440px] grid-cols-2 gap-x-8 gap-y-10 px-5 py-11 sm:px-8 sm:py-14 md:grid-cols-4 lg:px-12">
        <div className="col-span-2 md:col-span-1">
          <Link href="/#top" aria-label="Dawa Mkononi home" className="inline-flex">
            <Image src="/DM - White.png" alt="Dawa Mkononi" width={632} height={232} className="h-12 w-auto object-contain" />
          </Link>
          <div className="mt-5">
            <p className="mb-3 max-w-xs text-sm font-medium leading-5 text-white/90">
              {en ? 'Dawa Mkononi app is available in your favourite store.' : 'Programu ya Dawa Mkononi inapatikana kwenye duka unalopendelea.'}
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="https://play.google.com/store/apps/details?id=com.dawamkononi.buyers" target="_blank" rel="noreferrer" aria-label="Get Dawa Mkononi on Google Play" className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/45 bg-black px-3.5 py-2 text-xs font-medium text-white transition-colors hover:border-white hover:bg-[#242424]">
                <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 fill-current"><path d="M6 3.5v17l14-8.5-14-8.5Z" /></svg>
                <span>Play Store</span>
              </a>
              <a href="https://apps.apple.com/us/app/dawa-mkononi/id1625919956" target="_blank" rel="noreferrer" aria-label="Download Dawa Mkononi on the App Store" className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/45 bg-black px-3.5 py-2 text-xs font-medium text-white transition-colors hover:border-white hover:bg-[#242424]">
                <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 fill-current"><path d="M16.6 12.7c0-2.1 1.7-3.1 1.8-3.2-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.7.8-3.4.8-.7 0-1.8-.8-3-.8-1.5 0-2.9.9-3.7 2.2-1.6 2.7-.4 6.7 1.1 8.9.7 1.1 1.6 2.3 2.7 2.2 1.1 0 1.5-.7 2.9-.7s1.8.7 3 .7c1.2 0 1.9-1.1 2.6-2.2.8-1.2 1.1-2.4 1.1-2.4s-2-.8-2-3.8ZM14.4 6.3c.6-.8 1-1.9.9-2.9-1 .1-2.2.7-2.9 1.5-.6.7-1.1 1.8-1 2.8 1.1.1 2.3-.5 3-1.4Z" /></svg>
                <span>App Store</span>
              </a>
            </div>
          </div>
        </div>

        <FooterColumn title={en ? 'Explore' : 'Gundua'} links={usefulLinks} />
        <FooterColumn title={en ? 'Our solutions' : 'Huduma zetu'} links={productLinks} />

        <div>
          <h3 className="text-sm font-semibold text-white">{en ? 'Get in touch' : 'Wasiliana nasi'}</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/90">
            <li><a href="https://wa.me/255747665664" target="_blank" rel="noreferrer" className="transition-colors hover:text-[#231f20]">WhatsApp · +255 747 665 664</a></li>
            <li><a href="mailto:ayo@dawamkononi.com" className="transition-colors hover:text-[#231f20]">ayo@dawamkononi.com</a></li>
            <li>{en ? 'Dar es Salaam, Tanzania' : 'Dar es Salaam, Tanzania'}</li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-2">
            <a href="https://www.linkedin.com/company/dawa-mkononi/" target="_blank" rel="noreferrer" className="inline-flex min-h-9 items-center gap-2 rounded-full border border-white/25 bg-white/5 px-3 text-xs font-medium text-white/90 transition-colors hover:bg-white/15 hover:text-white" aria-label="Dawa Mkononi on LinkedIn">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 fill-current"><path d="M5.2 3.3a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM3.5 9h3.4v11H3.5V9Zm5.5 0h3.2v1.5h.05A3.55 3.55 0 0 1 15.5 8.7c3.5 0 4.1 2.3 4.1 5.2V20h-3.4v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V20H9V9Z" /></svg>
              LinkedIn
            </a>
            <a href="https://www.instagram.com/dawamkononi?psln=NGd1anlweWkzaG16" target="_blank" rel="noreferrer" className="inline-flex min-h-9 items-center gap-2 rounded-full border border-white/25 bg-white/5 px-3 text-xs font-medium text-white/90 transition-colors hover:bg-white/15 hover:text-white" aria-label="Dawa Mkononi on Instagram">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 fill-none stroke-current" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.8" r=".8" fill="currentColor" stroke="none" /></svg>
              Instagram
            </a>
          </div>
        </div>

        <div className="col-span-2 flex flex-col justify-between gap-3 border-t border-white/30 pt-5 text-xs text-white/85 md:col-span-4 md:flex-row md:items-center">
          <span>© 2026 Dawa Mkononi. {en ? 'All rights reserved.' : 'Haki zote zimehifadhiwa.'}</span>
          <span>{en ? 'Made for better access to medicine in Tanzania.' : 'Kwa upatikanaji bora wa dawa Tanzania.'}</span>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, links }: { title: string; links: string[][] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map(([label, href]) => (
          <li key={`${label}-${href}`}>
            <Link href={href} className="text-sm text-white/90 transition-colors hover:text-[#231f20]">{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
