import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        // Ponto de entrada principal
        main: resolve(__dirname, 'index.html'),
        // Pagina secundaria de sobre
        about: resolve(__dirname, 'src/about/index.html'),        
      },
    },
  },
});