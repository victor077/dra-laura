import { Star } from "lucide-react"

import { GoogleIcon } from "@/components/brand-icons"
import { PillLink } from "@/components/pill-link"
import { Reveal } from "@/components/reveal"
import { Accent, SectionHeading } from "@/components/section-heading"
import { googleReviews, testimonials } from "@/lib/reviews"
import { cn } from "@/lib/utils"

function Stars({ className }: { className?: string }) {
  return (
    <span className={cn("flex gap-0.5 text-brand", className)} aria-label={`${googleReviews.rating} de 5 estrelas`}>
      {Array.from({ length: 5 }, (_, index) => (
        <Star key={index} className="aspect-square h-full w-auto fill-current" strokeWidth={0} />
      ))}
    </span>
  )
}

export function ReviewsSection() {
  const rating = googleReviews.rating.toFixed(1).replace(".", ",")

  return (
    <section id="avaliacoes" className="section-y overflow-hidden">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
        <div>
          <Reveal>
            <SectionHeading
              eyebrow="Avaliações"
              title={
                <>
                  O que dizem <Accent>os pacientes</Accent>
                </>
              }
            />
          </Reveal>
          <Reveal delay={100} className="mt-10 flex items-center gap-5 rounded-[2rem] border border-ink/10 bg-white p-6">
            <span className="font-heading text-6xl leading-none">{rating}</span>
            <div className="space-y-2">
              <Stars className="h-5" />
              <p className="flex items-center gap-2 text-sm text-ink/60">
                <GoogleIcon className="size-4" />
                {googleReviews.count} avaliações no Google
              </p>
            </div>
          </Reveal>
          <Reveal delay={200} className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <PillLink href={googleReviews.writeUrl} external variant="ink" icon={<GoogleIcon className="size-4" />}>
              Avaliar no Google
            </PillLink>
            <PillLink href={googleReviews.url} external variant="ghost">
              Ver no Google
            </PillLink>
          </Reveal>
        </div>

        <ul className="-mx-5 flex snap-x snap-mandatory gap-4 scroll-px-5 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:block sm:columns-2 sm:overflow-visible sm:px-0 sm:pb-0">
          {testimonials.map((item, index) => (
            <Reveal
              as="li"
              key={item.name}
              delay={index * 100}
              className="w-[85%] shrink-0 snap-start break-inside-avoid sm:mb-4 sm:w-auto"
            >
              <figure className="flex h-full flex-col rounded-[2rem] border border-ink/10 bg-white p-7">
                <Stars className="h-4" />
                <blockquote className="mt-5 flex-1 leading-relaxed text-ink/75">“{item.text}”</blockquote>
                <figcaption className="mt-6 flex items-center justify-between gap-3 border-t border-ink/10 pt-5">
                  <span className="font-heading text-xl">{item.name}</span>
                  <span className="flex items-center gap-1.5 text-xs text-ink/45">
                    <GoogleIcon className="size-3.5" />
                    Google
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
