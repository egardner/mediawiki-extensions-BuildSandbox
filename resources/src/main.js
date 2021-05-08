import Vue from 'vue';
import Demo from './Demo.vue';
import '@wikimedia/wvui/dist/wvui.css';

export default function ( config ) {
	new Vue( {
		render: function ( h ) { return h( Demo, { props: { config } } ); }
	} ).$mount( '#sandbox' );

	// eslint-disable-next-line no-console
	console.log(
		`Hello from ${mw.message( 'buildsandbox-title' ).text()}`
	);
}
