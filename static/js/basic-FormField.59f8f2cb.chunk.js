"use strict";(self.webpackChunksrste=self.webpackChunksrste||[]).push([[1013],{35307:function(e,t,a){a.r(t),a.d(t,{WrappedComponent:function(){return E},dispatchedEvents:function(){return p},props:function(){return g},slots:function(){return N},styles:function(){return b}});var r=a(50390),n=a(40109),o=a(55618),u=a(2914);function i(e){return function(e){if(Array.isArray(e))return y(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||d(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t,a){return(t=function(e){var t=function(e,t){if("object"!==f(e)||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,t||"default");if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===f(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var r,n,o,u,i=[],l=!0,c=!1;try{if(o=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;l=!1}else for(;!(l=(r=o.call(a)).done)&&(i.push(r.value),i.length!==t);l=!0);}catch(s){c=!0,n=s}finally{try{if(!l&&null!=a.return&&(u=a.return(),Object(u)!==u))return}finally{if(c)throw n}}return i}}(e,t)||d(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){if(e){if("string"===typeof e)return y(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?y(e,t):void 0}}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var p=[],v=function(e,t){var a=m((0,r.useState)({type:e.type,name:e.name}),2),u=a[0],l=a[1],s=m((0,r.useState)(!1),2),d=s[0],y=s[1],p=m((0,r.useState)(!1),2),v=p[0],b=p[1];(0,r.useEffect)((function(){if(t.current){var a=function(e){var t,a={valueChangeEventName:"",tagName:""};switch(e.data&&Object.keys(e.data).map((function(t){"object"==f(e.data[t])?a[t]=JSON.stringify(e.data[t]):a[t]=e.data[t]})),e.type){case"input":a.valueChangeEventName=o.F.INPUT_CHANGED,a.tagName="srs-input";break;case"toggle":a.valueChangeEventName=o.F.TOGGLE_CHANGED,a.tagName="srs-toggle";break;case"dropdown":a.valueChangeEventName=o.F.DROPDOWN_CHANGED,a.tagName="srs-dropdown";break;case"radio":a.valueChangeEventName=o.F.RADIO_CHECKED,a.tagName="srs-radiobutton";break;case"select":a.valueChangeEventName=o.F.SELECT_CHANGED,a.tagName="srs-select";var r=e.formData&&e.formData[e.fieldName]?e.formData[e.fieldName].value:(null===(t=e.data)||void 0===t?void 0:t.selected)||[];a.selected=JSON.stringify(r);break;case"textarea":a.valueChangeEventName=o.F.TEXTAREA_CHANGED,a.tagName="srs-textarea";break;case"datetime":a.valueChangeEventName=o.F.DATETIME_CHANGED,a.tagName="srs-datetime";break;case"time":a.valueChangeEventName=o.F.TIME_CHANGED,a.tagName="srs-time";break;case"typeahead":a.valueChangeEventName=o.F.TYPEAHEAD_CHANGED,a.tagName="srs-typeahead";break;case"checkbox":a.valueChangeEventName=o.F.CHECKBOX_CHANGED,a.tagName="srs-checkbox";break;case"fileupload":a.valueChangeEventName=o.F.FILE_UPLOADED,a.tagName="srs-fileupload";break;case"contenttree":a.tagName="srs-contenttree";break;case"codeeditor":a.tagName="srs-codeeditor";break;default:a.valueChangeEventName=e.value_changed_event,a.tagName=e.tag_name}return a}({fieldName:e.name,type:e.type,data:e.data||{},formData:e.form_data||{}});l(a),(0,n.z)([a.tagName]).then((function(){return y(!0)})),t.current&&e.type&&!v&&(t.current.addEventListener(a.valueChangeEventName,(function(t){var a=t.detail;a.payload&&(a=a.payload).hasOwnProperty("value")&&(a=a.value),e.dispatchEvent(o.F.FORM_FIELD_VALUE_CHANGED,{payload:{value:a,fieldName:e.name,fieldType:e.type}})})),b(!0));for(var r=t.current;11!=r.nodeType;)r=r.parentNode;var u=r.host,i=u.closest(".element-container");i?(i.style.flexBasis="".concat(100*e.width_fraction,"%"),i.style.padding="5px"):(u.style.flexBasis="".concat(100*e.width_fraction,"%"),u.style.padding="5px")}}),[e.width_fraction,e.type,e.name,e.data,e.form_data]);var g=null;if(u.tagName&&d){var N=e.form_data&&e.form_data[e.name]?e.form_data[e.name].value:e.value;g=r.createElement(u.tagName,c(c({},u),{},{key:e.elementId||e.name,elementid:e.elementId||e.name,value:N,ref:function(t){t&&(t.context=c(c({},e.context),{},{form:c({},e.form_data)}),t.clan=i(e.clan))}}))}return g},b="\n    \n",g=[{name:"name",defaultValue:"",type:"string"},{name:"type",defaultValue:"",type:"string"},{name:"width_fraction",defaultValue:.5,type:"number"},{name:"data",defaultValue:{},type:"object"},{name:"form_data",defaultValue:{},type:"object"}],N=[],E=(0,u.Z)(r.forwardRef(v),g)}}]);
//# sourceMappingURL=basic-FormField.59f8f2cb.chunk.js.map