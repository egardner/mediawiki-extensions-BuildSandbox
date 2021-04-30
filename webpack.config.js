const path = require( 'path' );

module.exports = {
	entry: './resources/src/main/index.js',
	output: {
		filename: 'ext.buildSandbox.main.js',
		// eslint-disable-next-line no-undef
		path: path.resolve( __dirname, 'resources/dist' )
	},
	externals: {
		jquery: 'jQuery'
	},
	optimization: {
		minimize: false
	}
};
