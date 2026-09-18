"use client"

import { useEffect, useState } from "react"
import { MobileMenu } from "@/components/mobile-menu"
import { Logo } from "@/components/logo"

const LINKS = [
  { href: "#storia", label: "Storia" },
  { href: "#numeri", label: "I Numeri" },
  { href: "#ricette", label: "Ricette" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => setScrolled(window.scrollY > 40))
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener("scroll", onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 flex justify-center transition-all duration-500 ${
          scrolled ? "pt-3 sm:pt-4" : "pt-0"
        }`}
      >
        <div
          className={`flex w-full items-center justify-between transition-all duration-500 ease-out ${
            scrolled
              ? "mx-4 max-w-4xl rounded-full border border-anthracite/10 bg-cream/80 px-5 py-2.5 shadow-lg shadow-anthracite/10 backdrop-blur-xl sm:px-7"
              : "max-w-none rounded-none border-transparent bg-transparent px-5 py-5 sm:px-10 sm:py-7"
          }`}
        >
          <a href="#top" aria-label="Giovanni Rana, torna alla home" className="flex items-center">
            <Logo
              invert={!scrolled}
              className={`text-2xl transition-all duration-500 sm:text-3xl ${scrolled ? "" : "drop-shadow-sm"}`}
            />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  scrolled ? "text-anthracite hover:text-tomato-red" : "text-cream hover:text-pasta-yellow"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#ricette"
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                scrolled
                  ? "bg-tomato-red text-cream hover:bg-anthracite"
                  : "bg-cream text-anthracite hover:bg-pasta-yellow"
              }`}
            >
              Scopri le ricette
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Chiudi il menu" : "Apri il menu"}
            className="relative z-50 flex h-9 w-9 flex-col items-center justify-center gap-[6px] md:hidden"
          >
            <span
              className={`h-[2px] w-6 rounded-full transition-all duration-300 ease-out ${
                menuOpen ? "translate-y-[6px] rotate-45 bg-cream" : scrolled ? "bg-anthracite" : "bg-cream"
              }`}
            />
            <span
              className={`h-[2px] w-6 rounded-full transition-all duration-300 ease-out ${
                menuOpen ? "opacity-0" : scrolled ? "bg-anthracite" : "bg-cream"
              }`}
            />
            <span
              className={`h-[2px] w-6 rounded-full transition-all duration-300 ease-out ${
                menuOpen ? "-translate-y-[6px] -rotate-45 bg-cream" : scrolled ? "bg-anthracite" : "bg-cream"
              }`}
            />
          </button>
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} isDark={scrolled} />
    </>
  )
}
