---
hide: false
type: "post"
postUrl: "/post/2020-06-24-javascript-tip"
title: "JavaScript 알고 있으면 유용한 문법"
tag: ["JavaScript", "자바스크립트", "ES6"]
date: "2020-06-24"
desc: "javascript 코드 작성에 있어서 알고 있으면 유요한 정보에 대해 알아보자. ES6 문법에 익숙해지도록 학습하며 아래에서 언급한 내용들을 숙지하여 적제적소의 로직에 사용함에 있어 불편함이 없도록 인지해두면 유용한 정보들이다."
cate: "javascript"
---

 javascript 코드 작성에 있어서 알고 있으면 유요한 정보에 대해 알아보자. ES6 문법에 익숙해지도록 학습하며 아래에서 언급한 내용들을 숙지하여 적제적소의 로직에 사용함에 있어 불편함이 없도록 인지해두면 유용한 정보들이다.

## Truthy and Falsy

문법이라기보단 개념에 가까운 이슈이다.

```javascript
function print(person) {
  if (person === undefined || person === null) {
    return;
  }
  console.log(person.name);
}

const person = {
  name: "John"
};

print();
```

 일반적으로 유효한 값 인지 확인 하기 위해 `undefined` `null` 을 활용하여 확인하지만 다음과 같이 작성하여도 동일한 코드가 될 수 있다.

```javascript
function print(person) {
  if (!person) {
    return;
  }
  console.log(person.name);
}

const person = {
  name: "John"
};

print();
```

`undefined` `null` `0` `' '` `NaN` 등은 **Falsy** 한 값 들이 존재한다. 반면 이를 제외한 다른 모든 값들은 **Truthy** 한 값인 것이다. 배열이나 객체 또한 Truthy 한 값에 포함 되므로 위와 같은 코드가 가능한 것이다. 그리고 굳이 `!` 를 사용하지 않아도 가능하다.

## 단축 평가 논리 계산법

(Short - circuit evaluation)

 논리 연산자를 사용하여 코드를 짧게 작성하는 것을 의미한다.

```javascript
console.log(true && 'hello');
console.log(false && 'hello');
console.log('hello' && 'bye');

console.log(null && 'hello');
console.log(undefined && 'hello');

console.log(false || 'hello');
console.log(true || 'truthy 하지 않다.');

------------CONSOLE

hello 
false
bye 
null
undefined
hello 
true
```

위와 같이 `&&` 연산의 앞에 값이 Truthy 하면 뒤의 값이 출력된다. 반면 Falsy 한 값이면 앞의 값이 출력된다. 특정값이 유효한지 확인 할 때 주로 확인 한다. 

추가로 `||` 연산자는 앞의 값이 falsy 할 경우 뒤의 값을 출력하고 그렇지 않으면 앞의 값을 출력한다.

```javascript
const obj = null

const name = obj && obj.name;

// 위와 같은 경우 obj 가 null 이지만 오류 없이 코드 작성이 가능하다.
```

## 함수의 기본 파라미터

함수의 파라미터를 지정하지 않았을 경우를 생각하여 작성하는 코드이다.

```javascript
function calculateCircleArea(r = 1) {
  return Math.PI * r * r;
}

const circleArea = calculateCircleArea();
console.log(circleArea);

--------------------- ES6

const calculateCircleArea = (r = 1) => Math.PI * r * r;

const circleArea = calculateCircleArea();
console.log(circleArea);
```

위와 같이 `r=1` 과 같은 형식으로 파라미터의 초기값을 지정해 놓을 수 있다. 

## 조건문을 스마트하게 활용하는 방법

`||` 연산자로 유효값 체크를 할 경우가 많이 있다.

```javascript
const isAnimal = (text) =>{
  return (text === '고양이' || text === '개' || text === '거북이')
};

console.log(isAnimal('개'));
console.log(isAnimal('노트북'));
```

반복적인 `||` 연산자의 작성이 불가피한 유효 값 체크를 `includes` 함수를 사용하여 간단하게 나타낼 수 있다.

```javascript
const isAnimal = text => {
  const animals = ["고양이", "개", "거북이"];
  return animals.includes(text);
};

console.log(isAnimal("개"));
console.log(isAnimal("노트북"));

---------------------ES6

const isAnimal = text => ["고양이", "개", "거북이"].includes(text);
console.log(isAnimal("개"));
console.log(isAnimal("노트북"));
```

객체와 단축 평가 논리 계산을 이용하여 아래와 같이 작성도 가능하다.

```javascript
const getSound = animal => {
  const sounds = {
    개: "멍멍",
    고양이: "야옹",
    참새: "짹짹"
  };
  return sounds[animal] || "...?";
};

console.log(getSound('개'));
console.log(getSound('낙'));
```

## 비구조화 할당

(구조분해)

비구조화 object value 기본값 설정

```javascript
const obj = { a: 1 };

function print({ a, b = 2 }) {
  console.log(a);
  console.log(b);
}

print(obj);

----------------------------CONSOLE--------------------------

1
2
```

비구조화 object key 값 설정 ( 기존 object 는 변하지 않음 )

```javascript
const obj = {
  name: "낙",
  text: "hello"
};

const { name: nickname } = obj;

console.log(nickname);
console.log(obj);

------CONSOLE--------

낙 
Object {name: "낙", text: "hello"}
```

배열 비구조화 할당

```javascript
const arry = [1];

const [one, two = 2] = arry;

console.log(one);
console.log(two);

--------CONSOLE------
1
2
```

## SPREAD

객체 혹은 배열을 펼칠 수 있다.

```javascript
const slime = {
  name: "슬라임"
};

const cuteSlime = {
  name: "슬라임",
  attribute: "cute"
};

const purpleCuteSlime = {
  name: "슬라임",
  attribute: "cute",
  color: "purple"
};

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);

-------------CONSOLE--------------

Object {name: "슬라임"}
Object {name: "슬라임", attribute: "cute"}
Object {name: "슬라임", attribute: "cute", color: "purple"}
```

`...` 을 이용하여 해당 객체의 내용을 가져올 수 있다.

```javascript
const slime = {
  name: "슬라임"
};

const cuteSlime = {
  ...slime,
  attribute: "cute"
};

const purpleCuteSlime = {
  ...cuteSlime,
  color: "purple"
};

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);

-------------CONSOLE--------------

Object {name: "슬라임"}
Object {name: "슬라임", attribute: "cute"}
Object {name: "슬라임", attribute: "cute", color: "purple"}
```

배열에서도 사용 가능하다.

```javascript
const animals = ["개", "고양이", "참새"];
const another = [...animals, "낙타"];

console.log(animals);
console.log(another);

-----------CONSOLE-----------

["개", "고양이", "참새"]
["개", "고양이", "참새", "낙타"]
```

## REST

쉽게 이해하자면 SPREAD 와 반대로 작동한다고 생각할 수 있다. 

```javascript
const purpleCuteSlime = {
  name: "슬라임",
  attribute: "cute",
  color: "purple"
};

const { color, ...cuteSlime } = purpleCuteSlime;
console.log(color);
console.log(cuteSlime);

const { attribute, ...slime } = cuteSlime;
console.log(slime);

---------------CONSOLE------------------

purple 
Object {name: "슬라임", attribute: "cute"}
Object {name: "슬라임"}
```

REST 역시 배열에서도 사용가능하다.

```javascript
const nums = [0, 1, 2, 3, 4, 5];

const [one, two, ...rest] = nums;

console.log(one);
console.log(two);
console.log(rest);

------------CONSOLE------------

0
1
[2, 3, 4, 5]
```

함수 파라미터에서의 REST → reduce 와 함께 사용하여 개수가 정해지지 않은 파라미터를 핸들링 할 수 도 있다.

```javascript
function sum(...rest) {
  return rest.reduce((acc, cur) => acc + cur, 0);
}

console.log(sum(1,2,4,5));

----------------CONSOLE-------------------------
12
```

함수 인자에서의 SPREAD → 정의된 배열이 있는 경우 함수의 인자로 SPREAD 할 수 있다.

```javascript
const subtract = (x, y) => x - y;

const numbers = [1, 2];
const result = subtract(...numbers);
console.log(result);

-------------CONSOLE--------------
-1
```

## Hoisting

아직 선언되지 않은 함수, 변수를 끌어올려 사용하는 작동 방식을 말한다.

```javascript
myFunciton();

function myFunciton() {
  console.log("hello");
}
```

위와 같이 코드를 작성 하여도 작동하지만 가급적 이런 형태의 코딩은 유지보수 측면에서 기피해야 한다.
