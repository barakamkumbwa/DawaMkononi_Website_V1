import { cn } from '@/lib/utils'
import { Container } from './Container'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  containerClassName?: string
}

export function Section({ children, className, id, containerClassName }: SectionProps) {
  return (
    <section id={id} className={cn('py-24 lg:py-28', className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  )
}
