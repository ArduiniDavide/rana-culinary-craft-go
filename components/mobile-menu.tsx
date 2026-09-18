"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

const LINKS = [
  { href: "#storia", label: "Storia" },
  { href: "#numeri", label: "I Numeri" },
  { href: "#ricette", label: "Ricette" },
  { href: "#footer", label: "Contatti" },
]

type MobileMenuProps = {
  isOpen: boolean
  onClose: () => void
  isDark: boolean
}

export function MobileMenu({ isOpen, onClose, isDark }: MobileMenuProps) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<HTMLAnchorElement[]>([])

  useEffect(() => {
    const overlay = overlayRef.current
    if (!overlay) return
    const items = itemsRef.current.filter(Boolean)

    if (isOpen) {
      document.body.style.overflow = "hidden"
      gsap.set(overlay, { display: "flex" })
      gsap.fromTo(
        overlay,
        { clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)" },
        { clipPath: "circle(150% at calc(100% - 2.5rem) 2.5rem)", duration: 0.7, ease: "power3.inOut" },
      )
      gsap.fromTo(
        items,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", stagger: 0.08, delay: 0.25 },
      )
    } else {
      document.body.style.overflow = ""
      gsap.to(overlay, {
        clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)",
        duration: 0.5,
        ease: "power3.inOut",
        onComplete: () => gsap.set(overlay, { display: "none" }),
      })
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <div
      ref={overlayRef}
      id="mobile-menu"
      className="fixed inset-0 z-40 hidden flex-col items-center justify-center gap-2 bg-anthracite text-cream"
      style={{ clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)" }}
      role="dialog"
      aria-modal="true"
      aria-label="Menu di navigazione"
    >
      <nav className="flex flex-col items-center gap-6">
        {LINKS.map((link, i) => (
          <a
            key={link.href}
            ref={(el) => {
              if (el) itemsRef.current[i] = el
            }}
            href={link.href}
            onClick={onClose}
            className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-cream transition-colors hover:text-pasta-yellow"
          >
            {link.label}
          </a>
        ))}
      </nav>
      <p className="mt-12 text-sm uppercase tracking-[0.2em] text-cream/50">Pasta fresca dal 1962</p>
    </div>
  )
}
