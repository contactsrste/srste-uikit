"use strict";(self.webpackChunksrste=self.webpackChunksrste||[]).push([[6974],{77019:function(e,t,n){n.r(t),n.d(t,{WrappedComponent:function(){return p},dispatchedEvents:function(){return i},props:function(){return f},slots:function(){return m},styles:function(){return c}});var r=n(50390),l=n(2914),o=n(77140);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,o,a,u=[],i=!0,s=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=o.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(c){s=!0,l=c}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw l}}return u}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var i=["ABOUT#clicked"],s=function(e,t){var n=a((0,r.useState)(0),2),l=n[0],u=n[1];return r.createElement("div",null,r.createElement(o.mQc,{type:"container",selectedIndex:l,onChange:function(e){u((null===e||void 0===e?void 0:e.selectedIndex)||0)}},r.createElement(o.tdY,{"aria-label":"Tab List"},e.items.map((function(e,t){return console.log(e),r.createElement(o.OK9,{key:t},e.title)}))),r.createElement(o.nPR,null,e.items.map((function(e,t){return r.createElement(o.x45,{key:t},l===t?r.createElement("slot",{name:e.slotname}):null)})))))},c="\n    \n",f=[{name:"items",defaultValue:[],type:"object"}],m=[{name:"$DYNAMIC$",script:'(function(props) {\n    let slots = [];\n    if(props.items) {\n        props.items.map((item) => {\n            slots.push({name: item.slotname, allowed: ["srs-tab-item"]});\n        })\n    }\n    return slots;\n})'}],p=(0,l.Z)(r.forwardRef(s),f)}}]);
//# sourceMappingURL=basic-TabSet.b295d48e.chunk.js.map