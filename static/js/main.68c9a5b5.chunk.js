(this["webpackJsonpreact-the-complete-guide"]=this["webpackJsonpreact-the-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={backdrop:"ErrorModal_backdrop__8eNbc",modal:"ErrorModal_modal__1MqFF",header:"ErrorModal_header__2jcdR",content:"ErrorModal_content__lpLZY",actions:"ErrorModal_actions__GwBb-"}},,,,,function(e,t,n){e.exports={input:"AddUser_input__aufDb"}},function(e,t,n){e.exports={card:"Card_card__2N-0v"}},function(e,t,n){e.exports={button:"Button_button__2j_YQ"}},function(e,t,n){e.exports={users:"UsersList_users__1Zq-Z"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(2),s=n.n(a),o=(n(17),n(12)),i=n(5),l=n(9),u=n.n(l),d=n(0);function j(e){return Object(d.jsx)("div",{className:u.a.card+" "+e.className,children:e.children})}var b=n(8),m=n.n(b),O=n(10),f=n.n(O);function x(e){return Object(d.jsx)("button",{className:f.a.button,type:e.type||"button",onClick:e.onClick,children:e.children})}var h=n(3),p=n.n(h),_=function(e){return Object(d.jsx)("div",{className:p.a.backdrop})},v=function(e){return Object(d.jsxs)(j,{className:p.a.modal,children:[Object(d.jsx)("header",{className:p.a.header,children:Object(d.jsx)("h2",{children:e.title})}),Object(d.jsx)("div",{className:p.a.content,children:Object(d.jsx)("p",{children:e.message})}),Object(d.jsx)("footer",{className:p.a.actions,children:Object(d.jsx)(x,{onClick:e.onConfirm,children:"Okay"})})]})};function g(e){return Object(d.jsxs)(c.a.Fragment,{children:[s.a.createPortal(Object(d.jsx)(_,{}),document.getElementById("backdrop-portal")),s.a.createPortal(Object(d.jsx)(v,{title:e.title,message:e.message,onConfirm:e.onConfirm}),document.getElementById("overlay-root"))]})}var y=function(){return Object(d.jsx)("div",{className:p.a.backdrop})},N=function(){return Object(d.jsx)("div",{style:{position:"fixed",top:"50%",left:"50%",fontSize:"30px",color:"white",transform:"translate(-50%, -50%)"},children:"Loading ....."})};function k(){return Object(d.jsxs)(c.a.Fragment,{children:[s.a.createPortal(Object(d.jsx)(y,{}),document.getElementById("backdrop-portal")),s.a.createPortal(Object(d.jsx)(N,{}),document.getElementById("overlay-root"))]})}function E(e){var t=Object(r.useRef)(),n=Object(r.useRef)(),c=Object(r.useState)(),a=Object(i.a)(c,2),s=a[0],o=a[1],l=Object(r.useState)(!1),u=Object(i.a)(l,2),b=u[0],O=u[1],f=function(){n.current.value="",t.current.value=""},h=function(e,t){return!(0===e.trim().length||""===t||+t<1)||(o({title:"Input Error",message:"Please enter a valid name and age (non-empty values)"}),setTimeout((function(){o(null)}),3e3),!1)};return Object(d.jsxs)("div",{children:[s&&Object(d.jsx)(g,{title:s.title,message:s.message,onConfirm:function(){o(null)}}),b&&Object(d.jsx)(k,{}),Object(d.jsx)(j,{className:m.a.input,children:Object(d.jsxs)("form",{onSubmit:function(r){r.preventDefault(),O(!0),setTimeout((function(){O(!1);var r=t.current.value,c=n.current.value;h(r,c)&&(e.onAddUser(r,c),f())}),4e3)},className:m.a.form,children:[Object(d.jsx)("label",{htmlFor:"username",children:"Username"}),Object(d.jsx)("input",{id:"username",type:"text",ref:t}),Object(d.jsx)("label",{htmlFor:"age",children:"Age(years)"}),Object(d.jsx)("input",{id:"age",type:"number",ref:n}),Object(d.jsx)(x,{type:"submit",children:"Add User"})]})})]})}var C=n(11),B=n.n(C);var M=function(e){return Object(d.jsx)(j,{className:B.a.users,children:Object(d.jsx)("ul",{children:e.users.map((function(e){return Object(d.jsxs)("li",{children:[e.name," (",e.age," years old)"]},e.id)}))})})};var F=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)(E,{onAddUser:function(e,t){c((function(n){return[].concat(Object(o.a)(n),[{name:e,age:t,id:Math.random().toString()}])}))}}),Object(d.jsx)(M,{users:n})]})};s.a.render(Object(d.jsx)(F,{}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.68c9a5b5.chunk.js.map