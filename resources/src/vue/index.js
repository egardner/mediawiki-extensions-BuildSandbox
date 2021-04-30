const Vue = require( 'vue' );

import Demo from './Demo.vue';

new Vue( {
	render: function ( h ) { return h( Demo ); }
} ).$mount( '#vue' );
