import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blogs = defineCollection({
	loader: glob({ pattern: "**/*.mdx", base: "./src/content/blogs" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		image: z.string(),
	}),
});

const demos = defineCollection({
	loader: glob({ pattern: "**/*.mdx", base: "./src/content/blogs" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
	}),
});

const newsletters = defineCollection({
	loader: glob({ pattern: "**/*.mdx", base: "./src/content/blogs" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
	}),
});

const products = defineCollection({
	loader: glob({ pattern: "**/*.mdx", base: "./src/content/blogs" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
	}),
});

export const collections = { blogs, demos, newsletters, products };
