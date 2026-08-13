import type { Nicho } from './tipos';
import { advocacia } from './advocacia';
import { odontologia } from './odontologia';
import { estetica } from './estetica';
import { imobiliarias } from './imobiliarias';
import { construcao } from './construcao';
import { veterinaria } from './veterinaria';
import { academias } from './academias';
import { contabilidade } from './contabilidade';
import { engenharia } from './engenharia';
import { arquitetura } from './arquitetura';
import { materiaisDeConstrucao } from './materiais-de-construcao';
import { esquadrias } from './esquadrias';
import { eletricistas } from './eletricistas';
import { encanadores } from './encanadores';
import { climatizacao } from './climatizacao';
import { gas } from './gas';
import { vidracarias } from './vidracarias';
import { pocosArtesianos } from './pocos-artesianos';
import { segurancaEletronica } from './seguranca-eletronica';
import { protecaoContraIncendio } from './protecao-contra-incendio';
import { oficinasMecanicas } from './oficinas-mecanicas';
import { funilariaEPintura } from './funilaria-e-pintura';
import { pneus } from './pneus';
import { transportadoras } from './transportadoras';
import { oticas } from './oticas';
import { saloesDeBeleza } from './saloes-de-beleza';
import { petShops } from './pet-shops';
import { hoteisEPousadas } from './hoteis-e-pousadas';
import { restaurantes } from './restaurantes';
import { cerimonialEEventos } from './cerimonial-e-eventos';
import { fotografia } from './fotografia';
import { escolasECursos } from './escolas-e-cursos';
import { educacaoInfantil } from './educacao-infantil';
import { limpeza } from './limpeza';
import { jardinagem } from './jardinagem';
import { piscinas } from './piscinas';
import { lavanderia } from './lavanderia';
import { decoracao } from './decoracao';
import { moveisPlanejados } from './moveis-planejados';
import { industriaEFabricas } from './industria-e-fabricas';
import { manutencaoIndustrial } from './manutencao-industrial';
import { logistica } from './logistica';
import { agronegocio } from './agronegocio';

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
  engenharia,
  arquitetura,
  materiaisDeConstrucao,
  esquadrias,
  eletricistas,
  encanadores,
  climatizacao,
  gas,
  vidracarias,
  pocosArtesianos,
  segurancaEletronica,
  protecaoContraIncendio,
  oficinasMecanicas,
  funilariaEPintura,
  pneus,
  transportadoras,
  oticas,
  saloesDeBeleza,
  petShops,
  hoteisEPousadas,
  restaurantes,
  cerimonialEEventos,
  fotografia,
  escolasECursos,
  educacaoInfantil,
  limpeza,
  jardinagem,
  piscinas,
  lavanderia,
  decoracao,
  moveisPlanejados,
  industriaEFabricas,
  manutencaoIndustrial,
  logistica,
  agronegocio,
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

  // Fallback: nichos da mesma categoria primeiro (mais relevância temática);
  // completa com outros nichos disponíveis se a categoria ainda tiver poucos.
  const mesmaCategoria = nichos.filter(
    (n) => n.slug !== nicho.slug && n.categoria === nicho.categoria,
  );
  const outros = nichos.filter(
    (n) => n.slug !== nicho.slug && n.categoria !== nicho.categoria,
  );
  return [...mesmaCategoria, ...outros].slice(0, 3);
}

/** Agrupa os nichos publicados por categoria, na ordem de src/data/categorias.ts. */
export function getNichosPorCategoria(categoriaSlug: string): Nicho[] {
  return nichos.filter((n) => n.categoria === categoriaSlug);
}
