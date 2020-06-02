!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);n(1);var r=document.createElement("div");r.id="staticSplash",document.body.appendChild(r);var o=document.createElement("div");o.id="blurSplash",r.appendChild(o);var i=document.createElement("img");i.id="cloudyGIF",i.src="../media/cloudyZ.gif",o.appendChild(i);var a=document.createElement("div");a.id="zTitleText",o.appendChild(a);var l=document.createElement("div");l.id="zSubTitleText",o.appendChild(l);document.getElementById("zTitleText").innerHTML="<p>CLOUDY LOGIC</p>",document.getElementById("zSubTitleText").innerHTML="<p>AN ALTERNATIVE GUIDE TO BIAS IN AI</p>";var u=document.createElement("button");u.id="zButton",o.appendChild(u);document.getElementById("zButton").innerHTML="BEGIN";var c=document.createElement("div");c.id="loaderFrame",r.appendChild(c);var d=document.createElement("div");d.id="loader",c.appendChild(d);var f=document.createElement("p");f.id="loaderText",c.appendChild(f),f.innerHTML="loading..."},function(t,e,n){var r=n(2),o=n(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);t.exports=o.locals||{}},function(t,e,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),a=[];function l(t){for(var e=-1,n=0;n<a.length;n++)if(a[n].identifier===t){e=n;break}return e}function u(t,e){for(var n={},r=[],o=0;o<t.length;o++){var i=t[o],u=e.base?i[0]+e.base:i[0],c=n[u]||0,d="".concat(u," ").concat(c);n[u]=c+1;var f=l(d),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(a[f].references++,a[f].updater(p)):a.push({identifier:d,updater:h(p,e),references:1}),r.push(d)}return r}function c(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var a=i(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var d,f=(d=[],function(t,e){return d[t]=e,d.filter(Boolean).join("\n")});function p(t,e,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=f(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function s(t,e,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var m=null,g=0;function h(t,e){var n,r,o;if(e.singleton){var i=g++;n=m||(m=c(e)),r=p.bind(null,n,i,!1),o=p.bind(null,n,i,!0)}else n=c(e),r=s.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var n=u(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var o=l(n[r]);a[o].references--}for(var i=u(t,e),c=0;c<n.length;c++){var d=l(n[c]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}n=i}}}},function(t,e,n){var r=n(4),o=n(5),i=n(6),a=n(7),l=n(8),u=n(9),c=n(10),d=n(11);e=r(!1);var f=o(i),p=o(a),s=o(l),m=o(u),g=o(c),h=o(d);e.push([t.i,"@font-face{font-family:adobeDevRegular;src:url("+f+') format("woff"),url('+p+') format("truetype")}@font-face{font-family:adobeDevBold;src:url('+s+') format("woff"),url('+m+') format("truetype")}@font-face{font-family:adobeDevItalic;src:url('+g+') format("woff"),url('+h+') format("truetype")}body,#container{width:100%;height:100%;position:absolute;top:0px;left:0px;margin:0px;background-color:#000}#staticSplash,#splashContainer{width:100%;height:100%;position:relative;top:0px;left:0px;margin:0px;background-color:#000}#blurSplash{width:900px;height:600px;position:absolute;left:0;right:0;margin-left:auto;margin-right:auto;padding-top:30px;-webkit-filter:blur(9px);-moz-filter:blur(9px);-o-filter:blur(9px);-ms-filter:blur(9px);filter:blur(9px)}#loaderFrame{top:300px;width:900px;height:120px;position:absolute;left:0;right:0;margin-left:auto;margin-right:auto}#loaderFrame p{margin:0px;padding-left:3px;padding-right:3px;padding-top:9px;font-family:adobeDevItalic;font-size:15px;letter-spacing:1.5px;text-align:center;color:#fff;text-shadow:1.2px 1.2px #000}#loader{width:60px;height:60px;margin-left:auto;margin-right:auto;border:3px solid #000;border-top:3px solid #fff;border-radius:50%;animation:spin 3s linear infinite}@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}#expoSplash{width:900px;height:600px;position:absolute;left:0;right:0;margin-left:auto;margin-right:auto;padding-top:30px}#zTitleText,#titleText{width:900px;position:absolute;top:90px}#zTitleText p,#titleText p{margin:0px;padding-left:3px;padding-right:3px;font-family:adobeDevRegular;font-size:90px;letter-spacing:3px;text-align:center;color:#fff;text-shadow:1.8px 1.8px dimgray}#zSubTitleText,#subTitleText{width:900px;position:absolute;top:510px}#zSubTitleText p,#subTitleText p{margin:0px;padding-left:3px;padding-right:3px;font-family:adobeDevItalic;font-size:24px;word-spacing:21px;letter-spacing:3px;text-align:center;color:#fff;text-shadow:1.2px 1.2px dimgray}#zButton,#button{width:120px;height:45px;display:block;margin-left:auto;margin-right:auto;background-color:inherit;border-color:#fff;cursor:pointer;font-family:adobeDevItalic;color:#fff;font-size:10px;text-shadow:.6px .6px dimgray;letter-spacing:1.5px;padding-left:9px;transform:skewX(6deg);font-style:oblique 6deg}#button:hover{width:144px;height:54px;font-size:12px}',""]),t.exports=e},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,l=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(u," */")),i=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[n].concat(i).concat([o]).join("\n")}var a,l,u;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var l=0;l<t.length;l++){var u=[].concat(t[l]);r&&o[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),e.push(u))}},e}},function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},function(t,e,n){"use strict";n.r(e),e.default=n.p+"../build-fonts/AD-Regular.woff"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"../build-fonts/AD-Regular.ttf"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"../build-fonts/AD-Bold.woff"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"../build-fonts/AD-Bold.ttf"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"../build-fonts/AD-Italic.woff"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"../build-fonts/AD-Italic.ttf"}]);