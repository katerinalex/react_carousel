(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{10:function(t,e,n){},11:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var a=n(5),i=n.n(a),c=n(2),r=n(1),s=(n(10),n(3)),u=(n(11),n(0)),o=function(t){var e=t.images,n=t.step,a=void 0===n?3:n,i=t.frameSize,o=void 0===i?3:i,j=t.itemWidth,l=void 0===j?130:j,m=t.animationDuration,b=void 0===m?1e3:m,g=t.infinite,p=void 0!==g&&g,O=Object(r.useState)(0),h=Object(c.a)(O,2),x=h[0],d=h[1],f=Object(r.useState)({marginLeft:"0",transitionProperty:"margin-left",transitionDuration:"".concat(b,"ms")}),v=Object(c.a)(f,2),y=v[0],C=v[1],S={width:"".concat(l,"px"),height:"".concat(l,"px")},L={width:"".concat(o*l,"px")};return Object(u.jsxs)("div",{className:"Carousel",children:[Object(u.jsx)("ul",{className:"Carousel__list",style:L,children:e.map((function(t){return Object(u.jsx)("li",{style:0===t.localeCompare(e[0])?y:{},children:Object(u.jsx)("img",{className:"image",style:S,src:t,alt:"".concat(e.indexOf(t))})},t)}))}),Object(u.jsx)("button",{type:"button",onClick:function(){p||(C((function(t){return Object(s.a)(Object(s.a)({},t),{},{marginLeft:x>a+1?"".concat(parseInt(t.marginLeft,10)+a*l,"px"):"0"})})),d(x>a+1?function(t){return t-o}:0))},children:"Prev"}),Object(u.jsx)("button",{type:"button","data-cy":"next",onClick:function(){p||(x<e.length-a-1?(C((function(t){return Object(s.a)(Object(s.a)({},t),{},{marginLeft:"".concat(parseInt(t.marginLeft,10)-a*l,"px")})})),d((function(t){return t+a}))):(C((function(t){return Object(s.a)(Object(s.a)({},t),{},{marginLeft:"".concat(-(e.length-o)*l,"px")})})),d(e.length-o)))},children:"Next"})]})},j=function(){var t=["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],e=Object(r.useState)(3),n=Object(c.a)(e,2),a=n[0],i=n[1],s=Object(r.useState)(3),j=Object(c.a)(s,2),l=j[0],m=j[1],b=Object(r.useState)(130),g=Object(c.a)(b,2),p=g[0],O=g[1],h=Object(r.useState)(1e3),x=Object(c.a)(h,2),d=x[0],f=x[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{"data-cy":"title",children:"Carousel with ".concat(t.length," images")}),Object(u.jsxs)("div",{className:"inputs",children:[Object(u.jsxs)("label",{children:["Step",Object(u.jsx)("input",{type:"number",value:a,min:"1",max:"10",onChange:function(t){return i(+t.target.value)}})]}),Object(u.jsxs)("label",{children:["FrameSize",Object(u.jsx)("input",{type:"number",value:l,min:"1",max:"10",onChange:function(t){return m(+t.target.value)}})]}),Object(u.jsxs)("label",{children:["ItemWidth",Object(u.jsx)("input",{type:"number",value:p,min:"50",max:"200",onChange:function(t){return O(+t.target.value)}})]}),Object(u.jsxs)("label",{children:["Animation Duration",Object(u.jsx)("input",{type:"number",value:d,min:"500",max:"3000",onChange:function(t){return f(+t.target.value)}})]})]}),Object(u.jsx)(o,{images:t,step:a,frameSize:l,itemWidth:p,animationDuration:d,infinite:!1})]})};i.a.render(Object(u.jsx)(j,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.929afdaf.chunk.js.map