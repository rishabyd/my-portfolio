import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    site: "https://rishabyadav.com",
    integrations: [sitemap(), mdx()],
});
