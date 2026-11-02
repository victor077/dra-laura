"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"
import { shadeGuide } from "@/lib/cases"
import { cn } from "@/lib/utils"

export function ShadeCarousel({ className }: { className?: string }) {
  const [api, setApi] = useState<CarouselApi>()
  const [selected, setSelected] = useState(0)
  const { shades } = shadeGuide

  useEffect(() => {
    if (!api) return
    const onSelect = () => setSelected(api.selectedScrollSnap())
    api.on("select", onSelect)
    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  return (
    <div className={className}>
      <div className="grid grid-cols-4 gap-1 rounded-full border border-ink/10 p-1" role="tablist" aria-label="Escolher tom">
        {shades.map((shade, index) => (
          <button
            key={shade.code}
            type="button"
            role="tab"
            aria-selected={selected === index}
            onClick={() => api?.scrollTo(index)}
            className={cn(
              "h-10 rounded-full font-heading text-xl transition-colors",
              selected === index ? "bg-ink text-paper" : "text-ink/60 hover:text-ink"
            )}
          >
            {shade.code}
          </button>
        ))}
      </div>

      <Carousel setApi={setApi} opts={{ loop: true }} aria-label="Escala de cor" className="mt-4">
        <CarouselContent>
          {shades.map((shade, index) => (
            <CarouselItem key={shade.code} aria-label={`${index + 1} de ${shades.length}`}>
              <Image
                src={shade.image.src}
                alt={`Sorriso no tom ${shade.code}: ${shade.label.toLowerCase()}`}
                width={shade.image.width}
                height={shade.image.height}
                sizes="(min-width: 640px) 36rem, 100vw"
                className="h-auto w-full rounded-[1.5rem] bg-black"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <p className="mt-4 flex items-baseline gap-3" aria-live="polite">
        <span className="font-heading text-3xl text-brand">{shades[selected].code}</span>
        <span className="text-ink/70">{shades[selected].label}</span>
      </p>
    </div>
  )
}
