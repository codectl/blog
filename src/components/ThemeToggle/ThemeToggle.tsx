"use client"

import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"
import { useTheme } from "next-themes"

export const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <button
      type="button"
      className="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
      onClick={() => setTheme(resolvedTheme == "dark" ? "light" : "dark")}
    >
      <span className="sr-only">Theme</span>
      {resolvedTheme === "light" ? (
        <SunIcon className="h-6 w-6"></SunIcon>
      ) : (
        <MoonIcon className="h-6 w-6"></MoonIcon>
      )}
    </button>
  )
}
