/*! For license information please see Widget.bee4a06a.chunk.js.LICENSE.txt */
(self.webpackChunksrste=self.webpackChunksrste||[]).push([[7203],{30738:function(t,e,n){"use strict";n.r(e),n.d(e,{WrappedComponent:function(){return E},dispatchedEvents:function(){return _},props:function(){return b},slots:function(){return x},styles:function(){return S}});var r=n(50390),o=n(2914),i=n(80992),u=n.n(i),c=n(7262),a=n(67852),f=n.n(a);function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function l(){l=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function a(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{a({},"")}catch(k){a=function(t,e,n){return t[e]=n}}function f(t,e,n,o){var i=e&&e.prototype instanceof p?e:p,u=Object.create(i.prototype),c=new T(o||[]);return r(u,"_invoke",{value:x(t,n,c)}),u}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(k){return{type:"throw",arg:k}}}t.wrap=f;var h={};function p(){}function v(){}function y(){}var w={};a(w,i,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(L([])));m&&m!==e&&n.call(m,i)&&(w=m);var _=y.prototype=p.prototype=Object.create(w);function b(t){["next","throw","return"].forEach((function(e){a(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function o(r,i,u,c){var a=d(t[r],t,i);if("throw"!==a.type){var f=a.arg,l=f.value;return l&&"object"==s(l)&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){o("next",t,u,c)}),(function(t){o("throw",t,u,c)})):e.resolve(l).then((function(t){f.value=t,u(f)}),(function(t){return o("throw",t,u,c)}))}c(a.arg)}var i;r(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){o(t,n,e,r)}))}return i=i?i.then(r,r):r()}})}function x(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return I()}for(n.method=o,n.arg=i;;){var u=n.delegate;if(u){var c=E(u,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var a=d(t,e,n);if("normal"===a.type){if(r=n.done?"completed":"suspendedYield",a.arg===h)continue;return{value:a.arg,done:n.done}}"throw"===a.type&&(r="completed",n.method="throw",n.arg=a.arg)}}}function E(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var o=d(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function L(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:I}}function I(){return{value:void 0,done:!0}}return v.prototype=y,r(_,"constructor",{value:y,configurable:!0}),r(y,"constructor",{value:v,configurable:!0}),v.displayName=a(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,a(t,c,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},b(S.prototype),a(S.prototype,u,(function(){return this})),t.AsyncIterator=S,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var u=new S(f(e,n,r,o),i);return t.isGeneratorFunction(n)?u:u.next().then((function(t){return t.done?t.value:u.next()}))},b(_),a(_,c,"Generator"),a(_,i,(function(){return this})),a(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=L,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return u.type="throw",u.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],u=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),a=n.call(i,"finallyLoc");if(c&&a){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!a)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var u=i?i.completion:{};return u.type=t,u.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(u)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:L(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t}function d(t,e,n,r,o,i,u){try{var c=t[i](u),a=c.value}catch(f){return void n(f)}c.done?e(a):Promise.resolve(a).then(r,o)}function h(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function u(t){d(i,r,o,u,c,"next",t)}function c(t){d(i,r,o,u,c,"throw",t)}u(void 0)}))}}function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){y(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function y(t,e,n){return(e=function(t){var e=function(t,e){if("object"!==s(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===s(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function w(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,c=[],a=!0,f=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=i.call(n)).done)&&(c.push(r.value),c.length!==e);a=!0);}catch(s){f=!0,o=s}finally{try{if(!a&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(f)throw o}}return c}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return g(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var m=function(t,e){var n=w((0,r.useState)({contents:t.widgetcontents||[],context:t.widgetcontext||{},functions:t.widgetfunctions||{}}),2),o=n[0],i=n[1],a=w((0,r.useState)(!1),2),s=a[0],d=a[1];(0,r.useEffect)((function(){t.widget_url&&f().get(t.widget_url,(function(){var t,e,n=(null===(t=window)||void 0===t||null===(e=t.__SRSWIDGETS__)||void 0===e?void 0:e.widget1())||{},r=o.context||{};r=v(v({},r),n.context),i({contents:n.contents,context:r,functions:n.functions})}))}),[]),(0,r.useEffect)((function(){var e=function(){var e=h(l().mark((function e(n,r){var o,u,c,a;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=(null===(o=r.detail)||void 0===o?void 0:o.widgetid)||"",a=null===(u=r.detail)||void 0===u?void 0:u.payload,c==t.elementid&&i((function(t){return{contents:a,context:t.context,functions:t.functions}}));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),n=function(){var e=h(l().mark((function e(n,r){var o,u,c,a;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=(null===(o=r.detail)||void 0===o?void 0:o.widgetid)||"",a=null===(u=r.detail)||void 0===u?void 0:u.payload,c&&c==t.elementid&&a&&i((function(t){return{contents:t.contents,context:a,functions:t.functions}}));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();p(t.widgetFunctions);var r=(0,c.debounce)(e,50),o=(0,c.debounce)(n,50),a=[];return s&&(window.__SRSINIT__=window.__SRSINIT__||{},window.__SRSINIT__.widgetTokens=window.__SRSINIT__.widgetTokens||{},window.__SRSINIT__.widgetTokens[t.elementid]=window.__SRSINIT__.widgetTokens[t.elementid]||[],window.__SRSINIT__.widgetTokens[t.elementid].map((function(t){return u().unsubscribe(t)})),window.__SRSINIT__.widgetTokens[t.elementid]=[],(a=window.__SRSINIT__.widgetTokens[t.elementid]).push(u().subscribe("WIDGET_CONTENTS_REFRESH",function(){var t=h(l().mark((function t(e,n){return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r(e,n);case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}())),a.push(u().subscribe("WIDGET_CONTEXT_REFRESH",function(){var t=h(l().mark((function t(e,n){return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o(e,n);case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()))),function(){a.map((function(t){return u().unsubscribe(t)}))}}),[s]);var p=function(t){if(t){var e="string"==typeof t?JSON.parse(t):t;window.__SRS__=window.__SRS__||{},window.__SRS__.functions=window.__SRS__.functions||{},Object.keys(e).map((function(t){window.__SRS__.functions=v(v({},window.__SRS__.functions),{},y({},t,window.__SRS__.functions[t]||e[t]))})),d(!0)}else d(!0)};(0,r.useEffect)((function(){i((function(e){return{contents:t.widgetcontents||[],context:e.context||{},functions:e.functions||{}}}))}),[t.widgetcontents]),(0,r.useEffect)((function(){i((function(e){return{contents:e.contents||[],context:t.widgetcontext||{},functions:e.functions||{}}}))}),[t.widgetcontext]),(0,r.useEffect)((function(){i((function(e){return{contents:e.contents||[],context:e.context||{},functions:t.widgetfunctions||{}}})),p(t.widgetfunctions)}),[t.widgetfunctions]),(0,r.useEffect)((function(){if(s){var t=v({},o);i(t)}}),[]);var g=r.createElement("srs-contentrenderer",{ref:function(e){e&&(e.elementid=t.elementid+"_cntrd",e.widgetid=t.elementid,e.overrides=v({},o),e.theme=t.theme,e.designtime=t.designtime,e.styles=v({minHeight:"unset",maxHeight:"unset",overflow:"auto"},t.widgetstyles))},name:t.elementid+"_cntrd"});return r.createElement("div",{ref:e},s?g:r.createElement("div",null,"Loading..."))},_=[],b=[{name:"widgetcontents",defaultValue:[],type:"object"},{name:"widgetcontext",defaultValue:{},type:"object"},{name:"widgetfunctions",defaultValue:{},type:"object"},{name:"widgetstyles",defaultValue:{},type:"object"},{name:"widget_url",defaultValue:"",type:"string"}],S="\n\n",x=[],E=(0,o.Z)(r.forwardRef(m),b,"",["srs-contentrenderer"])},67852:function(t,e,n){var r,o,i;i=function(){var t,e,n=document,r=n.getElementsByTagName("head")[0],o=!1,i="push",u="readyState",c="onreadystatechange",a={},f={},s={},l={};function d(t,e){for(var n=0,r=t.length;n<r;++n)if(!e(t[n]))return o;return 1}function h(t,e){d(t,(function(t){return e(t),1}))}function p(e,n,r){e=e[i]?e:[e];var o=n&&n.call,u=o?n:r,c=o?e.join(""):n,y=e.length;function w(t){return t.call?t():a[t]}function g(){if(!--y)for(var t in a[c]=1,u&&u(),s)d(t.split("|"),w)&&!h(s[t],w)&&(s[t]=[])}return setTimeout((function(){h(e,(function e(n,r){return null===n?g():(r||/^https?:\/\//.test(n)||!t||(n=-1===n.indexOf(".js")?t+n+".js":t+n),l[n]?(c&&(f[c]=1),2==l[n]?g():setTimeout((function(){e(n,!0)}),0)):(l[n]=1,c&&(f[c]=1),void v(n,g)))}))}),0),p}function v(t,o){var i,a=n.createElement("script");a.onload=a.onerror=a[c]=function(){a[u]&&!/^c|loade/.test(a[u])||i||(a.onload=a[c]=null,i=1,l[t]=2,o())},a.async=1,a.src=e?t+(-1===t.indexOf("?")?"?":"&")+e:t,r.insertBefore(a,r.lastChild)}return p.get=v,p.order=function(t,e,n){!function r(o){o=t.shift(),t.length?p(o,r):p(o,e,n)}()},p.path=function(e){t=e},p.urlArgs=function(t){e=t},p.ready=function(t,e,n){t=t[i]?t:[t];var r,o=[];return!h(t,(function(t){a[t]||o[i](t)}))&&d(t,(function(t){return a[t]}))?e():(r=t.join("|"),s[r]=s[r]||[],s[r][i](e),n&&n(o)),p},p.done=function(t){p([null],t)},p},t.exports?t.exports=i():void 0===(o="function"===typeof(r=i)?r.call(e,n,e,t):r)||(t.exports=o)}}]);
//# sourceMappingURL=Widget.bee4a06a.chunk.js.map