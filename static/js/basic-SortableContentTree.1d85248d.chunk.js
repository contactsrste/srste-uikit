"use strict";(self.webpackChunksrste=self.webpackChunksrste||[]).push([[389],{51777:function(n,t,e){e.d(t,{fT:function(){return r},jv:function(){return o}});e(27472);var r=function(n){var t={};return Object.keys(n).map((function(e){if("string"==typeof n[e])try{t[e]=JSON.parse(n[e])}catch(r){t[e]=n[e]}})),t},o=function(){return"xxxxyyyyxxxxyyyyxyxyyxyxxyxyyxyx".replace(/[xy]/g,(function(n){var t=16*Math.random()|0;return("x"==n?t:3&t|8).toString(16)}))}},75259:function(n,t,e){e.r(t),e.d(t,{WrappedComponent:function(){return y},dispatchedEvents:function(){return g},props:function(){return m},slots:function(){return w},styles:function(){return x}});var r=e(50390),o=e(2914),i=e(72195),a=e(30455),l=e(96152),s=e(20307),d=e(48786),c=e(55618),p=e(51777),_=e(48421);function f(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var r,o,i,a,l=[],s=!0,d=!1;try{if(i=(e=e.call(n)).next,0===t){if(Object(e)!==e)return;s=!1}else for(;!(s=(r=i.call(e)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(c){d=!0,o=c}finally{try{if(!s&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(d)throw o}}return l}}(n,t)||b(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(n,t){if(n){if("string"===typeof n)return h(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?h(n,t):void 0}}function h(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}var g=[c.F.SORTABLECONTENTTREE_UPDATED],u=function(n,t){var e=f((0,r.useState)(n.items),2),o=e[0],h=e[1],g=f((0,r.useState)(null),2),u=(g[0],g[1],function(n){h((function(t){return n}))}),x=function n(t,e){var r=e||o;if(r){var i,a=function(n,t){var e="undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!e){if(Array.isArray(n)||(e=b(n))||t&&n&&"number"===typeof n.length){e&&(n=e);var r=0,o=function(){};return{s:o,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,l=!1;return{s:function(){e=e.call(n)},n:function(){var n=e.next();return a=n.done,n},e:function(n){l=!0,i=n},f:function(){try{a||null==e.return||e.return()}finally{if(l)throw i}}}}(r);try{for(a.s();!(i=a.n()).done;){var l=i.value;if(l.id===t)return l;if(l.children){var s=n(t,l.children);if(s)return s}}}catch(d){a.e(d)}finally{a.f()}}return null};function m(n,t){var e=null;return function t(r){for(var o=0;o<r.length;o++){var i=r[o];if(i.children){for(var a=0;a<i.children.length;a++){if(i.children[a].id===n)return void(e=i)}t(i.children)}}}(t||o),e}return(0,r.useEffect)((function(){h(n.items)}),[n.items]),r.createElement("div",{style:{height:n.height}},r.createElement(i.ZP,{treeData:o,onChange:function(n){return u(n)},generateNodeProps:function(t){var e=t.node,i=t.path;return{buttons:[r.createElement("div",{style:{width:"30px"}},r.createElement(d.Z,{sx:{width:"30px"},onClick:function(){console.log("Edit",e,i),n.dispatchEvent(c.F.SORTABLECONTENTTREE_EDITNODE,{payload:{id:n.id||n.elementid,nodeId:e.id}})}},"Edit")),r.createElement("div",{style:{width:"30px"}},r.createElement(l.Z,{sx:{width:"30px"},onClick:function(){console.log("Add",e,i);var n=(0,_.Y)(o),t=m(e.id,n);t?(t.children=t.children||[],t.children.push({name:"Empty Slot",label:"Empty Slot",id:(0,p.jv)(),children:[]})):n.push({name:"Empty Slot",label:"Empty Slot",id:(0,p.jv)(),children:[]}),u(n)}},"Add")),r.createElement("div",{style:{width:"30px"}},r.createElement(a.Z,{sx:{width:"30px"},onClick:function(){console.log("Add child",e,i);var n=(0,_.Y)(o),t=x(e.id,n);t.children=e.children||[],t.children.push({name:"Empty Slot",label:"Empty Slot",id:(0,p.jv)(),children:[]}),u(n)}},"Add")),r.createElement("div",{style:{width:"30px"}},r.createElement(s.Z,{sx:{width:"30px"},onClick:function(){console.log("Remove",e,i);var n=(0,_.Y)(o),t=m(e.id,n);t?t.children=t.children.filter((function(n){return n.id!=e.id})):n&&n.children&&(n.children=n.children.filter((function(n){return n.id!=e.id}))),u(n)}},"Remove"))]}}}))},x="\n.sourceLink,\n.sandboxButton {\n  position: fixed;\n  top: 0;\n  right: 0;\n  padding: 130px 50px 5px 50px;\n  font: 10px helvetica, sans-serif;\n  display: inline-block;\n  background: rgb(12, 35, 194);\n  color: #fff;\n  text-decoration: none;\n  -webkit-transform: translate(50%, -50%) rotateZ(45deg);\n          transform: translate(50%, -50%) rotateZ(45deg);\n  -webkit-transition: background 100ms;\n  transition: background 100ms;\n}\n.sourceLink:hover:not(:active) {\n  background: rgb(102, 135, 244);\n}\n\n.sandboxButton {\n  top: 30px;\n  right: 30px;\n  background: rgb(12, 194, 68);\n  padding: 130px 100px 5px 100px;\n  border: none;\n  cursor: pointer;\n  outline: none;\n}\n.sandboxButton:hover:not(:active) {\n  background: rgb(128, 242, 137);\n}\n\n.rst__virtualScrollOverride {\n  overflow: auto !important;\n}\n.rst__virtualScrollOverride * {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n.ReactVirtualized__Grid__innerScrollContainer {\n  overflow: visible !important;\n}\n\n.rst__rtl .ReactVirtualized__Grid__innerScrollContainer {\n  direction: rtl;\n}\n\n.ReactVirtualized__Grid {\n  outline: none;\n}\n\n.rst__placeholder {\n    position: relative;\n    height: 68px;\n    max-width: 300px;\n    padding: 10px;\n  }\n  .rst__placeholder,\n  .rst__placeholder > * {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n  }\n  .rst__placeholder::before {\n    border: 3px dashed #d9d9d9;\n    content: '';\n    position: absolute;\n    top: 5px;\n    right: 5px;\n    bottom: 5px;\n    left: 5px;\n    z-index: -1;\n  }\n  \n  .rst__placeholderLandingPad,\n  .rst__placeholderCancelPad {\n    border: none !important;\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n    outline: none !important;\n  }\n  .rst__placeholderLandingPad *,\n  .rst__placeholderCancelPad * {\n    opacity: 0 !important;\n  }\n  .rst__placeholderLandingPad::before,\n  .rst__placeholderCancelPad::before {\n    background-color: lightblue;\n    border-color: white;\n  }\n\n  .rst__placeholderCancelPad::before {\n    background-color: #e6a8ad;\n  }\n\n  .rst__rowWrapper {\n    padding: 10px 10px 10px 0;\n    height: 100%;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n  }\n  \n  .rst__rtl.rst__rowWrapper {\n    padding: 10px 0 10px 10px;\n  }\n  \n  .rst__row {\n    height: 100%;\n    white-space: nowrap;\n    display: -ms-flexbox;\n    display: flex;\n  }\n  .rst__row > * {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n  }\n  \n  .rst__rowLandingPad,\n  .rst__rowCancelPad {\n    border: none !important;\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n    outline: none !important;\n  }\n  .rst__rowLandingPad > *,\n  .rst__rowCancelPad > * {\n    opacity: 0 !important;\n  }\n  .rst__rowLandingPad::before,\n  .rst__rowCancelPad::before {\n    background-color: lightblue;\n    border: 3px dashed white;\n    content: '';\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: -1;\n  }\n\n  .rst__rowCancelPad::before {\n    background-color: #e6a8ad;\n  }\n  \n  .rst__rowSearchMatch {\n    outline: solid 3px #0080ff;\n  }\n\n  .rst__rowSearchFocus {\n    outline: solid 3px #fc6421;\n  }\n  \n  .rst__rowContents,\n  .rst__rowLabel,\n  .rst__rowToolbar,\n  .rst__moveHandle,\n  .rst__toolbarButton {\n    display: inline-block;\n    vertical-align: middle;\n  }\n  \n  .rst__rowContents {\n    position: relative;\n    height: 100%;\n    border: solid #bbb 1px;\n    border-left: none;\n    -webkit-box-shadow: 0 2px 2px -2px;\n            box-shadow: 0 2px 2px -2px;\n    padding: 0 5px 0 10px;\n    border-radius: 2px;\n    min-width: 230px;\n    -ms-flex: 1 0 auto;\n        flex: 1 0 auto;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-pack: justify;\n        justify-content: space-between;\n    background-color: white;\n  }\n  \n  .rst__rtl.rst__rowContents {\n    border-right: none;\n    border-left: solid #bbb 1px;\n    padding: 0 10px 0 5px;\n  }\n  \n  .rst__rowContentsDragDisabled {\n    border-left: solid #bbb 1px;\n  }\n  \n  .rst__rtl.rst__rowContentsDragDisabled {\n    border-right: solid #bbb 1px;\n    border-left: solid #bbb 1px;\n  }\n  \n  .rst__rowLabel {\n    -ms-flex: 0 1 auto;\n        flex: 0 1 auto;\n    padding-right: 20px;\n  }\n  .rst__rtl.rst__rowLabel {\n    padding-left: 20px;\n    padding-right: inherit;\n  }\n  \n  .rst__rowToolbar {\n    -ms-flex: 0 1 auto;\n        flex: 0 1 auto;\n    display: -ms-flexbox;\n    display: flex;\n  }\n  \n  .rst__moveHandle,\n  .rst__loadingHandle {\n    height: 100%;\n    width: 44px;\n    background: #d9d9d9\n      url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MiIgaGVpZ2h0PSI0MiI+PGcgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9IjIuOSIgPjxwYXRoIGQ9Ik0xNCAxNS43aDE0LjQiLz48cGF0aCBkPSJNMTQgMjEuNGgxNC40Ii8+PHBhdGggZD0iTTE0IDI3LjFoMTQuNCIvPjwvZz4KPC9zdmc+')\n      no-repeat center;\n    border: solid #aaa 1px;\n    -webkit-box-shadow: 0 2px 2px -2px;\n            box-shadow: 0 2px 2px -2px;\n    cursor: move;\n    border-radius: 1px;\n    z-index: 1;\n  }\n  \n  .rst__loadingHandle {\n    cursor: default;\n    background: #d9d9d9;\n  }\n  \n  @-webkit-keyframes pointFade {\n    0%,\n    19.999%,\n    100% {\n      opacity: 0;\n    }\n    20% {\n      opacity: 1;\n    }\n  }\n  \n  @keyframes pointFade {\n    0%,\n    19.999%,\n    100% {\n      opacity: 0;\n    }\n    20% {\n      opacity: 1;\n    }\n  }\n  \n  .rst__loadingCircle {\n    width: 80%;\n    height: 80%;\n    margin: 10%;\n    position: relative;\n  }\n  \n  .rst__loadingCirclePoint {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n  }\n  \n  .rst__rtl.rst__loadingCirclePoint {\n    right: 0;\n    left: initial;\n  }\n  \n  .rst__loadingCirclePoint::before {\n    content: '';\n    display: block;\n    margin: 0 auto;\n    width: 11%;\n    height: 30%;\n    background-color: #fff;\n    border-radius: 30%;\n    -webkit-animation: pointFade 800ms infinite ease-in-out both;\n            animation: pointFade 800ms infinite ease-in-out both;\n  }\n  .rst__loadingCirclePoint:nth-of-type(1) {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  .rst__loadingCirclePoint:nth-of-type(7) {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n  }\n  .rst__loadingCirclePoint:nth-of-type(1)::before,\n  .rst__loadingCirclePoint:nth-of-type(7)::before {\n    -webkit-animation-delay: -800ms;\n            animation-delay: -800ms;\n  }\n  .rst__loadingCirclePoint:nth-of-type(2) {\n    -webkit-transform: rotate(30deg);\n            transform: rotate(30deg);\n  }\n  .rst__loadingCirclePoint:nth-of-type(8) {\n    -webkit-transform: rotate(210deg);\n            transform: rotate(210deg);\n  }\n  .rst__loadingCirclePoint:nth-of-type(2)::before,\n  .rst__loadingCirclePoint:nth-of-type(8)::before {\n    -webkit-animation-delay: -666ms;\n            animation-delay: -666ms;\n  }\n  .rst__loadingCirclePoint:nth-of-type(3) {\n    -webkit-transform: rotate(60deg);\n            transform: rotate(60deg);\n  }\n  .rst__loadingCirclePoint:nth-of-type(9) {\n    -webkit-transform: rotate(240deg);\n            transform: rotate(240deg);\n  }\n  .rst__loadingCirclePoint:nth-of-type(3)::before,\n  .rst__loadingCirclePoint:nth-of-type(9)::before {\n    -webkit-animation-delay: -533ms;\n            animation-delay: -533ms;\n  }\n  .rst__loadingCirclePoint:nth-of-type(4) {\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg);\n  }\n  .rst__loadingCirclePoint:nth-of-type(10) {\n    -webkit-transform: rotate(270deg);\n            transform: rotate(270deg);\n  }\n  .rst__loadingCirclePoint:nth-of-type(4)::before,\n  .rst__loadingCirclePoint:nth-of-type(10)::before {\n    -webkit-animation-delay: -400ms;\n            animation-delay: -400ms;\n  }\n  .rst__loadingCirclePoint:nth-of-type(5) {\n    -webkit-transform: rotate(120deg);\n            transform: rotate(120deg);\n  }\n  .rst__loadingCirclePoint:nth-of-type(11) {\n    -webkit-transform: rotate(300deg);\n            transform: rotate(300deg);\n  }\n  .rst__loadingCirclePoint:nth-of-type(5)::before,\n  .rst__loadingCirclePoint:nth-of-type(11)::before {\n    -webkit-animation-delay: -266ms;\n            animation-delay: -266ms;\n  }\n  .rst__loadingCirclePoint:nth-of-type(6) {\n    -webkit-transform: rotate(150deg);\n            transform: rotate(150deg);\n  }\n  .rst__loadingCirclePoint:nth-of-type(12) {\n    -webkit-transform: rotate(330deg);\n            transform: rotate(330deg);\n  }\n  .rst__loadingCirclePoint:nth-of-type(6)::before,\n  .rst__loadingCirclePoint:nth-of-type(12)::before {\n    -webkit-animation-delay: -133ms;\n            animation-delay: -133ms;\n  }\n  .rst__loadingCirclePoint:nth-of-type(7) {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n  }\n  .rst__loadingCirclePoint:nth-of-type(13) {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n  .rst__loadingCirclePoint:nth-of-type(7)::before,\n  .rst__loadingCirclePoint:nth-of-type(13)::before {\n    -webkit-animation-delay: 0ms;\n            animation-delay: 0ms;\n  }\n  \n  .rst__rowTitle {\n    font-weight: bold;\n  }\n  \n  .rst__rowTitleWithSubtitle {\n    font-size: 85%;\n    display: block;\n    height: 0.8rem;\n  }\n  \n  .rst__rowSubtitle {\n    font-size: 70%;\n    line-height: 1;\n  }\n  \n  .rst__collapseButton,\n  .rst__expandButton {\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n    border: none;\n    position: absolute;\n    border-radius: 100%;\n    -webkit-box-shadow: 0 0 0 1px #000;\n            box-shadow: 0 0 0 1px #000;\n    width: 16px;\n    height: 16px;\n    padding: 0;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    cursor: pointer;\n  }\n  .rst__rtl.rst__collapseButton,\n  .rst__rtl.rst__expandButton {\n    -webkit-transform: translate(50%, -50%);\n            transform: translate(50%, -50%);\n  }\n  .rst__collapseButton:focus,\n  .rst__expandButton:focus {\n    outline: none;\n    -webkit-box-shadow: 0 0 0 1px #000, 0 0 1px 3px #83bef9;\n            box-shadow: 0 0 0 1px #000, 0 0 1px 3px #83bef9;\n  }\n  .rst__collapseButton:hover:not(:active),\n  .rst__expandButton:hover:not(:active) {\n    background-size: 24px;\n    height: 20px;\n    width: 20px;\n  }\n  \n  .rst__collapseButton {\n    background: #fff\n      url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCI+PGNpcmNsZSBjeD0iOSIgY3k9IjkiIHI9IjgiIGZpbGw9IiNGRkYiLz48ZyBzdHJva2U9IiM5ODk4OTgiIHN0cm9rZS13aWR0aD0iMS45IiA+PHBhdGggZD0iTTQuNSA5aDkiLz48L2c+Cjwvc3ZnPg==')\n      no-repeat center;\n  }\n  \n  .rst__expandButton {\n    background: #fff\n      url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCI+PGNpcmNsZSBjeD0iOSIgY3k9IjkiIHI9IjgiIGZpbGw9IiNGRkYiLz48ZyBzdHJva2U9IiM5ODk4OTgiIHN0cm9rZS13aWR0aD0iMS45IiA+PHBhdGggZD0iTTQuNSA5aDkiLz48cGF0aCBkPSJNOSA0LjV2OSIvPjwvZz4KPC9zdmc+')\n      no-repeat center;\n  }\n\n  .rst__lineChildren {\n    height: 100%;\n    display: inline-block;\n    position: absolute;\n  }\n  .rst__lineChildren::after {\n    content: '';\n    position: absolute;\n    background-color: black;\n    width: 1px;\n    left: 50%;\n    bottom: 0;\n    height: 10px;\n  }\n  \n  .rst__rtl.rst__lineChildren::after {\n    right: 50%;\n    left: initial;\n  }\n\n  .rst__node {\n    min-width: 100%;\n    white-space: nowrap;\n    position: relative;\n    text-align: left;\n  }\n  \n  .rst__node.rst__rtl {\n    text-align: right;\n  }\n  \n  .rst__nodeContent {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n  }\n  \n  .rst__lineBlock,\n  .rst__absoluteLineBlock {\n    height: 100%;\n    position: relative;\n    display: inline-block;\n  }\n  \n  .rst__absoluteLineBlock {\n    position: absolute;\n    top: 0;\n  }\n  \n  .rst__lineHalfHorizontalRight::before,\n  .rst__lineFullVertical::after,\n  .rst__lineHalfVerticalTop::after,\n  .rst__lineHalfVerticalBottom::after {\n    position: absolute;\n    content: '';\n    background-color: black;\n  }\n  \n  .rst__lineHalfHorizontalRight::before {\n    height: 1px;\n    top: 50%;\n    right: 0;\n    width: 50%;\n  }\n  \n  .rst__rtl.rst__lineHalfHorizontalRight::before {\n    left: 0;\n    right: initial;\n  }\n\n  .rst__lineFullVertical::after,\n  .rst__lineHalfVerticalTop::after,\n  .rst__lineHalfVerticalBottom::after {\n    width: 1px;\n    left: 50%;\n    top: 0;\n    height: 100%;\n  }\n  \n  .rst__rtl.rst__lineFullVertical::after,\n  .rst__rtl.rst__lineHalfVerticalTop::after,\n  .rst__rtl.rst__lineHalfVerticalBottom::after {\n    right: 50%;\n    left: initial;\n  }\n  \n  .rst__lineHalfVerticalTop::after {\n    height: 50%;\n  }\n  \n  .rst__lineHalfVerticalBottom::after {\n    top: auto;\n    bottom: 0;\n    height: 50%;\n  }\n\n.rst__highlightLineVertical {\n    z-index: 3;\n}\n.rst__highlightLineVertical::before {\n    position: absolute;\n    content: '';\n    background-color: #36c2f6;\n    width: 8px;\n    margin-left: -4px;\n    left: 50%;\n    top: 0;\n    height: 100%;\n}\n\n.rst__rtl.rst__highlightLineVertical::before {\n    margin-left: initial;\n    margin-right: -4px;\n    left: initial;\n    right: 50%;\n}\n\n@-webkit-keyframes arrow-pulse {\n    0% {\n        -webkit-transform: translate(0, 0);\n                transform: translate(0, 0);\n        opacity: 0;\n    }\n    30% {\n        -webkit-transform: translate(0, 300%);\n                transform: translate(0, 300%);\n        opacity: 1;\n    }\n    70% {\n        -webkit-transform: translate(0, 700%);\n                transform: translate(0, 700%);\n        opacity: 1;\n    }\n    100% {\n        -webkit-transform: translate(0, 1000%);\n                transform: translate(0, 1000%);\n        opacity: 0;\n    }\n}\n\n@keyframes arrow-pulse {\n    0% {\n        -webkit-transform: translate(0, 0);\n                transform: translate(0, 0);\n        opacity: 0;\n    }\n    30% {\n        -webkit-transform: translate(0, 300%);\n                transform: translate(0, 300%);\n        opacity: 1;\n    }\n    70% {\n        -webkit-transform: translate(0, 700%);\n                transform: translate(0, 700%);\n        opacity: 1;\n    }\n    100% {\n        -webkit-transform: translate(0, 1000%);\n                transform: translate(0, 1000%);\n        opacity: 0;\n    }\n}\n.rst__highlightLineVertical::after {\ncontent: '';\nposition: absolute;\nheight: 0;\nmargin-left: -4px;\nleft: 50%;\ntop: 0;\nborder-left: 4px solid transparent;\nborder-right: 4px solid transparent;\nborder-top: 4px solid white;\n-webkit-animation: arrow-pulse 1s infinite linear both;\n        animation: arrow-pulse 1s infinite linear both;\n}\n\n.rst__rtl.rst__highlightLineVertical::after {\nmargin-left: initial;\nmargin-right: -4px;\nright: 50%;\nleft: initial;\n}\n\n.rst__highlightTopLeftCorner::before {\n    z-index: 3;\n    content: '';\n    position: absolute;\n    border-top: solid 8px #36c2f6;\n    border-left: solid 8px #36c2f6;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    height: calc(50% + 4px);\n    top: 50%;\n    margin-top: -4px;\n    right: 0;\n    width: calc(50% + 4px);\n}\n\n.rst__rtl.rst__highlightTopLeftCorner::before {\n    border-right: solid 8px #36c2f6;\n    border-left: none;\n    left: 0;\n    right: initial;\n}\n  \n.rst__highlightBottomLeftCorner {\n    z-index: 3;\n}\n.rst__highlightBottomLeftCorner::before {\n    content: '';\n    position: absolute;\n    border-bottom: solid 8px #36c2f6;\n    border-left: solid 8px #36c2f6;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    height: calc(100% + 4px);\n    top: 0;\n    right: 12px;\n    width: calc(50% - 8px);\n}\n\n.rst__rtl.rst__highlightBottomLeftCorner::before {\n    border-right: solid 8px #36c2f6;\n    border-left: none;\n    left: 12px;\n    right: initial;\n}\n\n.rst__highlightBottomLeftCorner::after {\n    content: '';\n    position: absolute;\n    height: 0;\n    right: 0;\n    top: 100%;\n    margin-top: -12px;\n    border-top: 12px solid transparent;\n    border-bottom: 12px solid transparent;\n    border-left: 12px solid #36c2f6;\n}\n\n.rst__rtl.rst__highlightBottomLeftCorner::after {\n    left: 0;\n    right: initial;\n    border-right: 12px solid #36c2f6;\n    border-left: none;\n}\n\n.ReactVirtualized__Collection {\n}\n\n.ReactVirtualized__Collection__innerScrollContainer {\n}\n\n.ReactVirtualized__Grid {\n}\n\n.ReactVirtualized__Grid__innerScrollContainer {\n}\n\n.ReactVirtualized__Table {\n}\n\n.ReactVirtualized__Table__Grid {\n}\n\n.ReactVirtualized__Table__headerRow {\n  font-weight: 700;\n  text-transform: uppercase;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-align: center;\n      align-items: center;\n}\n.ReactVirtualized__Table__row {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-align: center;\n      align-items: center;\n}\n\n.ReactVirtualized__Table__headerTruncatedText {\n  display: inline-block;\n  max-width: 100%;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.ReactVirtualized__Table__headerColumn,\n.ReactVirtualized__Table__rowColumn {\n  margin-right: 10px;\n  min-width: 0px;\n}\n.ReactVirtualized__Table__rowColumn {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.ReactVirtualized__Table__headerColumn:first-of-type,\n.ReactVirtualized__Table__rowColumn:first-of-type {\n  margin-left: 10px;\n}\n.ReactVirtualized__Table__sortableHeaderColumn {\n  cursor: pointer;\n}\n\n.ReactVirtualized__Table__sortableHeaderIconContainer {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n}\n.ReactVirtualized__Table__sortableHeaderIcon {\n  -ms-flex: 0 0 24px;\n      flex: 0 0 24px;\n  height: 1em;\n  width: 1em;\n  fill: currentColor;\n}\n\n.ReactVirtualized__List {\n}\n\n#root[hidden],\n#docs-root[hidden] {\n    display: none !important;\n}\n\n",m=[{name:"items",defaultValue:[],type:"object"},{name:"height",defaultValue:"400px",type:"string"}],w=[],y=(0,o.Z)(r.forwardRef(u),m)}}]);
//# sourceMappingURL=basic-SortableContentTree.1d85248d.chunk.js.map