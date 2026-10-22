import Link from 'next/link'
import { Section } from '@/components/ui/Section'
import { products } from '@/lib/content'
import { cn } from '@/lib/utils'

export function Products() {
  return (
    <Section className="bg-surface">
      <div className="mb-12 md:mb-16">
        <h2 className="text-3xl font-semibold tracking-tight lg:text-4xl">
          One system. Three tools.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          Everything you need to stock, finance, and manage your pharmacy — in one app.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {products.map((product) => (
          <Link
            key={product.slug}
            href={product.href}
            className="group flex flex-col justify-between rounded-xl border border-border bg-background p-8 transition-colors hover:border-accent"
          >
            <div>
              <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                {product.title.en}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {product.tagline.en}
              </p>
            </div>
            <div className="mt-8 flex items-center text-sm font-medium text-accent">
              Learn more <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  )
}
