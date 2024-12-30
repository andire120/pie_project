import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	assetsInclude: ['**/*.png'],
	plugins: [sveltekit()],
	build: {
		outDir: 'dist',
	},
});
