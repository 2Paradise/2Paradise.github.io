---
hide: false
type: "post"
title: "TypeScript for React Project"
tag: ["Typescript", "React", "Reducer", "ContextAPI"]
date: "2020-08-01"
desc: "typescript 를 접하면서 생소 했던 부분들은 집고 넘어가자. 클래스 또는 객체를 지정할 때 사용 되는 문법이다. age`?` 로 표기한 것은 해당 값이 있을 수도 있고 없을 수도 있다는 의미를 나타낸다. type alias를 이용하여 같은 작업을 할 수도 있다."
cate: "typescript"
---

TypeScript 한글 문서

[https://typescript-kr.github.io/](https://typescript-kr.github.io/)

typescript 를 접하면서 생소 했던 부분들은 집고 넘어가자.

## Interface & Type Alias

클래스 또는 객체를 지정할 때 사용 되는 문법이다.

```javascript
interface Shape{
    getArea(): number;
}

class Circle implements Shape {

    constructor(public radius: number) {
    }

    getArea(): number {
        return this.radius * this.radius * Math.PI;
    }
}

class Rectangle implements Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }
}

const circle = new Circle(5);
const rectangle = new Rectangle(2, 5);
const shapes: Shape[] = [circle, rectangle];

shapes.forEach(shape => {
    console.log(shape.getArea());
});
```

객체 타입을 지정하는 interface를 살펴보자. 

```javascript
interface Person {
    name: string;
    age?: number;
}

interface Developer extends Person{
    skills: string[]
}

const person: Person = {
    name: 'aaaaaa',
    age: 20
};

const expert: Developer = {
    name: '이사람',
    skills: ['javascript', 'tsc', 'react']
}
```

age`?` 로 표기한 것은 해당 값이 있을 수도 있고 없을 수도 있다는 의미를 나타낸다. type alias를 이용하여 같은 작업을 할 수도 있다.

```javascript
type Person = {
    name: string;
    age?: number;
}

type Developer = Person & {
    skills: string[]
}

const person: Person = {
    name: 'aaaaaa',
    age: 20
};

const expert: Developer = {
    name: '이사람',
    skills: ['javascript', 'tsc', 'react']
}

type People = Person[];
const people: People = [person, expert];

type Color = 'red' | 'orange' | 'yellow';
const color: Color = 'orange';
```

라이브러리를 위한 타입을 설정할 경우에는 인터페이스를 권장하며 어떤 것을 쓰던 일관성 있게 쓰는 것이 좋다.

## Generics `<T>`

함수, 클래스, 인터페이스, 타입 알리아스를 사용하게 될 때 여러 종류의 타입에 대하여 호환을 맞추는 문법이다.

```javascript
function merge<T1, T2>(a: T1, b: T2) {
    return{
        ...a,
        ...b
    };
}

const merged = merge({foo: 1}, {bar: 2});

function wrap<T> (param: T) {
    return {
        param
    };
}

const wrapped = wrap('aaaa');

interface Items<T, V> {
    list: T[],
    value: V
}

const items: Items<string, number> = {
    list: ['a', 'b', 'c'],
    value: 1
};

const itemNum: Items<number, string> = {
    list: [1, 2, 3],
    value: '1'
};
```

React 프로젝트를 만들어보자. 

```javascript
$ npx creat-react-app '프로젝트명' --typescript
```

[React.App](http://react.App) 프로젝트에서는 타입스크립트 설정을 제공하기 때문에 일반적으로 그냥 사용해도 무관하다. 

## 상태관리 useState

```javascript
import React, {useState} from "react";

type MyFormProps = {
    onSubmit: (form: {name: string; description: string}) => void
};

function MyForm({onSubmit}: MyFormProps) {
    const [form, setForm] = useState({
        name: '',
        description: ''
    });

    const {name, description} = form;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name] : value
        });
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(form);
        setForm({
            name: '',
            description: ''
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={name} onChange={onChange}/>
            <input name="description" value={description} onChange={onChange}/>
            <button type={"submit"}>등록</button>
        </form>
    );
}

export default MyForm;
```

## useReducer

```javascript
import React, {useReducer} from "react";

type Action = {type: 'INCREASE'} | {type: 'DECREASE'};

function reducer(state:number, action: Action) : number{
    switch (action.type) {
        case "INCREASE":
            return state + 1;
        case "DECREASE":
            return state - 1;
        default:
            throw new Error('Unhandled action type');
    }
}

function Counter(){

    const [count, dispatch] = useReducer(reducer, 0);
    const onIncrease = () => dispatch({type: 'INCREASE'});
    const onDecrease = () => dispatch({type: 'DECREASE'});

    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>
        </div>
    );
}

export default Counter;
```

ReducerSample.tsx

```javascript
import React, {useReducer} from "react";

type Color = 'red' | 'orange' | 'yellow';

type State = {
  count: number;
  text: string;
  color: Color;
  isGood: boolean;
};

type Action =
    | {type: 'SET_COUNT'; count: number}
    | {type: 'SET_TEXT'; text: string}
    | {type: 'SET_COLOR'; color: Color}
    | {type: 'TOGGLE_GOOD'};

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "SET_COUNT":
            return {
                ...state,
                count: action.count
            }
        case "SET_TEXT":
            return {
                ...state,
                text: action.text
            }
        case "SET_COLOR":
            return {
                ...state,
                color: action.color
            }
        case "TOGGLE_GOOD":
            return {
                ...state,
                isGood: !state.isGood
            }
        default:
            throw new Error('Unhandled action type');
    }
}

function ReducerSample() {
    const [state, dispacth] = useReducer(reducer, {
        count: 0,
        text: 'hello',
        color: 'red',
        isGood: true
    });

    const setCount = () => dispacth({type: 'SET_COUNT', count: 5});
    const setText = () => dispacth({type: 'SET_TEXT', text: 'bye'});
    const setColor = () => dispacth({type: 'SET_COLOR', color: 'orange'});
    const toggleGood = () => dispacth({type: 'TOGGLE_GOOD'});

    return (
        <div>
            <p>
                <code>count: </code> {state.count}
            </p>
            <p>
                <code>text: </code> {state.text}
            </p>
            <p>
                <code>color: </code> {state.color}
            </p>
            <p>
                <code>isGood: </code> {state.isGood ? 'true' : 'false'}
            </p>
            <div>
                <button onClick={setCount}>SET_COUNT</button>
                <button onClick={setText}>SET_TEXT</button>
                <button onClick={setColor}>SET_COLOR</button>
                <button onClick={toggleGood}>TOGGLE_GOOD</button>
            </div>
        </div>
    );
}

export default ReducerSample;
```

## Context API 활용

SampleContext.tsx

```javascript
import React, {createContext, Dispatch, useContext, useReducer} from "react";

type Color = 'red' | 'orange' | 'yellow';

type State = {
    count: number;
    text: string;
    color: Color;
    isGood: boolean;
};

type Action =
    | {type: 'SET_COUNT'; count: number}
    | {type: 'SET_TEXT'; text: string}
    | {type: 'SET_COLOR'; color: Color}
    | {type: 'TOGGLE_GOOD'};

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "SET_COUNT":
            return {
                ...state,
                count: action.count
            }
        case "SET_TEXT":
            return {
                ...state,
                text: action.text
            }
        case "SET_COLOR":
            return {
                ...state,
                color: action.color
            }
        case "TOGGLE_GOOD":
            return {
                ...state,
                isGood: !state.isGood
            }
        default:
            throw new Error('Unhandled action type');
    }
}

const SampleStateContext = createContext<State | null>(null);
const SampleDispatchContext = createContext<Dispatch<Action> | null>(null);

type SampleProviderProps = {
    children: React.ReactNode;
}

export function SampleProvider({children}: SampleProviderProps) {
    const [state, dispacth] = useReducer(reducer, {
        count: 0,
        text: 'hello',
        color: 'red',
        isGood: true
    });

    return (
        <SampleStateContext.Provider value={state}>
            <SampleDispatchContext.Provider value={dispacth}>
                {children}
            </SampleDispatchContext.Provider>
        </SampleStateContext.Provider>
    );
}

export function useSampleState(){
    const state = useContext(SampleStateContext);
    if (!state) throw new Error('Cannot find SampleProvider');
    return state;
}

export function useSampleDispatch() {
    const dispatch = useContext(SampleDispatchContext);
    if (!dispatch) throw new Error('Cannot find SampleProvider');
    return dispatch;
}
```
