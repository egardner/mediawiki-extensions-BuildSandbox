// Use "import" for source modules to get tree-shaking;
// The files will be in-lined into the bundle with dead code removed
// jQuery is globally-available in MediaWiki;
// we can use "import" here as well, but it needs to be designated
// as a global variable in rollup.config.js
import { helloFromA } from './moduleA';
import { helloFromB } from './moduleB';
import $ from 'jquery';

// eslint-disable-next-line no-jquery/no-global-selector
$( '#sandbox' ).html( `
	<p>
		This page contains data from ${helloFromA()} and ${helloFromB()};
	</p>
` );
