(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{QeBL:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),o=a.n(n),l=a("9Dj+"),r=a("vOnD");var i=()=>o.a.createElement(c,null,o.a.createElement(d,null,o.a.createElement("p",{className:"___title"},"2Paradise",o.a.createElement("br",null),"Engineering Blog"),o.a.createElement("div",{className:"___videobox"},o.a.createElement("video",{src:"/videoplayback.mp4",autoPlay:!0,muted:!0,loop:!0}))));const c=r.b.section`
  position: relative;
  background-color: black;
  z-index: -2;
`,d=r.b.div`
  max-width: 1300px;
  margin: 0 auto;

  & .___title{
    text-align: left;
    font-weight: bold;
    color:#ffffff;
    font-size:5rem;
    line-height: 1.2em;
    padding:300px 0;
  }

  & .___videobox {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0.7;
    z-index: -1;

    video {
      width: 100%;
    }
  }
  
  @media only screen and (max-width: 992px) {
      & .___videobox {
        width: 100%;
        height: 100%;
        video {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          object-fit: cover;
        }
      }
  }
`;var m=a("Wbzz");var s=a("jxKE");var p=e=>{let{cate:t}=e;const a=s.a[t];return o.a.createElement(x,{color:s.c.black},o.a.createElement(f,null,o.a.createElement("img",{src:a.icon}),o.a.createElement("p",{className:"___title"},t?t.toLocaleUpperCase():t)))};const x=r.b.div`
    color: #ffffff;
    background-color: ${e=>e.color};
    flex: 1;
`,f=r.b.div`
  padding: 20px 20px;
  display: flex;
  justify-content: left;
  align-items: center;
  
  img {
    margin: 0;
    margin-right: 10px;
    width: 30px;
  }
  
  p {
    margin: 0
  }
  
  .___title {
    font-size: 1.3rem;
    font-weight: bold;  
  }
  
`;var b=e=>{let{idx:t,edge:a}=e;const{slug:n}=a.node.fields,{title:l,cate:r}=a.node.frontmatter,i=s.a[r];return o.a.createElement(u,{color:i.color},o.a.createElement("span",null,t+1,". "),o.a.createElement(m.Link,{to:n},l))};const u=r.b.li`
  span {
    font-size:1.2rem;
    font-width: bold;
    color: ${e=>e.color};
  }
  
  a {
      color:#2d2d2d;
      text-decoration: none;
      
      &:hover {
        color: ${e=>e.color};
      }
  }
  
`,g=e=>{let{cate:t}=e;return o.a.createElement(E,null,o.a.createElement(v,null,o.a.createElement(m.StaticQuery,{query:"2581440908",render:e=>{const{edges:a}=e.allMarkdownRemark;return a.filter(e=>e.node.frontmatter.cate===t).map((e,t)=>o.a.createElement(b,{key:t,idx:t,edge:e}))}})))};var _=o.a.memo(g);const E=r.b.div`
  flex: 3;
  background-color: #ffffff;
`,v=r.b.ul`
  margin: 0;
  padding: 0;

  li {
    margin: 0;
    padding: 0;

    padding: 15px 20px;
  }
`;var h=()=>{const e=(()=>{const e=Object(m.useStaticQuery)("1241438134"),t=[],{edges:a}=e.allMarkdownRemark;return a.map(e=>{const{cate:a}=e.node.frontmatter;a&&!t.includes(a)&&t.push(a)}),t})();return o.a.createElement(o.a.Fragment,null,o.a.createElement(w,null,"POST LIST"),o.a.createElement(k,{className:"___boxwrap",color:s.c.black},e.map((e,t)=>o.a.createElement("div",{className:"___box",key:t},o.a.createElement(p,{cate:e}),o.a.createElement(_,{cate:e})))))};const w=r.b.p`
    font-size: 3rem;
    font-weight: bold;
    text-align: left;
    margin: 100px 60px 60px 0;
    padding-left: 20px;
`,k=r.b.div`

  justify-content: center;
  border-radius: 10px;
  box-shadow: 5px 5px 20px ${e=>e.color};

  flex-wrap: wrap;
 
  .___box{
      display: flex;
  }
  
  .___box + .___box {
      border-top: 1px solid #2d2d2d;
  }

  @media only screen and (max-width: 992px) {
    .___box{
        display: block;
    }
  }

`;t.default=()=>o.a.createElement(l.a,{isWide:!0},o.a.createElement(i,null),o.a.createElement(y,null,o.a.createElement(h,null)));const y=r.b.section`
  max-width: 1300px;
  margin: 40px auto;
`}}]);
//# sourceMappingURL=component---src-pages-index-tsx-c2c4777ee0083b0708eb.js.map