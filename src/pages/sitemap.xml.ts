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
 */
export const GET: APIRoute = () => {
  const categoriasPublicadas = categorias.filter(
    (categoria) => getNichosPorCategoria(categoria.slug).length > 0,
  );

  const paths = [
    '/',
    '/sites-para-empresas/',
    ...categoriasPublicadas.map((categoria) => `/categoria/${categoria.slug}/`),
    ...nichos.map((nicho) => `/sites-para-${nicho.slug}/`),
  ];

  const urls = paths
    .map((path) => `  <url>\n    <loc>${site.url}${path}</loc>\n  </url>`)
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
