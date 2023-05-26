"use strict";(self.webpackChunksrste=self.webpackChunksrste||[]).push([[4717],{16026:function(t,e,n){n.r(e),n.d(e,{WrappedComponent:function(){return z},dispatchedEvents:function(){return S},props:function(){return M},slots:function(){return T},styles:function(){return R}});var o=n(50390),r=n(2914),i=n(63366),a=n(87462),s=n(44977),u=n(10147),l=n(94729),c=n(76869),d=n(55600),p=n(28672),f=n(33494),h=n(11293),m=n(42254);function v(t){return(0,m.Z)("MuiStepContent",t)}(0,h.Z)("MuiStepContent",["root","last","transition"]);var Z=n(62559),g=["children","className","TransitionComponent","transitionDuration","TransitionProps"],w=(0,l.ZP)("div",{name:"MuiStepContent",slot:"Root",overridesResolver:function(t,e){var n=t.ownerState;return[e.root,n.last&&e.last]}})((function(t){var e=t.ownerState,n=t.theme;return(0,a.Z)({marginLeft:12,paddingLeft:20,paddingRight:8,borderLeft:n.vars?"1px solid ".concat(n.vars.palette.StepContent.border):"1px solid ".concat("light"===n.palette.mode?n.palette.grey[400]:n.palette.grey[600])},e.last&&{borderLeft:"none"})})),x=(0,l.ZP)(d.Z,{name:"MuiStepContent",slot:"Transition",overridesResolver:function(t,e){return e.transition}})({}),y=o.forwardRef((function(t,e){var n=(0,c.Z)({props:t,name:"MuiStepContent"}),r=n.children,l=n.className,h=n.TransitionComponent,m=void 0===h?d.Z:h,y=n.transitionDuration,C=void 0===y?"auto":y,E=n.TransitionProps,S=(0,i.Z)(n,g),b=(o.useContext(p.Z).orientation,o.useContext(f.Z)),R=b.active,M=b.last,T=b.expanded,z=(0,a.Z)({},n,{last:M}),j=function(t){var e=t.classes,n={root:["root",t.last&&"last"],transition:["transition"]};return(0,u.Z)(n,v,e)}(z);var N=C;return"auto"!==C||m.muiSupportAuto||(N=void 0),(0,Z.jsx)(w,(0,a.Z)({className:(0,s.Z)(j.root,l),ref:e,ownerState:z},S,{children:(0,Z.jsx)(x,(0,a.Z)({as:m,in:R||T,className:j.transition,ownerState:z,timeout:N,unmountOnExit:!0},E,{children:r}))}))})),C=y;function E(){return E=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},E.apply(this,arguments)}var S=[],b=function(t,e){return o.createElement(C,E({},t,{theme:t.muiTheme}))},R="\n  /* Custom styles for the MuiStepContent component */\n",M=[{name:"active",defaultValue:!1,type:"boolean"},{name:"alternativeLabel",defaultValue:!1,type:"boolean"},{name:"completed",defaultValue:!1,type:"boolean"},{name:"disabled",defaultValue:!1,type:"boolean"},{name:"last",defaultValue:!1,type:"boolean"},{name:"sx",defaultValue:{},type:"object"}],T=[{name:"default",allowed:[]}],z=(0,r.Z)(o.forwardRef(b),M,"mui")},55600:function(t,e,n){n.d(e,{Z:function(){return b}});var o=n(4942),r=n(63366),i=n(87462),a=n(50390),s=n(44977),u=n(80126),l=n(10147),c=n(94729),d=n(76869),p=n(78157),f=n(40138),h=n(88669),m=n(3299),v=n(11293),Z=n(42254);function g(t){return(0,Z.Z)("MuiCollapse",t)}(0,v.Z)("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);var w=n(62559),x=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],y=(0,c.ZP)("div",{name:"MuiCollapse",slot:"Root",overridesResolver:function(t,e){var n=t.ownerState;return[e.root,e[n.orientation],"entered"===n.state&&e.entered,"exited"===n.state&&!n.in&&"0px"===n.collapsedSize&&e.hidden]}})((function(t){var e=t.theme,n=t.ownerState;return(0,i.Z)({height:0,overflow:"hidden",transition:e.transitions.create("height")},"horizontal"===n.orientation&&{height:"auto",width:0,transition:e.transitions.create("width")},"entered"===n.state&&(0,i.Z)({height:"auto",overflow:"visible"},"horizontal"===n.orientation&&{width:"auto"}),"exited"===n.state&&!n.in&&"0px"===n.collapsedSize&&{visibility:"hidden"})})),C=(0,c.ZP)("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:function(t,e){return e.wrapper}})((function(t){var e=t.ownerState;return(0,i.Z)({display:"flex",width:"100%"},"horizontal"===e.orientation&&{width:"auto",height:"100%"})})),E=(0,c.ZP)("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:function(t,e){return e.wrapperInner}})((function(t){var e=t.ownerState;return(0,i.Z)({width:"100%"},"horizontal"===e.orientation&&{width:"auto",height:"100%"})})),S=a.forwardRef((function(t,e){var n=(0,d.Z)({props:t,name:"MuiCollapse"}),c=n.addEndListener,v=n.children,Z=n.className,S=n.collapsedSize,b=void 0===S?"0px":S,R=n.component,M=n.easing,T=n.in,z=n.onEnter,j=n.onEntered,N=n.onEntering,P=n.onExit,D=n.onExited,L=n.onExiting,I=n.orientation,V=void 0===I?"vertical":I,O=n.style,W=n.timeout,k=void 0===W?p.x9.standard:W,A=n.TransitionComponent,H=void 0===A?u.ZP:A,F=(0,r.Z)(n,x),q=(0,i.Z)({},n,{orientation:V,collapsedSize:b}),B=function(t){var e=t.orientation,n=t.classes,o={root:["root","".concat(e)],entered:["entered"],hidden:["hidden"],wrapper:["wrapper","".concat(e)],wrapperInner:["wrapperInner","".concat(e)]};return(0,l.Z)(o,g,n)}(q),G=(0,h.Z)(),J=a.useRef(),K=a.useRef(null),Q=a.useRef(),U="number"===typeof b?"".concat(b,"px"):b,X="horizontal"===V,Y=X?"width":"height";a.useEffect((function(){return function(){clearTimeout(J.current)}}),[]);var $=a.useRef(null),_=(0,m.Z)(e,$),tt=function(t){return function(e){if(t){var n=$.current;void 0===e?t(n):t(n,e)}}},et=function(){return K.current?K.current[X?"clientWidth":"clientHeight"]:0},nt=tt((function(t,e){K.current&&X&&(K.current.style.position="absolute"),t.style[Y]=U,z&&z(t,e)})),ot=tt((function(t,e){var n=et();K.current&&X&&(K.current.style.position="");var o=(0,f.C)({style:O,timeout:k,easing:M},{mode:"enter"}),r=o.duration,i=o.easing;if("auto"===k){var a=G.transitions.getAutoHeightDuration(n);t.style.transitionDuration="".concat(a,"ms"),Q.current=a}else t.style.transitionDuration="string"===typeof r?r:"".concat(r,"ms");t.style[Y]="".concat(n,"px"),t.style.transitionTimingFunction=i,N&&N(t,e)})),rt=tt((function(t,e){t.style[Y]="auto",j&&j(t,e)})),it=tt((function(t){t.style[Y]="".concat(et(),"px"),P&&P(t)})),at=tt(D),st=tt((function(t){var e=et(),n=(0,f.C)({style:O,timeout:k,easing:M},{mode:"exit"}),o=n.duration,r=n.easing;if("auto"===k){var i=G.transitions.getAutoHeightDuration(e);t.style.transitionDuration="".concat(i,"ms"),Q.current=i}else t.style.transitionDuration="string"===typeof o?o:"".concat(o,"ms");t.style[Y]=U,t.style.transitionTimingFunction=r,L&&L(t)}));return(0,w.jsx)(H,(0,i.Z)({in:T,onEnter:nt,onEntered:rt,onEntering:ot,onExit:it,onExited:at,onExiting:st,addEndListener:function(t){"auto"===k&&(J.current=setTimeout(t,Q.current||0)),c&&c($.current,t)},nodeRef:$,timeout:"auto"===k?null:k},F,{children:function(t,e){return(0,w.jsx)(y,(0,i.Z)({as:R,className:(0,s.Z)(B.root,Z,{entered:B.entered,exited:!T&&"0px"===U&&B.hidden}[t]),style:(0,i.Z)((0,o.Z)({},X?"minWidth":"minHeight",U),O),ownerState:(0,i.Z)({},q,{state:t}),ref:_},e,{children:(0,w.jsx)(C,{ownerState:(0,i.Z)({},q,{state:t}),className:B.wrapper,ref:K,children:(0,w.jsx)(E,{ownerState:(0,i.Z)({},q,{state:t}),className:B.wrapperInner,children:v})})}))}}))}));S.muiSupportAuto=!0;var b=S},33494:function(t,e,n){var o=n(50390).createContext({});e.Z=o},28672:function(t,e,n){var o=n(50390).createContext({});e.Z=o},32680:function(t,e,n){var o=n(50390);e.Z=o.createContext(null)}}]);
//# sourceMappingURL=mui-basic-StepContent.4b9e0c97.chunk.js.map