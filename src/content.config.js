import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders'; // Not available with legacy API

const events = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/events/" }),
  schema: z.object({
    title: z.string(),
    publish_date: z.string(), 
    description: z.string(),
    project: z.string(),
    project_link: z.string(),
    edition: z.number(),
    type: z.string(),
    gallery: z.string().optional(),
    count_gallery: z.number().optional()
  }),
});


export const collections = { events };