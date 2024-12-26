import { defineConfig } from 'vite';

export default defineConfig({
  root: 'spam-pie',  // 'spam-pie' 디렉토리로 설정
  build: {
    outDir: 'build',  // 빌드 결과물은 'build' 폴더에 저장
    rollupOptions: {
      input: 'src/index.html',  // 엔트리 파일로 'spam-pie/index.html' 설정
    },
  },
});
