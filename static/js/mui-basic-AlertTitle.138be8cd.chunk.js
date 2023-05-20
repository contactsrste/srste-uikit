"use strict";(self.webpackChunksrste=self.webpackChunksrste||[]).push([[219],{1033:function(t,r,n){n.r(r),n.d(r,{WrappedComponent:function(){return T},dispatchedEvents:function(){return j},props:function(){return M},slots:function(){return B},styles:function(){return x}});var e=n(50390),o=n(2914),a=n(87462),i=n(63366),u=n(44977),p=n(10147),c=n(94729),l=n(76869),s=n(35477),f=n(11293),m=n(42254);function h(t){return(0,m.Z)("MuiAlertTitle",t)}(0,f.Z)("MuiAlertTitle",["root"]);var g=n(62559),y=["className"],v=(0,c.ZP)(s.Z,{name:"MuiAlertTitle",slot:"Root",overridesResolver:function(t,r){return r.root}})((function(t){return{fontWeight:t.theme.typography.fontWeightMedium,marginTop:-2}})),b=e.forwardRef((function(t,r){var n=(0,l.Z)({props:t,name:"MuiAlertTitle"}),e=n.className,o=(0,i.Z)(n,y),c=n,s=function(t){var r=t.classes;return(0,p.Z)({root:["root"]},h,r)}(c);return(0,g.jsx)(v,(0,a.Z)({gutterBottom:!0,component:"div",ownerState:c,ref:r,className:(0,u.Z)(s.root,e)},o))})),d=b;function Z(t){return Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Z(t)}function w(t,r){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);r&&(e=e.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),n.push.apply(n,e)}return n}function P(t){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?w(Object(n),!0).forEach((function(r){O(t,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))}))}return t}function O(t,r,n){return(r=function(t){var r=function(t,r){if("object"!==Z(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var e=n.call(t,r||"default");if("object"!==Z(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"===Z(r)?r:String(r)}(r))in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}var j=[],S=function(t,r){var n=P(P({},t),{},{theme:t.muiTheme});return e.createElement(d,n,e.createElement("slot",null))},x="\n  /* Custom styles for the AlertTitle component */\n",M=[{name:"sx",defaultValue:{},type:"object"}],B=[{name:"default",allowed:[]}],T=(0,o.Z)(e.forwardRef(S),M,"mui")},35477:function(t,r,n){n.d(r,{Z:function(){return Z}});var e=n(63366),o=n(87462),a=n(50390),i=n(44977),u=n(99301),p=n(10147),c=n(94729),l=n(76869),s=n(91442),f=n(11293),m=n(42254);function h(t){return(0,m.Z)("MuiTypography",t)}(0,f.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var g=n(62559),y=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],v=(0,c.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(t,r){var n=t.ownerState;return[r.root,n.variant&&r[n.variant],"inherit"!==n.align&&r["align".concat((0,s.Z)(n.align))],n.noWrap&&r.noWrap,n.gutterBottom&&r.gutterBottom,n.paragraph&&r.paragraph]}})((function(t){var r=t.theme,n=t.ownerState;return(0,o.Z)({margin:0},n.variant&&r.typography[n.variant],"inherit"!==n.align&&{textAlign:n.align},n.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n.gutterBottom&&{marginBottom:"0.35em"},n.paragraph&&{marginBottom:16})})),b={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},d={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Z=a.forwardRef((function(t,r){var n=(0,l.Z)({props:t,name:"MuiTypography"}),a=function(t){return d[t]||t}(n.color),c=(0,u.Z)((0,o.Z)({},n,{color:a})),f=c.align,m=void 0===f?"inherit":f,Z=c.className,w=c.component,P=c.gutterBottom,O=void 0!==P&&P,j=c.noWrap,S=void 0!==j&&j,x=c.paragraph,M=void 0!==x&&x,B=c.variant,T=void 0===B?"body1":B,W=c.variantMapping,A=void 0===W?b:W,E=(0,e.Z)(c,y),N=(0,o.Z)({},c,{align:m,color:a,className:Z,component:w,gutterBottom:O,noWrap:S,paragraph:M,variant:T,variantMapping:A}),R=w||(M?"p":A[T]||b[T])||"span",k=function(t){var r=t.align,n=t.gutterBottom,e=t.noWrap,o=t.paragraph,a=t.variant,i=t.classes,u={root:["root",a,"inherit"!==t.align&&"align".concat((0,s.Z)(r)),n&&"gutterBottom",e&&"noWrap",o&&"paragraph"]};return(0,p.Z)(u,h,i)}(N);return(0,g.jsx)(v,(0,o.Z)({as:R,ref:r,ownerState:N,className:(0,i.Z)(k.root,Z)},E))}))},91442:function(t,r,n){var e=n(89705);r.Z=e.Z},99301:function(t,r,n){n.d(r,{Z:function(){return l}});var e=n(93433),o=n(87462),a=n(63366),i=n(64487),u=n(76328),p=["sx"],c=function(t){var r,n,e={systemProps:{},otherProps:{}},o=null!=(r=null==t||null==(n=t.theme)?void 0:n.unstable_sxConfig)?r:u.Z;return Object.keys(t).forEach((function(r){o[r]?e.systemProps[r]=t[r]:e.otherProps[r]=t[r]})),e};function l(t){var r,n=t.sx,u=(0,a.Z)(t,p),l=c(u),s=l.systemProps,f=l.otherProps;return r=Array.isArray(n)?[s].concat((0,e.Z)(n)):"function"===typeof n?function(){var t=n.apply(void 0,arguments);return(0,i.P)(t)?(0,o.Z)({},s,t):s}:(0,o.Z)({},s,n),(0,o.Z)({},f,{sx:r})}},11293:function(t,r,n){n.d(r,{Z:function(){return o}});var e=n(42254);function o(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Mui",o={};return r.forEach((function(r){o[r]=(0,e.Z)(t,r,n)})),o}}}]);
//# sourceMappingURL=mui-basic-AlertTitle.138be8cd.chunk.js.map