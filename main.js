!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(e,n,t){var o=t(1),r=t(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1};o(r,a);e.exports=r.locals||{}},function(e,n,t){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function c(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function d(e,n){for(var t={},o=[],r=0;r<e.length;r++){var a=e[r],d=n.base?a[0]+n.base:a[0],l=t[d]||0,s="".concat(d," ").concat(l);t[d]=l+1;var u=c(s),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:s,updater:y(p,n),references:1}),o.push(s)}return o}function l(e){var n=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=t.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){n.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(n);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var s,u=(s=[],function(e,n){return s[e]=n,s.filter(Boolean).join("\n")});function p(e,n,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=u(n,r);else{var a=document.createTextNode(r),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(a,i[n]):e.appendChild(a)}}function f(e,n,t){var o=t.css,r=t.media,a=t.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),a&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var m=null,h=0;function y(e,n){var t,o,r;if(n.singleton){var a=h++;t=m||(m=l(n)),o=p.bind(null,t,a,!1),r=p.bind(null,t,a,!0)}else t=l(n),o=f.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else r()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=r());var t=d(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<t.length;o++){var r=c(t[o]);i[r].references--}for(var a=d(e,n),l=0;l<t.length;l++){var s=c(t[l]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}t=a}}}},function(e,n,t){(n=t(3)(!1)).push([e.i,"img {\n  max-width: 100%;\n  height: auto;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\nnav {\n  width: 20rem;\n}\n\nul {\n  display: flex;\n  justify-content: space-between;\n}\n\nli {\n  list-style-type: none;\n  font-size: large;\n  color: blue;\n}\n\n#homeContent {\n  display: block;\n}\n\n#menuContent {\n  display: none;\n}\n\n#contactContent {\n  display: none;\n}\n",""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",o=e[3];if(!o)return t;if(n&&"function"==typeof btoa){var r=(i=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(d," */")),a=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[t].concat(a).concat([r]).join("\n")}var i,c,d;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(r[i]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);o&&r[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),n.push(d))}},n}},function(e,n,t){"use strict";t.r(n);var o=t.p+"60548a9b3c4865e2c0827e4db7625862.jpg";var r=()=>{const e=document.createElement("div");e.id="homeContent";const n=document.createElement("h1");n.innerHTML="THE BEST PLACE TO KICK OF YOUR DAY";const t=document.createElement("img");t.src=o,e.appendChild(t),e.appendChild(n);const r=document.createElement("p");r.innerHTML='On her way she met a copy. The copy warned the Little Blind Text, that\n  where it came from it would have been rewritten a thousand times and\n  everything that was left from its origin would be the word "and" and the\n  Little Blind Text should turn around and return to its own, safe\n  country. A small river named Duden flows by their place and supplies it\n  with the necessary regelialia. It is a paradisematic country, in which\n  roasted parts of sentences fly into your mouth.',e.appendChild(r),document.body.appendChild(e)},a=t.p+"04164d200685295a1cdd2f546dc9440a.jpg";var i=()=>{const e=document.createElement("div");e.id="menuContent";const n=document.createElement("h1");n.innerHTML="THE DELICIOUS DISHES";const t=document.createElement("img");t.src=a,e.appendChild(t),e.appendChild(n);const o=document.createElement("p");o.innerHTML='On her way she met a copy. The copy warned the Little Blind Text, that\n  where it came from it would have been rewritten a thousand times and\n  everything that was left from its origin would be the word "and" and the\n  Little Blind Text should turn around and return to its own, safe\n  country. A small river named Duden flows by their place and supplies it\n  with the necessary regelialia. It is a paradisematic country, in which\n  roasted parts of sentences fly into your mouth.',e.appendChild(o),document.body.appendChild(e)},c=t.p+"35c3af0c9a7eafafdd22fc1d5a78277c.jpg";var d=()=>{const e=document.createElement("div");e.id="contactContent";const n=document.createElement("h1");n.innerHTML="CONTACT";const t=document.createElement("img");t.src=c,e.appendChild(t),e.appendChild(n);const o=document.createElement("p");o.innerHTML='On her way she met a copy. The copy warned the Little Blind Text, that\n  where it came from it would have been rewritten a thousand times and\n  everything that was left from its origin would be the word "and" and the\n  Little Blind Text should turn around and return to its own, safe\n  country. A small river named Duden flows by their place and supplies it\n  with the necessary regelialia. It is a paradisematic country, in which\n  roasted parts of sentences fly into your mouth.',e.appendChild(o),document.body.appendChild(e)};var l=()=>{const e=document.createElement("header"),n=document.createElement("h1");n.innerHTML="The Restaurant",e.appendChild(n);const t=document.createElement("nav");t.innerHTML='<ul><li id="home">Home</li><li id="menu">Menu</li><li id="contact">Contact</li></ul>',e.appendChild(t),document.body.appendChild(e)};t(0);l(),window.onload=function(){r(),i(),d();const e=document.getElementById("menu"),n=document.getElementById("home"),t=document.getElementById("contact"),o=document.getElementById("homeContent"),a=document.getElementById("menuContent"),c=document.getElementById("contactContent");e.addEventListener("click",()=>{o.style.display="none",c.style.display="none",a.style.display="block"}),n.addEventListener("click",()=>{o.style.display="block",c.style.display="none",a.style.display="none"}),t.addEventListener("click",()=>{o.style.display="none",c.style.display="block",a.style.display="none"})}()}]);