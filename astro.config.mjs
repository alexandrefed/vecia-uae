import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://vecia-uae.vercel.app',
  output: 'static',
  integrations: [
    tailwind(),
    sitemap(),
  ],
  // No i18n config - English only site
  vite: {
    ssr: {
      external: ['node:buffer', 'node:path', 'node:fs', 'node:os', 'node:crypto'],
    },
  },
});