import './globals.css'
import type { Metadata } from 'next'
import { GlobalContextProvider } from './Context/store'

export const metadata: Metadata = {
  title: 'MasterBase',
  description: 'Gaming, esports, musica e tanto altro!',
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
