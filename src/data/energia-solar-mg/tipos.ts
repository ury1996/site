/**
 * Schema das páginas de energia solar por cidade de Minas Gerais
 * (/sites-para-energia-solar-em-{slug}).
 *
 * Linha de páginas dedicada: o nicho de energia solar tem prioridade
 * comercial e usa o visual do site institucional (src/styles/home.css —
 * navy/azul/âmbar, Sora/Inter), não o visual laranja do sistema geral de
 * nichos.
 *
 * Mesmo cuidado do sistema de cidades nacional: página de cidade é o
 * formato que mais facilmente vira "doorway page". Os campos abaixo
 * pedem informação que só existe naquele mercado — mesorregião, perfil
 * de cliente (rural/agro, industrial, residencial) e contexto real da
 * economia local — para cada página ter substância própria.
 */

export interface SolarBeneficio {
  icone:
    | 'icone-raio'
    | 'icone-lupa'
    | 'icone-whats'
    | 'icone-calc'
    | 'icone-alvo'
    | 'icone-escudo';
  titulo: string;
  texto: string;
}

export interface SolarDepoimento {
  texto: string;
  autor: string;
  detalhe: string;
}

export interface SolarFaqItem {
  pergunta: string;
  resposta: string;
}

export interface SolarArtigoSecao {
  titulo: string;
  /** Cada string vira um <p>; aceita <strong> (HTML confiável, autoria interna). */
  paragrafos: string[];
}

export interface CidadeSolarMG {
  /** Usado na URL: /sites-para-energia-solar-em-{slug} */
  slug: string;
  /** Ex.: "Uberlândia" */
  nome: string;
  /** Mesorregião de Minas Gerais, ex.: "Triângulo Mineiro e Alto Paranaíba" */
  mesorregiao: string;
  /** Coordenadas aproximadas do centro, para o JSON-LD. */
  geo: { lat: number; lng: number };

  tituloSeo: string;
  descricaoSeo: string;

  hero: {
    eyebrow: string;
    /** HTML confiável — permite <em>destaque</em>. */
    tituloHtml: string;
    /** HTML confiável — permite <strong>. */
    subHtml: string;
    selos: string[];
  };

  whatsappMensagem: string;
  situacoes: string[];

  /**
   * Perfil real do mercado solar local — o que dá lastro à página.
   * Não é para inventar número de concorrentes ou tarifa exata; é para
   * descrever o tipo de cliente e a economia que sustentam a demanda.
   */
  perfilMercado: {
    titulo: string;
    introHtml: string;
    itens: string[];
  };

  diagnostico: {
    titulo: string;
    introHtml: string;
    notaTexto: string;
    itens: string[];
  };

  beneficios: {
    titulo: string;
    itens: SolarBeneficio[];
  };

  depoimentos: {
    titulo: string;
    itens: SolarDepoimento[];
  };

  faq: SolarFaqItem[];

  artigo: {
    eyebrow?: string;
    titulo: string;
    secoes: SolarArtigoSecao[];
  };

  ctaFinal: {
    titulo: string;
    sub: string;
  };

  /** Slugs de outras cidades de MG para a seção de linkagem interna. */
  relacionadas: string[];
  /** Frase curta usada nos cards que apontam para esta cidade. */
  resumoCard: string;
}
