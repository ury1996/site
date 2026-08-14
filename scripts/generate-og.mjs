// Gera public/og.png (1200x630) a partir de um SVG desenhado em memória.
// Rode com `npm run og` sempre que quiser atualizar a imagem de compartilhamento.
import sharp from 'sharp';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const outDir = path.dirname(fileURLToPath(import.meta.url));
const outFile = path.join(outDir, '..', 'public', 'og.png');

// A logo vai embutida em base64: o SVG é rasterizado fora do contexto do
// site, então um caminho relativo para /images não resolveria.
const logoFile = path.join(outDir, '..', 'public', 'images', 'marca', 'logo.png');
const logoDataUri = `data:image/png;base64,${fs.readFileSync(logoFile).toString('base64')}`;

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

  <image x="90" y="96" width="232" height="65" href="${logoDataUri}" preserveAspectRatio="xMinYMid meet" />

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
