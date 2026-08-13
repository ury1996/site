# Sites Rankly

Landing page de captação para a Sites Rankly — sites para empresas de energia solar em
Minas Gerais. Construído com [Astro](https://astro.build), pronto para deploy na Vercel.

## Stack

- **Astro** — páginas estáticas (SSG), zero JS por padrão.
- **`src/pages/sitemap.xml.ts`** — gera `/sitemap.xml` (arquivo único) no build, listando a home, o hub de nichos e todas as páginas de nicho.
- Vanilla CSS (escopado por componente) + um punhado de `<script>` inline para o
  diagnóstico interativo e os formulários de lead.

## Desenvolvimento

```bash
npm install
npm run dev       # http://localhost:4321
```

## Build

```bash
npm run build      # gera ./dist
npm run preview    # serve o build localmente
```

## Estrutura

```
src/
  components/   Header, Footer, LeadForm, Diagnostico, WhatsAppFloat, Logo
  config/       site.ts — telefone, WhatsApp, e-mail, endereço, SEO (fonte única)
  data/         conteudo.ts — textos de seções (números, passos, benefícios, FAQ...)
  layouts/      Layout.astro — <head>, meta tags, JSON-LD
  pages/        index.astro — a landing page
  styles/       global.css — tokens de design e reset
public/
  favicon.svg, logo.svg, og.png, robots.txt
scripts/
  generate-og.mjs — regenera public/og.png (`npm run og`)
```

Para alterar telefone, WhatsApp, e-mail, endereço ou textos de SEO, edite apenas
`src/config/site.ts` — o resto do site consome esse arquivo.

## Deploy na Vercel

1. Importe o repositório na Vercel.
2. Framework preset: **Astro** (detectado automaticamente via `vercel.json`).
3. Build command: `npm run build` · Output: `dist` (já configurado).
4. Deploy.

Nenhuma variável de ambiente é necessária — o site é 100% estático.
