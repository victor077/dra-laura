import { cn } from "@/lib/utils"

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.25em] text-ink/60 uppercase", className)}>
      <span className="size-1.5 rounded-full bg-brand" />
      {children}
    </p>
  )
}

export function Accent({ children }: { children: React.ReactNode }) {
  return <span className="font-serif text-brand italic">{children}</span>
}

type SectionHeadingProps = {
  eyebrow?: string
  title: React.ReactNode
  description?: string
  align?: "left" | "center"
  className?: string
}

export function SectionHeading({ eyebrow, title, description, align = "left", className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl space-y-5", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="text-5xl sm:text-6xl">{title}</h2>
      {description && (
        <p className={cn("max-w-xl text-lg leading-relaxed text-ink/65", align === "center" && "mx-auto")}>
          {description}
        </p>
      )}
    </div>
  )
}
