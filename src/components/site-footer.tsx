import Link from "next/link"

import { InstagramIcon, WhatsappIcon } from "@/components/brand-icons"
import { fullAddress, mapsUrl, navLinks, site, whatsappUrl } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="bg-ink text-paper">
      <div className="container-page grid gap-12 py-20 md:grid-cols-[1.6fr_1fr_1.2fr]">
        <div className="space-y-5">
          <p className="font-heading text-4xl">{site.name}</p>
          <p className="max-w-xs text-paper/60">
            {site.role}. <span className="font-serif text-lg text-paper italic">{site.slogan}.</span>
          </p>
          <div className="flex gap-2">
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex size-11 items-center justify-center rounded-full border border-paper/15 transition hover:border-brand hover:text-brand"
            >
              <InstagramIcon className="size-5" />
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex size-11 items-center justify-center rounded-full border border-paper/15 transition hover:border-brand hover:text-brand"
            >
              <WhatsappIcon className="size-5" />
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-xs font-semibold tracking-[0.25em] text-paper/40 uppercase">Navegação</p>
          <ul className="space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-paper/80 transition-colors hover:text-brand">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <p className="text-xs font-semibold tracking-[0.25em] text-paper/40 uppercase">Contato</p>
          <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="block text-paper/80 hover:text-brand">
            {fullAddress}
          </a>
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="block text-paper/80 hover:text-brand">
            {site.whatsapp.display}
          </a>
          <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="block text-paper/80 hover:text-brand">
            {site.instagram.handle}
          </a>
        </div>
      </div>
      <div className="container-page border-t border-paper/10 py-6 text-xs text-paper/40">
        © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
      </div>
    </footer>
  )
}
