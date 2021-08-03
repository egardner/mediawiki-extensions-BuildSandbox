"use strict";
var require$$0 = require("vue");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : {default: e};
}
var require$$0__default = /* @__PURE__ */ _interopDefaultLegacy(require$$0);
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function createCommonjsModule(fn) {
  var module2 = {exports: {}};
  return fn(module2, module2.exports), module2.exports;
}
var wvui$1 = createCommonjsModule(function(module2, exports) {
  !function(t, e) {
    module2.exports = e(require$$0__default["default"]);
  }(commonjsGlobal, function(t) {
    return function(t2) {
      var e = {};
      function n(i) {
        if (e[i])
          return e[i].exports;
        var o = e[i] = {i, l: false, exports: {}};
        return t2[i].call(o.exports, o, o.exports, n), o.l = true, o.exports;
      }
      return n.m = t2, n.c = e, n.d = function(t3, e2, i) {
        n.o(t3, e2) || Object.defineProperty(t3, e2, {enumerable: true, get: i});
      }, n.r = function(t3) {
        typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(t3, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t3, "__esModule", {value: true});
      }, n.t = function(t3, e2) {
        if (1 & e2 && (t3 = n(t3)), 8 & e2)
          return t3;
        if (4 & e2 && typeof t3 == "object" && t3 && t3.__esModule)
          return t3;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {enumerable: true, value: t3}), 2 & e2 && typeof t3 != "string")
          for (var o in t3)
            n.d(i, o, function(e3) {
              return t3[e3];
            }.bind(null, o));
        return i;
      }, n.n = function(t3) {
        var e2 = t3 && t3.__esModule ? function() {
          return t3.default;
        } : function() {
          return t3;
        };
        return n.d(e2, "a", e2), e2;
      }, n.o = function(t3, e2) {
        return Object.prototype.hasOwnProperty.call(t3, e2);
      }, n.p = "", n(n.s = 15);
    }([function(e, n) {
      e.exports = t;
    }, function(t2, e, n) {
    }, function(t2, e, n) {
    }, function(t2, e, n) {
    }, function(t2, e, n) {
    }, function(t2, e, n) {
    }, function(t2, e, n) {
    }, function(t2, e, n) {
    }, function(t2, e, n) {
      var i = n(1);
      n.n(i).a;
    }, function(t2, e, n) {
      var i = n(2);
      n.n(i).a;
    }, function(t2, e, n) {
      var i = n(3);
      n.n(i).a;
    }, function(t2, e, n) {
      var i = n(4);
      n.n(i).a;
    }, function(t2, e, n) {
      var i = n(5);
      n.n(i).a;
    }, function(t2, e, n) {
      var i = n(6);
      n.n(i).a;
    }, function(t2, e, n) {
      var i = n(7);
      n.n(i).a;
    }, function(t2, e, n) {
      n.r(e), n.d(e, "version", function() {
        return Dt;
      }), n.d(e, "restSearchClient", function() {
        return Et;
      });
      var i, o;
      !function(t3) {
        t3.Normal = "normal", t3.Primary = "primary", t3.Quiet = "quiet";
      }(i || (i = {})), function(t3) {
        t3.Default = "default", t3.Progressive = "progressive", t3.Destructive = "destructive";
      }(o || (o = {}));
      var r = n(0), u = n.n(r), s = u.a.extend({name: "WvuiButton", props: {action: {type: String, default: o.Default, validator: function(t3) {
        return e2 = t3, Object.keys(o).some(function(t4) {
          return o[t4] === e2;
        });
        var e2;
      }}, type: {type: String, default: i.Normal, validator: function(t3) {
        return e2 = t3, Object.keys(i).some(function(t4) {
          return i[t4] === e2;
        });
        var e2;
      }}}, computed: {rootClasses: function() {
        return {"wvui-button--action-default": this.action === o.Default, "wvui-button--action-progressive": this.action === o.Progressive, "wvui-button--action-destructive": this.action === o.Destructive, "wvui-button--type-primary": this.type === i.Primary, "wvui-button--type-normal": this.type === i.Normal, "wvui-button--type-quiet": this.type === i.Quiet, "wvui-button--framed": this.type !== i.Quiet};
      }}, methods: {onClick: function(t3) {
        this.$emit("click", t3);
      }}});
      n(8);
      function a(t3, e2, n2, i2, o2, r2, u2, s2) {
        var a2, c2 = typeof t3 == "function" ? t3.options : t3;
        if (e2 && (c2.render = e2, c2.staticRenderFns = n2, c2._compiled = true), i2 && (c2.functional = true), r2 && (c2._scopeId = "data-v-" + r2), u2 ? (a2 = function(t4) {
          (t4 = t4 || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || typeof __VUE_SSR_CONTEXT__ == "undefined" || (t4 = __VUE_SSR_CONTEXT__), o2 && o2.call(this, t4), t4 && t4._registeredComponents && t4._registeredComponents.add(u2);
        }, c2._ssrRegister = a2) : o2 && (a2 = s2 ? function() {
          o2.call(this, (c2.functional ? this.parent : this).$root.$options.shadowRoot);
        } : o2), a2)
          if (c2.functional) {
            c2._injectStyles = a2;
            var l2 = c2.render;
            c2.render = function(t4, e3) {
              return a2.call(e3), l2(t4, e3);
            };
          } else {
            var f2 = c2.beforeCreate;
            c2.beforeCreate = f2 ? [].concat(f2, a2) : [a2];
          }
        return {exports: t3, options: c2};
      }
      var c = a(s, function() {
        var t3 = this, e2 = t3.$createElement;
        return (t3._self._c || e2)("button", {staticClass: "wvui-button", class: t3.rootClasses, on: {click: t3.onClick}}, [t3._t("default")], 2);
      }, [], false, null, null, null).exports;
      function l(t3, e2) {
        var n2;
        if (typeof t3 == "string")
          return false;
        if ("shouldFlipExceptions" in t3) {
          var i2 = (n2 = t3.shouldFlipExceptions) === null || n2 === void 0 ? void 0 : n2.indexOf(e2);
          return i2 === void 0 || i2 === -1;
        }
        return "shouldFlip" in t3 && !!t3.shouldFlip;
      }
      var f, d = u.a.extend({name: "WvuiIcon", props: {icon: {type: [String, Object], required: true}, iconTitle: {type: [String, Object], default: ""}, langCode: {type: String, default: function() {
        return document.documentElement.lang;
      }}}, data: function() {
        return {dir: document.documentElement.dir};
      }, computed: {rootClasses: function() {
        return {"wvui-icon--flip-for-rtl": l(this.icon, this.langCode)};
      }, lacksTitle: function() {
        return !this.iconTitle;
      }, iconPath: function() {
        return function(t3, e2, n2) {
          if (typeof t3 == "string")
            return t3;
          if ("path" in t3)
            return t3.path;
          if ("langCodeMap" in t3) {
            var i2 = e2 in t3.langCodeMap ? t3.langCodeMap[e2] : t3.default;
            return typeof i2 == "string" ? i2 : i2.path;
          }
          return n2 === "rtl" ? t3.rtl : t3.default;
        }(this.icon, this.langCode, this.dir);
      }}, mounted: function() {
        var t3 = window.getComputedStyle(this.$el);
        this.dir = (t3 == null ? void 0 : t3.direction) || this.dir;
      }, methods: {onClick: function(t3) {
        this.$emit("click", t3);
      }}}), p = (n(9), a(d, function() {
        var t3 = this, e2 = t3.$createElement, n2 = t3._self._c || e2;
        return n2("span", {staticClass: "wvui-icon", class: t3.rootClasses, on: {click: t3.onClick}}, [n2("svg", {attrs: {xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 20 20", "aria-hidden": t3.lacksTitle}}, [t3.iconTitle ? n2("title", [t3._v(t3._s(t3.iconTitle))]) : t3._e(), t3._v(" "), n2("path", {attrs: {fill: "currentColor", d: t3.iconPath}})])]);
      }, [], false, null, null, null).exports);
      !function(t3) {
        t3.Text = "text", t3.Search = "search";
      }(f || (f = {}));
      var h = u.a.extend({name: "WvuiInput", components: {WvuiIcon: p}, inheritAttrs: false, props: {value: {type: [String, Number], default: ""}, type: {type: String, default: f.Text, validator: function(t3) {
        return e2 = t3, Object.keys(f).some(function(t4) {
          return f[t4] === e2;
        });
        var e2;
      }}, disabled: {type: Boolean, default: false}, startIcon: {type: [String, Object], default: void 0}, endIcon: {type: [String, Object], default: void 0}, clearable: {type: Boolean, default: false}}, data: function() {
        return {newValue: this.value, clearIcon: "M10 0a10 10 0 1010 10A10 10 0 0010 0zm5.66 14.24l-1.41 1.41L10 11.41l-4.24 4.25-1.42-1.42L8.59 10 4.34 5.76l1.42-1.42L10 8.59l4.24-4.24 1.41 1.41L11.41 10z"};
      }, computed: {isClearable: function() {
        return this.clearable && !!this.computedValue && !this.disabled;
      }, rootClasses: function() {
        return {"wvui-input--has-start-icon": !!this.startIcon, "wvui-input--has-end-icon": !!this.endIcon || this.clearable, "wvui-input--clearable": this.clearable};
      }, computedValue: {get: function() {
        return this.newValue;
      }, set: function(t3) {
        this.newValue = t3, this.$emit("input", t3);
      }}}, watch: {value: function(t3) {
        this.newValue = t3;
      }}, methods: {onInput: function(t3) {
        var e2 = t3.target.value;
        this.setCurrentValue(e2);
      }, onChange: function(t3) {
        this.$emit("change", t3);
      }, onFocus: function(t3) {
        this.$emit("focus", t3);
      }, onBlur: function(t3) {
        this.$emit("blur", t3);
      }, onEndIconClick: function() {
        this.clearable && (this.setCurrentValue(""), this.$emit("input", ""));
      }, setCurrentValue: function(t3) {
        this.computedValue = t3;
      }}}), v = (n(10), a(h, function() {
        var t3 = this, e2 = t3.$createElement, n2 = t3._self._c || e2;
        return n2("div", {staticClass: "wvui-input", class: t3.rootClasses}, [n2("input", t3._b({ref: "input", staticClass: "wvui-input__input", attrs: {dir: "auto", disabled: t3.disabled, type: t3.type}, domProps: {value: t3.computedValue}, on: {input: t3.onInput, change: t3.onChange, focus: t3.onFocus, blur: t3.onBlur}}, "input", t3.$attrs, false)), t3._v(" "), t3.startIcon ? n2("wvui-icon", {staticClass: "wvui-input__start-icon", attrs: {icon: t3.startIcon}}) : t3._e(), t3._v(" "), t3.isClearable || t3.endIcon ? n2("wvui-icon", {staticClass: "wvui-input__end-icon", attrs: {icon: t3.endIcon || t3.clearIcon}, on: {click: t3.onEndIconClick}}) : t3._e()], 1);
      }, [], false, null, null, null).exports);
      function g(t3) {
        return typeof t3 == "function" && /native code/.test(t3.toString());
      }
      var y = typeof Symbol != "undefined" && g(Symbol) && typeof Reflect != "undefined" && g(Reflect.ownKeys), _ = function(t3) {
        return t3;
      };
      function b(t3, e2, n2) {
        var i2 = n2.get, o2 = n2.set;
        Object.defineProperty(t3, e2, {enumerable: true, configurable: true, get: i2 || _, set: o2 || _});
      }
      function m(t3, e2, n2, i2) {
        Object.defineProperty(t3, e2, {value: n2, enumerable: !!i2, writable: true, configurable: true});
      }
      function w(t3, e2) {
        return Object.hasOwnProperty.call(t3, e2);
      }
      function S(t3) {
        return Array.isArray(t3);
      }
      function x(t3) {
        return t3 !== null && typeof t3 == "object";
      }
      function C(t3) {
        return function(t4) {
          return Object.prototype.toString.call(t4);
        }(t3) === "[object Object]";
      }
      function I(t3) {
        return typeof t3 == "function";
      }
      function k(t3, e2) {
        u.a.util.warn(t3, e2);
      }
      var $ = void 0;
      try {
        var O = n(0);
        O && A(O) ? $ = O : O && "default" in O && A(O.default) && ($ = O.default);
      } catch (t3) {
      }
      var j = null, T = null, E = "__composition_api_installed__";
      function A(t3) {
        return t3 && typeof t3 == "function" && t3.name === "Vue";
      }
      function M() {
        return j;
      }
      function D(t3) {
        T = t3;
      }
      function V() {
        return T ? W(T) : null;
      }
      var q, B = new WeakMap();
      function W(t3) {
        if (B.has(t3))
          return B.get(t3);
        var e2 = {proxy: t3, update: t3.$forceUpdate, uid: t3._uid, emit: t3.$emit.bind(t3), parent: null, root: null};
        return ["data", "props", "attrs", "refs", "vnode", "slots"].forEach(function(n2) {
          b(e2, n2, {get: function() {
            return t3["$" + n2];
          }});
        }), b(e2, "isMounted", {get: function() {
          return t3._isMounted;
        }}), b(e2, "isUnmounted", {get: function() {
          return t3._isDestroyed;
        }}), b(e2, "isDeactivated", {get: function() {
          return t3._inactive;
        }}), b(e2, "emitted", {get: function() {
          return t3._events;
        }}), B.set(t3, e2), t3.$parent && (e2.parent = W(t3.$parent)), t3.$root && (e2.root = W(t3.$root)), e2;
      }
      function P(t3, e2) {
        e2 === void 0 && (e2 = {});
        var n2 = t3.config.silent;
        t3.config.silent = true;
        var i2 = new t3(e2);
        return t3.config.silent = n2, i2;
      }
      function F(t3, e2) {
        return function() {
          for (var n2 = [], i2 = 0; i2 < arguments.length; i2++)
            n2[i2] = arguments[i2];
          return t3.$scopedSlots[e2] ? t3.$scopedSlots[e2].apply(t3, n2) : k("slots." + e2 + '() got called outside of the "render()" scope', t3);
        };
      }
      function Q(t3) {
        var e2 = typeof Symbol == "function" && Symbol.iterator, n2 = e2 && t3[e2], i2 = 0;
        if (n2)
          return n2.call(t3);
        if (t3 && typeof t3.length == "number")
          return {next: function() {
            return t3 && i2 >= t3.length && (t3 = void 0), {value: t3 && t3[i2++], done: !t3};
          }};
        throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }
      var K = "composition-api.refKey", H = new WeakMap(), N = new WeakMap(), G = function(t3) {
        b(this, "value", {get: t3.get, set: t3.set});
      };
      function X(t3, e2) {
        var n2 = new G(t3), i2 = Object.seal(n2);
        return N.set(i2, true), i2;
      }
      function J(t3) {
        var e2;
        if (Y(t3))
          return t3;
        var n2 = ut(((e2 = {})[K] = t3, e2));
        return X({get: function() {
          return n2[K];
        }, set: function(t4) {
          return n2[K] = t4;
        }});
      }
      function Y(t3) {
        return t3 instanceof G;
      }
      function Z(t3, e2) {
        var n2 = t3[e2];
        return Y(n2) ? n2 : X({get: function() {
          return t3[e2];
        }, set: function(n3) {
          return t3[e2] = n3;
        }});
      }
      function tt(t3) {
        var e2;
        return Boolean((t3 == null ? void 0 : t3.__ob__) && ((e2 = t3.__ob__) === null || e2 === void 0 ? void 0 : e2.__raw__));
      }
      function et(t3) {
        var e2;
        return Boolean((t3 == null ? void 0 : t3.__ob__) && !((e2 = t3.__ob__) === null || e2 === void 0 ? void 0 : e2.__raw__));
      }
      function nt(t3) {
        if (!(!C(t3) || tt(t3) || Array.isArray(t3) || Y(t3) || (e2 = t3, n2 = M(), n2 && e2 instanceof n2) || H.has(t3))) {
          var e2, n2;
          H.set(t3, true);
          for (var i2 = Object.keys(t3), o2 = 0; o2 < i2.length; o2++)
            it(t3, i2[o2]);
        }
      }
      function it(t3, e2, n2) {
        if (e2 !== "__ob__" && !tt(t3[e2])) {
          var i2, o2, r2 = Object.getOwnPropertyDescriptor(t3, e2);
          if (r2) {
            if (r2.configurable === false)
              return;
            i2 = r2.get, o2 = r2.set, i2 && !o2 || arguments.length !== 2 || (n2 = t3[e2]);
          }
          nt(n2), Object.defineProperty(t3, e2, {enumerable: true, configurable: true, get: function() {
            var o3 = i2 ? i2.call(t3) : n2;
            return e2 !== K && Y(o3) ? o3.value : o3;
          }, set: function(r3) {
            if (!i2 || o2) {
              var u2 = i2 ? i2.call(t3) : n2;
              e2 !== K && Y(u2) && !Y(r3) ? u2.value = r3 : o2 ? o2.call(t3, r3) : n2 = r3, nt(r3);
            }
          }});
        }
      }
      function ot(t3) {
        var e2, n2 = j || $;
        n2.observable ? e2 = n2.observable(t3) : e2 = P(n2, {data: {$$state: t3}})._data.$$state;
        return w(e2, "__ob__") || m(e2, "__ob__", function(t4) {
          t4 === void 0 && (t4 = {});
          return {value: t4, dep: {notify: _, depend: _, addSub: _, removeSub: _}};
        }(e2)), e2;
      }
      function rt() {
        return ot({}).__ob__;
      }
      function ut(t3) {
        if (!x(t3))
          return t3;
        if (!C(t3) && !S(t3) || tt(t3) || !Object.isExtensible(t3))
          return t3;
        var e2 = ot(t3);
        return nt(e2), e2;
      }
      function at(t3) {
        var e2, n2, i2, o2, r2, u2 = (e2 = V()) === null || e2 === void 0 ? void 0 : e2.proxy;
        if (typeof t3 == "function" ? n2 = t3 : (n2 = t3.get, i2 = t3.set), u2 && !u2.$isServer) {
          var s2, a2 = function() {
            if (!q) {
              var t4 = P(M(), {computed: {value: function() {
                return 0;
              }}}), e3 = t4._computedWatchers.value.constructor, n3 = t4._data.__ob__.dep.constructor;
              q = {Watcher: e3, Dep: n3}, t4.$destroy();
            }
            return q;
          }(), c2 = a2.Watcher, l2 = a2.Dep;
          r2 = function() {
            return s2 || (s2 = new c2(u2, n2, _, {lazy: true})), s2.dirty && s2.evaluate(), l2.target && s2.depend(), s2.value;
          }, o2 = function(t4) {
            i2 && i2(t4);
          };
        } else {
          var f2 = P(M(), {computed: {$$state: {get: n2, set: i2}}});
          u2 && u2.$on("hook:destroyed", function() {
            return f2.$destroy();
          }), r2 = function() {
            return f2.$$state;
          }, o2 = function(t4) {
            f2.$$state = t4;
          };
        }
        return X({get: r2, set: o2});
      }
      var ct = {set: function(t3, e2, n2) {
        (t3.__composition_api_state__ = t3.__composition_api_state__ || {})[e2] = n2;
      }, get: function(t3, e2) {
        return (t3.__composition_api_state__ || {})[e2];
      }};
      function lt(t3) {
        var e2 = ct.get(t3, "rawBindings") || {};
        if (e2 && Object.keys(e2).length) {
          for (var n2 = t3.$refs, i2 = ct.get(t3, "refs") || [], o2 = 0; o2 < i2.length; o2++) {
            var r2 = e2[a2 = i2[o2]];
            !n2[a2] && r2 && Y(r2) && (r2.value = null);
          }
          var u2 = Object.keys(n2), s2 = [];
          for (o2 = 0; o2 < u2.length; o2++) {
            var a2;
            r2 = e2[a2 = u2[o2]];
            n2[a2] && r2 && Y(r2) && (r2.value = n2[a2], s2.push(a2));
          }
          ct.set(t3, "refs", s2);
        }
      }
      function ft(t3, e2) {
        var n2 = t3.$options._parentVnode;
        if (n2) {
          for (var i2 = ct.get(t3, "slots") || [], o2 = function(t4, e3) {
            var n3;
            if (t4) {
              if (t4._normalized)
                return t4._normalized;
              for (var i3 in n3 = {}, t4)
                t4[i3] && i3[0] !== "$" && (n3[i3] = true);
            } else
              n3 = {};
            for (var i3 in e3)
              i3 in n3 || (n3[i3] = true);
            return n3;
          }(n2.data.scopedSlots, t3.$slots), r2 = 0; r2 < i2.length; r2++) {
            o2[s2 = i2[r2]] || delete e2[s2];
          }
          var u2 = Object.keys(o2);
          for (r2 = 0; r2 < u2.length; r2++) {
            var s2;
            e2[s2 = u2[r2]] || (e2[s2] = F(t3, s2));
          }
          ct.set(t3, "slots", u2);
        }
      }
      function dt(t3, e2, n2) {
        var i2 = T;
        D(t3);
        try {
          return e2(t3);
        } catch (t4) {
          if (!n2)
            throw t4;
          n2(t4);
        } finally {
          D(i2);
        }
      }
      function pt(t3) {
        function e2(t4) {
          if (C(t4) && !Y(t4) && !et(t4) && !tt(t4)) {
            var n3 = M().util.defineReactive;
            Object.keys(t4).forEach(function(i2) {
              var o2 = t4[i2];
              n3(t4, i2, o2), o2 && e2(o2);
            });
          }
        }
        function n2(t4, e3) {
          return e3 === void 0 && (e3 = new Map()), e3.has(t4) ? e3.get(t4) : (e3.set(t4, false), Array.isArray(t4) && et(t4) ? (e3.set(t4, true), true) : !(!C(t4) || tt(t4)) && Object.keys(t4).some(function(i2) {
            return n2(t4[i2], e3);
          }));
        }
        t3.mixin({beforeCreate: function() {
          var t4 = this, i2 = t4.$options, o2 = i2.setup, r2 = i2.render;
          r2 && (i2.render = function() {
            for (var e3 = this, n3 = [], i3 = 0; i3 < arguments.length; i3++)
              n3[i3] = arguments[i3];
            return dt(t4, function() {
              return r2.apply(e3, n3);
            });
          });
          if (!o2)
            return;
          if (typeof o2 != "function")
            return void 0;
          var u2 = i2.data;
          i2.data = function() {
            return function(t5, i3) {
              i3 === void 0 && (i3 = {});
              var o3, r3 = t5.$options.setup, u3 = function(t6) {
                var e3 = {slots: {}}, n3 = ["attrs"], i4 = ["emit"];
                ["root", "parent", "refs", "listeners", "isServer", "ssrContext"].forEach(function(n4) {
                  var i5 = "$" + n4;
                  b(e3, n4, {get: function() {
                    return t6[i5];
                  }, set: function() {
                    k("Cannot assign to '" + n4 + "' because it is a read-only property", t6);
                  }});
                }), n3.forEach(function(n4) {
                  var i5 = "$" + n4;
                  b(e3, n4, {get: function() {
                    var e4, n5, o4 = ut({}), r4 = t6[i5], u4 = function(e5) {
                      b(o4, e5, {get: function() {
                        return t6[i5][e5];
                      }});
                    };
                    try {
                      for (var s3 = Q(Object.keys(r4)), a3 = s3.next(); !a3.done; a3 = s3.next()) {
                        u4(a3.value);
                      }
                    } catch (t7) {
                      e4 = {error: t7};
                    } finally {
                      try {
                        a3 && !a3.done && (n5 = s3.return) && n5.call(s3);
                      } finally {
                        if (e4)
                          throw e4.error;
                      }
                    }
                    return o4;
                  }, set: function() {
                    k("Cannot assign to '" + n4 + "' because it is a read-only property", t6);
                  }});
                }), i4.forEach(function(n4) {
                  var i5 = "$" + n4;
                  b(e3, n4, {get: function() {
                    return function() {
                      for (var e4 = [], n5 = 0; n5 < arguments.length; n5++)
                        e4[n5] = arguments[n5];
                      t6[i5].apply(t6, e4);
                    };
                  }});
                }), false;
                return e3;
              }(t5);
              if (m(i3, "__ob__", rt()), ft(t5, u3.slots), dt(t5, function() {
                o3 = r3(i3, u3);
              }), !o3)
                return;
              if (I(o3)) {
                var s2 = o3;
                return void (t5.$options.render = function() {
                  return ft(t5, u3.slots), dt(t5, function() {
                    return s2();
                  });
                });
              }
              if (C(o3)) {
                et(o3) && (o3 = function(t6) {
                  if (!C(t6))
                    return t6;
                  var e3 = {};
                  for (var n3 in t6)
                    e3[n3] = Z(t6, n3);
                  return e3;
                }(o3)), ct.set(t5, "rawBindings", o3);
                var a2 = o3;
                return void Object.keys(a2).forEach(function(i4) {
                  var o4 = a2[i4];
                  Y(o4) || (et(o4) ? S(o4) && (o4 = J(o4)) : I(o4) ? o4 = o4.bind(t5) : x(o4) ? n2(o4) && e2(o4) : o4 = J(o4)), function(t6, e3, n3) {
                    var i5 = t6.$options.props;
                    e3 in t6 || i5 && w(i5, e3) || (Y(n3) ? b(t6, e3, {get: function() {
                      return n3.value;
                    }, set: function(t7) {
                      n3.value = t7;
                    }}) : t6[e3] = n3);
                  }(t5, i4, o4);
                });
              }
            }(t4, t4.$props), typeof u2 == "function" ? u2.call(t4, t4) : u2 || {};
          };
        }, mounted: function() {
          lt(this);
        }, updated: function() {
          lt(this);
        }});
      }
      function ht(t3, e2) {
        if (!t3)
          return e2;
        if (!e2)
          return t3;
        for (var n2, i2, o2, r2 = y ? Reflect.ownKeys(t3) : Object.keys(t3), u2 = 0; u2 < r2.length; u2++)
          (n2 = r2[u2]) !== "__ob__" && (i2 = e2[n2], o2 = t3[n2], w(e2, n2) ? i2 !== o2 && C(i2) && !Y(i2) && C(o2) && !Y(o2) && ht(o2, i2) : e2[n2] = o2);
        return e2;
      }
      function vt(t3) {
        (function(t4) {
          return w(t4, E);
        })(t3) || (t3.config.optionMergeStrategies.setup = function(t4, e2) {
          return function(n2, i2) {
            return ht(typeof t4 == "function" ? t4(n2, i2) || {} : void 0, typeof e2 == "function" ? e2(n2, i2) || {} : void 0);
          };
        }, function(t4) {
          j = t4, Object.defineProperty(t4, E, {configurable: true, writable: true, value: true});
        }(t3), pt(t3));
      }
      var gt = {install: function(t3) {
        return vt(t3);
      }};
      typeof window != "undefined" && window.Vue && window.Vue.use(gt);
      var yt = gt;
      var _t = {type: [String, Number, Boolean, Array], default: false};
      u.a.use(yt);
      var bt = {name: "WvuiRadio", model: {prop: "modelValue", event: "input"}, props: {modelValue: _t, inputValue: {type: [String, Number, Boolean], default: false}, disabled: {type: Boolean, default: false}, name: {type: String, default: ""}}, setup: function(t3, e2) {
        var n2 = e2.emit, i2 = J(), o2 = function(t4, e3) {
          return at({get: function() {
            return t4.value;
          }, set: function(t5) {
            return e3("input", t5);
          }});
        }(Z(t3, "modelValue"), n2);
        return {input: i2, focusInput: function() {
          i2.value.focus();
        }, wrappedModel: o2};
      }}, mt = (n(11), a(bt, function() {
        var t3 = this, e2 = t3.$createElement, n2 = t3._self._c || e2;
        return n2("label", {staticClass: "wvui-radio", attrs: {"aria-disabled": t3.disabled}, on: {click: t3.focusInput}}, [n2("input", {directives: [{name: "model", rawName: "v-model", value: t3.wrappedModel, expression: "wrappedModel"}], ref: "input", staticClass: "wvui-radio__input", attrs: {type: "radio", name: t3.name, disabled: t3.disabled}, domProps: {value: t3.inputValue, checked: t3._q(t3.wrappedModel, t3.inputValue)}, on: {change: function(e3) {
          t3.wrappedModel = t3.inputValue;
        }}}), t3._v(" "), n2("span", {staticClass: "wvui-radio__icon", attrs: {"aria-disabled": t3.disabled}}), t3._v(" "), n2("span", {staticClass: "wvui-radio__label-content"}, [t3._t("default")], 2)]);
      }, [], false, null, null, null).exports);
      function wt(t3) {
        return Object.keys(t3).map(function(e2) {
          return e2 + "=" + encodeURIComponent(t3[e2]);
        }).join("&");
      }
      var St = u.a.extend({name: "WvuiTypeaheadSuggestionTitle", props: {query: {type: String, default: ""}, title: {type: String, required: true}, highlightQuery: {type: Boolean, default: true}}, computed: {titleChunks: function() {
        return this.highlightQuery ? function(t3, e2) {
          if (!t3)
            return [e2, "", ""];
          var n2 = t3.replace(/([\\{}()|.?*+\-^$[\]])/g, "\\$1"), i2 = e2.match(new RegExp(n2 + "[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]*", "i"));
          if (!i2 || i2.index === void 0)
            return [e2, "", ""];
          var o2 = i2.index, r2 = o2 + i2[0].length, u2 = e2.substring(o2, r2);
          return [e2.substring(0, o2), u2, e2.substring(r2, e2.length)];
        }(this.query, this.title) : ["", this.title, ""];
      }}}), xt = (n(12), a(St, function() {
        var t3 = this, e2 = t3.$createElement, n2 = t3._self._c || e2;
        return n2("span", {staticClass: "wvui-typeahead-suggestion__title"}, [t3._v("\n	" + t3._s(t3.titleChunks[0])), n2("span", {staticClass: "wvui-typeahead-suggestion__match"}, [t3._v(t3._s(t3.titleChunks[1]))]), t3._v(t3._s(t3.titleChunks[2]) + "\n")]);
      }, [], false, null, null, null).exports), Ct = function() {
        return (Ct = Object.assign || function(t3) {
          for (var e2, n2 = 1, i2 = arguments.length; n2 < i2; n2++)
            for (var o2 in e2 = arguments[n2])
              Object.prototype.hasOwnProperty.call(e2, o2) && (t3[o2] = e2[o2]);
          return t3;
        }).apply(this, arguments);
      };
      function It() {
        return {generateUrl: function(t3, e2, n2) {
          return e2 === void 0 && (e2 = {title: "Special:Search"}), n2 === void 0 && (n2 = "/w/index.php"), typeof t3 != "string" ? t3 = t3.title : e2.fulltext = "1", n2 + "?" + wt(Ct(Ct({}, e2), {search: t3}));
        }};
      }
      var kt = u.a.extend({name: "WvuiTypeaheadSuggestion", components: {WvuiTypeaheadSuggestionTitle: xt, WvuiIcon: p}, props: {active: {type: Boolean, default: false}, articlePath: {type: String, default: "/w/index.php"}, query: {type: String, default: ""}, suggestion: {type: Object, required: true}, urlGenerator: {type: Object, default: It}, showThumbnail: {type: Boolean, default: true}, showDescription: {type: Boolean, default: true}, highlightQuery: {type: Boolean, default: true}}, data: function() {
        return {defaultThumbnailIcon: "M19 3H1v14h18zM3 14l3.5-4.5 2.5 3L12.5 8l4.5 6z"};
      }, computed: {rootClasses: function() {
        return {"wvui-typeahead-suggestion--active": this.active};
      }, suggestionWikiLink: function() {
        return this.urlGenerator.generateUrl(this.suggestion, void 0, this.articlePath);
      }, thumbnailBackgroundImage: function() {
        var t3;
        return "url(" + ((t3 = this.suggestion.thumbnail) === null || t3 === void 0 ? void 0 : t3.url) + ")";
      }}, methods: {onMouseOver: function(t3) {
        this.$emit("mouseover", t3);
      }, onClick: function(t3) {
        this.$emit("click", t3);
      }}}), $t = (n(13), a(kt, function() {
        var t3 = this, e2 = t3.$createElement, n2 = t3._self._c || e2;
        return t3.suggestion ? n2("a", {staticClass: "wvui-typeahead-suggestion", class: t3.rootClasses, attrs: {href: t3.suggestionWikiLink}, on: {mouseover: t3.onMouseOver, click: t3.onClick}}, [t3.showThumbnail && t3.suggestion.thumbnail ? n2("span", {staticClass: "wvui-typeahead-suggestion__thumbnail", style: {backgroundImage: t3.thumbnailBackgroundImage}}) : t3.showThumbnail ? n2("span", {staticClass: "wvui-typeahead-suggestion__thumbnail-placeholder"}, [n2("wvui-icon", {staticClass: "wvui-typeahead-suggestion__thumbnail-icon", attrs: {icon: t3.defaultThumbnailIcon}})], 1) : t3._e(), t3._v(" "), n2("span", {staticClass: "wvui-typeahead-suggestion__text"}, [n2("wvui-typeahead-suggestion-title", {attrs: {query: t3.query, title: t3.suggestion.title, "highlight-query": t3.highlightQuery}}), t3._v(" "), t3.showDescription && t3.suggestion.description ? n2("span", {staticClass: "wvui-typeahead-suggestion__description"}, [t3._v(t3._s(t3.suggestion.description))]) : t3._e()], 1)]) : t3._e();
      }, [], false, null, null, null).exports), Ot = function() {
        return (Ot = Object.assign || function(t3) {
          for (var e2, n2 = 1, i2 = arguments.length; n2 < i2; n2++)
            for (var o2 in e2 = arguments[n2])
              Object.prototype.hasOwnProperty.call(e2, o2) && (t3[o2] = e2[o2]);
          return t3;
        }).apply(this, arguments);
      }, jt = {abort: function() {
      }, signal: void 0};
      function Tt(t3, e2) {
        var n2 = window.AbortController ? new AbortController() : jt;
        return {fetch: fetch(t3, Ot(Ot({}, e2), {signal: n2.signal})).then(function(t4) {
          return t4.ok ? t4.json() : Promise.reject("Network request failed with HTTP code " + t4.status + ".");
        }), abort: function() {
          return n2.abort();
        }};
      }
      function Et(t3) {
        return t3 === void 0 && (t3 = Tt), {fetchByTitle: function(e2, n2, i2) {
          i2 === void 0 && (i2 = 10);
          var o2 = "//" + n2 + "/w/rest.php/v1/search/title?" + wt({q: e2, limit: i2}), r2 = t3(o2, {headers: {accept: "application/json"}}), u2 = r2.fetch;
          return {abort: r2.abort, fetch: u2.then(function(t4) {
            return function(t5, e3) {
              return {query: t5, results: e3.pages.map(function(t6) {
                var e4, n3, i3 = t6.id, o3 = t6.key, r3 = t6.title, u3 = t6.description, s2 = t6.thumbnail;
                return {id: i3, key: o3, title: r3, description: u3, thumbnail: s2 ? {url: s2.url, width: (e4 = s2.width) !== null && e4 !== void 0 ? e4 : void 0, height: (n3 = s2.height) !== null && n3 !== void 0 ? n3 : void 0} : void 0};
              })};
            }(e2, t4);
          })};
        }};
      }
      var At = u.a.extend({name: "WvuiTypeaheadSearch", components: {WvuiTypeaheadSuggestion: $t, WvuiButton: c, WvuiInput: v, WvuiIcon: p}, inheritAttrs: false, props: {initialInputValue: {type: String, default: ""}, buttonLabel: {type: String, required: true}, formAction: {type: String, required: true}, client: {type: Object, default: function() {
        return Et();
      }}, urlGenerator: {type: Object, default: function() {
        return It();
      }}, domain: {type: String, default: "en.wikipedia.org"}, footerSearchText: {type: String, required: true}, suggestionsLabel: {type: String, required: true}, focused: {type: Boolean, default: false}, id: {type: String, required: true}, showThumbnail: {type: Boolean, default: true}, showDescription: {type: Boolean, default: true}, highlightQuery: {type: Boolean, default: true}}, data: function() {
        return {startIcon: "M7 0a7 7 0 017 7 6.92 6.92 0 01-1.4 4.19l5.4 5.4L16.58 18l-5.39-5.39A7 7 0 117 0zm0 2a5 5 0 105 5 5 5 0 00-5-5z", articleIcon: "M12.43 14.34A5 5 0 0110 15a5 5 0 113.95-2L17 16.09V3a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 001.45-.63z M13 10 A3 3 0 0 1 10 13 A3 3 0 0 1 7 10 A3 3 0 0 1 13 10 z", isHovered: false, suggestionActiveIndex: -1, suggestionsList: [], isFocused: this.focused, searchQuery: "", inputValue: this.initialInputValue, InputType: f, isExpanded: false, request: null, debounceId: null};
      }, computed: {rootClasses: function() {
        return {"wvui-typeahead-search--active": this.isHovered, "wvui-typeahead-search--has-value": !!this.searchQuery, "wvui-typeahead-search--expanded": this.isExpanded, "wvui-typeahead-search--show-thumbnail": this.showThumbnail};
      }, footerClasses: function() {
        return {"wvui-typeahead-search__suggestions__footer--active": this.isFooterSelected};
      }, footerUrl: function() {
        return this.urlGenerator.generateUrl(this.searchQuery);
      }, isFooterSelected: function() {
        return this.suggestionActiveIndex === this.suggestionsList.length;
      }, suggestionsId: function() {
        return this.id + "-suggestions";
      }, activeSuggestionId: function() {
        return this.isExpanded ? this.suggestionActiveIndex < 0 || this.suggestionActiveIndex > this.suggestionsList.length ? "" : this.isFooterSelected ? this.footerId : this.getSuggestionId(this.suggestionsList[this.suggestionActiveIndex]) : "";
      }, footerId: function() {
        return this.suggestionsId + "-footer";
      }, isExpandedString: function() {
        return this.isExpanded ? "true" : "false";
      }}, mounted: function() {
        this.initialInputValue && this.onInput(this.initialInputValue);
      }, methods: {updateSuggestions: function(t3, e2) {
        this.searchQuery = t3, this.suggestionsList = e2, this.suggestionActiveIndex = -1, this.isExpanded = !!this.searchQuery && this.isFocused;
      }, clearSuggestions: function() {
        this.updateSuggestions("", []);
      }, onInput: function(t3) {
        var e2 = this;
        this.debounceId && clearTimeout(this.debounceId), this.debounceId = setTimeout(function() {
          var n2 = t3.trim();
          e2.request && e2.request.abort(), n2 ? (e2.$emit("fetch-start"), e2.request = e2.client.fetchByTitle(t3, e2.domain), e2.request.fetch.then(function(t4) {
            var i2 = t4.results;
            e2.updateSuggestions(n2, i2);
            var o2 = {numberOfResults: i2.length, query: n2};
            e2.$emit("fetch-end", o2);
          }).catch(function() {
          })) : e2.clearSuggestions();
        }, 120);
      }, onSuggestionMouseOver: function(t3) {
        this.suggestionActiveIndex = t3;
      }, onInputFocus: function() {
        this.isHovered = true, this.isFocused = true, this.isExpanded = !!this.searchQuery;
      }, onInputBlur: function() {
        this.isFocused = false, this.isHovered = false, this.isExpanded = false;
      }, onFooterHover: function() {
        this.suggestionActiveIndex = this.suggestionsList.length;
      }, onRootMouseOver: function() {
        this.isHovered = true;
      }, onRootMouseOut: function() {
        this.isHovered = this.isFocused, this.suggestionActiveIndex = -1;
      }, onSuggestionMouseDown: function(t3) {
        t3.preventDefault();
      }, onSuggestionClick: function(t3) {
        var e2 = {index: this.suggestionActiveIndex, numberOfResults: this.suggestionsList.length};
        this.inputValue = t3 ? t3.title : this.searchQuery, this.updateSuggestions(this.inputValue, []), this.isFocused = true, this.isExpanded = false, this.$emit("suggestion-click", e2);
      }, onKeyDownUp: function(t3) {
        this.handleKeyUpDown(t3, -1);
      }, onKeyDownDown: function(t3) {
        this.handleKeyUpDown(t3, 1);
      }, handleKeyUpDown: function(t3, e2) {
        this.isFocused && this.isExpanded && (t3.preventDefault(), this.nudgeActiveSuggestion(e2));
      }, nudgeActiveSuggestion: function(t3) {
        var e2 = this.suggestionActiveIndex;
        (e2 += t3) < -1 ? e2 = this.suggestionsList.length : e2 > this.suggestionsList.length + 1 && (e2 = 0), this.suggestionActiveIndex = e2;
        var n2 = this.suggestionsList[e2];
        this.inputValue = n2 ? n2.title : this.searchQuery;
      }, onKeyDownEscape: function(t3) {
        t3.preventDefault(), this.isExpanded = false;
      }, getSuggestionId: function(t3) {
        return "wvui-typeahead-search-suggestion-" + t3.id;
      }, onSubmit: function(t3) {
        this.suggestionActiveIndex === this.suggestionsList.length && (t3.preventDefault(), window.location.assign(this.footerUrl));
        var e2 = {index: this.suggestionActiveIndex, numberOfResults: this.suggestionsList.length};
        this.$emit("submit", e2);
      }}}), Mt = (n(14), a(At, function() {
        var t3 = this, e2 = t3.$createElement, n2 = t3._self._c || e2;
        return n2("div", {staticClass: "wvui-typeahead-search", class: t3.rootClasses, attrs: {role: "combobox", "aria-expanded": t3.isExpandedString, "aria-haspopup": "listbox", "aria-owns": t3.suggestionsId}, on: {mouseover: t3.onRootMouseOver, mouseout: t3.onRootMouseOut, keydown: [function(e3) {
          return !e3.type.indexOf("key") && t3._k(e3.keyCode, "up", 38, e3.key, ["Up", "ArrowUp"]) ? null : t3.onKeyDownUp(e3);
        }, function(e3) {
          return !e3.type.indexOf("key") && t3._k(e3.keyCode, "down", 40, e3.key, ["Down", "ArrowDown"]) ? null : t3.onKeyDownDown(e3);
        }, function(e3) {
          return !e3.type.indexOf("key") && t3._k(e3.keyCode, "escape", void 0, e3.key, void 0) ? null : t3.onKeyDownEscape(e3);
        }]}}, [n2("form", {staticClass: "wvui-typeahead-search__form", attrs: {id: t3.id, action: t3.formAction}, on: {submit: t3.onSubmit}}, [n2("div", {staticClass: "wvui-typeahead-search__wrapper"}, [n2("wvui-input", t3._b({staticClass: "wvui-typeahead-search__input", attrs: {"start-icon": t3.startIcon, value: t3.inputValue, type: t3.InputType.Search, name: "search", dir: "auto", autocapitalize: "off", autocomplete: "off", "aria-autocomplete": "list", "aria-controls": t3.suggestionsId, "aria-activedescendant": t3.activeSuggestionId}, on: {input: t3.onInput, blur: t3.onInputBlur, focus: t3.onInputFocus}}, "wvui-input", t3.$attrs, false)), t3._v(" "), t3._t("default"), t3._v(" "), n2("ol", {staticClass: "wvui-typeahead-search__suggestions", attrs: {id: t3.suggestionsId, role: "listbox", "aria-label": t3.suggestionsLabel}}, [t3._l(t3.suggestionsList, function(e3, i2) {
          return n2("li", {key: i2, attrs: {role: "option"}}, [n2("wvui-typeahead-suggestion", {key: e3.id, staticClass: "wvui-typeahead-search__suggestion", attrs: {id: t3.getSuggestionId(e3), "article-path": t3.formAction, query: t3.searchQuery, active: t3.suggestionActiveIndex === i2, suggestion: e3, "show-thumbnail": t3.showThumbnail, "show-description": t3.showDescription, "highlight-query": t3.highlightQuery}, on: {mouseover: function(e4) {
            return t3.onSuggestionMouseOver(i2);
          }, click: function(n3) {
            return t3.onSuggestionClick(e3);
          }}, nativeOn: {mousedown: function(e4) {
            return t3.onSuggestionMouseDown(e4);
          }}})], 1);
        }), t3._v(" "), n2("li", {attrs: {role: "option"}}, [n2("a", {ref: "footer", staticClass: "wvui-typeahead-search__suggestions__footer", class: t3.footerClasses, attrs: {id: t3.footerId, tabindex: "-1", href: t3.footerUrl}, on: {mouseover: t3.onFooterHover, mousedown: t3.onSuggestionMouseDown, click: function(e3) {
          return t3.onSuggestionClick();
        }}}, [n2("wvui-icon", {staticClass: "wvui-typeahead-search__suggestions-footer-article-icon", attrs: {icon: t3.articleIcon}}), t3._v(" "), n2("span", {staticClass: "wvui-typeahead-search__suggestions__footer__text"}, [t3._v(t3._s(t3.footerSearchText) + " "), n2("strong", [t3._v(t3._s(t3.searchQuery))])])], 1)])], 2)], 2), t3._v(" "), n2("wvui-button", {staticClass: "wvui-typeahead-search__submit"}, [t3._v("\n			" + t3._s(t3.buttonLabel) + "\n		")])], 1)]);
      }, [], false, null, null, null).exports), Dt = "0.2.0";
      e.default = {WvuiButton: c, WvuiInput: v, WvuiIcon: p, WvuiRadio: mt, WvuiTypeaheadSearch: Mt, WvuiTypeaheadSuggestion: $t};
    }]);
  });
});
var Wvui = /* @__PURE__ */ getDefaultExportFromCjs(wvui$1);
var render$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {staticClass: "buttonDemo"}, [_c("h2", [_vm._v("WvuiButton.vue")]), _vm._v(" "), _c("wvui-button", {on: {click: function($event) {
    _vm.clicked++;
  }}}, [_vm._v("\n		Default Button\n	")]), _vm._v(" "), _c("wvui-button", {attrs: {action: "progressive"}, on: {click: function($event) {
    _vm.clicked++;
  }}}, [_vm._v("\n		Progressive button\n	")]), _vm._v(" "), _c("wvui-button", {attrs: {action: "destructive"}, on: {click: function($event) {
    _vm.clicked--;
  }}}, [_vm._v("\n		Destructive button\n	")]), _vm._v(" "), _c("wvui-button", {attrs: {type: "quiet"}, on: {click: function($event) {
    _vm.clicked++;
  }}}, [_vm._v("\n		Quiet button\n	")]), _vm._v(" "), _c("pre", [_vm._v("Clicked " + _vm._s(_vm.clicked) + " times.")])], 1);
};
var staticRenderFns$2 = [];
var ButtonDemo_vue_vue_type_style_index_0_lang = ".buttonDemo pre {\n  font-style: italic;\n}\n";
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
  return _c("div", {attrs: {id: "demo"}}, [_c("p", [_vm._v("You are using this demo in " + _vm._s(_vm.config.mode) + " mode.")]), _vm._v(" "), _c("button-demo"), _vm._v(" "), _c("typeahead-demo")], 1);
};
var staticRenderFns = [];
const script = {
  name: "WvuiDemo",
  components: {
    ButtonDemo,
    TypeaheadDemo
  },
  props: {
    config: {
      type: Object,
      default: () => {
      }
    }
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
var wvui = '.wvui-button{box-sizing:border-box;min-width:32px;min-height:32px;max-width:28.75em;margin:0;border-width:1px;border-style:solid;border-radius:2px;padding-right:12px;padding-left:12px;overflow:visible;font-family:inherit;font-size:inherit;font-weight:700;text-transform:none;white-space:nowrap;-webkit-transition:border-color .1s,background-color .1s,color .1s,box-shadow .1s;transition:border-color .1s,background-color .1s,color .1s,box-shadow .1s}.wvui-button::-moz-focus-inner{border:0;padding:0}.wvui-button:focus{outline:0}.wvui-button:not([disabled]){color:#202122;cursor:pointer}.wvui-button:not([disabled]):focus{border-color:#36c;box-shadow:inset 0 0 0 1px #36c;outline:1px solid transparent}.wvui-button:not([disabled]):active{background-color:#c8ccd1;color:#000;box-shadow:none}.wvui-button[disabled]{border-color:transparent}.wvui-button .wvui-icon{color:inherit}.wvui-button--framed:not([disabled]){background-color:#f8f9fa;border-color:#a2a9b1}.wvui-button--framed:not([disabled]):hover{background-color:#fff;color:#404244}.wvui-button--framed:not([disabled]):active{background-color:#c8ccd1;color:#000;border-color:#72777d}.wvui-button--framed[disabled]{background-color:#c8ccd1;color:#fff}.wvui-button--type-primary.wvui-button--action-progressive:not([disabled]){background-color:#36c;color:#fff;border-color:#36c}.wvui-button--type-primary.wvui-button--action-progressive:not([disabled]):hover{background-color:#447ff5;border-color:#447ff5}.wvui-button--type-primary.wvui-button--action-progressive:not([disabled]):focus{background-color:#36c;border-color:#36c;box-shadow:inset 0 0 0 1px #36c,inset 0 0 0 2px #fff}.wvui-button--type-primary.wvui-button--action-progressive:not([disabled]):active{background-color:#2a4b8d;border-color:#2a4b8d;box-shadow:none}.wvui-button--type-primary.wvui-button--action-destructive:not([disabled]){background-color:#d33;color:#fff;border-color:#d33}.wvui-button--type-primary.wvui-button--action-destructive:not([disabled]):hover{background-color:#ff4242;border-color:#ff4242}.wvui-button--type-primary.wvui-button--action-destructive:not([disabled]):focus{background-color:#d33;border-color:#d33;box-shadow:inset 0 0 0 1px #d33,inset 0 0 0 2px #fff}.wvui-button--type-primary.wvui-button--action-destructive:not([disabled]):active{background-color:#b32424;border-color:#b32424;box-shadow:none}.wvui-button--type-normal.wvui-button--action-progressive:not([disabled]){color:#36c}.wvui-button--type-normal.wvui-button--action-progressive:not([disabled]):hover{color:#447ff5;border-color:#447ff5}.wvui-button--type-normal.wvui-button--action-progressive:not([disabled]):focus{color:#36c;border-color:#36c;box-shadow:inset 0 0 0 1px #36c,inset 0 0 0 2px #fff}.wvui-button--type-normal.wvui-button--action-progressive:not([disabled]):active{background-color:#eff3fa;color:#2a4b8d;border-color:#2a4b8d;box-shadow:none}.wvui-button--type-normal.wvui-button--action-destructive:not([disabled]){color:#d33}.wvui-button--type-normal.wvui-button--action-destructive:not([disabled]):hover{color:#ff4242;border-color:#ff4242}.wvui-button--type-normal.wvui-button--action-destructive:not([disabled]):focus{color:#d33;border-color:#d33;box-shadow:inset 0 0 0 1px #d33,inset 0 0 0 2px #fff}.wvui-button--type-normal.wvui-button--action-destructive:not([disabled]):active{background-color:#fff;color:#b32424;border-color:#b32424;box-shadow:none}.wvui-button--type-quiet{background-color:transparent;color:#202122;border-color:transparent}.wvui-button--type-quiet:not([disabled]):hover{background-color:rgba(0,24,73,.02745098)}.wvui-button--type-quiet:not([disabled]):focus{border-color:#36c;box-shadow:inset 0 0 0 1px #36c,inset 0 0 0 2px #fff}.wvui-button--type-quiet:not([disabled]):active{background-color:rgba(0,36,73,.08235294);border-color:#72777d;box-shadow:none}.wvui-button--type-quiet.wvui-button--action-progressive:not([disabled]){color:#36c}.wvui-button--type-quiet.wvui-button--action-progressive:not([disabled]):hover{background-color:rgba(52,123,255,.2);color:#447ff5}.wvui-button--type-quiet.wvui-button--action-progressive:not([disabled]):focus{color:#36c;border-color:#36c;box-shadow:inset 0 0 0 1px #36c,inset 0 0 0 2px #fff}.wvui-button--type-quiet.wvui-button--action-progressive:not([disabled]):active{background-color:#2a4b8d;color:#fff;border-color:#2a4b8d;box-shadow:none}.wvui-button--type-quiet.wvui-button--action-destructive:not([disabled]){color:#d33}.wvui-button--type-quiet.wvui-button--action-destructive:not([disabled]):hover{background-color:rgba(209,29,19,.2);color:#ff4242}.wvui-button--type-quiet.wvui-button--action-destructive:not([disabled]):focus{color:#d33;border-color:#d33;box-shadow:inset 0 0 0 1px #d33,inset 0 0 0 2px #fff}.wvui-button--type-quiet.wvui-button--action-destructive:not([disabled]):active{background-color:#b32424;color:#fff;border-color:#b32424;box-shadow:none}.wvui-button--type-quiet[disabled]{color:#72777d}.wvui-icon{color:#202122;display:-webkit-inline-box;display:inline-flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;vertical-align:middle}[dir=rtl] .wvui-icon--flip-for-rtl svg{-webkit-transform:scaleX(-1);transform:scaleX(-1)}.wvui-input{position:relative;box-sizing:border-box}.wvui-input__end-icon,.wvui-input__start-icon{color:#54595d;position:absolute;top:0;min-height:20px;height:100%}.wvui-input__start-icon{left:1px;width:36px;pointer-events:none}.wvui-input__end-icon{right:1px;width:36px}.wvui-input--clearable .wvui-input__end-icon{width:calc(16px + .85714em);cursor:pointer}.wvui-input--clearable .wvui-input__end-icon svg{width:.85714286em}.wvui-input__input{background-color:#fff;color:#000;display:block;box-sizing:border-box;width:100%;height:2.28571429em;margin:0;border:1px solid #a2a9b1;border-radius:2px;padding:5px 8px;box-shadow:inset 0 0 0 1px transparent;font-family:inherit;font-size:inherit;line-height:1.42857143em}.wvui-input__input:not([disabled]){-webkit-transition:border-color .25s,box-shadow .25s;transition:border-color .25s,box-shadow .25s}.wvui-input__input:not([disabled]):hover{border-color:#72777d}.wvui-input__input:not([disabled]):focus{border-color:#36c;box-shadow:inset 0 0 0 1px #36c;outline:0}.wvui-input__input:not([disabled]):focus~.wvui-input__end-icon,.wvui-input__input:not([disabled]):focus~.wvui-input__start-icon{opacity:1}.wvui-input__input[disabled]{background-color:#eaecf0;color:#72777d;-webkit-text-fill-color:#72777d;border-color:#c8ccd1;text-shadow:0 1px 1px #fff}.wvui-input__input[disabled]~.wvui-input__end-icon,.wvui-input__input[disabled]~.wvui-input__start-icon{opacity:.51;pointer-events:none}.wvui-input__input::-webkit-input-placeholder{color:#72777d;opacity:1}.wvui-input__input:-ms-input-placeholder{color:#72777d;opacity:1}.wvui-input__input::placeholder{color:#72777d;opacity:1}.wvui-input__input::-ms-clear{display:none}.wvui-input__input[type=search]{-webkit-appearance:none;-moz-appearance:textfield}.wvui-input__input[type=search]::-webkit-search-cancel-button,.wvui-input__input[type=search]::-webkit-search-decoration{display:none}.wvui-input--has-start-icon .wvui-input__input{padding-left:36px}.wvui-input--has-end-icon .wvui-input__input{padding-right:36px}.wvui-radio{position:relative;z-index:0;line-height:1.42857143em;cursor:pointer}.wvui-radio[aria-disabled=true]{cursor:default}.wvui-radio__icon{background-color:#fff;box-sizing:border-box;border:1px solid #72777d}.wvui-radio__icon,.wvui-radio__input{position:absolute;left:0;width:1.42857143em;height:1.42857143em}.wvui-radio__input{opacity:0;z-index:1;margin:0;font-size:inherit;cursor:pointer}.wvui-radio__input:disabled{cursor:default}.wvui-radio__label-content{display:inline-block;padding-left:1.92857143em}.wvui-radio__icon{border-radius:50%;-webkit-transition:background-color .1s,border-color .1s,border-width .1s;transition:background-color .1s,border-color .1s,border-width .1s}.wvui-radio__icon:before{content:" ";position:absolute;top:-4px;right:-4px;bottom:-4px;left:-4px;border:1px solid transparent;border-radius:50%}.wvui-radio__input:hover+.wvui-radio__icon{border-color:#447ff5}.wvui-radio__input:disabled~.wvui-radio__label-content{color:#72777d}.wvui-radio__input:disabled+.wvui-radio__icon{background-color:#c8ccd1;border-color:#c8ccd1}.wvui-radio__input:disabled:checked+.wvui-radio__icon{background-color:#fff;border-width:.42857143em}.wvui-radio__input:checked:enabled+.wvui-radio__icon{border-width:.42857143em;border-color:#36c}.wvui-radio__input:checked:enabled:focus+.wvui-radio__icon:before{border-color:#fff}.wvui-radio__input:checked:enabled:hover+.wvui-radio__icon{border-color:#447ff5}.wvui-radio:active .wvui-radio__input:enabled+.wvui-radio__icon{background-color:#2a4b8d;border-color:#2a4b8d}.wvui-radio:active .wvui-radio__input:enabled:checked+.wvui-radio__icon{background-color:#fff;border-color:#2a4b8d}.wvui-radio:active .wvui-radio__input:enabled:checked+.wvui-radio__icon:before{border-color:#2a4b8d}.wvui-typeahead-suggestion__title{color:#202122;display:block;margin:0 0 2px;font-size:1.14285714em;font-weight:700}.wvui-typeahead-suggestion__match{font-weight:400}.wvui-typeahead-suggestion{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;padding:8px 12px;text-decoration:none;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;word-wrap:break-word}.wvui-typeahead-suggestion--active{background-color:#eaecf0}.wvui-typeahead-suggestion__thumbnail,.wvui-typeahead-suggestion__thumbnail-placeholder{background-position:50%;background-repeat:no-repeat;background-size:cover;flex-shrink:0;width:2.57142857em;height:2.57142857em;margin-right:12px;border-radius:2px;box-shadow:0 0 1px 1px #eaecf0}.wvui-typeahead-suggestion__thumbnail{display:inline-block}.wvui-typeahead-suggestion__thumbnail-placeholder{background-color:#f8f9fa;display:-webkit-inline-box;display:inline-flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.wvui-typeahead-suggestion__thumbnail-icon{color:#54595d}.wvui-typeahead-suggestion__text{overflow:hidden}.wvui-typeahead-suggestion__text .wvui-typeahead-suggestion__description{color:#72777d;display:block;overflow:hidden;font-size:1em;text-overflow:ellipsis;white-space:nowrap}.wvui-typeahead-search{background-color:#fff;border:1px solid #a2a9b1;border-radius:2px}.wvui-typeahead-search__form{display:-webkit-box;display:flex}.wvui-typeahead-search__wrapper{-webkit-box-flex:1;flex-grow:1;position:relative;margin:-1px}.wvui-typeahead-search__submit{opacity:0;position:relative;flex-shrink:0;margin:-1px -1px -1px 0;border-top-left-radius:0;border-bottom-left-radius:0;-webkit-transition:opacity .1s;transition:opacity .1s}.wvui-typeahead-search__submit:hover{z-index:1}.wvui-typeahead-search__submit:focus{opacity:1;z-index:1}.wvui-typeahead-search__suggestions{background-color:#fff;list-style:none;display:none;position:absolute;top:2.28571429em;right:0;left:0;box-sizing:border-box;margin:0;border:1px solid #a2a9b1;border-top:0 solid #a2a9b1;border-radius:0 0 2px 2px;padding:0;box-shadow:0 2px 2px 0 rgba(0,0,0,.25)}.wvui-typeahead-search__suggestions__footer{color:#202122;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;border-top:1px solid #c8ccd1;padding:8px 12px 8px 36px;text-decoration:none;cursor:pointer}.wvui-typeahead-search__suggestions__footer:active,.wvui-typeahead-search__suggestions__footer:visited{color:#202122}.wvui-typeahead-search__suggestions__footer .wvui-icon{color:#54595d;width:auto;height:2.57142857em;margin-right:12px}.wvui-typeahead-search__suggestions__footer--active{background-color:#eaecf0}.wvui-typeahead-search__suggestions__footer__text{font-size:1.14285714em}.wvui-typeahead-search__suggestion{padding-left:36px}.wvui-typeahead-search .wvui-input__input{border-right-color:transparent}.wvui-typeahead-search--has-value .wvui-input__input{border-bottom-left-radius:0}.wvui-typeahead-search--active .wvui-typeahead-search__submit,.wvui-typeahead-search:hover .wvui-typeahead-search__submit{opacity:1}.wvui-typeahead-search--active .wvui-typeahead-search__input,.wvui-typeahead-search:hover .wvui-typeahead-search__input{z-index:1}.wvui-typeahead-search--active .wvui-input__input,.wvui-typeahead-search:hover .wvui-input__input{border-top-right-radius:0;border-bottom-right-radius:0}.wvui-typeahead-search--expanded .wvui-typeahead-search__suggestions{display:block}.wvui-typeahead-search--show-thumbnail .wvui-input__input{padding-left:2.57142857em}.wvui-typeahead-search--show-thumbnail .wvui-input__start-icon{width:2.57142857em}.wvui-typeahead-search--show-thumbnail .wvui-input__input:focus{position:relative;left:-24px;width:calc(100% + 24px);padding-left:calc(24px + 2.57143em)}.wvui-typeahead-search--show-thumbnail .wvui-input__input:focus+.wvui-input__start-icon{left:-11px}.wvui-typeahead-search--show-thumbnail .wvui-typeahead-search__suggestions{left:-24px}.wvui-typeahead-search--show-thumbnail .wvui-typeahead-search__suggestion,.wvui-typeahead-search--show-thumbnail .wvui-typeahead-search__suggestions__footer{padding-right:12px;padding-left:12px}.wvui-typeahead-search--show-thumbnail .wvui-typeahead-search__suggestions__footer__text{-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;word-wrap:break-word}.wvui-typeahead-search--show-thumbnail .wvui-typeahead-search__suggestions-footer-article-icon{flex-shrink:0;width:2.57142857em}\n/*# sourceMappingURL=wvui.css.map */';
function main(config) {
  new require$$0__default["default"]({
    render: function(h) {
      return h(Demo, {props: {config}});
    }
  }).$mount("#sandbox");
  console.log(`Hello from ${mw.message("buildsandbox-title").text()}`);
}
module.exports = main;
