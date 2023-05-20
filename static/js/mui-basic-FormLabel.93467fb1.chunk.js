"use strict";(self.webpackChunksrste=self.webpackChunksrste||[]).push([[8936],{90629:function(e,r,o){o.r(r),o.d(r,{WrappedComponent:function(){return c},dispatchedEvents:function(){return l},props:function(){return d},slots:function(){return s},styles:function(){return u}});var t=o(50390),n=o(2914),a=o(40198),l=[],i=function(e,r){return t.createElement(a.Z,{error:e.error,disabled:e.disabled,required:e.required,focused:e.focused,filled:e.filled,variant:e.variant,htmlFor:e.htmlFor,theme:e.muiTheme},t.createElement("slot",null))},u="\n  /* Custom styles for the MuiFormLabel component */\n",d=[{name:"error",defaultValue:!1,type:"boolean"},{name:"disabled",defaultValue:!1,type:"boolean"},{name:"required",defaultValue:!1,type:"boolean"},{name:"focused",defaultValue:!1,type:"boolean"},{name:"filled",defaultValue:!1,type:"boolean"},{name:"variant",defaultValue:"standard",type:"string"},{name:"htmlFor",defaultValue:"",type:"string"},{name:"sx",defaultValue:{},type:"object"}],s=[{name:"default",allowed:[]}],c=(0,n.Z)(t.forwardRef(i),d,"mui")},14478:function(e,r,o){var t=o(50390).createContext(void 0);r.Z=t},25868:function(e,r,o){function t(e){var r=e.props,o=e.states,t=e.muiFormControl;return o.reduce((function(e,o){return e[o]=r[o],t&&"undefined"===typeof r[o]&&(e[o]=t[o]),e}),{})}o.d(r,{Z:function(){return t}})},23060:function(e,r,o){o.d(r,{Z:function(){return a}});var t=o(50390),n=o(14478);function a(){return t.useContext(n.Z)}},40198:function(e,r,o){var t=o(4942),n=o(63366),a=o(87462),l=o(50390),i=o(44977),u=o(10147),d=o(25868),s=o(23060),c=o(91442),f=o(76869),m=o(94729),p=o(41248),Z=o(62559),v=["children","className","color","component","disabled","error","filled","focused","required"],b=(0,m.ZP)("label",{name:"MuiFormLabel",slot:"Root",overridesResolver:function(e,r){var o=e.ownerState;return(0,a.Z)({},r.root,"secondary"===o.color&&r.colorSecondary,o.filled&&r.filled)}})((function(e){var r,o=e.theme,n=e.ownerState;return(0,a.Z)({color:(o.vars||o).palette.text.secondary},o.typography.body1,(r={lineHeight:"1.4375em",padding:0,position:"relative"},(0,t.Z)(r,"&.".concat(p.Z.focused),{color:(o.vars||o).palette[n.color].main}),(0,t.Z)(r,"&.".concat(p.Z.disabled),{color:(o.vars||o).palette.text.disabled}),(0,t.Z)(r,"&.".concat(p.Z.error),{color:(o.vars||o).palette.error.main}),r))})),h=(0,m.ZP)("span",{name:"MuiFormLabel",slot:"Asterisk",overridesResolver:function(e,r){return r.asterisk}})((function(e){var r=e.theme;return(0,t.Z)({},"&.".concat(p.Z.error),{color:(r.vars||r).palette.error.main})})),y=l.forwardRef((function(e,r){var o=(0,f.Z)({props:e,name:"MuiFormLabel"}),t=o.children,l=o.className,m=o.component,y=void 0===m?"label":m,q=(0,n.Z)(o,v),F=(0,s.Z)(),k=(0,d.Z)({props:o,muiFormControl:F,states:["color","required","focused","disabled","error","filled"]}),w=(0,a.Z)({},o,{color:k.color||"primary",component:y,disabled:k.disabled,error:k.error,filled:k.filled,focused:k.focused,required:k.required}),M=function(e){var r=e.classes,o=e.color,t=e.focused,n=e.disabled,a=e.error,l=e.filled,i=e.required,d={root:["root","color".concat((0,c.Z)(o)),n&&"disabled",a&&"error",l&&"filled",t&&"focused",i&&"required"],asterisk:["asterisk",a&&"error"]};return(0,u.Z)(d,p.M,r)}(w);return(0,Z.jsxs)(b,(0,a.Z)({as:y,ownerState:w,className:(0,i.Z)(M.root,l),ref:r},q,{children:[t,k.required&&(0,Z.jsxs)(h,{ownerState:w,"aria-hidden":!0,className:M.asterisk,children:["\u2009","*"]})]}))}));r.Z=y},41248:function(e,r,o){o.d(r,{M:function(){return a}});var t=o(11293),n=o(42254);function a(e){return(0,n.Z)("MuiFormLabel",e)}var l=(0,t.Z)("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"]);r.Z=l},91442:function(e,r,o){var t=o(89705);r.Z=t.Z},11293:function(e,r,o){o.d(r,{Z:function(){return n}});var t=o(42254);function n(e,r){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Mui",n={};return r.forEach((function(r){n[r]=(0,t.Z)(e,r,o)})),n}}}]);
//# sourceMappingURL=mui-basic-FormLabel.93467fb1.chunk.js.map