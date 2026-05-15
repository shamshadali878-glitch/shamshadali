import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'

export default defineConfig({
  plugins: [tanstackStart(), tailwindcss(), react(), tsconfigPaths()],
  build: {
    outDir: 'dist',
    
  },
  server: {
    port: 5173,   // ✅ always use 5173
    strictPort: true // ✅ fail if 5173 is busy instead of auto-switching
  },
})