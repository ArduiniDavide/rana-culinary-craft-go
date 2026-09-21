type LogoProps = {
  className?: string
  invert?: boolean
}

export function Logo({ className = "", invert = false }: LogoProps) {
  return (
    <span
      className={`flex items-center font-display font-bold leading-none tracking-tight ${invert ? "text-cream" : "text-tomato-red"} ${className}`}
    >
      <span className="text-lg sm:text-xl">Giovanni</span>
      <span className={`ml-1.5 text-lg sm:text-xl ${invert ? "text-pasta-yellow" : "text-pasta-brown"}`}>Rana</span>
    </span>
  )
}
