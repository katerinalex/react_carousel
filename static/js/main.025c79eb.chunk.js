(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{12:function(t,n,e){},13:function(t,n,e){},15:function(t,n,e){"use strict";e.r(n);var i=e(7),a=e.n(i),c=e(2),r=e(3),s=e(5),o=e(4),l=e(1),u=e.n(l),p=(e(12),e(13),e(0)),m=function(t){Object(s.a)(e,t);var n=Object(o.a)(e);function e(){var t;Object(c.a)(this,e);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(t=n.call.apply(n,[this].concat(a))).state={current:0},t}return Object(r.a)(e,[{key:"render",value:function(){var t=this.props,n=t.images,e=t.step,i=void 0===e?3:e,a=t.frameSize,c=void 0===a?3:a,r=t.itemWidth,s=void 0===r?130:r,o=t.animationDuration,l=void 0===o?1e3:o,u=t.infinite,m=void 0!==u&&u,b=this.state.current,g={width:"".concat(s,"px"),height:"".concat(s,"px")},h={width:"".concat(c*s,"px"),transform:"",transitionDuration:"".concat(l,"s")};return Object(p.jsxs)("div",{className:"Carousel",children:[Object(p.jsx)("ul",{className:"Carousel__list",style:h,children:n.map((function(t){return Object(p.jsx)("li",{children:Object(p.jsx)("img",{className:"image",style:g,src:t,alt:"".concat(n.indexOf(t))})},t)}))}),Object(p.jsx)("button",{type:"button",onClick:function(){m||(h.transform=b>3?"translate(".concat(b*s-i*s,"px, 0)"):"translate(0, 0)")},children:"Prev"}),Object(p.jsx)("button",{type:"button",onClick:function(){m||b<n.length-3&&(h.transform="translate(".concat(b*s+i*s,"px, 0)"))},children:"Next"})]})}}]),e}(u.a.Component),b=function(t){Object(s.a)(e,t);var n=Object(o.a)(e);function e(){var t;Object(c.a)(this,e);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(t=n.call.apply(n,[this].concat(a))).state={images:["../public/img/1.png","../public/img/2.png","../public/img/3.png","../public/img/4.png","../public/img/5.png","../public/img/6.png","../public/img/7.png","../public/img/8.png","../public/img/9.png","../public/img/10.png"]},t}return Object(r.a)(e,[{key:"render",value:function(){var t=this.state.images;return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)("h1",{children:["Carousel with ",t.length," images"]}),Object(p.jsx)(m,{images:t,step:3,frameSize:3,itemWidth:130,animationDuration:1e3,infinite:!1})]})}}]),e}(u.a.Component),g=b;a.a.render(Object(p.jsx)(g,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.025c79eb.chunk.js.map