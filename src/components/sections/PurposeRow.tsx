import type { ReactNode } from 'react'
import { delay } from '@/lib/use-reveal'

export function PurposeRow({ label, text, tone, delayMs }: { label: ReactNode; text: string; tone: 'green' | 'blue'; delayMs: number }) {
  const palette = tone === 'green'
    ? { accent: '#4d8767', surface: '#dfeadd', circle: 'linear-gradient(145deg, #f2f6f0, #dce8da)', text: '#304237', glow: 'rgba(77, 135, 103, 0.25)' }
    : { accent: '#527da4', surface: '#dfe8f0', circle: 'linear-gradient(145deg, #f2f5f8, #dbe5ee)', text: '#303f4d', glow: 'rgba(82, 125, 164, 0.25)' }

  return (
    <article className="about-purpose grid grid-cols-[82px_minmax(0,1fr)] items-center gap-3 sm:grid-cols-[100px_minmax(0,1fr)] sm:gap-4">
      <h2 className="about-purpose-circle z-10 grid size-[82px] place-items-center rounded-full border px-1 text-center text-sm font-semibold shadow-[0_7px_18px_rgba(0,0,0,0.18),inset_1px_1px_4px_rgba(255,255,255,0.75)] sm:size-[100px] sm:text-base" style={{ ...delay(delayMs), background: palette.circle, borderColor: `${palette.accent}45`, color: palette.text }}>
        {label}
      </h2>
      <div className="about-purpose-bubble relative flex min-h-[76px] items-center rounded-[24px] border px-5 py-4 sm:min-h-[88px] sm:rounded-full sm:px-7 sm:py-5" style={{ ...delay(delayMs + 120), backgroundColor: palette.surface, borderColor: `${palette.accent}45`, color: palette.text, boxShadow: `0 8px 18px rgba(0,0,0,0.15), 0 12px 26px ${palette.glow}, inset 1px 1px 3px rgba(255,255,255,0.72)` }}>
        <span aria-hidden="true" className="absolute -left-[8px] top-1/2 size-[14px] -translate-y-1/2 rotate-45 border-b border-l" style={{ backgroundColor: palette.surface, borderColor: `${palette.accent}35` }} />
        <span aria-hidden="true" className="absolute -left-[12px] top-1/2 h-8 w-[3px] -translate-y-1/2 rounded-full sm:-left-[13px] sm:h-10" style={{ backgroundColor: palette.accent }} />
        <p className="relative z-10 text-sm leading-6 sm:text-[15px] sm:leading-7">{text}</p>
      </div>
    </article>
  )
}
