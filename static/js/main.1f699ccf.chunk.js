(this["webpackJsonpintro-react"]=this["webpackJsonpintro-react"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),o=c.n(n),r=c(6),s=c.n(r),l=c(5),a=c(7),i=c(0),d=function(e){var t=e.todo,c=e.toggleTodo;return Object(i.jsxs)("tr",{class:"row",children:[Object(i.jsx)("td",{class:"col-2",children:Object(i.jsx)("input",{type:"checkbox",checked:t.complete,onChange:function(){c(t.id)}})}),Object(i.jsx)("td",{class:"col-10",children:t.name})]})},j=function(e){var t=e.todos,c=e.toggleTodo;return t.map((function(e){return Object(i.jsx)("tbody",{children:Object(i.jsx)(d,{toggleTodo:c,todo:e},e.id)})}))},b=c(17),u=(c(13),"todoApp.todos");var O=function(){var e=Object(n.useState)([]),t=Object(a.a)(e,2),c=t[0],o=t[1],r=Object(n.useRef)();return Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem(u));e&&o(e)}),[]),Object(n.useEffect)((function(){localStorage.setItem(u,JSON.stringify(c))}),[c]),Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{class:"main",children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("div",{className:"todoTable",children:Object(i.jsxs)("table",{className:"table table-striped table-hover",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{className:"row",children:[Object(i.jsx)("th",{className:"col-2",scope:"col",children:"Check"}),Object(i.jsx)("th",{className:"col-10",scope:"col",children:"Task"})]})}),Object(i.jsx)(j,{todos:c,toggleTodo:function(e){var t=Object(l.a)(c),n=t.find((function(t){return t.id===e}));n.complete=!n.complete,o(t)}})]})}),Object(i.jsxs)("div",{children:[Object(i.jsx)("input",{ref:r,placeholder:"Enter A ToDo...",type:"text"}),Object(i.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(e){var t=r.current.value;""!==t&&(o((function(e){return[].concat(Object(l.a)(e),[{id:Object(b.a)(),name:t,complete:!1}])})),r.current.value=null)},children:"Add Todo"}),Object(i.jsx)("button",{className:"btn btn-danger",onClick:function(){var e=c.filter((function(e){return!e.complete}));o(e)},children:"Clear Completed Todos"})]}),Object(i.jsxs)("div",{children:[c.filter((function(e){return!e.complete})).length," Left To Do."]})]})})})};c(14);s.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(O,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.1f699ccf.chunk.js.map