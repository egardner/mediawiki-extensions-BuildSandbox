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

	var Vue = require('vue');
	$__default['default']('#sandbox').html("\n\t<p>\n\t\tThis page contains data from ".concat(helloFromA(), " and ").concat(helloFromB(), ";\n\t</p>\n"));
	console.log(Vue.version);

}($));
