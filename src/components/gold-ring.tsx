import { cn } from "@/lib/utils"

export function GoldRing({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,var(--brand)_70deg,#f3e3bd_110deg,transparent_180deg)] [mask:radial-gradient(farthest-side,transparent_calc(100%-3px),#000_calc(100%-2px))] blur-[0.5px]",
        className
      )}
    />
  )
}
