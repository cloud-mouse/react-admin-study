import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    outDir: 'dist', // 相对于根目录的构建输出位置。如果目录存在，则将在构建之前删除该目录。
    minify: 'esbuild', // 混淆器，terser 构建后文件体积更小，'boolean' | 'terser' | 'esbuild'
    reportCompressedSize: true,
    // 规定触发警告的 chunk 大小.默认500
    // 消除打包大小超过500kb警告
    chunkSizeWarningLimit: 4000,
    rollupOptions: {
      // 静态资源分类打包
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().match(/\/node_modules\/(?!.pnpm)(?<moduleName>[^/]*)\//)?.groups!.moduleName ?? 'vender'
          }
        },
      },
    },
  },
})
