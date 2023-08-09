import React from "react"

import { ThemeToggle } from "@/components/ThemeToggle"
import Logo from "/public/images/logo.svg"

export const Header = () => {
  return (
    <div className="sticky top-0 z-40 w-full border-slate-900/10 transition-[border-color] duration-1000 dark:border-slate-50/[0.06] lg:z-50 lg:border-b">
      <div className="mx-auto max-w-4xl">
        <div className="mx-4 border-b border-slate-900/10 py-4 transition-[border-color] duration-1000 dark:border-slate-50/[0.06] lg:mx-0 lg:border-0 lg:px-8">
          <div className="relative flex items-center">
            <a
              className="mr-3 w-[2.0625rem] flex-none overflow-hidden md:w-auto"
              href="/"
            >
              <span className="sr-only">renatodamas website</span>
              <Logo className="h-8 w-auto transition-colors duration-100" />
            </a>
            <div className="relative ml-auto flex items-center">
              <div className="ml-6 flex items-center border-l border-slate-900/10 pl-6 duration-1000 dark:border-slate-50/[0.06]">
                <ThemeToggle />
                <a
                  href="https://github.com/codectl/renatodamas.com"
                  className="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
                >
                  <span className="sr-only">Website on GitHub</span>
                  <svg
                    viewBox="0 0 16 16"
                    className="h-5 w-5"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
