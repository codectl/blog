"use client"

import { ThemeProvider } from "@/providers/theme"
import React from "react"

export function Providers({ children }: React.ReactNode) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  )
}
