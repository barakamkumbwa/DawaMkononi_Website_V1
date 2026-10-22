'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Clock, Play } from 'lucide-react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { articles, videoLessons, type VideoLesson } from '@/lib/blog'

export default function BlogPage() {
  const [lang, setLang] = useState<'en' | 'sw'>('en')
  const [active, setActive] = useState(0)
  const video = videoLessons[active]

  const showVideo = (index: number) => {
    setActive((index + videoLessons.length) % videoLessons.length)
  }

  return (
    <>
      <Navbar lang={lang} setLang={setLang} />
      <main id="top" className="bg-white pt-16 font-asap sm:pt-24">
        <section className="relative isolate flex min-h-[300px] items-start justify-center overflow-hidden px-5 pb-28 pt-10 text-center text-white sm:min-h-[340px] sm:pt-12">
          <Image src="/pharmacist holding medicine.jpeg" alt="" fill priority sizes="100vw" className="-z-20 object-cover object-[center_30%]" aria-hidden="true" />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(25,28,29,0.72)_0%,rgba(25,28,29,0.55)_55%,rgba(25,28,29,0.8)_100%)]" />
          <div className="max-w-[760px]">
            <p className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.16em] text-[#ED2B2C]">
              <span aria-hidden="true" className="h-px w-8 bg-[#ED2B2C]" />DAWA MKONONI JOURNAL<span aria-hidden="true" className="h-px w-8 bg-[#ED2B2C]" />
            </p>
            <h1 className="mt-4 text-[clamp(32px,4.4vw,52px)] font-bold leading-[1.04] tracking-[-0.045em]">Ideas for a healthier pharmacy</h1>
            <p className="mx-auto mt-5 max-w-[520px] text-[clamp(15px,1.3vw,18px)] leading-[1.7] text-white/80">Practical notes on ordering, stock management and running a pharmacy in Tanzania.</p>
          </div>
        </section>

        <section id="articles" aria-label="Latest articles" className="relative z-10 mx-auto -mt-20 grid max-w-[1100px] scroll-mt-40 grid-cols-3 gap-6 px-5 pb-20 max-[900px]:grid-cols-2 max-[620px]:grid-cols-1 sm:px-8">
          {articles.map((article) => (
            <article key={article.id} className="group relative flex flex-col overflow-hidden rounded-md bg-white text-center shadow-[0_18px_40px_rgba(25,28,29,0.14)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_rgba(25,28,29,0.2)]">
              <div className="relative h-[190px] overflow-hidden">
                <Image src={article.image} alt="" fill sizes="(max-width: 620px) 100vw, (max-width: 900px) 50vw, 360px" className="object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col items-center px-6 pb-9 pt-6">
                <span className="text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: article.accent }}>{article.category}</span>
                <h2 className="mt-2 text-xl font-bold leading-snug tracking-[-0.02em] text-[#321e20]">{article.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-6 text-[#5f5052]">{article.summary}</p>
                <Link href={`/blog/${article.id}`} className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#ED2B2C] transition-[gap] after:absolute after:inset-0 hover:gap-2.5">
                  Read more <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
              <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[6px]" style={{ background: `linear-gradient(100deg, ${article.accent} 0 38%, ${article.accent}33 38% 100%)` }} />
            </article>
          ))}
        </section>

        <section aria-label="Video lessons" className="bg-[#f3f1ef] py-16 sm:py-20">
          <div className="mx-auto max-w-[1440px] px-16 max-sm:px-5">
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ED2B2C]">Video lessons</p>
              <h2 className="mt-3 text-[clamp(28px,3vw,38px)] font-bold tracking-[-0.035em] text-[#321e20]">Learn the app in a few minutes.</h2>
            </div>

            <div className="relative mt-10">
              <button type="button" onClick={() => showVideo(active - 1)} aria-label="Previous video" className="absolute -left-12 top-1/2 z-20 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white text-[#321e20] shadow-md transition hover:bg-[#ED2B2C] hover:text-white max-sm:-left-1 max-sm:top-[130px]">
                <ChevronLeft size={20} aria-hidden="true" />
              </button>
              <button type="button" onClick={() => showVideo(active + 1)} aria-label="Next video" className="absolute -right-12 top-1/2 z-20 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white text-[#321e20] shadow-md transition hover:bg-[#ED2B2C] hover:text-white max-sm:-right-1 max-sm:top-[130px]">
                <ChevronRight size={20} aria-hidden="true" />
              </button>

              <article key={video.reelId} className="blog-slide grid grid-cols-[1.15fr_1fr] overflow-hidden bg-white shadow-[0_24px_60px_rgba(25,28,29,0.1)] max-[880px]:grid-cols-1">
                <VideoPlayer video={video} />
                <div className="flex flex-col justify-center px-12 py-8 max-[880px]:px-6 max-[880px]:py-8">
                  <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-[#ED2B2C]">
                    {video.category}
                    <span aria-hidden="true" className="size-1 rounded-full bg-[#ED2B2C]" />
                    <span className="inline-flex items-center gap-1.5 text-[#76696a]"><Clock size={14} aria-hidden="true" />{video.duration} video</span>
                  </p>
                  <h3 className="mt-3 text-[clamp(24px,2.3vw,32px)] font-bold leading-[1.15] tracking-[-0.035em] text-[#321e20]">{video.title}</h3>
                  <p className="mt-4 text-base leading-[1.75] text-[#5f5052]">{video.caption}</p>
                  <a href={`https://www.instagram.com/reel/${video.reelId}/`} target="_blank" rel="noreferrer" className="mt-5 inline-flex w-max items-center gap-1.5 text-[15px] font-semibold text-[#ED2B2C] transition-[gap] hover:gap-2.5">
                    Watch on Instagram <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </div>
              </article>
            </div>

            <div className="mt-10 flex justify-center gap-2.5">
              {videoLessons.map((lesson, index) => (
                <button key={lesson.reelId} type="button" onClick={() => showVideo(index)} aria-label={`Show ${lesson.title}`} aria-current={index === active} className={`h-2.5 rounded-full transition-all ${index === active ? 'w-8 bg-[#ED2B2C]' : 'w-2.5 bg-[#321e20]/20 hover:bg-[#321e20]/40'}`} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
    </>
  )
}

function VideoPlayer({ video }: { video: VideoLesson }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [started, setStarted] = useState(false)
  const poster = `/videos/${video.reelId}.jpg`

  const play = () => {
    setStarted(true)
    void videoRef.current?.play()
  }

  return (
    <div className="group relative isolate min-h-[330px] overflow-hidden bg-[#191c1d] max-[880px]:min-h-0 max-[880px]:aspect-[16/10]">
      <Image src={poster} alt="" fill sizes="(max-width: 880px) 100vw, 620px" className="-z-10 scale-110 object-cover opacity-60 blur-2xl" aria-hidden="true" />
      <video
        ref={videoRef}
        src={`/videos/${video.reelId}.mp4`}
        poster={poster}
        controls={started}
        playsInline
        preload="none"
        className="absolute inset-0 h-full w-full object-contain"
        aria-label={video.title}
      />
      {!started && (
        <button type="button" onClick={play} aria-label={`Play ${video.title}`} className="absolute inset-0 flex flex-col items-center justify-end bg-[linear-gradient(180deg,rgba(25,28,29,0)_35%,rgba(25,28,29,0.55)_100%)] px-[7%] pb-[7%] text-left">
          <span className="absolute left-1/2 top-[36%] grid size-[60px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#ED2B2C] text-white shadow-[0_12px_30px_rgba(237,43,44,0.45)] transition duration-300 group-hover:scale-110">
            <Play size={26} fill="currentColor" className="translate-x-0.5" aria-hidden="true" />
          </span>
          <span className="block w-full border-l-2 border-[#ED2B2C] bg-[#191c1d]/75 px-6 py-4 text-white backdrop-blur-md max-sm:px-4 max-sm:py-3">
            <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">Dawa Mkononi · Video lesson</span>
            <span className="mt-2 block text-[clamp(20px,2.2vw,28px)] font-bold leading-tight tracking-[-0.02em]">{video.overlayTitle}</span>
            <span className="mt-1.5 block text-sm text-white/80 max-sm:hidden">{video.overlayText}</span>
          </span>
        </button>
      )}
    </div>
  )
}
