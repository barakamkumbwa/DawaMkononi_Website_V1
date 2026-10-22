import { Bot, Pill, ScanBarcode, Truck, Wallet } from 'lucide-react'
import { SplitHero } from '@/components/sections/SplitHero'

type HeroProps = {
  lang: 'en' | 'sw'
}

const content = {
  en: {
    label: 'MEET DAWA MKONONI',
    title: ['Medicine supply', 'made simple'],
    intro: 'Restock your pharmacy or health facility in bulk, delivered to your door — and pay later with Dawa Kwanza credit.',
    primary: 'Get started',
    secondary: 'See how it works',
    productsLabel: 'OUR PRODUCTS',
    trust: 'Trusted by 1,000+ pharmacies across Tanzania',
    backed: 'Backed by Sanofi, Villgro Africa, Axian and more',
    cardTitle: 'Order on the way',
    cardText: 'Delivered to your facility',
    imageAlt: 'Dawa Mkononi delivery rider ready to bring medicines to a health facility',
  },
  sw: {
    label: 'KUTANA NA DAWA MKONONI',
    title: ['Ugavi wa dawa', 'kwa urahisi'],
    intro: 'Agiza stoo ya famasia au kituo chako cha afya kwa jumla, tunakuletea hadi mlangoni — na ulipe baadaye kwa mkopo wa Dawa Kwanza.',
    primary: 'Anza sasa',
    secondary: 'Ona inavyofanya kazi',
    productsLabel: 'BIDHAA ZETU',
    trust: 'Tunaaminiwa na famasia 1,000+ Tanzania',
    backed: 'Tunaungwa mkono na Sanofi, Villgro Africa, Axian na wengine',
    cardTitle: 'Oda iko njiani',
    cardText: 'Inaletwa kituoni kwako',
    imageAlt: 'Mwendesha bodaboda wa Dawa Mkononi akiwa tayari kupeleka dawa kituoni',
  },
}

export function Hero({ lang }: HeroProps) {
  const copy = content[lang]
  const services = [
    { href: '#contact', icon: Pill, title: lang === 'en' ? 'Medicine supply' : 'Ugavi wa dawa' },
    { href: '/products/dawa-kwanza', icon: Wallet, title: lang === 'en' ? 'Stock credit' : 'Mkopo wa stoo' },
    { href: '/products/nora', icon: Bot, title: 'Nora AI' },
    { href: '/products/pos', icon: ScanBarcode, title: lang === 'en' ? 'Pharmacy POS' : 'POS ya famasia' },
  ]

  return (
    <SplitHero
      id="top"
      label={copy.label}
      title={copy.title}
      intro={copy.intro}
      primary={{ label: copy.primary, href: 'https://wa.me/255747665664' }}
      secondary={{ label: copy.secondary, href: '/blog' }}
      image="/bodaman.png"
      imageAlt={copy.imageAlt}
      imageClassName="object-cover object-[70%_top] [mask-image:radial-gradient(ellipse_56%_62%_at_58%_47%,black_45%,rgba(0,0,0,0.75)_62%,rgba(0,0,0,0.3)_80%,transparent_100%),radial-gradient(ellipse_28%_25%_at_40%_76%,black_50%,transparent_100%)]"
      card={{ icon: Truck, title: copy.cardTitle, text: copy.cardText }}
      ticker={{ label: copy.productsLabel, items: services }}
      trust={{ strong: copy.trust, rest: copy.backed }}
    />
  )
}
