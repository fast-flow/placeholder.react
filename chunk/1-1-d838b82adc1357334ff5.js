webpackJsonp([1],{143:function(e,t,r){"use strict";var n=r(144),o=r(156).default,a=n.createClass({displayName:"App",getInitialState:function(){return{value:""}},render:function(){var e=this;return r(144).createElement("div",null,r(144).createElement(o,{content:"some text",className:"my-placeholder",value:e.state.value},r(144).createElement("input",{type:"text",value:e.state.value,onChange:function(t){e.setState({value:t.target.value})}})),r(144).createElement("hr",null),r(144).createElement(o,{content:"A lot of words, abcdefg 123456",className:"my-placeholder",value:e.state.value},r(144).createElement("input",{type:"text",value:e.state.value,onChange:function(t){e.setState({value:t.target.value})}})),r(144).createElement("hr",null),r(144).createElement(o,{content:"A lot of words, abcdefgsomesome 123456",type:"textarea",className:"my-placeholder",value:e.state.value},r(144).createElement("textarea",{value:e.state.value,onChange:function(t){e.setState({value:t.target.value})}})),r(144).createElement("hr",null),r(144).createElement(o,{content:r(144).createElement("div",null,"img",r(144).createElement("storng",null,":")," ",r(144).createElement("img",{src:"https://fast-flow.github.io/placeholder.react/example/img.jpeg",height:"10"})),className:"my-placeholder",value:e.state.value},r(144).createElement("input",{value:e.state.value,onChange:function(t){e.setState({value:t.target.value})}})))}});e.exports=a},144:function(e,t,r){"use strict";e.exports=r(145)},145:function(e,t,r){"use strict";var n=r(3),o=r(146),a=r(150),i=r(38),l=r(155),u={};i(u,a),i(u,{findDOMNode:l("findDOMNode","ReactDOM","react-dom",n,n.findDOMNode),render:l("render","ReactDOM","react-dom",n,n.render),unmountComponentAtNode:l("unmountComponentAtNode","ReactDOM","react-dom",n,n.unmountComponentAtNode),renderToString:l("renderToString","ReactDOMServer","react-dom/server",o,o.renderToString),renderToStaticMarkup:l("renderToStaticMarkup","ReactDOMServer","react-dom/server",o,o.renderToStaticMarkup)}),u.__SECRET_DOM_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=n,u.__SECRET_DOM_SERVER_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=o,e.exports=u},146:function(e,t,r){"use strict";var n=r(70),o=r(147),a=r(141);n.inject();var i={renderToString:o.renderToString,renderToStaticMarkup:o.renderToStaticMarkup,version:a};e.exports=i},147:function(e,t,r){"use strict";function n(e){i.isValidElement(e)?void 0:m(!1);var t;try{p.injection.injectBatchingStrategy(s);var r=l.createReactRootID();return t=c.getPooled(!1),t.perform(function(){var n=d(e,null),o=n.mountComponent(r,t,f);return u.addChecksumToMarkup(o)},null)}finally{c.release(t),p.injection.injectBatchingStrategy(a)}}function o(e){i.isValidElement(e)?void 0:m(!1);var t;try{p.injection.injectBatchingStrategy(s);var r=l.createReactRootID();return t=c.getPooled(!0),t.perform(function(){var n=d(e,null);return n.mountComponent(r,t,f)},null)}finally{c.release(t),p.injection.injectBatchingStrategy(a)}}var a=r(91),i=r(41),l=r(44),u=r(47),s=r(148),c=r(149),p=r(53),f=r(57),d=r(61),m=r(12);e.exports={renderToString:n,renderToStaticMarkup:o}},148:function(e,t){"use strict";var r={isBatchingUpdates:!1,batchedUpdates:function(e){}};e.exports=r},149:function(e,t,r){"use strict";function n(e){this.reinitializeTransaction(),this.renderToStaticMarkup=e,this.reactMountReady=a.getPooled(null),this.useCreateElement=!1}var o=r(55),a=r(54),i=r(56),l=r(38),u=r(14),s={initialize:function(){this.reactMountReady.reset()},close:u},c=[s],p={getTransactionWrappers:function(){return c},getReactMountReady:function(){return this.reactMountReady},destructor:function(){a.release(this.reactMountReady),this.reactMountReady=null}};l(n.prototype,i.Mixin,p),o.addPoolingTo(n),e.exports=n},150:function(e,t,r){"use strict";var n=r(109),o=r(122),a=r(121),i=r(151),l=r(41),u=(r(152),r(106)),s=r(141),c=r(38),p=r(154),f=l.createElement,d=l.createFactory,m=l.cloneElement,h={Children:{map:n.map,forEach:n.forEach,count:n.count,toArray:n.toArray,only:p},Component:o,createElement:f,cloneElement:m,isValidElement:l.isValidElement,PropTypes:u,createClass:a.createClass,createFactory:d,createMixin:function(e){return e},DOM:i,version:s,__spread:c};e.exports=h},151:function(e,t,r){"use strict";function n(e){return o.createFactory(e)}var o=r(41),a=(r(152),r(153)),i=a({a:"a",abbr:"abbr",address:"address",area:"area",article:"article",aside:"aside",audio:"audio",b:"b",base:"base",bdi:"bdi",bdo:"bdo",big:"big",blockquote:"blockquote",body:"body",br:"br",button:"button",canvas:"canvas",caption:"caption",cite:"cite",code:"code",col:"col",colgroup:"colgroup",data:"data",datalist:"datalist",dd:"dd",del:"del",details:"details",dfn:"dfn",dialog:"dialog",div:"div",dl:"dl",dt:"dt",em:"em",embed:"embed",fieldset:"fieldset",figcaption:"figcaption",figure:"figure",footer:"footer",form:"form",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",head:"head",header:"header",hgroup:"hgroup",hr:"hr",html:"html",i:"i",iframe:"iframe",img:"img",input:"input",ins:"ins",kbd:"kbd",keygen:"keygen",label:"label",legend:"legend",li:"li",link:"link",main:"main",map:"map",mark:"mark",menu:"menu",menuitem:"menuitem",meta:"meta",meter:"meter",nav:"nav",noscript:"noscript",object:"object",ol:"ol",optgroup:"optgroup",option:"option",output:"output",p:"p",param:"param",picture:"picture",pre:"pre",progress:"progress",q:"q",rp:"rp",rt:"rt",ruby:"ruby",s:"s",samp:"samp",script:"script",section:"section",select:"select",small:"small",source:"source",span:"span",strong:"strong",style:"style",sub:"sub",summary:"summary",sup:"sup",table:"table",tbody:"tbody",td:"td",textarea:"textarea",tfoot:"tfoot",th:"th",thead:"thead",time:"time",title:"title",tr:"tr",track:"track",u:"u",ul:"ul",var:"var",video:"video",wbr:"wbr",circle:"circle",clipPath:"clipPath",defs:"defs",ellipse:"ellipse",g:"g",image:"image",line:"line",linearGradient:"linearGradient",mask:"mask",path:"path",pattern:"pattern",polygon:"polygon",polyline:"polyline",radialGradient:"radialGradient",rect:"rect",stop:"stop",svg:"svg",text:"text",tspan:"tspan"},n);e.exports=i},152:function(e,t,r){"use strict";function n(){if(p.current){var e=p.current.getName();if(e)return" Check the render method of `"+e+"`."}return""}function o(e,t){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;a("uniqueKey",e,t)}}function a(e,t,r){var o=n();if(!o){var a="string"==typeof r?r:r.displayName||r.name;a&&(o=" Check the top-level render call using <"+a+">.")}var i=m[e]||(m[e]={});if(i[o])return null;i[o]=!0;var l={parentOrOwner:o,url:" See https://fb.me/react-warning-keys for more information.",childOwner:null};return t&&t._owner&&t._owner!==p.current&&(l.childOwner=" It was passed a child from "+t._owner.getName()+"."),l}function i(e,t){if("object"==typeof e)if(Array.isArray(e))for(var r=0;r<e.length;r++){var n=e[r];s.isValidElement(n)&&o(n,t)}else if(s.isValidElement(e))e._store&&(e._store.validated=!0);else if(e){var a=f(e);if(a&&a!==e.entries)for(var i,l=a.call(e);!(i=l.next()).done;)s.isValidElement(i.value)&&o(i.value,t)}}function l(e,t,r,o){for(var a in t)if(t.hasOwnProperty(a)){var i;try{"function"!=typeof t[a]?d(!1):void 0,i=t[a](r,a,e,o)}catch(e){i=e}if(i instanceof Error&&!(i.message in h)){h[i.message]=!0;n()}}}function u(e){var t=e.type;if("function"==typeof t){var r=t.displayName||t.name;t.propTypes&&l(r,t.propTypes,e.props,c.prop),"function"==typeof t.getDefaultProps}}var s=r(41),c=r(64),p=(r(65),r(4)),f=(r(42),r(107)),d=r(12),m=(r(24),{}),h={},v={createElement:function(e,t,r){var n="string"==typeof e||"function"==typeof e,o=s.createElement.apply(this,arguments);if(null==o)return o;if(n)for(var a=2;a<arguments.length;a++)i(arguments[a],e);return u(o),o},createFactory:function(e){var t=v.createElement.bind(null,e);return t.type=e,t},cloneElement:function(e,t,r){for(var n=s.cloneElement.apply(this,arguments),o=2;o<arguments.length;o++)i(arguments[o],n.type);return u(n),n}};e.exports=v},153:function(e,t){"use strict";function r(e,t,r){if(!e)return null;var o={};for(var a in e)n.call(e,a)&&(o[a]=t.call(r,e[a],a,e));return o}var n=Object.prototype.hasOwnProperty;e.exports=r},154:function(e,t,r){"use strict";function n(e){return o.isValidElement(e)?void 0:a(!1),e}var o=r(41),a=r(12);e.exports=n},155:function(e,t,r){"use strict";function n(e,t,r,n,o){return o}r(38),r(24);e.exports=n},156:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(157),a=n(o);t.default=a.default},157:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();r(158);var s=r(144),c=(r(2),r(162)),p=n(c),f=r(164),d=n(f),m=function(e){function t(e){a(this,t);var r=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.ms=function(e){var t=r,n=t.state;t.props;switch(e.type){case"FOCUS_INPUT":n.inputFocus=!0;break;case"BLUR_INPUT":n.inputFocus=!1;break;default:throw new Error("Not find action.type: "+e.type)}t.setState(n)},r.ensureFindInput=function(){var e=r,t=e.props.findInput(e.refs.root);if("undefined"==typeof t)throw new Error("node_module/placeholder.react: props.findInput not find input");return t},r.contentClick=function(){var e=r,t=e.ensureFindInput();t.focus(),e.ms({type:"FOCUS_INPUT",payload:{targetElement:"content"}})},r.rootClick=function(e){var t=r;e.target===t.ensureFindInput()&&t.ms({type:"FOCUS_INPUT",targetElement:"input"})},r.rootBlur=function(e){var t=r;e.target===t.ensureFindInput()&&t.ms({type:"BLUR_INPUT"})},r.rootFocus=function(e){var t=r;e.target===t.ensureFindInput()&&t.ms({type:"FOCUS_INPUT",targetElement:"input"})},r.capitalize=function(e){return e[0].toUpperCase()+e.slice(1)},r.state={inputFocus:!1},r}return l(t,e),u(t,[{key:"render",value:function(){var e,t=this,n=t.props.prefixClassName;return r(144).createElement("div",{ref:"root",onFocus:t.rootFocus,onClick:t.rootClick,onBlur:t.rootBlur,className:(0,d.default)((e={},o(e,""+n,!0),o(e,""+t.props.className,t.props.className),o(e,n+"--focus",t.state.inputFocus),o(e,n+"--existValue",0!==t.props.value.length),o(e,n+"--type"+t.capitalize(t.props.type),!0),e))},r(144).createElement("div",{className:n+"-content",onClick:t.contentClick},t.props.content),t.props.children)}}]),t}(s.Component);(0,p.default)(m),t.default=m},158:function(e,t,r){var n=r(159);"string"==typeof n&&(n=[[e.id,n,""]]);r(161)(n,{});n.locals&&(e.exports=n.locals)},159:function(e,t,r){t=e.exports=r(160)(),t.push([e.id,".r-placeholder{position:relative;display:inline-block}html .r-placeholder--existValue .r-placeholder-content,html .r-placeholder--focus .r-placeholder-content{display:none}.r-placeholder-content{box-sizing:border-box;position:absolute;left:0;top:0;z-index:1;width:100%;height:100%;overflow:hidden}html .r-placeholder--typeInput .r-placeholder-content{white-space:nowrap}html .r-placeholder--typeTextarea .r-placeholder-content{word-wrap:break-word;word-break:normal}.r-placeholder-content{color:#a9a9a9}",""])},160:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(n[a]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&n[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="("+i[2]+") and ("+r+")"),e.push(i))}},e}},161:function(e,t,r){function n(e,t){for(var r=0;r<e.length;r++){var n=e[r],o=d[n.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](n.parts[a]);for(;a<n.parts.length;a++)o.parts.push(s(n.parts[a],t))}else{for(var i=[],a=0;a<n.parts.length;a++)i.push(s(n.parts[a],t));d[n.id]={id:n.id,refs:1,parts:i}}}}function o(e){for(var t=[],r={},n=0;n<e.length;n++){var o=e[n],a=o[0],i=o[1],l=o[2],u=o[3],s={css:i,media:l,sourceMap:u};r[a]?r[a].parts.push(s):t.push(r[a]={id:a,parts:[s]})}return t}function a(e,t){var r=v(),n=b[b.length-1];if("top"===e.insertAt)n?n.nextSibling?r.insertBefore(t,n.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),b.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(t)}}function i(e){e.parentNode.removeChild(e);var t=b.indexOf(e);t>=0&&b.splice(t,1)}function l(e){var t=document.createElement("style");return t.type="text/css",a(e,t),t}function u(e){var t=document.createElement("link");return t.rel="stylesheet",a(e,t),t}function s(e,t){var r,n,o;if(t.singleton){var a=g++;r=y||(y=l(t)),n=c.bind(null,r,a,!1),o=c.bind(null,r,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=u(t),n=f.bind(null,r),o=function(){i(r),r.href&&URL.revokeObjectURL(r.href)}):(r=l(t),n=p.bind(null,r),o=function(){i(r)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}function c(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=E(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function p(e,t){var r=t.css,n=t.media;if(n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}function f(e,t){var r=t.css,n=t.sourceMap;n&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var o=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(o),a&&URL.revokeObjectURL(a)}var d={},m=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},h=m(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),v=m(function(){return document.head||document.getElementsByTagName("head")[0]}),y=null,g=0,b=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=h()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var r=o(e);return n(r,t),function(e){for(var a=[],i=0;i<r.length;i++){var l=r[i],u=d[l.id];u.refs--,a.push(u)}if(e){var s=o(e);n(s,t)}for(var i=0;i<a.length;i++){var u=a[i];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete d[u.id]}}}};var E=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},162:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){(0,i.default)(!0,e,l)};var o=r(144),a=r(163),i=n(a),l={defaultProps:{value:void 0,prefixClassName:"r-placeholder",className:"",content:"",type:"input",findInput:function(e){return e.getElementsByTagName("input")[0]||e.getElementsByTagName("textarea")[0]}},propTypes:{value:o.PropTypes.string.isRequired,prefixClassName:o.PropTypes.string,className:o.PropTypes.string,content:o.PropTypes.oneOfType([o.PropTypes.element,o.PropTypes.string]),type:o.PropTypes.oneOf(["input","textarea","custom"]),findInput:o.PropTypes.func}}},163:function(e,t){"use strict";var r=Object.prototype.hasOwnProperty,n=Object.prototype.toString,o=function(e){return"function"==typeof Array.isArray?Array.isArray(e):"[object Array]"===n.call(e)},a=function(e){if(!e||"[object Object]"!==n.call(e))return!1;var t=r.call(e,"constructor"),o=e.constructor&&e.constructor.prototype&&r.call(e.constructor.prototype,"isPrototypeOf");if(e.constructor&&!t&&!o)return!1;var a;for(a in e);return"undefined"==typeof a||r.call(e,a)};e.exports=function e(){var t,r,n,i,l,u,s=arguments[0],c=1,p=arguments.length,f=!1;for("boolean"==typeof s?(f=s,s=arguments[1]||{},c=2):("object"!=typeof s&&"function"!=typeof s||null==s)&&(s={});c<p;++c)if(t=arguments[c],null!=t)for(r in t)n=s[r],i=t[r],s!==i&&(f&&i&&(a(i)||(l=o(i)))?(l?(l=!1,u=n&&o(n)?n:[]):u=n&&a(n)?n:{},s[r]=e(f,u,i)):"undefined"!=typeof i&&(s[r]=i));return s}},164:function(e,t,r){var n,o;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
!function(){"use strict";function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n))e.push(r.apply(null,n));else if("object"===o)for(var i in n)a.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}var a={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?e.exports=r:(n=[],o=function(){return r}.apply(t,n),!(void 0!==o&&(e.exports=o)))}()}});
//# sourceMappingURL=1-1-d838b82adc1357334ff5.js.map