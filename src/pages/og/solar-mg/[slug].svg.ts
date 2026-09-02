import type { APIRoute, GetStaticPaths } from 'astro';
import { cidadesSolarMG } from '../../../data/energia-solar-mg';
import { buildSolarMgOgSvg } from '../../../lib/solar-mg-og';

export const prerender = true;

export const getStaticPaths = (() => {
  return cidadesSolarMG.map((cidade) => ({
    params: { slug: cidade.slug },
    props: { cidade },
  }));
}) satisfies GetStaticPaths;

export const GET: APIRoute = ({ props }) => {
  const { cidade } = props as { cidade: (typeof cidadesSolarMG)[number] };

  const svg = buildSolarMgOgSvg({
    tituloPagina: cidade.tituloSeo,
    eyebrow: `ENERGIA SOLAR EM ${cidade.nome.toUpperCase()} — MG`,
    linha1: 'Sites que geram',
    destaquePalavra: 'orçamentos',
    destaqueSufixo: 'toda semana',
    subtitulo: `para integradoras solares de ${cidade.nome}.`,
  });

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
