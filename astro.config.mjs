// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({

  site: "https://alma-ai.space",

  output: "server",

  adapter: vercel(),

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    react(),
    sitemap(),
  ],

});