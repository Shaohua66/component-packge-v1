import { fileURLToPath, URL } from 'node:url'
import { resolve, dirname } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  publicDir: 'empty', // 静态资源指向
  build: {
    outDir: 'dist/es',
    lib: {
      entry: resolve(__dirname, 'src/bundle.js'), // 打包入口指向
      name: 'MshPlus', // 组件名称
      fileName: 'msh-plus',
      formats: ['es']
    },
    rollupOptions: {
      external: [
        'vue',
        '@fortawesome/fontawesome-svg-core',
        '@fortawesome/free-solid-svg-icons',
        '@fortawesome/vue-fontawesome',
        '@popperjs/core',
        'lodash-es'
      ]
    }
  }
})
