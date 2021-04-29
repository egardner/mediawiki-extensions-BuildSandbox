(function($2) {
  "use strict";
  function _interopDefaultLegacy(e) {
    return e && typeof e === "object" && "default" in e ? e : {default: e};
  }
  var $__default = /* @__PURE__ */ _interopDefaultLegacy($2);
  function helloFromA() {
    return "A";
  }
  function helloFromB() {
    return "B";
  }
  const {default: Vue} = (() => {
    const mod = require("vue");
    return mod && mod.__esModule ? mod : Object.assign(Object.create(null), mod, {default: mod, [Symbol.toStringTag]: "Module"});
  })();
  $__default["default"]("#sandbox").html(`
	<p>
		This page contains data from ${helloFromA()} and ${helloFromB()};
	</p>

	<p>Running Vue version ${Vue.version}</p>
`);
})($);
