import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Damiano Schirinzi - Full-Stack Developer & Designer",
  description:
    "Portfolio of Damiano Schirinzi - Full-Stack Developer and UI/UX Designer crafting digital experiences that matter",
  keywords: "developer, designer, portfolio, full-stack, react, next.js",
  authors: [{ name: "Damiano Schirinzi" }],
  openGraph: {
    title: "Damiano Schirinzi - Full-Stack Developer & Designer",
    description: "Portfolio showcasing my work as a Full-Stack Developer and UI/UX Designer",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
