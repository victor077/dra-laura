"use client"

import { useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

type RevealProps = {
  children: React.ReactNode
  delay?: number
  immediate?: boolean
  as?: "div" | "li" | "span"
  className?: string
}

export function Reveal({ children, delay = 0, immediate = false, as: Tag = "div", className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (immediate || !element) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: "0px 0px -10% 0px" }
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [immediate])

  return (
    <Tag
      ref={ref as React.Ref<never>}
      data-visible={immediate || visible}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
      className={cn(immediate ? "reveal-in" : "reveal", className)}
    >
      {children}
    </Tag>
  )
}
