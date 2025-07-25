import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StoreProvider from '@/providers/store-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IELTS Course - Master IELTS with Expert Training',
  description: 'Comprehensive IELTS preparation course with expert instructors and proven results',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-gray-50`}>
        <StoreProvider>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  )
}