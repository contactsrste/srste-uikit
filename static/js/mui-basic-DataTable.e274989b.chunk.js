"use strict";(self.webpackChunksrste=self.webpackChunksrste||[]).push([[1709],{63123:function(e,t,n){n.r(t),n.d(t,{WrappedComponent:function(){return _},dispatchedEvents:function(){return h},props:function(){return E},slots:function(){return w},styles:function(){return g}});var r=n(50390),l=n(2914),a=n(4182),o=n(35044),u=n(73481),i=n(20183),c=n(77555),s=n(29399),m=n(45478),f=(n(10227),n(7874)),p=n(56805),d=n(40109);function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a,o,u=[],i=!0,c=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=a.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(s){c=!0,l=s}finally{try{if(!i&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(c)throw l}}return u}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var h=[],v=function(e,t){var n,l,b,h=y((0,r.useState)(e.page_number||0),2),v=(h[0],h[1],y((0,r.useState)(e.page_size||5),2));v[0],v[1];return(0,r.useEffect)((function(){(0,d.z)(["srs-mui-pagination"],e.theme)}),[]),"simple"==e.display_mode?r.createElement("div",null,r.createElement(p.Z,{sx:{height:400,width:"100%"}},r.createElement(f._,{rows:e.rows,columns:e.columns,pageSizeOptions:[5,10,25,20,50,100],checkboxSelection:e.enable_selection,disableRowSelectionOnClick:e.enable_row_select_onclick,hideFooter:!1}),r.createElement("srs-mui-pagination",null))):r.createElement(i.Z,{component:m.Z},r.createElement(a.Z,{sx:{minWidth:650},size:"small","aria-label":(null===(n=e.aria)||void 0===n?void 0:n.label)||"A dense table"},r.createElement(c.Z,null,r.createElement(s.Z,null,null===(l=e.columns)||void 0===l?void 0:l.map((function(e,t){if("custom"==e.type)return r.createElement("slot",{name:e.slotname});var n=e.styles||(0==t?{}:{align:"right"});return r.createElement(u.Z,n,e.headerName)})))),r.createElement(o.Z,null,null===(b=e.rows)||void 0===b?void 0:b.map((function(t){var n=[];return e.columns.forEach((function(e,l){var a=t[e.field];if(a&&"custom"==a.type)n.push(r.createElement("slot",{name:a.slotname}));else if(0==l)n.push(r.createElement(u.Z,{component:"th",scope:"row"},a));else{var o=e.styles||(0==l?{}:{align:"right"});n.push(r.createElement(u.Z,o,a))}})),r.createElement(s.Z,{key:t.name,sx:{"&:last-child td, &:last-child th":{border:0}}},n)})))))},g="\n    \n",E=[{name:"rows",defaultValue:[],type:"object"},{name:"columns",defaultValue:[],type:"object"},{name:"page_number",defaultValue:0,type:"number"},{name:"page_size",defaultValue:10,type:"number"},{name:"enable_selection",defaultValue:!0,type:"boolean"},{name:"display_mode",defaultValue:"simple",type:"string"},{name:"enable_row_select_onclick",defaultValue:!0,type:"boolean"}],w=[],_=(0,l.Z)(r.forwardRef(v),E,"mui")}}]);
//# sourceMappingURL=mui-basic-DataTable.e274989b.chunk.js.map