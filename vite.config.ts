import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [
      react(),
    ],
    define: {
      'process.env.AZURE_APP_CLIENT_ID': JSON.stringify(env.AZURE_APP_CLIENT_ID),
    },
  };
});