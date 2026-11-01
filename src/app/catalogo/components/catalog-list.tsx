"use client"

import { useState } from "react"

import { TreatmentCard } from "@/components/treatment-card"
import { categoryLabels, treatments, type Category } from "@/lib/catalog"
import { cn } from "@/lib/utils"

const filters = ["all", "estetica", "reabilitacao", "cirurgia", "prevencao"] as const satisfies readonly (Category | "all")[]

export function CatalogList() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("all")
  const visible = treatments.filter((treatment) => filter === "all" || treatment.category === filter)

  return (
    <>
      <div className="flex gap-1 overflow-x-auto [scrollbar-width:none]" role="tablist" aria-label="Categorias">
        {filters.map((value) => (
          <button
            key={value}
            type="button"
            role="tab"
            aria-selected={filter === value}
            onClick={() => setFilter(value)}
            className={cn(
              "shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors",
              filter === value ? "bg-ink text-paper" : "text-ink/60 hover:text-ink"
            )}
          >
            {categoryLabels[value]}
          </button>
        ))}
      </div>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((treatment) => (
          <li key={treatment.slug}>
            <TreatmentCard treatment={treatment} />
          </li>
        ))}
      </ul>
    </>
  )
}
