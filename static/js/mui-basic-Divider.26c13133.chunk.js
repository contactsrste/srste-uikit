"use strict";(self.webpackChunksrste=self.webpackChunksrste||[]).push([[1553],{74117:function(t,e,r){r.r(e),r.d(e,{WrappedComponent:function(){return u},dispatchedEvents:function(){return l},props:function(){return s},slots:function(){return h},styles:function(){return d}});var i=r(50390),n=r(2914),a=r(95995);function o(){return o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},o.apply(this,arguments)}var l=[],c=function(t,e){return i.createElement(a.Z,o({},t,{theme:t.muiTheme}))},d="\n  /* Custom styles for the MuiDivider component */\n",s=[{name:"orientation",defaultValue:"horizontal",type:"string"},{name:"variant",defaultValue:"fullWidth",type:"string"},{name:"sx",defaultValue:{},type:"object"}],h=[{name:"default",allowed:[]}],u=(0,n.Z)(i.forwardRef(c),s,"mui")},95995:function(t,e,r){var i=r(63366),n=r(87462),a=r(50390),o=r(44977),l=r(10147),c=r(36128),d=r(94729),s=r(76869),h=r(4247),u=r(62559),v=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],f=(0,d.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:function(t,e){var r=t.ownerState;return[e.root,r.absolute&&e.absolute,e[r.variant],r.light&&e.light,"vertical"===r.orientation&&e.vertical,r.flexItem&&e.flexItem,r.children&&e.withChildren,r.children&&"vertical"===r.orientation&&e.withChildrenVertical,"right"===r.textAlign&&"vertical"!==r.orientation&&e.textAlignRight,"left"===r.textAlign&&"vertical"!==r.orientation&&e.textAlignLeft]}})((function(t){var e=t.theme,r=t.ownerState;return(0,n.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},r.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},r.light&&{borderColor:e.vars?"rgba(".concat(e.vars.palette.dividerChannel," / 0.08)"):(0,c.Fq)(e.palette.divider,.08)},"inset"===r.variant&&{marginLeft:72},"middle"===r.variant&&"horizontal"===r.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===r.variant&&"vertical"===r.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===r.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},r.flexItem&&{alignSelf:"stretch",height:"auto"})}),(function(t){var e=t.theme,r=t.ownerState;return(0,n.Z)({},r.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:"thin solid ".concat((e.vars||e).palette.divider),top:"50%",content:'""',transform:"translateY(50%)"}})}),(function(t){var e=t.theme,r=t.ownerState;return(0,n.Z)({},r.children&&"vertical"===r.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:"thin solid ".concat((e.vars||e).palette.divider),transform:"translateX(0%)"}})}),(function(t){var e=t.ownerState;return(0,n.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})})),p=(0,d.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:function(t,e){var r=t.ownerState;return[e.wrapper,"vertical"===r.orientation&&e.wrapperVertical]}})((function(t){var e=t.theme,r=t.ownerState;return(0,n.Z)({display:"inline-block",paddingLeft:"calc(".concat(e.spacing(1)," * 1.2)"),paddingRight:"calc(".concat(e.spacing(1)," * 1.2)")},"vertical"===r.orientation&&{paddingTop:"calc(".concat(e.spacing(1)," * 1.2)"),paddingBottom:"calc(".concat(e.spacing(1)," * 1.2)")})})),g=a.forwardRef((function(t,e){var r=(0,s.Z)({props:t,name:"MuiDivider"}),a=r.absolute,c=void 0!==a&&a,d=r.children,g=r.className,m=r.component,w=void 0===m?d?"div":"hr":m,b=r.flexItem,x=void 0!==b&&b,Z=r.light,A=void 0!==Z&&Z,C=r.orientation,S=void 0===C?"horizontal":C,y=r.role,R=void 0===y?"hr"!==w?"separator":void 0:y,V=r.textAlign,I=void 0===V?"center":V,W=r.variant,D=void 0===W?"fullWidth":W,L=(0,i.Z)(r,v),M=(0,n.Z)({},r,{absolute:c,component:w,flexItem:x,light:A,orientation:S,role:R,textAlign:I,variant:D}),j=function(t){var e=t.absolute,r=t.children,i=t.classes,n=t.flexItem,a=t.light,o=t.orientation,c=t.textAlign,d={root:["root",e&&"absolute",t.variant,a&&"light","vertical"===o&&"vertical",n&&"flexItem",r&&"withChildren",r&&"vertical"===o&&"withChildrenVertical","right"===c&&"vertical"!==o&&"textAlignRight","left"===c&&"vertical"!==o&&"textAlignLeft"],wrapper:["wrapper","vertical"===o&&"wrapperVertical"]};return(0,l.Z)(d,h.V,i)}(M);return(0,u.jsx)(f,(0,n.Z)({as:w,className:(0,o.Z)(j.root,g),role:R,ref:e,ownerState:M},L,{children:d?(0,u.jsx)(p,{className:j.wrapper,ownerState:M,children:d}):null}))}));e.Z=g},4247:function(t,e,r){r.d(e,{V:function(){return a}});var i=r(11293),n=r(42254);function a(t){return(0,n.Z)("MuiDivider",t)}var o=(0,i.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);e.Z=o},11293:function(t,e,r){r.d(e,{Z:function(){return n}});var i=r(42254);function n(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Mui",n={};return e.forEach((function(e){n[e]=(0,i.Z)(t,e,r)})),n}}}]);
//# sourceMappingURL=mui-basic-Divider.26c13133.chunk.js.map