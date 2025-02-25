import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Press_Start_2P, VT323 } from "next/font/google"

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start-2p",
})

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
})

export const metadata: Metadata = {
  title: "Milena Alegre - Portfolio",
  description: "Analista de Sistemas e Desenvolvedora FullStack",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${pressStart2P.variable} ${vt323.variable}`}>
      <body className="font-sans bg-gray-900 text-retro-green">{children}</body>
    </html>
  )
}



import './globals.css'