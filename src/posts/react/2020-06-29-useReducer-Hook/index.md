---
hide: false
type: "post"
title: "React useReducer"
tag: ["React", "useReducer", "Hook"]
date: "2020-06-29"
desc: "이전에는 컴포넌트의 상태를 업데이트를 할 때에 useState를 사용하여 설정해 주었는데 useReducer도 가능하다. 어떤 차이가 있는지 살펴본다면 useState에서는 설정할 다음 상태를 직접 지정해주는 형식인 반면에 useReducer는 액션 객체를 기반으로 업데이트를 한다. 액션 객체는 업데이트 할 때 참조하는 객체 인데, type 값을 통해 어떤 업데이트를 할지 설정하며 참조 값을 넣을 수도 있다."
---

# useReducer Hook

이전에는 컴포넌트의 상태를 업데이트를 할 때에 `useState`를 사용하여 설정해 주었는데 `useReducer`도 가능하다. 어떤 차이가 있는지 살펴본다면 `useState`에서는 설정할 다음 상태를 직접 지정해주는 형식인 반면에 `useReducer`는 액션 객체를 기반으로 업데이트를 한다. 액션 객체는 업데이트 할 때 참조하는 객체 인데, `type` 값을 통해 어떤 업데이트를 할지 설정하며 참조 값을 넣을 수도 있다. 

- 컴포넌트 상태 업데이트 로직을 컴포넌트에서 분리할 수 있다.
- 다른 파일 작성 후 불러와서 사용할 수도 있다.

reducer는 상태를 업데이트하는 함수를 말한다. 

```javascript
function reducer(state, action){
	switch(action.type){
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		default : 
			return state;
	}
}
```

현재 상태와 액션 객체를 받아와서 업데이트된 상태를 반환하는 형태가 reducer 이다.

```javascript
const [number, dispatch] = useReducer(reducer, 0);
```

---

다음과 같이 useState를 사용하여 카운터 값을 핸들링하는 코드가 있다. 

```javascript
import React, {useState} from "react";

function Counter (){
    const [number, setNumber] = useState(1);
    
    const onIncrease = () => {
        setNumber(number + 1);
    }
    const onDecrease = () =>{
        setNumber(number - 1);
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease} >+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter;
```

1. `useReducer` import
2. reducer function 작성
3. useReducer 적용
4. 작동할 함수에 dispatch 함수 type 설정하여 호출

```javascript
import React, {useReducer} from "react";

function reducer(state, action){
    switch (action.type) {
        case 'INCREMENT' :
            return state + 1;
        case 'DECREMENT' :
            return state - 1;
        default:
            throw new Error('Unhandled action');
    }
}

function Counter (){

    const [number, dispatch] = useReducer(reducer, 0);

    const onIncrease = () => {
        dispatch({
            type : 'INCREMENT'
        });
    }
    const onDecrease = () =>{
        dispatch({
            type : 'DECREMENT'
        });
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease} >+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter;
```

## useReducer VS useState

 뭐가 더 나은지 정해진 닶은 없다. 컴포넌트에서 관리하는 값이 하나이고, 단순 숫자, 문자열, boolean 값이라면 useState 로 관리하는 것이 편하다. 하지만 관리하는 값이 많고 배열을 핸들링 할 경우 useReducer를 사용하는 것이 편할 것이다.
