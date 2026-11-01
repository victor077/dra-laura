import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { cn } from "@/lib/utils"

type PillLinkProps = {
  href: string
  children: React.ReactNode
  variant?: "brand" | "ink" | "ghost"
  external?: boolean
  icon?: React.ReactNode
  className?: string
}

const variants = {
  brand: "bg-brand text-white",
  ink: "bg-ink text-paper",
  ghost: "border border-ink/15 text-ink hover:bg-ink/5",
}

export function PillLink({ href, children, variant = "brand", external, icon, className }: PillLinkProps) {
  const classes = cn(
    "group inline-flex h-12 items-center gap-2 rounded-full pr-1.5 pl-5 text-sm font-semibold transition-transform hover:scale-[1.02]",
    variants[variant],
    className
  )
  const content = (
    <>
      {icon}
      {children}
      <span
        className={cn(
          "ml-2 flex size-9 items-center justify-center rounded-full transition-transform group-hover:rotate-45",
          variant === "ghost" ? "bg-ink/5" : "bg-white/20"
        )}
      >
        <ArrowUpRight className="size-4" />
      </span>
    </>
  )

  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
      {content}
    </a>
  ) : (
    <Link href={href} className={classes}>
      {content}
    </Link>
  )
}
