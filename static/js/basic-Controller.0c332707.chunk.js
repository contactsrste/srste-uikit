/*! For license information please see basic-Controller.0c332707.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunksrste=self.webpackChunksrste||[]).push([[3946],{13676:function(t,e,r){r.d(e,{N:function(){return n}});var n=function(){var t=r(39152),e=t.Configuration;return{openai:new(0,t.OpenAIApi)(new e({apiKey:"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"}))}}},52521:function(t,e,r){r.r(e),r.d(e,{WrappedComponent:function(){return j},dispatchedEvents:function(){return E},props:function(){return O},slots:function(){return x},styles:function(){return S}});var n=r(50390),o=r(2914),i=r(80992),a=r.n(i),c=r(13676),u=r(7262),f=r(27472),l=r(48421);function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function h(){h=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(N){u=function(t,e,r){return t[e]=r}}function f(t,e,r,o){var i=e&&e.prototype instanceof d?e:d,a=Object.create(i.prototype),c=new L(o||[]);return n(a,"_invoke",{value:S(t,r,c)}),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(N){return{type:"throw",arg:N}}}t.wrap=f;var p={};function d(){}function v(){}function y(){}var m={};u(m,i,(function(){return this}));var g=Object.getPrototypeOf,w=g&&g(g(T([])));w&&w!==e&&r.call(w,i)&&(m=w);var b=y.prototype=d.prototype=Object.create(m);function E(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function o(n,i,a,c){var u=l(t[n],t,i);if("throw"!==u.type){var f=u.arg,h=f.value;return h&&"object"==s(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(h).then((function(t){f.value=t,a(f)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function S(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return P()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=O(a,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function O(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function T(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:P}}function P(){return{value:void 0,done:!0}}return v.prototype=y,n(b,"constructor",{value:y,configurable:!0}),n(y,"constructor",{value:v,configurable:!0}),v.displayName=u(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},E(_.prototype),u(_.prototype,a,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new _(f(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(b),u(b,c,"Generator"),u(b,i,(function(){return this})),u(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=T,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:T(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){v(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function v(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==s(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===s(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function y(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(f){return void r(f)}c.done?e(u):Promise.resolve(u).then(n,o)}function m(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){y(i,n,o,a,c,"next",t)}function c(t){y(i,n,o,a,c,"throw",t)}a(void 0)}))}}function g(t){return function(t){if(Array.isArray(t))return b(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||w(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(t,e){if(t){if("string"===typeof t)return b(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?b(t,e):void 0}}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var E=[],_=function(t,e){var r=function t(e,r){var n,o=function(t,e){var r="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=w(t))||e&&t&&"number"===typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}(r);try{for(o.s();!(n=o.n()).done;){var i=n.value;if(i.elementId===e)return i;if(i.children){var a=t(e,i.children);if(a)return a}}}catch(c){o.e(c)}finally{o.f()}return null},o=function(t,e){for(var r=g(e);r.length>0;){var n=r.pop();if(n.elementId===t)return null;if(n.children)for(var o=0;o<n.children.length;o++){var i=n.children[o];if(i.elementId===t)return n;i.children&&r.push(i)}}return null},i=function(e){return function(r,n){var i=n||e||[],a=o(r,i);if(a&&(a.children=a.children.filter((function(t){return t.elementId!=r}))),n)return i;t.dispatchEvent("PAGE_CONTENTS_REFRESH",{payload:i})}},s=function(t){return function(e){var n=t?g(t):[];return r(e,n)}},p=function t(e,r,n){n.forEach((function(n){n.elementId===e?n=r:n.children&&t(e,r,n.children)}))},v=function(e){return function(r,n,o){var i=o||e,a=i?g(i):[];if(p(r,n,a),o)return a;t.dispatchEvent("PAGE_CONTENTS_REFRESH",{payload:a})}},y=function(e){t.dispatchEvent("PAGE_CONTENTS_REFRESH",{payload:e})},b=function(){var e=m(h().mark((function e(n,a,p,m){var g,w,b,E,_;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!p.type){e.next=22;break}e.t0=p.type,e.next="script"===e.t0?4:"dispatch"===e.t0?20:"navigate"===e.t0?21:22;break;case 4:if(g=!0,w={eventPayload:(null===a||void 0===a?void 0:a.detail)||{},context:t.context||{},clan:t.clan||[],dispatchEvent:t.dispatchEvent,helper:d(d({getElement:s(t.clan),setElement:v(t.clan),removeElement:i(t.clan),findElement:r,findParentElement:o,updateContents:y,compress:f.compressToBase64,decompress:f.decompressFromBase64,clone:l.Y,debounce:u.debounce},m),(0,c.N)())},!p.condition){e.next=13;break}return g=!1,b=new Function("api","return (".concat(p.condition,")();")),e.next=11,b(w);case 11:e.sent&&(g=!0);case 13:if(!g){e.next=19;break}return E=new Function("api","return (".concat(p.script,")();")),e.next=17,E(w);case 17:(_=e.sent)&&(_.context&&(t.widgetid?t.dispatchEvent("WIDGET_CONTEXT_REFRESH",{payload:_.context,widgetid:t.widgetid}):t.dispatchEvent("PAGE_CONTEXT_REFRESH",{payload:_.context})),_.clan&&(t.widgetid?t.dispatchEvent("WIDGET_CONTENTS_REFRESH",{payload:_.clan,widgetid:t.widgetid}):t.dispatchEvent("PAGE_CONTENTS_REFRESH",{payload:_.clan})));case 19:case 20:case 21:return e.abrupt("break",22);case 22:case"end":return e.stop()}}),e)})));return function(t,r,n,o){return e.apply(this,arguments)}}();return(0,n.useEffect)((function(){var e=[],r={};if(t.widgetid){var n,o="$widget_"+t.widgetid+"_";null!==(n=window.__SRS__)&&void 0!==n&&n.functions&&Object.keys(window.__SRS__.functions)&&Object.keys(window.__SRS__.functions).map((function(t){if(t.startsWith(o)){var e=t.split(o)[1];r[e]=window.__SRS__.functions[t]}}))}else{var i;r=(null===(i=window.__SRS__)||void 0===i?void 0:i.functions)||{}}var c={};return t.handlers&&t.handlers.map((function(n){var o=t.widgetid?t.widgetid+"_"+n.name:n.name;c[o]||(c[o]=(0,u.debounce)((function(t,e,r,n){b(t,e,r,n)}),50));var i=a().subscribe(n.eventName,function(){var t=m(h().mark((function t(e,i){return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c[o](e,i,n,r);case 1:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}());e.push(i)})),function(){e.map((function(t){return a().unsubscribe(t)}))}}),[t]),n.createElement("div",null)},S="\n",O=[{name:"handlers",defaultValue:[],type:"object"}],x=[],j=(0,o.Z)(n.forwardRef(_),O)}}]);
//# sourceMappingURL=basic-Controller.0c332707.chunk.js.map