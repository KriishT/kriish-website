import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://kriisht.vercel.app",
  // Inline edits sit between words, so keep the whitespace the source has.
  compressHTML: true,
  integrations: [
    mdx(),
    sitemap({ filter: (page) => !page.includes("/system") }),
  ],
});
