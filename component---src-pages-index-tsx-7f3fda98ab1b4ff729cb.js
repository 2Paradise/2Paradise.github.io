(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{QeBL:function(n,e,t){"use strict";t.r(e);var r=t("MUpH"),a=t("q1tI"),o=t.n(a),i=t("9Dj+"),c=t("vOnD");function l(){var n=Object(r.a)(["\n  max-width: 1300px;\n  margin: 0 auto;\n\n  & .___title{\n    text-align: left;\n    font-weight: bold;\n    color:#ffffff;\n    font-size:5rem;\n    line-height: 1.2em;\n    padding:300px 0;\n  }\n\n  & .___videobox {\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translateY(-50%);\n    opacity: 0.7;\n    z-index: -1;\n\n    video {\n      width: 100%;\n    }\n  }\n  \n  @media only screen and (max-width: 992px) {\n      & .___videobox {\n        width: 100%;\n        height: 100%;\n        video {\n          position: absolute;\n          top: 0;\n          left: 0;\n          height: 100%;\n          object-fit: cover;\n        }\n      }\n  }\n"]);return l=function(){return n},n}function u(){var n=Object(r.a)(["\n  position: relative;\n  background-color: black;\n  z-index: -2;\n"]);return u=function(){return n},n}var d=function(){return o.a.createElement(f,null,o.a.createElement(m,null,o.a.createElement("p",{className:"___title"},"2Paradise",o.a.createElement("br",null),"Engineering Blog"),o.a.createElement("div",{className:"___videobox"},o.a.createElement("video",{src:"/videoplayback.mp4",autoPlay:!0,muted:!0,loop:!0}))))},f=c.b.section(u()),m=c.b.div(l()),p=t("Wbzz"),s=t("jxKE");function b(){var n=Object(r.a)(["\n  padding: 20px 20px;\n  display: flex;\n  justify-content: left;\n  align-items: center;\n  \n  img {\n    margin: 0;\n    margin-right: 10px;\n    width: 30px;\n  }\n  \n  p {\n    margin: 0\n  }\n  \n  .___title {\n    font-size: 1.3rem;\n    font-weight: bold;  \n  }\n  \n"]);return b=function(){return n},n}function x(){var n=Object(r.a)(["\n    color: #ffffff;\n    background-color: ",";\n    flex: 1;\n"]);return x=function(){return n},n}var v=function(n){var e=n.cate,t=s.a[e];return o.a.createElement(g,{color:s.c.black},o.a.createElement(_,null,o.a.createElement("img",{src:t.icon}),o.a.createElement("p",{className:"___title"},e?e.toLocaleUpperCase():e)))},g=c.b.div(x(),(function(n){return n.color})),_=c.b.div(b());function E(){var n=Object(r.a)(["\n  span {\n    font-size:1.2rem;\n    font-width: bold;\n    color: ",";\n  }\n  \n  a {\n      color:#2d2d2d;\n      text-decoration: none;\n      \n      &:hover {\n        color: ",";\n      }\n  }\n  \n"]);return E=function(){return n},n}var h=function(n){var e=n.idx,t=n.edge,r=t.node.fields.slug,a=t.node.frontmatter,i=a.title,c=a.cate,l=s.a[c];return o.a.createElement(w,{color:l.color},o.a.createElement("span",null,e+1,". "),o.a.createElement(p.Link,{to:r},i))},w=c.b.li(E(),(function(n){return n.color}),(function(n){return n.color}));function k(){var n=Object(r.a)(["\n  margin: 0;\n  padding: 0;\n\n  li {\n    margin: 0;\n    padding: 0;\n\n    padding: 15px 20px;\n  }\n"]);return k=function(){return n},n}function j(){var n=Object(r.a)(["\n  flex: 3;\n  background-color: #ffffff;\n"]);return j=function(){return n},n}var y=function(n){var e=n.cate;return o.a.createElement(z,null,o.a.createElement(N,null,o.a.createElement(p.StaticQuery,{query:"2581440908",render:function(n){return n.allMarkdownRemark.edges.filter((function(n){return n.node.frontmatter.cate===e})).map((function(n,e){return o.a.createElement(h,{key:e,idx:e,edge:n})}))}})))},O=o.a.memo(y),z=c.b.div(j()),N=c.b.ul(k());function L(){var n=Object(r.a)(["\n\n  justify-content: center;\n  border-radius: 10px;\n  box-shadow: 5px 5px 20px ",";\n\n  flex-wrap: wrap;\n \n  .___box{\n      display: flex;\n  }\n  \n  .___box + .___box {\n      border-top: 1px solid #2d2d2d;\n  }\n\n  @media only screen and (max-width: 992px) {\n    .___box{\n        display: block;\n    }\n  }\n\n"]);return L=function(){return n},n}function S(){var n=Object(r.a)(["\n    font-size: 3rem;\n    font-weight: bold;\n    text-align: left;\n    margin: 100px 60px 60px 0;\n    padding-left: 20px;\n"]);return S=function(){return n},n}var M=function(){var n,e,t=(n=Object(p.useStaticQuery)("1241438134"),e=[],n.allMarkdownRemark.edges.map((function(n){var t=n.node.frontmatter.cate;t&&!e.includes(t)&&e.push(t)})),e);return o.a.createElement(o.a.Fragment,null,o.a.createElement(P,null,"POST LIST"),o.a.createElement(Q,{className:"___boxwrap",color:s.c.black},t.map((function(n,e){return o.a.createElement("div",{className:"___box",key:e},o.a.createElement(v,{cate:n}),o.a.createElement(O,{cate:n}))}))))},P=c.b.p(S()),Q=c.b.div(L(),(function(n){return n.color}));function q(){var n=Object(r.a)(["\n  max-width: 1300px;\n  margin: 40px auto;\n"]);return q=function(){return n},n}e.default=function(){return o.a.createElement(i.a,{isWide:!0},o.a.createElement(d,null),o.a.createElement(B,null,o.a.createElement(M,null)))};var B=c.b.section(q())}}]);
//# sourceMappingURL=component---src-pages-index-tsx-7f3fda98ab1b4ff729cb.js.map