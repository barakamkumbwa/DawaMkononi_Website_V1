import type { Metadata } from 'next'
import { Asap, Roboto } from 'next/font/google'
import './globals.css'

const asap = Asap({ subsets: ['latin'], variable: '--font-asap-local', display: 'swap' })
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-roboto-local', display: 'swap' })

export const metadata: Metadata = {
  title: 'Dawa Mkononi | Better stocked pharmacies, better access to medicine',
  description:
    'Dawa Mkononi is a Tanzanian healthtech company improving access to medicines through digital ordering, stock financing, and pharmacy management tools.',
  metadataBase: new URL('https://dawamkononi.co.tz'),
  openGraph: {
    title: 'Dawa Mkononi | Better stocked pharmacies, better access to medicine',
    description: 'Order medicines, access stock financing, and manage your pharmacy with one simple app, built for health facilities in Tanzania.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${asap.variable} ${roboto.variable}`}>
      <body className="min-h-screen bg-background font-asap antialiased">{children}</body>
    </html>
  )
}
