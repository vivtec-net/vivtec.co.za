import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

export default defineConfig({
	site: "https://vivtec.co.za",
	base: "/",
	trailingSlash: "always",
	integrations: [mdx(), sitemap()],
});
