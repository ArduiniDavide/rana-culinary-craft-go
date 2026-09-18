"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const PANELS = [
  {
    image: "/images/story-1.png",
    kicker: "1962",
    title: "Un uovo, una farina, una promessa",
    text: "Tutto comincia in un piccolo laboratorio a San Giovanni Lupatoto: Giovanni Rana impasta la sua prima pasta fresca all'uovo, convinto che il gusto di casa non debba mai andare perso.",
  },
  {
    image: "/images/story-2.png",
    kicker: "Anni '70",
    title: "La botteguccia diventa un punto di riferimento",
    text: "La qualità artigianale conquista il quartiere. Nasce la prima vera bottega Rana, dove le famiglie tornano ogni settimana per la pasta fresca fatta a mano.",
  },
  {
    image: "/images/story-3.png",
    kicker: "Crescita",
    title: "Dall'artigianalità alla produzione responsabile",
    text: "Le ricette restano quelle di sempre, ma la cura si organizza: nuovi spazi, nuove persone, la stessa attenzione al dettaglio di quando si impastava a mano.",
  },
  {
    image: "/images/story-4.png",
    kicker: "Oggi",
    title: "Una tavola che unisce le generazioni",
    text: "Dai nonni ai nipoti, la pasta Rana resta il filo che lega le famiglie italiane a tavola: un gesto semplice, ripetuto ogni giorno con la stessa autenticità.",
  },
]

export function StorySection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const track = trackRef.current
    if (!container || !track) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduceMotion) return

    let st: ScrollTrigger | undefined

    const setup = () => {
      st?.kill()
      const distance = track.scrollWidth - container.clientWidth
      if (distance <= 0) return

      st = ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: () => `+=${distance}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          gsap.set(track, { x: -distance * self.progress })
        },
      })
    }

    setup()
    window.addEventListener("resize", setup)

    return () => {
      window.removeEventListener("resize", setup)
      st?.kill()
    }
  }, [])

  return (
    <section id="storia" ref={containerRef} className="relative h-screen w-full overflow-hidden bg-anthracite">
      <div
        ref={trackRef}
        className="flex h-full w-max will-change-transform"
        style={{ touchAction: "pan-y" }}
      >
        {PANELS.map((panel, i) => (
          <article
            key={panel.title}
            className="relative flex h-full w-[100vw] flex-shrink-0 items-center justify-center px-5 sm:px-10 lg:px-20"
          >
            <div className="grid w-full max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className={`relative order-1 aspect-[4/5] w-full overflow-hidden rounded-3xl ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <Image
                  src={panel.image || "/placeholder.svg"}
                  alt={panel.title}
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-anthracite/40 via-transparent to-transparent" />
              </div>

              <div className={`order-2 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <span className="font-display text-6xl font-bold text-pasta-yellow/90 sm:text-7xl">
                  {panel.kicker}
                </span>
                <h3 className="mt-4 max-w-md font-display text-3xl font-semibold leading-tight text-cream sm:text-4xl lg:text-[2.6rem]">
                  {panel.title}
                </h3>
                <p className="mt-5 max-w-md text-base leading-relaxed text-cream/70 sm:text-lg">{panel.text}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
        {PANELS.map((panel) => (
          <span key={panel.title} className="h-1.5 w-1.5 rounded-full bg-cream/40" />
        ))}
      </div>
    </section>
  )
}
