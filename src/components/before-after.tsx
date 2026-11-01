"use client"

import Image from "next/image"
import { useRef, useState } from "react"
import { ChevronsLeftRight } from "lucide-react"

import { cn } from "@/lib/utils"

type BeforeAfterProps = {
  src: string
  width: number
  height: number
  alt: string
  sizes: string
  seamTrim?: number
  className?: string
}

const keySteps: Record<string, number> = { ArrowLeft: -5, ArrowDown: -5, ArrowRight: 5, ArrowUp: 5 }

/*
 * Espera uma montagem vertical: antes na metade de cima, depois na de baixo.
 * `seamTrim` corta essa fração da altura nas bordas de cada metade (marca d'água e amostras de cor ficam na divisão);
 * o corte é igual em cima e embaixo para as duas metades continuarem alinhadas.
 */
export function BeforeAfter({ src, width, height, alt, sizes, seamTrim = 0.085, className }: BeforeAfterProps) {
  const visible = 0.5 - 2 * seamTrim
  const offset = (start: number) => `${(-start / visible) * 100}%`
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState(50)

  function moveTo(clientX: number) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    setPosition(Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100)))
  }

  function onKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Home") setPosition(0)
    else if (event.key === "End") setPosition(100)
    else if (keySteps[event.key]) setPosition((value) => Math.min(100, Math.max(0, value + keySteps[event.key])))
    else return
    event.preventDefault()
  }

  return (
    <div
      ref={ref}
      data-no-drag
      className={cn("relative cursor-ew-resize touch-pan-y overflow-hidden bg-sand select-none", className)}
      style={{ aspectRatio: `${width} / ${height * visible}` }}
      onPointerDown={(event) => {
        event.currentTarget.setPointerCapture(event.pointerId)
        if (event.pointerType !== "touch") moveTo(event.clientX)
      }}
      onPointerMove={(event) => {
        if (event.currentTarget.hasPointerCapture(event.pointerId)) moveTo(event.clientX)
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        draggable={false}
        className="absolute inset-x-0 h-auto w-full max-w-none"
        style={{ top: offset(0.5 + seamTrim) }}
      />
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }} aria-hidden="true">
        <Image
          src={src}
          alt=""
          width={width}
          height={height}
          sizes={sizes}
          draggable={false}
          className="absolute inset-x-0 h-auto w-full max-w-none"
          style={{ top: offset(seamTrim) }}
        />
      </div>

      <span className="pointer-events-none absolute top-4 left-4 rounded-full bg-ink/60 px-3 py-1 text-xs font-medium tracking-[0.2em] text-white uppercase backdrop-blur">
        Antes
      </span>
      <span className="pointer-events-none absolute top-4 right-4 rounded-full bg-white/75 px-3 py-1 text-xs font-medium tracking-[0.2em] text-ink uppercase backdrop-blur">
        Depois
      </span>

      <div className="pointer-events-none absolute inset-y-0 w-px bg-white shadow-[0_0_12px_rgb(0_0_0/0.25)]" style={{ left: `${position}%` }}>
        <span
          role="slider"
          tabIndex={0}
          aria-label="Comparar antes e depois"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(position)}
          onKeyDown={onKeyDown}
          className="pointer-events-auto absolute top-1/2 left-1/2 flex size-12 -translate-1/2 items-center justify-center rounded-full bg-white text-ink shadow-lg outline-none focus-visible:ring-4 focus-visible:ring-brand/50"
        >
          <ChevronsLeftRight className="size-5" />
        </span>
      </div>
    </div>
  )
}
