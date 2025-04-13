// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	// For a GitHub user site, use the format: https://username.github.io
	site: 'https://therealscottcarlow.github.io',
	
	// No base path needed for username.github.io repositories
	// base: '/', // Commented out as it's the default
	
	// Default build output directory
	outDir: './dist',
	
	// Build settings
	build: {
		// Ensure assets have the correct paths
		assets: '_assets',
	},
	
	integrations: [
		mdx(), 
		sitemap(),
		tailwind({
			// Disable the default base styles
			applyBaseStyles: false,
		})
	],
});
