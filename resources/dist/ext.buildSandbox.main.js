"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports[Symbol.toStringTag] = "Module";
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
  var module = {exports: {}};
  return fn(module, module.exports), module.exports;
}
var wvui$1 = createCommonjsModule(function(module, exports2) {
  !function(t, e) {
    module.exports = e(require$$0__default["default"]);
  }(commonjsGlobal, function(t) {
    return function(t2) {
      var e = {};
      function n(i) {
        if (e[i])
          return e[i].exports;
        var s = e[i] = {i, l: false, exports: {}};
        return t2[i].call(s.exports, s, s.exports, n), s.l = true, s.exports;
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
          for (var s in t3)
            n.d(i, s, function(e3) {
              return t3[e3];
            }.bind(null, s));
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
      }, n.p = "", n(n.s = 13);
    }([function(e, n) {
      e.exports = t;
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
      n.r(e), n.d(e, "version", function() {
        return T;
      }), n.d(e, "restSearchClient", function() {
        return S;
      });
      var i;
      !function(t3) {
        t3.Default = "default", t3.Progressive = "progressive", t3.Destructive = "destructive";
      }(i || (i = {}));
      var s = n(0), o = n.n(s), u = o.a.extend({name: "WvuiButton", props: {action: {type: String, default: i.Default, validator: function(t3) {
        return Object.keys(i).some(function(e2) {
          return i[e2] === t3;
        });
      }}, quiet: Boolean}, computed: {rootClasses: function() {
        return {"wvui-button--default": this.action === i.Default, "wvui-button--progressive": this.action === i.Progressive, "wvui-button--destructive": this.action === i.Destructive, "wvui-button--framed": !this.quiet, "wvui-button--quiet": this.quiet};
      }}, methods: {onClick: function(t3) {
        this.$emit("click", t3);
      }}});
      n(7);
      function r(t3, e2, n2, i2, s2, o2, u2, r2) {
        var a2, c2 = typeof t3 == "function" ? t3.options : t3;
        if (e2 && (c2.render = e2, c2.staticRenderFns = n2, c2._compiled = true), i2 && (c2.functional = true), o2 && (c2._scopeId = "data-v-" + o2), u2 ? (a2 = function(t4) {
          (t4 = t4 || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || typeof __VUE_SSR_CONTEXT__ == "undefined" || (t4 = __VUE_SSR_CONTEXT__), s2 && s2.call(this, t4), t4 && t4._registeredComponents && t4._registeredComponents.add(u2);
        }, c2._ssrRegister = a2) : s2 && (a2 = r2 ? function() {
          s2.call(this, (c2.functional ? this.parent : this).$root.$options.shadowRoot);
        } : s2), a2)
          if (c2.functional) {
            c2._injectStyles = a2;
            var l2 = c2.render;
            c2.render = function(t4, e3) {
              return a2.call(e3), l2(t4, e3);
            };
          } else {
            var d2 = c2.beforeCreate;
            c2.beforeCreate = d2 ? [].concat(d2, a2) : [a2];
          }
        return {exports: t3, options: c2};
      }
      var a = r(u, function() {
        var t3 = this, e2 = t3.$createElement;
        return (t3._self._c || e2)("button", {staticClass: "wvui-button", class: t3.rootClasses, on: {click: t3.onClick}}, [t3._t("default")], 2);
      }, [], false, null, null, null).exports;
      function c(t3, e2) {
        var n2;
        if (typeof t3 == "string")
          return false;
        if ("shouldFlipExceptions" in t3) {
          var i2 = (n2 = t3.shouldFlipExceptions) === null || n2 === void 0 ? void 0 : n2.indexOf(e2);
          return i2 === void 0 || i2 === -1;
        }
        return "shouldFlip" in t3 && !!t3.shouldFlip;
      }
      var l, d = o.a.extend({name: "WvuiIcon", props: {icon: {type: [String, Object], required: true}, iconColor: {type: String, default: "#000"}, iconTitle: {type: [String, Object], default: ""}, langCode: {type: String, default: function() {
        return document.documentElement.lang;
      }}}, data: function() {
        return {dir: document.documentElement.dir};
      }, computed: {rootClasses: function() {
        return {"wvui-icon--flip-for-rtl": c(this.icon, this.langCode)};
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
      }}}), h = (n(8), r(d, function() {
        var t3 = this, e2 = t3.$createElement, n2 = t3._self._c || e2;
        return n2("span", {staticClass: "wvui-icon", class: t3.rootClasses, on: {click: t3.onClick}}, [n2("svg", {attrs: {xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 20 20", "aria-hidden": t3.lacksTitle}}, [t3.iconTitle ? n2("title", [t3._v(t3._s(t3.iconTitle))]) : t3._e(), t3._v(" "), n2("g", {attrs: {fill: t3.iconColor}}, [n2("path", {attrs: {d: t3.iconPath}})])])]);
      }, [], false, null, null, null).exports);
      !function(t3) {
        t3.Text = "text", t3.Search = "search";
      }(l || (l = {}));
      var p = o.a.extend({name: "WvuiInput", components: {WvuiIcon: h}, inheritAttrs: false, props: {value: {type: [String, Number], default: ""}, type: {type: String, default: l.Text, validator: function(t3) {
        return Object.keys(l).some(function(e2) {
          return l[e2] === t3;
        });
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
      }}}), f = (n(9), r(p, function() {
        var t3 = this, e2 = t3.$createElement, n2 = t3._self._c || e2;
        return n2("div", {staticClass: "wvui-input", class: t3.rootClasses}, [n2("input", t3._b({ref: "input", staticClass: "wvui-input__input", attrs: {dir: "auto", disabled: t3.disabled, type: t3.type}, domProps: {value: t3.computedValue}, on: {input: t3.onInput, change: t3.onChange, focus: t3.onFocus, blur: t3.onBlur}}, "input", t3.$attrs, false)), t3._v(" "), t3.startIcon ? n2("wvui-icon", {staticClass: "wvui-input__start-icon", attrs: {icon: t3.startIcon}}) : t3._e(), t3._v(" "), t3.isClearable || t3.endIcon ? n2("wvui-icon", {staticClass: "wvui-input__end-icon", attrs: {icon: t3.endIcon || t3.clearIcon}, on: {click: t3.onEndIconClick}}) : t3._e()], 1);
      }, [], false, null, null, null).exports);
      function g(t3) {
        return Object.keys(t3).map(function(e2) {
          return e2 + "=" + encodeURIComponent(t3[e2]);
        }).join("&");
      }
      var v = o.a.extend({name: "WvuiTypeaheadSuggestionTitle", props: {query: {type: String, default: ""}, title: {type: String, required: true}}, computed: {titleChunks: function() {
        return function(t3, e2) {
          if (!t3)
            return [e2, "", ""];
          var n2 = t3.replace(/([\\{}()|.?*+\-^$[\]])/g, "\\$1"), i2 = e2.match(new RegExp(n2 + "[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]*", "i"));
          if (!i2 || i2.index === void 0)
            return [e2, "", ""];
          var s2 = i2.index, o2 = s2 + i2[0].length, u2 = e2.substring(s2, o2);
          return [e2.substring(0, s2), u2, e2.substring(o2, e2.length)];
        }(this.query, this.title);
      }}}), y = (n(10), r(v, function() {
        var t3 = this, e2 = t3.$createElement, n2 = t3._self._c || e2;
        return n2("span", {staticClass: "wvui-typeahead-suggestion__title"}, [t3._v("\n	" + t3._s(t3.titleChunks[0])), n2("span", {staticClass: "wvui-typeahead-suggestion__match"}, [t3._v(t3._s(t3.titleChunks[1]))]), t3._v(t3._s(t3.titleChunks[2]) + "\n")]);
      }, [], false, null, null, null).exports), m = function() {
        return (m = Object.assign || function(t3) {
          for (var e2, n2 = 1, i2 = arguments.length; n2 < i2; n2++)
            for (var s2 in e2 = arguments[n2])
              Object.prototype.hasOwnProperty.call(e2, s2) && (t3[s2] = e2[s2]);
          return t3;
        }).apply(this, arguments);
      };
      function _() {
        return {generateUrl: function(t3, e2, n2) {
          return e2 === void 0 && (e2 = {title: "Special:Search"}), n2 === void 0 && (n2 = "/w/index.php"), typeof t3 != "string" ? t3 = t3.title : e2.fulltext = "1", n2 + "?" + g(m(m({}, e2), {search: t3}));
        }};
      }
      var w = o.a.extend({name: "WvuiTypeaheadSuggestion", components: {WvuiTypeaheadSuggestionTitle: y, WvuiIcon: h}, props: {active: {type: Boolean, default: false}, articlePath: {type: String, default: "/w/index.php"}, query: {type: String, default: ""}, suggestion: {type: Object, required: true}, urlGenerator: {type: Object, default: _}, showThumbnail: {type: Boolean, default: true}, showDescription: {type: Boolean, default: true}}, data: function() {
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
      }}}), b = (n(11), r(w, function() {
        var t3 = this, e2 = t3.$createElement, n2 = t3._self._c || e2;
        return t3.suggestion ? n2("a", {staticClass: "wvui-typeahead-suggestion", class: t3.rootClasses, attrs: {href: t3.suggestionWikiLink}, on: {mouseover: t3.onMouseOver, click: t3.onClick}}, [t3.showThumbnail && t3.suggestion.thumbnail ? n2("span", {staticClass: "wvui-typeahead-suggestion__thumbnail", style: {backgroundImage: t3.thumbnailBackgroundImage}}) : t3.showThumbnail ? n2("span", {staticClass: "wvui-typeahead-suggestion__thumbnail-placeholder"}, [n2("wvui-icon", {staticClass: "wvui-typeahead-suggestion__thumbnail-icon", attrs: {icon: t3.defaultThumbnailIcon}})], 1) : t3._e(), t3._v(" "), n2("span", {staticClass: "wvui-typeahead-suggestion__text"}, [n2("wvui-typeahead-suggestion-title", {attrs: {query: t3.query, title: t3.suggestion.title}}), t3._v(" "), t3.showDescription && t3.suggestion.description ? n2("span", {staticClass: "wvui-typeahead-suggestion__description"}, [t3._v(t3._s(t3.suggestion.description))]) : t3._e()], 1)]) : t3._e();
      }, [], false, null, null, null).exports), C = function() {
        return (C = Object.assign || function(t3) {
          for (var e2, n2 = 1, i2 = arguments.length; n2 < i2; n2++)
            for (var s2 in e2 = arguments[n2])
              Object.prototype.hasOwnProperty.call(e2, s2) && (t3[s2] = e2[s2]);
          return t3;
        }).apply(this, arguments);
      }, x = {abort: function() {
      }, signal: void 0};
      function I(t3, e2) {
        var n2 = window.AbortController ? new AbortController() : x;
        return {fetch: fetch(t3, C(C({}, e2), {signal: n2.signal})).then(function(t4) {
          return t4.ok ? t4.json() : Promise.reject("Network request failed with HTTP code " + t4.status + ".");
        }), abort: function() {
          return n2.abort();
        }};
      }
      function S(t3) {
        return t3 === void 0 && (t3 = I), {fetchByTitle: function(e2, n2, i2) {
          i2 === void 0 && (i2 = 10);
          var s2 = "//" + n2 + "/w/rest.php/v1/search/title?" + g({q: e2, limit: i2}), o2 = t3(s2, {headers: {accept: "application/json"}}), u2 = o2.fetch;
          return {abort: o2.abort, fetch: u2.then(function(t4) {
            return function(t5, e3) {
              return {query: t5, results: e3.pages.map(function(t6) {
                var e4, n3, i3 = t6.id, s3 = t6.key, o3 = t6.title, u3 = t6.description, r2 = t6.thumbnail;
                return {id: i3, key: s3, title: o3, description: u3, thumbnail: r2 ? {url: r2.url, width: (e4 = r2.width) !== null && e4 !== void 0 ? e4 : void 0, height: (n3 = r2.height) !== null && n3 !== void 0 ? n3 : void 0} : void 0};
              })};
            }(e2, t4);
          })};
        }};
      }
      var k = o.a.extend({name: "WvuiTypeaheadSearch", components: {WvuiTypeaheadSuggestion: b, WvuiButton: a, WvuiInput: f, WvuiIcon: h}, inheritAttrs: false, props: {initialInputValue: {type: String, default: ""}, buttonLabel: {type: String, required: true}, formAction: {type: String, required: true}, client: {type: Object, default: function() {
        return S();
      }}, urlGenerator: {type: Object, default: function() {
        return _();
      }}, domain: {type: String, default: "en.wikipedia.org"}, footerSearchText: {type: String, required: true}, suggestionsLabel: {type: String, required: true}, focused: {type: Boolean, default: false}, id: {type: String, required: true}, showThumbnail: {type: Boolean, default: true}, showDescription: {type: Boolean, default: true}}, data: function() {
        return {startIcon: "M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 017.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z", articleIcon: "M12.43 14.34A5 5 0 0110 15a5 5 0 113.95-2L17 16.09V3a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 001.45-.63z M13 10 A3 3 0 0 1 10 13 A3 3 0 0 1 7 10 A3 3 0 0 1 13 10 z", isHovered: false, suggestionActiveIndex: -1, suggestionsList: [], isFocused: this.focused, searchQuery: "", inputValue: this.initialInputValue, InputType: l, isExpanded: false, request: null, debounceId: null};
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
            var s2 = {numberOfResults: i2.length, query: n2};
            e2.$emit("fetch-end", s2);
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
      }, onSubmit: function() {
        var t3 = {index: this.suggestionActiveIndex, numberOfResults: this.suggestionsList.length};
        this.$emit("submit", t3);
      }}}), O = (n(12), r(k, function() {
        var t3 = this, e2 = t3.$createElement, n2 = t3._self._c || e2;
        return n2("div", {staticClass: "wvui-typeahead-search", class: t3.rootClasses, attrs: {role: "combobox", "aria-expanded": t3.isExpandedString, "aria-haspopup": "listbox", "aria-owns": t3.suggestionsId}, on: {mouseover: t3.onRootMouseOver, mouseout: t3.onRootMouseOut, keydown: [function(e3) {
          return !e3.type.indexOf("key") && t3._k(e3.keyCode, "up", 38, e3.key, ["Up", "ArrowUp"]) ? null : t3.onKeyDownUp(e3);
        }, function(e3) {
          return !e3.type.indexOf("key") && t3._k(e3.keyCode, "down", 40, e3.key, ["Down", "ArrowDown"]) ? null : t3.onKeyDownDown(e3);
        }, function(e3) {
          return !e3.type.indexOf("key") && t3._k(e3.keyCode, "escape", void 0, e3.key, void 0) ? null : t3.onKeyDownEscape(e3);
        }]}}, [n2("form", {staticClass: "wvui-typeahead-search__form", attrs: {id: t3.id, action: t3.formAction}, on: {submit: t3.onSubmit}}, [n2("div", {staticClass: "wvui-typeahead-search__wrapper"}, [n2("wvui-input", t3._b({staticClass: "wvui-typeahead-search__input", attrs: {"start-icon": t3.startIcon, value: t3.inputValue, type: t3.InputType.Search, name: "search", dir: "auto", autocapitalize: "off", autocomplete: "off", "aria-autocomplete": "list", "aria-controls": t3.suggestionsId, "aria-activedescendant": t3.activeSuggestionId}, on: {input: t3.onInput, blur: t3.onInputBlur, focus: t3.onInputFocus}}, "wvui-input", t3.$attrs, false)), t3._v(" "), t3._t("default"), t3._v(" "), n2("ol", {staticClass: "wvui-typeahead-search__suggestions", attrs: {id: t3.suggestionsId, role: "listbox", "aria-label": t3.suggestionsLabel}}, [t3._l(t3.suggestionsList, function(e3, i2) {
          return n2("li", {key: i2, attrs: {role: "option"}}, [n2("wvui-typeahead-suggestion", {key: e3.id, staticClass: "wvui-typeahead-search__suggestion", attrs: {id: t3.getSuggestionId(e3), "article-path": t3.formAction, query: t3.searchQuery, active: t3.suggestionActiveIndex === i2, suggestion: e3, "show-thumbnail": t3.showThumbnail, "show-description": t3.showDescription}, on: {mouseover: function(e4) {
            return t3.onSuggestionMouseOver(i2);
          }, click: function(n3) {
            return t3.onSuggestionClick(e3);
          }}, nativeOn: {mousedown: function(e4) {
            return t3.onSuggestionMouseDown(e4);
          }}})], 1);
        }), t3._v(" "), n2("li", {attrs: {role: "option"}}, [n2("a", {ref: "footer", staticClass: "wvui-typeahead-search__suggestions__footer", class: t3.footerClasses, attrs: {id: t3.footerId, tabindex: "-1", href: t3.footerUrl}, on: {mouseover: t3.onFooterHover, mousedown: t3.onSuggestionMouseDown, click: function(e3) {
          return t3.onSuggestionClick();
        }}}, [n2("wvui-icon", {staticClass: "wvui-typeahead-search__suggestions-footer-article-icon", attrs: {icon: t3.articleIcon}}), t3._v(" "), n2("span", {staticClass: "wvui-typeahead-search__suggestions__footer__text"}, [t3._v(t3._s(t3.footerSearchText) + " "), n2("strong", [t3._v('"' + t3._s(t3.searchQuery) + '"')])])], 1)])], 2)], 2), t3._v(" "), n2("wvui-button", {staticClass: "wvui-typeahead-search__submit"}, [t3._v("\n			" + t3._s(t3.buttonLabel) + "\n		")])], 1)]);
      }, [], false, null, null, null).exports), T = "0.1.0";
      e.default = {WvuiButton: a, WvuiInput: f, WvuiIcon: h, WvuiTypeaheadSearch: O, WvuiTypeaheadSuggestion: b};
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
  }}}, [_vm._v("\n		Destructive button\n	")]), _vm._v(" "), _c("wvui-button", {attrs: {quiet: true}, on: {click: function($event) {
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
var wvui = ".wvui-button{box-sizing:border-box;min-width:32px;min-height:32px;max-width:28.75em;border-width:1px;border-style:solid;border-radius:2px;margin:0;padding-left:12px;padding-right:12px;font-family:inherit;font-size:inherit;font-weight:700;text-transform:none;white-space:nowrap;overflow:visible;-webkit-transition:border-color .1s,background-color .1s,color .1s,box-shadow .1s;transition:border-color .1s,background-color .1s,color .1s,box-shadow .1s}.wvui-button::-moz-focus-inner{border:0;padding:0}.wvui-button:focus{outline:0}.wvui-button:not([disabled]){color:#202122;cursor:pointer}.wvui-button:not([disabled]):focus{box-shadow:inset 0 0 0 1px #36c;border-color:#36c;outline:1px solid transparent}.wvui-button:not([disabled]):active{background-color:#c8ccd1;color:#000;box-shadow:none}.wvui-button[disabled]{border-color:transparent}.wvui-button--framed:not([disabled]){background-color:#f8f9fa;border-color:#a2a9b1}.wvui-button--framed:not([disabled]):hover{background-color:#fff;color:#404244}.wvui-button--framed:not([disabled]):active{background-color:#c8ccd1;color:#000;border-color:#72777d}.wvui-button--framed.wvui-button--progressive:not([disabled]){color:#fff;background-color:#36c;border-color:#36c}.wvui-button--framed.wvui-button--progressive:not([disabled]):hover{background-color:#447ff5;border-color:#447ff5}.wvui-button--framed.wvui-button--progressive:not([disabled]):focus{background-color:#36c;border-color:#36c;box-shadow:inset 0 0 0 1px #36c,inset 0 0 0 2px #fff}.wvui-button--framed.wvui-button--progressive:not([disabled]):active{background-color:#2a4b8d;border-color:#2a4b8d;box-shadow:none}.wvui-button--framed.wvui-button--destructive:not([disabled]){color:#fff;background-color:#d33;border-color:#d33}.wvui-button--framed.wvui-button--destructive:not([disabled]):hover{background-color:#ff4242;border-color:#ff4242}.wvui-button--framed.wvui-button--destructive:not([disabled]):focus{background-color:#d33;border-color:#d33;box-shadow:inset 0 0 0 1px #d33,inset 0 0 0 2px #fff}.wvui-button--framed.wvui-button--destructive:not([disabled]):active{background-color:#b32424;border-color:#b32424;box-shadow:none}.wvui-button--framed[disabled]{background-color:#c8ccd1;color:#fff}.wvui-button--quiet{background-color:transparent;color:#202122;border-color:transparent}.wvui-button--quiet:not([disabled]):hover{background-color:rgba(0,24,73,.02745098);color:#000}.wvui-button--quiet:not([disabled]):focus{border-color:#36c;box-shadow:inset 0 0 0 1px #36c,inset 0 0 0 2px #fff}.wvui-button--quiet:not([disabled]):active{background-color:rgba(0,36,73,.08235294);border-color:#72777d;box-shadow:none}.wvui-button--quiet.wvui-button--progressive:not([disabled]){color:#36c}.wvui-button--quiet.wvui-button--progressive:not([disabled]):hover{color:#447ff5;background-color:rgba(52,123,255,.2)}.wvui-button--quiet.wvui-button--progressive:not([disabled]):focus{color:#36c;border-color:#36c;box-shadow:inset 0 0 0 1px #36c,inset 0 0 0 2px #fff}.wvui-button--quiet.wvui-button--progressive:not([disabled]):active{color:#fff;background-color:#2a4b8d;border-color:#2a4b8d;box-shadow:none}.wvui-button--quiet.wvui-button--destructive:not([disabled]){color:#d33}.wvui-button--quiet.wvui-button--destructive:not([disabled]):hover{color:#ff4242;background-color:rgba(209,29,19,.2)}.wvui-button--quiet.wvui-button--destructive:not([disabled]):focus{color:#d33;border-color:#d33;box-shadow:inset 0 0 0 1px #d33,inset 0 0 0 2px #fff}.wvui-button--quiet.wvui-button--destructive:not([disabled]):active{color:#fff;background-color:#b32424;border-color:#b32424;box-shadow:none}.wvui-button--quiet[disabled]{color:#72777d}.wvui-icon{-webkit-box-align:center;align-items:center;display:-webkit-inline-box;display:inline-flex;-webkit-box-pack:center;justify-content:center;vertical-align:middle}[dir=rtl] .wvui-icon--flip-for-rtl svg{-webkit-transform:scaleX(-1);transform:scaleX(-1)}.wvui-input{position:relative;box-sizing:border-box}.wvui-input__end-icon,.wvui-input__start-icon{min-height:20px;height:100%;position:absolute;top:0;opacity:.67}.wvui-input__start-icon{left:1px;width:36px;pointer-events:none}.wvui-input__end-icon{right:1px;width:36px}.wvui-input--clearable .wvui-input__end-icon{width:calc(16px + .85714em);cursor:pointer}.wvui-input--clearable .wvui-input__end-icon svg{width:.85714286em}.wvui-input__input{background-color:#fff;box-shadow:inset 0 0 0 1px transparent;color:#000;margin:0;border:1px solid #a2a9b1;border-radius:2px;padding:5px 8px;font-size:inherit;font-family:inherit;line-height:1.42857143em;display:block;width:100%;box-sizing:border-box;height:2.28571429em}.wvui-input__input:not([disabled]){-webkit-transition:border-color .25s,box-shadow .25s;transition:border-color .25s,box-shadow .25s}.wvui-input__input:not([disabled]):hover{border-color:#72777d}.wvui-input__input:not([disabled]):focus{outline:0;border-color:#36c;box-shadow:inset 0 0 0 1px #36c}.wvui-input__input:not([disabled]):focus~.wvui-input__end-icon,.wvui-input__input:not([disabled]):focus~.wvui-input__start-icon{opacity:1}.wvui-input__input[disabled]{background-color:#eaecf0;-webkit-text-fill-color:#72777d;color:#72777d;text-shadow:0 1px 1px #fff;border-color:#c8ccd1}.wvui-input__input[disabled]~.wvui-input__end-icon,.wvui-input__input[disabled]~.wvui-input__start-icon{pointer-events:none;opacity:.51}.wvui-input__input::-webkit-input-placeholder{color:#72777d;opacity:1}.wvui-input__input:-ms-input-placeholder{color:#72777d;opacity:1}.wvui-input__input::placeholder{color:#72777d;opacity:1}.wvui-input__input::-ms-clear{display:none}.wvui-input__input[type=search]{-webkit-appearance:none;-moz-appearance:textfield}.wvui-input__input[type=search]::-webkit-search-cancel-button,.wvui-input__input[type=search]::-webkit-search-decoration{display:none}.wvui-input--has-start-icon .wvui-input__input{padding-left:36px}.wvui-input--has-end-icon .wvui-input__input{padding-right:36px}.wvui-typeahead-suggestion__title{color:#202122;display:block;margin:0 0 2px;font-size:1.14285714em;font-weight:700}.wvui-typeahead-suggestion__match{font-weight:400}.wvui-typeahead-suggestion{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;padding:8px 12px;text-decoration:none}.wvui-typeahead-suggestion--active{background-color:#eaecf0}.wvui-typeahead-suggestion__thumbnail,.wvui-typeahead-suggestion__thumbnail-placeholder{background-position:50%;background-repeat:no-repeat;background-size:cover;flex-shrink:0;width:2.57142857em;height:2.57142857em;border-radius:2px;box-shadow:0 0 1px 1px #eaecf0;margin-right:12px}.wvui-typeahead-suggestion__thumbnail{display:inline-block}.wvui-typeahead-suggestion__thumbnail-placeholder{background-color:#f8f9fa;display:-webkit-inline-box;display:inline-flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.wvui-typeahead-suggestion__thumbnail-icon{opacity:.67}.wvui-typeahead-suggestion__text{overflow:hidden}.wvui-typeahead-suggestion__text .wvui-typeahead-suggestion__description{color:#72777d;display:block;font-size:1em;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.wvui-typeahead-search{border:1px solid #a2a9b1;border-radius:2px}.wvui-typeahead-search__form{display:-webkit-box;display:flex}.wvui-typeahead-search__wrapper{-webkit-box-flex:1;flex-grow:1;position:relative;margin:-1px}.wvui-typeahead-search__submit{position:relative;margin:-1px -1px -1px 0;border-bottom-left-radius:0;border-top-left-radius:0;opacity:0;-webkit-transition:opacity .1s;transition:opacity .1s}.wvui-typeahead-search__submit:hover{z-index:1}.wvui-typeahead-search__submit:focus{z-index:1;opacity:1}.wvui-typeahead-search__suggestions{background-color:#fff;display:none;position:absolute;top:2.28571429em;right:0;left:0;box-sizing:border-box;border:1px solid #a2a9b1;border-top:0 solid #a2a9b1;border-radius:0 0 2px 2px;margin:0;padding:0;box-shadow:0 2px 2px 0 rgba(0,0,0,.25);list-style:none}.wvui-typeahead-search__suggestions__footer{color:#202122;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;border-top:1px solid #c8ccd1;padding:8px 12px 8px 36px;text-decoration:none;cursor:pointer}.wvui-typeahead-search__suggestions__footer:active,.wvui-typeahead-search__suggestions__footer:visited{color:#202122}.wvui-typeahead-search__suggestions__footer .wvui-icon{width:auto;height:2.57142857em;margin-right:12px;opacity:.67}.wvui-typeahead-search__suggestions__footer--active{background-color:#eaecf0}.wvui-typeahead-search__suggestions__footer__text{font-size:1.14285714em}.wvui-typeahead-search__suggestion{padding-left:36px}.wvui-typeahead-search .wvui-input__input{border-right-color:transparent}.wvui-typeahead-search--has-value .wvui-input__input{border-bottom-left-radius:0}.wvui-typeahead-search--active .wvui-typeahead-search__submit,.wvui-typeahead-search:hover .wvui-typeahead-search__submit{opacity:1}.wvui-typeahead-search--active .wvui-typeahead-search__input,.wvui-typeahead-search:hover .wvui-typeahead-search__input{z-index:1}.wvui-typeahead-search--active .wvui-input__input,.wvui-typeahead-search:hover .wvui-input__input{border-top-right-radius:0;border-bottom-right-radius:0}.wvui-typeahead-search--expanded .wvui-typeahead-search__suggestions{display:block}.wvui-typeahead-search--show-thumbnail .wvui-input__input{padding-left:2.57142857em}.wvui-typeahead-search--show-thumbnail .wvui-input__start-icon{width:2.57142857em}.wvui-typeahead-search--show-thumbnail .wvui-input__input:focus{position:relative;padding-left:calc(24px + 2.57143em);width:calc(100% + 24px);left:-24px}.wvui-typeahead-search--show-thumbnail .wvui-input__input:focus+.wvui-input__start-icon{left:-11px}.wvui-typeahead-search--show-thumbnail .wvui-typeahead-search__suggestions{left:-24px}.wvui-typeahead-search--show-thumbnail .wvui-typeahead-search__suggestion,.wvui-typeahead-search--show-thumbnail .wvui-typeahead-search__suggestions__footer{padding-left:12px;padding-right:12px}.wvui-typeahead-search--show-thumbnail .wvui-typeahead-search__suggestions__footer__text{text-overflow:ellipsis;overflow:hidden}.wvui-typeahead-search--show-thumbnail .wvui-typeahead-search__suggestions-footer-article-icon{width:2.57142857em;flex-shrink:0}\n/*# sourceMappingURL=wvui.css.map */";
function main(config) {
  new require$$0__default["default"]({
    render: function(h) {
      return h(Demo, {props: {config}});
    }
  }).$mount("#sandbox");
  console.log(`Hello from ${mw.message("buildsandbox-title").text()}`);
}
const foo = "foo";
exports.default = main;
exports.foo = foo;
