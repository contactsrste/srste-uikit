"use strict";(self.webpackChunksrste=self.webpackChunksrste||[]).push([[3001],{63525:function(e,n,t){t.r(n),t.d(n,{WrappedComponent:function(){return x},dispatchedEvents:function(){return m},props:function(){return y},slots:function(){return _},styles:function(){return h}});var a=t(1413),l=t(74165),i=t(37762),s=t(15861),d=t(29439),r=t(50390),o=t(40277),p=t(34371),c=t(23611),u=t(63457),f=t(62559),m=[],b=function(e,n){var t=(0,r.useState)([]),o=(0,d.Z)(t,2),m=o[0],b=o[1],h=(0,r.useState)(0),y=(0,d.Z)(h,2),_=(y[0],y[1]),x=(0,r.useState)(!1),v=(0,d.Z)(x,2),g=(v[0],v[1]),w=(0,r.useRef)(null),F=function(){var n=(0,s.Z)((0,l.Z)().mark((function n(){var t,a,s,d;return(0,l.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:try{t=new FormData,a=(0,i.Z)(m);try{for(a.s();!(s=a.n()).done;)d=s.value,t.append("file",d)}catch(l){a.e(l)}finally{a.f()}({onUploadProgress:function(e){var n=Math.round(100*e.loaded/e.total);_(n)}}),g(!0),e.dispatchEvent(c.F.FILE_UPLOADING,{payload:{files:m,id:e.elementid}}),g(!1),_(0),e.dispatchEvent(c.F.FILE_UPLOADED,{payload:{files:m,id:e.elementid}})}catch(r){console.error(r),g(!1),_(0),e.dispatchEvent(c.F.FILE_UPLOAD_FAILED,{payload:{files:m,id:e.elementid}})}case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),D={};return e.accepted_formats&&(D.accept=e.accepted_formats),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("p",{className:"cds--file--label",children:e.label}),(0,f.jsx)("p",{className:"cds--label-description",children:e.subtitle}),(0,f.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[(0,f.jsx)(p.awp,(0,a.Z)({labelText:e.add_files_label,labelDescription:e.add_files_description,name:"",tabIndex:0,buttonKind:"primary",filenameStatus:"edit",multiple:!0,onAddFiles:function(e,n){var t=n.addedFiles;b(m.concat(t||[]))},onClick:function(e){},ref:w},D)),(0,f.jsx)(p.zxk,{hasIconOnly:!0,iconDescription:"Upload",renderIcon:u.nH,onClick:F,size:"sm",disabled:!m||0===m.length,children:e.upload_button_label})]}),m.map((function(e){return(0,f.jsx)(p.Py3,{name:e.name,size:"md",status:"uploading",iconDescription:"Delete file",invalid:!1},e.name)}))]})},h="\n    .cds--file-browse-btn {\n        max-width: 100% !important;\n    }\n    .cds--file {\n        width: 70% !important;\n    }\n    .cds--popover-container {\n        display: flex !important;\n    }\n    .cds--file__selected-file {\n        max-width: 100% !important;\n        width: 70% !important;\n    }\n",y=[{name:"label",defaultValue:"Upload Files",type:"string"},{name:"subtitle",defaultValue:"Max file size is 500kb. Supported file types are .jpg and .png.",type:"string"},{name:"add_files_label",defaultValue:"Upload Files",type:"string"},{name:"add_files_description",defaultValue:"Max file size is 10mb. Only .jpg files are supported.",type:"string"},{name:"upload_button_label",defaultValue:"Upload",type:"string"},{name:"upload_endpoint",defaultValue:"/upload",type:"string"},{name:"accepted_formats",defaultValue:[],type:[]}],_=[],x=(0,o.Z)(r.forwardRef(b),y)}}]);
//# sourceMappingURL=basic-form-FileUpload.c1a3f957.chunk.js.map