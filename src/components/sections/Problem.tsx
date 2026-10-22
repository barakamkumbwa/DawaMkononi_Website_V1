import { Section } from '@/components/ui/Section'

export function Problem() {
  return (
    <Section className="bg-background pt-0">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground lg:text-4xl text-balance">
          Empty shelves cost you customers.<br />
          Slow payments cost you sleep.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          Pharmacies and clinics in Tanzania face a daily reality: you need medicines on your shelves today, but the cash to pay for them arrives next week. Dawa Mkononi bridges that gap.
        </p>
      </div>
    </Section>
  )
}
