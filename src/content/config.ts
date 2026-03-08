import { z, defineCollection } from "astro:content";

const Lang = z.enum(["en", "es"]);

const projects = defineCollection({
  type: "content",
  schema: z.object({
    lang: Lang,
    slugBase: z.string(),        // "distillation"
    title: z.string(),
    date: z.date(),
    status: z.enum(["in_progress", "shipped", "paused"]).default("in_progress"),
    summary: z.string(),
    stack: z.array(z.string()).default([]),
    links: z
      .object({
        github: z.string().url().optional(),
        demo: z.string().url().optional(),
        paper: z.string().url().optional(),
      })
      .default({}),
    featured: z.boolean().default(false),
  }),
});

const updates = defineCollection({
  type: "content",
  schema: z.object({
    lang: Lang,
    slugBase: z.string(),        // apunta a project.slugBase
    title: z.string(),
    date: z.date(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { projects, updates };