"use strict";(self.webpackChunksrste=self.webpackChunksrste||[]).push([[5047],{12859:function(e,t,n){n.r(t),n.d(t,{WrappedComponent:function(){return R},dispatchedEvents:function(){return x},props:function(){return k},slots:function(){return I},styles:function(){return E}});var r=n(50390),o=n(40109),i=n(2914),s=n(7262),c=n(27472),u=n(9134),a=n(48421);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===l(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e){return function(e){if(Array.isArray(e))return y(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||h(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,s,c=[],u=!0,a=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(c.push(r.value),c.length!==t);u=!0);}catch(l){a=!0,o=l}finally{try{if(!u&&null!=n.return&&(s=n.return(),Object(s)!==s))return}finally{if(a)throw o}}return c}}(e,t)||h(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){if(e){if("string"===typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var b=function(e,t){var n,i,s,c,u,l,d,p,h=m((0,r.useState)(e.widgetid?(null===(n=e.overrides)||void 0===n?void 0:n.contents)||[]:(null===(i=e.overrides)||void 0===i?void 0:i.contents)||e.clan||[]),2),y=h[0],b=h[1],g=m((0,r.useState)(e.widgetid?(null===(s=e.overrides)||void 0===s?void 0:s.context)||{}:(null===(c=e.overrides)||void 0===c?void 0:c.context)||e.context||{}),2),_=g[0],S=g[1],x=m((0,r.useState)(e.widgetid?(null===(u=e.overrides)||void 0===u?void 0:u.functions)||{}:(null===(l=e.overrides)||void 0===l?void 0:l.functions)||e.functions||{}),2),E=x[0],k=x[1],I=m((0,r.useState)(e.designtime),2),R=I[0],A=I[1],P=m((0,r.useState)(e.widgetid||""),2),Z=P[0],C=(P[1],m((0,r.useState)(e.theme||"g90"),2)),F=C[0],W=C[1],D=m((0,r.useState)(!1),2),N=D[0],T=D[1],H=m((0,r.useState)((0,o.e)(e.widgetid?(null===(d=e.overrides)||void 0===d?void 0:d.contents)||[]:(null===(p=e.overrides)||void 0===p?void 0:p.contents)||e.clan||[])),2),Y=H[0],z=H[1],M=m((0,r.useState)({}),2),U=(M[0],M[1]),V=(0,r.useRef)(null),q=m((0,r.useState)({}),2),B=q[0],J=q[1],$=m((0,r.useState)([]),2),G=$[0],K=$[1],L=function(e){e&&Object.keys(e).length>0&&(window.__SRS__=window.__SRS__||{},window.__SRS__.functions=window.__SRS__.functions||{},Object.keys(e).map((function(t){var n=e[t];n&&(window.__SRS__.functions[t]="string"==typeof n?new Function("try { return "+n+" }catch(err) {console.error(err);}")():n)})));k((function(t){return e}))};(0,r.useEffect)((function(){var t,n,r;b((null===(t=e.overrides)||void 0===t?void 0:t.contents)||e.clan||[]),S((null===(n=e.overrides)||void 0===n?void 0:n.context)||e.context||{}),L(E),null!==(r=e.overrides)&&void 0!==r&&r.hasOwnProperty("designtime")?A(e.overrides.designtime):e.designtime&&A(e.designtime)}),[]),(0,r.useEffect)((function(){J(v(G));var e=O((0,a.Y)(y),_,y,F,B,R,Z);K(e)}),[y,_]),(0,r.useEffect)((function(){var t,n,r;b((function(t){var n;return v((null===(n=e.overrides)||void 0===n?void 0:n.contents)||e.clan)})),S((function(t){var n;return f({},(null===(n=e.overrides)||void 0===n?void 0:n.context)||e.context)})),L((null===(t=e.overrides)||void 0===t?void 0:t.functions)||e.functions||{}),W((function(t){return e.theme})),null!==(n=e.overrides)&&void 0!==n&&n.hasOwnProperty("designtime")?A(e.overrides.designtime):e.designtime&&A(e.designtime);var i=(0,o.e)((null===(r=e.overrides)||void 0===r?void 0:r.contents)||e.clan||[]);N&&!w(i,Y)||(z((function(e){return i})),T((function(e){return!1})),(0,o.z)(i,e.theme).then((function(e){U((function(t){return e})),T((function(e){return!0}))})))}),[e.overrides,e.clan,e.context,e.theme]);return(0,r.useMemo)((function(){var t=null;if(G&&G.length>0)if(N){var n,o={backgroundColor:"var(--cds-background)",minHeight:"100vh",maxHeight:"100vh",overflow:"auto"},i=e.styles||{};o=f(f({},o),i);var s="./carbon-components.css";"sandbox"==(null===(n=window.__SRS__)||void 0===n?void 0:n.mode)&&(s="https://know.srste.in/carbon-components.css"),t=r.createElement("div",{ref:V,"data-carbon-theme":e.theme,style:o},r.createElement("style",{className:"basetheme"},'@import "'.concat(s,'";'),"  "),j((0,a.Y)(G),_,G,F,R,Z))}else t=r.createElement("div",null," loading... ");else t=r.createElement("div",{style:{color:"var(--cds-text-secondary)",display:"flex",flexDirection:"column",alignItems:"center",fontSize:"x-large"}}," No contents to show!");return t}),[G,N])},w=function(e,t){var n=!1;return e.forEach((function(e){-1==t.indexOf(e)&&(n=!0)})),n},g=function(e,t,n){var r={};(t&&t.length>0&&t.forEach((function(t){e.props[t]&&(r[t]=e.props[t])})),e.overrides)&&Object.keys(e.overrides).map((function(t){var o=e.overrides[t];if(o.startsWith("[[")&&o.endsWith("]]")){var i=o.slice(2,-2),s=null;try{s=new Function("api",'with(api) { try { console.log("In dynamicFunction", "'.concat(i,'"); return ').concat(i,"; }catch(err) { console.error(err) } }")),r[t]=s(n)}catch(c){console.error("expression is ",i,c)}}}));return r},_=function e(t,n){var r,o=function(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=h(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){c=!0,i=e},f:function(){try{s||null==n.return||n.return()}finally{if(c)throw i}}}}(n);try{for(o.s();!(r=o.n()).done;){var i=r.value;if(i.elementId===t)return i;if(i.children){var s=e(t,i.children);if(s)return s}}}catch(c){o.e(c)}finally{o.f()}return null},S=function(e,t){for(var n=v(t);n.length>0;){var r=n.pop();if(r.elementId===e)return null;if(r.children)for(var o=0;o<r.children.length;o++){var i=r.children[o];if(i.elementId===e)return r;i.children&&n.push(i)}}return null},O=function e(t,n,r,o,i,l,d){var p,v,m=[],h={};d?null!==(p=window.__SRS__)&&void 0!==p&&p.functions&&Object.keys(window.__SRS__.functions)&&Object.keys(window.__SRS__.functions).map((function(e){h[e]=window.__SRS__.functions[e]})):null!==(v=window.__SRS__)&&void 0!==v&&v.functions&&Object.keys(window.__SRS__.functions)&&Object.keys(window.__SRS__.functions).map((function(e){h[e]=window.__SRS__.functions[e]}));var y={context:n,clan:r,dispatchEvent:(null===k||void 0===k?void 0:k.dispatchEvent)||function(){},helper:f(f({},h),{},{findParentElement:S,findElement:_,compress:c.compressToBase64,decompress:c.decompressFromBase64,clone:a.Y,debounce:s.debounce,http:{request:u.Z.request,get:u.Z.get,post:u.Z.post,put:u.Z.put,patch:u.Z.patch,options:u.Z.options,head:u.Z.head,delete:u.Z.delete,getUri:u.Z.getUri}})};return t&&t.forEach((function(t){var s=t.tag,c={};if(t.props){var u,p=Object.keys(t.props);(p=p.filter((function(e){return"slotname"!=e}))).map((function(e){c[e]=t.props[e]})),null!==t&&void 0!==t&&null!==(u=t.props)&&void 0!==u&&u.slotname&&(c.slot=t.props.slotname)}t.overrides&&Object.keys(t.overrides).map((function(e){var n=t.overrides[e];if(n.startsWith("[[")&&n.endsWith("]]")){var r=null,o=n.slice(2,-2);try{r=new Function("api","with(api) { try { return ".concat(o,"; }catch(err) { console.error(err); } }")),c[e]=r(y)}catch(i){console.error("expression is ",o,i)}}}));var v=t.children;if("mui-grid"==s&&c.hasOwnProperty("container")&&v&&v.length>0){var h=[],b=[];v.forEach((function(e,t){if(e&&e.children){var n=g(e,["sx","xs","sm","md","lg","xl","spacing","direction","justify","alignItems","alignContent","wrap","component","xsAuto","smAuto","mdAuto","lgAuto","xlAuto","zeroMinWidth"],y),r="grid-item-"+(e.props.elementId||e.props.name||t);b.push({slotname:r,gridItemProps:n}),e.children.map((function(e,t){e.props=e.props||{},e.props.slotname=r,h.push(e)}))}})),v=h,c.griditemdata=b}else if("mui-tabs"==s&&v&&v.length>0){var w=[],_=[];v.forEach((function(e,t){if(e&&e.children){var n=g(e,["label","value","disabled","icon","wrapped"],y),r="tab-item-"+(e.props.elementId||e.props.name||t);_.push(f({slotname:r},n)),e.children.map((function(e,t){e.props=e.props||{},e.props.slotname=r,w.push(e)}))}})),v=w,c.tabitems=_}else if("srs-repeater"==s&&v&&v.length>0){if(l+""!="true"){var S=[];if("string"==typeof c.items)try{S=JSON.parse(c.items)}catch(I){}else S=c.items||[];if(S&&S.length>0){var O=(0,a.Y)(t.children||[]);v=[],S.forEach((function(e,r){v.push({elementId:t.elementId+"-"+r,name:t.name+"-"+r,tag:"srs-contentrenderer",props:{overrides:{contents:O,context:f(f({},n),e),designtime:l},styles:{minHeight:"100%",maxHeight:"100%",overflow:"auto"}}})})),t.tag="mui-box",t.children=v}else t.tag="mui-box",v=[],t.children=v}}else if("srs-widget"==s){var j,x=(null===(j=t.props)||void 0===j?void 0:j.widgetfunctions)||{};if((x="string"==typeof x?JSON.parse(x):x)&&!Array.isArray(x)&&x&&Object.keys(x).length>0){window.__SRS__=window.__SRS__||{},window.__SRS__.functions=window.__SRS__.functions||{};var E=Object.keys(x);c.widgetfunctions={},E.map((function(e){c.widgetfunctions[e]="";var t=x[e];t&&(window.__SRS__.functions[e]="string"==typeof t?new Function("try { return "+t+" }catch(err) { console.error(err); }")():t)}))}}else"mui-modal"==s&&(0==c.open?c.visible=!1:c.visible=!0);if(!c.hasOwnProperty("visible")||c.visible+""=="true"){var k=e(v,n,r,o,i,l,d);t.props=c,m.push(f(f({},t),{},{children:k}))}})),m},j=function e(t,n,o,i,s,c){var u=[];return t&&t.forEach((function(t){var a,d=e(t.children,n,o,i,s,c),p=t.tag;u.push(r.createElement(p,{key:t.elementId||t.id||t.name,elementid:t.elementId||t.id||t.name,style:(null===(a=t.props)||void 0===a?void 0:a.hoststyles)||{},ref:function(e){e&&(e.context=n,e.clan=o,e.theme=i,e.elementid=t.elementId||t.id||t.name,e.widgetid=c,e.designtime=s,Object.keys(t.props).forEach((function(n){try{"object"==l(t.props[n])?Array.isArray(t.props[n])?e[n]=v(t.props[n]):e[n]=f({},t.props[n]):e[n]=t.props[n]}catch(r){}})))}},d))})),u},x=[],E="\n    \n",k=[{name:"overrides",type:"object",defaultValue:{}},{name:"widgetid",type:"string",defaultValue:""},{name:"styles",type:"object",defaultValue:{}}],I=[];t.default=b;var R=(0,i.Z)(r.forwardRef(b),k)}}]);
//# sourceMappingURL=ContentRenderer.61e7385d.chunk.js.map