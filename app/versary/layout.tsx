import type { Metadata } from 'next'
import Head from 'next/head'

export const metadata: Metadata = {
  title: 'Versary 2025',
  description: 'Festeggiando un nuovo capitolo!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:image" content="/logo.png" />
      </Head>
      <body>
        {children}
      </body>
    </html>
  )
}
