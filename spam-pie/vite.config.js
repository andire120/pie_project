import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	root: 'src',
	build: {
		outDir: 'dist',
		rollupOptions: {
			input: 'src/app.html' // SvelteKit의 진입점 파일
		}
	}
});