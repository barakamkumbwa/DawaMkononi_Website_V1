import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string, locale: 'en' | 'sw' = 'en') {
  const d = new Date(date)
  return d.toLocaleDateString(locale === 'sw' ? 'sw-TZ' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export function readingTime(text: string) {
  const words = text.trim().split(/\s+/).length
  const minutes = Math.ceil(words / 200)
  return minutes
}
