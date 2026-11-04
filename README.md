# Dra. Laura

Site catálogo da **Dra. Laura**, cirurgiã-dentista. Mostra os tratamentos e leva o visitante ao WhatsApp para agendar uma avaliação. Não há backend nem banco de dados: todo contato é um link `wa.me` com a mensagem pronta.

No ar em [www.dra-laura-helena.com.br](https://www.dra-laura-helena.com.br), publicado na Vercel a cada push na `main`.

## Páginas

| Rota | Conteúdo |
|------|----------|
| `/` | Home com destaque e tratamentos em evidência |
| `/catalogo` | Catálogo de tratamentos com filtro por categoria |

## Stack

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4 e componentes shadcn sobre Base UI.

## Rodando localmente

Requer Node 20 ou mais novo (veja `.nvmrc`).

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de produção
npm run lint    # ESLint
```

## Editando o conteúdo

| Arquivo | O que tem |
|---------|-----------|
| `src/lib/site.ts` | Nome, endereço, WhatsApp, Instagram e menu |
| `src/lib/catalog.ts` | Tratamentos do catálogo |
| `src/lib/cases.ts` | Casos clínicos de antes e depois |
| `src/lib/about.ts` | Texto "Sobre" e formação da Dra. Laura Helena |

As imagens ficam em `public/images/`. Mais detalhes em [`AGENTS.md`](AGENTS.md).
