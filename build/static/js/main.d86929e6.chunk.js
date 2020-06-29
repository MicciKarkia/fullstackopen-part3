(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},20:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(14),c=t.n(o),l=(t(20),t(4)),u=t(2),i=function(e){var n=e.handleSearch,t=e.handleSearchStop;return r.a.createElement("div",null,"filter shown with",r.a.createElement("input",{onChange:n,onBlur:t}))},s=function(e){var n=e.addPerson,t=e.newName,a=e.handleNameChange,o=e.newNumber,c=e.handleNumberChange;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name:"," ",r.a.createElement("input",{value:t,required:!0,onChange:a})),r.a.createElement("div",null,"number:"," ",r.a.createElement("input",{value:o,required:!0,onChange:c})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))))},m=function(e){var n=e.persons,t=e.searchResult,a=e.handleDeletePerson;return r.a.createElement("div",null,r.a.createElement("ul",{style:{listStyle:"none",padding:0}},t?t.length?t.map((function(e){return r.a.createElement("li",{key:e.name},e.name," ",e.number)})):r.a.createElement("li",null,"No matching search results"):n.map((function(e){return r.a.createElement("li",{key:e.id},e.name," ",e.number," ",r.a.createElement("button",{onClick:function(){return a(e)}},"delete"))}))))},d=t(3),f=t.n(d),h="/api/persons",b=function(){return f.a.get(h).then((function(e){return e.data}))},p=function(e){return f.a.post(h,e).then((function(e){return e.data}))},g=function(e){return f.a.delete("".concat(h,"/").concat(e)).then((function(e){return e}))},v=function(e,n){return f.a.put("".concat(h,"/").concat(e),n).then((function(e){return e.data}))},E=function(e){var n=e.message;return console.log("message: ",n),null===n?null:"success"===n.type?r.a.createElement("div",{className:"success"},n.content):"error"===n.type?r.a.createElement("div",{className:"error"},n.content):void 0},w=function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],o=n[1],c=Object(a.useState)(""),d=Object(u.a)(c,2),f=d[0],h=d[1],w=Object(a.useState)(""),y=Object(u.a)(w,2),C=y[0],S=y[1],j=Object(a.useState)(null),N=Object(u.a)(j,2),O=N[0],k=N[1],L=Object(a.useState)(null),D=Object(u.a)(L,2),P=D[0],I=D[1];Object(a.useEffect)((function(){b().then((function(e){o(e)}))}),[]);var q=function(e){I(e),setTimeout((function(){I(null)}),5e3)};return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(E,{message:P}),r.a.createElement(i,{handleSearch:function(e){console.log("Searching for:",e.target.value);var n=e.target.value;k(t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})))},handleSearchStop:function(e){console.log("searching stopped"),k(null)}}),r.a.createElement("h2",null,"add a new"),r.a.createElement(s,{addPerson:function(e){e.preventDefault();var n={name:f,number:C},a=t.some((function(e){return e.name.toLowerCase()===f.toLowerCase()})),r=t.filter((function(e){return e.name.toLowerCase()===f.toLowerCase()}));a?function(){var e=Object(l.a)(Object(l.a)({},r[0]),{},{number:n.number});if(console.log("changedNumber: ",e),window.confirm("".concat(e.name," is already added to phonebook, replace the old number with a new one?"))){var a=e.id;v(a,e).then((function(e){o(t.map((function(n){return n.id!==e.id?n:e}))),q({type:"success",content:"Changed ".concat(e.name,"'s number")})})).catch((function(n){q({type:"error",content:"Information of ".concat(e.name," has already been removed from server")}),o(t.filter((function(n){return n.id!==e.id})))}))}}():p(n).then((function(e){console.log("returned person:",e),o(t.concat(e)),q({type:"success",content:"Added ".concat(e.name)})})).catch((function(e){console.log("error: ",e),q({type:"error",content:"Information of ".concat(n.name," has already been removed from server")}),o(t.filter((function(e){return e.id!==n.id})))})),console.log("persons: ",t),console.log("message is: ",P),h(""),S("")},newName:f,handleNameChange:function(e){console.log(e.target.value),h(e.target.value)},newNumber:C,handleNumberChange:function(e){console.log(e.target.value),S(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(m,{persons:t,searchResult:O,handleDeletePerson:function(e){console.log("delete button pressed",e),window.confirm("Delete ".concat(e.name,"?"))&&g(e.id).then((function(n){console.log("person deleted",n),o(t.filter((function(n){return n.name!==e.name}))),q({type:"success",content:"Deleted ".concat(e.name)})})).catch((function(n){q({type:"error",content:"Information of ".concat(e.name," has already been removed from server")}),o(t.filter((function(n){return n.id!==e.id})))})),console.log("message is: ",P)}}))};c.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.d86929e6.chunk.js.map