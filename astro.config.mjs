import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://vecia.com',
  output: 'hybrid',
  adapter: vercel({
    edgeMiddleware: true,
  }),
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: 'fr-fr',
        locales: {
          'fr-fr': 'fr-FR',
          'fr-ch': 'fr-CH', 
          'en-ae': 'en-AE',
        },
      },
    }),
  ],
  i18n: {
    defaultLocale: 'fr-fr',
    locales: ['fr-fr', 'fr-ch', 'en-ae'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
  vite: {
    ssr: {
      external: ['node:buffer', 'node:path', 'node:fs', 'node:os', 'node:crypto'],
    },
  },
});