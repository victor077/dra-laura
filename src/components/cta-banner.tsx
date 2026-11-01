import { WhatsappIcon } from "@/components/brand-icons"
import { PillLink } from "@/components/pill-link"
import { whatsappUrl } from "@/lib/site"

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
      <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-brand px-6 py-14 text-white sm:px-14 sm:py-20">
        <div className="absolute -top-24 -right-24 -z-10 size-96 rounded-full bg-white/10 blur-2xl" aria-hidden="true" />
        <h2 className="max-w-3xl text-5xl sm:text-7xl">{title}</h2>
        <p className="mt-6 max-w-xl text-lg text-white/80">{description}</p>
        <PillLink
          href={whatsappUrl(message)}
          external
          variant="ink"
          icon={<WhatsappIcon className="size-4" />}
          className="mt-10 h-14 text-base"
        >
          Chamar no WhatsApp
        </PillLink>
      </div>
    </section>
  )
}
