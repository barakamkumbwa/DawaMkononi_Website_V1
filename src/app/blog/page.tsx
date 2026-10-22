import type { Metadata } from 'next'
import BlogPage from './page-content'

export const metadata: Metadata = {
  title: 'Blog | Dawa Mkononi',
  description: 'Practical ideas for better medicine ordering, pharmacy stock management, and healthier businesses.',
}

export default function Page() {
  return <BlogPage />
}
