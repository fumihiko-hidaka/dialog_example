import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        main: resolve(__dirname, 'dialog1.html'),
        about: resolve(__dirname, 'dialog2.html'),
        contact: resolve(__dirname, 'dialog3.html'),
      },
    },
  },
});
