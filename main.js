(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([n.id,"body {\n    overflow-x: hidden;\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    width: 100vw;\n    margin: 0;\n    padding: 0;\n}\n\n#headerContainer {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    color: #FFFFFF;\n    background-color: #181a1b;\n    border-bottom: 4px solid darkslateblue;\n    transition: all 0.7s ease;\n    height: 7vh;\n    padding: 1vw;\n}\n\n.left {\n    display: flex;\n    margin-right: auto;\n}\n\n.middle {\n    display: flex;\n    margin-left: auto;\n    margin-right: auto;\n    gap: 5vw;\n}\n\n.right {\n    display: flex;\n    margin-left: auto;\n}\n\n.home, .menu, .about {\n    background-color: rgb(255, 166, 0);\n    border: hidden;\n    border-radius: 16px;\n    height: 6vh;\n    width: 6vh;\n    transition: all 0.5s ease;\n}\n\n.home:hover, .menu:hover, .about:hover {\n    background-color: rgb(255, 166, 0, 0.8);\n}\n\n.currentTab {\n    background-color: rgb(255, 166, 0, 0.4);\n}\n\n#contentContainer {\n    display: flex;\n    flex: 1;\n    justify-content: center;\n    align-items: center;\n    background-color: #181818;\n    color: snow;\n    gap: 5vw;\n}\n\n.modal {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 50vh;\n    width: 20vw;\n    border-radius: 25px;\n    background-color: rgb(255, 166, 0);\n    color: #181818;\n    transition: all 0.15s ease;\n}\n\n.modal:hover {\n    border: 4px solid darkslateblue;\n}\n\n.img {\n    margin-top: 15vh;\n}\n\n.imgDescription {\n    margin-top: 5vh;\n}\n\n#columnContainer {\n    display: flex;\n    flex-direction: column;\n    row-gap: 10vh;\n}\n\n.row {\n    display: flex;\n    justify-content: space-between;\n    column-gap: 10vw;\n}\n\n.food {\n    display: flex;\n    align-items: center;\n    background-color: #181818;\n    border: 4px solid rgb(255, 166, 0);\n    border-radius: 8px;\n    height: 15vh;\n    width: 30vw;\n    gap: 5vw;\n    padding: 1vw;\n}\n\n.aboutModal {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: rgb(255, 166, 0);\n    color: #181818;\n    border-radius: 16px;\n    height: 45vh;\n    width: 45vh;\n    gap: 10vh;\n    margin: 15vh 5vh;\n}\n\n#footerContainer {\n    display: flex;\n    margin-top: auto;\n    background-color: darkslateblue;\n    color: #FFFFFF;\n}",""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var l=0;l<n.length;l++){var s=[].concat(n[l]);o&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),e.push(s))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var d=n[c],l=o.base?d[0]+o.base:d[0],s=a[l]||0,u="".concat(l," ").concat(s);a[l]=s+1;var p=t(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=r(m,o);o.byIndex=c,e.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var d=o(n,r),l=0;l<a.length;l++){var s=t(a[l]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}a=d}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),a=t(569),i=t.n(a),c=t(565),d=t.n(c),l=t(216),s=t.n(l),u=t(589),p=t.n(u),m=t(426),f={};function h(){document.getElementById("contentContainer").textContent=""}function v(n){switch(n){case"Home":h(),function(){let n=["homePicture1","homePicture2","homePicture3"];const e=document.getElementById("contentContainer");for(let t=1;t<=3;t++){const o=document.createElement("div");o.classList.add("modal");const r=document.createElement("div");r.classList.add("img"),r.textContent=n[t-1],o.appendChild(r);const a=document.createElement("div");a.classList.add("imgDescription"),a.textContent="Some text to accompany",o.appendChild(a),e.appendChild(o)}}();break;case"Menu":h(),function(){let n=["menuPicture1","menuPicture2","menuPicture3","menuPicture4","menuPicture5","menuPicture6"],e=["One","Two","Three","Four","Five","Six"],t=0;const o=document.getElementById("contentContainer"),r=document.createElement("div");r.setAttribute("id","columnContainer"),o.appendChild(r);for(let o=1;o<=3;o++){const o=document.createElement("div");o.classList.add("row");for(let r=1;r<=2;r++){const r=document.createElement("div");r.classList.add("food");const a=document.createElement("div");a.textContent=e[t],r.appendChild(a);const i=document.createElement("div");i.classList.add("right"),i.textContent=n[t],t++,r.appendChild(i),o.appendChild(r)}r.appendChild(o)}}();break;case"About":h(),function(){let n=["aboutPicture1"," aboutPicture2","aboutPicture3"],e=["about1","about2","about3"];const t=document.getElementById("contentContainer"),o=document.createElement("div");o.setAttribute("id","columnContainer");for(let t=1;t<=3;t++){const r=document.createElement("div");r.classList.add("aboutModal");const a=document.createElement("div");a.textContent=n[t-1];const i=document.createElement("div");i.textContent=e[t-1],r.appendChild(a),r.appendChild(i),o.appendChild(r)}t.appendChild(o)}()}}f.styleTagTransform=p(),f.setAttributes=d(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=s(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const g={home:document.querySelector(".home"),menu:document.querySelector(".menu"),about:document.querySelector(".about")};v("Home"),g.home.addEventListener("click",(()=>{v(g.home.textContent)})),g.menu.addEventListener("click",(()=>{v(g.menu.textContent)})),g.about.addEventListener("click",(()=>{v(g.about.textContent)}))})()})();