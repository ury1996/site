import type { Cidade } from './tipos';
import { getNichoPorSlug } from '../nichos';
import { saoPaulo } from './sao-paulo';
import { rioDeJaneiro } from './rio-de-janeiro';
import { beloHorizonte } from './belo-horizonte';
import { brasilia } from './brasilia';
import { curitiba } from './curitiba';
import { portoAlegre } from './porto-alegre';
import { salvador } from './salvador';
import { fortaleza } from './fortaleza';
import { recife } from './recife';
import { goiania } from './goiania';
import { campinas } from './campinas';
import { manaus } from './manaus';
import { belem } from './belem';
import { florianopolis } from './florianopolis';
import { vitoria } from './vitoria';

/**
 * Cidades publicadas. Cada entrada vira uma página estática em
 * /criacao-de-sites-em-{slug}, gerada por
 * src/pages/criacao-de-sites-em-[slug].astro.
 *
 * A ordem aqui é a ordem do hub /criacao-de-sites — começa pelas praças
 * de maior volume de busca.
 */
export const cidades: Cidade[] = [
  saoPaulo,
  rioDeJaneiro,
  beloHorizonte,
  brasilia,
  curitiba,
  portoAlegre,
  salvador,
  fortaleza,
  recife,
  goiania,
  campinas,
  manaus,
  belem,
  florianopolis,
  vitoria,
];

export function getCidadePorSlug(slug: string): Cidade | undefined {
  return cidades.find((c) => c.slug === slug);
}

/** Cidades relacionadas, a partir dos slugs declarados na própria cidade. */
export function getCidadesRelacionadas(cidade: Cidade): Cidade[] {
  const relacionadas = cidade.relacionadas
    .map((slug) => getCidadePorSlug(slug))
    .filter((c): c is Cidade => Boolean(c));

  if (relacionadas.length > 0) return relacionadas;

  // Fallback: cidades da mesma região primeiro, completando com as demais.
  const mesmaRegiao = cidades.filter(
    (c) => c.slug !== cidade.slug && c.regiao === cidade.regiao,
  );
  const outras = cidades.filter(
    (c) => c.slug !== cidade.slug && c.regiao !== cidade.regiao,
  );
  return [...mesmaRegiao, ...outras].slice(0, 3);
}

/** Card de nicho no formato que a seção "setores" da página de cidade consome. */
export interface CardNichoDaCidade {
  slug: string;
  nomePlural: string;
  resumo: string;
}

/**
 * Resolve os slugs de `nichosDestaque` nos dados reais do nicho — é aqui
 * que a página de cidade se conecta com as páginas de nicho.
 *
 * Vive no módulo de dados (e não no frontmatter da página) porque o
 * `getStaticPaths` do Astro roda em escopo isolado e não enxerga funções
 * declaradas na própria página.
 */
export function getNichosDestaque(cidade: Cidade): CardNichoDaCidade[] {
  return cidade.nichosDestaque
    .map((slug) => getNichoPorSlug(slug))
    .filter((n): n is NonNullable<typeof n> => Boolean(n))
    .map((nicho) => ({
      slug: nicho.slug,
      nomePlural: nicho.nomePlural,
      resumo: nicho.resumoCard,
    }));
}

/** Agrupa as cidades publicadas por região, na ordem em que aparecem. */
export function getCidadesPorRegiao(): { regiao: string; itens: Cidade[] }[] {
  const ordem = ['Sudeste', 'Sul', 'Nordeste', 'Centro-Oeste', 'Norte'];
  return ordem
    .map((regiao) => ({ regiao, itens: cidades.filter((c) => c.regiao === regiao) }))
    .filter(({ itens }) => itens.length > 0);
}
