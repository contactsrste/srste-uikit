"use strict";(self.webpackChunksrste=self.webpackChunksrste||[]).push([[325],{28456:function(e,a,n){n.r(a),n.d(a,{WrappedComponent:function(){return f},dispatchedEvents:function(){return s},props:function(){return p},slots:function(){return v},styles:function(){return c}});var t=n(29439),l=n(50390),r=n(37881),u=n(77140),o=n(23611),d=n(62559),s=[o.F.TEXTAREA_CHANGED],i=function(e,a){var n=(0,l.useState)(e.value||""),r=(0,t.Z)(n,2),s=r[0],i=r[1];(0,l.useEffect)((function(){i(e.value),e.setValue(e.value)}),[e]);return(0,d.jsx)("div",{style:{"--cds-label-01-font-size":"0.9rem","--cds-label-01-font-weight":800},children:(0,d.jsx)(u.Kx8,{id:e.elementid,labelText:e.label,rows:e.rows,cols:e.cols,value:s,disabled:e.disabled,placeholder:e.placeholder,readOnly:e.readonly,onBlur:function(a){var n;e.onChange&&e.onChange((null===(n=a.target)||void 0===n?void 0:n.value)||"")},onChange:function(a){var n,t,l;i((null===(n=a.target)||void 0===n?void 0:n.value)||""),e.dispatchEvent(o.F.TEXTAREA_CHANGED,{payload:{value:(null===(t=a.target)||void 0===t?void 0:t.value)||"",id:e.elementid}}),e.setValue((null===(l=a.target)||void 0===l?void 0:l.value)||"")}})})},c="\n    .cds--text-area {\n        border: 1px solid lightgray !important;\n        border-radius: 5px;\n    }\n\n    .cds--text-area:focus, .cds--text-area:active {\n        outline: 0px !important;\n        border: 2px solid !important;\n        border-radius: 5px;\n    } \n",p=[{name:"label",defaultValue:"Label",type:"string"},{name:"rows",defaultValue:4,type:"number"},{name:"cols",defaultValue:100,type:"number"},{name:"value",defaultValue:"",type:"string"},{name:"disabled",defaultValue:!1,type:"boolean"},{name:"placeholder",defaultValue:"Enter value...",type:"string"},{name:"readonly",defaultValue:!1,type:"boolean"}],v=[],f=(0,r.Z)(l.forwardRef(i),p)}}]);
//# sourceMappingURL=basic-form-TextArea.e2f332f3.chunk.js.map