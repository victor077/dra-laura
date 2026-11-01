import Image from "next/image"
import Link from "next/link"

import { GoogleIcon, InstagramIcon, WhatsappIcon } from "@/components/brand-icons"
import { googleReviews } from "@/lib/reviews"
import { addressLines, mapsUrl, navLinks, site, whatsappUrl } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-sand">
      <div className="container-page grid gap-12 py-20 md:grid-cols-[1.6fr_1fr_1.2fr]">
        <div className="space-y-6">
          <Image src={site.logo.src} alt={`Logo ${site.name}`} width={site.logo.width} height={site.logo.height} className="w-44" />
          <p className="max-w-xs font-serif text-xl text-ink/70 italic">{site.slogan}.</p>
          <div className="flex gap-2">
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex size-11 items-center justify-center rounded-full border border-ink/15 transition hover:border-brand hover:text-brand-deep"
            >
              <InstagramIcon className="size-5" />
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex size-11 items-center justify-center rounded-full border border-ink/15 transition hover:border-brand hover:text-brand-deep"
            >
              <WhatsappIcon className="size-5" />
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-xs font-medium tracking-[0.25em] text-ink/45 uppercase">Navegação</p>
          <ul className="space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-ink/75 transition-colors hover:text-brand-deep">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <p className="text-xs font-medium tracking-[0.25em] text-ink/45 uppercase">Contato</p>
          <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="block text-ink/75 hover:text-brand-deep">
            {addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </a>
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="block text-ink/75 hover:text-brand-deep">
            {site.whatsapp.display}
          </a>
          <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="block text-ink/75 hover:text-brand-deep">
            {site.instagram.handle}
          </a>
          <a href={googleReviews.writeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-ink/75 hover:text-brand-deep">
            <GoogleIcon className="size-4" />
            Avalie no Google
          </a>
          <dl className="space-y-1 pt-2 text-sm text-ink/60">
            {site.hours.map((item) => (
              <div key={item.days} className="flex justify-between gap-4">
                <dt>{item.days}</dt>
                <dd>{item.time}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="container-page flex flex-wrap justify-between gap-2 border-t border-ink/10 py-6 text-xs text-ink/45">
        <span>
          © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
        </span>
        <span>
          {site.role} · {site.cro}
        </span>
      </div>
    </footer>
  )
}
