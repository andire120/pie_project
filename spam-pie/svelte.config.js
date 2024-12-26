import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter(),
    paths: {
      base: '',  // 필요시 base 경로를 설정 (배포 환경에 맞게 설정)
    },
  },
};
