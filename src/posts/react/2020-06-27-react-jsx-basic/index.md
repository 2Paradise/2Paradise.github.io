---
hide: false
type: "post"
title: "React JSX 기본문법"
tag: ["React", "jsx"]
date: "2020-06-27"
desc: "React의 Html 렌더링을 위해 사용되는 JSX의 기본 문법에 대해 알아보자. html 과 비슷하지만 몇가지 규칙이 있다. 태그는 꼭 닫혀 있어야 한다. 두 개 이상의 엘리먼트는 하나의 엘리먼트로 감싸져야 한다."
cate: "react"
---

# React JSX 기본문법

본 Post 내용은 react 강의 정리 내용입니다. 출처 : [https://velopert.com/](https://velopert.com/)

# JSX

React의 Html 렌더링을 위해 사용되는 JSX의 기본 문법에 대해 알아보자. html 과 비슷하지만 몇가지 규칙이 있다.

JSX [참고문서 let const 화살표함수](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/%EC%95%A0%EB%A1%9C%EC%9A%B0_%ED%8E%91%EC%85%98) 


- 태그는 꼭 닫혀 있어야 한다.

```javascript
<input type='text'>
```

- 두 개 이상의 엘리먼트는 하나의 엘리먼트로 감싸져야 한다.

불필요한 `div` 로 감싸기 보단 `Fragment` 태그를 이용하여 처리할 수 있다.

```javascript
import React, { Component, Fragment } from "react";

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>안녕하세요 React</h1>
        <h2>안녕하세요 NodeJs</h2>
      </Fragment>
    );
  }
}

export default App;
```

- JSX 안에 JS 사용하기

```javascript
import React, { Component, Fragment } from "react";

class App extends Component {
  render() {
    const name = "2Paradise";
    return (
      <Fragment>
        <h1>안녕하세요 React</h1>
        <h2>안녕하세요 NodeJs</h2>
        <h2>안녕하세요 {name}</h2>
      </Fragment>
    );
  }
}

export default App;
```

**`var`**  scope 가 function 단위. ES6에서 더이상 사용하지 않음
**`let`**  scope 가 블록 {} 단위. 유동적인 값
**`const`**  scope가 블록 단위. 한번 선언 후 고정적인 값

## 조건부 렌더링

 가장 보편적인 방법으로는 삼항 연산자를 사용한다.

```javascript
import React, { Component, Fragment } from "react";

class App extends Component {
  render() {
    const name = '2Paradise';
    return (
      <Fragment>
        <div>
          {
            1+1 === 3 
            ? '맞다' 
            : '틀리다.'
          }
        </div>
        <div>
          {
            name === '2Paradise' && <div>paradise is where i am</div>
          }
        </div>
      </Fragment>

    );
  }
}

export default App;
```

여러가지 조건을 적용할 경우 JSX 구분 밖에서 구현하는 것이 일반 적이지만, JSX안에 function을 선언하고 렌더링시 실행 하게 할 수도 있다.

```javascript
import React, { Component, Fragment } from "react";

class App extends Component {
  render() {
    const name = '2Paradise';
    return (
      <Fragment>
        <div>
          {
            (() =>{
              if (name === '2Paradise') return <div>2para</div>
              if (name === '2Para') return <div>2para !!</div>
              if (name === '2P') return <div>2p !!</div>
            })()
          }
        </div>
      </Fragment>

    );
  }
}

export default App;
```

## CSS 적용방법

 

- script 작성

```javascript
import React, {Component} from "react";

class App extends Component{
  render() {
    const style = {
        backgroundColor : 'balck',
        padding : '16px',
        color : 'white', 
        fontSize : '36px'
    };
    return (
      <div style={style}>
          안녕하세요.
      </div>

    );
  }
}

export default App;
```

- css import

`App.css` 파일 생성 후 `className` 속성에 class 명을 선언 해준다.

```javascript
import React, {Component} from "react";
import './App.css';

class App extends Component{
  render() {
    return (
      <div className="App">
          안녕하세요.
      </div>

    );
  }
}

export default App;
```

## 주석 작성 방법

JSX 내부에서 주석 작성 시 `{}` 사용, 또는 태그 사이에 주석 작성 가능

```javascript
import React, {Component} from "react";
import './App.css';

class App extends Component{
  render() {
    // javascript 주석
    return (
      <div className="App">
      {
        // JSX 내부에서 주석작성 시 {} 사용
      }
      <h1
        // 태그 사이에 주석 작성 가능
      >
      2Paradise
      </h1>
          안녕하세요.
      </div>
    );
  }
}

export default App;
```
