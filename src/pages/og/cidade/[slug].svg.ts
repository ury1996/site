import type { APIRoute, GetStaticPaths } from 'astro';
import { cidades } from '../../../data/cidades';
import { buildCidadeOgSvg } from '../../../lib/cidade-og';

export const prerender = true;

export const getStaticPaths = (() => {
  return cidades.map((cidade) => ({
    params: { slug: cidade.slug },
    props: { cidade },
  }));
}) satisfies GetStaticPaths;

export const GET: APIRoute = ({ props }) => {
  const { cidade } = props as { cidade: (typeof cidades)[number] };
  const svg = buildCidadeOgSvg(cidade);

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
