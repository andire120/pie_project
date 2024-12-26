import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    // 어댑터를 static으로 설정
    adapter: adapter(),

    // 옵션 설정 (필요한 경우 추가 설정)
    paths: {
      base: '', // 예: '/my-app' 형태로 배포하려면 '/my-app'을 지정
    },
  },
};
