// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.sitesrankly.com.br',
  trailingSlash: 'ignore',
  build: {
    // CSS crítico inline: menos requisições no primeiro paint.
    inlineStylesheets: 'always',
  },
  compressHTML: true,
});
