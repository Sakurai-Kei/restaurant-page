(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([e.id,"body {\n    overflow-x: hidden;\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    width: 100vw;\n    margin: 0;\n    padding: 0;\n}\n\n#headerContainer {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    color: #FFFFFF;\n    background-color: #181a1b;\n    border-bottom: 4px solid darkslateblue;\n    transition: all 0.7s ease;\n    height: 7vh;\n    padding: 1vw;\n}\n\n.left {\n    display: flex;\n    margin-right: auto;\n}\n\n.middle {\n    display: flex;\n    margin-left: auto;\n    margin-right: auto;\n    gap: 5vw;\n}\n\n.right {\n    display: flex;\n    margin-left: auto;\n}\n\n.home, .menu, .about {\n    background-color: rgb(255, 166, 0);\n    border: hidden;\n    border-radius: 16px;\n    height: 6vh;\n    width: 6vh;\n    transition: all 0.5s ease;\n}\n\n.home:hover, .menu:hover, .about:hover {\n    background-color: rgb(255, 166, 0, 0.8);\n}\n\n.currentTab {\n    background-color: rgb(255, 166, 0, 0.4);\n}\n\n#contentContainer {\n    display: flex;\n    flex: 1;\n    justify-content: center;\n    align-items: center;\n    background-color: #181818;\n    color: snow;\n    gap: 5vw;\n}\n\n.modal {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 50vh;\n    width: 20vw;\n    border-radius: 25px;\n    background-color: rgb(255, 166, 0);\n    color: #181818;\n    transition: all 0.15s ease;\n    overflow: hidden;\n}\n\n.modal:hover {\n    border: 4px solid darkslateblue;\n}\n\n.img {\n    display: flex;\n    flex-shrink: 1;\n    margin: 5vh;\n    height: 15vh;\n    width: 15vh;\n    border-radius: 12px;\n}\n\n.imgDescription {\n    margin-top: 5vh;\n    margin-left: 1vw;\n    margin-right: 1vw;\n    justify-content: center;\n}\n\n#columnContainer {\n    display: flex;\n    flex-direction: column;\n    row-gap: 10vh;\n}\n\n.row {\n    display: flex;\n    justify-content: space-between;\n    column-gap: 10vw;\n}\n\n.food {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    color: #181818;\n    background-color: rgb(255, 166, 0);\n    border-radius: 12px;\n    height: 15vh;\n    width: 30vw;\n    gap: 5vw;\n    padding: 1vw;\n}\n\n.aboutModal {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: rgb(255, 166, 0);\n    color: #181818;\n    border-radius: 16px;\n    height: 45vh;\n    width: 45vh;\n    gap: 10vh;\n    margin: 15vh 5vh;\n}\n\n#footerContainer {\n    display: flex;\n    margin-top: auto;\n    background-color: darkslateblue;\n    color: #FFFFFF;\n}",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=o.base?s[0]+o.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var h=r(f,o);o.byIndex=c,n.splice(c,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=o(e,r),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},828:(e,n,t)=>{e.exports=t.p+"c664a4227f81b96f495b.png"},504:(e,n,t)=>{e.exports=t.p+"73a6cafa65e03886e170.png"},559:(e,n,t)=>{e.exports=t.p+"222f05f64880cf0e292b.png"},587:(e,n,t)=>{e.exports=t.p+"37901e909fabb30fe8c3.png"},458:(e,n,t)=>{e.exports=t.p+"e17739b22cbcc6d04ebc.png"},995:(e,n,t)=>{e.exports=t.p+"a489d3b89f29705940d9.png"},244:(e,n,t)=>{e.exports=t.p+"09dfd8f5b2edcfe02c16.png"}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{var e=t(379),n=t.n(e),o=t(795),r=t.n(o),a=t(569),i=t.n(a),c=t(565),s=t.n(c),d=t(216),l=t.n(d),u=t(589),p=t.n(u),f=t(426),h={};h.styleTagTransform=p(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=l(),n()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;var m=t(828),g=t(504),v=t(559),b=t(587),y=t(458),x=t(995),w=t(244);function C(){document.getElementById("contentContainer").textContent=""}function k(e){switch(e){case"Home":C(),function(){let e=[m,g,v],n=["We use the best    ingredient fresh from the local farms, promoting healthy food and environment!","Satisfaction guranteed! Our Michelin Star Chef Mike    will entertain requests from customers for their food orders within reasons!","Have no time for dine in? We do delivery, free    of charges for areas within 10 km or for those with membership cards!"];const t=document.getElementById("contentContainer");for(let o=1;o<=3;o++){const r=document.createElement("div");r.classList.add("modal");const a=new Image;a.src=e[o-1],a.classList.add("img"),r.appendChild(a);const i=document.createElement("div");i.classList.add("imgDescription"),i.textContent=n[o-1],r.appendChild(i),t.appendChild(r)}}();break;case"Menu":C(),function(){let e=[b,y,x,w,"menuPicture5","menuPicture6"],n=["Smoked beef spaghetti carbonara! With Chef Mike's    special ingredients, the carbonara is sure to excite your taste buds!","The Rabo del Torro, a well-known stew from spain!    Chef Mike's interpretation of the dish brings out the tenderness of the meat    like you have never tasted before!","Assortions of marinated sashimi, vegetables and grains    ! Being healthy has never been this delicious! If you prefer non-raw fish,    Chef Mike is more than happy to offer to flame torch it or switch out to another    meat that is cooked!","Chef Mike's take on Lobster Tortellini     opens up your world of tastes! Blending in his hometown flavour into     the cuisine, Chef Mike has imparted a proud legacy for his home","Five","Six"],t=0;const o=document.getElementById("contentContainer"),r=document.createElement("div");r.setAttribute("id","columnContainer"),o.appendChild(r);for(let o=1;o<=3;o++){const o=document.createElement("div");o.classList.add("row");for(let r=1;r<=2;r++){const r=document.createElement("div");r.classList.add("food");const a=document.createElement("div");a.textContent=n[t],r.appendChild(a);const i=new Image;i.src=e[t],i.classList.add("img"),r.appendChild(i),o.appendChild(r),t++}r.appendChild(o)}}();break;case"About":C(),function(){let e=["aboutPicture1"," aboutPicture2","aboutPicture3"],n=["about1","about2","about3"];const t=document.getElementById("contentContainer"),o=document.createElement("div");o.setAttribute("id","columnContainer");for(let t=1;t<=3;t++){const r=document.createElement("div");r.classList.add("aboutModal");const a=document.createElement("div");a.textContent=e[t-1];const i=document.createElement("div");i.textContent=n[t-1],r.appendChild(a),r.appendChild(i),o.appendChild(r)}t.appendChild(o)}()}}const E={home:document.querySelector(".home"),menu:document.querySelector(".menu"),about:document.querySelector(".about")};k("Home"),E.home.addEventListener("click",(()=>{k(E.home.textContent)})),E.menu.addEventListener("click",(()=>{k(E.menu.textContent)})),E.about.addEventListener("click",(()=>{k(E.about.textContent)}))})()})();