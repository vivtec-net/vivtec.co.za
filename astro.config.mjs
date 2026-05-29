// @ts-check
import { defineConfig } from "astro/config";
import { satteri } from "@astrojs/markdown-satteri";

import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
	site: "https://vivtec.co.za",
	markdown: {
		processor: satteri({
			features: { directive: true },
		}),
	},
	integrations: [mdx(), sitemap()],
	trailingSlash: "always",
});
