import { babel } from '@rollup/plugin-babel';
import cleanup from 'rollup-plugin-cleanup';
import vue from 'rollup-plugin-vue';

/**
 * We are building multiple bundles, but we want to output them
 * in a consistent way for consumption in ResourceLoader.
 *
 * This object tells Rollup to do the following:
 * - Build each bundle as a single file in the resources/dist folder
 * - Use the key in the "input" object to determine the filename
 * - Build each bundle in IIFE format
 * - Provide the "$" global as an argument to the IIFE
 * - Disable minification (RL will handle)
 */
const sharedOutputConfig = {
	dir: 'resources/dist',
	format: 'iife',
	entryFileNames: 'ext.buildSandbox.[name].js',
	globals: {
		jquery: '$'
	},
	compact: false
};

// To build multiple, independent bundles, pass an array of config objects to
// Rollup instead of a single on. This approach is necessary if you want to
// build separate UMD/IIFE modules out of separate entry points, which will
// likely be a common scenario when working with ResourceLoader
// see: https://github.com/rollup/rollup/issues/2935
export default [ {
	// Config for the "main" JS module
	input: { main: 'resources/src/main/index.js' },
	external: [ 'jquery' ], // use External for libraries already provided by MW
	output: sharedOutputConfig,
	plugins: [
		babel( { babelHelpers: 'bundled' } ),
		cleanup()
	]
}, {
	// Config for the "vue" JS module
	input: { vue: 'resources/src/vue/index.js' },
	external: [ 'jquery', 'vue', 'wvui' ],
	output: sharedOutputConfig,
	plugins: [
		vue(),
		babel( {
			babelHelpers: 'bundled',
			extensions: [ '.js', '.jsx', '.es6', '.es', '.mjs', '.vue' ]
		} ),
		cleanup()
	]
} ];
