"use strict";(self.webpackChunksrste=self.webpackChunksrste||[]).push([[5209],{75425:function(n,e,t){t.r(e),t.d(e,{WrappedComponent:function(){return d},dispatchedEvents:function(){return i},props:function(){return c},slots:function(){return s},styles:function(){return f}});var r=t(50390),o=t(2914),u=t(12630);function l(){return l=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},l.apply(this,arguments)}var i=[],a=function(n,e){return r.createElement(u.Z,l({},n,{theme:n.muiTheme}),r.createElement("slot",null))},f="\n  /* Custom styles for the MuiPopper component */\n",c=[{name:"anchorEl",defaultValue:null,type:"object"},{name:"open",defaultValue:!1,type:"boolean"},{name:"placement",defaultValue:"bottom-start",type:"string"},{name:"modifiers",defaultValue:[],type:"object"},{name:"sx",defaultValue:{},type:"object"}],s=[{name:"default",allowed:[]}],d=(0,o.Z)(r.forwardRef(a),c,"mui")},15118:function(n,e,t){var r=t(29439),o=t(50390),u=t(86599),l=t(15851),i=t(62752),a=t(65017),f=t(62559);var c=o.forwardRef((function(n,e){var t=n.children,c=n.container,s=n.disablePortal,d=void 0!==s&&s,v=o.useState(null),p=(0,r.Z)(v,2),m=p[0],Z=p[1],y=(0,l.Z)(o.isValidElement(t)?t.ref:null,e);if((0,i.Z)((function(){d||Z(function(n){return"function"===typeof n?n():n}(c)||document.body)}),[c,d]),(0,i.Z)((function(){if(m&&!d)return(0,a.Z)(e,m),function(){(0,a.Z)(e,null)}}),[e,m,d]),d){if(o.isValidElement(t)){var h={ref:y};return o.cloneElement(t,h)}return(0,f.jsx)(o.Fragment,{children:t})}return(0,f.jsx)(o.Fragment,{children:m?u.createPortal(t,m):m})}));e.Z=c},2198:function(n,e,t){t.d(e,{T:function(){return l}});var r=t(50390),o=(t(62559),{disableDefaultClasses:!1}),u=r.createContext(o);function l(n){var e=r.useContext(u).disableDefaultClasses;return function(t){return e?"":n(t)}}},53135:function(n,e,t){t.d(e,{Z:function(){return u}});var r=t(87462),o=t(45193);function u(n,e,t){return void 0===n||(0,o.Z)(n)?e:(0,r.Z)({},e,{ownerState:(0,r.Z)({},e.ownerState,t)})}},16961:function(n,e,t){function r(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(void 0===n)return{};var t={};return Object.keys(n).filter((function(t){return t.match(/^on[A-Z]/)&&"function"===typeof n[t]&&!e.includes(t)})).forEach((function(e){t[e]=n[e]})),t}t.d(e,{Z:function(){return r}})},45193:function(n,e,t){function r(n){return"string"===typeof n}t.d(e,{Z:function(){return r}})},39379:function(n,e,t){function r(n,e){return"function"===typeof n?n(e):n}t.d(e,{Z:function(){return r}})},88113:function(n,e,t){t.d(e,{Z:function(){return d}});var r=t(87462),o=t(63366),u=t(15851),l=t(53135),i=t(44977),a=t(16961);function f(n){if(void 0===n)return{};var e={};return Object.keys(n).filter((function(e){return!(e.match(/^on[A-Z]/)&&"function"===typeof n[e])})).forEach((function(t){e[t]=n[t]})),e}var c=t(39379),s=["elementType","externalSlotProps","ownerState"];function d(n){var e,t=n.elementType,d=n.externalSlotProps,v=n.ownerState,p=(0,o.Z)(n,s),m=(0,c.Z)(d,v),Z=function(n){var e=n.getSlotProps,t=n.additionalProps,o=n.externalSlotProps,u=n.externalForwardedProps,l=n.className;if(!e){var c=(0,i.Z)(null==u?void 0:u.className,null==o?void 0:o.className,l,null==t?void 0:t.className),s=(0,r.Z)({},null==t?void 0:t.style,null==u?void 0:u.style,null==o?void 0:o.style),d=(0,r.Z)({},t,u,o);return c.length>0&&(d.className=c),Object.keys(s).length>0&&(d.style=s),{props:d,internalRef:void 0}}var v=(0,a.Z)((0,r.Z)({},u,o)),p=f(o),m=f(u),Z=e(v),y=(0,i.Z)(null==Z?void 0:Z.className,null==t?void 0:t.className,l,null==u?void 0:u.className,null==o?void 0:o.className),h=(0,r.Z)({},null==Z?void 0:Z.style,null==t?void 0:t.style,null==u?void 0:u.style,null==o?void 0:o.style),b=(0,r.Z)({},Z,t,m,p);return y.length>0&&(b.className=y),Object.keys(h).length>0&&(b.style=h),{props:b,internalRef:Z.ref}}((0,r.Z)({},p,{externalSlotProps:m})),y=Z.props,h=Z.internalRef,b=(0,u.Z)(h,null==m?void 0:m.ref,null==(e=n.additionalProps)?void 0:e.ref);return(0,l.Z)(t,(0,r.Z)({},y,{ref:b}),v)}},11293:function(n,e,t){t.d(e,{Z:function(){return o}});var r=t(42254);function o(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Mui",o={};return e.forEach((function(e){o[e]=(0,r.Z)(n,e,t)})),o}},78241:function(n,e,t){function r(n){return n&&n.ownerDocument||document}t.d(e,{Z:function(){return r}})},65017:function(n,e,t){function r(n,e){"function"===typeof n?n(e):n&&(n.current=e)}t.d(e,{Z:function(){return r}})},62752:function(n,e,t){var r=t(50390),o="undefined"!==typeof window?r.useLayoutEffect:r.useEffect;e.Z=o},15851:function(n,e,t){t.d(e,{Z:function(){return u}});var r=t(50390),o=t(65017);function u(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return r.useMemo((function(){return e.every((function(n){return null==n}))?null:function(n){e.forEach((function(e){(0,o.Z)(e,n)}))}}),e)}}}]);
//# sourceMappingURL=mui-basic-Popper.290c78cd.chunk.js.map