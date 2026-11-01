export const site = {
  name: "Dra. Laura Helena",
  role: "Cirurgiã-dentista",
  cro: "CRO 169695",
  slogan: "Cuidado que aparece no sorriso",
  logo: { src: "/images/logo.png", width: 399, height: 348 },
  monogram: { src: "/images/logo-monograma.png", width: 330, height: 212 },
  address: {
    street: "Rua Dom João VI, 15",
    complement: "Sala 3",
    city: "Ferraz de Vasconcelos",
    state: "SP",
    cep: "08502-010",
  },
  hours: [
    { days: "Segunda a sexta", time: "9h às 19h" },
    { days: "Sábado", time: "9h às 15h" },
    { days: "Domingo", time: "Fechado" },
  ],
  whatsapp: {
    number: "5511925922625",
    display: "(11) 92592-2625",
  },
  instagram: {
    handle: "@dra.laurahelena",
    url: "https://www.instagram.com/dra.laurahelena/",
  },
}

const { street, complement, city, state, cep } = site.address

export const addressLines = [`${street} - ${complement}`, `${city} - ${state}, CEP ${cep}`]

export const fullAddress = addressLines.join(", ")

const mapsQuery = encodeURIComponent(`${street}, ${city} - ${state}, ${cep}`)

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`

export const mapsEmbedUrl = `https://maps.google.com/maps?q=${mapsQuery}&output=embed`

const defaultMessage = `Olá, ${site.name}! Vim pelo site e quero agendar uma avaliação.`

export function whatsappUrl(message: string = defaultMessage) {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`
}

export const navLinks = [
  { href: "/", label: "Início" },
  { href: "/#sobre", label: "Sobre" },
  { href: "/catalogo", label: "Tratamentos" },
  { href: "/#casos", label: "Antes e depois" },
  { href: "/#avaliacoes", label: "Avaliações" },
  { href: "/#contato", label: "Contato" },
]
