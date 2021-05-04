import {W as Wvui} from "./ext.buildSandbox.vendor.js";
var render$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_c("h2", [_vm._v("WvuiButton.vue")]), _vm._v(" "), _c("wvui-button", {on: {click: function($event) {
    _vm.clicked++;
  }}}, [_vm._v("\n		Default Button\n	")]), _vm._v(" "), _c("wvui-button", {attrs: {action: "progressive"}, on: {click: function($event) {
    _vm.clicked++;
  }}}, [_vm._v("\n		Progressive button\n	")]), _vm._v(" "), _c("wvui-button", {attrs: {action: "destructive"}, on: {click: function($event) {
    _vm.clicked--;
  }}}, [_vm._v("\n		Destructive button\n	")]), _vm._v(" "), _c("wvui-button", {attrs: {quiet: true}, on: {click: function($event) {
    _vm.clicked++;
  }}}, [_vm._v("\n		Quiet button\n	")]), _vm._v(" "), _c("pre", [_vm._v("Clicked " + _vm._s(_vm.clicked) + " times.")])], 1);
};
var staticRenderFns$2 = [];
function normalizeComponent(scriptExports, render2, staticRenderFns2, functionalTemplate, injectStyles2, scopeId, moduleIdentifier, shadowMode) {
  var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
  if (render2) {
    options.render = render2;
    options.staticRenderFns = staticRenderFns2;
    options._compiled = true;
  }
  if (functionalTemplate) {
    options.functional = true;
  }
  if (scopeId) {
    options._scopeId = "data-v-" + scopeId;
  }
  var hook;
  if (moduleIdentifier) {
    hook = function(context) {
      context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
      if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
        context = __VUE_SSR_CONTEXT__;
      }
      if (injectStyles2) {
        injectStyles2.call(this, context);
      }
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    };
    options._ssrRegister = hook;
  } else if (injectStyles2) {
    hook = shadowMode ? function() {
      injectStyles2.call(this, (options.functional ? this.parent : this).$root.$options.shadowRoot);
    } : injectStyles2;
  }
  if (hook) {
    if (options.functional) {
      options._injectStyles = hook;
      var originalRender = options.render;
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }
  return {
    exports: scriptExports,
    options
  };
}
const script$2 = {
  components: {
    "wvui-button": Wvui.WvuiButton
  },
  data() {
    return {
      clicked: 0
    };
  }
};
const __cssModules$2 = {};
var component$2 = normalizeComponent(script$2, render$2, staticRenderFns$2, false, injectStyles$2, null, null, null);
function injectStyles$2(context) {
  for (let o in __cssModules$2) {
    this[o] = __cssModules$2[o];
  }
}
component$2.options.__file = "ButtonDemo.vue";
var ButtonDemo = component$2.exports;
var render$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_c("h2", [_vm._v("TypeaheadSearch.vue")]), _vm._v(" "), _c("wvui-typeahead-search", {attrs: {id: "demo-search", "button-label": "search", "form-action": "#", "footer-search-text": "footer text", "suggestions-label": "suggestions"}})], 1);
};
var staticRenderFns$1 = [];
const script$1 = {
  name: "TypeaheadDemo",
  components: {
    "wvui-typeahead-search": Wvui.WvuiTypeaheadSearch
  }
};
const __cssModules$1 = {};
var component$1 = normalizeComponent(script$1, render$1, staticRenderFns$1, false, injectStyles$1, null, null, null);
function injectStyles$1(context) {
  for (let o in __cssModules$1) {
    this[o] = __cssModules$1[o];
  }
}
component$1.options.__file = "TypeaheadDemo.vue";
var TypeaheadDemo = component$1.exports;
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {attrs: {id: "demo"}}, [_c("button-demo"), _vm._v(" "), _c("typeahead-demo")], 1);
};
var staticRenderFns = [];
const script = {
  name: "WvuiDemo",
  components: {
    ButtonDemo,
    TypeaheadDemo
  }
};
const __cssModules = {};
var component = normalizeComponent(script, render, staticRenderFns, false, injectStyles, null, null, null);
function injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
component.options.__file = "Demo.vue";
var Demo = component.exports;
var wvui = ".wvui-button{box-sizing:border-box;min-width:32px;min-height:32px;max-width:28.75em;border-width:1px;border-style:solid;border-radius:2px;margin:0;padding-left:12px;padding-right:12px;font-family:inherit;font-size:inherit;font-weight:700;text-transform:none;white-space:nowrap;overflow:visible;-webkit-transition:border-color .1s,background-color .1s,color .1s,box-shadow .1s;transition:border-color .1s,background-color .1s,color .1s,box-shadow .1s}.wvui-button::-moz-focus-inner{border:0;padding:0}.wvui-button:focus{outline:0}.wvui-button:not([disabled]){color:#202122;cursor:pointer}.wvui-button:not([disabled]):focus{box-shadow:inset 0 0 0 1px #36c;border-color:#36c;outline:1px solid transparent}.wvui-button:not([disabled]):active{background-color:#c8ccd1;color:#000;box-shadow:none}.wvui-button[disabled]{border-color:transparent}.wvui-button--framed:not([disabled]){background-color:#f8f9fa;border-color:#a2a9b1}.wvui-button--framed:not([disabled]):hover{background-color:#fff;color:#404244}.wvui-button--framed:not([disabled]):active{background-color:#c8ccd1;color:#000;border-color:#72777d}.wvui-button--framed.wvui-button--progressive:not([disabled]){color:#fff;background-color:#36c;border-color:#36c}.wvui-button--framed.wvui-button--progressive:not([disabled]):hover{background-color:#447ff5;border-color:#447ff5}.wvui-button--framed.wvui-button--progressive:not([disabled]):focus{background-color:#36c;border-color:#36c;box-shadow:inset 0 0 0 1px #36c,inset 0 0 0 2px #fff}.wvui-button--framed.wvui-button--progressive:not([disabled]):active{background-color:#2a4b8d;border-color:#2a4b8d;box-shadow:none}.wvui-button--framed.wvui-button--destructive:not([disabled]){color:#fff;background-color:#d33;border-color:#d33}.wvui-button--framed.wvui-button--destructive:not([disabled]):hover{background-color:#ff4242;border-color:#ff4242}.wvui-button--framed.wvui-button--destructive:not([disabled]):focus{background-color:#d33;border-color:#d33;box-shadow:inset 0 0 0 1px #d33,inset 0 0 0 2px #fff}.wvui-button--framed.wvui-button--destructive:not([disabled]):active{background-color:#b32424;border-color:#b32424;box-shadow:none}.wvui-button--framed[disabled]{background-color:#c8ccd1;color:#fff}.wvui-button--quiet{background-color:transparent;color:#202122;border-color:transparent}.wvui-button--quiet:not([disabled]):hover{background-color:rgba(0,24,73,.02745098);color:#000}.wvui-button--quiet:not([disabled]):focus{border-color:#36c;box-shadow:inset 0 0 0 1px #36c,inset 0 0 0 2px #fff}.wvui-button--quiet:not([disabled]):active{background-color:rgba(0,36,73,.08235294);border-color:#72777d;box-shadow:none}.wvui-button--quiet.wvui-button--progressive:not([disabled]){color:#36c}.wvui-button--quiet.wvui-button--progressive:not([disabled]):hover{color:#447ff5;background-color:rgba(52,123,255,.2)}.wvui-button--quiet.wvui-button--progressive:not([disabled]):focus{color:#36c;border-color:#36c;box-shadow:inset 0 0 0 1px #36c,inset 0 0 0 2px #fff}.wvui-button--quiet.wvui-button--progressive:not([disabled]):active{color:#fff;background-color:#2a4b8d;border-color:#2a4b8d;box-shadow:none}.wvui-button--quiet.wvui-button--destructive:not([disabled]){color:#d33}.wvui-button--quiet.wvui-button--destructive:not([disabled]):hover{color:#ff4242;background-color:rgba(209,29,19,.2)}.wvui-button--quiet.wvui-button--destructive:not([disabled]):focus{color:#d33;border-color:#d33;box-shadow:inset 0 0 0 1px #d33,inset 0 0 0 2px #fff}.wvui-button--quiet.wvui-button--destructive:not([disabled]):active{color:#fff;background-color:#b32424;border-color:#b32424;box-shadow:none}.wvui-button--quiet[disabled]{color:#72777d}.wvui-icon{-webkit-box-align:center;align-items:center;display:-webkit-inline-box;display:inline-flex;-webkit-box-pack:center;justify-content:center;vertical-align:middle}[dir=rtl] .wvui-icon--flip-for-rtl svg{-webkit-transform:scaleX(-1);transform:scaleX(-1)}.wvui-input{position:relative;box-sizing:border-box}.wvui-input__end-icon,.wvui-input__start-icon{min-height:20px;height:100%;position:absolute;top:0;opacity:.67}.wvui-input__start-icon{left:1px;width:36px;pointer-events:none}.wvui-input__end-icon{right:1px;width:36px}.wvui-input--clearable .wvui-input__end-icon{width:calc(16px + .85714em);cursor:pointer}.wvui-input--clearable .wvui-input__end-icon svg{width:.85714286em}.wvui-input__input{background-color:#fff;box-shadow:inset 0 0 0 1px transparent;color:#000;margin:0;border:1px solid #a2a9b1;border-radius:2px;padding:5px 8px;font-size:inherit;font-family:inherit;line-height:1.42857143em;display:block;width:100%;box-sizing:border-box;height:2.28571429em}.wvui-input__input:not([disabled]){-webkit-transition:border-color .25s,box-shadow .25s;transition:border-color .25s,box-shadow .25s}.wvui-input__input:not([disabled]):hover{border-color:#72777d}.wvui-input__input:not([disabled]):focus{outline:0;border-color:#36c;box-shadow:inset 0 0 0 1px #36c}.wvui-input__input:not([disabled]):focus~.wvui-input__end-icon,.wvui-input__input:not([disabled]):focus~.wvui-input__start-icon{opacity:1}.wvui-input__input[disabled]{background-color:#eaecf0;-webkit-text-fill-color:#72777d;color:#72777d;text-shadow:0 1px 1px #fff;border-color:#c8ccd1}.wvui-input__input[disabled]~.wvui-input__end-icon,.wvui-input__input[disabled]~.wvui-input__start-icon{pointer-events:none;opacity:.51}.wvui-input__input::-webkit-input-placeholder{color:#72777d;opacity:1}.wvui-input__input:-ms-input-placeholder{color:#72777d;opacity:1}.wvui-input__input::placeholder{color:#72777d;opacity:1}.wvui-input__input::-ms-clear{display:none}.wvui-input__input[type=search]{-webkit-appearance:none;-moz-appearance:textfield}.wvui-input__input[type=search]::-webkit-search-cancel-button,.wvui-input__input[type=search]::-webkit-search-decoration{display:none}.wvui-input--has-start-icon .wvui-input__input{padding-left:36px}.wvui-input--has-end-icon .wvui-input__input{padding-right:36px}.wvui-typeahead-suggestion__title{color:#202122;display:block;margin:0 0 2px;font-size:1.14285714em;font-weight:700}.wvui-typeahead-suggestion__match{font-weight:400}.wvui-typeahead-suggestion{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;padding:8px 12px;text-decoration:none}.wvui-typeahead-suggestion--active{background-color:#eaecf0}.wvui-typeahead-suggestion__thumbnail,.wvui-typeahead-suggestion__thumbnail-placeholder{background-position:50%;background-repeat:no-repeat;background-size:cover;flex-shrink:0;width:2.57142857em;height:2.57142857em;border-radius:2px;box-shadow:0 0 1px 1px #eaecf0;margin-right:12px}.wvui-typeahead-suggestion__thumbnail{display:inline-block}.wvui-typeahead-suggestion__thumbnail-placeholder{background-color:#f8f9fa;display:-webkit-inline-box;display:inline-flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.wvui-typeahead-suggestion__thumbnail-icon{opacity:.67}.wvui-typeahead-suggestion__text{overflow:hidden}.wvui-typeahead-suggestion__text .wvui-typeahead-suggestion__description{color:#72777d;display:block;font-size:1em;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.wvui-typeahead-search{border:1px solid #a2a9b1;border-radius:2px}.wvui-typeahead-search__form{display:-webkit-box;display:flex}.wvui-typeahead-search__wrapper{-webkit-box-flex:1;flex-grow:1;position:relative;margin:-1px}.wvui-typeahead-search__submit{position:relative;margin:-1px -1px -1px 0;border-bottom-left-radius:0;border-top-left-radius:0;opacity:0;-webkit-transition:opacity .1s;transition:opacity .1s}.wvui-typeahead-search__submit:hover{z-index:1}.wvui-typeahead-search__submit:focus{z-index:1;opacity:1}.wvui-typeahead-search__suggestions{background-color:#fff;display:none;position:absolute;top:2.28571429em;right:0;left:0;box-sizing:border-box;border:1px solid #a2a9b1;border-top:0 solid #a2a9b1;border-radius:0 0 2px 2px;margin:0;padding:0;box-shadow:0 2px 2px 0 rgba(0,0,0,.25);list-style:none}.wvui-typeahead-search__suggestions__footer{color:#202122;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;border-top:1px solid #c8ccd1;padding:8px 12px 8px 36px;text-decoration:none;cursor:pointer}.wvui-typeahead-search__suggestions__footer:active,.wvui-typeahead-search__suggestions__footer:visited{color:#202122}.wvui-typeahead-search__suggestions__footer .wvui-icon{width:auto;height:2.57142857em;margin-right:12px;opacity:.67}.wvui-typeahead-search__suggestions__footer--active{background-color:#eaecf0}.wvui-typeahead-search__suggestions__footer__text{font-size:1.14285714em}.wvui-typeahead-search__suggestion{padding-left:36px}.wvui-typeahead-search .wvui-input__input{border-right-color:transparent}.wvui-typeahead-search--has-value .wvui-input__input{border-bottom-left-radius:0}.wvui-typeahead-search--active .wvui-typeahead-search__submit,.wvui-typeahead-search:hover .wvui-typeahead-search__submit{opacity:1}.wvui-typeahead-search--active .wvui-typeahead-search__input,.wvui-typeahead-search:hover .wvui-typeahead-search__input{z-index:1}.wvui-typeahead-search--active .wvui-input__input,.wvui-typeahead-search:hover .wvui-input__input{border-top-right-radius:0;border-bottom-right-radius:0}.wvui-typeahead-search--expanded .wvui-typeahead-search__suggestions{display:block}.wvui-typeahead-search--show-thumbnail .wvui-input__input{padding-left:2.57142857em}.wvui-typeahead-search--show-thumbnail .wvui-input__start-icon{width:2.57142857em}.wvui-typeahead-search--show-thumbnail .wvui-input__input:focus{position:relative;padding-left:calc(24px + 2.57143em);width:calc(100% + 24px);left:-24px}.wvui-typeahead-search--show-thumbnail .wvui-input__input:focus+.wvui-input__start-icon{left:-11px}.wvui-typeahead-search--show-thumbnail .wvui-typeahead-search__suggestions{left:-24px}.wvui-typeahead-search--show-thumbnail .wvui-typeahead-search__suggestion,.wvui-typeahead-search--show-thumbnail .wvui-typeahead-search__suggestions__footer{padding-left:12px;padding-right:12px}.wvui-typeahead-search--show-thumbnail .wvui-typeahead-search__suggestions__footer__text{text-overflow:ellipsis;overflow:hidden}.wvui-typeahead-search--show-thumbnail .wvui-typeahead-search__suggestions-footer-article-icon{width:2.57142857em;flex-shrink:0}\n/*# sourceMappingURL=wvui.css.map */";
const {default: Vue} = (() => {
  const mod = require("vue");
  return mod && mod.__esModule ? mod : Object.assign(Object.create(null), mod, {default: mod, [Symbol.toStringTag]: "Module"});
})();
new Vue({
  render: function(h) {
    return h(Demo);
  }
}).$mount("#sandbox");
