import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://learn.grow.graphics/',
	integrations: [
		starlight({
			title: 'Grow Graphics',
			logo: {
				src: './src/assets/gdgrowlogo.svg',
			},
			social: {
				github: 'https://github.com/grow-graphics/gd',
			},
			sidebar: [
				{
					label: 'Documentation',
					autogenerate: { directory: 'documentation' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
