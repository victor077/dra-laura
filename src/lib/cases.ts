export type ClinicalCase = {
  slug: string
  title: string
  treatment: string
  kind: "antes-depois" | "foto"
  image: { src: string; width: number; height: number }
  alt: string
  description: string
}

/* Em "antes-depois" a foto é uma montagem com o antes na metade de cima e o depois na de baixo; `treatment` aponta para o slug em `catalog.ts` */
export const clinicalCases: ClinicalCase[] = [
  {
    slug: "facetas-resina",
    title: "Facetas em resina composta",
    treatment: "facetas-resina",
    kind: "antes-depois",
    image: { src: "/images/casos/facetas-resina.jpg", width: 1024, height: 1280 },
    alt: "Antes e depois de facetas em resina: dentes amarelados e assimétricos dão lugar a um sorriso branco, alinhado e uniforme",
    description:
      "A transformação deste sorriso com facetas em resina composta demonstra como este procedimento minimamente invasivo é capaz de devolver a harmonia, a cor e a simetria de forma totalmente personalizada. O paciente apresentava insatisfação com a coloração amarelada e com pequenas assimetrias de formato, o que limitava a harmonia do sorriso. Para solucionar o caso, optamos pelas facetas em resina composta por ser uma técnica conservadora que preserva a estrutura natural dos dentes, permitindo esculpir cada detalhe diretamente em consultório com um resultado estético imediato, excelente polimento e brilho natural. Como se pode ver no resultado final, o sorriso ganhou dentes mais alinhados, proporções equilibradas com os traços do rosto e uma tonalidade uniforme que elevou significativamente a confiança e o bem-estar do paciente.",
  },
  {
    slug: "clareamento-1",
    title: "Clareamento dental",
    treatment: "clareamento",
    kind: "antes-depois",
    image: { src: "/images/casos/clareamento-1.jpg", width: 1080, height: 1350 },
    alt: "Antes e depois de clareamento dental em foto aproximada, com amostras de cor mostrando a mudança de amarelado para claro",
    description:
      "O clareamento dental é um dos procedimentos mais procurados para quem deseja renovar o sorriso, devolver a luminosidade natural aos dentes e elevar a autoestima. Neste caso clínico, podemos observar a nítida evolução entre o antes e o depois, onde os dentes que apresentavam uma tonalidade mais amarelada e opaca deram lugar a um sorriso visivelmente mais claro, brilhante e harmonioso, mantendo sempre um aspecto natural e saudável. Vale ressaltar que cada planejamento é único e personalizado para garantir a total segurança dos tecidos gengivais e a preservação da estrutura dental, alcançando o tom ideal de forma confortável e eficaz.",
  },
  {
    slug: "clareamento-2",
    title: "Clareamento dental",
    treatment: "clareamento",
    kind: "antes-depois",
    image: { src: "/images/casos/clareamento-2.jpg", width: 1024, height: 1280 },
    alt: "Antes e depois de clareamento dental em sorriso masculino, com amostras de cor mostrando dentes mais claros após o tratamento",
    description:
      "Um sorriso renovado tem o poder de transformar completamente a expressão de uma pessoa, transmitindo mais confiança, bem-estar e jovialidade. Na imagem, é possível acompanhar a evolução deste caso de clareamento dental, que fez toda a diferença na estética do paciente. A tonalidade inicial mais amarelada e envelhecida deu lugar a dentes muito mais claros, luminosos e com um acabamento incrivelmente natural. Mais do que a estética, este procedimento é planejado com todo o rigor técnico para assegurar a saúde dos tecidos gengivais e a integridade da estrutura dentária, garantindo um resultado duradouro, seguro e harmonioso com o rosto.",
  },
  {
    slug: "restauracao-estetica",
    title: "Restauração estética em resina",
    treatment: "restauracao-estetica",
    kind: "antes-depois",
    image: { src: "/images/casos/restauracao-estetica.jpg", width: 1024, height: 1280 },
    alt: "Antes e depois de restauração estética: dente da frente com desgaste e lascado reconstruído com forma e cor naturais",
    description:
      "Pequenas imperfeições ou desgastes dentários podem afetar a autoestima, mas podem ser facilmente corrigidos. Como mostra a imagem, a restauração estética com resina composta é um procedimento rápido e minimamente invasivo que devolve a forma e a cor natural ao dente. Por meio da técnica direta, reconstruímos o elemento dentário afetado, garantindo um resultado harmonioso, duradouro e totalmente imperceptível.",
  },
  {
    slug: "reabilitacao-pediatrica",
    title: "Reabilitação oral pediátrica",
    treatment: "odontopediatria",
    kind: "antes-depois",
    image: { src: "/images/casos/reabilitacao-pediatrica.jpg", width: 1080, height: 1350 },
    alt: "Antes e depois de reabilitação oral em criança: dentes da frente com lesões e manchas restaurados com resina na cor natural",
    description:
      "O presente caso clínico demonstra a importância de uma intervenção especializada na reabilitação oral pediátrica. O paciente apresentava um comprometimento estético e funcional nos dentes anteriores devido a lesões e alterações de cor, o que afetava o seu bem-estar. Através de técnicas minimamente invasivas e restaurações estéticas em resina composta, foi possível restabelecer a integridade anatômica e a harmonia do sorriso. Como se pode verificar no antes e depois, o tratamento devolveu com sucesso a função e a autoconfiança ao paciente.",
  },
  {
    slug: "cirurgia",
    title: "Cirurgia oral",
    treatment: "cirurgia",
    kind: "foto",
    image: { src: "/images/casos/cirurgia.jpg", width: 1200, height: 1600 },
    alt: "Duas profissionais paramentadas com avental, touca, máscara e óculos durante procedimento cirúrgico em ambiente estéril",
    description:
      "Cada procedimento cirúrgico na nossa clínica é planejado com o máximo rigor técnico, visando não apenas a resolução do caso clínico, mas fundamentalmente o conforto, a segurança e o bem-estar do paciente do início ao fim. Contamos com um planejamento personalizado para garantir abordagens precisas e minimamente invasivas, aliadas a um rigoroso controle de biossegurança que assegura um ambiente totalmente estéril e confiável. Unindo infraestrutura moderna, tecnologia de ponta e um atendimento humanizado, o nosso compromisso é devolver a qualidade de vida e a saúde bucal aos nossos pacientes, proporcionando uma experiência segura e acolhedora em todas as etapas da cirurgia.",
  },
]

export const comparisonCases = clinicalCases.filter((item) => item.kind === "antes-depois")

/* Montagem vertical com o mesmo sorriso em quatro tons, do mais branco (BL1) ao mais natural (B1); cada tom também tem um recorte 824×280 da sua faixa, com a etiqueta, para o carrossel do celular */
export const shadeGuide = {
  image: { src: "/images/casos/escala-de-cor.jpg", width: 824, height: 1024 },
  alt: "Mesmo sorriso mostrado em quatro tons de cor, de cima para baixo: BL1, BL2, BL4 e B1, do branco mais intenso ao tom mais natural",
  description:
    "Na estética do sorriso, a cor é escolhida junto com você. A escala mostra como o mesmo sorriso fica em tons diferentes: dos brancos mais intensos aos mais naturais. Na avaliação, comparamos as opções com o tom da sua pele, o formato do rosto e o resultado que você imagina, para chegar a um sorriso bonito e que combine com você.",
  shades: [
    { code: "BL1", label: "O branco mais intenso da escala", image: { src: "/images/casos/escala-de-cor-bl1.jpg", width: 824, height: 280 } },
    { code: "BL2", label: "Branco luminoso, um pouco mais suave", image: { src: "/images/casos/escala-de-cor-bl2.jpg", width: 824, height: 280 } },
    { code: "BL4", label: "Branco natural, discreto e harmonioso", image: { src: "/images/casos/escala-de-cor-bl4.jpg", width: 824, height: 280 } },
    { code: "B1", label: "O tom mais claro dos dentes naturais", image: { src: "/images/casos/escala-de-cor-b1.jpg", width: 824, height: 280 } },
  ],
}
