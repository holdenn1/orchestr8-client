import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      'components': '/src/components',
      'ui': '/src/components/UI',
      'icons': '/src/assets/icons',
      'slices': '/src/store/slices',
      'actions': '/src/store/actions',
    },
  },
})
