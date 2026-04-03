import tailwindcss from "@tailwindcss/vite"
import sitemap from "@astrojs/sitemap"
import { defineConfig } from "astro/config"

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://rishabyadav.com",
  integrations: [sitemap()],
})
