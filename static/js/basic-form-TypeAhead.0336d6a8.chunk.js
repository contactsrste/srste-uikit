"use strict";(self.webpackChunksrste=self.webpackChunksrste||[]).push([[2129],{9585:function(e,t,n){n.r(t),n.d(t,{WrappedComponent:function(){return p},dispatchedEvents:function(){return c},props:function(){return m},slots:function(){return d},styles:function(){return f}});var r=n(50390),l=n(2914),u=n(77140),a=n(55618);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,u,a,i=[],o=!0,c=!1;try{if(u=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;o=!1}else for(;!(o=(r=u.call(n)).done)&&(i.push(r.value),i.length!==t);o=!0);}catch(s){c=!0,l=s}finally{try{if(!o&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw l}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var c=[a.F.TYPEAHEAD_CHANGED],s=function(e,t){var n=i((0,r.useState)(e.items||[]),2),l=n[0],o=n[1],c=i((0,r.useState)(!1),2),s=c[0],f=c[1],m=(0,r.useRef)(null);return(0,r.useEffect)((function(){o(e.items)}),[e.items]),r.createElement(u.CtY,{label:e.label,id:e.elementid,isOpen:s,items:l.map((function(t){return r.createElement("div",{key:t,onClick:function(){return function(t){e.dispatchEvent(a.F.TYPEAHEAD_CHANGED,{payload:{value:t,id:e.elementid}}),e.setValue(t),f(!1),m.current.blur()}(t)}},t)})),onInputChange:function(t){var n=t.target.value,r=e.items.filter((function(e){return e.toLowerCase().includes(n.toLowerCase())}));o(r),f(!0)},placeholder:e.placeholder,selectedItem:e.selected_item,ref:m},r.createElement(u.oil,null),r.createElement("srs-combomenu",null))},f="\n    \n",m=[{name:"label",defaultValue:"Label",type:"string"},{name:"placeholder",defaultValue:"Search...",type:"string"},{name:"selected_item",defaultValue:"",type:"string"},{name:"items",defaultValue:[],type:"object"}],d=[],p=(0,l.Z)(r.forwardRef(s),m)}}]);
//# sourceMappingURL=basic-form-TypeAhead.0336d6a8.chunk.js.map