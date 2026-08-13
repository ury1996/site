import { getNichosPorCategoria } from './nichos';

/**
 * Páginas de nicho que têm layout próprio (não são geradas pelo template
 * dinâmico src/pages/sites-para-[slug].astro) mas precisam aparecer nas
 * listagens junto com os demais nichos — caso contrário viram páginas
 * órfãs: entram no sitemap, mas nenhum link interno leva até elas.
 *
 * Hoje só existe uma: energia solar, que era a home antiga do site e
 * ganhou URL própria quando a página institucional da agência assumiu a
 * raiz do domínio.
 */
export interface NichoEspecial {
  /** Caminho completo, já que estas páginas não seguem o padrão do template. */
  href: string;
  nomePlural: string;
  resumoCard: string;
  /** Slug de uma categoria em src/data/categorias.ts. */
  categoria: string;
}

export const nichosEspeciais: NichoEspecial[] = [
  {
    href: '/sites-para-energia-solar',
    nomePlural: 'empresas de energia solar',
    resumoCard:
      'Sites para integradoras fotovoltaicas, com calculadora de economia na conta de luz e captação de orçamento por WhatsApp.',
    categoria: 'instalacoes-e-energia',
  },
];

export function getEspeciaisPorCategoria(categoriaSlug: string): NichoEspecial[] {
  return nichosEspeciais.filter((n) => n.categoria === categoriaSlug);
}

/** Formato único de card usado pelo hub e pelas páginas de categoria. */
export interface CardNicho {
  href: string;
  nomePlural: string;
  resumoCard: string;
}

/**
 * Junta, em um formato só, os nichos gerados pelo template dinâmico e as
 * páginas de layout próprio. Vive aqui (e não na página) porque o
 * `getStaticPaths` do Astro roda em escopo isolado e não enxerga funções
 * declaradas no frontmatter da própria página.
 */
export function getCardsDaCategoria(categoriaSlug: string): CardNicho[] {
  return [
    ...getNichosPorCategoria(categoriaSlug).map((nicho) => ({
      href: `/sites-para-${nicho.slug}`,
      nomePlural: nicho.nomePlural,
      resumoCard: nicho.resumoCard,
    })),
    ...getEspeciaisPorCategoria(categoriaSlug).map((n) => ({
      href: n.href,
      nomePlural: n.nomePlural,
      resumoCard: n.resumoCard,
    })),
  ];
}
