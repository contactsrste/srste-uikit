(self.webpackChunksrste=self.webpackChunksrste||[]).push([[3776],{85518:function(t,r,e){"use strict";e.r(r),e.d(r,{WrappedComponent:function(){return h},dispatchedEvents:function(){return a},props:function(){return p},slots:function(){return f},styles:function(){return l}});var n=e(50390),o=e(2914),i=(e(55618),e(27472));function s(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,o,i,s,u=[],a=!0,c=!1;try{if(i=(e=e.call(t)).next,0===r){if(Object(e)!==e)return;a=!1}else for(;!(a=(n=i.call(e)).done)&&(u.push(n.value),u.length!==r);a=!0);}catch(l){c=!0,o=l}finally{try{if(!a&&null!=e.return&&(s=e.return(),Object(s)!==s))return}finally{if(c)throw o}}return u}}(t,r)||function(t,r){if(!t)return;if("string"===typeof t)return u(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return u(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}var a=[],c=function(t,r){var e=s((0,n.useState)([]),2),o=e[0],u=e[1],a=s((0,n.useState)({}),2),c=a[0],l=a[1],p=s((0,n.useState)({}),2),f=p[0],h=p[1];return(0,n.useEffect)((function(){var t=localStorage.getItem("srsPageData");(t=(0,i.decompressFromBase64)(t))?(t=JSON.parse(t),u(t.contents),l(t.context),h(t.functions)):u([])}),[]),n.createElement("srs-widget",{ts:Date.now()+"",styles:JSON.stringify({minHeight:"fit-content",maxHeight:"unset",margin:"5px",overflow:"auto"}),ref:function(r){r&&(r.elementid="preview_1",r.widgetid="preview_1",r.widgetcontents=o,r.widgetcontext=c,r.widgetfunctions=f,r.theme=t.theme)},name:"preview_1"})},l="\n  /* Custom styles for the Accordion component */\n",p=[],f=[],h=(0,o.Z)(n.forwardRef(c),p,"mui",["srs-widget"])},27472:function(t,r,e){var n,o=function(){var t=String.fromCharCode,r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",n={};function o(t,r){if(!n[t]){n[t]={};for(var e=0;e<t.length;e++)n[t][t.charAt(e)]=e}return n[t][r]}var i={compressToBase64:function(t){if(null==t)return"";var e=i._compress(t,6,(function(t){return r.charAt(t)}));switch(e.length%4){default:case 0:return e;case 1:return e+"===";case 2:return e+"==";case 3:return e+"="}},decompressFromBase64:function(t){return null==t?"":""==t?null:i._decompress(t.length,32,(function(e){return o(r,t.charAt(e))}))},compressToUTF16:function(r){return null==r?"":i._compress(r,15,(function(r){return t(r+32)}))+" "},decompressFromUTF16:function(t){return null==t?"":""==t?null:i._decompress(t.length,16384,(function(r){return t.charCodeAt(r)-32}))},compressToUint8Array:function(t){for(var r=i.compress(t),e=new Uint8Array(2*r.length),n=0,o=r.length;n<o;n++){var s=r.charCodeAt(n);e[2*n]=s>>>8,e[2*n+1]=s%256}return e},decompressFromUint8Array:function(r){if(null===r||void 0===r)return i.decompress(r);for(var e=new Array(r.length/2),n=0,o=e.length;n<o;n++)e[n]=256*r[2*n]+r[2*n+1];var s=[];return e.forEach((function(r){s.push(t(r))})),i.decompress(s.join(""))},compressToEncodedURIComponent:function(t){return null==t?"":i._compress(t,6,(function(t){return e.charAt(t)}))},decompressFromEncodedURIComponent:function(t){return null==t?"":""==t?null:(t=t.replace(/ /g,"+"),i._decompress(t.length,32,(function(r){return o(e,t.charAt(r))})))},compress:function(r){return i._compress(r,16,(function(r){return t(r)}))},_compress:function(t,r,e){if(null==t)return"";var n,o,i,s={},u={},a="",c="",l="",p=2,f=3,h=2,d=[],m=0,v=0;for(i=0;i<t.length;i+=1)if(a=t.charAt(i),Object.prototype.hasOwnProperty.call(s,a)||(s[a]=f++,u[a]=!0),c=l+a,Object.prototype.hasOwnProperty.call(s,c))l=c;else{if(Object.prototype.hasOwnProperty.call(u,l)){if(l.charCodeAt(0)<256){for(n=0;n<h;n++)m<<=1,v==r-1?(v=0,d.push(e(m)),m=0):v++;for(o=l.charCodeAt(0),n=0;n<8;n++)m=m<<1|1&o,v==r-1?(v=0,d.push(e(m)),m=0):v++,o>>=1}else{for(o=1,n=0;n<h;n++)m=m<<1|o,v==r-1?(v=0,d.push(e(m)),m=0):v++,o=0;for(o=l.charCodeAt(0),n=0;n<16;n++)m=m<<1|1&o,v==r-1?(v=0,d.push(e(m)),m=0):v++,o>>=1}0==--p&&(p=Math.pow(2,h),h++),delete u[l]}else for(o=s[l],n=0;n<h;n++)m=m<<1|1&o,v==r-1?(v=0,d.push(e(m)),m=0):v++,o>>=1;0==--p&&(p=Math.pow(2,h),h++),s[c]=f++,l=String(a)}if(""!==l){if(Object.prototype.hasOwnProperty.call(u,l)){if(l.charCodeAt(0)<256){for(n=0;n<h;n++)m<<=1,v==r-1?(v=0,d.push(e(m)),m=0):v++;for(o=l.charCodeAt(0),n=0;n<8;n++)m=m<<1|1&o,v==r-1?(v=0,d.push(e(m)),m=0):v++,o>>=1}else{for(o=1,n=0;n<h;n++)m=m<<1|o,v==r-1?(v=0,d.push(e(m)),m=0):v++,o=0;for(o=l.charCodeAt(0),n=0;n<16;n++)m=m<<1|1&o,v==r-1?(v=0,d.push(e(m)),m=0):v++,o>>=1}0==--p&&(p=Math.pow(2,h),h++),delete u[l]}else for(o=s[l],n=0;n<h;n++)m=m<<1|1&o,v==r-1?(v=0,d.push(e(m)),m=0):v++,o>>=1;0==--p&&(p=Math.pow(2,h),h++)}for(o=2,n=0;n<h;n++)m=m<<1|1&o,v==r-1?(v=0,d.push(e(m)),m=0):v++,o>>=1;for(;;){if(m<<=1,v==r-1){d.push(e(m));break}v++}return d.join("")},decompress:function(t){return null==t?"":""==t?null:i._decompress(t.length,32768,(function(r){return t.charCodeAt(r)}))},_decompress:function(r,e,n){var o,i,s,u,a,c,l,p=[],f=4,h=4,d=3,m="",v=[],w={val:n(0),position:e,index:1};for(o=0;o<3;o+=1)p[o]=o;for(s=0,a=Math.pow(2,2),c=1;c!=a;)u=w.val&w.position,w.position>>=1,0==w.position&&(w.position=e,w.val=n(w.index++)),s|=(u>0?1:0)*c,c<<=1;switch(s){case 0:for(s=0,a=Math.pow(2,8),c=1;c!=a;)u=w.val&w.position,w.position>>=1,0==w.position&&(w.position=e,w.val=n(w.index++)),s|=(u>0?1:0)*c,c<<=1;l=t(s);break;case 1:for(s=0,a=Math.pow(2,16),c=1;c!=a;)u=w.val&w.position,w.position>>=1,0==w.position&&(w.position=e,w.val=n(w.index++)),s|=(u>0?1:0)*c,c<<=1;l=t(s);break;case 2:return""}for(p[3]=l,i=l,v.push(l);;){if(w.index>r)return"";for(s=0,a=Math.pow(2,d),c=1;c!=a;)u=w.val&w.position,w.position>>=1,0==w.position&&(w.position=e,w.val=n(w.index++)),s|=(u>0?1:0)*c,c<<=1;switch(l=s){case 0:for(s=0,a=Math.pow(2,8),c=1;c!=a;)u=w.val&w.position,w.position>>=1,0==w.position&&(w.position=e,w.val=n(w.index++)),s|=(u>0?1:0)*c,c<<=1;p[h++]=t(s),l=h-1,f--;break;case 1:for(s=0,a=Math.pow(2,16),c=1;c!=a;)u=w.val&w.position,w.position>>=1,0==w.position&&(w.position=e,w.val=n(w.index++)),s|=(u>0?1:0)*c,c<<=1;p[h++]=t(s),l=h-1,f--;break;case 2:return v.join("")}if(0==f&&(f=Math.pow(2,d),d++),p[l])m=p[l];else{if(l!==h)return null;m=i+i.charAt(0)}v.push(m),p[h++]=i+m.charAt(0),i=m,0==--f&&(f=Math.pow(2,d),d++)}}};return i}();void 0===(n=function(){return o}.call(r,e,r,t))||(t.exports=n)}}]);
//# sourceMappingURL=builder-PagePreview.db984fee.chunk.js.map