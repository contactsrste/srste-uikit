"use strict";(self.webpackChunksrste=self.webpackChunksrste||[]).push([[5047],{4608:function(e,t,n){n.r(t),n.d(t,{WrappedComponent:function(){return m},dispatchedEvents:function(){return d},props:function(){return p},slots:function(){return v},styles:function(){return h}});var r=n(1413),o=n(29439),c=n(50390),s=n(33385),a=n(37881),i=(n(77140),n(62559));var u=function(e,t){var n=(0,c.useState)(e.clan||[]),r=(0,o.Z)(n,2),a=(r[0],r[1]),u=(0,c.useState)(e.context||{}),d=(0,o.Z)(u,2),h=(d[0],d[1]),p=(0,c.useState)(e.theme||"g90"),v=(0,o.Z)(p,2),m=(v[0],v[1]),b=(0,c.useState)(!1),g=(0,o.Z)(b,2),x=g[0],E=g[1],k=(0,c.useState)(!1),y=(0,o.Z)(k,2),S=y[0],w=y[1],Z=(0,c.useState)((0,s.e)(e.clan)||[]),j=(0,o.Z)(Z,2),O=j[0],C=j[1],H=(0,c.useState)({}),R=(0,o.Z)(H,2),I=(R[0],R[1]),T=(0,c.useRef)(null);(0,c.useEffect)((function(){a(e.clan),h(e.context),m(e.theme),document.documentElement.setAttribute("data-carbon-theme",e.theme),T.current&&!x&&(E(!0),T.current.addEventListener("RICHTEXT#home",(function(e){console.log(e)})),T.current.addEventListener("HOME#clicked",(function(e){console.log(e)})),T.current.addEventListener("RICHTEXT#about",(function(e){console.log(e)})));var t=(0,s.e)(e.clan);S&&!l(t,O)||(C(t),w(!1),(0,s.z)(t,e.theme).then((function(e){I(e),w(!0)})))}),[e.clan,e.context,e.theme]);var _=(0,i.jsx)("div",{children:" loading... "});return e.clan&&e.clan.length>0&&S&&(_=(0,i.jsxs)("div",{ref:T,"data-carbon-theme":e.theme,style:{backgroundColor:"var(--cds-background)",minHeight:"100vh",maxHeight:"100vh",overflow:"scroll"},children:[(0,i.jsx)("style",{className:"basetheme",children:'@import "./carbon-components.css";  '}),f(e.clan,e.context,e.clan,e.theme)]})),_},l=function(e,t){var n=!1;return e.forEach((function(e){-1==t.indexOf(e)&&(n=!0)})),n},f=function e(t,n,o,c){var s=[];return t&&t.forEach((function(t){if(!t.hasOwnProperty("visible")||t.visible){var a=t.tag,u={};if(t.props){var l=Object.keys(t.props);(l=l.filter((function(e){return"slotname"!=e}))).map((function(e){"string"!==typeof t.props[e]?u[e]=JSON.stringify(t.props[e]):u[e]=t.props[e]})),t.props.slotname&&(u.slot=t.props.slotname)}if(t.overrides){var f,d,h=Object.keys(t.overrides),p=(null===(f=window)||void 0===f||null===(d=f.__SRS__)||void 0===d?void 0:d.functions)||{},v={context:n,clan:o,helper:(0,r.Z)({},p)};h.map((function(e){var n=t.overrides[e];if(n.startsWith("[[")&&n.endsWith("]]")){var r=n.slice(2,-2),o=new Function("api","with(api) { return ".concat(r,"; }"));u[e]=o(v)}}))}var m=e(t.children,n,o,c);s.push((0,i.jsx)(a,{elementid:t.elementId||t.id||t.name,ref:function(e){e&&(Object.keys(u).forEach((function(t){try{e[t]=u[t]}catch(n){console.error(n)}})),e.context=n,e.clan=o,e.theme=c)},children:m},t.elementId||t.name))}})),s},d=[],h="\n    \n",p=[],v=[];t.default=u;var m=(0,a.Z)(c.forwardRef(u),p)}}]);
//# sourceMappingURL=ContentRenderer.22a1ae1e.chunk.js.map