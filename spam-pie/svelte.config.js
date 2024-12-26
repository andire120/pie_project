import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';

export default {
  kit: {
    adapter: adapter(),
    target: '#svelte',  // 이 설정이 올바르게 되어 있는지 확인하세요.
    vite: {
      // Vite 관련 커스터마이징 설정
    },
  },
  preprocess: sveltePreprocess(),
};
