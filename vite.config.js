// Vite config file; shares some options with Rollup.
// This could be written simply as export default {...},
// but using defineConfig will provide Intellisense support
// in editors like VSCode for useful typehints, etc.
import { defineConfig } from 'vite';
import commonjsExternals from 'vite-plugin-commonjs-externals';
import vue2 from 'vite-plugin-vue2';

export default defineConfig( {
	root: 'resources/src',

	plugins: [
		vue2.createVuePlugin(),
		{
			// see https://vitejs.dev/guide/using-plugins.html#enforcing-plugin-ordering
			...commonjsExternals( { externals: [ 'vue' ] } ),
			apply: 'build'
		}
	],

	build: {
		outDir: '../dist',
		assetsDir: '',
		minify: false,
		manifest: true,
		target: 'es2015',
		emptyOutDir: true,

		rollupOptions: {
			input: {
				main: 'resources/src/main.js'
			},

			output: {
				entryFileNames: 'ext.buildSandbox.[name].js',
				chunkFileNames: `ext.buildSandbox.[name].js`,
				assetFileNames: `ext.buildSandbox.[name].[ext]`
			}

			// external: [
			// 	'vue'
			// ]
		}
	}
} );
