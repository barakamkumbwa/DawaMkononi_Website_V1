'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

export function LanguageToggle() {
  const [locale, setLocale] = useState<'en' | 'sw'>('en')

  return (
    <div className="flex items-center gap-1 text-xs font-medium">
      <button
        onClick={() => setLocale('en')}
        className={cn(
          'px-1.5 py-0.5 transition-colors',
          locale === 'en' ? 'text-foreground' : 'text-muted hover:text-foreground'
        )}
      >
        EN
      </button>
      <span className="text-border">|</span>
      <button
        onClick={() => setLocale('sw')}
        className={cn(
          'px-1.5 py-0.5 transition-colors',
          locale === 'sw' ? 'text-foreground' : 'text-muted hover:text-foreground'
        )}
      >
        SW
      </button>
    </div>
  )
}
