import React from "react"

import { Header } from "@/components/Header"

export const metadata = {
  title: "/home | Renato Damas",
  description: "Personal website to discuss topics on Software Engineer.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header></Header>
      {children}
    </>
  )
}
