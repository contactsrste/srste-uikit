"use strict";(self.webpackChunksrste=self.webpackChunksrste||[]).push([[233],{65937:function(e,t,r){r.r(t),r.d(t,{WrappedComponent:function(){return v},dispatchedEvents:function(){return s},props:function(){return p},slots:function(){return d},styles:function(){return m}});var n=r(50390),o=r(2914),a=r(87037);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==i(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===i(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=[],f=function(e,t){var r=u(u({},e),{},{theme:e.muiTheme});return n.createElement(a.Z,r,n.createElement("slot",null),e.content)},m="\n  /* Custom styles for the Avatar component */\n",p=[{name:"alt",defaultValue:"",type:"string"},{name:"src",defaultValue:"",type:"string"},{name:"srcSet",defaultValue:"",type:"string"},{name:"sizes",defaultValue:"",type:"string"},{name:"variant",defaultValue:"circular",type:"string"},{name:"color",defaultValue:"default",type:"string"},{name:"content",defaultValue:null,type:"object"},{name:"className",defaultValue:"",type:"string"},{name:"sx",defaultValue:{},type:"object"}],d=[{name:"default",allowed:[]}],v=(0,o.Z)(n.forwardRef(f),p,"mui")},87037:function(e,t,r){r.d(t,{Z:function(){return h}});var n=r(29439),o=r(63366),a=r(87462),i=r(50390),l=r(44977),u=r(10147),c=r(94729),s=r(76869),f=r(72717),m=r(62559),p=(0,f.Z)((0,m.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),d=r(6599),v=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],y=(0,c.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t[r.variant],r.colorDefault&&t.colorDefault]}})((function(e){var t=e.theme,r=e.ownerState;return(0,a.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===r.variant&&{borderRadius:(t.vars||t).shape.borderRadius},"square"===r.variant&&{borderRadius:0},r.colorDefault&&(0,a.Z)({color:(t.vars||t).palette.background.default},t.vars?{backgroundColor:t.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===t.palette.mode?t.palette.grey[400]:t.palette.grey[600]}))})),b=(0,c.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(e,t){return t.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),g=(0,c.ZP)(p,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(e,t){return t.fallback}})({width:"75%",height:"75%"});var h=i.forwardRef((function(e,t){var r=(0,s.Z)({props:e,name:"MuiAvatar"}),c=r.alt,f=r.children,p=r.className,h=r.component,S=void 0===h?"div":h,w=r.imgProps,j=r.sizes,Z=r.src,O=r.srcSet,P=r.variant,k=void 0===P?"circular":P,D=(0,o.Z)(r,v),R=null,x=function(e){var t=e.crossOrigin,r=e.referrerPolicy,o=e.src,a=e.srcSet,l=i.useState(!1),u=(0,n.Z)(l,2),c=u[0],s=u[1];return i.useEffect((function(){if(o||a){s(!1);var e=!0,n=new Image;return n.onload=function(){e&&s("loaded")},n.onerror=function(){e&&s("error")},n.crossOrigin=t,n.referrerPolicy=r,n.src=o,a&&(n.srcset=a),function(){e=!1}}}),[t,r,o,a]),c}((0,a.Z)({},w,{src:Z,srcSet:O})),A=Z||O,V=A&&"error"!==x,z=(0,a.Z)({},r,{colorDefault:!V,component:S,variant:k}),C=function(e){var t=e.classes,r={root:["root",e.variant,e.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,u.Z)(r,d.$,t)}(z);return R=V?(0,m.jsx)(b,(0,a.Z)({alt:c,src:Z,srcSet:O,sizes:j,ownerState:z,className:C.img},w)):null!=f?f:A&&c?c[0]:(0,m.jsx)(g,{ownerState:z,className:C.fallback}),(0,m.jsx)(y,(0,a.Z)({as:S,ownerState:z,className:(0,l.Z)(C.root,p),ref:t},D,{children:R}))}))},6599:function(e,t,r){r.d(t,{$:function(){return a}});var n=r(11293),o=r(42254);function a(e){return(0,o.Z)("MuiAvatar",e)}var i=(0,n.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);t.Z=i}}]);
//# sourceMappingURL=mui-basic-Avatar.abc1f14b.chunk.js.map