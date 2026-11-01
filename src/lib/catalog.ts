import { Baby, Gem, Smile, Sparkles, Stethoscope, Syringe, type LucideIcon } from "lucide-react"

export type Category = "estetica" | "prevencao" | "reabilitacao" | "cirurgia"

export type Treatment = {
  slug: string
  name: string
  category: Category
  icon: LucideIcon
  summary: string
  duration?: string
}

export const categoryLabels: Record<Category | "all", string> = {
  all: "Todos",
  estetica: "Estética",
  prevencao: "Prevenção",
  reabilitacao: "Reabilitação",
  cirurgia: "Cirurgia",
}

/* Lista montada a partir dos casos clínicos enviados; confirmar com a Dra. Laura se há outros tratamentos */
export const treatments: Treatment[] = [
  {
    slug: "clareamento",
    name: "Clareamento",
    category: "estetica",
    icon: Sparkles,
    summary: "Dentes mais claros e luminosos, com planejamento personalizado e segurança para a gengiva.",
  },
  {
    slug: "facetas-resina",
    name: "Facetas em resina",
    category: "estetica",
    icon: Gem,
    summary: "Corrigem cor, formato e pequenas assimetrias preservando a estrutura natural dos dentes.",
  },
  {
    slug: "restauracao-estetica",
    name: "Restauração estética",
    category: "reabilitacao",
    icon: Smile,
    summary: "Devolve forma e cor natural a dentes com desgastes ou pequenas imperfeições.",
  },
  {
    slug: "odontopediatria",
    name: "Reabilitação pediátrica",
    category: "reabilitacao",
    icon: Baby,
    summary: "Tratamento cuidadoso e minimamente invasivo para devolver função e confiança ao sorriso das crianças.",
  },
  {
    slug: "cirurgia",
    name: "Cirurgia oral",
    category: "cirurgia",
    icon: Syringe,
    summary: "Procedimentos planejados com rigor técnico e biossegurança, priorizando conforto e segurança.",
  },
  {
    slug: "avaliacao",
    name: "Avaliação",
    category: "prevencao",
    icon: Stethoscope,
    summary: "Consulta completa para entender a saúde da sua boca e montar o plano de tratamento.",
  },
]

export function treatmentMessage(treatment: Treatment) {
  return `Olá! Vim pelo site e quero saber mais sobre ${treatment.name.toLowerCase()}.`
}
