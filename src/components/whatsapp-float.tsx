import { WhatsappIcon } from "@/components/brand-icons"
import { whatsappUrl } from "@/lib/site"

export function WhatsappFloat() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      className="fixed right-5 bottom-5 z-50 flex size-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg ring-4 ring-white transition-transform hover:scale-110"
    >
      <WhatsappIcon className="size-7" />
    </a>
  )
}
