import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import './globals.css'

import localFont from 'next/font/local'

const myFont = localFont({ src: './fonts/jazmin-alt-black.otf' })

const inter = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jane',
  description: 'Uma aula que irá revelar os segredos da Torah capazes de criar uma autoestima inabalável e viver com um propósito certo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${myFont.className} ${inter.className}`}>{children}</body>
    </html>
  )
}
