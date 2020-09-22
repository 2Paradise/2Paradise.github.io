---
hide: false
type: "post"
title: "Javascript 에서의 true, false"
tag: ["JavaScript", "자바스크립트", "ES6"]
date: "2020-09-22"
desc: "언어에서의 boolean 타입에 해당하는 `true` `false` 두 가지의 값이 존재한다. 이러한 값들을 진리 값이라고 부르며 프로그래밍에서의 진리 값은 참과 거짓을 나타내기 위해 사용된다. Javascript 에서는 boolean 타입이 와야 하는 자리에 다른 타입의 값이 와도 에러 없이 실행되는 경우가 있다."
cate: "javascript"
---

언어에서의 boolean 타입에 해당하는 `true` `false` 두 가지의 값이 존재한다. 이러한 값들을 진리 값이라고 부르며 프로그래밍에서의 진리 값은 참과 거짓을 나타내기 위해 사용된다. Javascript 에서는 boolean 타입이 와야 하는 자리에 다른 타입의 값이 와도 에러 없이 실행되는 경우가 있다. 

```javascript
if(1) {
	console.log("print truthy value");
}

if(0) {
	console.log("this console does not print");
}
```

위와 같이 어떠한 값은 `true`, 어떠 값들은 `false` 로 취급 되는데 `truthy`, `falsy` 하다고 부른다. 

### Javascript에서의 falsy한 값

- `false`
- `null`
- `undefined`
- `0`, `-0` (숫자 리터럴)
- `NaN`
- `''` (빈 문자열)

🔔 `NaN` 은 자기 자신과 같지 않은 유일한 자료형이다.

```javascript
> undefined == undefined
true
> null == null
true
> NaN == NaN
false
```

javascript 에서 `falsy` 한 값에 의한 default parameter의 구현을 살펴 보자면

```javascript
function callNumber(a) {
	if(a === undefined) a = 1;
	return a;
}

function callNumber2(a) {
	a = a || 1;
	return a;
}

let result = callNumber(0);
console.log(result);
result = callNumber();
console.log(result);

result = callNumber2(0);
console.log(result);
result = callNumber2();
console.log(result);

-----------console--------------
0
1
1
1
```

`callNumber`, `callNumber2` 두 함수 모두 입력 `a` 의 유효성 체크를 위한 처리가 되어있지만 `callNumber2` 함수의 `||` 연산자에 의한 처리는 `falsy` 한 값 `0`을 `false`로 간주하여 다른 결과가 나오는 것을 확인 할 수 있다.

### 참조

- [JAVASCRIPT로 만나는 세상](https://helloworldjavascript.net/pages/150-boolean.html)
