import { babel } from '@rollup/plugin-babel';

export default {
	input: {
		// Do this for each module you want to output;
		// the output bundle will live at:
		// resources/dist/ext.buildSandbox.[key].js
		main: 'resources/src/main.js'
	},

	// Use "external" option when you wish to ensure that a library you import
	// is not being included in the bundled output. jQuery, Vue, other libraries
	// provided by mw core, etc.
	// see: https://rollupjs.org/guide/en/#external
	external: [
		'jquery'
	],

	output: {
		// Where bundles should live
		dir: 'resources/dist',

		// also supports 'cjs' and 'esm'
		format: 'iife',

		// Use this to dynamically generate filenames
		entryFileNames: 'ext.buildSandbox.[name].js',

		// see: https://rollupjs.org/guide/en/#outputglobals
		globals: {
			jquery: '$'
		},

		// enable minification
		compact: false
	},

	// Configure any necessary plugins
	// Rollup has an official babel plugin that is used here for JS
	// transpilation:
	// https://github.com/rollup/plugins/tree/master/packages/babel
	plugins: [
		babel( { babelHelpers: 'bundled' } )
	]
};
