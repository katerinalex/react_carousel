(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var i=n(5),c=n.n(i),a=n(6),r=n(7),s=n(9),o=n(8),u=n(2),l=n.n(u),m=(n(14),n(1)),g=n(4),j=(n(15),n(0)),b=function(t){var e=t.images,n=t.step,i=void 0===n?3:n,c=t.frameSize,a=void 0===c?3:c,r=t.itemWidth,s=void 0===r?130:r,o=t.animationDuration,l=void 0===o?1e3:o,b=t.infinite,p=void 0!==b&&b,O=Object(u.useState)(0),f=Object(g.a)(O,2),h=f[0],d=f[1],x=Object(u.useState)({marginLeft:"0",transitionProperty:"margin-left",transitionDuration:"".concat(l,"ms")}),v=Object(g.a)(x,2),y=v[0],C=v[1],w={width:"".concat(s,"px"),height:"".concat(s,"px")},N={width:"".concat(a*s,"px")};return Object(j.jsxs)("div",{className:"Carousel",children:[Object(j.jsx)("ul",{className:"Carousel__list",style:N,children:e.map((function(t){return 0===t.localeCompare(e[0])?Object(j.jsx)("li",{style:y,children:Object(j.jsx)("img",{className:"image",style:w,src:t,alt:"".concat(e.indexOf(t))})},t):Object(j.jsx)("li",{children:Object(j.jsx)("img",{className:"image",style:w,src:t,alt:"".concat(e.indexOf(t))})},t)}))}),Object(j.jsx)("button",{type:"button",onClick:function(){p||(h>3?(C((function(t){return Object(m.a)(Object(m.a)({},t),{},{marginLeft:"".concat(h*s-i*s,"px")})})),d((function(t){return t-3}))):(C((function(t){return Object(m.a)(Object(m.a)({},t),{},{marginLeft:"0"})})),d(0)))},children:"Prev"}),Object(j.jsx)("button",{type:"button",onClick:function(){p||(h<e.length-3?(C((function(t){return Object(m.a)(Object(m.a)({},t),{},{marginLeft:"".concat(h*s+i*s*-1,"px")})})),d((function(t){return t+3}))):(C((function(t){return Object(m.a)(Object(m.a)({},t),{},{marginLeft:"".concat((e.length-3)*s+i*s*-1,"px")})})),d(0)))},children:"Next"})]})},p=function(t){Object(s.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(a.a)(this,n);for(var i=arguments.length,c=new Array(i),r=0;r<i;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={images:["../img/1.png","../img/2.png","../img/3.png","../img/4.png","../img/5.png","../img/6.png","../img/7.png","../img/8.png","../img/9.png","../img/10.png"]},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this.state.images;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("h1",{children:["Carousel with ",t.length," images"]}),Object(j.jsx)(b,{images:t,step:3,frameSize:3,itemWidth:130,animationDuration:1e3,infinite:!1})]})}}]),n}(l.a.Component),O=p;c.a.render(Object(j.jsx)(O,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.56d1fc53.chunk.js.map