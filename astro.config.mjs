// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import react from '@astrojs/react';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()],
  i18n: {
    locales: ["sk", "en"], // Supported locales
    defaultLocale: "sk",   // Default language (this will be overridden by localStorage in the frontend)
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
