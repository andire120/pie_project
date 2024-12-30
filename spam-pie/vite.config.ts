import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	assetsInclude: ['**/*.png'],
	plugins: [sveltekit()],
	build: {
		outDir: 'dist',
		rollupOptions: {
			// Rollup 옵션 추가
			output: {
				manualChunks: {
				vendor: ['svelte', 'svelte/internal'], // 예: 특정 라이브러리를 별도 청크로 분리
				},
			},
		},
	},
});




