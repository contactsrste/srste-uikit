"use strict";(self.webpackChunksrste=self.webpackChunksrste||[]).push([[5047],{12859:function(e,t,n){n.r(t),n.d(t,{WrappedComponent:function(){return O},dispatchedEvents:function(){return g},props:function(){return S},slots:function(){return j},styles:function(){return w}});var r=n(50390),o=n(40109),i=n(2914),c=(n(77140),n(48421));function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===a(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,c,a=[],u=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(a.push(r.value),a.length!==t);u=!0);}catch(s){l=!0,o=s}finally{try{if(!u&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(l)throw o}}return a}}(e,t)||d(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){if(e){if("string"===typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var v=function(e,t){var n,i,c,a,u,s=f((0,r.useState)((null===(n=e.overrides)||void 0===n?void 0:n.contents)||e.clan||[]),2),d=s[0],p=s[1],v=f((0,r.useState)((null===(i=e.overrides)||void 0===i?void 0:i.context)||e.context||{}),2),y=v[0],b=v[1],g=f((0,r.useState)((null===(c=e.overrides)||void 0===c?void 0:c.functions)||e.functions||{}),2),w=g[0],S=g[1],j=f((0,r.useState)((null===(a=e.overrides)||void 0===a?void 0:a.designtime)||!1),2),O=j[0],_=(j[1],f((0,r.useState)(e.theme||"g90"),2)),E=(_[0],_[1]),x=f((0,r.useState)(!1),2),I=x[0],A=x[1],k=f((0,r.useState)(!1),2),P=k[0],R=k[1],D=f((0,r.useState)((0,o.e)((null===(u=e.overrides)||void 0===u?void 0:u.contents)||e.clan||[])||[]),2),C=D[0],N=D[1],H=f((0,r.useState)({}),2),T=(H[0],H[1]),W=(0,r.useRef)(d),J=(0,r.useRef)(null),M=function(e){e&&Object.keys(e).length>0&&(window.__SRS__=window.__SRS__||{},window.__SRS__.functions=window.__SRS__.functions||{},Object.keys(e).map((function(t){var n=e[t];n&&(window.__SRS__.functions[t]="string"==typeof n?new Function("return "+n)():n)})));S((function(t){return e}))};(0,r.useEffect)((function(){M(w)}),[]),(0,r.useEffect)((function(){var t,n;p((function(t){var n;return(null===(n=e.overrides)||void 0===n?void 0:n.contents)||e.clan})),b((function(t){var n;return(null===(n=e.overrides)||void 0===n?void 0:n.context)||e.context})),M((null===(t=e.overrides)||void 0===t?void 0:t.functions)||e.functions||{}),E((function(t){return e.theme})),document.documentElement.setAttribute("data-carbon-theme",e.theme),J.current&&!I&&(A(!0),J.current.addEventListener("RICHTEXT#home",(function(e){console.log(e)})),J.current.addEventListener("HOME#clicked",(function(e){console.log(e)})),J.current.addEventListener("RICHTEXT#about",(function(e){console.log(e)})));var r=(0,o.e)((null===(n=e.overrides)||void 0===n?void 0:n.contents)||e.clan);P&&!m(r,C)||(N((function(e){return r})),R((function(e){return!1})),(0,o.z)(r,e.theme).then((function(e){T((function(t){return e})),R((function(e){return!0}))})))}),[e.overrides,e.clan,e.context,e.theme]);var z=r.createElement("div",null," loading... ");if(d&&d.length>0)if(P){var F,L={backgroundColor:"var(--cds-background)",minHeight:"100vh",maxHeight:"100vh",overflow:"scroll"},V=e.styles||{};L=l(l({},L),V);var X="./carbon-components.css";"sandbox"==(null===(F=window.__SRS__)||void 0===F?void 0:F.mode)&&(X="https://know.srste.in/carbon-components.css"),z=r.createElement("div",{ref:J,"data-carbon-theme":e.theme,style:L},r.createElement("style",{className:"basetheme"},'@import "'.concat(X,'";'),"  "),h(d,y,d,e.theme,W,O))}else z=r.createElement("div",null," loading... ");else z=r.createElement("div",{style:{color:"var(--cds-text-secondary)",display:"flex",flexDirection:"column",alignItems:"center",fontSize:"x-large"}}," No contents to show!");return z},m=function(e,t){var n=!1;return e.forEach((function(e){-1==t.indexOf(e)&&(n=!0)})),n},y=function(e,t){return function e(t,n){var r,o=function(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=d(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,a=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){a=!0,i=e},f:function(){try{c||null==n.return||n.return()}finally{if(a)throw i}}}}(t);try{for(o.s();!(r=o.n()).done;){var i=r.value;if(i.elementId===n||i.name===n)return i;if(i.children){var c=e(i.children,n);if(c)return c}}}catch(a){o.e(a)}finally{o.f()}return null}(e.current,t)},b=function(e,t,n){var r={};(t&&t.length>0&&t.forEach((function(t){e.props[t]&&(r[t]=e.props[t])})),e.overrides)&&Object.keys(e.overrides).map((function(t){var o=e.overrides[t];if(o.startsWith("[[")&&o.endsWith("]]")){var i=o.slice(2,-2),c=new Function("api","with(api) { return ".concat(i,"; }"));r[t]=c(n)}}));return r},h=function e(t,n,o,i,u,s){var f=[];return t&&t.forEach((function(t){var d,p=y(u,t.elementId||t.name);if((JSON.stringify(t)!==JSON.stringify(p)||((null===t||void 0===t||null===(d=t.props)||void 0===d?void 0:d.designtime)||"")+""=="true"&&window.__SRS__.activeElementId&&window.__SRS__.activeElementId==t.props.elementid)&&(t.ts=Date.now()+""),!t.hasOwnProperty("visible")||t.visible){var v,m,h=t.tag,g={};if(t.props){var w,S=Object.keys(t.props);(S=S.filter((function(e){return"slotname"!=e}))).map((function(e){"string"!==typeof t.props[e]?g[e]=JSON.stringify(t.props[e]):g[e]=t.props[e]})),null!==t&&void 0!==t&&null!==(w=t.props)&&void 0!==w&&w.slotname&&(g.slot=t.props.slotname)}var j=(null===(v=window)||void 0===v||null===(m=v.__SRS__)||void 0===m?void 0:m.functions)||{},O={context:n,clan:o,helper:l({},j)};if(t.overrides)Object.keys(t.overrides).map((function(e){var n=t.overrides[e];if(n.startsWith("[[")&&n.endsWith("]]")){var r=n.slice(2,-2),o=new Function("api","with(api) { return ".concat(r,"; }"));g[e]=o(O)}}));var _=t.children;if("mui-grid"==h&&g.hasOwnProperty("container")&&_&&_.length>0){var E=[],x=[];_.forEach((function(e,t){if(e&&e.children){var n=b(e,["xs","sm","md","lg","xl","spacing","direction","justify","alignItems","alignContent","wrap","component","xsAuto","smAuto","mdAuto","lgAuto","xlAuto","zeroMinWidth"],O),r="grid-item-"+(e.props.elementId||e.props.name||t);x.push({slotname:r,gridItemProps:n}),e.children.map((function(e,t){e.props=e.props||{},e.props.slotname=r,E.push(e)}))}})),_=E,g.griditemdata=x}else if("mui-tabs"==h&&_&&_.length>0){var I=[],A=[];_.forEach((function(e,t){if(e&&e.children){var n=b(e,["label","value","disabled","icon","wrapped"],O),r="tab-item-"+(e.props.elementId||e.props.name||t);A.push(l({slotname:r},n)),e.children.map((function(e,t){e.props=e.props||{},e.props.slotname=r,I.push(e)}))}})),_=I,g.tabitems=A}else if("srs-repeater"==h&&_&&_.length>0){var k=[];try{k=JSON.parse(g.items)}catch(D){}if(k&&k.length>0){var P=(0,c.Y)(_);_=[],k.forEach((function(e,r){_.push({elementId:t.elementId+"-"+r,name:t.name+"-"+r,tag:"srs-contentrenderer",props:{overrides:{contents:P,context:l(l({},n),e),designtime:s},styles:{minHeight:"100%",maxHeight:"100%",overflow:"auto"}}})}))}t.children=_}var R=e(_,n,o,i,u,s);f.push(r.createElement(h,{key:t.elementId||t.name,elementid:t.elementId||t.id||t.name,ts:t.ts,ref:function(e){e&&(Object.keys(g).forEach((function(t){try{"object"==a(g[t])?e[t]=JSON.stringify(g[t]):e[t]=g[t]}catch(D){}})),e.context=n,e.clan=o,e.theme=i,e.designtime=s)}},R))}})),f},g=[],w="\n    \n",S=[{name:"overrides",type:"object",defaultValue:{}},{name:"styles",type:"object",defaultValue:{}}],j=[];t.default=v;var O=(0,i.Z)(r.forwardRef(v),S)},48421:function(e,t,n){function r(e){if("object"!==typeof e)return e;var t,n,o=Object.prototype.toString.call(e);if("[object Object]"===o){if(e.constructor!==Object&&"function"===typeof e.constructor)for(t in n=new e.constructor,e)e.hasOwnProperty(t)&&n[t]!==e[t]&&(n[t]=r(e[t]));else for(t in n={},e)"__proto__"===t?Object.defineProperty(n,t,{value:r(e[t]),configurable:!0,enumerable:!0,writable:!0}):n[t]=r(e[t]);return n}if("[object Array]"===o){for(t=e.length,n=Array(t);t--;)n[t]=r(e[t]);return n}return"[object Set]"===o?(n=new Set,e.forEach((function(e){n.add(r(e))})),n):"[object Map]"===o?(n=new Map,e.forEach((function(e,t){n.set(r(t),r(e))})),n):"[object Date]"===o?new Date(+e):"[object RegExp]"===o?((n=new RegExp(e.source,e.flags)).lastIndex=e.lastIndex,n):"[object DataView]"===o?new e.constructor(r(e.buffer)):"[object ArrayBuffer]"===o?e.slice(0):"Array]"===o.slice(-6)?new e.constructor(e):e}n.d(t,{Y:function(){return r}})}}]);
//# sourceMappingURL=ContentRenderer.7790a524.chunk.js.map