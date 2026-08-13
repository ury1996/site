import type { APIRoute, GetStaticPaths } from 'astro';
import { nichos } from '../../data/nichos';
import { buildNichoOgSvg } from '../../lib/nicho-og';

export const prerender = true;

export const getStaticPaths = (() => {
  return nichos.map((nicho) => ({
    params: { slug: nicho.slug },
    props: { nicho },
  }));
}) satisfies GetStaticPaths;

export const GET: APIRoute = ({ props }) => {
  const { nicho } = props as { nicho: (typeof nichos)[number] };
  const svg = buildNichoOgSvg(nicho);

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
