(function ($) {
	'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var $__default = /*#__PURE__*/_interopDefaultLegacy($);

	function helloFromA() {
		return 'A';
	}

	function helloFromB() {
		return 'B';
	}

	// eslint-disable-next-line no-jquery/no-global-selector
	$__default['default']( '#sandbox' ).html( `
	<p>
		This page contains data from ${helloFromA()} and ${helloFromB()};
	</p>
` );

}($));
