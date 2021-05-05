import Vue from 'vue';
import Demo from './Demo.vue';
import '@wikimedia/wvui/dist/wvui.css';

const foo = 'foo';

new Vue( {
	render: function ( h ) { return h( Demo ); }
} ).$mount( '#sandbox' );

// eslint-disable-next-line no-console
console.log(
	`Hello from ${mw.message( 'buildsandbox-title' ).text()}`
);

export default foo;
