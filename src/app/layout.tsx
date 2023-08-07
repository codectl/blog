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
      <body className={`min-h-screen antialiased ${inter.className}`}>
        <Providers>
          <div>{children}</div>
        </Providers>
      </body>
    </html>
  )
}
