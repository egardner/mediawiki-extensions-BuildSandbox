import { helloFromA } from './moduleA';
import { helloFromB } from './moduleB';
import $ from 'jquery';

// eslint-disable-next-line no-jquery/no-global-selector
$( '#sandbox' ).html( `
	<p>
		This page contains data from ${helloFromA()} and ${helloFromB()};
	</p>
` );
