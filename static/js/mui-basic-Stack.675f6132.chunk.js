"use strict";(self.webpackChunksrste=self.webpackChunksrste||[]).push([[1961],{70619:function(e,t,n){n.r(t),n.d(t,{WrappedComponent:function(){return V},dispatchedEvents:function(){return E},props:function(){return A},slots:function(){return T},styles:function(){return N}});var r=n(50390),o=n(2914),i=n(4942),a=n(63366),u=n(87462),s=n(44977),c=n(64487),l=n(10147),f=n(42254),p=n(60870),d=n(9987),m=n(99301),v=n(29605),h=n(11188),y=n(88646),Z=n(62559),g=["component","direction","spacing","divider","children","className","useFlexGap"],k=(0,v.Z)(),b=(0,p.Z)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,t){return t.root}});function x(e){return(0,d.Z)({props:e,name:"MuiStack",defaultTheme:k})}function P(e,t){var n=r.Children.toArray(e).filter(Boolean);return n.reduce((function(e,o,i){return e.push(o),i<n.length-1&&e.push(r.cloneElement(t,{key:"separator-".concat(i)})),e}),[])}var j=function(e){var t=e.ownerState,n=e.theme,r=(0,u.Z)({display:"flex",flexDirection:"column"},(0,h.k9)({theme:n},(0,h.P$)({values:t.direction,breakpoints:n.breakpoints.values}),(function(e){return{flexDirection:e}})));if(t.spacing){var o=(0,y.hB)(n),a=Object.keys(n.breakpoints.values).reduce((function(e,n){return("object"===typeof t.spacing&&null!=t.spacing[n]||"object"===typeof t.direction&&null!=t.direction[n])&&(e[n]=!0),e}),{}),s=(0,h.P$)({values:t.direction,base:a}),l=(0,h.P$)({values:t.spacing,base:a});"object"===typeof s&&Object.keys(s).forEach((function(e,t,n){if(!s[e]){var r=t>0?s[n[t-1]]:"column";s[e]=r}}));r=(0,c.Z)(r,(0,h.k9)({theme:n},l,(function(e,n){return t.useFlexGap?{gap:(0,y.NA)(o,e)}:{"& > :not(style) + :not(style)":(0,i.Z)({margin:0},"margin".concat((r=n?s[n]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[r])),(0,y.NA)(o,e))};var r})))}return r=(0,h.dt)(n.breakpoints,r)};var C=n(94729),w=n(76869),S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.createStyledComponent,n=void 0===t?b:t,o=e.useThemeProps,i=void 0===o?x:o,c=e.componentName,p=void 0===c?"MuiStack":c,d=n(j),v=r.forwardRef((function(e,t){var n=i(e),r=(0,m.Z)(n),o=r.component,c=void 0===o?"div":o,v=r.direction,h=void 0===v?"column":v,y=r.spacing,k=void 0===y?0:y,b=r.divider,x=r.children,j=r.className,C=r.useFlexGap,w=void 0!==C&&C,S=(0,a.Z)(r,g),R={direction:h,spacing:k,useFlexGap:w},E=(0,l.Z)({root:["root"]},(function(e){return(0,f.Z)(p,e)}),{});return(0,Z.jsx)(d,(0,u.Z)({as:c,ownerState:R,ref:t,className:(0,s.Z)(E.root,j)},S,{children:b?P(x,b):x}))}));return v}({createStyledComponent:(0,C.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,t){return t.root}}),useThemeProps:function(e){return(0,w.Z)({props:e,name:"MuiStack"})}}),R=S,E=[],M=function(e,t){return r.createElement(R,{direction:e.direction,spacing:e.spacing,justifyContent:e.justifyContent,alignItems:e.alignItems,theme:e.muiTheme},r.createElement("slot",null))},N="\n  /* Custom styles for the MuiStack component */\n",A=[{name:"direction",defaultValue:"row",type:"string"},{name:"spacing",defaultValue:0,type:"number"},{name:"justifyContent",defaultValue:"flex-start",type:"string"},{name:"alignItems",defaultValue:"stretch",type:"string"},{name:"sx",defaultValue:{},type:"object"}],T=[{name:"default",allowed:[]}],V=(0,o.Z)(r.forwardRef(M),A,"mui")},99301:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(93433),o=n(87462),i=n(63366),a=n(64487),u=n(76328),s=["sx"],c=function(e){var t,n,r={systemProps:{},otherProps:{}},o=null!=(t=null==e||null==(n=e.theme)?void 0:n.unstable_sxConfig)?t:u.Z;return Object.keys(e).forEach((function(t){o[t]?r.systemProps[t]=e[t]:r.otherProps[t]=e[t]})),r};function l(e){var t,n=e.sx,u=(0,i.Z)(e,s),l=c(u),f=l.systemProps,p=l.otherProps;return t=Array.isArray(n)?[f].concat((0,r.Z)(n)):"function"===typeof n?function(){var e=n.apply(void 0,arguments);return(0,a.P)(e)?(0,o.Z)({},f,e):f}:(0,o.Z)({},f,n),(0,o.Z)({},p,{sx:t})}},60870:function(e,t,n){var r=(0,n(86410).ZP)();t.Z=r}}]);
//# sourceMappingURL=mui-basic-Stack.675f6132.chunk.js.map