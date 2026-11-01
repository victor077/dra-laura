import { Fragment } from "react"

import { cn } from "@/lib/utils"

export function Marquee({ items, className }: { items: string[]; className?: string }) {
  const row = (hidden: boolean) => (
    <div className="flex shrink-0 items-center gap-10 pr-10" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <Fragment key={item}>
          <span className="font-heading text-4xl whitespace-nowrap sm:text-6xl">{item}</span>
          <span className="size-2 shrink-0 rotate-45 bg-brand" />
        </Fragment>
      ))}
    </div>
  )

  return (
    <div className={cn("overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]", className)}>
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {row(false)}
        {row(true)}
      </div>
    </div>
  )
}
