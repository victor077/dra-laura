"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { ArrowUpRight, Menu, X } from "lucide-react"

import { WhatsappIcon } from "@/components/brand-icons"
import { cn } from "@/lib/utils"
import { navLinks, site, whatsappUrl } from "@/lib/site"

const homeSections = navLinks.flatMap((link) => (link.section ? [link.section] : []))

function currentHomeSection() {
  const line = window.innerHeight * 0.4
  let current: string | null = null
  let closest = -Infinity
  for (const id of homeSections) {
    const top = document.getElementById(id)?.getBoundingClientRect().top
    if (top !== undefined && top <= line && top > closest) {
      current = id
      closest = top
    }
  }
  return current
}

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [section, setSection] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      setSection(pathname === "/" ? currentHomeSection() : null)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [pathname])

  function isActive(link: (typeof navLinks)[number]) {
    if (pathname === "/") return section ? link.section === section : link.href === "/"
    return link.href !== "/" && !link.href.startsWith("/#") && pathname.startsWith(link.href)
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        className={cn(
          "mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 rounded-full border pr-2 pl-5 transition-all duration-300",
          scrolled || open ? "border-ink/10 bg-paper/80 shadow-sm backdrop-blur-xl" : "border-transparent bg-transparent"
        )}
      >
        <Link href="/" className="flex shrink-0 items-center gap-3" onClick={() => setOpen(false)}>
          <Image src={site.monogram.src} alt="" width={site.monogram.width} height={site.monogram.height} className="h-7 w-auto" />
          <span className="font-heading text-2xl whitespace-nowrap">{site.name}</span>
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-3.5 py-2 text-sm font-medium whitespace-nowrap text-ink/65 transition-colors hover:text-ink",
                isActive(link) && "bg-ink/5 text-ink"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-10 items-center gap-2 rounded-full border border-ink/70 px-4 text-sm font-medium whitespace-nowrap text-ink transition hover:bg-ink hover:text-paper sm:inline-flex"
          >
            <WhatsappIcon className="size-4 text-[#25d366]" />
            Agendar avaliação
          </a>
          <button
            type="button"
            className="flex size-10 items-center justify-center rounded-full bg-ink/5 xl:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 top-0 -z-10 flex flex-col bg-paper px-5 pt-24 pb-8 xl:hidden">
          <nav className="flex flex-1 flex-col" aria-label="Principal">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "group flex items-center justify-between border-b border-ink/10 py-4 font-heading text-4xl",
                  isActive(link) ? "text-brand-deep" : "text-ink"
                )}
              >
                {link.label}
                <ArrowUpRight className="size-6 opacity-40 transition group-hover:opacity-100" />
              </Link>
            ))}
          </nav>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex h-14 items-center justify-center gap-2 rounded-full bg-ink font-medium text-paper"
          >
            <WhatsappIcon className="size-5 text-[#25d366]" />
            Agendar avaliação · {site.whatsapp.display}
          </a>
        </div>
      )}
    </header>
  )
}
