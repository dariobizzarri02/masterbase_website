import '@/public/globals.css'
import type { Metadata } from 'next'
import { GlobalContextProvider } from './Context/store'

export const metadata: Metadata = {
  title: 'MasterBase',
  description: 'Gaming, esports, musica e tanto altro!',
  icons: {
    icon: "/favicon.png",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <GlobalContextProvider>
          {children}
        </GlobalContextProvider>
      </body>
    </html>
  )
}
