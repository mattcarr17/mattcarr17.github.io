// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// Your live URL. If you serve from <user>.github.io/<repo> instead of a custom
	// domain, set site to 'https://<user>.github.io' and add base: '/<repo>'.
	site: 'https://mattcarr.co',
	integrations: [mdx(), sitemap()],
	// Old template links keep working.
	redirects: {
		'/blog': '/writing',
	},
	markdown: {
		shikiConfig: {
			themes: { light: 'github-light', dark: 'github-dark' },
		},
	},
});
