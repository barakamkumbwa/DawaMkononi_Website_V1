'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { articles, type Article } from '@/lib/blog'

export default function ArticlePage({ article }: { article: Article }) {
  const [lang, setLang] = useState<'en' | 'sw'>('en')
  const related = articles.filter((item) => item.id !== article.id)

  return (
    <>
      <Navbar lang={lang} setLang={setLang} />
      <main className="bg-white pt-16 font-asap sm:pt-24">
        <article className="mx-auto max-w-[820px] px-5 py-12 sm:px-8 sm:py-16">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#76696a] transition hover:text-[#ED2B2C]">
            <ArrowLeft size={15} aria-hidden="true" /> Back to blog
          </Link>
          <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em]" style={{ color: article.accent }}>{article.category}</p>
          <h1 className="mt-3 text-[clamp(32px,4vw,48px)] font-bold leading-[1.1] tracking-[-0.045em] text-[#321e20]">{article.title}</h1>
          <p className="mt-4 text-lg leading-[1.7] text-[#76696a]">{article.summary}</p>
          <div className="relative mt-9 h-[clamp(240px,40vw,420px)] overflow-hidden rounded-md shadow-[0_18px_40px_rgba(25,28,29,0.14)]">
            <Image src={article.image} alt="" fill priority sizes="(max-width: 820px) 100vw, 760px" className="object-cover" />
          </div>
          <div className="mt-9 space-y-5 text-[17px] leading-[1.85] text-[#5f5052]">
            {article.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <a href="https://wa.me/255747665664" target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center gap-2 rounded-md bg-[#ED2B2C] px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[#D42021]">
            Talk to our team
          </a>
        </article>

        <section aria-label="More articles" className="bg-[#f3f1ef] px-5 py-14 sm:px-8 sm:py-16">
          <div className="mx-auto max-w-[820px]">
            <h2 className="text-xl font-bold tracking-[-0.02em] text-[#321e20]">More articles</h2>
            <div className="mt-6 grid grid-cols-2 gap-5 max-[620px]:grid-cols-1">
              {related.map((item) => (
                <Link key={item.id} href={`/blog/${item.id}`} className="group rounded-md bg-white p-6 shadow-[0_12px_28px_rgba(25,28,29,0.08)] transition hover:-translate-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: item.accent }}>{item.category}</span>
                  <h3 className="mt-2 text-lg font-bold leading-snug text-[#321e20]">{item.title}</h3>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#ED2B2C] transition-[gap] group-hover:gap-2.5">
                    Read more <ArrowRight size={15} aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
    </>
  )
}
