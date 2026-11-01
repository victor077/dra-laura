import { Clock, MapPin, Phone } from "lucide-react"

import { WhatsappIcon } from "@/components/brand-icons"
import { PillLink } from "@/components/pill-link"
import { Reveal } from "@/components/reveal"
import { Accent, SectionHeading } from "@/components/section-heading"
import { addressLines, mapsEmbedUrl, mapsUrl, site, whatsappUrl } from "@/lib/site"

export function ContactSection() {
  return (
    <section id="contato" className="container-page section-y grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
      <div>
        <Reveal>
          <SectionHeading
            eyebrow="Contato"
            title={
              <>
                Venha nos <Accent>visitar</Accent>
              </>
            }
          />
        </Reveal>

        <div className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
          <Reveal delay={100} className="flex gap-4 py-5">
            <MapPin className="mt-0.5 size-5 shrink-0 text-brand" strokeWidth={1.5} />
            <div>
              <p className="text-xs font-medium tracking-[0.2em] text-ink/45 uppercase">Endereço</p>
              <div className="mt-1.5 text-ink/80">
                {addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={200} className="flex gap-4 py-5">
            <Clock className="mt-0.5 size-5 shrink-0 text-brand" strokeWidth={1.5} />
            <div className="flex-1">
              <p className="text-xs font-medium tracking-[0.2em] text-ink/45 uppercase">Horário</p>
              <div className="mt-1.5 space-y-1 text-ink/80">
                {site.hours.map((item) => (
                  <span key={item.days} className="flex justify-between gap-4">
                    <span>{item.days}</span>
                    <span className="text-ink/60">{item.time}</span>
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={300} className="flex gap-4 py-5">
            <Phone className="mt-0.5 size-5 shrink-0 text-brand" strokeWidth={1.5} />
            <div>
              <p className="text-xs font-medium tracking-[0.2em] text-ink/45 uppercase">WhatsApp</p>
              <div className="mt-1.5 text-ink/80">{site.whatsapp.display}</div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={400} className="mt-8 grid gap-3 sm:inline-grid sm:grid-cols-2">
          <PillLink href={whatsappUrl()} external variant="ink" icon={<WhatsappIcon className="size-4" />}>
            Agendar avaliação
          </PillLink>
          <PillLink href={mapsUrl} external variant="ghost">
            Como chegar
          </PillLink>
        </Reveal>
      </div>

      <Reveal delay={150} className="min-h-80 overflow-hidden rounded-[2rem] border border-ink/10 bg-sand lg:min-h-full">
        <iframe
          src={mapsEmbedUrl}
          title={`Mapa com a localização do consultório da ${site.name}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="size-full min-h-80 grayscale-[0.3] sepia-[0.15]"
        />
      </Reveal>
    </section>
  )
}
