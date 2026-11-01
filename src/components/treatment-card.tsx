import { ArrowUpRight, Clock } from "lucide-react"

import { categoryLabels, treatmentMessage, type Treatment } from "@/lib/catalog"
import { whatsappUrl } from "@/lib/site"

export function TreatmentCard({ treatment }: { treatment: Treatment }) {
  const Icon = treatment.icon
  return (
    <a
      href={whatsappUrl(treatmentMessage(treatment))}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col rounded-[2rem] border border-ink/10 bg-white p-7 transition hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_20px_40px_-20px_rgb(29_42_53/0.25)]"
    >
      <div className="flex items-start justify-between">
        <span className="flex size-12 items-center justify-center rounded-2xl bg-brand-soft text-brand">
          <Icon className="size-6" />
        </span>
        <span className="flex size-10 items-center justify-center rounded-full bg-ink/5 transition group-hover:rotate-45 group-hover:bg-brand group-hover:text-white">
          <ArrowUpRight className="size-4" />
        </span>
      </div>
      <p className="mt-8 text-xs font-semibold tracking-[0.2em] text-ink/45 uppercase">
        {categoryLabels[treatment.category]}
      </p>
      <h3 className="mt-2 text-3xl">{treatment.name}</h3>
      <p className="mt-3 flex-1 text-ink/65">{treatment.summary}</p>
      {treatment.duration && (
        <p className="mt-6 inline-flex items-center gap-2 text-sm text-ink/50">
          <Clock className="size-4" />
          {treatment.duration}
        </p>
      )}
    </a>
  )
}
