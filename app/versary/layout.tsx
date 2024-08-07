import type { Metadata } from 'next'

export const metadata: Metadata = {
  icons: [
    { url: '/logo_downscaled_2.png', type: 'image/png', sizes: '750x750' },
  ],
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
