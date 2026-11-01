"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

import { WhatsappIcon } from "@/components/brand-icons"
import { site, whatsappUrl } from "@/lib/site"
import { cn } from "@/lib/utils"

export function WhatsappFloat() {
  const [hover, setHover] = useState(false)
  const [peek, setPeek] = useState(false)

  useEffect(() => {
    const show = setTimeout(() => setPeek(true), 3500)
    const hide = setTimeout(() => setPeek(false), 10000)
    return () => {
      clearTimeout(show)
      clearTimeout(hide)
    }
  }, [])

  const bubble = hover || peek

  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Conversar com a ${site.name} no WhatsApp`}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      className="group pointer-events-none fixed right-4 bottom-4 z-50 flex items-center gap-3 outline-none sm:right-6 sm:bottom-6"
    >
      <span
        aria-hidden="true"
        className={cn(
          "origin-bottom-right rounded-2xl rounded-br-sm border border-ink/10 bg-white px-4 py-3 shadow-[0_16px_40px_-16px_rgb(42_37_31/0.35)] transition duration-500 ease-out",
          bubble ? "pointer-events-auto translate-x-0 scale-100 opacity-100" : "translate-x-3 scale-95 opacity-0"
        )}
      >
        <span className="block text-sm font-medium whitespace-nowrap text-ink">Oi! Posso te ajudar?</span>
        <span className="block text-xs whitespace-nowrap text-ink/55">Fale comigo no WhatsApp</span>
      </span>

      <span className="pointer-events-auto relative block size-16 rounded-full border-[3px] border-brand bg-paper shadow-[0_12px_30px_-10px_rgb(138_109_53/0.6)] group-focus-visible:ring-4 group-focus-visible:ring-brand/40 sm:size-[4.5rem]">
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <Image src="/images/avatar/dra-laura-perfil.webp" alt="" fill sizes="72px" className="object-cover" />
        </span>
        <span
          aria-hidden="true"
          className="absolute -right-1 -bottom-1 flex size-6 items-center justify-center rounded-full bg-[#25d366] text-white ring-2 ring-paper"
        >
          <WhatsappIcon className="size-3.5" />
        </span>
      </span>
    </a>
  )
}
