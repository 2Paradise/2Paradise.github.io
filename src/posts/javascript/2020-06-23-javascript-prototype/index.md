---
hide: false
type: "post"
postUrl: "/post/2020-06-23-javascript-prototype"
title: "JavaScript 프로토타입과 클래스"
tag: ["JavaScript", "자바스크립트", "ES6"]
cate: "JavaScript"
date: "2020-06-23"
desc: "자바 스크립트는 프로토타입 기반의 언어이다. 프로토타입이 자바스트립트 그 자체이기 때문에 집고 넘어갈 필요가 있다. 객체 생성자는 함수를 통해 새로운 객체를 만들고 그 안에 넣고 싶은 값 또는 함수를 구현할 수 있게 해준다. 대문자로 시작하며 new 선언으로 생성 할 수 있다."
---

# Prototype

자바 스크립트는 프로토타입 기반의 언어이다. 프로토타입이 자바스트립트 그 자체이기 때문에 집고 넘어갈 필요가 있다.

객체 생성자

 객체 생성자는 함수를 통해 새로운 객체를 만들고 그 안에 넣고 싶은 값 또는 함수를 구현할 수 있게 해준다. 대문자로 시작하며 new 선언으로 생성 할 수 있다.

```javascript
function Animal(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
  this.say = function() {
    console.log(this.sound);
  };
}

Animal.prototype.nameSay = function() {
  console.log(this.sound);
};

const dog = new Animal("개", "잭슨", "멍멍");
const cat = new Animal("고양이", "야옹이", "야옹");

dog.say();
cat.say();

dog.nameSay();
cat.nameSay();
```

객체 생성자를 상속받아 보자.

```javascript
function Animal(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
}

Animal.prototype.say = function() {
  console.log(this.sound);
};

function Dog(name, sound) {
  Animal.call(this, "개", name, sound);
}

function Cat(name, sound) {
  Animal.call(this, "고양이", name, sound);
}

Dog.prototype = Animal.prototype;
Cat.prototype = Animal.prototype;

const dog = new Dog("잭슨", "멍멍");
const cat = new Cat("야옹이", "야옹");

dog.say();
cat.say();
```

`call` 함수와 부모 자식간의 프로토타입이 같다는 코드 추가로 상속관계를 형성 할 수 있다.

 위와 같은 형식은 ES6 이전 Class가 생기기 전에 사용하던 방식이다.

# Class

```javascript
class Animal {
  constructor(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
  }

  say() {
    console.log(this.sound);
  }
}

class Dog extends Animal {
  constructor(name, sound) {
    super("개", name, sound);
  }
}

class Cat extends Animal {
  constructor(name, sound) {
    super("고양이", name, sound);
  }
}

const dog = new Dog("멍멍이", "멍멍");
const cat = new Cat("야옹이", "야옹");

dog.say();
cat.say();
```
