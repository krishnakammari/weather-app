(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{10:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),o=t(3),r=t.n(o),i=(t(9),t(1)),l="75d42232f1b0599af7c8341196ad830d",s="https://api.openweathermap.org/data/2.5/";var m=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],o=a[1],r=Object(n.useState)({}),m=Object(i.a)(r,2),u=m[0],d=m[1];return c.a.createElement("div",{className:"undefined"!=typeof u.main&&u.main.temp>20?"app warm":"app"},c.a.createElement("main",null,c.a.createElement("div",{className:"search_box"},c.a.createElement("input",{type:"text",className:"search_bar",placeholder:"Search...cities....",onChange:function(e){return o(e.target.value)},value:t,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(s,"weather?q=").concat(t,"&units=metric&APPID=").concat(l)).then((function(e){return e.json()})).then((function(e){d(e),o(""),console.log(e)}))}})),"undefined"!=typeof u.main?c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("div",{className:"location_box"},c.a.createElement("div",{className:"location"},u.name,", ",u.sys.country),c.a.createElement("div",{className:"date"},function(e){var a=["sun","mon","tue","wed","thur","fri","sat"][e.getDay()],t=e.getDate(),n=["jan","feb","mar","apr","may","june","jul","aug","sep","oct","nov","dec"][e.getMonth()],c=e.getFullYear();return"".concat(a," ").concat(t," ").concat(n," ").concat(c)}(new Date)))),c.a.createElement("div",{className:"weather_box"},c.a.createElement("div",{className:"temp"},Math.round(u.main.temp),"\xb0C"),c.a.createElement("div",{className:"weather"},u.weather[0].main))):""))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,a,t){e.exports=t(10)},9:function(e,a,t){}},[[4,1,2]]]);
//# sourceMappingURL=main.8222d087.chunk.js.map