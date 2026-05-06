import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Yuzuu — Find local businesses that need what you sell',
    template: '%s · Yuzuu',
  },
  description:
    'Yuzuu searches Google Maps, scores every lead against your offer, and surfaces who to contact and what to say—plus enrichment and outreach workflows built for agencies.',
  openGraph: {
    title: 'Yuzuu — Find local businesses that need what you sell',
    description:
      'Score and enrich local leads from Google Maps. Built for teams who prospect SMBs and want less manual research.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yuzuu — Find local businesses that need what you sell',
    description:
      'Score and enrich local leads from Google Maps. Built for teams who prospect SMBs and want less manual research.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
