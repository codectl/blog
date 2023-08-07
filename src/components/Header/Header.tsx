import React from "react"

import Logo from "/public/images/logo.svg"

export const Header = () => {
  return (
    <div className="sticky top-0 z-40 w-full border-slate-900/10 transition-colors duration-500 dark:border-slate-50/[0.06] lg:z-50 lg:border-b">
      <div className="mx-auto max-w-4xl">
        <div className="mx-4 border-b py-4 dark:border-slate-300/10 lg:mx-0 lg:border-0 lg:px-8">
          <div className="relative flex items-center">
            <a
              className="mr-3 w-[2.0625rem] flex-none overflow-hidden md:w-auto"
              href="/"
            >
              <span className="sr-only">renatodamas website</span>
              <Logo className="h-5 w-auto" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
