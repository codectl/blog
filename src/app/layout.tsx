import { Inter } from "next/font/google"
import React from "react"

import "@/app/globals.css"
import { Providers } from "@/providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "My personal blog | Renato Damas",
  description: "Personal blog that discusses topics on software engineering",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
