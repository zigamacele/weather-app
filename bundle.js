(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,'* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: "Roboto", sans-serif;\n  font-size: 62.5%;\n  background-color: rgb(37, 37, 66);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2em;\n}\n\n/* FROM */\nform {\n  display: flex;\n  gap: 0.5em;\n  margin-top: 5em;\n  background-color: rgba(255, 255, 255, 0.164);\n  padding: 1em;\n  border-radius: 10px;\n}\n\ninput {\n  padding: 1em;\n}\n\n#text-input,\n#submit {\n  height: 4em;\n  border-radius: 10px;\n}\n\n#text-input {\n  border: 100px;\n  width: 30em;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n#submit {\n  color: white;\n  width: 8em;\n  border: none;\n  background-color: rgb(231, 147, 79);\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n#submit:hover {\n  background-color: rgb(37, 37, 66);\n}\n\n#submit:active {\n  background-color: rgba(255, 255, 255, 0.164);\n}\n\n/* WEATHER */\n.weather {\n  margin-top: 5em;\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  padding: 4em;\n  border-radius: 10px;\n}\n\n.temp-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 20em;\n}\n\n.w-top {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.city-country {\n  color: rgb(231, 147, 79);\n  font-weight: bold;\n  font-size: 8em;\n}\n\n.description {\n  font-size: 2.5em;\n}\n\n.temp {\n  font-size: 6em;\n}\n\n.w-bot {\n  color: rgb(37, 37, 66);\n  display: flex;\n  justify-content: center;\n  gap: 16em;\n}\n\n.w-left,\n.w-right {\n  font-size: 1.5em;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5em;\n}\n\n.w-right {\n  text-align: end;\n}\n\nimg {\n  border-radius: 100em;\n}\n\n.hidden {\n  display: none;\n}\n',""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<e.length;u++){var d=[].concat(e[u]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],u=r.base?s[0]+r.base:s[0],d=a[u]||0,l="".concat(u," ").concat(d);a[u]=d+1;var p=t(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),u=0;u<a.length;u++){var d=t(a[u]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),u=t(216),d=t.n(u),l=t(589),p=t.n(l),m=t(426),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=document.querySelector("#text-input");!function(){const e=document.querySelector("#submit"),n=document.querySelector(".weather");e.addEventListener("click",(async e=>{var t;e.preventDefault(),n.classList.remove("hidden"),t=await async function(){try{const e=await async function(e){try{const n=await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${e}&appid=1bdf0cbef1c66e6d7ba6d40dab697a5b`,{mode:"cors"});return await n.json()}catch(e){console.log(e)}}(h.value);console.log(e[0]);const n=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${e[0].lat}&lon=${e[0].lon}&units=metric&appid=1bdf0cbef1c66e6d7ba6d40dab697a5b`,{mode:"cors"}),t=await n.json();return console.log(t),t}catch(e){console.log(e)}}(),document.querySelector(".city-country").textContent=`${t.name}, ${t.sys.country}`,document.querySelector(".description").textContent=t.weather[0].description,document.querySelector(".temp").textContent=`${Math.round(t.main.temp)}°C`,document.querySelector(".weather-icon").src=function(e){return`http://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`}(t),document.querySelector(".feels-like").textContent=`Feels like: ${Math.round(t.main.feels_like)}°C`,document.querySelector(".pressure").textContent=`Pressure: ${t.main.pressure} hPa`,document.querySelector(".temp-min").textContent=`Min. Temperature: ${Math.round(t.main.temp_min)}°C`,document.querySelector(".humidity").textContent=`Humidity: ${t.main.humidity} %`,document.querySelector(".wind-speed").textContent=`Wind: ${t.wind.speed} km/hNW`,document.querySelector(".temp-max").textContent=`Max. Temperature: ${Math.round(t.main.temp_max)}°C`}))}()})()})();