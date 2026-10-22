import { Section } from '@/components/ui/Section'
import { stats } from '@/lib/content'

export function Proof() {
  return (
    <Section className="border-t border-border bg-background">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-muted">
          Trusted by health facilities across Tanzania
        </h2>
        
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-4xl font-semibold tracking-tight text-accent lg:text-5xl">
                {stat.value}
              </span>
              <span className="mt-3 text-sm font-medium text-muted">
                {stat.label.en}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
