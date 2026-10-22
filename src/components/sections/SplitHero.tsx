'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { CircleCheck, PlayCircle, type LucideIcon } from 'lucide-react'

type SplitHeroProps = {
  id?: string
  label: string
  title: string[]
  intro: string
  primary: { label: string; href: string }
  secondary: { label: string; href: string }
  image: string
  imageAlt: string
  imageClassName?: string
  card: { icon: LucideIcon; title: string; text: string }
  ticker: { label: string; items: { title: string; icon: LucideIcon; href?: string }[] }
  trust: { strong: string; rest: string }
}

const delay = (ms: number) => ({ '--d': `${ms}ms` }) as CSSProperties

const defaultImageMask = 'object-cover object-[70%_top] [mask-image:radial-gradient(ellipse_56%_62%_at_58%_47%,black_45%,rgba(0,0,0,0.75)_62%,rgba(0,0,0,0.3)_80%,transparent_100%)]'

export function SplitHero({ id, label, title, intro, primary, secondary, image, imageAlt, imageClassName = defaultImageMask, card, ticker, trust }: SplitHeroProps) {
  const heroRef = useRef<HTMLElement>(null)
  const [heroVisible, setHeroVisible] = useState(false)
  const CardIcon = card.icon
  const loopItems = Array.from({ length: 2 * Math.ceil(12 / ticker.items.length) }, () => ticker.items).flat()

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
    <section ref={heroRef} id={id} className={`relative isolate flex min-h-svh flex-col overflow-hidden bg-white pb-10 pt-16 font-asap text-[#321e20] sm:pb-12 sm:pt-24 ${heroVisible ? 'hero-ride' : ''}`}>
      <div className="relative flex flex-1 flex-col pb-14 lg:pb-16">
        <div className="hero-text absolute inset-y-0 right-0 hidden aspect-[1.2] max-w-[58%] lg:block" style={delay(200)}>
          <Image src={image} alt={imageAlt} fill priority sizes="(max-width: 1440px) 50vw, 720px" className={imageClassName} />
          <div className="hero-float absolute bottom-[6%] left-[2%] w-[230px] rounded-xl bg-white p-3.5 shadow-[0_16px_36px_rgba(35,22,22,0.18)]">
            <div className="flex items-center gap-2.5">
              <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-[#fdeeee] text-[#ED2B2C]"><CardIcon size={16} aria-hidden="true" /></span>
              <span className="min-w-0">
                <strong className="block truncate text-[13px] font-bold">{card.title}</strong>
                <span className="block truncate text-[11px] text-[#79696a]">{card.text}</span>
              </span>
            </div>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#f3ece9]"><span className="hero-progress block h-full w-[72%] rounded-full bg-[#ED2B2C]" /></div>
          </div>
        </div>

        <div className="relative mx-auto grid w-full max-w-[1240px] flex-1 items-center px-5 pt-14 sm:px-8 lg:min-h-[480px] lg:grid-cols-2 lg:px-12 lg:pt-16">
          <div className="text-center lg:text-left">
            <p className="hero-text text-xs font-bold tracking-[0.16em] text-[#ED2B2C]" style={delay(0)}>{label}</p>
            <h1 className="mt-4 text-[clamp(2.4rem,5vw,4.25rem)] font-bold leading-[1.06] tracking-[-0.045em]">
              {title.map((line, index) => <span key={line} className="hero-text block" style={delay(100 + index * 100)}>{line}</span>)}
            </h1>
            <p className="hero-text mx-auto mt-5 max-w-[480px] text-base leading-7 text-[#5f5052] sm:text-lg sm:leading-8 lg:mx-0" style={delay(320)}>{intro}</p>
            <div className="hero-text mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 lg:justify-start" style={delay(440)}>
              <a href={primary.href} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center rounded-lg bg-[#ED2B2C] px-7 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(237,43,44,0.25)] transition hover:-translate-y-0.5 hover:bg-[#D42021] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#ED2B2C]">
                {primary.label}
              </a>
              {secondary.href.startsWith('#') ? (
                <a href={secondary.href} className="inline-flex items-center gap-2 text-sm font-semibold text-[#D42021] transition hover:text-[#B8191A]">
                  <PlayCircle size={18} aria-hidden="true" />{secondary.label}
                </a>
              ) : (
                <Link href={secondary.href} className="inline-flex items-center gap-2 text-sm font-semibold text-[#D42021] transition hover:text-[#B8191A]">
                  <PlayCircle size={18} aria-hidden="true" />{secondary.label}
                </Link>
              )}
            </div>
          </div>
        </div>

        <div className="hero-text relative mx-5 mt-10 h-[280px] overflow-hidden rounded-xl sm:mx-8 sm:h-[360px] lg:hidden" style={delay(200)}>
          <Image src={image} alt="" fill sizes="100vw" className="object-cover object-center" />
        </div>
      </div>

      <nav aria-label={ticker.label} className="marquee hero-text relative flex w-full items-center overflow-hidden bg-[#111315] text-white" style={delay(560)}>
        <span className="relative z-10 flex shrink-0 items-center self-stretch bg-[#ED2B2C] px-5 text-xs font-bold tracking-[0.16em] shadow-[12px_0_18px_rgba(17,19,21,0.9)] sm:px-8">
          {ticker.label}
          <span aria-hidden="true" className="absolute -right-[11px] top-1/2 size-0 -translate-y-1/2 border-y-[11px] border-l-[11px] border-y-transparent border-l-[#ED2B2C]" />
        </span>
        <div className="relative min-w-0 flex-1 overflow-hidden py-3.5 [mask-image:linear-gradient(90deg,black_0%,black_94%,transparent)]">
          <ul className="marquee-track flex w-max items-center gap-12 pr-12">
            {loopItems.map(({ href, icon: Icon, title: itemTitle }, index) => {
              const copyOfList = index >= ticker.items.length
              const content = <><Icon size={17} className="shrink-0 text-[#f0c76e] transition-transform group-hover:scale-110" aria-hidden="true" />{itemTitle}</>
              return (
                <li key={`${itemTitle}-${index}`} aria-hidden={copyOfList || undefined} className="shrink-0">
                  {href ? (
                    <a href={href} tabIndex={copyOfList ? -1 : undefined} className="group inline-flex items-center gap-2.5 whitespace-nowrap text-sm font-semibold text-white/85 transition hover:text-white">{content}</a>
                  ) : (
                    <span className="group inline-flex items-center gap-2.5 whitespace-nowrap text-sm font-semibold text-white/85">{content}</span>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </nav>

      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
        <p className="hero-text mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center text-xs text-[#79696a]" style={delay(680)}>
          <span className="inline-flex items-center gap-1.5 font-semibold text-[#321e20]"><CircleCheck size={14} className="text-[#ED2B2C]" aria-hidden="true" />{trust.strong}</span>
          <span aria-hidden="true" className="size-1 rounded-full bg-[#d9c3bf]" />
          <span>{trust.rest}</span>
        </p>
      </div>
    </section>
  )
}
