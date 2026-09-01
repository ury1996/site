/**
 * Schema das páginas de cidade (/criacao-de-sites-em-{slug}).
 *
 * Espelha o sistema dos nichos (src/data/nichos/tipos.ts), mas com um
 * cuidado extra: página de cidade é o formato que mais facilmente vira
 * "doorway page" — dezenas de páginas iguais trocando só o nome da
 * cidade, o que as diretrizes de spam do Google tratam como violação.
 *
 * Por isso os campos abaixo são obrigatórios e pedem informação que
 * *só existe naquela cidade*: perfil econômico real, bairros e polos
 * comerciais reais, e quais dos nichos atendidos têm mais demanda ali.
 * Se uma cidade nova for adicionada repetindo o texto de outra, ela não
 * deve entrar — o ganho de SEO não compensa o risco.
 */

export interface CidadeBeneficio {
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

export interface CidadeDepoimento {
  texto: string;
  autor: string;
  detalhe: string;
}

export interface CidadeFaqItem {
  pergunta: string;
  resposta: string;
}

export interface CidadeArtigoSecao {
  titulo: string;
  /** Cada string vira um <p>; aceita <strong> (HTML confiável, autoria interna). */
  paragrafos: string[];
}

export interface Cidade {
  /** Usado na URL: /criacao-de-sites-em-{slug} */
  slug: string;
  /** Ex.: "São Paulo" */
  nome: string;
  /** Sigla do estado, ex.: "SP" */
  uf: string;
  /** Nome do estado por extenso, ex.: "São Paulo" */
  estado: string;
  /** Ex.: "Sudeste" */
  regiao: string;
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
   * Bairros e polos comerciais reais da cidade. Aparecem no texto e são
   * o que dá lastro local à página — não invente nomes.
   */
  bairros: string[];

  /**
   * Slugs de nichos (src/data/nichos) com mais demanda nesta cidade.
   * É daqui que sai a integração com as páginas de nicho: cada cidade
   * linka para um conjunto diferente, refletindo a economia local.
   */
  nichosDestaque: string[];

  /** Título da seção que lista os nichos em destaque nesta cidade. */
  setoresTitulo: string;
  /** Texto de apoio da mesma seção, explicando o porquê daqueles setores. */
  setoresTexto: string;

  diagnostico: {
    titulo: string;
    introHtml: string;
    notaTexto: string;
    itens: string[];
  };

  beneficios: {
    titulo: string;
    itens: CidadeBeneficio[];
  };

  depoimentos: {
    titulo: string;
    itens: CidadeDepoimento[];
  };

  faq: CidadeFaqItem[];

  artigo: {
    eyebrow?: string;
    titulo: string;
    secoes: CidadeArtigoSecao[];
  };

  ctaFinal: {
    titulo: string;
    sub: string;
  };

  /** Slugs de outras cidades para a seção de linkagem interna. */
  relacionadas: string[];
  /** Frase curta usada nos cards que apontam para esta cidade. */
  resumoCard: string;
}
