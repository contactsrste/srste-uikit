"use strict";(self.webpackChunksrste=self.webpackChunksrste||[]).push([[5047],{12859:function(e,t,n){n.r(t),n.d(t,{WrappedComponent:function(){return I},dispatchedEvents:function(){return j},props:function(){return _},slots:function(){return E},styles:function(){return O}});var r=n(50390),o=n(40109),i=n(2914),a=n(48421);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||v(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=v(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==c(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===c(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,c=[],u=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(c.push(r.value),c.length!==t);u=!0);}catch(s){l=!0,o=s}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(e,t)||v(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){if(e){if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var y=function(e,t){var n,i,a,c,u,l=p((0,r.useState)((null===(n=e.overrides)||void 0===n?void 0:n.contents)||e.clan||[]),2),s=l[0],d=l[1],v=p((0,r.useState)((null===(i=e.overrides)||void 0===i?void 0:i.context)||e.context||{}),2),m=v[0],y=v[1],b=p((0,r.useState)((null===(a=e.overrides)||void 0===a?void 0:a.functions)||e.functions||{}),2),g=b[0],w=b[1],j=p((0,r.useState)((null===(c=e.overrides)||void 0===c?void 0:c.designtime)||!1),2),O=j[0],_=j[1],E=p((0,r.useState)(e.theme||"g90"),2),I=(E[0],E[1]),x=p((0,r.useState)(!1),2),A=x[0],P=x[1],k=p((0,r.useState)(!1),2),R=k[0],D=k[1],C=p((0,r.useState)((0,o.e)((null===(u=e.overrides)||void 0===u?void 0:u.contents)||e.clan||[])||[]),2),N=C[0],T=C[1],H=p((0,r.useState)({}),2),W=(H[0],H[1]),J=(0,r.useRef)(null),M=p((0,r.useState)(null),2),z=M[0],F=M[1],L=function(e){e&&Object.keys(e).length>0&&(window.__SRS__=window.__SRS__||{},window.__SRS__.functions=window.__SRS__.functions||{},Object.keys(e).map((function(t){var n=e[t];n&&(window.__SRS__.functions[t]="string"==typeof n?new Function("return "+n)():n)})));w((function(t){return e}))};(0,r.useEffect)((function(){L(g)}),[]),(0,r.useEffect)((function(){var t,n,r;d((function(t){var n,r=(null===(n=e.overrides)||void 0===n?void 0:n.contents)||e.clan;return F(t),r})),y((function(t){var n;return(null===(n=e.overrides)||void 0===n?void 0:n.context)||e.context})),L((null===(t=e.overrides)||void 0===t?void 0:t.functions)||e.functions||{}),_(null===(n=e.overrides)||void 0===n?void 0:n.designtime),I((function(t){return e.theme})),document.documentElement.setAttribute("data-carbon-theme",e.theme),J.current&&!A&&(P(!0),J.current.addEventListener("RICHTEXT#home",(function(e){console.log(e)})),J.current.addEventListener("HOME#clicked",(function(e){console.log(e)})),J.current.addEventListener("RICHTEXT#about",(function(e){console.log(e)})));var i=(0,o.e)((null===(r=e.overrides)||void 0===r?void 0:r.contents)||e.clan);R&&!h(i,N)||(T((function(e){return i})),D((function(e){return!1})),(0,o.z)(i,e.theme).then((function(e){W((function(t){return e})),D((function(e){return!0}))})))}),[e.overrides,e.clan,e.context,e.theme]);var V=r.createElement("div",null," loading... ");if(s&&s.length>0)if(R){var X,Y={backgroundColor:"var(--cds-background)",minHeight:"100vh",maxHeight:"100vh",overflow:"scroll"},B=e.styles||{};Y=f(f({},Y),B);var U="./carbon-components.css";"sandbox"==(null===(X=window.__SRS__)||void 0===X?void 0:X.mode)&&(U="https://know.srste.in/carbon-components.css"),V=r.createElement("div",{ref:J,"data-carbon-theme":e.theme,style:Y},r.createElement("style",{className:"basetheme"},'@import "'.concat(U,'";'),"  "),S(s,m,s,e.theme,z,O))}else V=r.createElement("div",null," loading... ");else V=r.createElement("div",{style:{color:"var(--cds-text-secondary)",display:"flex",flexDirection:"column",alignItems:"center",fontSize:"x-large"}}," No contents to show!");return V},h=function(e,t){var n=!1;return e.forEach((function(e){-1==t.indexOf(e)&&(n=!0)})),n},b=function(e,t,n){var r={};(t&&t.length>0&&t.forEach((function(t){e.props[t]&&(r[t]=e.props[t])})),e.overrides)&&Object.keys(e.overrides).map((function(t){var o=e.overrides[t];if(o.startsWith("[[")&&o.endsWith("]]")){var i=o.slice(2,-2),a=new Function("api","with(api) { return ".concat(i,"; }"));r[t]=a(n)}}));return r},g=function e(t,n){var r,o=l(n);try{for(o.s();!(r=o.n()).done;){var i=r.value;if(i.elementId===t)return i;if(i.children){var a=e(t,i.children);if(a)return a}}}catch(c){o.e(c)}finally{o.f()}return null},w=function(e,t){for(var n=u(t);n.length>0;){var r=n.pop();if(r.elementId===e)return null;if(r.children)for(var o=0;o<r.children.length;o++){var i=r.children[o];if(i.elementId===e)return r;i.children&&n.push(i)}}return null},S=function e(t,n,o,i,u,s){var d=[];return t&&t.forEach((function(t){var p,v,m,y,h,S=(y=u,h=t.elementId||t.name,y?function e(t,n){var r,o=l(t);try{for(o.s();!(r=o.n()).done;){var i=r.value;if(i.elementId===n||i.name===n)return i;if(i.children){var a=e(i.children,n);if(a)return a}}}catch(c){o.e(c)}finally{o.f()}return null}(y,h):null);(JSON.stringify(t)!==JSON.stringify(S)||((null===t||void 0===t||null===(p=t.props)||void 0===p?void 0:p.designtime)||"")+""=="true"&&window.__SRS__.activeElementId&&window.__SRS__.activeElementId==t.props.elementid)&&(t.ts=Date.now()+"");var j=t.tag,O={};if(t.props){var _,E=Object.keys(t.props);(E=E.filter((function(e){return"slotname"!=e}))).map((function(e){"string"!==typeof t.props[e]?O[e]=JSON.stringify(t.props[e]):O[e]=t.props[e]})),null!==t&&void 0!==t&&null!==(_=t.props)&&void 0!==_&&_.slotname&&(O.slot=t.props.slotname)}var I=(null===(v=window)||void 0===v||null===(m=v.__SRS__)||void 0===m?void 0:m.functions)||{},x={context:n,clan:o,helper:f(f({},I),{},{findParentElement:w,findElement:g})};t.overrides&&Object.keys(t.overrides).map((function(e){var n=t.overrides[e];if(n.startsWith("[[")&&n.endsWith("]]")){var r=n.slice(2,-2),o=new Function("api","with(api) { return ".concat(r,"; }"));O[e]=o(x)}}));var A=t.children;if("mui-grid"==j&&O.hasOwnProperty("container")&&A&&A.length>0){var P=[],k=[];A.forEach((function(e,t){if(e&&e.children){var n=b(e,["xs","sm","md","lg","xl","spacing","direction","justify","alignItems","alignContent","wrap","component","xsAuto","smAuto","mdAuto","lgAuto","xlAuto","zeroMinWidth"],x),r="grid-item-"+(e.props.elementId||e.props.name||t);k.push({slotname:r,gridItemProps:n}),e.children.map((function(e,t){e.props=e.props||{},e.props.slotname=r,P.push(e)}))}})),A=P,O.griditemdata=k}else if("mui-tabs"==j&&A&&A.length>0){var R=[],D=[];A.forEach((function(e,t){if(e&&e.children){var n=b(e,["label","value","disabled","icon","wrapped"],x),r="tab-item-"+(e.props.elementId||e.props.name||t);D.push(f({slotname:r},n)),e.children.map((function(e,t){e.props=e.props||{},e.props.slotname=r,R.push(e)}))}})),A=R,O.tabitems=D}else if("srs-repeater"==j&&A&&A.length>0){var C=[];try{C=JSON.parse(O.items)}catch(H){}if(C&&C.length>0){var N=(0,a.Y)(A);A=[],C.forEach((function(e,r){A.push({elementId:t.elementId+"-"+r,name:t.name+"-"+r,tag:"srs-contentrenderer",props:{overrides:{contents:N,context:f(f({},n),e),designtime:s},styles:{minHeight:"100%",maxHeight:"100%",overflow:"auto"}}})}))}t.children=A}if(!O.hasOwnProperty("visible")||O.visible+""=="true"){var T=e(A,n,o,i,u,s);d.push(r.createElement(j,{key:t.elementId||t.name,elementid:t.elementId||t.id||t.name,ts:t.ts,ref:function(e){e&&(Object.keys(O).forEach((function(t){try{"object"==c(O[t])?e[t]=JSON.stringify(O[t]):e[t]=O[t]}catch(H){}})),e.context=n,e.clan=o,e.theme=i,e.designtime=s)}},T))}})),d},j=[],O="\n    \n",_=[{name:"overrides",type:"object",defaultValue:{}},{name:"styles",type:"object",defaultValue:{}}],E=[];t.default=y;var I=(0,i.Z)(r.forwardRef(y),_)},48421:function(e,t,n){function r(e){if("object"!==typeof e)return e;var t,n,o=Object.prototype.toString.call(e);if("[object Object]"===o){if(e.constructor!==Object&&"function"===typeof e.constructor)for(t in n=new e.constructor,e)e.hasOwnProperty(t)&&n[t]!==e[t]&&(n[t]=r(e[t]));else for(t in n={},e)"__proto__"===t?Object.defineProperty(n,t,{value:r(e[t]),configurable:!0,enumerable:!0,writable:!0}):n[t]=r(e[t]);return n}if("[object Array]"===o){for(t=e.length,n=Array(t);t--;)n[t]=r(e[t]);return n}return"[object Set]"===o?(n=new Set,e.forEach((function(e){n.add(r(e))})),n):"[object Map]"===o?(n=new Map,e.forEach((function(e,t){n.set(r(t),r(e))})),n):"[object Date]"===o?new Date(+e):"[object RegExp]"===o?((n=new RegExp(e.source,e.flags)).lastIndex=e.lastIndex,n):"[object DataView]"===o?new e.constructor(r(e.buffer)):"[object ArrayBuffer]"===o?e.slice(0):"Array]"===o.slice(-6)?new e.constructor(e):e}n.d(t,{Y:function(){return r}})}}]);
//# sourceMappingURL=ContentRenderer.73847ec2.chunk.js.map