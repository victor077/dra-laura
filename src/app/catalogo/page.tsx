import type { Metadata } from "next"

import { CtaBanner } from "@/components/cta-banner"
import { Accent, Eyebrow } from "@/components/section-heading"
import { CatalogList } from "./components/catalog-list"

export const metadata: Metadata = {
  title: "Catálogo",
  description: "Catálogo de tratamentos odontológicos da Dra. Laura Helena.",
}

export default function CatalogoPage() {
  return (
    <>
      <section className="container-page pt-36 pb-12 sm:pt-44">
        <Eyebrow>Catálogo</Eyebrow>
        <h1 className="mt-6 max-w-4xl text-6xl sm:text-8xl">
          Tratamentos <Accent>para cada sorriso</Accent>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/65">
          Escolha um tratamento para tirar dúvidas ou agendar pelo WhatsApp.
        </p>
      </section>

      <section className="container-page pb-16">
        <CatalogList />
      </section>

      <CtaBanner />
    </>
  )
}
