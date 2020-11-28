(()=>{"use strict";var e={780:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,":root {\n\t--white: #FCFCFC;\n\t--black: #5D576B;\n\t--primary: #99E1D9;\n\t--secondary: #F7567C;\n\t--highlight: #FFFAE3;\n}\n\nhtml, body {\n\theight: 100%;\n\twidth: 100%;\n\tpadding: 0;\n\tmargin: 0%;\n\tbox-sizing: border-box;\n\tfont-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n*, *::before, *::after {\n\tbox-sizing: inherit;\n}\n\nbody {\n\tbackground: var(--white);\n\tpadding: 1rem;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}",""]);const i=o},955:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,"#container {\n\ttext-align: center;\n}\n#container img {\n\tborder-radius: 0.5rem;\n\theight: 10rem;\n\twidth: 10rem;\n}\n#container p,\n#container a {\n\tfont-size: 1.1rem;\n}\n#container p {\n\tcolor: var(--black);\n\tmargin: 0.75rem 0;\n}\n#container a {\n\tcolor: var(--primary);\n\ttext-decoration: underline;\n\tcursor: pointer;\n}",""]);const i=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},379:(e,t,n)=>{var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function a(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},r=[],o=0;o<e.length;o++){var l=e[o],c=t.base?l[0]+t.base:l[0],s=n[c]||0,u="".concat(c," ").concat(s);n[c]=s+1;var d=a(u),f={css:l[1],media:l[2],sourceMap:l[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:u,updater:m(f,t),references:1}),r.push(u)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var s,u=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function d(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,h=0;function m(e,t){var n,r,o;if(t.singleton){var i=h++;n=p||(p=c(t)),r=d.bind(null,n,i,!1),o=d.bind(null,n,i,!0)}else n=c(t),r=f.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=a(n[r]);i[o].references--}for(var c=l(e,t),s=0;s<n.length;s++){var u=a(n[s]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}n=c}}}},621:(e,t,n)=>{e.exports=n.p+"26ffe5dd686fc006df93.png"}},t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.p="/",(()=>{const e=e=>e.startsWith("on"),t=t=>"children"!==t&&!e(t),r=(e,t)=>n=>e[n]!==t[n];function o(n,o,i){var a;Object.keys(o).filter(e).filter((e=>!(e in i)||r(o,i)(e))).forEach((e=>{const t=e.toLowerCase().substring(2);n.removeEventListener(t,o[e])})),Object.keys(o).filter(t).filter((a=i,e=>!(e in a))).forEach((e=>{n[e]=""})),Object.keys(i).filter(t).filter(r(o,i)).forEach((e=>{n[e]=i[e]})),Object.keys(i).filter(e).filter(r(o,i)).forEach((e=>{const t=e.toLowerCase().substring(2);n.addEventListener(t,i[e])}))}function i(e){if(!e)return;let t=e.parent;for(;!t.dom;)t=t.parent;const n=t.dom;"PLACEMENT"===e.effectTag&&null!=e.dom?n.appendChild(e.dom):"UPDATE"===e.effectTag&&null!=e.dom?o(e.dom,e.alternate.props,e.props):"DELETION"===e.effectTag&&a(e,n),i(e.child),i(e.sibling)}function a(e,t){e.dom?t.removeChild(e.dom):a(e.child,t)}let l=null,c=null,s=null,u=null;function d(e){if(e.type instanceof Function?function(e){f=e,p=0,f.hooks=[];const t=[e.type(e.props)];h(e,t)}(e):function(e){e.dom||(e.dom=function(e){const t="TEXT_ELEMENT"==e.type?document.createTextNode(""):document.createElement(e.type);return o(t,{},e.props),t}(e)),h(e,e.props.children)}(e),e.child)return e.child;let t=e;for(;t;){if(t.sibling)return t.sibling;t=t.parent}}requestIdleCallback((function e(t){let n=!1;for(;l&&!n;)l=d(l),n=t.timeRemaining()<1;!l&&s&&(u.forEach(i),i(s.child),c=s,s=null),requestIdleCallback(e)}));let f=null,p=null;function h(e,t){let n=0,r=e.alternate&&e.alternate.child,o=null;for(;n<t.length||null!=r;){const i=t[n];let a=null;const l=r&&i&&i.type==r.type;l&&(a={type:r.type,props:i.props,dom:r.dom,parent:e,alternate:r,effectTag:"UPDATE"}),i&&!l&&(a={type:i.type,props:i.props,dom:null,parent:e,alternate:null,effectTag:"PLACEMENT"}),r&&!l&&(r.effectTag="DELETION",u.push(r)),r&&(r=r.sibling),0===n?e.child=a:i&&(o.sibling=a),o=a,n++}}const m=function(e,t){s={dom:t,props:{children:[e]},alternate:c},u=[],l=s},g=e=>e.startsWith("on"),b=e=>"children"!==e&&!g(e),y=(e,t)=>n=>e[n]!==t[n];function v(e,t,n){var r;Object.keys(t).filter(g).filter((e=>!(e in n)||y(t,n)(e))).forEach((n=>{const r=n.toLowerCase().substring(2);e.removeEventListener(r,t[n])})),Object.keys(t).filter(b).filter((r=n,e=>!(e in r))).forEach((t=>{e[t]=""})),Object.keys(n).filter(b).filter(y(t,n)).forEach((t=>{e[t]=n[t]})),Object.keys(n).filter(g).filter(y(t,n)).forEach((t=>{const r=t.toLowerCase().substring(2);e.addEventListener(r,n[t])}))}function E(e){if(!e)return;let t=e.parent;for(;!t.dom;)t=t.parent;const n=t.dom;"PLACEMENT"===e.effectTag&&null!=e.dom?n.appendChild(e.dom):"UPDATE"===e.effectTag&&null!=e.dom?v(e.dom,e.alternate.props,e.props):"DELETION"===e.effectTag&&T(e,n),E(e.child),E(e.sibling)}function T(e,t){e.dom?t.removeChild(e.dom):T(e.child,t)}let C=null,k=null,w=null;function L(e){if(e.type instanceof Function?function(e){x=e,x.hooks=[];const t=[e.type(e.props)];j(e,t)}(e):function(e){e.dom||(e.dom=function(e){const t="TEXT_ELEMENT"==e.type?document.createTextNode(""):document.createElement(e.type);return v(t,{},e.props),t}(e)),j(e,e.props.children)}(e),e.child)return e.child;let t=e;for(;t;){if(t.sibling)return t.sibling;t=t.parent}}requestIdleCallback((function e(t){let n=!1;for(;C&&!n;)C=L(C),n=t.timeRemaining()<1;!C&&w&&(null.forEach(E),E(w.child),k=w,w=null),requestIdleCallback(e)}));let x=null;function j(e,t){let n=0,r=e.alternate&&e.alternate.child,o=null;for(;n<t.length||null!=r;){const i=t[n];let a=null;const l=r&&i&&i.type==r.type;l&&(a={type:r.type,props:i.props,dom:r.dom,parent:e,alternate:r,effectTag:"UPDATE"}),i&&!l&&(a={type:i.type,props:i.props,dom:null,parent:e,alternate:null,effectTag:"PLACEMENT"}),r&&!l&&(r.effectTag="DELETION",null.push(r)),r&&(r=r.sibling),0===n?e.child=a:i&&(o.sibling=a),o=a,n++}}function N(e){return function(t,...n){return function(e,t={},...n){return{type:e,props:{...t,children:n.flat().map((e=>"object"==typeof e?e:function(e){return{type:"TEXT_ELEMENT",props:{nodeValue:e,children:[]}}}(e)))}}}(e,t,n)}}const O=N("a"),M=(N("b"),N("i"),N("p")),A=(N("q"),N("s"),N("br"),N("dd"),N("dl"),N("dt"),N("em"),N("h1"),N("h2"),N("h3"),N("h4"),N("h5"),N("h6"),N("hr"),N("li"),N("ol"),N("rp"),N("rt"),N("td"),N("th"),N("tr"),N("ul"),N("bdi"),N("bdo"),N("col"),N("del"),N("dfn"),N("div"),N("img")),I=(N("ins"),N("kbd"),N("map"),N("nav"),N("pre"),N("rtc"),N("sub"),N("sup"),N("svg"),N("wbr"),N("abbr"),N("area"),N("cite"),N("code"),N("data"),N("form"),N("main")),F=(N("mark"),N("ruby"),N("samp"),N("span"),N("time"),N("aside"),N("audio"),N("input"),N("label"),N("meter"),N("param"),N("small"),N("table"),N("tbody"),N("tfoot"),N("thead"),N("track"),N("video"),N("button"),N("canvas"),N("dialog"),N("figure"),N("footer"),N("header"),N("iframe"),N("legend"),N("object"),N("option"),N("output"),N("select"),N("source"),N("strong"),N("address"),N("article"),N("caption"),N("details"),N("section"),N("summary"),N("picture"),N("colgroup"),N("datalist"),N("fieldset"),N("menuitem"),N("optgroup"),N("progress"),N("textarea"),N("blockquote"),N("figcaption"),N);var D=n(621),S=n(379),P=n.n(S),U=n(955);P()(U.Z,{insert:"head",singleton:!1}),U.Z.locals;const q=F((function(e){return I({id:"container"},A({src:D,alt:"Archway Logo"}),M({},e.message),O({href:"https://github.com/".concat(e.github)},"Learn Archway"))}));var B=n(780);P()(B.Z,{insert:"head",singleton:!1}),B.Z.locals,m(F((function(e){return q(e)}))({message:"Edit src/app.js and save to reload.",github:"archway-team/archway-framework"}),document.getElementById("root"))})()})();