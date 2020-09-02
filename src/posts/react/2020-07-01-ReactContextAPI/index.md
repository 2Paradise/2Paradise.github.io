---
hide: false
type: "post"
title: "Context API를 통한 전역관리"
tag: ["React", "Context API"]
date: "2020-07-01"
desc: "지금 까지 배운 컴포넌트의 props를 전달 하기 위해선 컴포넌트의 DEPTH 가 깊어 질 수록 비효율 적으로 props를 컴포넌트 선언 시마다 전달하는 수고가 있었다. 이에 Context API를 통해 전역 값 관리 하는 방법을 알아 보자."
cate: "react"
---

지금 까지 배운 컴포넌트의 props를 전달 하기 위해선 컴포넌트의 DEPTH 가 깊어 질 수록 비효율 적으로 props를 컴포넌트 선언 시마다 전달하는 수고가 있었다. 이에 Context API를 통해 전역 값 관리 하는 방법을 알아 보자. 

```jsx
import React, {createContext, useContext, useState} from "react";

const MyContext = createContext('defaultValue');

function Child(){
    const text = useContext(MyContext);
    return <div>안녕하세요? {text}</div>
}

function Parent({text}){
    return <Child text={text}/>;
}

function GrandParent({text}){
    return <Parent text={text}/>;
}

function ContextSample(){
    const [value, setValue] = useState(true);

    return (
        <MyContext.Provider value={value ? 'GOOD' : 'BAD'}>
            <GrandParent/>
            <button onClick={() => setValue(!value)}>CLICK ME</button>
        </MyContext.Provider>
        );
}

export default ContextSample;
```

## userDispatch Context

useReducer를 통해 관리되는 dispatch 를 context를 통해 child 컴포넌트로 전달하는 방법이다.

App.js

```jsx
export const UserDispatch = createContext(null);
```

. . .

```jsx
return (
				<>
						<div style={style}>
                <UserDispatch.provider value={dispatch}>
                    <UserList users={users}/>
                </UserDispatch.provider>
                <br/>
                <div>활성 사용자 수 : {count}</div>
            </div>
        </>
)
```

UserList.js

```jsx
import React, {useContext} from "react";
import {UserDispatch} from "./App";

const User = React.memo(function User({user}){

    const {username, email, id, active} = user;
    const dispatch = useContext(UserDispatch);

    return(
        <div>
            <b onClick={() => dispatch({type:'TOGGLE_USER', id})} style={{
                color : active ? 'green' : 'black',
                cursor : 'pointer'
            }}>{username}</b>
            &nbsp;<span>({email})</span>
            <button onClick={() => dispatch({type:'REMOVE_USER', id})}>삭제</button>
        </div>
    );
});
```
