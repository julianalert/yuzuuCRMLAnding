import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'The first revenue engine for marketing agencies',
    template: '%s · Yuzuu',
  },
  description:
    'Find relevant local businesses, score leads against your offer, and know who to contact and what to say. Yuzuu automates demand gen, pipeline management, and follow-ups for marketing agencies—all in one workspace.',
  openGraph: {
    title: 'The first revenue engine for marketing agencies',
    description:
      'Prospecting infrastructure for busy agencies: scored local leads, enrichment, outbound on autopilot, and pipelines without living in Google Maps and spreadsheets.',
    type: 'website',
    siteName: 'Yuzuu',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The first revenue engine for marketing agencies',
    description:
      'Find and score local businesses against your offer. Agents automate demand gen, follow-ups, and pipeline management so your team sells—not researches.',
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
