"use strict";(self.webpackChunksrste=self.webpackChunksrste||[]).push([[6665],{91473:function(e,n,r){r.r(n),r.d(n,{WrappedComponent:function(){return s},props:function(){return d},styles:function(){return f}});var t=r(50390),a=r(2914);function l(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,a,l,i,o=[],u=!0,c=!1;try{if(l=(r=r.call(e)).next,0===n){if(Object(r)!==r)return;u=!1}else for(;!(u=(t=l.call(r)).done)&&(o.push(t.value),o.length!==n);u=!0);}catch(f){c=!0,a=f}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw a}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return i(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}var o=function e(n){var r=n.node,a=n.onClick;return t.createElement("div",{onClick:function(){return a(r)},style:{paddingLeft:10}},r.name,r.children&&r.children.map((function(n){return t.createElement(e,{node:n,onClick:a})})))},u=function(e){var n=e.data,r=e.onClick;return t.createElement(o,{node:n,onClick:r})},c=function(e,n){var r=l((0,t.useState)(null),2),a=r[0],i=r[1];return t.createElement("div",null,t.createElement(u,{data:{name:"Root",children:[{name:"Child 1",children:[{name:"Grandchild 1"},{name:"Grandchild 2"}]},{name:"Child 2"}]},onClick:i}),a&&t.createElement("div",{style:{marginTop:10}},"Selected node: ",a.name))},f="\n\n",d=[{name:"message",defaultValue:"Click me",type:"string"}],s=(0,a.Z)(t.forwardRef(c),d)}}]);
//# sourceMappingURL=ContentTree.ab4a69d0.chunk.js.map