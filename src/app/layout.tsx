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
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-W2KT56PF')
        `}} />
      </head>
      <body className={`${myFont.className} ${inter.className}`}>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W2KT56PF"
          height="0" width="0"></iframe></noscript>
        {children}
      </body>
    </html>
  )
}
