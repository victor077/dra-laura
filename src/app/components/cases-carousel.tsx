"use client"

import { useEffect, useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { BeforeAfter } from "@/components/before-after"
import { WhatsappIcon } from "@/components/brand-icons"
import { PillLink } from "@/components/pill-link"
import { ReadMore } from "@/components/read-more"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"
import { comparisonCases } from "@/lib/cases"
import { whatsappUrl } from "@/lib/site"
import { cn } from "@/lib/utils"

const pad = (value: number) => String(value).padStart(2, "0")

export function CasesCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const [selected, setSelected] = useState(0)

  useEffect(() => {
    if (!api) return
    const onSelect = () => setSelected(api.selectedScrollSnap())
    api.on("select", onSelect)
    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  return (
    <Carousel
      setApi={setApi}
      opts={{ loop: true, watchDrag: (_, event) => !(event.target as Element).closest("[data-no-drag]") }}
      aria-label="Casos de antes e depois"
    >
      <CarouselContent>
        {comparisonCases.map((item, index) => (
          <CarouselItem key={item.slug} aria-label={`${index + 1} de ${comparisonCases.length}`}>
            <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
              <BeforeAfter
                src={item.image.src}
                width={item.image.width}
                height={item.image.height}
                alt={item.alt}
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="rounded-[2rem]"
              />
              <div>
                <p className="font-heading text-2xl text-brand">{pad(index + 1)}</p>
                <h3 className="mt-3 text-4xl sm:text-5xl">{item.title}</h3>
                <ReadMore collapsedClassName="max-h-[6.5rem] lg:max-h-[13rem]" className="mt-5">
                  <p className="leading-relaxed text-ink/65">{item.description}</p>
                </ReadMore>
                <PillLink
                  href={whatsappUrl(`Olá! Vi o caso de ${item.title.toLowerCase()} no site e quero agendar uma avaliação.`)}
                  external
                  variant="ghost"
                  icon={<WhatsappIcon className="size-4" />}
                  className="mt-8"
                >
                  Quero agendar
                </PillLink>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="mt-10 flex items-center justify-between gap-6 border-t border-ink/10 pt-6">
        <div className="flex items-center gap-2" role="tablist" aria-label="Escolher caso">
          {comparisonCases.map((item, index) => (
            <button
              key={item.slug}
              type="button"
              role="tab"
              aria-selected={selected === index}
              aria-label={item.title}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-500",
                selected === index ? "w-10 bg-brand" : "w-4 bg-ink/15 hover:bg-ink/30"
              )}
            />
          ))}
        </div>
        <div className="flex items-center gap-4">
          <p className="text-sm text-ink/50 tabular-nums">
            {pad(selected + 1)} / {pad(comparisonCases.length)}
          </p>
          <button
            type="button"
            onClick={() => api?.scrollPrev()}
            aria-label="Caso anterior"
            className="flex size-12 items-center justify-center rounded-full border border-ink/15 transition hover:border-brand hover:text-brand-deep"
          >
            <ArrowLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => api?.scrollNext()}
            aria-label="Próximo caso"
            className="flex size-12 items-center justify-center rounded-full bg-ink text-paper transition hover:bg-brand-deep"
          >
            <ArrowRight className="size-5" />
          </button>
        </div>
      </div>
    </Carousel>
  )
}
