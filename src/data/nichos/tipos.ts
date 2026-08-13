export interface NichoPasso {
  titulo: string;
  texto: string;
}

export interface NichoBeneficio {
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

export interface NichoDepoimento {
  texto: string;
  autor: string;
  detalhe: string;
}

export interface NichoFaqItem {
  pergunta: string;
  resposta: string;
}

export interface NichoArtigoSecao {
  titulo: string;
  /** Cada string vira um <p>; aceita <strong> (HTML confiável, autoria interna). */
  paragrafos: string[];
}

export interface Nicho {
  /** Usado na URL: /sites-para-{slug} */
  slug: string;
  /** Ex.: "escritório de advocacia" — singular, minúsculo. */
  nomeSingular: string;
  /** Ex.: "escritórios de advocacia" — plural, minúsculo. */
  nomePlural: string;
  /** Ex.: "advogado" — como o cliente final busca no Google. */
  profissional: string;

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

  diagnostico: {
    titulo: string;
    introHtml: string;
    notaTexto: string;
    itens: string[];
  };

  passos: NichoPasso[];

  beneficios: {
    titulo: string;
    itens: NichoBeneficio[];
  };

  depoimentos: {
    titulo: string;
    itens: NichoDepoimento[];
  };

  faq: NichoFaqItem[];

  artigo: {
    eyebrow?: string;
    titulo: string;
    secoes: NichoArtigoSecao[];
  };

  ctaFinal: {
    titulo: string;
    sub: string;
  };

  /** Slugs de outros nichos para a seção "Outros nichos que atendemos" (linkagem interna). */
  relacionados: string[];
  /** Frase curta usada nos cards de "relacionados" de OUTRAS páginas que linkam para esta. */
  resumoCard: string;
}
