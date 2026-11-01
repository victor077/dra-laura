import Image from "next/image"
import { Award, BookOpenCheck, Check, GraduationCap } from "lucide-react"

import { WhatsappIcon } from "@/components/brand-icons"
import { CtaBanner } from "@/components/cta-banner"
import { GoldRing } from "@/components/gold-ring"
import { Marquee } from "@/components/marquee"
import { PillLink } from "@/components/pill-link"
import { ReadMore } from "@/components/read-more"
import { Reveal } from "@/components/reveal"
import { RotatingBadge } from "@/components/rotating-badge"
import { Accent, Eyebrow, SectionHeading } from "@/components/section-heading"
import { TreatmentCard } from "@/components/treatment-card"
import { about } from "@/lib/about"
import { clinicalCases } from "@/lib/cases"
import { treatments } from "@/lib/catalog"
import { site, whatsappUrl } from "@/lib/site"
import { CasesCarousel } from "./components/cases-carousel"
import { ContactSection } from "./components/contact-section"
import { ReviewsSection } from "./components/reviews-section"

const credentialIcons = [GraduationCap, BookOpenCheck, Award]

const surgery = clinicalCases.find((item) => item.slug === "cirurgia")!

const safetyPoints = [
  "Planejamento personalizado para cada caso",
  "Abordagens precisas e minimamente invasivas",
  "Controle rigoroso de biossegurança e ambiente estéril",
  "Atendimento humanizado do início ao fim",
]

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(55%_55%_at_85%_15%,var(--brand-soft),transparent_70%)]" />
        <div className="container-page grid items-center gap-14 pt-28 pb-20 sm:pt-40 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:pb-28">
          <div>
            <Reveal immediate>
              <Eyebrow>
                {site.role} · {site.cro}
              </Eyebrow>
            </Reveal>
            <Reveal immediate delay={120}>
              <h1 className="mt-7 text-6xl sm:text-7xl xl:text-8xl">
                Seu sorriso, <Accent>planejado do zero</Accent>
              </h1>
            </Reveal>
            <Reveal immediate delay={240}>
              <p className="mt-7 max-w-lg text-lg leading-relaxed text-ink/65">
                Odontologia com respeito, empatia e transparência, no seu tempo e com o melhor protocolo para a sua saúde bucal.
              </p>
            </Reveal>
            <Reveal immediate delay={360} className="mt-10 flex flex-wrap gap-3">
              <PillLink href={whatsappUrl()} external variant="ink" icon={<WhatsappIcon className="size-4" />}>
                Agendar avaliação
              </PillLink>
              <PillLink href="/catalogo" variant="ghost">
                Ver tratamentos
              </PillLink>
            </Reveal>
          </div>

          <Reveal immediate delay={200} className="relative isolate order-first mx-auto w-full max-w-[17rem] sm:max-w-sm lg:order-none lg:max-w-lg">
            <GoldRing className="absolute -top-[6%] -left-[6%] -z-10 aspect-square w-[112%]" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[2.5rem] bg-sand">
              <div className="absolute inset-0 animate-ken-burns">
                <Image
                  src={about.photo.src}
                  alt={about.photo.alt}
                  fill
                  preload
                  quality={90}
                  sizes="(min-width: 1024px) 32rem, (min-width: 640px) 24rem, 17rem"
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 animate-gold-sheen bg-[linear-gradient(105deg,transparent_46%,var(--brand)_48.5%,#f3e2b3_50%,var(--brand)_51.5%,transparent_54%)] bg-size-[250%_100%] bg-no-repeat"
                  style={{ mask: `url(${about.photo.lhMask}) center / 100% 100% no-repeat` }}
                />
              </div>
            </div>
            <RotatingBadge className="absolute -bottom-6 -left-8 size-24 sm:-bottom-8 sm:-left-10 sm:size-32" />
          </Reveal>
        </div>

        <div className="container-page pb-6">
          <ul className="grid gap-px overflow-hidden rounded-[2rem] border border-ink/10 bg-ink/10 sm:grid-cols-3">
            {about.credentials.map((credential, index) => {
              const Icon = credentialIcons[index]
              return (
                <Reveal as="li" key={credential} delay={index * 120} className="flex items-center gap-4 bg-paper px-6 py-6">
                  <Icon className="size-7 shrink-0 text-brand" strokeWidth={1.4} />
                  <span className="text-ink/75">{credential}</span>
                </Reveal>
              )
            })}
          </ul>
        </div>
      </section>

      <Marquee items={treatments.map((treatment) => treatment.name)} className="py-14 text-ink/80" />

      <section id="sobre" className="container-page section-y grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <div className="relative">
          <Reveal>
            <SectionHeading
              eyebrow="Sobre"
              title={
                <>
                  Cuidar de pessoas, <Accent>não só de dentes</Accent>
                </>
              }
            />
          </Reveal>
          <Reveal delay={150} className="relative isolate mt-16 hidden aspect-square w-80 items-center justify-center lg:flex">
            <GoldRing className="absolute inset-0" />
            <div className="absolute inset-[7%] -z-10 rounded-full bg-[radial-gradient(circle,var(--brand-soft)_40%,transparent_72%)]" />
            <Image
              src={site.monogram.src}
              alt=""
              width={site.monogram.width}
              height={site.monogram.height}
              className="w-[64%] animate-float drop-shadow-[0_10px_24px_rgb(138_109_53/0.3)]"
            />
          </Reveal>
        </div>
        <div className="space-y-6">
          <Reveal>
            <p className="font-heading text-3xl leading-snug sm:text-4xl">{about.intro}</p>
          </Reveal>
          <Reveal delay={80}>
            <ReadMore collapsedClassName="max-h-[12.5rem] lg:max-h-none">
              <div className="space-y-6">
                {about.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-lg leading-relaxed text-ink/65">
                    {paragraph}
                  </p>
                ))}
              </div>
            </ReadMore>
          </Reveal>
        </div>
      </section>

      <section className="container-page section-y pt-0">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <SectionHeading
              eyebrow="Tratamentos"
              title={
                <>
                  Cuidado para <Accent>cada sorriso</Accent>
                </>
              }
            />
          </Reveal>
          <PillLink href="/catalogo" variant="ghost">
            Ver todos
          </PillLink>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.slice(0, 3).map((treatment, index) => (
            <Reveal as="li" key={treatment.slug} delay={index * 120}>
              <TreatmentCard treatment={treatment} />
            </Reveal>
          ))}
        </ul>
      </section>

      <section id="casos" className="border-y border-ink/10 bg-white">
        <div className="container-page section-y">
          <Reveal className="mb-14">
            <SectionHeading
              eyebrow="Antes e depois"
              title={
                <>
                  Resultados <Accent>reais</Accent>
                </>
              }
              description="Casos atendidos pela Dra. Laura Helena. Arraste a linha sobre a foto para comparar."
            />
          </Reveal>
          <Reveal delay={120}>
            <CasesCarousel />
          </Reveal>
        </div>
      </section>

      <ReviewsSection />

      <section className="container-page section-y">
        <div className="grid overflow-hidden rounded-[2.5rem] bg-ink text-paper lg:grid-cols-2">
          <div className="relative min-h-96 overflow-hidden lg:min-h-full">
            <Image
              src={surgery.image.src}
              alt={surgery.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="parallax object-cover"
            />
          </div>
          <div className="p-8 sm:p-14 lg:py-20">
            <Reveal>
              <Eyebrow className="text-paper/60">Cirurgia e biossegurança</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 text-5xl sm:text-6xl">
                Segurança <Accent>em cada etapa</Accent>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <ReadMore collapsedClassName="max-h-[6.5rem] lg:max-h-none" buttonClassName="text-brand" className="mt-6">
                <p className="leading-relaxed text-paper/65">{surgery.description}</p>
              </ReadMore>
            </Reveal>
            <ul className="mt-10 space-y-4">
              {safetyPoints.map((point, index) => (
                <Reveal as="li" key={point} delay={300 + index * 100} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand text-ink">
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-paper/85">{point}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ContactSection />

      <CtaBanner />
    </>
  )
}
