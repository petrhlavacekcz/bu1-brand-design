// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	// TODO: Replace with the actual production domain
	site: 'https://example.com',
	base: '/bu1-brand-system',
	integrations: [
		starlight({
			logo: {
				src: './src/assets/bu1sport-logo.svg',
				replacesTitle: true,
				alt: 'BU1SPORT',
			},
			customCss: ['./src/styles/starlight.css'],
			title: 'BU1 Brand & Content System',
			// disable404Route removed to allow custom 404 docs pages to render correctly
			description: 'Single source of truth for brand, design, AI, communication and ecommerce rules.',
			sidebar: [
				{
					label: 'Brand',
					autogenerate: { directory: 'brand' },
				},
				{
					label: 'Design',
					autogenerate: { directory: 'design' },
				},
				{
					label: 'Ecommerce',
					autogenerate: { directory: 'ecommerce' },
				},
				{
					label: 'AI',
					autogenerate: { directory: 'ai' },
				},
				{
					label: 'Governance',
					autogenerate: { directory: 'governance' },
				},
				{
					label: 'Templates',
					autogenerate: { directory: 'templates' },
				},
			],
		}),
	],
});
