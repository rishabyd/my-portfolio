import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { SITE } from "./src/config/site";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: SITE.url,
  integrations: [sitemap(), mdx()],
});
