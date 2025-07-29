import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://einburgerungstest.github.io',
  base: '/landing',
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'ru'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
