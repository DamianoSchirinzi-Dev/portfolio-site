import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { WebVitals } from "@/components/web-vitals"
import { structuredData } from "@/lib/structured-data"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Damiano Schirinzi - Full-Stack Developer & Designer",
  description:
    "Portfolio of Damiano Schirinzi - Full-Stack Developer and UI/UX Designer crafting digital experiences that matter. Specializing in React, Next.js, Vue.js, and modern web technologies.",
  keywords: "developer, designer, portfolio, full-stack, react, next.js, vue.js, typescript, javascript, ui/ux, web development, frontend, backend",
  authors: [{ name: "Damiano Schirinzi", url: "https://damianoschirinzi.dev" }],
  creator: "Damiano Schirinzi",
  publisher: "Damiano Schirinzi",
  robots: "index, follow",
  alternates: {
    canonical: "https://damianoschirinzi.dev",
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: "Damiano Schirinzi - Full-Stack Developer & Designer",
    description: "Portfolio showcasing my work as a Full-Stack Developer and UI/UX Designer. Expert in React, Next.js, Vue.js, and modern web technologies.",
    type: "website",
    url: "https://damianoschirinzi.dev",
    siteName: "Damiano Schirinzi Portfolio",
    images: [
      {
        url: "/images/me.png",
        width: 1200,
        height: 630,
        alt: "Damiano Schirinzi - Full-Stack Developer & Designer",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Damiano Schirinzi - Full-Stack Developer & Designer",
    description: "Portfolio showcasing my work as a Full-Stack Developer and UI/UX Designer",
    images: ["/images/me.png"],
  },
  verification: {
    google: "your-google-site-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={inter.className}>
        <WebVitals />
        {children}
      </body>
    </html>
  )
}
