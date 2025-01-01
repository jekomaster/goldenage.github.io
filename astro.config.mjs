import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: "https://the-golden-age.netlify.app",
  integrations: [react()],
  vite: {
    build: {
      rollupOptions: {
        external: ['lit'], // Externalize the 'lit' module
      },
    },
  },
});






