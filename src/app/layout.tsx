import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'The first revenue engine for marketing agencies - Yuzuu',
    template: '%s · Yuzuu',
  },
  description:
    'Find relevant local businesses, score leads against your offer, and know who to contact and what to say. Yuzuu automates demand gen, pipeline management, and follow-ups for marketing agencies—all in one workspace.',
  openGraph: {
    title: 'The first revenue engine for marketing agencies - Yuzuu',
    description:
      'Prospecting infrastructure for busy agencies: scored local leads, enrichment, outbound on autopilot, and pipelines without living in Google Maps and spreadsheets.',
    type: 'website',
    siteName: 'Yuzuu',
    images: [
      {
        url: '/img/thumbnail.png',
        width: 2472,
        height: 1192,
        alt: 'Yuzuu — revenue engine for marketing agencies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The first revenue engine for marketing agencies - Yuzuu',
    description:
      'Find and score local businesses against your offer. Agents automate demand gen, follow-ups, and pipeline management so your team sells—not researches.',
    images: ['/img/thumbnail.png'],
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
      <body>
        {children}
        <Script
          src="https://scripts.simpleanalyticscdn.com/latest.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
