/*! For license information please see basic-Controller.a24decb9.chunk.js.LICENSE.txt */
(self.webpackChunksrste=self.webpackChunksrste||[]).push([[3946],{13676:function(t,r,e){"use strict";e.d(r,{N:function(){return n}});var n=function(){var t=e(39152),r=t.Configuration,n=new(0,t.OpenAIApi)(new r({apiKey:"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"})),o=e(27472);return{openai:n,compress:o.compress,decompress:o.decompress}}},52521:function(t,r,e){"use strict";e.r(r),e.d(r,{WrappedComponent:function(){return j},dispatchedEvents:function(){return g},props:function(){return O},slots:function(){return x},styles:function(){return E}});var n=e(50390),o=e(2914),i=e(80992),a=e.n(i),c=e(13676);function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function s(){s=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,n=Object.defineProperty||function(t,r,e){t[r]=e.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(L){l=function(t,r,e){return t[r]=e}}function f(t,r,e,o){var i=r&&r.prototype instanceof d?r:d,a=Object.create(i.prototype),c=new _(o||[]);return n(a,"_invoke",{value:x(t,e,c)}),a}function p(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(L){return{type:"throw",arg:L}}}t.wrap=f;var h={};function d(){}function v(){}function y(){}var m={};l(m,i,(function(){return this}));var b=Object.getPrototypeOf,g=b&&b(b(P([])));g&&g!==r&&e.call(g,i)&&(m=g);var w=y.prototype=d.prototype=Object.create(m);function E(t){["next","throw","return"].forEach((function(r){l(t,r,(function(t){return this._invoke(r,t)}))}))}function O(t,r){function o(n,i,a,c){var s=p(t[n],t,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==u(f)&&e.call(f,"__await")?r.resolve(f.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):r.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return o("throw",t,a,c)}))}c(s.arg)}var i;n(this,"_invoke",{value:function(t,e){function n(){return new r((function(r,n){o(t,e,r,n)}))}return i=i?i.then(n,n):n()}})}function x(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return k()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=j(a,e);if(c){if(c===h)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var u=p(t,r,e);if("normal"===u.type){if(n=e.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n="completed",e.method="throw",e.arg=u.arg)}}}function j(t,r){var e=r.method,n=t.iterator[e];if(void 0===n)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=void 0,j(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),h;var o=p(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,h;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,h):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function A(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function S(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function P(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return v.prototype=y,n(w,"constructor",{value:y,configurable:!0}),n(y,"constructor",{value:v,configurable:!0}),v.displayName=l(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===v||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},E(O.prototype),l(O.prototype,a,(function(){return this})),t.AsyncIterator=O,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new O(f(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(w),l(w,c,"Generator"),l(w,i,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=P,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),u=e.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),h},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),S(e),h}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;S(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:P(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),h}},t}function l(t,r,e){return l=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}()?Reflect.construct.bind():function(t,r,e){var n=[null];n.push.apply(n,r);var o=new(Function.bind.apply(t,n));return e&&f(o,e.prototype),o},l.apply(null,arguments)}function f(t,r){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,r){return t.__proto__=r,t},f(t,r)}function p(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?p(Object(e),!0).forEach((function(r){d(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):p(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function d(t,r,e){return(r=function(t){var r=function(t,r){if("object"!==u(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,r||"default");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"===u(r)?r:String(r)}(r))in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function v(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void e(s)}c.done?r(u):Promise.resolve(u).then(n,o)}function y(t){return function(t){if(Array.isArray(t))return b(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||m(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,r){if(t){if("string"===typeof t)return b(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?b(t,r):void 0}}function b(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}var g=[],w=function(t,r){var e=function t(r,e){var n,o=function(t,r){var e="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=m(t))||r&&t&&"number"===typeof t.length){e&&(t=e);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==e.return||e.return()}finally{if(c)throw i}}}}(e);try{for(o.s();!(n=o.n()).done;){var i=n.value;if(i.elementId===r)return i;if(i.children){var a=t(r,i.children);if(a)return a}}}catch(c){o.e(c)}finally{o.f()}return null},o=function(r){return function(e,n){var o=n||r||[],i=function(t,r){for(var e=y(r);e.length>0;){var n=e.pop();if(n.elementId===t)return null;if(n.children)for(var o=0;o<n.children.length;o++){var i=n.children[o];if(i.elementId===t)return n;i.children&&e.push(i)}}return null}(e,o);if(i&&(i.children=i.children.filter((function(t){return t.elementId!=e}))),n)return o;t.dispatchEvent("PAGE_CONTENTS_REFRESH",{payload:o})}},i=function(t){return function(r){var n=t?y(t):[];return e(r,n)}},u=function t(r,e,n){n.forEach((function(n){n.elementId===r?n=e:n.children&&t(r,e,n.children)}))},f=function(r){return function(e,n,o){var i=o||r,a=i?y(i):[];if(u(e,n,a),o)return a;t.dispatchEvent("PAGE_CONTENTS_REFRESH",{payload:a})}},p=function(r){t.dispatchEvent("PAGE_CONTENTS_REFRESH",{payload:r})};return(0,n.useEffect)((function(){var r=[];return t.handlers&&t.handlers.map((function(e){var n=a().subscribe(e.eventName,function(){var r,n=(r=s().mark((function r(n,a){var u,d,v,m,b;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!e.type){r.next=22;break}r.t0=e.type,r.next="script"===r.t0?4:"dispatch"===r.t0?20:"navigate"===r.t0?21:22;break;case 4:if(u=!0,d={eventPayload:(null===a||void 0===a?void 0:a.detail)||{},context:t.context||{},clan:t.clan||[],dispatchEvent:t.dispatchEvent,api:h({getElement:i(t.clan),setElement:f(t.clan),removeElement:o(t.clan),updateContents:p},(0,c.N)())},!e.condition){r.next=13;break}return u=!1,v=l(Function,y(Object.keys(d)).concat(["return (".concat(e.condition,")();")])),r.next=11,v.apply(void 0,y(Object.values(d)));case 11:r.sent&&(u=!0);case 13:if(!u){r.next=19;break}return m=l(Function,y(Object.keys(d)).concat(["return (".concat(e.script,")();")])),r.next=17,m.apply(void 0,y(Object.values(d)));case 17:(b=r.sent)&&(b.context&&t.dispatchEvent("PAGE_CONTEXT_REFRESH",{payload:b.context}),b.clan&&t.dispatchEvent("PAGE_CONTENTS_REFRESH",{payload:b.clan}));case 19:case 20:case 21:return r.abrupt("break",22);case 22:case"end":return r.stop()}}),r)})),function(){var t=this,e=arguments;return new Promise((function(n,o){var i=r.apply(t,e);function a(t){v(i,n,o,a,c,"next",t)}function c(t){v(i,n,o,a,c,"throw",t)}a(void 0)}))});return function(t,r){return n.apply(this,arguments)}}());r.push(n)})),function(){r.map((function(t){return a().unsubscribe(t)}))}}),[t]),n.createElement("div",null)},E="\n",O=[{name:"handlers",defaultValue:[],type:"object"}],x=[],j=(0,o.Z)(n.forwardRef(w),O)},27472:function(t,r,e){var n,o=function(){var t=String.fromCharCode,r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",n={};function o(t,r){if(!n[t]){n[t]={};for(var e=0;e<t.length;e++)n[t][t.charAt(e)]=e}return n[t][r]}var i={compressToBase64:function(t){if(null==t)return"";var e=i._compress(t,6,(function(t){return r.charAt(t)}));switch(e.length%4){default:case 0:return e;case 1:return e+"===";case 2:return e+"==";case 3:return e+"="}},decompressFromBase64:function(t){return null==t?"":""==t?null:i._decompress(t.length,32,(function(e){return o(r,t.charAt(e))}))},compressToUTF16:function(r){return null==r?"":i._compress(r,15,(function(r){return t(r+32)}))+" "},decompressFromUTF16:function(t){return null==t?"":""==t?null:i._decompress(t.length,16384,(function(r){return t.charCodeAt(r)-32}))},compressToUint8Array:function(t){for(var r=i.compress(t),e=new Uint8Array(2*r.length),n=0,o=r.length;n<o;n++){var a=r.charCodeAt(n);e[2*n]=a>>>8,e[2*n+1]=a%256}return e},decompressFromUint8Array:function(r){if(null===r||void 0===r)return i.decompress(r);for(var e=new Array(r.length/2),n=0,o=e.length;n<o;n++)e[n]=256*r[2*n]+r[2*n+1];var a=[];return e.forEach((function(r){a.push(t(r))})),i.decompress(a.join(""))},compressToEncodedURIComponent:function(t){return null==t?"":i._compress(t,6,(function(t){return e.charAt(t)}))},decompressFromEncodedURIComponent:function(t){return null==t?"":""==t?null:(t=t.replace(/ /g,"+"),i._decompress(t.length,32,(function(r){return o(e,t.charAt(r))})))},compress:function(r){return i._compress(r,16,(function(r){return t(r)}))},_compress:function(t,r,e){if(null==t)return"";var n,o,i,a={},c={},u="",s="",l="",f=2,p=3,h=2,d=[],v=0,y=0;for(i=0;i<t.length;i+=1)if(u=t.charAt(i),Object.prototype.hasOwnProperty.call(a,u)||(a[u]=p++,c[u]=!0),s=l+u,Object.prototype.hasOwnProperty.call(a,s))l=s;else{if(Object.prototype.hasOwnProperty.call(c,l)){if(l.charCodeAt(0)<256){for(n=0;n<h;n++)v<<=1,y==r-1?(y=0,d.push(e(v)),v=0):y++;for(o=l.charCodeAt(0),n=0;n<8;n++)v=v<<1|1&o,y==r-1?(y=0,d.push(e(v)),v=0):y++,o>>=1}else{for(o=1,n=0;n<h;n++)v=v<<1|o,y==r-1?(y=0,d.push(e(v)),v=0):y++,o=0;for(o=l.charCodeAt(0),n=0;n<16;n++)v=v<<1|1&o,y==r-1?(y=0,d.push(e(v)),v=0):y++,o>>=1}0==--f&&(f=Math.pow(2,h),h++),delete c[l]}else for(o=a[l],n=0;n<h;n++)v=v<<1|1&o,y==r-1?(y=0,d.push(e(v)),v=0):y++,o>>=1;0==--f&&(f=Math.pow(2,h),h++),a[s]=p++,l=String(u)}if(""!==l){if(Object.prototype.hasOwnProperty.call(c,l)){if(l.charCodeAt(0)<256){for(n=0;n<h;n++)v<<=1,y==r-1?(y=0,d.push(e(v)),v=0):y++;for(o=l.charCodeAt(0),n=0;n<8;n++)v=v<<1|1&o,y==r-1?(y=0,d.push(e(v)),v=0):y++,o>>=1}else{for(o=1,n=0;n<h;n++)v=v<<1|o,y==r-1?(y=0,d.push(e(v)),v=0):y++,o=0;for(o=l.charCodeAt(0),n=0;n<16;n++)v=v<<1|1&o,y==r-1?(y=0,d.push(e(v)),v=0):y++,o>>=1}0==--f&&(f=Math.pow(2,h),h++),delete c[l]}else for(o=a[l],n=0;n<h;n++)v=v<<1|1&o,y==r-1?(y=0,d.push(e(v)),v=0):y++,o>>=1;0==--f&&(f=Math.pow(2,h),h++)}for(o=2,n=0;n<h;n++)v=v<<1|1&o,y==r-1?(y=0,d.push(e(v)),v=0):y++,o>>=1;for(;;){if(v<<=1,y==r-1){d.push(e(v));break}y++}return d.join("")},decompress:function(t){return null==t?"":""==t?null:i._decompress(t.length,32768,(function(r){return t.charCodeAt(r)}))},_decompress:function(r,e,n){var o,i,a,c,u,s,l,f=[],p=4,h=4,d=3,v="",y=[],m={val:n(0),position:e,index:1};for(o=0;o<3;o+=1)f[o]=o;for(a=0,u=Math.pow(2,2),s=1;s!=u;)c=m.val&m.position,m.position>>=1,0==m.position&&(m.position=e,m.val=n(m.index++)),a|=(c>0?1:0)*s,s<<=1;switch(a){case 0:for(a=0,u=Math.pow(2,8),s=1;s!=u;)c=m.val&m.position,m.position>>=1,0==m.position&&(m.position=e,m.val=n(m.index++)),a|=(c>0?1:0)*s,s<<=1;l=t(a);break;case 1:for(a=0,u=Math.pow(2,16),s=1;s!=u;)c=m.val&m.position,m.position>>=1,0==m.position&&(m.position=e,m.val=n(m.index++)),a|=(c>0?1:0)*s,s<<=1;l=t(a);break;case 2:return""}for(f[3]=l,i=l,y.push(l);;){if(m.index>r)return"";for(a=0,u=Math.pow(2,d),s=1;s!=u;)c=m.val&m.position,m.position>>=1,0==m.position&&(m.position=e,m.val=n(m.index++)),a|=(c>0?1:0)*s,s<<=1;switch(l=a){case 0:for(a=0,u=Math.pow(2,8),s=1;s!=u;)c=m.val&m.position,m.position>>=1,0==m.position&&(m.position=e,m.val=n(m.index++)),a|=(c>0?1:0)*s,s<<=1;f[h++]=t(a),l=h-1,p--;break;case 1:for(a=0,u=Math.pow(2,16),s=1;s!=u;)c=m.val&m.position,m.position>>=1,0==m.position&&(m.position=e,m.val=n(m.index++)),a|=(c>0?1:0)*s,s<<=1;f[h++]=t(a),l=h-1,p--;break;case 2:return y.join("")}if(0==p&&(p=Math.pow(2,d),d++),f[l])v=f[l];else{if(l!==h)return null;v=i+i.charAt(0)}y.push(v),f[h++]=i+v.charAt(0),i=v,0==--p&&(p=Math.pow(2,d),d++)}}};return i}();void 0===(n=function(){return o}.call(r,e,r,t))||(t.exports=n)}}]);
//# sourceMappingURL=basic-Controller.a24decb9.chunk.js.map