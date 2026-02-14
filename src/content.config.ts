import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content'; 

const works = defineCollection({
    loader: glob({ pattern: "src/content/works/*.md" }),
    schema: ({ image }) => z.object({
        title: z.string().max(50),
        slug: z.string(),
        client: z.string().max(50),
        // Categoria flexible: acepta cualquier texto
        category: z.string(),
        services: z.string().max(65),
        year: z.string().max(4),
        featuredImage: image(),
        imageTwo: image(),
        imageThree: image(),
        imageFour: image(),
        liveSite: z.string().url().optional(), // opcional por si no hay link
        description: z.string().max(350),
        isFeatured: z.boolean(),
        isDraft: z.boolean()
    })
});

export const collections = { works };
