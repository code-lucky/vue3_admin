import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default (({ mode }) => {
  const data = loadEnv(mode, process.cwd())
  return defineConfig({
    base: './',
    plugins: [
      vue(),
      //配置mock
      viteMockServe({
        supportTs: false,
        logger: false,
        mockPath: "./mock/"
      })
    ],
    build: {
      target: 'modules',
      outDir: 'dist', //指定输出路径
      assetsDir: 'assets', // 指定生成静态资源的存放路径
      minify: 'terser', // 混淆器，terser构建后文件体积更小
      rollupOptions: {
        output: {
          //  指定打包输出的js文件名称
          chunkFileNames: "js/[name]-[hash].js",
          entryFileNames: "js/[name]-[hash].js",
          // assetFileNames: "[ext]/[name]-[hash].[ext]"
          //设置css和图片的文件夹名称，但是有弊端，css设置的背景图片访问不到,路径是错误的
        }
      }
    },
    css: {
      /* CSS 预处理器 */
      preprocessorOptions: {
        scss: {
          //引用全局的scss
          additionalData: `@import "./src/styles/index.scss";`
        }
      }
    },
    //配置@
    resolve: {
      alias: {
        "@": resolve(__dirname, "src")
      }
    },

    server: {
      host: '0.0.0.0',
      port: data.VITE_PORT as unknown as number||3003,
      hmr: true,
      proxy: {
        // 选项写法
        '/api': {
          target: data.VITE_BASE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }
  })
})

