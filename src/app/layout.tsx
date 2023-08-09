import { Inter } from "next/font/google"
import React from "react"

import "@/app/globals.scss"
import { Providers } from "@/providers"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen antialiased transition-colors duration-1000 ${inter.className}`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
