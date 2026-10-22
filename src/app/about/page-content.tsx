'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { MapPin } from 'lucide-react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { PurposeRow } from '@/components/sections/PurposeRow'
import { TopographyLines } from '@/components/sections/TopographyLines'
import { delay, useReveal } from '@/lib/use-reveal'

const content = {
  en: {
    label: 'ABOUT US',
    title: ['Medicine supply,', 'Improving Access to Medicines in Africa'],
    location: 'Dar es Salaam, Tanzania · Since 2023',
    description: [
      'We are a pharmaceutical company dedicated to improving access to medicine in Tanzania and across Africa. We focus on data-driven healthcare solutions that improve access to quality information and support safe, effective and sustainable pharmaceutical supply chains.',
      'Dawa Mkononi uses innovation and data to improve medicine distribution and availability. Our operations primarily serve pharmacies, health facilities and other registered B2B clients.',
    ],
    historyLabel: 'OUR HISTORY',
    historyTitle: 'Founded in Dar es Salaam.',
    milestonesLabel: 'MILESTONES',
    milestones: [
      { year: '2023', accent: '#ED2B2C', image: '/pharmacist holding medicine.jpeg', title: 'Founded in Dar es Salaam', text: 'Joseph Paul, Asorael Ayo and Clemence Exaudi launch Dawa Mkononi as a B2B medicine ordering platform for pharmacies and clinics.' },
      { year: '2024', accent: '#527da4', image: '/dawa.jpeg', title: 'Daraja Impact funding', text: 'Selected as the first recipient of impact-linked funding under Daraja Impact, run by SEAF and AlphaMundi Foundation with support from the Swiss Agency for Development and Cooperation.' },
      { year: '2026', accent: '#4d8767', image: '/bodaman.png', title: 'Dawa Kwanza credit', text: 'Together with Vodacom Tanzania and NCBA Bank, our Dawa Kwanza programme has financed more than TSh 1 billion in medicine stock, repaid within 28 days.' },
      { year: 'Today', accent: '#e2b85d', image: '/pharmacist holding medicine3.jpeg', title: '3,500+ health facilities', text: 'More than TSh 50 billion in pharmaceutical sales processed, served by a team of 130 from our branches in Dar es Salaam, Mwanza and Zanzibar.' },
    ],
    followLabel: 'Follow us',
    backers: 'Backed by Sanofi, Boehringer Ingelheim, Stanford Business School Impact Fund, Axian Group, Warioba Ventures, Villgro Africa and Pontem Ventures.',
    visionLabel: 'Vision',
    vision: 'Improving access to medicine in Tanzania and across Africa.',
    missionLabel: 'Mission',
    mission: 'Increase access to high-quality medicines, services, and information via technology solutions that improve affordability, health outcomes, and ease of use.',
  },
  sw: {
    label: 'KUHUSU SISI',
    title: ['Ugavi wa dawa,', 'Kuboresha upatikanaji wa dawa barani Afrika'],
    location: 'Dar es Salaam, Tanzania · Tangu 2023',
    description: [
      'Sisi ni kampuni ya dawa inayolenga kuboresha upatikanaji wa dawa Tanzania na barani Afrika. Tunajikita katika suluhisho za afya zinazotumia data kuboresha upatikanaji wa taarifa bora na kusaidia mifumo salama, bora na endelevu ya ugavi wa dawa.',
      'Dawa Mkononi hutumia ubunifu na data kuboresha usambazaji na upatikanaji wa dawa. Shughuli zetu huhudumia zaidi famasia, vituo vya afya na wateja wengine wa B2B waliosajiliwa.',
    ],
    historyLabel: 'HISTORIA YETU',
    historyTitle: 'Ilianzishwa Dar es Salaam.',
    milestonesLabel: 'HATUA MUHIMU',
    milestones: [
      { year: '2023', accent: '#ED2B2C', image: '/pharmacist holding medicine.jpeg', title: 'Ilianzishwa Dar es Salaam', text: 'Joseph Paul, Asorael Ayo na Clemence Exaudi wanazindua Dawa Mkononi kama jukwaa la B2B la kuagiza dawa kwa famasia na kliniki.' },
      { year: '2024', accent: '#527da4', image: '/dawa.jpeg', title: 'Ufadhili wa Daraja Impact', text: 'Tulichaguliwa kuwa wapokeaji wa kwanza wa ufadhili unaotegemea matokeo chini ya Daraja Impact, unaoendeshwa na SEAF na AlphaMundi Foundation kwa msaada wa Shirika la Uswisi la Maendeleo na Ushirikiano (SDC).' },
      { year: '2026', accent: '#4d8767', image: '/bodaman.png', title: 'Mkopo wa Dawa Kwanza', text: 'Kwa kushirikiana na Vodacom Tanzania na Benki ya NCBA, programu yetu ya Dawa Kwanza imefadhili zaidi ya TSh bilioni 1 za dawa, zinazolipwa ndani ya siku 28.' },
      { year: 'Leo', accent: '#e2b85d', image: '/pharmacist holding medicine3.jpeg', title: 'Vituo vya afya 3,500+', text: 'Zaidi ya TSh bilioni 50 za mauzo ya dawa zimechakatwa, tukihudumia kupitia timu ya watu 130 kutoka matawi yetu ya Dar es Salaam, Mwanza na Zanzibar.' },
    ],
    followLabel: 'Tufuate',
    backers: 'Tunaungwa mkono na Sanofi, Boehringer Ingelheim, Stanford Business School Impact Fund, Axian Group, Warioba Ventures, Villgro Africa na Pontem Ventures.',
    visionLabel: 'Maono',
    vision: 'Kuboresha upatikanaji wa dawa Tanzania na barani Afrika.',
    missionLabel: 'Dhamira',
    mission: 'Kuongeza upatikanaji wa dawa bora, huduma na taarifa kupitia suluhisho za teknolojia zinazoboresha gharama, matokeo ya afya na urahisi wa matumizi.',
  },
}


export default function AboutPage() {
  const [lang, setLang] = useState<'en' | 'sw'>('en')
  const t = content[lang]
  const [heroRef, heroVisible] = useReveal<HTMLElement>()
  const [historyRef, historyVisible] = useReveal<HTMLElement>()

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => window.scrollTo(0, 0))
    return () => window.cancelAnimationFrame(frame)
  }, [])

  return (
    <>
      <Navbar lang={lang} setLang={setLang} />
      <main className="pt-16 font-asap sm:pt-24">
        <section ref={heroRef} className={`${heroVisible ? 'is-visible ' : ''}relative isolate w-full overflow-hidden bg-[#191c1d] py-12 text-white sm:py-16 lg:py-20`}>
          <div aria-hidden="true" className="about-map pointer-events-none absolute inset-0 z-0">
            <Image src="/africamap-transparent.png" alt="" fill sizes="100vw" priority className="object-contain object-[right_42%] opacity-55 brightness-[0.9] contrast-125 sm:object-[right_38%]" />
          </div>
          <div aria-hidden="true" className="absolute inset-0 z-0 bg-[linear-gradient(90deg,rgba(25,28,29,0.97)_0%,rgba(25,28,29,0.88)_48%,rgba(25,28,29,0.65)_100%)]" />
          <div aria-hidden="true" className="about-glow absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_90%_45%,rgba(237,43,44,0.14),transparent_48%)]" />

          <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:translate-x-3 lg:px-12">
            <div className="grid grid-cols-[0.78fr_1.22fr] items-start gap-10 py-12 max-[760px]:grid-cols-1 max-[760px]:gap-8 max-[760px]:py-8">
              <div>
                <p className="reveal inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.16em] text-[#ED2B2C]">
                  <span aria-hidden="true" className="reveal-rule h-px w-8 bg-[#ED2B2C]" style={delay(150)} />{t.label}
                </p>
                <h1 className="mt-3 max-w-[520px] text-[clamp(34px,3.6vw,50px)] font-bold leading-[1.08] tracking-[-0.045em] text-white">
                  <span className="reveal block" style={delay(120)}>{t.title[0]}</span>
                  <span className="reveal mt-1 block" style={delay(240)}>{t.title[1]}</span>
                </h1>
                <p className="reveal mt-5 inline-flex items-center gap-2 text-sm font-medium text-white/70" style={delay(380)}>
                  <MapPin size={16} className="shrink-0 text-[#e2b85d]" aria-hidden="true" />{t.location}
                </p>
              </div>

              <div className="max-w-[800px] pt-[26px] max-[760px]:pt-0">
                <div className="space-y-4 font-asap text-[clamp(15px,1.15vw,17px)] leading-[1.7] text-white/80">
                  {t.description.map((paragraph, index) => <p key={paragraph} className="reveal" style={delay(260 + index * 120)}>{paragraph}</p>)}
                </div>
                <div className="mt-7 grid gap-4 sm:mt-8 sm:gap-5">
                  <PurposeRow label={t.visionLabel} text={t.vision} tone="green" delayMs={560} />
                  <PurposeRow label={t.missionLabel} text={t.mission} tone="blue" delayMs={720} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section ref={historyRef} className={`${historyVisible ? 'is-visible ' : ''}relative isolate w-full overflow-hidden bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24`}>
          <TopographyLines />

          <div className="relative z-10 mx-auto w-full max-w-[1240px] text-[#321e20]">
            <div className="mx-auto flex max-w-[780px] flex-col items-center text-center">
              <p className="reveal inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.16em] text-[#ED2B2C]" style={delay(120)}>
                <span aria-hidden="true" className="reveal-rule h-px w-8 bg-[#ED2B2C]" style={delay(260)} />{t.historyLabel}
              </p>
              <h2 className="reveal mt-3 text-[clamp(34px,3.2vw,46px)] font-bold leading-[1.12] tracking-[-0.045em]" style={delay(200)}>{t.historyTitle}</h2>
            </div>

            <ol className="mt-12 grid grid-cols-4 gap-6 max-[1000px]:grid-cols-2 max-[540px]:grid-cols-1 lg:gap-8" aria-label={t.milestonesLabel}>
              {t.milestones.map((milestone, index) => (
                <li key={milestone.year} className="reveal group" style={delay(560 + index * 140)}>
                  <p className="flex items-center gap-3 text-base font-bold tracking-[-0.01em]">
                    <span aria-hidden="true" className="reveal-rule-y h-6 w-[4px] rounded-full" style={{ ...delay(700 + index * 140), backgroundColor: milestone.accent }} />
                    {milestone.year}
                  </p>
                  <div className="relative mt-4 h-[160px] overflow-hidden rounded-md shadow-[0_12px_28px_rgba(50,30,32,0.12)]">
                    <Image src={milestone.image} alt="" fill sizes="(max-width: 540px) 100vw, (max-width: 1000px) 50vw, 280px" className="object-cover transition duration-500 group-hover:scale-105" />
                  </div>
                  <h3 className="mt-4 text-[15px] font-bold leading-snug">{milestone.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#5f5052]">{milestone.text}</p>
                </li>
              ))}
            </ol>

            <div className="mt-12 flex items-center justify-between gap-6 border-t border-[#321e20]/10 pt-6 max-[760px]:flex-col max-[760px]:items-start">
              <p className="max-w-[720px] text-sm leading-6 text-[#76696a]">{t.backers}</p>
              <div className="flex shrink-0 items-center gap-3">
                <span className="text-sm font-semibold">{t.followLabel}</span>
                <a href="https://www.linkedin.com/company/dawa-mkononi/" target="_blank" rel="noreferrer" aria-label="Dawa Mkononi on LinkedIn" className="grid size-8 place-items-center rounded-full bg-[#321e20]/[0.06] text-[#321e20] transition hover:bg-[#ED2B2C] hover:text-white">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 fill-current"><path d="M5.2 3.3a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM3.5 9h3.4v11H3.5V9Zm5.5 0h3.2v1.5h.05A3.55 3.55 0 0 1 15.5 8.7c3.5 0 4.1 2.3 4.1 5.2V20h-3.4v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V20H9V9Z" /></svg>
                </a>
                <a href="https://www.instagram.com/dawamkononi/" target="_blank" rel="noreferrer" aria-label="Dawa Mkononi on Instagram" className="grid size-8 place-items-center rounded-full bg-[#321e20]/[0.06] text-[#321e20] transition hover:bg-[#ED2B2C] hover:text-white">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 fill-none stroke-current" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.8" r=".8" fill="currentColor" stroke="none" /></svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
    </>
  )
}
