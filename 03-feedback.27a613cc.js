!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequire4c75;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequire4c75=o),o.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}}));var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e,t){return u.default(e)||f.default(e,t)||l.default(e,t)||a.default()};var u=c(o("8slrw")),f=c(o("7AJDX")),a=c(o("ifqQW")),l=c(o("auk6i"));function c(e){return e&&e.__esModule?e:{default:e}}var s,d={};Object.defineProperty(d,"__esModule",{value:!0}),d.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var p="Expected a function",v=/^\s+|\s+$/g,m=/^[-+]0x[0-9a-f]+$/i,y=/^0b[01]+$/i,b=/^0o[0-7]+$/i,g=parseInt,_="object"==typeof t&&t&&t.Object===Object&&t,j="object"==typeof self&&self&&self.Object===Object&&self,x=_||j||Function("return this")(),O=Object.prototype.toString,h=Math.max,w=Math.min,M=function(){return x.Date.now()};function S(e,t,r){var n,o,i,u,f,a,l=0,c=!1,s=!1,d=!0;if("function"!=typeof e)throw new TypeError(p);function v(t){var r=n,i=o;return n=o=void 0,l=t,u=e.apply(i,r)}function m(e){return l=e,f=setTimeout(b,t),c?v(e):u}function y(e){var r=e-a;return void 0===a||r>=t||r<0||s&&e-l>=i}function b(){var e=M();if(y(e))return g(e);f=setTimeout(b,function(e){var r=t-(e-a);return s?w(r,i-(e-l)):r}(e))}function g(e){return f=void 0,d&&n?v(e):(n=o=void 0,u)}function _(){var e=M(),r=y(e);if(n=arguments,o=this,a=e,r){if(void 0===f)return m(a);if(s)return f=setTimeout(b,t),v(a)}return void 0===f&&(f=setTimeout(b,t)),u}return t=A(t)||0,T(r)&&(c=!!r.leading,i=(s="maxWait"in r)?h(A(r.maxWait)||0,t):i,d="trailing"in r?!!r.trailing:d),_.cancel=function(){void 0!==f&&clearTimeout(f),l=0,n=a=o=f=void 0},_.flush=function(){return void 0===f?u:g(M())},_}function T(t){var r=void 0===t?"undefined":e(d)(t);return!!t&&("object"==r||"function"==r)}function A(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(d)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==O.call(t)}(t))return NaN;if(T(t)){var r="function"==typeof t.valueOf?t.valueOf():t;t=T(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(v,"");var n=y.test(t);return n||b.test(t)?g(t.slice(2),n?2:8):m.test(t)?NaN:+t}s=function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError(p);return T(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),S(e,t,{leading:n,maxWait:t,trailing:o})};var E={form:document.querySelector("form")},N="feedback-form-state";E.form.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem(N)})),E.form.addEventListener("input",e(s)((function(e){}),500)),function(){var t=localStorage.getItem(N);t&&(t=JSON.parse(t));Object.entries(t).forEach((function(r){var n=e(i)(r,2),o=n[0],u=n[1];E.form.elements[o].value=u,console.log(t.email),console.log(t.message),console.log(E.form.email.value),console.log(E.form.message.value),console.log(E.form)}))}()}();
//# sourceMappingURL=03-feedback.27a613cc.js.map
