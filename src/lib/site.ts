export const site = {
  name: "Dra. Laura Helena",
  role: "Cirurgiã-dentista",
  cro: "CRO 169695",
  slogan: "Cuidado que aparece no sorriso",
  logo: { src: "/images/logo.jpg", width: 500, height: 500 },
  address: {
    street: "Endereço a confirmar",
    district: "",
    city: "São Paulo - SP",
  },
  whatsapp: {
    number: "5511900000000",
    display: "(11) 90000-0000",
  },
  instagram: {
    handle: "@dralaura",
    url: "https://www.instagram.com/",
  },
}

export const fullAddress = [site.address.street, site.address.district, site.address.city].filter(Boolean).join(" - ")

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`

const defaultMessage = `Olá, ${site.name}! Vim pelo site e quero agendar uma avaliação.`

export function whatsappUrl(message: string = defaultMessage) {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`
}

export const navLinks = [
  { href: "/", label: "Início" },
  { href: "/catalogo", label: "Catálogo" },
]
