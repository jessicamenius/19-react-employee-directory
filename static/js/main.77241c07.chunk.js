(this["webpackJsonp19-homework-react-employee-directory"]=this["webpackJsonp19-homework-react-employee-directory"]||[]).push([[0],{23:function(e,t,a){e.exports=a(49)},28:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),c=a.n(l),o=(a(28),a(8)),m=a(9),u=a(29),i=function(){return u.get("https://randomuser.me/api/?results=200&nat=us")},s=(a(47),a(20)),E=a(21),h=a(22);a(48);var f=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)([]),u=Object(m.a)(c,2),f=u[0],p=u[1];return Object(n.useEffect)((function(){i().then((function(e){var t=e.data;l(t.results),p(t.results)}))}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(s.a,{fluid:!0},r.a.createElement(E.a,null,r.a.createElement("h1",null,"Employee Directory"),r.a.createElement("h6",null,"Enter a first name to search for an employee"),r.a.createElement("input",{className:"input-group-lg",onChange:function(e){var t=e.target.value,a=f.filter((function(e){return!!e.name.first.toLowerCase().includes(t.toLowerCase())}));l(a)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){var e=a.sort((function(e,t){return e.name.first<t.name.first?-1:e.name.first>t.name.first?1:0}));l(Object(o.a)(e))}},"Sort employees alphabetically by first name"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){var e=a.sort((function(e,t){return e.name.last<t.name.last?-1:e.name.last>t.name.last?1:0}));l(Object(o.a)(e))}},"Sort employees alphabetically by last name"))),r.a.createElement("div",{className:"container"},r.a.createElement(h.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"First Name"),r.a.createElement("th",null,"Last Name"),r.a.createElement("th",null,"Email Address"),r.a.createElement("th",null,"Phone Number"),r.a.createElement("th",null,"Employee Photo"))),r.a.createElement("tbody",null,a.map((function(e){return r.a.createElement("tr",{key:e.id.value},r.a.createElement("th",null,e.name.first),r.a.createElement("th",null,e.name.last),r.a.createElement("th",null,e.email),r.a.createElement("th",null,e.phone),r.a.createElement("th",null,r.a.createElement("img",{src:e.picture.thumbnail,alt:"employee"})))}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.77241c07.chunk.js.map