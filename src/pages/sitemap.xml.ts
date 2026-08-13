import type { APIRoute } from 'astro';
import { site } from '../config/site';
import { nichos, getNichosPorCategoria } from '../data/nichos';
import { categorias } from '../data/categorias';

export const prerender = true;

/**
 * Sitemap único em /sitemap.xml — a URL que Google Search Console e a
 * maioria das ferramentas de SEO esperam por convenção. Ainda muito abaixo
 * do limite de 50.000 URLs por arquivo, então um índice de sitemaps
 * (sitemap-index.xml) seria complexidade desnecessária.
 *
 * As URLs vão sem barra final porque o vercel.json publica o site com
 * `trailingSlash: false` — listar a versão com barra colocaria no sitemap
 * uma URL que responde 301, desperdiçando rastreamento.
 *
 * `priority` sinaliza a hierarquia interna do site (home > hub > categoria
 * > nicho); é uma dica fraca para o Google, mas não custa nada e ajuda em
 * outras ferramentas de SEO que ainda leem o campo.
 */
export const GET: APIRoute = () => {
  const categoriasPublicadas = categorias.filter(
    (categoria) => getNichosPorCategoria(categoria.slug).length > 0,
  );

  const entradas: { path: string; priority: string }[] = [
    { path: '/', priority: '1.0' },
    { path: '/sites-para-empresas', priority: '0.9' },
    { path: '/sites-para-energia-solar', priority: '0.8' },
    { path: '/contato', priority: '0.7' },
    ...categoriasPublicadas.map((categoria) => ({
      path: `/categoria/${categoria.slug}`,
      priority: '0.7',
    })),
    ...nichos.map((nicho) => ({
      path: `/sites-para-${nicho.slug}`,
      priority: '0.8',
    })),
  ];

  const lastmod = new Date().toISOString().slice(0, 10);

  const urls = entradas
    .map(
      ({ path, priority }) =>
        `  <url>\n    <loc>${site.url}${path}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>`,
    )
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
