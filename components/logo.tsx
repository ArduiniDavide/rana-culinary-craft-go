import Image from "next/image"

type LogoProps = {
  className?: string
  /** when true, the navy logo is rendered in a light tint for dark backgrounds */
  invert?: boolean
}

export function Logo({ className = "", invert = false }: LogoProps) {
  return (
    <span className={`block ${className}`}>
      <Image
        src="/images/logo-rana.webp"
        alt="Giovanni Rana"
        width={1024}
        height={512}
        priority
        className={`h-full w-auto object-contain ${invert ? "brightness-0 invert" : ""}`}
      />
    </span>
  )
}
