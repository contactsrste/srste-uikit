"use strict";(self.webpackChunksrste=self.webpackChunksrste||[]).push([[233],{65937:function(e,r,t){t.r(r),t.d(r,{WrappedComponent:function(){return p},dispatchedEvents:function(){return s},props:function(){return v},slots:function(){return m},styles:function(){return d}});var n=t(50390),o=t(2914),i=t(87037);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){u(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r,t){return(r=function(e){var r=function(e,r){if("object"!==a(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,r||"default");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"===a(r)?r:String(r)}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var s=[],f=function(e,r){var t=c(c({},e),{},{theme:e.muiTheme});return n.createElement(i.Z,t,n.createElement("slot",null),e.content)},d="\n  /* Custom styles for the Avatar component */\n",v=[{name:"alt",defaultValue:"",type:"string"},{name:"src",defaultValue:"",type:"string"},{name:"srcSet",defaultValue:"",type:"string"},{name:"sizes",defaultValue:"",type:"string"},{name:"variant",defaultValue:"circular",type:"string"},{name:"color",defaultValue:"default",type:"string"},{name:"content",defaultValue:null,type:"object"},{name:"className",defaultValue:"",type:"string"},{name:"sx",defaultValue:{},type:"object"}],m=[{name:"default",allowed:[]}],p=(0,o.Z)(n.forwardRef(f),v,"mui")},87037:function(e,r,t){t.d(r,{Z:function(){return b}});var n=t(29439),o=t(63366),i=t(87462),a=t(50390),l=t(44977),c=t(10147),u=t(94729),s=t(76869),f=t(72717),d=t(62559),v=(0,f.Z)((0,d.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),m=t(6599),p=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],h=(0,u.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(e,r){var t=e.ownerState;return[r.root,r[t.variant],t.colorDefault&&r.colorDefault]}})((function(e){var r=e.theme,t=e.ownerState;return(0,i.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:r.typography.fontFamily,fontSize:r.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===t.variant&&{borderRadius:(r.vars||r).shape.borderRadius},"square"===t.variant&&{borderRadius:0},t.colorDefault&&(0,i.Z)({color:(r.vars||r).palette.background.default},r.vars?{backgroundColor:r.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===r.palette.mode?r.palette.grey[400]:r.palette.grey[600]}))})),g=(0,u.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(e,r){return r.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),y=(0,u.ZP)(v,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(e,r){return r.fallback}})({width:"75%",height:"75%"});var b=a.forwardRef((function(e,r){var t=(0,s.Z)({props:e,name:"MuiAvatar"}),u=t.alt,f=t.children,v=t.className,b=t.component,S=void 0===b?"div":b,Z=t.imgProps,w=t.sizes,j=t.src,x=t.srcSet,z=t.variant,P=void 0===z?"circular":z,O=(0,o.Z)(t,p),R=null,k=function(e){var r=e.crossOrigin,t=e.referrerPolicy,o=e.src,i=e.srcSet,l=a.useState(!1),c=(0,n.Z)(l,2),u=c[0],s=c[1];return a.useEffect((function(){if(o||i){s(!1);var e=!0,n=new Image;return n.onload=function(){e&&s("loaded")},n.onerror=function(){e&&s("error")},n.crossOrigin=r,n.referrerPolicy=t,n.src=o,i&&(n.srcset=i),function(){e=!1}}}),[r,t,o,i]),u}((0,i.Z)({},Z,{src:j,srcSet:x})),M=j||x,N=M&&"error"!==k,A=(0,i.Z)({},t,{colorDefault:!N,component:S,variant:P}),D=function(e){var r=e.classes,t={root:["root",e.variant,e.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,c.Z)(t,m.$,r)}(A);return R=N?(0,d.jsx)(g,(0,i.Z)({alt:u,src:j,srcSet:x,sizes:w,ownerState:A,className:D.img},Z)):null!=f?f:M&&u?u[0]:(0,d.jsx)(y,{ownerState:A,className:D.fallback}),(0,d.jsx)(h,(0,i.Z)({as:S,ownerState:A,className:(0,l.Z)(D.root,v),ref:r},O,{children:R}))}))},6599:function(e,r,t){t.d(r,{$:function(){return i}});var n=t(11293),o=t(42254);function i(e){return(0,o.Z)("MuiAvatar",e)}var a=(0,n.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);r.Z=a},56436:function(e,r,t){t.d(r,{Z:function(){return y}});var n=t(87462),o=t(63366),i=t(50390),a=t(44977),l=t(10147),c=t(91442),u=t(76869),s=t(94729),f=t(11293),d=t(42254);function v(e){return(0,d.Z)("MuiSvgIcon",e)}(0,f.Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var m=t(62559),p=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],h=(0,s.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:function(e,r){var t=e.ownerState;return[r.root,"inherit"!==t.color&&r["color".concat((0,c.Z)(t.color))],r["fontSize".concat((0,c.Z)(t.fontSize))]]}})((function(e){var r,t,n,o,i,a,l,c,u,s,f,d,v,m,p,h,g,y=e.theme,b=e.ownerState;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(r=y.transitions)||null==(t=r.create)?void 0:t.call(r,"fill",{duration:null==(n=y.transitions)||null==(o=n.duration)?void 0:o.shorter}),fontSize:{inherit:"inherit",small:(null==(i=y.typography)||null==(a=i.pxToRem)?void 0:a.call(i,20))||"1.25rem",medium:(null==(l=y.typography)||null==(c=l.pxToRem)?void 0:c.call(l,24))||"1.5rem",large:(null==(u=y.typography)||null==(s=u.pxToRem)?void 0:s.call(u,35))||"2.1875rem"}[b.fontSize],color:null!=(f=null==(d=(y.vars||y).palette)||null==(v=d[b.color])?void 0:v.main)?f:{action:null==(m=(y.vars||y).palette)||null==(p=m.action)?void 0:p.active,disabled:null==(h=(y.vars||y).palette)||null==(g=h.action)?void 0:g.disabled,inherit:void 0}[b.color]}})),g=i.forwardRef((function(e,r){var t=(0,u.Z)({props:e,name:"MuiSvgIcon"}),i=t.children,s=t.className,f=t.color,d=void 0===f?"inherit":f,g=t.component,y=void 0===g?"svg":g,b=t.fontSize,S=void 0===b?"medium":b,Z=t.htmlColor,w=t.inheritViewBox,j=void 0!==w&&w,x=t.titleAccess,z=t.viewBox,P=void 0===z?"0 0 24 24":z,O=(0,o.Z)(t,p),R=(0,n.Z)({},t,{color:d,component:y,fontSize:S,instanceFontSize:e.fontSize,inheritViewBox:j,viewBox:P}),k={};j||(k.viewBox=P);var M=function(e){var r=e.color,t=e.fontSize,n=e.classes,o={root:["root","inherit"!==r&&"color".concat((0,c.Z)(r)),"fontSize".concat((0,c.Z)(t))]};return(0,l.Z)(o,v,n)}(R);return(0,m.jsxs)(h,(0,n.Z)({as:y,className:(0,a.Z)(M.root,s),focusable:"false",color:Z,"aria-hidden":!x||void 0,role:x?"img":void 0,ref:r},k,O,{ownerState:R,children:[i,x?(0,m.jsx)("title",{children:x}):null]}))}));g.muiName="SvgIcon";var y=g},91442:function(e,r,t){var n=t(89705);r.Z=n.Z},72717:function(e,r,t){t.d(r,{Z:function(){return l}});var n=t(87462),o=t(50390),i=t(56436),a=t(62559);function l(e,r){function t(t,o){return(0,a.jsx)(i.Z,(0,n.Z)({"data-testid":"".concat(r,"Icon"),ref:o},t,{children:e}))}return t.muiName=i.Z.muiName,o.memo(o.forwardRef(t))}},11293:function(e,r,t){t.d(r,{Z:function(){return o}});var n=t(42254);function o(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Mui",o={};return r.forEach((function(r){o[r]=(0,n.Z)(e,r,t)})),o}}}]);
//# sourceMappingURL=mui-basic-Avatar.2420edc0.chunk.js.map