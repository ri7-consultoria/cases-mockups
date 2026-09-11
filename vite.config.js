import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        insurtech: resolve(__dirname, 'cases/insurtech/index.html'),
        corporate: resolve(__dirname, 'cases/corporate/index.html'),
        comercial: resolve(__dirname, 'cases/comercial/index.html'),
      },
    },
  },
});
