import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import Footer from '@/components/footer'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RAO - Remote Art Online',
  description: 'RAO - Remote Art Online',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} text-zinc-900 max-w-xl mx-auto relative flex min-h-screen flex-col justify-between overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  )
}
