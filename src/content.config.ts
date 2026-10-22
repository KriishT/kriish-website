import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob, file } from "astro/loaders";

const link = z.object({ label: z.string(), href: z.url() });

// Flagships get a case-study page; everything else is a line in the archive.
const work = defineCollection({
  loader: glob({ base: "./src/content/work", pattern: "*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      // The line the old site used for this project, kept so a version can show the edit.
      was: z.string().optional(),
      wasNote: z.string().optional(),
      description: z.string(),
      flagship: z.boolean(),
      order: z.number(),
      kind: z.string(),
      role: z.string(),
      when: z.string().optional(),
      team: z.string().optional(),
      stack: z.array(z.string()),
      links: z.array(link).default([]),
      cover: image().optional(),
      coverAlt: z.string().optional(),
    }),
});

const roles = defineCollection({
  loader: file("./src/content/roles.json"),
  schema: ({ image }) =>
    z.object({
      order: z.number(),
      org: z.string(),
      role: z.string(),
      where: z.string(),
      when: z.string(),
      current: z.boolean(),
      academic: z.boolean().default(false),
      points: z.array(z.string()),
      tools: z.array(z.string()),
      links: z.array(link).default([]),
      work: z.string().optional(),
      logo: image().optional(),
      // a snapshot of the organisation's own site, when it helps to see it
      shot: image().optional(),
      shotAlt: z.string().optional(),
    }),
});

export const collections = { work, roles };
