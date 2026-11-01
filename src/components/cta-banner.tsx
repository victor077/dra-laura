import Image from "next/image"

import { WhatsappIcon } from "@/components/brand-icons"
import { PillLink } from "@/components/pill-link"
import { Reveal } from "@/components/reveal"
import { site, whatsappUrl } from "@/lib/site"

type CtaBannerProps = {
  title?: React.ReactNode
  description?: string
  message?: string
}

export function CtaBanner({
  title = (
    <>
      Vamos cuidar do seu <span className="italic">sorriso?</span>
    </>
  ),
  description = "Chame no WhatsApp, conte o que você precisa e agende uma avaliação.",
  message,
}: CtaBannerProps) {
  return (
    <section className="container-page py-16 sm:py-24">
      <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-[linear-gradient(135deg,#d9c391,var(--brand)_55%,#a98a4b)] px-6 py-14 text-ink sm:px-14 sm:py-20">
        <Image
          src={site.monogram.src}
          alt=""
          width={site.monogram.width}
          height={site.monogram.height}
          className="absolute -right-16 -bottom-10 -z-10 w-[28rem] max-w-none opacity-30 brightness-[2.2] saturate-0"
        />
        <Reveal>
          <h2 className="max-w-3xl text-5xl sm:text-7xl">{title}</h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-6 max-w-xl text-lg text-ink/75">{description}</p>
        </Reveal>
        <Reveal delay={240}>
          <PillLink
            href={whatsappUrl(message)}
            external
            variant="ink"
            icon={<WhatsappIcon className="size-4" />}
            className="mt-10 h-14 text-base"
          >
            Chamar no WhatsApp
          </PillLink>
        </Reveal>
      </div>
    </section>
  )
}
