/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./resources/src/main/moduleA.js
function helloFromA() {
	return 'A';
}

function unusedFunction() {
	return 'dead code tells no tales';
}

;// CONCATENATED MODULE: ./resources/src/main/moduleB.js
function helloFromB() {
	return 'B';
}

;// CONCATENATED MODULE: external "jQuery"
const external_jQuery_namespaceObject = jQuery;
var external_jQuery_default = /*#__PURE__*/__webpack_require__.n(external_jQuery_namespaceObject);
;// CONCATENATED MODULE: ./resources/src/main/index.js
// Use "import" for source modules to get tree-shaking;
// The files will be in-lined into the bundle with dead code removed
// jQuery is globally-available in MediaWiki;
// we can use "import" here as well, but it needs to be designated
// as a global variable in rollup.config.js




// eslint-disable-next-line no-jquery/no-global-selector
external_jQuery_default()( '#sandbox' ).html( `
	<p>
		This page contains data from ${helloFromA()} and ${helloFromB()};
	</p>
` );

/******/ })()
;