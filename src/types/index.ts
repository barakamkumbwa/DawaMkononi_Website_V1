export type Locale = 'en' | 'sw'

export interface NavItem {
  label: { en: string; sw: string }
  href: string
  children?: NavItem[]
}

export interface Product {
  slug: string
  title: { en: string; sw: string }
  tagline: { en: string; sw: string }
  description: { en: string; sw: string }
  href: string
}

export interface Stat {
  value: string
  label: { en: string; sw: string }
}

export interface FAQItem {
  question: { en: string; sw: string }
  answer: { en: string; sw: string }
}

export interface BlogPost {
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  image?: string
  author?: string
  content: string
}
