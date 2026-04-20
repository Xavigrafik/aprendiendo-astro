// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders'; 

// PROJECTS ======================================
const projects = defineCollection({

    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/projects" }),

    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
        image: image().optional(),
    }),
});

// BOOKS ======================================
const books = defineCollection({
    loader: file("src/content/data/books.json"),
    schema: z.object({
        id: z.string(),
        title: z.string(),
        author: z.string(),
        url: z.string().url(),
        description: z.string(),
    }),
});

export const collections = { projects, books };