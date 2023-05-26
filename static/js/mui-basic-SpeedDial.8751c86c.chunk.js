/*! For license information please see mui-basic-SpeedDial.8751c86c.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunksrste=self.webpackChunksrste||[]).push([[8691],{86473:function(e,n,o){o.r(n),o.d(n,{WrappedComponent:function(){return $},dispatchedEvents:function(){return O},props:function(){return A},slots:function(){return K},styles:function(){return W}});var t=o(50390),r=o(2914),i=o(29439),a=o(4942),s=o(63366),c=o(87462),l=(o(50557),o(44977)),u=o(10147),d=o(94729),f=o(76869),p=o(88669),m=o(80126),v=o(40138),b=o(3299),h=o(62559),g=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],y={entering:{transform:"none"},entered:{transform:"none"}},Z=t.forwardRef((function(e,n){var o=(0,p.Z)(),r={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},i=e.addEndListener,a=e.appear,l=void 0===a||a,u=e.children,d=e.easing,f=e.in,Z=e.onEnter,w=e.onEntered,x=e.onEntering,S=e.onExit,E=e.onExited,C=e.onExiting,D=e.style,R=e.timeout,k=void 0===R?r:R,z=e.TransitionComponent,F=void 0===z?m.ZP:z,T=(0,s.Z)(e,g),M=t.useRef(null),P=(0,b.Z)(M,u.ref,n),L=function(e){return function(n){if(e){var o=M.current;void 0===n?e(o):e(o,n)}}},V=L(x),N=L((function(e,n){(0,v.n)(e);var t=(0,v.C)({style:D,timeout:k,easing:d},{mode:"enter"});e.style.webkitTransition=o.transitions.create("transform",t),e.style.transition=o.transitions.create("transform",t),Z&&Z(e,n)})),I=L(w),j=L(C),O=L((function(e){var n=(0,v.C)({style:D,timeout:k,easing:d},{mode:"exit"});e.style.webkitTransition=o.transitions.create("transform",n),e.style.transition=o.transitions.create("transform",n),S&&S(e)})),B=L(E);return(0,h.jsx)(F,(0,c.Z)({appear:l,in:f,nodeRef:M,onEnter:N,onEntered:I,onEntering:V,onExit:O,onExited:B,onExiting:j,addEndListener:function(e){i&&i(M.current,e)},timeout:k},T,{children:function(e,n){return t.cloneElement(u,(0,c.Z)({style:(0,c.Z)({transform:"scale(0)",visibility:"exited"!==e||f?void 0:"hidden"},y[e],D,u.props.style),ref:P},n))}}))})),w=Z,x=o(48643),S=o(91442),E=o(43201),C=o(55386),D=o(11293),R=o(42254);function k(e){return(0,R.Z)("MuiSpeedDial",e)}var z=(0,D.Z)("MuiSpeedDial",["root","fab","directionUp","directionDown","directionLeft","directionRight","actions","actionsClosed"]),F=["ref"],T=["ariaLabel","FabProps","children","className","direction","hidden","icon","onBlur","onClose","onFocus","onKeyDown","onMouseEnter","onMouseLeave","onOpen","open","openIcon","TransitionComponent","transitionDuration","TransitionProps"],M=["ref"];function P(e){return"up"===e||"down"===e?"vertical":"right"===e||"left"===e?"horizontal":void 0}var L=(0,d.ZP)("div",{name:"MuiSpeedDial",slot:"Root",overridesResolver:function(e,n){var o=e.ownerState;return[n.root,n["direction".concat((0,S.Z)(o.direction))]]}})((function(e){var n=e.theme,o=e.ownerState;return(0,c.Z)({zIndex:(n.vars||n).zIndex.speedDial,display:"flex",alignItems:"center",pointerEvents:"none"},"up"===o.direction&&(0,a.Z)({flexDirection:"column-reverse"},"& .".concat(z.actions),{flexDirection:"column-reverse",marginBottom:-32,paddingBottom:48}),"down"===o.direction&&(0,a.Z)({flexDirection:"column"},"& .".concat(z.actions),{flexDirection:"column",marginTop:-32,paddingTop:48}),"left"===o.direction&&(0,a.Z)({flexDirection:"row-reverse"},"& .".concat(z.actions),{flexDirection:"row-reverse",marginRight:-32,paddingRight:48}),"right"===o.direction&&(0,a.Z)({flexDirection:"row"},"& .".concat(z.actions),{flexDirection:"row",marginLeft:-32,paddingLeft:48}))})),V=(0,d.ZP)(x.Z,{name:"MuiSpeedDial",slot:"Fab",overridesResolver:function(e,n){return n.fab}})((function(){return{pointerEvents:"auto"}})),N=(0,d.ZP)("div",{name:"MuiSpeedDial",slot:"Actions",overridesResolver:function(e,n){var o=e.ownerState;return[n.actions,!o.open&&n.actionsClosed]}})((function(e){var n=e.ownerState;return(0,c.Z)({display:"flex",pointerEvents:"auto"},!n.open&&{transition:"top 0s linear 0.2s",pointerEvents:"none"})})),I=t.forwardRef((function(e,n){var o=(0,f.Z)({props:e,name:"MuiSpeedDial"}),r=(0,p.Z)(),a={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},d=o.ariaLabel,m=o.FabProps,v=(void 0===m?{}:m).ref,g=o.children,y=o.className,Z=o.direction,x=void 0===Z?"up":Z,D=o.hidden,R=void 0!==D&&D,z=o.icon,I=o.onBlur,j=o.onClose,O=o.onFocus,B=o.onKeyDown,W=o.onMouseEnter,A=o.onMouseLeave,K=o.onOpen,$=o.open,_=o.TransitionComponent,H=void 0===_?w:_,U=o.transitionDuration,q=void 0===U?a:U,G=o.TransitionProps,J=(0,s.Z)(o.FabProps,F),Q=(0,s.Z)(o,T),X=(0,C.Z)({controlled:$,default:!1,name:"SpeedDial",state:"open"}),Y=(0,i.Z)(X,2),ee=Y[0],ne=Y[1],oe=(0,c.Z)({},o,{open:ee,direction:x}),te=function(e){var n=e.classes,o=e.open,t=e.direction,r={root:["root","direction".concat((0,S.Z)(t))],fab:["fab"],actions:["actions",!o&&"actionsClosed"]};return(0,u.Z)(r,k,n)}(oe),re=t.useRef();t.useEffect((function(){return function(){clearTimeout(re.current)}}),[]);var ie=t.useRef(0),ae=t.useRef(),se=t.useRef([]);se.current=[se.current[0]];var ce=t.useCallback((function(e){se.current[0]=e}),[]),le=(0,b.Z)(v,ce),ue=function(e,n){return function(o){se.current[e+1]=o,n&&n(o)}};t.useEffect((function(){ee||(ie.current=0,ae.current=void 0)}),[ee]);var de=function(e){"mouseleave"===e.type&&A&&A(e),"blur"===e.type&&I&&I(e),clearTimeout(re.current),"blur"===e.type?re.current=setTimeout((function(){ne(!1),j&&j(e,"blur")})):(ne(!1),j&&j(e,"mouseLeave"))},fe=function(e){"mouseenter"===e.type&&W&&W(e),"focus"===e.type&&O&&O(e),clearTimeout(re.current),ee||(re.current=setTimeout((function(){if(ne(!0),K){K(e,{focus:"focus",mouseenter:"mouseEnter"}[e.type])}})))},pe=d.replace(/^[^a-z]+|[^\w:.-]+/gi,""),me=t.Children.toArray(g).filter((function(e){return t.isValidElement(e)})),ve=me.map((function(e,n){var o=e.props,r=o.FabProps,i=(void 0===r?{}:r).ref,a=o.tooltipPlacement,l=(0,s.Z)(o.FabProps,M),u=a||("vertical"===P(x)?"left":"top");return t.cloneElement(e,{FabProps:(0,c.Z)({},l,{ref:ue(n,i)}),delay:30*(ee?n:me.length-n),open:ee,tooltipPlacement:u,id:"".concat(pe,"-action-").concat(n)})}));return(0,h.jsxs)(L,(0,c.Z)({className:(0,l.Z)(te.root,y),ref:n,role:"presentation",onKeyDown:function(e){B&&B(e);var n,o,t,r=e.key.replace("Arrow","").toLowerCase(),i=ae.current,a=void 0===i?r:i;if("Escape"===e.key)return ne(!1),se.current[0].focus(),void(j&&j(e,"escapeKeyDown"));if(P(r)===P(a)&&void 0!==P(r)){e.preventDefault();var s=r===a?1:-1,c=(n=ie.current+s,o=0,t=se.current.length-1,n<o?o:n>t?t:n);se.current[c].focus(),ie.current=c,ae.current=a}},onBlur:de,onFocus:fe,onMouseEnter:fe,onMouseLeave:de,ownerState:oe},Q,{children:[(0,h.jsx)(H,(0,c.Z)({in:!R,timeout:q,unmountOnExit:!0},G,{children:(0,h.jsx)(V,(0,c.Z)({color:"primary","aria-label":d,"aria-haspopup":"true","aria-expanded":ee,"aria-controls":"".concat(pe,"-actions")},J,{onClick:function(e){J.onClick&&J.onClick(e),clearTimeout(re.current),ee?(ne(!1),j&&j(e,"toggle")):(ne(!0),K&&K(e,"toggle"))},className:(0,l.Z)(te.fab,J.className),ref:le,ownerState:oe,children:t.isValidElement(z)&&(0,E.Z)(z,["SpeedDialIcon"])?t.cloneElement(z,{open:ee}):z}))})),(0,h.jsx)(N,{id:"".concat(pe,"-actions"),role:"menu","aria-orientation":P(x),className:(0,l.Z)(te.actions,!ee&&te.actionsClosed),ownerState:oe,children:ve})]}))})),j=I,O=[],B=function(e,n){return t.createElement(j,{ariaLabel:e["aria-label"],direction:e.direction,icon:e.icon,open:e.open,onOpen:e.onOpen,onClose:e.onClose,theme:e.muiTheme},t.createElement("slot",{name:"default"}))},W="\n  /* Custom styles for the MuiSpeedDial component */\n",A=[{name:"aria-label",defaultValue:null,type:"string"},{name:"direction",defaultValue:"up",type:"string"},{name:"icon",defaultValue:null,type:"string"},{name:"open",defaultValue:!1,type:"boolean"},{name:"onOpen",defaultValue:null,type:"function"},{name:"onClose",defaultValue:null,type:"function"},{name:"sx",defaultValue:{},type:"object"}],K=[{name:"default",allowed:["srs-mui-speed-dial-action"]}],$=(0,r.Z)(t.forwardRef(B),A,"mui")},48643:function(e,n,o){o.d(n,{Z:function(){return Z}});var t=o(4942),r=o(63366),i=o(87462),a=o(50390),s=o(44977),c=o(10147),l=o(57457),u=o(91442),d=o(76869),f=o(11293),p=o(42254);function m(e){return(0,p.Z)("MuiFab",e)}var v=(0,f.Z)("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]),b=o(94729),h=o(62559),g=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],y=(0,b.ZP)(l.Z,{name:"MuiFab",slot:"Root",shouldForwardProp:function(e){return(0,b.FO)(e)||"classes"===e},overridesResolver:function(e,n){var o=e.ownerState;return[n.root,n[o.variant],n["size".concat((0,u.Z)(o.size))],"inherit"===o.color&&n.colorInherit,n[(0,u.Z)(o.size)],n[o.color]]}})((function(e){var n,o,r=e.theme,a=e.ownerState;return(0,i.Z)({},r.typography.button,(0,t.Z)({minHeight:36,transition:r.transitions.create(["background-color","box-shadow","border-color"],{duration:r.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(r.vars||r).zIndex.fab,boxShadow:(r.vars||r).shadows[6],"&:active":{boxShadow:(r.vars||r).shadows[12]},color:r.vars?r.vars.palette.text.primary:null==(n=(o=r.palette).getContrastText)?void 0:n.call(o,r.palette.grey[300]),backgroundColor:(r.vars||r).palette.grey[300],"&:hover":{backgroundColor:(r.vars||r).palette.grey.A100,"@media (hover: none)":{backgroundColor:(r.vars||r).palette.grey[300]},textDecoration:"none"}},"&.".concat(v.focusVisible),{boxShadow:(r.vars||r).shadows[6]}),"small"===a.size&&{width:40,height:40},"medium"===a.size&&{width:48,height:48},"extended"===a.variant&&{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},"extended"===a.variant&&"small"===a.size&&{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"extended"===a.variant&&"medium"===a.size&&{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40},"inherit"===a.color&&{color:"inherit"})}),(function(e){var n=e.theme,o=e.ownerState;return(0,i.Z)({},"inherit"!==o.color&&"default"!==o.color&&null!=(n.vars||n).palette[o.color]&&{color:(n.vars||n).palette[o.color].contrastText,backgroundColor:(n.vars||n).palette[o.color].main,"&:hover":{backgroundColor:(n.vars||n).palette[o.color].dark,"@media (hover: none)":{backgroundColor:(n.vars||n).palette[o.color].main}}})}),(function(e){var n=e.theme;return(0,t.Z)({},"&.".concat(v.disabled),{color:(n.vars||n).palette.action.disabled,boxShadow:(n.vars||n).shadows[0],backgroundColor:(n.vars||n).palette.action.disabledBackground})})),Z=a.forwardRef((function(e,n){var o=(0,d.Z)({props:e,name:"MuiFab"}),t=o.children,a=o.className,l=o.color,f=void 0===l?"default":l,p=o.component,v=void 0===p?"button":p,b=o.disabled,Z=void 0!==b&&b,w=o.disableFocusRipple,x=void 0!==w&&w,S=o.focusVisibleClassName,E=o.size,C=void 0===E?"large":E,D=o.variant,R=void 0===D?"circular":D,k=(0,r.Z)(o,g),z=(0,i.Z)({},o,{color:f,component:v,disabled:Z,disableFocusRipple:x,size:C,variant:R}),F=function(e){var n=e.color,o=e.variant,t=e.classes,r=e.size,a={root:["root",o,"size".concat((0,u.Z)(r)),"inherit"===n?"colorInherit":n]},s=(0,c.Z)(a,m,t);return(0,i.Z)({},t,s)}(z);return(0,h.jsx)(y,(0,i.Z)({className:(0,s.Z)(F.root,a),component:v,disabled:Z,focusRipple:!x,focusVisibleClassName:(0,s.Z)(F.focusVisible,S),ownerState:z,ref:n},k,{classes:F,children:t}))}))},33647:function(e,n){var o,t=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),l=Symbol.for("react.context"),u=Symbol.for("react.server_context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),b=Symbol.for("react.offscreen");function h(e){if("object"===typeof e&&null!==e){var n=e.$$typeof;switch(n){case t:switch(e=e.type){case i:case s:case a:case f:case p:return e;default:switch(e=e&&e.$$typeof){case u:case l:case d:case v:case m:case c:return e;default:return n}}case r:return n}}}o=Symbol.for("react.module.reference")},50557:function(e,n,o){o(33647)}}]);
//# sourceMappingURL=mui-basic-SpeedDial.8751c86c.chunk.js.map