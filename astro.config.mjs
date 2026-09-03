import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://stevewaz.github.io',
  base: '/wazstudio-site',
  vite: {
    plugins: [tailwindcss()],
  },
});
