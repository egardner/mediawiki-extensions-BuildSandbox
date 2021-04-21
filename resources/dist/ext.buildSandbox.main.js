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

	// Use "import" for source modules to get tree-shaking;
	// we need to call the module at runtime.
	// Finally, both jQuery and Vue should be designated as "external"
	// libraries in rollup.config.js because we want to ensure they are
	// not included in the final bundle. Both are still included as
	// devDependencies because we may need to load them for unit tests, etc.

	var Vue = require('vue'); // eslint-disable-next-line no-jquery/no-global-selector


	$__default['default']('#sandbox').html("\n\t<p>\n\t\tThis page contains data from ".concat(helloFromA(), " and ").concat(helloFromB(), ";\n\t</p>\n"));
	console.log(Vue.version);

}($));
