import type { Nicho } from './tipos';
import { advocacia } from './advocacia';
import { odontologia } from './odontologia';
import { estetica } from './estetica';
import { imobiliarias } from './imobiliarias';
import { construcao } from './construcao';
import { veterinaria } from './veterinaria';
import { academias } from './academias';
import { contabilidade } from './contabilidade';

/**
 * Lista de nichos publicados. Cada entrada aqui vira uma página estática em
 * /sites-para-{slug}, gerada por src/pages/sites-para-[slug].astro.
 *
 * Novos nichos são adicionados aqui um de cada vez, conforme o conteúdo de
 * cada página fica pronto.
 */
export const nichos: Nicho[] = [
  advocacia,
  odontologia,
  estetica,
  imobiliarias,
  construcao,
  veterinaria,
  academias,
  contabilidade,
];

export function getNichoPorSlug(slug: string): Nicho | undefined {
  return nichos.find((n) => n.slug === slug);
}

/** Retorna N nichos relacionados a partir dos slugs declarados no próprio nicho. */
export function getRelacionados(nicho: Nicho): Nicho[] {
  const relacionados = nicho.relacionados
    .map((slug) => getNichoPorSlug(slug))
    .filter((n): n is Nicho => Boolean(n));

  if (relacionados.length > 0) return relacionados;

  // Fallback: se não houver relacionados declarados (ou ainda não publicados),
  // usa os primeiros 3 outros nichos disponíveis.
  return nichos.filter((n) => n.slug !== nicho.slug).slice(0, 3);
}
