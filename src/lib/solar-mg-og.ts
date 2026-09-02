import { LOGO_DATA_URI, LOGO_LARGURA, LOGO_ALTURA, escapeXml, fitFontSize } from './og-base';

/**
 * Imagem de compartilhamento (OG) das páginas de Energia Solar em Minas
 * Gerais. Mesma estrutura das outras OG images do site, mas na paleta do
 * site institucional (navy/azul/âmbar — src/styles/home.css), porque esta
 * linha de páginas usa o visual do site principal, não o visual laranja
 * do sistema de nichos.
 */
export interface SolarMgOgConteudo {
  /** Vai para <title> e aria-label. */
  tituloPagina: string;
  /** Linha pequena em azul, no topo. Já em caixa alta. */
  eyebrow: string;
  /** Primeira linha grande, ex.: "Sites que geram". */
  linha1: string;
  /** Palavra em branco da segunda linha grande, ex.: "clientes". */
  destaquePalavra: string;
  /** Complemento em âmbar da segunda linha, ex.: "todo mês". */
  destaqueSufixo: string;
  /** Segunda linha do subtítulo (a primeira é fixa). */
  subtitulo: string;
}

export function buildSolarMgOgSvg(conteudo: SolarMgOgConteudo): string {
  const eyebrowSize = fitFontSize(conteudo.eyebrow, 1020, 28, 15, 0.66);
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
      <stop offset="0" stop-color="#050D1F" />
      <stop offset="0.55" stop-color="#0B1B3A" />
      <stop offset="1" stop-color="#12294F" />
    </linearGradient>
    <radialGradient id="glow" cx="0.82" cy="0.1" r="0.75">
      <stop offset="0" stop-color="#4A90D9" stop-opacity="0.35" />
      <stop offset="0.45" stop-color="#4A90D9" stop-opacity="0.12" />
      <stop offset="0.7" stop-color="#4A90D9" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="seta" x1="0" y1="1" x2="1" y2="0">
      <stop offset="0" stop-color="#4A90D9" />
      <stop offset="1" stop-color="#9DC8F0" />
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)" />
  <circle cx="980" cy="60" r="480" fill="url(#glow)" />

  <image x="90" y="96" width="${LOGO_LARGURA}" height="${LOGO_ALTURA}" href="${LOGO_DATA_URI}" preserveAspectRatio="xMinYMid meet" />

  <text x="90" y="270" font-family="Sora, Arial, sans-serif" font-weight="700" font-size="${eyebrowSize}" letter-spacing="3" fill="#4A90D9">${eyebrowEsc}</text>

  <text x="88" y="360" font-family="Sora, Arial, sans-serif" font-weight="800" font-size="64" fill="#FFFFFF">${linha1Esc}</text>
  <text x="88" y="432" font-family="Sora, Arial, sans-serif" font-weight="800" font-size="64" fill="#FFFFFF">${palavraEsc} <tspan fill="#FFC10A">${sufixoEsc}</tspan></text>
  <path d="M88 448 C 220 470, 340 470, 430 452" stroke="url(#seta)" stroke-width="6" stroke-linecap="round" fill="none" />

  <text x="90" y="500" font-family="Inter, Arial, sans-serif" font-weight="400" font-size="26" fill="#A4B7D2">Site, SEO local e captação por WhatsApp</text>
  <text x="90" y="536" font-family="Inter, Arial, sans-serif" font-weight="400" font-size="${subtituloSize}" fill="#A4B7D2">${subtituloEsc}</text>

  <text x="90" y="592" font-family="Sora, Arial, sans-serif" font-weight="800" font-size="30" fill="#FFFFFF">Sites Rankly</text>
</svg>`;
}
