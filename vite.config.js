import { defineConfig } from 'vite'; 
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Para uso com GitHub Pages diretamente da branch main
});