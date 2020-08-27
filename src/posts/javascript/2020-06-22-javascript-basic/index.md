---
hide: false
type: "post"
title: "Javascript ES6 기본"
tag: ["JavaScript", "자바스크립트", "ES6"]
date: "2020-06-22"
desc: "ECMAScript5는 2009년 12월에 등장하였다. ECMAScript2019가 나와있는 현재 아직도 많은 프로젝트에서는 ES5로 코딩이 되고 있다. 나 또한 ES6 문법은 생소하지만 이에 대한 학습의 필요성을 느끼고 Front-end 개발자로서 기초를 다진다는 생각으로 접근하려 한다."
---

 ECMAScript5는 2009년 12월에 등장하였다. ECMAScript2019가 나와있는 현재 아직도 많은 프로젝트에서는 ES5로 코딩이 되고 있다. 나 또한 ES6 문법은 생소하지만 이에 대한 학습의 필요성을 느끼고 Front-end 개발자로서 기초를 다진다는 생각으로 접근하려 한다.
 
 ES6를 사용해야 하는 많은 이유들이 있겠지만 ES6부터 추가된 가장 많이 사용되는 문법으로
 
 - 비구조화할당
 - 객체 초기자
 - 템플릿 리터럴 문자
 - 기본매개변수
 - Promise - Co - async/await
 
 등등 알아가야 할 문법들이 많이 있다. 우선 기본적인 문법들 부터 알아보자.
 

## 화살표 함수

```javascript
const add = function(a, b) {
  return a + b;
};

const add1 = (a, b) => {
  return a + b;
};

const add2 = (a, b) => a + b;

const sum = add(1, 2);
const sum1 = add1(1, 2);
const sum2 = add2(1, 2);

console.log(sum);
console.log(sum1);
console.log(sum2);
```

## 배열 내장함수

- forEach

```javascript
const superheroes = ["아이언맨", "캡틴아메리카", "토르", "닥터 스트레인지"];

const print = (hero) => console.log(hero);

superheroes.forEach(print);

-------------CONSOLE-------------

아이언맨 
캡틴아메리카 
토르 
닥터 스트레인지
```

- map

```javascript
const items = [{ id: 1, text: "hello" }, { id: 2, text: "bye" }];

const texts = items.map(item => item.text);
console.log(texts);

-------------CONSOLE-------------

["hello", "bye"]
```

- filter

```javascript
const todos = [
  {
    id: 1,
    text: "java 입문",
    done: true
  },
  {
    id: 2,
    text: "함수배우기",
    done: true
  },
  {
    id: 3,
    text: "배열 내장 함수",
    done: false
  }
];

const taskNotDone = todos.filter(todo => todo.done === false);

// todos.filter(todo => !todo.done); 와도 같은 의미 이다.

console.log(taskNotDone);

----------------CONSOLE-----------------

[Object]
	0: Object
		id: 3
		text: "배열 내장 함수"
		done: false
```

- splice

배열에서 특정 항목을 지울 때 사용

```javascript
const num = [10, 20, 30, 40];
const idx = num.indexOf(30);
const spliced = num.splice(idx, 2);

console.log("spliced", spliced);
console.log("num", num);

----------------CONSOLE-----------------

spliced 
[30, 40]
num 
[10, 20]

```

- slice

배열에서 특정 항목을 지울 때 사용. 단 기존 배열의 구조를 건드리지 않음

```javascript
const num = [10, 20, 30, 40];

const sliced = num.slice(0, 2);

console.log("sliced", sliced);
console.log("num", num);

----------------CONSOLE-----------------

sliced 
[10, 20]
num 
[10, 20, 30, 40]
```

- shift

첫번째 원소를 배열에서 추출해준다. 기존 배열을 변경 시키며 반복 될 때마다 하나씩 제거된다.

```javascript
const num = [10, 20, 30, 40];

const value = num.shift();

console.log("value", value);
console.log("num", num);

----------------CONSOLE-----------------

value 
10
num 
[20, 30, 40]
```

- pop

마지막 원소를 배열에서 추출해준다. 기존의 배열을 변경 시키며 반복 될 때마다 하나씩 제거된다.

```javascript
const num = [10, 20, 30, 40];

const value = num.pop();

console.log("value", value);
console.log("num", num);

----------------CONSOLE-----------------

value 
40
num 
[10, 20, 30]
```

- unshift

배열의 첫번째 위치에 지정한 원소를 추가한다.

```javascript
const num = [10, 20, 30, 40];

const value = num.unshift(5);

console.log("num", num);

----------------CONSOLE-----------------

num 
[5, 10, 20, 30, 40]
```

- push

배열의 마지막 위치에 지정한 원소를 추가한다.

```javascript
const num = [10, 20, 30, 40];

const value = num.push(50);

console.log("num", num);

----------------CONSOLE-----------------

num 
[10, 20, 30, 40, 50]
```

- concat

배열 합. 기존의 배열을 건드리지 않음

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const concated = arr1.concat(arr2);

// const concated = [...arr1, ...arr2];
console.log(concated);

----------------CONSOLE-----------------

[1, 2, 3, 4, 5, 6]
```

- reduce

```javascript
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum);

// accumulator = 누적값
// 0 => 초기값

const avg = numbers.reduce((accumulator, current, index, array) => {
  if (index === array.length - 1) {
    return (accumulator + current) / array.length;
  }
  return accumulator + current;
}, 0);
console.log(avg);

// array = reduce 함수 실행 대상 자신

----------------CONSOLE-----------------

5
3
```

reduce 함수는 숫자가 아니더라도 배열을 컨트롤 함에 있어 사용이 많은 유용한 함수이므로 잘 알아 두는 것이 좋다.

```javascript
const alphabets = ["a", "a", "a", "b", "b", "c", "c", "d", "e"];

const counts = alphabets.reduce((acc, cur) => {
  if (acc[cur]) {
    acc[cur] += 1;
  } else {
    acc[cur] = 1;
  }
  return acc;
}, {});

console.log(counts);

----------------CONSOLE-----------------

Object {a: 3, b: 2, c: 2, d: 1, e: 1}
a: 3
b: 2
c: 2
d: 1
e: 1
```
