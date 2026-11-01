import Image from "next/image"
import Link from "next/link"

import { GoogleIcon, InstagramIcon, WhatsappIcon } from "@/components/brand-icons"
import { googleReviews } from "@/lib/reviews"
import { addressLines, mapsUrl, navLinks, site, whatsappUrl } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-sand">
      <div className="container-page grid grid-cols-2 gap-x-6 gap-y-10 py-14 sm:py-20 md:grid-cols-[1.2fr_0.9fr_0.9fr_1.6fr] md:gap-12">
        <div className="col-span-2 flex items-center gap-6 md:col-span-1 md:flex-col md:items-start">
          <Image
            src={site.logo.src}
            alt={`Logo ${site.name}`}
            width={site.logo.width}
            height={site.logo.height}
            className="w-28 shrink-0 sm:w-36 md:w-44"
          />
          <div className="space-y-4">
            <p className="max-w-xs font-serif text-lg text-ink/70 italic sm:text-xl">{site.slogan}.</p>
            <div className="flex gap-2">
              <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex size-10 items-center justify-center rounded-full border border-ink/15 transition hover:border-brand hover:text-brand-deep">
                <InstagramIcon className="size-5" />
              </a>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex size-10 items-center justify-center rounded-full border border-ink/15 transition hover:border-brand hover:text-brand-deep">
                <WhatsappIcon className="size-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-xs font-medium tracking-[0.25em] text-ink/45 uppercase">Navegação</p>
          <ul className="space-y-2">
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
          <p className="text-xs font-medium tracking-[0.25em] text-ink/45 uppercase">Horário</p>
          <dl className="space-y-3">
            {site.hours.map((item) => (
              <div key={item.days}>
                <dt className="text-ink/75">{item.days}</dt>
                <dd className="text-sm text-ink/50">{item.time}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="col-span-2 space-y-4 md:col-span-1">
          <p className="text-xs font-medium tracking-[0.25em] text-ink/45 uppercase">Contato</p>
          <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="block text-ink/75 hover:text-brand-deep">
            {addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </a>
          <div className="flex flex-wrap gap-x-6 gap-y-2 md:flex-col">
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="text-ink/75 hover:text-brand-deep">
              {site.whatsapp.display}
            </a>
            <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="text-ink/75 hover:text-brand-deep">
              {site.instagram.handle}
            </a>
            <a href={googleReviews.writeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-ink/75 hover:text-brand-deep">
              <GoogleIcon className="size-4" />
              Avalie no Google
            </a>
          </div>
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
