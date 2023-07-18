import Link from "next/link";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });
export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isFlyoutOpen, setFlyoutOpen] = useState(false); // added

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="#" className="-m-1.5 p-1.5">
            <h2
              className={`${inter.className} text-2xl font-bold bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white via-gray-300 to-gray-300 bg-clip-text text-transparent `}
            >
              HTMLtoJSX
            </h2>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <div className="relative">
            <button
              type="button"
              className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-white"
              aria-expanded={isFlyoutOpen} // changed
              onClick={() => setFlyoutOpen(!isFlyoutOpen)} // added
            >
              <span>Other Tools</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {/*
    Flyout menu, show/hide based on flyout menu state.

    Entering: "transition ease-out duration-200"
From: "opacity-0 translate-y-1"
To: "opacity-100 translate-y-0"
    Leaving: "transition ease-in duration-150"
From: "opacity-100 translate-y-0"
To: "opacity-0 translate-y-1"
  */}
            <div
              className={
                isFlyoutOpen
                  ? "absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4"
                  : "hidden"
              }
            >
              <div className="w-screen max-w-sm flex-auto rounded-3xl bg-white p-4 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                <div className="relative rounded-lg p-4 hover:bg-gray-50">
                  <a href="#" className="font-semibold text-gray-900">
                    Sand API
                    <span className="absolute inset-0" />
                  </a>
                  <p className="mt-1 text-gray-600">
                    Generate APIs in a few clicks
                  </p>
                </div>
                <div className="relative rounded-lg p-4 hover:bg-gray-50">
                  <a href="#" className="font-semibold text-gray-900">
                    ThreadsMedia
                    <span className="absolute inset-0" />
                  </a>
                  <p className="mt-1 text-gray-600">
                    Threads.net Video & Image Downloader
                  </p>
                </div>
                <div className="relative rounded-lg p-4 hover:bg-gray-50">
                  <a href="#" className="font-semibold text-gray-900">
                    TailSurge
                    <span className="absolute inset-0" />
                  </a>
                  <p className="mt-1 text-gray-600">
                    Generate Tailwind Layouts according to your needs
                  </p>
                </div>
              </div>
            </div>
          </div>

          <a
            href="#"
            target="_blank"
            className="text-sm font-semibold leading-6 text-white"
          >
            <div className="flex gap-2 items-center">
              Product Hunt
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-white"
                fill="#fff"
                viewBox="0 0 256 256"
              >
                <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z" />
              </svg>
            </div>
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div className="navmenu hidden w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white dark:bg-gray-800 lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0">
            <div className="text-gray-600 dark:text-gray-300 lg:pr-4"></div>
            <a
              className="group"
              target="_blank"
              aria-label="GitHub"
              href="https://github.com/VenoM9078/htmltojsx"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                className="h-6 w-6 fill-slate-400 group-hover:fill-slate-500 dark:group-hover:fill-slate-300"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </nav>
      {/* Mobile menu, show/hide based on menu open state. */}
      <div
        className={isMenuOpen ? "" : "hidden lg:hidden"}
        role="dialog"
        aria-modal="true"
      >
        {/* Background backdrop, show/hide based on slide-over state. */}
        <div className="fixed inset-0 z-50" />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <h2
                className={`${inter.className} text-2xl font-bold bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white via-gray-300 to-gray-300 bg-clip-text text-transparent `}
              >
                HTMLtoJSX
              </h2>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
              onClick={() => setMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/25">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  <div className="flex gap-2 items-center">
                    Product Hunt
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-white"
                      fill="#fff"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z" />
                    </svg>
                  </div>
                </a>
              </div>
              <div className="py-6">
                <a
                  target="_blank"
                  href="https://github.com/VenoM9078/htmltojsx"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                >
                  <div className="flex gap-2 items-center">
                    Contribute on GitHub
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-white"
                      fill="#fff"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
