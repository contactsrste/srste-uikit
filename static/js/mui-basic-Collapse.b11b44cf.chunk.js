"use strict";(self.webpackChunksrste=self.webpackChunksrste||[]).push([[579],{31907:function(t,n,e){e.r(n),e.d(n,{WrappedComponent:function(){return f},dispatchedEvents:function(){return u},props:function(){return l},slots:function(){return d},styles:function(){return c}});var r=e(50390),i=e(2914),o=e(55600);function a(){return a=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},a.apply(this,arguments)}var u=[],s=function(t,n){return r.createElement(o.Z,a({},t,{theme:t.muiTheme}),r.createElement("slot",null))},c="\n  /* Custom styles for the MuiCollapse component */\n",l=[{name:"in",defaultValue:!1,type:"boolean"},{name:"collapsedHeight",defaultValue:"0px",type:"string"},{name:"timeout",defaultValue:"auto",type:"string"},{name:"orientation",defaultValue:"vertical",type:"string"},{name:"sx",defaultValue:{},type:"object"}],d=[{name:"default",allowed:[]}],f=(0,i.Z)(r.forwardRef(s),l,"mui")},55600:function(t,n,e){e.d(n,{Z:function(){return b}});var r=e(4942),i=e(63366),o=e(87462),a=e(50390),u=e(44977),s=e(80126),c=e(10147),l=e(94729),d=e(76869),f=e(78157),p=e(40138),h=e(88669),v=e(3299),m=e(11293),g=e(42254);function y(t){return(0,g.Z)("MuiCollapse",t)}(0,m.Z)("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);var Z=e(62559),w=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],x=(0,l.ZP)("div",{name:"MuiCollapse",slot:"Root",overridesResolver:function(t,n){var e=t.ownerState;return[n.root,n[e.orientation],"entered"===e.state&&n.entered,"exited"===e.state&&!e.in&&"0px"===e.collapsedSize&&n.hidden]}})((function(t){var n=t.theme,e=t.ownerState;return(0,o.Z)({height:0,overflow:"hidden",transition:n.transitions.create("height")},"horizontal"===e.orientation&&{height:"auto",width:0,transition:n.transitions.create("width")},"entered"===e.state&&(0,o.Z)({height:"auto",overflow:"visible"},"horizontal"===e.orientation&&{width:"auto"}),"exited"===e.state&&!e.in&&"0px"===e.collapsedSize&&{visibility:"hidden"})})),E=(0,l.ZP)("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:function(t,n){return n.wrapper}})((function(t){var n=t.ownerState;return(0,o.Z)({display:"flex",width:"100%"},"horizontal"===n.orientation&&{width:"auto",height:"100%"})})),C=(0,l.ZP)("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:function(t,n){return n.wrapperInner}})((function(t){var n=t.ownerState;return(0,o.Z)({width:"100%"},"horizontal"===n.orientation&&{width:"auto",height:"100%"})})),S=a.forwardRef((function(t,n){var e=(0,d.Z)({props:t,name:"MuiCollapse"}),l=e.addEndListener,m=e.children,g=e.className,S=e.collapsedSize,b=void 0===S?"0px":S,z=e.component,R=e.easing,M=e.in,j=e.onEnter,T=e.onEntered,D=e.onEntering,I=e.onExit,H=e.onExited,N=e.onExiting,P=e.orientation,V=void 0===P?"vertical":P,W=e.style,k=e.timeout,A=void 0===k?f.x9.standard:k,O=e.TransitionComponent,L=void 0===O?s.ZP:O,F=(0,i.Z)(e,w),q=(0,o.Z)({},e,{orientation:V,collapsedSize:b}),B=function(t){var n=t.orientation,e=t.classes,r={root:["root","".concat(n)],entered:["entered"],hidden:["hidden"],wrapper:["wrapper","".concat(n)],wrapperInner:["wrapperInner","".concat(n)]};return(0,c.Z)(r,y,e)}(q),G=(0,h.Z)(),J=a.useRef(),K=a.useRef(null),Q=a.useRef(),U="number"===typeof b?"".concat(b,"px"):b,X="horizontal"===V,Y=X?"width":"height";a.useEffect((function(){return function(){clearTimeout(J.current)}}),[]);var $=a.useRef(null),_=(0,v.Z)(n,$),tt=function(t){return function(n){if(t){var e=$.current;void 0===n?t(e):t(e,n)}}},nt=function(){return K.current?K.current[X?"clientWidth":"clientHeight"]:0},et=tt((function(t,n){K.current&&X&&(K.current.style.position="absolute"),t.style[Y]=U,j&&j(t,n)})),rt=tt((function(t,n){var e=nt();K.current&&X&&(K.current.style.position="");var r=(0,p.C)({style:W,timeout:A,easing:R},{mode:"enter"}),i=r.duration,o=r.easing;if("auto"===A){var a=G.transitions.getAutoHeightDuration(e);t.style.transitionDuration="".concat(a,"ms"),Q.current=a}else t.style.transitionDuration="string"===typeof i?i:"".concat(i,"ms");t.style[Y]="".concat(e,"px"),t.style.transitionTimingFunction=o,D&&D(t,n)})),it=tt((function(t,n){t.style[Y]="auto",T&&T(t,n)})),ot=tt((function(t){t.style[Y]="".concat(nt(),"px"),I&&I(t)})),at=tt(H),ut=tt((function(t){var n=nt(),e=(0,p.C)({style:W,timeout:A,easing:R},{mode:"exit"}),r=e.duration,i=e.easing;if("auto"===A){var o=G.transitions.getAutoHeightDuration(n);t.style.transitionDuration="".concat(o,"ms"),Q.current=o}else t.style.transitionDuration="string"===typeof r?r:"".concat(r,"ms");t.style[Y]=U,t.style.transitionTimingFunction=i,N&&N(t)}));return(0,Z.jsx)(L,(0,o.Z)({in:M,onEnter:et,onEntered:it,onEntering:rt,onExit:ot,onExited:at,onExiting:ut,addEndListener:function(t){"auto"===A&&(J.current=setTimeout(t,Q.current||0)),l&&l($.current,t)},nodeRef:$,timeout:"auto"===A?null:A},F,{children:function(t,n){return(0,Z.jsx)(x,(0,o.Z)({as:z,className:(0,u.Z)(B.root,g,{entered:B.entered,exited:!M&&"0px"===U&&B.hidden}[t]),style:(0,o.Z)((0,r.Z)({},X?"minWidth":"minHeight",U),W),ownerState:(0,o.Z)({},q,{state:t}),ref:_},n,{children:(0,Z.jsx)(E,{ownerState:(0,o.Z)({},q,{state:t}),className:B.wrapper,ref:K,children:(0,Z.jsx)(C,{ownerState:(0,o.Z)({},q,{state:t}),className:B.wrapperInner,children:m})})}))}}))}));S.muiSupportAuto=!0;var b=S},3299:function(t,n,e){var r=e(15851);n.Z=r.Z},11293:function(t,n,e){e.d(n,{Z:function(){return i}});var r=e(42254);function i(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Mui",i={};return n.forEach((function(n){i[n]=(0,r.Z)(t,n,e)})),i}},65017:function(t,n,e){function r(t,n){"function"===typeof t?t(n):t&&(t.current=n)}e.d(n,{Z:function(){return r}})},15851:function(t,n,e){e.d(n,{Z:function(){return o}});var r=e(50390),i=e(65017);function o(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return r.useMemo((function(){return n.every((function(t){return null==t}))?null:function(t){n.forEach((function(n){(0,i.Z)(n,t)}))}}),n)}},32680:function(t,n,e){var r=e(50390);n.Z=r.createContext(null)}}]);
//# sourceMappingURL=mui-basic-Collapse.b11b44cf.chunk.js.map