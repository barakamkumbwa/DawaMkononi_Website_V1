import type { NavItem, Product, Stat } from '@/types'

export const navItems: NavItem[] = [
  {
    label: { en: 'Products', sw: 'Bidhaa' },
    href: '/products',
    children: [
      { label: { en: 'Dawa Kwanza', sw: 'Dawa Kwanza' }, href: '/products/dawa-kwanza' },
      { label: { en: 'Nora AI', sw: 'Nora AI' }, href: '/products/nora' },
      { label: { en: 'POS', sw: 'POS' }, href: '/products/pos' },
    ],
  },
  { label: { en: 'About', sw: 'Kuhusu' }, href: '/about' },
  { label: { en: 'Impact', sw: 'Athari' }, href: '/impact' },
  { label: { en: 'Partners', sw: 'Washirika' }, href: '/partners' },
  { label: { en: 'Blog', sw: 'Blog' }, href: '/blog' },
  { label: { en: 'Contact', sw: 'Wasiliana' }, href: '/contact' },
]

export const products: Product[] = [
  {
    slug: 'dawa-kwanza',
    title: { en: 'Dawa Kwanza', sw: 'Dawa Kwanza' },
    tagline: {
      en: 'Get your stock today. Pay within 28 days.',
      sw: 'Pata dawa leo. Lipa ndani ya siku 28.',
    },
    description: {
      en: 'Stock financing for health facilities — medicines arrive now, payment comes later.',
      sw: 'Fedha za hisa kwa vituo vya afya — dawa zinawasili, malipo yanakuja baadaye.',
    },
    href: '/products/dawa-kwanza',
  },
  {
    slug: 'nora',
    title: { en: 'Nora AI', sw: 'Nora AI' },
    tagline: {
      en: 'Your ordering assistant — in Swahili and English.',
      sw: 'Msaidizi wako wa kuagiza — kwa Kiswahili na Kiingereza.',
    },
    description: {
      en: 'Type, paste a list, send a photo — Nora finds products and builds your order.',
      sw: 'Andika, bandika orodha, tuma picha — Nora anapata bidhaa na kujenga oda yako.',
    },
    href: '/products/nora',
  },
  {
    slug: 'pos',
    title: { en: 'POS', sw: 'POS' },
    tagline: {
      en: 'Run your pharmacy from your phone.',
      sw: 'Endesha famasia yako kutoka kwenye simu.',
    },
    description: {
      en: 'Record sales, stock, and expiry dates — no paper, no extra system.',
      sw: 'Rekodi mauzo, hisa, na tarehe za mwisho — bila karatasi, bila mfumo wa ziada.',
    },
    href: '/products/pos',
  },
]

export const stats: Stat[] = [
  {
    value: 'TZS 2.4B+',
    label: { en: 'Medicine stock financed', sw: 'Fedha za dawa zimefadhiliwa' },
  },
  {
    value: '1,000+',
    label: { en: 'Pharmacies reached', sw: 'Famasia zimefikiwa' },
  },
  {
    value: '500,000+',
    label: { en: 'Patients served', sw: 'Wagonjwa wamehudumiwa' },
  },
]
