"use strict";(self.webpackChunksrste=self.webpackChunksrste||[]).push([[9671],{95445:function(e,t,r){r.r(t),r.d(t,{WrappedComponent:function(){return h},dispatchedEvents:function(){return d},props:function(){return g},slots:function(){return v},styles:function(){return p}});var n=r(50390),o=r(2914),a=r(95892),l=r(55618),u=r(80992),i=r.n(u);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,l,u=[],i=!0,c=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;i=!1}else for(;!(i=(n=a.call(r)).done)&&(u.push(n.value),u.length!==t);i=!0);}catch(s){c=!0,o=s}finally{try{if(!i&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(c)throw o}}return u}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var d=[],m=function(e,t){var r=s((0,n.useState)(e.open),2),o=r[0],u=r[1],f=s((0,n.useState)([]),2),d=f[0],m=f[1],p=(0,n.useRef)(null),g=e.anchororigin||{vertical:"bottom",horizontal:"left"},v=(e.transformorigin,function(){u(!1),e.dispatchEvent(l.F.POPOVER_CLOSED,{popoverId:e.elementid})}),h=function(t,r){var n,o;((null===r||void 0===r||null===(n=r.detail)||void 0===n||null===(o=n.payload)||void 0===o?void 0:o.popoverId)||"")===e.elementid&&(u(!0),e.dispatchEvent(l.F.POPOVER_OPENED,{popoverId:e.elementid}))};(0,n.useEffect)((function(){var t=i().subscribe("POPOVER_OPEN",h),r=i().subscribe("POPOVER_CLOSED",v),n=[];return e.triggers&&e.triggers.length>0&&e.triggers.forEach((function(e){n.push({source_event:e.source_event,source_element:e.source_element,target:e.target_event||"POPOVER_OPEN",add_to_payload:e.add_to_payload})})),m(n),function(){i().unsubscribe(t),i().unsubscribe(r)}}),[]),(0,n.useEffect)((function(){var t=d;e.triggers&&e.triggers.length>0&&e.triggers.forEach((function(e){var r=d.filter((function(t){return t.source_event===e.source_event&&t.source_element===e.source_element&&(t.target_event||"POPOVER_OPEN")===(e.target_event||"POPOVER_OPEN")}));r&&0!==r.length||t.push({source_event:e.source_event,source_element:e.source_element,target:e.target_event||"POPOVER_OPEN",add_to_payload:e.add_to_payload})})),m(t)}),[e.triggers]);var y=(0,n.useMemo)((function(){var t=null;return d&&d.length>0&&(t=n.createElement("srs-relay",{widgetid:e.widgetid,elementid:e.elementid+"_relay",relaylist:JSON.stringify(d)})),n.createElement(n.Fragment,null,t,n.createElement(a.ZP,c({},e,{open:o,anchorEl:p.current,onClose:v,anchorOrigin:g,theme:e.muiTheme}),n.createElement("slot",{name:"content"})),n.createElement("div",{ref:p},n.createElement("slot",{name:"trigger"})))}),[e,d,o]);return n.createElement(n.Fragment,null,y)},p="\n  /* Custom styles for the MuiPopover component */\n",g=[{name:"open",defaultValue:!1,type:"boolean"},{name:"triggers",defaultValue:[],type:"object"},{name:"anchororigin",defaultValue:{vertical:"bottom",horizontal:"left"},type:"object"},{name:"transformorigin",defaultValue:{vertical:"top",horizontal:"left"},type:"object"},{name:"sx",defaultValue:{},type:"object"}],v=[{name:"default",allowed:[]}],h=(0,o.Z)(n.forwardRef(m),g,"mui")},32680:function(e,t,r){var n=r(50390);t.Z=n.createContext(null)}}]);
//# sourceMappingURL=mui-basic-Popover.367520fb.chunk.js.map