import { defineConfig } from 'vite';
import path from 'path-browserify';

export default defineConfig({
  resolve: {
    alias: {
      path: path,  // 'path' 모듈을 'path-browserify'로 대체
    },
  },
  root: 'spam-pie',  // 루트 디렉토리 설정
  build: {
    outDir: 'build',  // 빌드 결과물은 'build' 폴더에 저장
    rollupOptions: {
      input: 'spam-pie/index.html',  // 엔트리 파일 설정
    },
  },
});
