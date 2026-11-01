<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Dra. Laura - Visão geral do projeto

> Descrição do repositório voltada para LLMs. Leia antes de começar qualquer tarefa.
> Mantenha fiel ao código; atualize quando estrutura, rotas, stack ou deploy mudarem.

## 1. O que é

Site catálogo da **Dra. Laura**, cirurgiã-dentista. Mostra os tratamentos e leva o visitante ao WhatsApp para tirar dúvidas ou agendar uma avaliação. Não há backend, banco de dados ou API: todo "envio" é um link `wa.me` com mensagem pré-preenchida.

Nome (Dra. Laura Helena, CRO 169695), texto "Sobre", casos clínicos, fotos, paleta (dourado e branco do logo), endereço (Ferraz de Vasconcelos - SP), horário, WhatsApp e Instagram (`@dra.laurahelena`) já são reais; a lista de tratamentos foi montada a partir dos casos e precisa de confirmação.

Todo o conteúdo e a UI são em **português do Brasil** (`<html lang="pt-BR">`), com tom acolhedor e direto.

## 2. Stack

Mesma arquitetura do site Scooby Fight (`victor077/scoobyfight`).

| Item | Versão / detalhe |
|------|------------------|
| Framework | Next.js 16 (App Router, React Server Components) |
| React | 19 |
| Linguagem | TypeScript strict, alias `@/*` → `src/*` |
| Estilo | Tailwind CSS v4 (config via CSS em `globals.css`, sem `tailwind.config`) + `tw-animate-css` |
| Componentes | shadcn (estilo `base-nova`) sobre `@base-ui/react`; carrossel do shadcn sobre `embla-carousel-react`; ícones `lucide-react` |
| Formulários | `react-hook-form` (disponível, ainda sem uso) |
| Fontes | `next/font/google`: Jost (sans) e Instrument Serif (títulos e itálico) |
| Node | `.nvmrc` = 20 (`engines` >= 20.9.0) |
| Lint | ESLint 9 flat config com `eslint-config-next` (core-web-vitals + typescript) |

Não há testes automatizados. O código fica no repositório privado [`victor077/dra-laura`](https://github.com/victor077/dra-laura) (branch `main`).

## 3. Estrutura

```
dra-laura/
├── public/images/            # Logo, foto da Dra. e casos/ (antes e depois)
├── src/
│   ├── app/                  # Rotas (App Router)
│   │   ├── layout.tsx        # Fontes, metadata global, Header/Footer/WhatsApp flutuante
│   │   ├── globals.css       # Tema (cores, fontes, utilitários, animações)
│   │   ├── page.tsx          # Home: hero, Sobre, tratamentos, antes e depois, biossegurança, contato, CTA
│   │   ├── components/       # Componentes só da home (cases-carousel.tsx, contact-section.tsx)
│   │   └── catalogo/         # Catálogo com filtro por categoria (components/catalog-list.tsx)
│   ├── components/           # Componentes compartilhados do site
│   │   └── ui/               # Primitivos shadcn (button, carousel)
│   └── lib/                  # Dados e helpers (fonte da verdade do conteúdo)
└── AGENTS.md
```

Convenção: dados e componentes usados por uma única rota ficam **co-localizados** na pasta da rota (`app/<rota>/components/`). O que é compartilhado vai para `src/lib/` e `src/components/`.

## 4. Conteúdo é dado, não markup

| Arquivo | Conteúdo |
|---------|----------|
| `src/lib/site.ts` | Nome, profissão, CRO, logo, endereço, horário (`hours`), WhatsApp, Instagram, `navLinks`, helpers `whatsappUrl()`, `addressLines`, `fullAddress`, `mapsUrl` e `mapsEmbedUrl` |
| `src/lib/catalog.ts` | `treatments: Treatment[]` (slug, nome, categoria, ícone, resumo, duração opcional), `categoryLabels`, `treatmentMessage()` |
| `src/lib/cases.ts` | `clinicalCases: ClinicalCase[]` (foto, `alt`, texto, `kind` e `treatment` apontando para o slug do catálogo) e `comparisonCases` (só os de antes e depois, usados no carrossel). O caso `cirurgia` (`kind: "foto"`) alimenta a seção de biossegurança |
| `src/lib/about.ts` | Texto "Sobre" da Dra. Laura Helena, formação e foto do consultório |
| `src/lib/reviews.ts` | `googleReviews` (nota, total, link do perfil e link "escrever avaliação", ambos pelo Place ID) e `testimonials` (avaliações copiadas do Google Maps, com nome abreviado). Nota e total são atualizados à mão |

Imagens em `public/images/`: `logo.png` e `logo-monograma.png` (só o "LH"), ambos dourados com fundo transparente e gerados a partir do JPEG original; `dra-laura-hero.jpg` (foto do hero, 1600×2000 já recortada em 4:5, servida com `quality={90}` (liberado em `images.qualities` no `next.config.ts`), revelada do RAW `IMG_0036.CR2` com o balanço de branco da câmera e contraste local só na parede para o logo prateado aparecer); `dra-laura-hero-lh.png` (máscara do "LH" da parede, no mesmo enquadramento da foto, usada pelo brilho dourado `animate-gold-sheen` que passa nas letras; se trocar a foto, refaça a máscara); `avatar/dra-laura-perfil.webp` (recorte quadrado 384×384 do avatar, usado no botão do WhatsApp) e `avatar/dra-laura-completo.webp` (avatar inteiro, 864×1152, fundo off-white). O avatar é uma ilustração gerada por IA a partir de fotos dela (jaleco com "LH" dourado no bolso), feita enquanto não há fotos profissionais; não use como se fosse foto real; e `casos/*.jpg` (montagens verticais com o antes na metade de cima e o depois na de baixo, divisão exatamente em 50%, com marca d'água na divisão). A pasta de origem das fotos enviadas pela cliente é `~/Documents/dra-laura`.

Para alterar textos, contato ou tratamentos, edite o dado, não o JSX. A home mostra os três primeiros itens de `treatments`.

## 5. Fluxos

- `whatsappUrl(message?)` em `lib/site.ts` monta o link `wa.me`. Use sempre esse helper.
- Cada `TreatmentCard` abre o WhatsApp com a mensagem de `treatmentMessage()`.
- `WhatsappFloat` aparece em todas as páginas: avatar ilustrado da Dra. num círculo de perfil com borda dourada fixa (sem animação no avatar), selo verde do WhatsApp e balão "Oi! Posso te ajudar?" que aparece no hover/foco e sozinho uma vez (de 3,5 s a 10 s após abrir a página). `CtaBanner` aceita `message` customizada.
- Cada caso do carrossel de antes e depois tem um botão que abre o WhatsApp citando o caso.
- Menu: Início, Sobre (`/#sobre`), Tratamentos (`/catalogo`), Antes e depois (`/#casos`), Avaliações (`/#avaliacoes`, depoimentos do Google com botões "Avaliar no Google" e "Ver no Google"; o rodapé também tem "Avalie no Google") e Contato (`/#contato`, com endereço, horário e mapa do Google embutido via `mapsEmbedUrl`).

## 6. Design system

Definido em `src/app/globals.css` (Tailwind v4 `@theme inline`). Visual clean em dourado e branco, a partir do logo:
- `paper` (#fdfbf7, fundo), `ink` (#2a251f, texto e botões principais), `brand` (#bc9e5c, dourado do logo), `brand-deep` (#8a6d35, dourado para texto pequeno, legível no branco), `brand-soft`, `sand`. Tema claro, com uma seção escura (`bg-ink`) na biossegurança.
- Dourado `brand` não tem contraste para texto pequeno sobre branco: use em títulos grandes, ícones e detalhes; para links e textos pequenos use `brand-deep`. Botão principal é `ink` (`PillLink variant="ink"`).
- Fontes: `font-heading`/`font-serif` (Instrument Serif), `font-sans` (Jost).
- Utilitários: `container-page`, `section-y`, `reveal` (usado por `<Reveal>`), `parallax` (scroll-driven, só onde houver suporte). Animações: `animate-spin-slow`, `animate-ken-burns`, `animate-marquee`, `animate-float`, `animate-gold-sheen` (faixa dourada que atravessa um elemento mascarado quase sem pausa, a cada 8,5 s). Tudo é desligado com `prefers-reduced-motion`.
- Padrões visuais: cantos bem arredondados (`rounded-[2rem]`), bordas `border-ink/10`, títulos com trecho em itálico dourado via `<Accent>` (`components/section-heading.tsx`), foto do hero em arco com anel dourado girando atrás.
- Movimento (referência: sites com cenas que entram com desfoque): envolva blocos em `<Reveal delay={ms}>` para entrarem com fade, blur e deslize ao aparecer na tela; escalone os atrasos em ~100 ms. Acima da dobra (hero) use `<Reveal immediate>`, que anima só com CSS e não espera o JS (senão o conteúdo principal fica invisível até a hidratação e piora o LCP).
- Textos longos (casos, Sobre, biossegurança) ficam dentro de `<ReadMore>`, recolhidos principalmente no mobile.

Componentes compartilhados: `SectionHeading`/`Accent`/`Eyebrow`, `PillLink`, `CtaBanner`, `TreatmentCard`, `SiteHeader`, `SiteFooter`, `WhatsappFloat`, `brand-icons`, `Reveal`, `GoldRing`, `RotatingBadge` (selo com texto circular e monograma), `Marquee`, `ReadMore` (recolhe texto longo numa altura dada por classe, ex. `max-h-[6.5rem] lg:max-h-none`, com degradê e botão "Ler mais" que só aparece se o texto passar da altura) e `BeforeAfter` (comparador arrastável que corta a montagem ao meio; `seamTrim` esconde a marca d'água da divisão e corta igual nas duas metades para mantê-las alinhadas).

## 7. Diretrizes

- **Server Components por padrão.** Só use `"use client"` quando precisar de estado, efeitos ou eventos (hoje: header, filtro do catálogo, `Reveal`, `ReadMore`, `BeforeAfter`, `WhatsappFloat` e carrossel de casos).
- APIs do Next 16: `params` é `Promise` (`await props.params`) e as páginas usam os tipos globais `PageProps<"/rota">` / `LayoutProps<"/">`.
- Imagens sempre com `next/image` e `sizes` adequado; todo `alt` em português e descritivo.
- Cada página exporta `metadata`; o `title` usa o template `"%s | Dra. Laura Helena"`.
- Use `cn()` de `@/lib/utils` para compor classes. Prefira utilitários Tailwind a CSS novo.
- Estilo de código: sem ponto e vírgula em `src/` (exceto `layout.tsx`), aspas duplas, componentes em função nomeada exportada.
- Novos primitivos de UI: `npx shadcn add <componente>` (vão para `src/components/ui/`).

## 8. Desenvolvimento

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm run lint
```

Para abrir o `next dev` pelo IP da rede local, o host precisa estar em `allowedDevOrigins` no `next.config.ts` (hoje `192.168.1.*`).

## Manutenção (para LLMs)

Conforme `.cursor/rules/dra-laura.mdc`, atualize este arquivo na mesma alteração quando mudar rotas, arquivos de dados, stack, design system ou fluxos principais.
