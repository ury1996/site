import fs from 'node:fs';
import path from 'node:path';

/**
 * Base compartilhada das imagens de compartilhamento (OG) geradas em
 * build — mesmo layout visual da imagem da home (public/og.png, gerada
 * por scripts/generate-og.mjs). Nichos e cidades mudam só os textos.
 */

/**
 * A logo entra embutida em base64 porque um SVG consumido como <img> (ou
 * como og:image) roda em modo restrito e não carrega arquivo externo — um
 * <image href="/images/marca/logo.png"> simplesmente não apareceria.
 * A leitura acontece uma única vez, no build.
 */
export const LOGO_DATA_URI = (() => {
  const arquivo = path.join(process.cwd(), 'public', 'images', 'marca', 'logo.png');
  return `data:image/png;base64,${fs.readFileSync(arquivo).toString('base64')}`;
})();

/** Proporção real do arquivo (400 × 112). */
export const LOGO_LARGURA = 232;
export const LOGO_ALTURA = 65;

export function escapeXml(texto: string): string {
  return texto
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/** Reduz o tamanho da fonte até o texto caber na largura máxima disponível. */
export function fitFontSize(
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

export interface OgConteudo {
  /** Vai para <title> e aria-label — é o título da própria página. */
  tituloPagina: string;
  /** Linha pequena em amarelo, no topo. Já em caixa alta. */
  eyebrow: string;
  /** Primeira linha grande, ex.: "Sites que geram". */
  linha1: string;
  /** Palavra em branco da segunda linha grande, ex.: "orçamentos". */
  destaquePalavra: string;
  /** Complemento em laranja da segunda linha, ex.: "todos os dias". */
  destaqueSufixo: string;
  /** Segunda linha do subtítulo (a primeira é fixa). */
  subtitulo: string;
}

export function buildOgSvg(conteudo: OgConteudo): string {
  const eyebrowSize = fitFontSize(conteudo.eyebrow, 1020, 30, 16, 0.66);
  const subtituloSize = fitFontSize(conteudo.subtitulo, 1020, 26, 15, 0.53);

  const tituloEsc = escapeXml(conteudo.tituloPagina);
  const eyebrowEsc = escapeXml(conteudo.eyebrow);
  const linha1Esc = escapeXml(conteudo.linha1);
  const palavraEsc = escapeXml(conteudo.destaquePalavra);
  const sufixoEsc = escapeXml(conteudo.destaqueSufixo);
  const subtituloEsc = escapeXml(conteudo.subtitulo);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-label="${tituloEsc}">
  <title>${tituloEsc}</title>
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

  <image x="90" y="96" width="${LOGO_LARGURA}" height="${LOGO_ALTURA}" href="${LOGO_DATA_URI}" preserveAspectRatio="xMinYMid meet" />

  <text x="90" y="270" font-family="Arial, sans-serif" font-weight="800" font-size="${eyebrowSize}" letter-spacing="3" fill="#FFB627">${eyebrowEsc}</text>

  <text x="88" y="360" font-family="Arial, sans-serif" font-weight="800" font-size="64" fill="#FFFFFF">${linha1Esc}</text>
  <text x="88" y="432" font-family="Arial, sans-serif" font-weight="800" font-size="64" fill="#FFFFFF">${palavraEsc} <tspan fill="url(#solido)">${sufixoEsc}</tspan></text>

  <text x="90" y="500" font-family="Arial, sans-serif" font-weight="400" font-size="26" fill="#D7E2F0">Criação de sites, SEO local e captação por WhatsApp</text>
  <text x="90" y="536" font-family="Arial, sans-serif" font-weight="400" font-size="${subtituloSize}" fill="#D7E2F0">${subtituloEsc}</text>

  <text x="90" y="592" font-family="Arial, sans-serif" font-weight="800" font-size="30" fill="#FFFFFF">Sites Rankly</text>
</svg>`;
}
