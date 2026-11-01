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

Nome (Dra. Laura Helena, CRO 169695), texto "Sobre", casos clínicos e fotos já são reais. Contato, endereço e paleta ainda são **provisórios**; a lista de tratamentos foi montada a partir dos casos e precisa de confirmação.

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
| Fontes | `next/font/google`: Inter Tight (sans) e Instrument Serif (títulos e itálico) |
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
│   │   ├── page.tsx          # Home
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
| `src/lib/site.ts` | Nome, profissão, CRO, logo, endereço, WhatsApp, Instagram, `navLinks`, helpers `whatsappUrl()` e `mapsUrl` |
| `src/lib/catalog.ts` | `treatments: Treatment[]` (slug, nome, categoria, ícone, resumo, duração opcional), `categoryLabels`, `treatmentMessage()` |
| `src/lib/cases.ts` | `clinicalCases: ClinicalCase[]`: casos de antes e depois (foto, `alt`, texto e `treatment` apontando para o slug do catálogo) |
| `src/lib/about.ts` | Texto "Sobre" da Dra. Laura Helena, formação e foto do consultório |

Imagens em `public/images/`: `logo.jpg` (dourado sobre branco), `dra-laura-consultorio.jpg` e `casos/*.jpg` (montagens verticais com o antes em cima e o depois embaixo, já com marca d'água). A pasta de origem das fotos enviadas pela cliente é `~/Documents/dra-laura`.

Para alterar textos, contato ou tratamentos, edite o dado, não o JSX. A home mostra os três primeiros itens de `treatments`.

## 5. Fluxos

- `whatsappUrl(message?)` em `lib/site.ts` monta o link `wa.me`. Use sempre esse helper.
- Cada `TreatmentCard` abre o WhatsApp com a mensagem de `treatmentMessage()`.
- `WhatsappFloat` aparece em todas as páginas; `CtaBanner` aceita `message` customizada.

## 6. Design system

Definido em `src/app/globals.css` (Tailwind v4 `@theme inline`). Paleta provisória, até receber a identidade visual:
- `paper` (#f8f6f2, fundo), `ink` (#1d2a35, texto), `brand` (#3f8f8b, destaque/primary), `brand-soft`, `sand`. Tema claro.
- Fontes: `font-heading`/`font-serif` (Instrument Serif), `font-sans` (Inter Tight).
- Utilitários: `container-page`, `section-y`; animação `animate-float`.
- Padrões visuais: cantos bem arredondados (`rounded-[2rem]`), bordas `border-ink/10`, títulos com trecho em itálico na cor `brand` via `<Accent>` (`components/section-heading.tsx`).

Componentes compartilhados: `SectionHeading`/`Accent`/`Eyebrow`, `PillLink`, `CtaBanner`, `TreatmentCard`, `SiteHeader`, `SiteFooter`, `WhatsappFloat`, `brand-icons`.

## 7. Diretrizes

- **Server Components por padrão.** Só use `"use client"` quando precisar de estado, efeitos ou eventos (hoje: header e filtro do catálogo).
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
