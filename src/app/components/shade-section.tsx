import Image from "next/image"

import { WhatsappIcon } from "@/components/brand-icons"
import { PillLink } from "@/components/pill-link"
import { ReadMore } from "@/components/read-more"
import { Reveal } from "@/components/reveal"
import { Accent, SectionHeading } from "@/components/section-heading"
import { shadeGuide } from "@/lib/cases"
import { whatsappUrl } from "@/lib/site"
import { ShadeCarousel } from "./shade-carousel"

export function ShadeSection() {
  return (
    <section id="tons" className="container-page section-y grid items-center gap-20 pb-0 lg:grid-cols-[1fr_1.15fr]">
      <Reveal className="mx-auto hidden w-full max-w-md lg:block">
        <div className="overflow-hidden rounded-[2rem] bg-black pb-6">
          <Image
            src={shadeGuide.image.src}
            alt={shadeGuide.alt}
            width={shadeGuide.image.width}
            height={shadeGuide.image.height}
            sizes="28rem"
            className="h-auto w-full"
          />
        </div>
      </Reveal>

      <div>
        <Reveal>
          <SectionHeading
            eyebrow="Escala de cor"
            title={
              <>
                Escolha o tom <Accent>do seu sorriso</Accent>
              </>
            }
          />
        </Reveal>
        <Reveal delay={100}>
          <ReadMore collapsedClassName="max-h-[6.5rem] lg:max-h-none" className="mt-6">
            <p className="text-lg leading-relaxed text-ink/65">{shadeGuide.description}</p>
          </ReadMore>
        </Reveal>
        <Reveal delay={200} className="lg:hidden">
          <ShadeCarousel className="mt-8 max-w-xl" />
        </Reveal>
        <ul className="mt-8 hidden gap-px overflow-hidden rounded-[2rem] border border-ink/10 bg-ink/10 lg:grid lg:grid-cols-2">
          {shadeGuide.shades.map((shade, index) => (
            <Reveal as="li" key={shade.code} delay={200 + index * 100} className="flex items-center gap-4 bg-paper px-6 py-5">
              <span className="font-heading text-3xl text-brand">{shade.code}</span>
              <span className="text-sm text-ink/70">{shade.label}</span>
            </Reveal>
          ))}
        </ul>
        <Reveal delay={600} className="mt-8">
          <PillLink
            href={whatsappUrl("Olá, Dra. Laura! Vi a escala de cor no site e gostaria de saber qual tom combina com o meu sorriso.")}
            external
            variant="ink"
            icon={<WhatsappIcon className="size-4" />}
          >
            Qual tom combina comigo?
          </PillLink>
        </Reveal>
      </div>
    </section>
  )
}
