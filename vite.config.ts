import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import ViteImagemin from 'vite-plugin-imagemin';

export default defineConfig({
  plugins: [sveltekit(),
    ViteImagemin() // 이미지 최적화 플러그인
  ],
  assetsInclude: ['**/*.png'], // PNG 파일을 포함
  build: {
    outDir: '.svelte-kit/output', // SvelteKit 기본 빌드 디렉토리
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['svelte', 'svelte/internal'], // 특정 라이브러리 분리
        },
      },
    },
  },
});


