(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},19:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),r=t(13),c=t.n(r),l=t(2),u=(t(19),t(3)),i=t.n(u),s="/api/persons",f=function(){return i.a.get(s).then((function(e){return e.data}))},m=function(e){return i.a.post(s,e).then((function(e){return e.data}))},d=function(e){console.log(e);var n="".concat(s,"/").concat(e),t=i.a.delete(n);if(window.confirm("Do you really want it to delete "))return t.then((function(e){return e.data}))},p=function(e,n){console.log(n);var t="".concat(s,"/").concat(e);return i.a.put(t,n).then((function(e){return e.data}))},h=function(){var e=Object(o.useState)([]),n=Object(l.a)(e,2),t=n[0],r=n[1],c=Object(o.useState)(""),u=Object(l.a)(c,2),i=u[0],s=u[1],h=Object(o.useState)(""),g=Object(l.a)(h,2),v=g[0],b=g[1],E=Object(o.useState)(""),w=Object(l.a)(E,2),j=w[0],O=w[1],y=Object(o.useState)(""),k=Object(l.a)(y,2),C=k[0],S=k[1];Object(o.useEffect)((function(){f().then((function(e){console.log(e),r(e)})).catch((function(e){alert("the server is not running, please run >>npx json-server --port 3001 --watch db.json")}))}),[]);var P=function(e){e.preventDefault();var n={name:i,number:v};if(!t.filter((function(e){return e.name===i})).length>0)m(n).then((function(e){r(t.concat(e)),s(""),b(""),console.log(t),S("Added ".concat(i," to the list")),setTimeout((function(){S("")}),5e3)}));else if(window.confirm("".concat(i," is already added to phonebook\nDo you want to replace it?"))){console.log(t);var o=t.filter((function(e){return e.name===i}));console.log(o[0].id);var a=o[0].id;p(a,n).then((function(e){r(t.map((function(n){return n.id!==a?n:e}))),s(""),b(""),S("updated number of '".concat(i,"' with '").concat(v,"' to the list")),setTimeout((function(){S("")}),5e3)})).catch((function(e){S("Person '".concat(a,"' was already removed from the server")),setTimeout((function(){S("")}),5e3),r(t.filter((function(e){return e.id!==a})))}))}},T=function(e){console.log(e.target.value),s(e.target.value)},x=function(e){console.log(e.target.value),b(e.target.value)},D=function(e){var n=e.persons;console.log(n);var t=n.filter((function(e){return e.name.toUpperCase().indexOf(j.toUpperCase())>-1}));return console.log(t),a.a.createElement(a.a.Fragment,null,t.map((function(e){return a.a.createElement(N,{person:e,key:e.name,deletePerson:function(){return F(e.id)}})})))},F=function(e){console.log(e),console.log("person want to be deleted"),d(e).then((function(n){console.log(n),r(t.filter((function(n){return n.id!==e})))})).catch((function(n){S("Person with '".concat(e," ' was already deleted from server")),setTimeout((function(){S("")}),5e3)}))},J=function(e){var n=e.message;return console.log(n),""===n?null:a.a.createElement("div",{className:"error"},n)},N=function(e){var n=e.person,t=e.deletePerson;return a.a.createElement("p",null,n.name," ",n.number,a.a.createElement("button",{onClick:t}," ","erase"))},U=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("form",{onSubmit:P},a.a.createElement("div",null,"name: ",a.a.createElement("input",{value:i,onChange:T})),a.a.createElement("div",null,"number: ",a.a.createElement("input",{value:v,onChange:x})),a.a.createElement("div",null,a.a.createElement("button",{type:"submit"},"add"))))};return a.a.createElement("div",null,a.a.createElement("h2",null,"Phonebook"),a.a.createElement(J,{message:C}),a.a.createElement("p",null," filter shown with ",a.a.createElement("input",{value:j,onChange:function(e){console.log(e.target.value),O(e.target.value)}})," "),a.a.createElement("h2",null," add a new "),a.a.createElement(U,null),a.a.createElement("h2",null,"Numbers"),a.a.createElement(D,{persons:t}))};c.a.render(a.a.createElement(h,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.d8083fd7.chunk.js.map