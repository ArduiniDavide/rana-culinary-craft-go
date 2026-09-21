import Link from "next/link"

type BackButtonProps = {
  className?: string
}

export function BackButton({ className = "" }: BackButtonProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 rounded-full border border-anthracite/15 px-5 py-2.5 text-sm font-semibold text-anthracite transition-colors hover:border-tomato-red hover:bg-tomato-red hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tomato-red/40 ${className}`}
    >
      ← Torna alla home
    </Link>
  )
}
