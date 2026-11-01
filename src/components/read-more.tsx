"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

type ReadMoreProps = {
  children: React.ReactNode
  /* Altura recolhida, ex.: "max-h-28 lg:max-h-none". O botão só aparece se o texto passar dessa altura */
  collapsedClassName: string
  buttonClassName?: string
  className?: string
}

export function ReadMore({ children, collapsedClassName, buttonClassName, className }: ReadMoreProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [expanded, setExpanded] = useState(false)
  const [overflowing, setOverflowing] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    const check = () => setOverflowing(element.scrollHeight > element.clientHeight + 1)
    check()
    const observer = new ResizeObserver(check)
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div className={className}>
      <div
        ref={ref}
        className={cn(
          "overflow-hidden",
          !expanded && collapsedClassName,
          !expanded && overflowing && "[mask-image:linear-gradient(to_bottom,#000_55%,transparent)]"
        )}
      >
        {children}
      </div>
      {(overflowing || expanded) && (
        <button
          type="button"
          aria-expanded={expanded}
          onClick={() => setExpanded((value) => !value)}
          className={cn(
            "mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-brand-deep underline-offset-4 hover:underline",
            buttonClassName
          )}
        >
          {expanded ? "Ler menos" : "Ler mais"}
          <ChevronDown className={cn("size-4 transition-transform", expanded && "rotate-180")} />
        </button>
      )}
    </div>
  )
}
