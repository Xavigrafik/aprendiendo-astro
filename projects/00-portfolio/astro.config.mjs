import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://ceramica-guiomar.com', // Mantén tu URL
  integrations: [sitemap()], // Deja esto vacío por ahora
});