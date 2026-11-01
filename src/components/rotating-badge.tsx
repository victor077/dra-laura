import Image from "next/image"

import { cn } from "@/lib/utils"
import { site } from "@/lib/site"

export function RotatingBadge({ className }: { className?: string }) {
  const text = `${site.name} · ${site.role} · ${site.cro} · `
  return (
    <div className={cn("relative flex size-32 items-center justify-center rounded-full bg-paper shadow-[0_20px_40px_-24px_rgb(42_37_31/0.4)]", className)}>
      <svg viewBox="0 0 100 100" className="absolute inset-0 size-full animate-spin-slow" aria-hidden="true">
        <defs>
          <path id="badge-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
        </defs>
        <text className="fill-brand-deep text-[7.4px] tracking-[0.18em] uppercase">
          <textPath href="#badge-circle">{text}</textPath>
        </text>
      </svg>
      <Image src={site.monogram.src} alt="" width={site.monogram.width} height={site.monogram.height} className="w-[38%]" />
    </div>
  )
}
