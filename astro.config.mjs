// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.sitesrankly.com.br',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: {
    // CSS crítico inline: menos requisições no primeiro paint.
    inlineStylesheets: 'always',
  },
  compressHTML: true,
});
