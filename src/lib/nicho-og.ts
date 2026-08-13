import type { Nicho } from '../data/nichos/tipos';
import { site } from '../config/site';

/**
 * Gera a imagem de compartilhamento (estilo OG) de cada nicho — mesmo
 * layout visual da imagem da home (public/og.png, gerada por
 * scripts/generate-og.mjs), adaptando eyebrow, chamada de ação e
 * subtítulo para o nicho. Usada tanto como <meta property="og:image">
 * quanto como imagem visível no topo da página do nicho.
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

function escapeXml(texto: string): string {
  return texto
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/** Reduz o tamanho da fonte até o texto caber na largura máxima disponível. */
function fitFontSize(
  texto: string,
  maxWidth: number,
  baseSize: number,
  minSize: number,
  avgCharWidth: number,
): number {
  let size = baseSize;
  while (size > minSize) {
    const width = texto.length * avgCharWidth * size;
    if (width <= maxWidth) break;
    size -= 1;
  }
  return size;
}

export function buildNichoOgSvg(nicho: Nicho): string {
  const acao = ACAO_POR_CATEGORIA[nicho.categoria] ?? ACAO_PADRAO;

  const eyebrowTexto = `SITES PARA ${nicho.nomePlural.toUpperCase()}`;
  const eyebrowSize = fitFontSize(eyebrowTexto, 1020, 30, 16, 0.66);

  const subtitulo2 = `para ${nicho.nomePlural} em ${site.regiao}.`;
  const subtitulo2Size = fitFontSize(subtitulo2, 1020, 26, 15, 0.53);

  const eyebrowEsc = escapeXml(eyebrowTexto);
  const palavraEsc = escapeXml(acao.palavra);
  const sufixoEsc = escapeXml(acao.sufixo);
  const subtitulo2Esc = escapeXml(subtitulo2);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-label="${escapeXml(nicho.tituloSeo)}">
  <title>${escapeXml(nicho.tituloSeo)}</title>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#060F20" />
      <stop offset="0.55" stop-color="#0A1830" />
      <stop offset="1" stop-color="#1A3055" />
    </linearGradient>
    <radialGradient id="sol" cx="0.5" cy="1" r="0.75">
      <stop offset="0" stop-color="#FFB627" stop-opacity="0.55" />
      <stop offset="0.4" stop-color="#FF8A00" stop-opacity="0.22" />
      <stop offset="0.7" stop-color="#FF8A00" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="solido" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#FFB627" />
      <stop offset="1" stop-color="#FF8A00" />
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)" />
  <circle cx="600" cy="760" r="520" fill="url(#sol)" />

  <g transform="translate(90,100)">
    <circle cx="42" cy="42" r="20" fill="url(#solido)" />
    <g stroke="url(#solido)" stroke-width="4.5" stroke-linecap="round">
      <path d="M42 2v12M42 72v12M2 42h12M72 42h12M13.6 13.6l8.5 8.5M61.9 61.9l8.5 8.5M70.4 13.6l-8.5 8.5M21.6 61.9l-8.5 8.5" />
    </g>
  </g>

  <text x="90" y="270" font-family="Arial, sans-serif" font-weight="800" font-size="${eyebrowSize}" letter-spacing="3" fill="#FFB627">${eyebrowEsc}</text>

  <text x="88" y="360" font-family="Arial, sans-serif" font-weight="800" font-size="64" fill="#FFFFFF">Sites que geram</text>
  <text x="88" y="432" font-family="Arial, sans-serif" font-weight="800" font-size="64" fill="#FFFFFF">${palavraEsc} <tspan fill="url(#solido)">${sufixoEsc}</tspan></text>

  <text x="90" y="500" font-family="Arial, sans-serif" font-weight="400" font-size="26" fill="#D7E2F0">Criação de sites, SEO local e captação por WhatsApp</text>
  <text x="90" y="536" font-family="Arial, sans-serif" font-weight="400" font-size="${subtitulo2Size}" fill="#D7E2F0">${subtitulo2Esc}</text>

  <text x="90" y="592" font-family="Arial, sans-serif" font-weight="800" font-size="30" fill="#FFFFFF">Sites Rankly</text>
</svg>`;
}
