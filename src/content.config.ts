import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content'; 

const works = defineCollection({
    loader: glob({ pattern: "src/content/works/*.md" }),
    schema: ({ image }) => z.object({
        title: z.string().max(50),
        slug: z.string(),
        client: z.string().max(50),
        // Mantiene categoría pero ahora opcional para que puedas escribir cualquier cosa nueva
        category: z.string().optional(),
        services: z.string().max(65).optional(),
        year: z.string().max(4).optional(),
        featuredImage: image(),
        imageTwo: image(),
        imageThree: image(),
        imageFour: image(),
        // Live site opcional, no rompe si no lo pones
        liveSite: z.string().url().optional(),
        description: z.string().max(350).optional(),
        // Campos booleanos opcionales para flexibilidad
        isFeatured: z.boolean().optional(),
        isDraft: z.boolean().optional()
    })
});

export const collections = { works };
