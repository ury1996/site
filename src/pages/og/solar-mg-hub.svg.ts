import type { APIRoute } from 'astro';
import { buildSolarMgOgSvg } from '../../lib/solar-mg-og';

export const prerender = true;

export const GET: APIRoute = () => {
  const svg = buildSolarMgOgSvg({
    tituloPagina: 'Site para Empresa de Energia Solar em Minas Gerais | Sites Rankly',
    eyebrow: 'ENERGIA SOLAR EM MINAS GERAIS',
    linha1: 'Sites que geram',
    destaquePalavra: 'orçamentos',
    destaqueSufixo: 'toda semana',
    subtitulo: 'para integradoras solares em todo o estado.',
  });

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
