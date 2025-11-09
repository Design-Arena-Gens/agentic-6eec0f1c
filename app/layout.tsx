import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Financial Services | Mutual Funds, LIC & Investment Solutions',
  description: 'Your trusted partner for mutual funds, LIC policies, insurance, and comprehensive financial planning services.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
