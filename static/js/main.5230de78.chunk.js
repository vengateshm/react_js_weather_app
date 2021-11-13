(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{32:function(n,e,t){},53:function(n,e,t){"use strict";t.r(e);var i,a,c,o,r,s,l,d,p,u,x,j,b,h,f=t(1),v=t.n(f),g=t(22),m=t.n(g),O=(t(32),t(9)),w=t.n(O),y=t(23),z=t(11),k=t(2),C=t(3),S=t(0),W=C.a.img(i||(i=Object(k.a)(["\n    width: 140px;\n    height: 140px;\n    margin: 40px auto;\n"]))),M=C.a.span(a||(a=Object(k.a)(["\n    color: black;\n    font-size: 18px;\n    font-weight: bold;\n"]))),D=C.a.form(c||(c=Object(k.a)(["\n    display: flex;\n    flex-direction: row;\n    border: black solid 1px;\n    color: black;\n    margin: 20px auto;\n    & input {\n        padding: 10px;\n        font-size: 14px;\n        font-weight: bold;\n        border: none;\n        outline: none;\n    }\n\n    & button {\n        padding: 10px;\n        font-size: 14px;\n        color: white;\n        background-color: black;\n        font-weight: bold;\n        border: none;\n        outline: none;\n        cursor: pointer;\n    }\n"]))),F=function(n){var e=n.updateCity,t=n.fetchWeather;return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(W,{src:"/weather-app/icons/perfect-day.svg"}),Object(S.jsx)(M,{children:"Find Weather of your city"}),Object(S.jsxs)(D,{onSubmit:t,children:[Object(S.jsx)("input",{placeholder:"City",onChange:function(n){return e(n.target.value)}}),Object(S.jsx)("button",{type:"submit",children:"Search"})]})]})},I=C.a.div(o||(o=Object(k.a)(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    width: 100%;\n    justify-content: space-between;\n    margin: 50px auto; \n"]))),J=C.a.span(r||(r=Object(k.a)(["\n    margin: 20px auto;\n    font-size: 14px;\n    & span {\n        font-size: 28px;\n    }\n"]))),q=C.a.img(s||(s=Object(k.a)(["\n    width: 100px;\n    height: 100px;\n    margin: 5px auto;\n"]))),A=C.a.span(l||(l=Object(k.a)(["\n    font-size: 28px;\n    font-weight: bold;\n"]))),B=C.a.span(d||(d=Object(k.a)(["\n    margin: 20px 25px 10px ;\n    font-size: 14px;\n    font-weight: bold;\n    text-align: start;\n    width: 90%;\n"]))),E=C.a.div(p||(p=Object(k.a)(["\n    display: flex;\n    width: 90%;\n    flex-direction: row;\n    justify-content: space-evenly;\n    align-items: center;\n    flex-wrap: wrap;\n"]))),H=C.a.div(u||(u=Object(k.a)(["\n    display: flex;\n    margin: 5px 10px;\n    flex-direction: row;\n    justifiy-content: space-evenly;\n    align-items: center; \n"]))),G=C.a.img(x||(x=Object(k.a)(["\n    width: 36px;\n    height: 36px;\n"]))),K=C.a.span(j||(j=Object(k.a)(["\n    display: flex;\n    flex-direction: column;\n    font-size: 14px;\n    margin: 15px;\n    & span{\n        font-size: 12px;\n        text-transform: capitalize;\n    }\n"]))),L=function(n){var e=n.name,t=n.value;return Object(S.jsxs)(H,{children:[Object(S.jsx)(G,{src:N[e]}),Object(S.jsxs)(K,{children:[t,Object(S.jsx)("span",{children:e})]})]})},N={sunset:"/icons/temp.svg",sunrise:"/icons/temp.svg",humidity:"/icons/humidity.svg",wind:"/icons/wind.svg",pressure:"/icons/pressure.svg"},P=function(n){var e,t,i,a,c,o,r,s=n.weather,l=null===s||void 0===s||null===(e=s.weather[0].icon)||void 0===e?void 0:e.includes("d");return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)(I,{children:[Object(S.jsxs)(J,{children:[Object(S.jsx)("span",{children:"".concat(Math.floor((null===s||void 0===s||null===(t=s.main)||void 0===t?void 0:t.temp)-273),"C")})," | ".concat(null===s||void 0===s?void 0:s.weather[0].description)]}),Object(S.jsx)(q,{src:"".concat("https://openweathermap.org/img/w","/").concat(null===s||void 0===s?void 0:s.weather[0].icon,".png")})]}),Object(S.jsx)(A,{children:"".concat(null===s||void 0===s?void 0:s.name,", ").concat(null===s||void 0===s||null===(i=s.sys)||void 0===i?void 0:i.country)}),Object(S.jsx)(B,{children:"Weather Info"}),Object(S.jsxs)(E,{children:[Object(S.jsx)(L,{name:l?"sunrise":"sunset",value:(r=null===s||void 0===s?void 0:s.sys[l?"sunrise":"sunset"],"".concat(new Date(1e3*r).getHours()," : ").concat(new Date(1e3*r).getMinutes()))}),Object(S.jsx)(L,{name:"humidity",value:null===s||void 0===s||null===(a=s.main)||void 0===a?void 0:a.humidity}),Object(S.jsx)(L,{name:"wind",value:null===s||void 0===s||null===(c=s.wind)||void 0===c?void 0:c.speed}),Object(S.jsx)(L,{name:"pressure",value:null===s||void 0===s||null===(o=s.main)||void 0===o?void 0:o.pressure})]})]})},Q=t(27),R=t.n(Q),T=C.a.div(b||(b=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  align-items: center;\n  box-shadow: 0 3px 6px 0 #555;\n  padding: 20px 10px;\n  border-radius: 4px;\n  width: 380px;\n  background: white;\n  font-family: Montserrat;\n"]))),U=C.a.span(h||(h=Object(k.a)(["\n  color: black;\n  font-size: 18px;\n"])));var V=function(){var n=Object(f.useState)(),e=Object(z.a)(n,2),t=e[0],i=e[1],a=Object(f.useState)(),c=Object(z.a)(a,2),o=c[0],r=c[1],s=function(){var n=Object(y.a)(w.a.mark((function n(e){var i;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),n.next=3,R.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&appid=").concat("4a421b88209bf37a19e22021337370e2"));case 3:i=n.sent,console.log(i),r(i.data);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(S.jsxs)(T,{children:[Object(S.jsx)(U,{children:"Weather App"}),o?Object(S.jsx)(P,{weather:o}):Object(S.jsx)(F,{updateCity:i,fetchWeather:s})]})};m.a.render(Object(S.jsx)(v.a.StrictMode,{children:Object(S.jsx)(V,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.5230de78.chunk.js.map