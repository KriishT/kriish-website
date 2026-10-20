import { defineConfig, fontProviders } from "astro/config";
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
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Schibsted Grotesk",
      cssVariable: "--font-display",
      // static weights, not the variable file: some WebKit builds ignore the weight axis
      weights: [500, 600, 700, 800, 900],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["sans-serif"],
    },
    {
      provider: fontProviders.fontsource(),
      name: "Literata",
      cssVariable: "--font-text",
      weights: [400, 600],
      styles: ["normal", "italic"],
      subsets: ["latin"],
      fallbacks: ["serif"],
    },
  ],
});
