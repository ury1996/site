import type { CidadeSolarMG } from './tipos';
import { beloHorizonte } from './belo-horizonte';
import { uberlandia } from './uberlandia';
import { uberaba } from './uberaba';
import { juizDeFora } from './juiz-de-fora';
import { montesClaros } from './montes-claros';
import { governadorValadares } from './governador-valadares';
import { ipatinga } from './ipatinga';
import { divinopolis } from './divinopolis';
import { seteLagoas } from './sete-lagoas';
import { patosDeMinas } from './patos-de-minas';

/**
 * Cidades de Minas Gerais publicadas para o nicho de energia solar. Cada
 * entrada vira uma página estática em /sites-para-energia-solar-em-{slug},
 * gerada por src/pages/sites-para-energia-solar-em-[slug].astro.
 */
export const cidadesSolarMG: CidadeSolarMG[] = [
  beloHorizonte,
  uberlandia,
  uberaba,
  juizDeFora,
  montesClaros,
  governadorValadares,
  ipatinga,
  divinopolis,
  seteLagoas,
  patosDeMinas,
];

export function getCidadeSolarPorSlug(slug: string): CidadeSolarMG | undefined {
  return cidadesSolarMG.find((c) => c.slug === slug);
}

/** Cidades relacionadas, a partir dos slugs declarados na própria cidade. */
export function getCidadesSolarRelacionadas(cidade: CidadeSolarMG): CidadeSolarMG[] {
  const relacionadas = cidade.relacionadas
    .map((slug) => getCidadeSolarPorSlug(slug))
    .filter((c): c is CidadeSolarMG => Boolean(c));

  if (relacionadas.length > 0) return relacionadas;

  return cidadesSolarMG.filter((c) => c.slug !== cidade.slug).slice(0, 3);
}
