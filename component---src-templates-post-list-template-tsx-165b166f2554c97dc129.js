(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"/JOT":function(n,e,t){"use strict";t.r(e),t.d(e,"pageQuery",(function(){return h}));var a,r=t("q1tI"),o=t.n(r),i=t("Bl7J"),l=t("MUpH"),c=t("vOnD"),d=t("Wbzz");!function(n){n.JAVASCRIPT="JavaScript",n.REACT="React",n.DOCKER="Docker",n.GRAPHQL="GraphQL"}(a||(a={}));var s=t("33Fu");function u(){var n=Object(l.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: left;\n    border-top:1px solid #d4d4d5;\n    padding:20px;\n    \n    a {\n      color:black;\n      font-size:0.7rem;\n      font-weight: bold;\n      padding: 0 7px;\n      margin:0 5px;\n      border-radius: 5px;\n      background-color: #d4d4d5;\n    }\n"]);return u=function(){return n},n}var p=function(n){var e=n.tags;return o.a.createElement(f,null,e&&o.a.createElement(s.a,null),e.map((function(n){var e="/post?tag="+n;return o.a.createElement(d.Link,{to:e,key:n},n)})))},f=c.b.div(u());function m(){var n=Object(l.a)(["\n  width: 740px;\n  padding:50px 0;\n  \n  .tagTitle {\n    padding: 10px 10px;\n    font-weight: bold;\n    font-size:1.3rem;\n  }\n  \n  .postCount {\n    padding: 0 10px 10px 10px;\n    font-size:1rem;\n    font-weight: bold;\n    color:#d4d4d5;\n    border-bottom: 0.5px solid #3399ff;\n  }\n  \n  ul {\n    margin:30px 0;\n  }\n  \n  ul li{\n    border: none;\n    border-radius: 5px;\n    box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;\n    transition: box-shadow .1s ease,transform .1s ease;\n    cursor: pointer;\n  }\n  \n  li + li {\n    margin-top: 30px;\n  }\n  \n  li .box-title {\n    padding:20px;\n  }\n\n  li .box-title p{\n    font-size:0.8rem;\n  }\n  \n  li .box-title a{\n    font-size:1.3rem;\n    text-decoration: none;\n    color: black;\n    font-weight: bold;\n  }\n  \n  li .box-title a:hover {\n    color: #3399ff;\n  }\n"]);return m=function(){return n},n}function b(){var n=Object(l.a)(["\n  display: flex;\n"]);return b=function(){return n},n}var g=function(n){var e=n.postData,t=n.listInfo,r=function(n){var e="";switch(n.toLocaleLowerCase()){case"javascript":e=a.JAVASCRIPT;break;case"react":e=a.REACT;break;case"docker":e=a.DOCKER;break;case"graphql":e=a.GRAPHQL;break;default:e=n}return e}(n.tag);return o.a.createElement(x,null,o.a.createElement(v,null,o.a.createElement("div",{className:"tagTitle"},r),o.a.createElement("div",{className:"postCount"},t.count," post"),o.a.createElement("ul",null,e.map((function(n){var e=n.node.frontmatter,t=e.postUrl,a=e.title,r=e.tag,i=e.date;return o.a.createElement("li",{key:a},o.a.createElement("div",{className:"box-title"},o.a.createElement(d.Link,{to:t},a),o.a.createElement("p",null,i)),o.a.createElement(p,{tags:r}))})))))},x=c.b.div(b()),v=c.b.div(m()),E=(["Gatsby","ReactJS"].join(", "),o.a.memo((function(n){var e=n.location.search.substring(1),t=new URLSearchParams(e),a=n.data.posts.edges,r="ALL";t.has("tag")&&(r=t.get("tag"),a=a.filter((function(n){return n.node.frontmatter.tag.includes(r)})));var l=a.length,c={curPage:1,count:l,pageCount:l?Math.ceil(l/8)+1:1};return o.a.createElement(i.a,null,o.a.createElement(g,{postData:a,listInfo:c,tag:r}))})));E.displayName="PostListTemplate";e.default=E;var h="1042019866"}}]);
//# sourceMappingURL=component---src-templates-post-list-template-tsx-165b166f2554c97dc129.js.map