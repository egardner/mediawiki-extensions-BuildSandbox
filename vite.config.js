// Vite config file; shares some options with Rollup.
// This could be written simply as export default {...},
// but using defineConfig will provide Intellisense support
// in editors like VSCode for useful typehints, etc.
import { defineConfig } from 'vite';
import vue2 from 'vite-plugin-vue2';

export default defineConfig( {
	root: 'resources/src',
	plugins: [
		vue2.createVuePlugin()
	],
	build: {
		outDir: '../dist',
		assetsDir: '',
		minify: false,
		emptyOutDir: true,
		target: 'es2015',

		lib: {
			entry: 'main.js',
			formats: [ 'cjs' ],
			name: 'buildSandbox'
		},

		rollupOptions: {
			output: {
				entryFileNames: 'ext.buildSandbox.[name].js',
				chunkFileNames: 'ext.buildSandbox.[name].js',
				assetFileNames: 'ext.buildSandbox.[name].[ext]'
			},
			external: [
				'vue'
			]
		}
	}
} );
