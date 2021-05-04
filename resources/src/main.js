import Vue from 'vue';
import Demo from './Demo.vue';
import '@wikimedia/wvui/dist/wvui.css';

new Vue( {
	render: function ( h ) { return h( Demo ); }
} ).$mount( '#sandbox' );
