import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import eslintPlugin from 'vite-plugin-eslint'; // 新增
import stylelitPlugin from 'vite-plugin-stylelint';
import checker from 'vite-plugin-checker';
import AutoImport from 'unplugin-auto-import/vite'; // 自动导入常用的使用的第三方库的 API
import Components from 'unplugin-vue-components/vite'; // 组件自动按需导入。
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import viteCompression from 'vite-plugin-compression'; // gzip压缩
import { visualizer } from 'rollup-plugin-visualizer'; // todo 可视化并分析构建包,查看哪些模块占用空间大小,后面处理命令行控制开关？
import { createHtmlPlugin } from 'vite-plugin-html'; // 实现动态设置标题，及注入 js 路径

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, __dirname);
	return {
		base: env.VITE_USER_NODE_ENV === 'production' ? './' : '/', // https://cn.vitejs.dev/config/shared-options.html#base
		plugins: [
			vue(),
			createHtmlPlugin({
				minify: true, // 是否压缩 html
				/**
				 * 在这里写entry后，你将不需要在`index.html`内添加 script 标签，原有标签需要删除
				 * @default src/main.ts
				 */
				//  entry: 'src/main.ts',
				/**
				 * 如果你想将 `index.html`存放在指定文件夹，可以修改它，否则不需要配置
				 * @default index.html
				 */
				// template: 'public/index.html',
				/**
				 * 需要注入 index.html ejs 模版的数据
				 */
				inject: {
					data: {
						title: '测试修改标题',
						injectScript: '',
					},
				},
			}),
			visualizer({
				open: true, // 注意这里要设置为true，否则无效
				gzipSize: true, // 分析图生成的文件名
				brotliSize: true, // 收集 brotli 大小并将其显示
				filename: 'stats.html', // 分析图生成的文件名
			}),
			viteCompression({
				verbose: true, // 是否在控制台中输出压缩结果
				disable: false, // 是否禁用
				threshold: 10240, // 如果体积大于阈值，则进行压缩，单位为b
				algorithm: 'gzip', // 压缩算法，可选[‘gzip’，‘brotliCompress’，‘deflate’，‘deflateRaw’]
				ext: '.gz', // 生成的压缩包的后缀
			}),
			checker({
				typescript: true,
				vueTsc: true,
			}),
			stylelitPlugin(),
			Components({
				dirs: ['src/components'], // 目标文件夹
				extensions: ['vue', 'jsx'], // 文件类型
				dts: 'src/components.d.ts', // 输出文件，里面都是一些import的组件键值对
				// ui库解析器，也可以自定义，需要安装相关UI库
				resolvers: [
					// VantResolver(),
					ElementPlusResolver(),
					// AntDesignVueResolver(),
					// HeadlessUiResolver(),
					// ElementUiResolver()
				],
			}),
			AutoImport({
				resolvers: [ElementPlusResolver()],
				include: [
					/\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
					/\.vue$/,
					/\.vue\?vue/, // .vue
				],
				eslintrc: {
					enabled: false, // 若没此json文件，先开启，生成后在关闭
					filepath: './.eslintrc-auto-import.json', // 设置eslintrc-auto-import.json生成路径 Default `./.eslintrc-auto-import.json`
					globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
				},
				imports: ['vue', 'vue-router'], // 自动引入vue和vue-router相关函数
				dts: 'src/types/auto-import.d.ts', // 生成 `auto-import.d.ts` 全局声明
			}),
			// 增加下面的配置项,这样在运行时就能检查eslint规范
			eslintPlugin({
				include: [
					'src/**/*.js',
					'src/**/*.ts',
					'src/**/*.vue',
					'src/*.js',
					'src/*.ts',
					'src/*.vue',
				],
			}),
		],
		resolve: {
			// ↓import引入忽略文件的后缀名
			extensions: [
				'.js',
				'.ts',
				'.jsx',
				'.tsx',
				'.json',
				'.vue',
				'.css',
				'.less',
				'.css',
			],
			// ↓路径别名
			alias: {
				'@': resolve(__dirname, './src'),
			},
		},
		server: {
			host: '0.0.0.0', // 如果将此设置为 0.0.0.0 或者 true 将监听所有地址，包括局域网和公网地址。
			port: 4000, // 设置服务启动端口号，如果端口已经被使用，Vite 会自动尝试下一个可用的端口
			https: false, // 是否开启https
			open: true, // boolean | string 设置服务启动时是否自动打开浏览器，当此值为字符串时，会被用作 URL 的路径名
			cors: true, // 为开发服务器配置 CORS，配置为允许跨域
			// 设置代理，根据我们项目实际情况配置
			proxy: {
				'/api': {
					target: 'http://127.0.0.1:8000', // 后台服务地址
					changeOrigin: true, // 是否允许不同源
					secure: false, // 支持https
					rewrite: (path) => path.replace(/^\/api/, ''),
				},
			},
		},
		build: {
			sourcemap: false, // 不生成 source map
			minify: 'terser',
			terserOptions: {
				compress: {
					// 打包时清除 console 和 debug 相关代码
					drop_console: true,
					drop_debugger: true,
				},
			},
		},
		css: {},
	};
});
