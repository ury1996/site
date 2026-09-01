import type { Nicho } from '../data/nichos/tipos';
import { site } from '../config/site';
import { buildOgSvg } from './og-base';

/**
 * Gera a imagem de compartilhamento (estilo OG) de cada nicho — mesmo
 * layout visual da imagem da home (public/og.png), adaptando eyebrow,
 * chamada de ação e subtítulo para o nicho. Usada tanto como
 * <meta property="og:image"> quanto como imagem visível na página.
 */

interface Acao {
  /** Palavra em destaque branco, ex.: "orçamentos". */
  palavra: string;
  /** Complemento em laranja, ex.: "todos os dias". */
  sufixo: string;
}

/** Chamada de ação por categoria — mantém o texto grande sempre curto e legível. */
const ACAO_POR_CATEGORIA: Record<string, Acao> = {
  'construcao-e-engenharia': { palavra: 'orçamentos', sufixo: 'todos os dias' },
  'instalacoes-e-energia': { palavra: 'chamados', sufixo: 'todos os dias' },
  seguranca: { palavra: 'orçamentos', sufixo: 'toda semana' },
  'automotivo-e-transporte': { palavra: 'agendamentos', sufixo: 'toda semana' },
  'saude-e-bem-estar': { palavra: 'agendamentos', sufixo: 'toda semana' },
  'juridico-e-administrativo': { palavra: 'contatos', sufixo: 'qualificados' },
  'hospitalidade-e-eventos': { palavra: 'reservas', sufixo: 'todos os dias' },
  educacao: { palavra: 'matrículas', sufixo: 'todo semestre' },
  'casa-e-servicos-domesticos': { palavra: 'contratos', sufixo: 'todo mês' },
  'industria-logistica-e-agro': { palavra: 'cotações', sufixo: 'toda semana' },
};

const ACAO_PADRAO: Acao = { palavra: 'orçamentos', sufixo: 'todos os dias' };

export function buildNichoOgSvg(nicho: Nicho): string {
  const acao = ACAO_POR_CATEGORIA[nicho.categoria] ?? ACAO_PADRAO;

  return buildOgSvg({
    tituloPagina: nicho.tituloSeo,
    eyebrow: `SITES PARA ${nicho.nomePlural.toUpperCase()}`,
    linha1: 'Sites que geram',
    destaquePalavra: acao.palavra,
    destaqueSufixo: acao.sufixo,
    subtitulo: `para ${nicho.nomePlural} em ${site.regiao}.`,
  });
}
