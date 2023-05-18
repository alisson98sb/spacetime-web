import { ReactNode } from 'react'
import './globals.css'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as Jamjuree,
} from 'next/font/google'

const baiJamjuree = Jamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
})
const roboto = Roboto({ subsets: ['latin'], variable: '--fonts-roboto' })

export const metadata = {
  title: 'NLW Spacetime',
  description: 'Uma cápsula do tempo construída com Reat, Next.js e Typescript',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} bg-gray-900 font-sans text-gray-100`}
      >
        {children}
      </body>
    </html>
  )
}
