import Image from "next/image"

type LogoProps = {
  className?: string
  /** kept for API compatibility with the navbar; the image works on any background */
  invert?: boolean
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <span className={`block overflow-hidden rounded-xl ${className}`}>
      <Image
        src="/images/logo-rana-badge.png"
        alt="Giovanni Rana"
        width={512}
        height={512}
        priority
        className="h-full w-full object-cover"
      />
    </span>
  )
}
