import { WhatsappIcon } from "@/components/brand-icons"
import { CtaBanner } from "@/components/cta-banner"
import { PillLink } from "@/components/pill-link"
import { Accent, Eyebrow, SectionHeading } from "@/components/section-heading"
import { TreatmentCard } from "@/components/treatment-card"
import { treatments } from "@/lib/catalog"
import { site, whatsappUrl } from "@/lib/site"

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_80%_20%,var(--brand-soft),transparent_70%)]" />
        <div className="container-page flex min-h-[88svh] flex-col justify-end gap-10 pt-36 pb-16 sm:pb-24">
          <Eyebrow>{site.role}</Eyebrow>
          <h1 className="max-w-5xl text-6xl sm:text-8xl lg:text-9xl">
            Cuidado que aparece no <Accent>sorriso</Accent>
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-ink/65">
            Conheça os tratamentos da {site.name} e agende sua avaliação direto pelo WhatsApp.
          </p>
          <div className="flex flex-wrap gap-3">
            <PillLink href={whatsappUrl()} external icon={<WhatsappIcon className="size-4" />}>
              Agendar avaliação
            </PillLink>
            <PillLink href="/catalogo" variant="ghost">
              Ver catálogo
            </PillLink>
          </div>
        </div>
      </section>

      <section className="container-page section-y">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Catálogo"
            title={
              <>
                Tratamentos <Accent>em destaque</Accent>
              </>
            }
          />
          <PillLink href="/catalogo" variant="ghost">
            Ver todos
          </PillLink>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.slice(0, 3).map((treatment) => (
            <li key={treatment.slug}>
              <TreatmentCard treatment={treatment} />
            </li>
          ))}
        </ul>
      </section>

      <CtaBanner />
    </>
  )
}
