import type { Metadata } from 'next'
import { Cormorant_Garamond, Nunito } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
});

const nunito = Nunito({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: 'Bajkowa Fantazja | Muzyka, opowieści i magia dla dzieci',
  description: 'Kameralne wydarzenia dla dzieci i rodziców. Przeżyjcie razem magiczne chwile pełne muzyki, bajek i tańca.',
  icons: {
    icon: [
      {
        url: '/b_icon.png',
      },

    ],
    apple: '/b_icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl" className={`${cormorant.variable} ${nunito.variable}`}>
      <body className="font-sans antialiased">
        {children}

      </body>
    </html>
  )
}
