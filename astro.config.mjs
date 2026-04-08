// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightCodeblockFullscreen from 'starlight-codeblock-fullscreen';
import starlightPageActions from 'starlight-page-actions';
import cleanMarkdown from './src/plugins/clean-markdown.mjs';

// https://astro.build/config
export default defineConfig({
	site: 'https://petrhlavacekcz.github.io',
	base: '/bu1-brand-design',
	integrations: [
		starlight({
			plugins: [
				starlightCodeblockFullscreen({
					fullscreenButtonTooltip: 'Otevřít na celou obrazovku',
					addToUntitledBlocks: true,
				}),
				starlightPageActions({
					baseUrl: 'https://petrhlavacekcz.github.io/bu1-brand-design',
					prompt:
						'Použij tuto stránku BU1SPORT jako canonical zdroj pravdy. Přečti {url} a odpovídej jen podle pravidel a faktů, které jsou na ní uvedené.',
					share: false,
					actions: {
						chatgpt: true,
						claude: true,
						t3chat: false,
						v0: false,
						markdown: true,
					},
				}),
			],
			logo: {
				src: './src/assets/bu1sport-logo.svg',
				replacesTitle: true,
				alt: 'BU1SPORT',
			},
			customCss: ['./src/styles/starlight.css'],
			title: 'BU1 Brand & Content System',
			// disable404Route removed to allow custom 404 docs pages to render correctly
			description: 'Single source of truth for brand, design, AI, communication and e-commerce rules.',
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
		cleanMarkdown(),
	],
});
