// Gera public/og.png (1200x630) a partir de um SVG desenhado em memória.
// Rode com `npm run og` sempre que quiser atualizar a imagem de compartilhamento.
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const outDir = path.dirname(fileURLToPath(import.meta.url));
const outFile = path.join(outDir, '..', 'public', 'og.png');

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
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

  <text x="90" y="270" font-family="Arial, sans-serif" font-weight="800" font-size="30" letter-spacing="4" fill="#FFB627">SITES PARA EMPRESAS DE ENERGIA SOLAR</text>

  <text x="88" y="360" font-family="Arial, sans-serif" font-weight="800" font-size="64" fill="#FFFFFF">Sites que geram</text>
  <text x="88" y="432" font-family="Arial, sans-serif" font-weight="800" font-size="64" fill="#FFFFFF">orçamentos <tspan fill="url(#solido)">todos os dias</tspan></text>

  <text x="90" y="500" font-family="Arial, sans-serif" font-weight="400" font-size="26" fill="#D7E2F0">Criação de sites, SEO local e captação por WhatsApp</text>
  <text x="90" y="536" font-family="Arial, sans-serif" font-weight="400" font-size="26" fill="#D7E2F0">para integradoras solares em Minas Gerais.</text>

  <text x="90" y="592" font-family="Arial, sans-serif" font-weight="800" font-size="30" fill="#FFFFFF">Sites Rankly</text>
</svg>
`;

await sharp(Buffer.from(svg)).png({ quality: 90 }).toFile(outFile);
console.log(`OG image gerada em ${outFile}`);
