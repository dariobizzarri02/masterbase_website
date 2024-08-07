import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Versary 2024 - MasterBase',
  description: 'Festeggiando 7 anni di MasterBase',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
