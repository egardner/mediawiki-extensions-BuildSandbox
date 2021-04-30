(function () {
	'use strict';

	var wvui$1 = require('wvui');
	var script$2 = {
	  components: {
	    'wvui-button': wvui$1.WvuiButton
	  },
	  data: function data() {
	    return {
	      clicked: 0
	    };
	  }
	};

	function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
	, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
	  if (typeof shadowMode !== 'boolean') {
	    createInjectorSSR = createInjector;
	    createInjector = shadowMode;
	    shadowMode = false;
	  }
	  const options = typeof script === 'function' ? script.options : script;
	  if (template && template.render) {
	    options.render = template.render;
	    options.staticRenderFns = template.staticRenderFns;
	    options._compiled = true;
	    if (isFunctionalTemplate) {
	      options.functional = true;
	    }
	  }
	  if (scopeId) {
	    options._scopeId = scopeId;
	  }
	  let hook;
	  if (moduleIdentifier) {
	    hook = function (context) {
	      context = context ||
	      this.$vnode && this.$vnode.ssrContext ||
	      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
	      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
	        context = __VUE_SSR_CONTEXT__;
	      }
	      if (style) {
	        style.call(this, createInjectorSSR(context));
	      }
	      if (context && context._registeredComponents) {
	        context._registeredComponents.add(moduleIdentifier);
	      }
	    };
	    options._ssrRegister = hook;
	  } else if (style) {
	    hook = shadowMode ? function (context) {
	      style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
	    } : function (context) {
	      style.call(this, createInjector(context));
	    };
	  }
	  if (hook) {
	    if (options.functional) {
	      const originalRender = options.render;
	      options.render = function renderWithStyleInjection(h, context) {
	        hook.call(context);
	        return originalRender(h, context);
	      };
	    } else {
	      const existing = options.beforeCreate;
	      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
	    }
	  }
	  return script;
	}

	/* script */
	var __vue_script__$2 = script$2;
	/* template */

	var __vue_render__$2 = function __vue_render__() {
	  var _vm = this;

	  var _h = _vm.$createElement;

	  var _c = _vm._self._c || _h;

	  return _c("div", [_c("h2", [_vm._v("WvuiButton.vue")]), _vm._v(" "), _c("wvui-button", {
	    on: {
	      click: function click($event) {
	        _vm.clicked++;
	      }
	    }
	  }, [_vm._v("\n\t\tDefault Button\n\t")]), _vm._v(" "), _c("wvui-button", {
	    attrs: {
	      action: "progressive"
	    },
	    on: {
	      click: function click($event) {
	        _vm.clicked++;
	      }
	    }
	  }, [_vm._v("\n\t\tProgressive button\n\t")]), _vm._v(" "), _c("wvui-button", {
	    attrs: {
	      action: "destructive"
	    },
	    on: {
	      click: function click($event) {
	        _vm.clicked--;
	      }
	    }
	  }, [_vm._v("\n\t\tDestructive button\n\t")]), _vm._v(" "), _c("wvui-button", {
	    attrs: {
	      quiet: true
	    },
	    on: {
	      click: function click($event) {
	        _vm.clicked++;
	      }
	    }
	  }, [_vm._v("\n\t\tQuiet button\n\t")]), _vm._v(" "), _c("pre", [_vm._v("Clicked " + _vm._s(_vm.clicked) + " times.")])], 1);
	};

	var __vue_staticRenderFns__$2 = [];
	__vue_render__$2._withStripped = true;
	/* style */

	var __vue_inject_styles__$2 = undefined;
	/* scoped */

	var __vue_scope_id__$2 = undefined;
	/* module identifier */

	var __vue_module_identifier__$2 = undefined;
	/* functional template */

	var __vue_is_functional_template__$2 = false;
	/* style inject */

	/* style inject SSR */

	/* style inject shadow dom */

	var __vue_component__$2 = /*#__PURE__*/normalizeComponent({
	  render: __vue_render__$2,
	  staticRenderFns: __vue_staticRenderFns__$2
	}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, undefined, undefined);

	var wvui = require('wvui');
	var script$1 = {
	  name: 'TypeaheadDemo',
	  components: {
	    'wvui-typeahead-search': wvui.WvuiTypeaheadSearch
	  }
	};

	/* script */
	var __vue_script__$1 = script$1;
	/* template */

	var __vue_render__$1 = function __vue_render__() {
	  var _vm = this;

	  var _h = _vm.$createElement;

	  var _c = _vm._self._c || _h;

	  return _c("div", [_c("h2", [_vm._v("TypeaheadSearch.vue")]), _vm._v(" "), _c("wvui-typeahead-search", {
	    attrs: {
	      id: "demo-search",
	      "button-label": "search",
	      "form-action": "#",
	      "footer-search-text": "footer text",
	      "suggestions-label": "suggestions"
	    }
	  })], 1);
	};

	var __vue_staticRenderFns__$1 = [];
	__vue_render__$1._withStripped = true;
	/* style */

	var __vue_inject_styles__$1 = undefined;
	/* scoped */

	var __vue_scope_id__$1 = undefined;
	/* module identifier */

	var __vue_module_identifier__$1 = undefined;
	/* functional template */

	var __vue_is_functional_template__$1 = false;
	/* style inject */

	/* style inject SSR */

	/* style inject shadow dom */

	var __vue_component__$1 = /*#__PURE__*/normalizeComponent({
	  render: __vue_render__$1,
	  staticRenderFns: __vue_staticRenderFns__$1
	}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, undefined, undefined);

	var script = {
	  name: 'WvuiDemo',
	  components: {
	    ButtonDemo: __vue_component__$2,
	    TypeaheadDemo: __vue_component__$1
	  }
	};

	/* script */
	var __vue_script__ = script;
	/* template */

	var __vue_render__ = function __vue_render__() {
	  var _vm = this;

	  var _h = _vm.$createElement;

	  var _c = _vm._self._c || _h;

	  return _c("div", {
	    attrs: {
	      id: "demo"
	    }
	  }, [_c("button-demo"), _vm._v(" "), _c("typeahead-demo")], 1);
	};

	var __vue_staticRenderFns__ = [];
	__vue_render__._withStripped = true;
	/* style */

	var __vue_inject_styles__ = undefined;
	/* scoped */

	var __vue_scope_id__ = undefined;
	/* module identifier */

	var __vue_module_identifier__ = undefined;
	/* functional template */

	var __vue_is_functional_template__ = false;
	/* style inject */

	/* style inject SSR */

	/* style inject shadow dom */

	var __vue_component__ = /*#__PURE__*/normalizeComponent({
	  render: __vue_render__,
	  staticRenderFns: __vue_staticRenderFns__
	}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

	var Vue = require('vue');
	new Vue({
	  render: function render(h) {
	    return h(__vue_component__);
	  }
	}).$mount('#vue');

}());
