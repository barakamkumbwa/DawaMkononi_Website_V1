import type { Metadata } from 'next'
import AboutPage from './page-content'

export const metadata: Metadata = {
  title: 'About us | Dawa Mkononi',
  description:
    'Learn about Dawa Mkononi, our history, mission and vision for improving access to medicines in Africa.',
}

export default function Page() {
  return <AboutPage />
}
