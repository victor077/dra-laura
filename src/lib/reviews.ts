const placeId = "ChIJ6W_XeK17zpQRiGm7rmHHE2c"

/* Nota e total conferidos à mão no perfil do Google; atualizar quando entrarem avaliações novas */
export const googleReviews = {
  rating: 5,
  count: 5,
  url: `https://www.google.com/maps/place/?q=place_id:${placeId}`,
  writeUrl: `https://search.google.com/local/writereview?placeid=${placeId}`,
}

export type Testimonial = {
  name: string
  text: string
}

/* Copiados do Google Maps; nome abreviado para preservar o paciente */
export const testimonials: Testimonial[] = [
  {
    name: "Rosemeire S.",
    text: "Profissional excepcional! Fiz meu tratamento com a Dra. Laura Helena e o resultado superou todas as minhas expectativas. Super técnica, detalhista, explica cada etapa do procedimento com muita clareza e paciência. Dá para ver o amor que ela tem pelo que faz. Excelente profissional!",
  },
  {
    name: "Nathalia",
    text: "Excelente clínica odontológica! Atendimento de qualidade e ambiente acolhedor. É nítido o cuidado e a dedicação com cada paciente. Recomendo para quem busca confiança, qualidade e um ótimo atendimento.",
  },
  {
    name: "Rafael P.",
    text: "Excelente atendimento, a Dra. Laura se mostrou super competente e explicou todo o procedimento, os cuidados pós procedimento e demais dúvidas.",
  },
  {
    name: "Amanda B.",
    text: "Ótimo atendimento, doutora Laura foi super atenciosa. Tudo organizado, muito limpo, super recomendo.",
  },
  {
    name: "Luana V.",
    text: "Ótimo atendimento! A Dra Laura foi muito atenciosa, cuidadosa e simpática. Gostei bastante da experiência. Recomendo!",
  },
]
