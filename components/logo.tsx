type LogoProps = {
  className?: string
  invert?: boolean
}

export function Logo({ className = "", invert = false }: LogoProps) {
  return (
    <span
      className={`font-logo select-none leading-none ${invert ? "text-cream" : "text-signature-blue"} ${className}`}
    >
      Giovanni Rana
    </span>
  )
}
