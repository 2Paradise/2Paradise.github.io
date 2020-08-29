---
hide: false
type: "post"
title: "React API 연동"
tag: ["React", "API", "axios"]
date: "2020-07-05"
desc: "axios는 REST 기반 API를 요청 할 때 promise 기반으로 처리 할 수 있게 해주는 라이브러리이다. API 요청의 기본적인 방법은 useState 와 useEffect로 데이터를 로딩하는 방법이다. API를 요청 할때는 아래의 3가지 상태를 관리해야 한다."
---

프로젝트를 생성하고 axios 라이브러리 설치

```bash
$ yarn add axios
```

REST 기반 API를 요청 할 때 promise 기반으로 처리 할 수 있게 해주는 라이브러리이다. 

- [REST API 테스트를 위한 연습용 사이트](https://jsonplaceholdr.typicode)

API 요청의 기본적인 방법은 useState 와 useEffect로 데이터를 로딩하는 방법이다. 

API를 요청 할때는 아래의 3가지 상태를 관리해야 한다.

1. 요청의 결과
2. 로딩 상태
3. 에러

###Users.js

```javascript
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Users() {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try{
                setUsers(null);
                setError(null);
                setLoading(true);
                const respones = await axios.get('https://jsonplaceholder.typicode.com/users/');
                setUsers(respones.data);
            }catch(e){
                console.log(e.response.status);
                setError(e);
            }
            setLoading(false);
        };
        fetchUsers();
    }, []);

    if(loading) return <div>로딩중</div>;
    if(error) return <div>에러 발생</div>;
    if(!users) return null;

    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>
                    {user.username} ({user.name})
                </li>
            ))}
        </ul>
    );
}

export default Users;
```

fetchUsers 함수를 useEffect 밖에 선언하여 다시 불러오기 기능을 구현 할 수도 있다.

###Users.js

```javascript
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Users() {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchUsers = async () => {
        try{
            setUsers(null);
            setError(null);
            setLoading(true);
            const respones = await axios.get('https://jsonplaceholder.typicode.com/users/');
            setUsers(respones.data);
        }catch(e){
            console.log(e.response.status);
            setError(e);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    if(loading) return <div>로딩중</div>;
    if(error) return <div>에러 발생</div>;
    if(!users) return null;

    return (
        <>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.username} ({user.name})
                    </li>
                ))}
            </ul>
            <button onClick={fetchUsers}>다시 불러오기</button>
        </>
    );
}

export default Users;
```

useReducer로 요청 상태 관리를 해보자. 

```javascript
import React, {useEffect, useReducer} from 'react';
import axios from 'axios';

function reducer(state, action){
    switch (action.type) {
        case 'LOADING':
            return {
                loading: true,
                data: null,
                error: null
            };
        case 'SUCCESS':
            return {
                loading: false,
                data: action.data,
                error: null
            };
        case 'ERROR':
            return {
                loading: false,
                data: null,
                error: action.error
            };
        default:
            throw new Error(`unhandled error ${action.type}`)
            return state;
    }
}

function Users() {
    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        data: null,
        error: null
    });
    const fetchUsers = async () => {
        dispatch({type:'LOADING'});
        try{
            const respones = await axios.get('https://jsonplaceholder.typicode.com/users/');
            dispatch({type:'SUCCESS', data:respones.data});
        }catch(e){
            dispatch({type:'ERROR', error: e});
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const {loading, data: users, error} = state;
    if(loading) return <div>로딩중</div>;
    if(error) return <div>에러 발생</div>;
    if(!users) return null;

    return (
        <>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.username} ({user.name})
                    </li>
                ))}
            </ul>
            <button onClick={fetchUsers}>다시 불러오기</button>
        </>
    );
}

export default Users;
```

커스텀 HOOK을 작성하여 요청 상태를 더욱 편리하게 관리해보자.

###useAsync.js

```javascript
import React, {useReducer, useEffect, useCallback} from 'react';

function reducer(state, action){
    switch (action.type) {
        case 'LOADING':
            return {
                loading: true,
                data: null,
                error: null
            };
        case 'SUCCESS':
            return {
                loading: false,
                data: action.data,
                error: null
            };
        case 'ERROR':
            return {
                loading: false,
                data: null,
                error: action.error
            };
        default:
            throw new Error(`unhandled error ${action.type}`)
            return state;
    }
}

export default function useAsync(callback, deps = []) {

    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        data: null,
        error: null
    });

    const fetchData = useCallback(async () => {
      dispatch({type:'LOADING'});
      try{
          const data = await callback();
          dispatch({type:'SUCCESS', data});
      } catch (e) {
          dispatch({type:"ERROR", error: e});
      }
    }, [callback]);

    useEffect(() =>{
        fetchData();
    }, deps);

    return [state, fetchData];
}
```

###Users.js

```javascript
import React from 'react';
import axios from 'axios';
import useAsync from "./useAsync";

async function getUser() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/');
    return response.data;
}

function Users() {
    const [state, refetch] = useAsync(getUser);

    const {loading, data: users, error} = state;
    if(loading) return <div>로딩중</div>;
    if(error) return <div>에러 발생</div>;
    if(!users) return null;

    return (
        <>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.username} ({user.name})
                    </li>
                ))}
            </ul>
            <button onClick={refetch}>다시 불러오기</button>
        </>
    );
}

export default Users;
```

위에서 만든 커스텀 HOOK 과 유사한 라이브러리인 `react-async` 가 존재한다.

### react-async 로 요청 상태 관리하기

```bash
$ yarn add react-async
```

편리하지만 옵션이 다양하여 혼란을 가져올 수 있지만 익숙해진다면 편하게 사용 가능하다.

###Users.js

```javascript
import React, {useState} from 'react';
import axios from 'axios';
import {useAsync} from "react-async";
import User from "./User";

async function getUser() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/');
    return response.data;
}

function Users() {

    const [userId, setUserId] = useState(null);
    const {data:users, error, isLoading, reload, run} = useAsync({deferFn: getUser});

    if(isLoading) return <div>로딩중</div>;
    if(error) return <div>에러 발생</div>;
    if(!users) return <button onClick={run}>불러오기</button>;

    return (
        <>
            <ul>
                {users.map(user => (
                    <li key={user.id} onClick={() => setUserId(user.id)}>
                        {user.username} ({user.name})
                    </li>
                ))}
            </ul>
            <button onClick={reload}>다시 불러오기</button>
            {userId && <User id={userId}/>}
        </>
    );
}

export default Users;
```

User.js

```javascript
import React from 'react';
import axios from 'axios';
import {useAsync} from 'react-async';

async function getUser({id}) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    return response.data;
}

function User({id}) {
    const {
        data: user,
        error,
        isLoading
    } = useAsync({promiseFn : getUser, id, watch:id});

    if(isLoading) return <div>로딩중..</div>;
    if(error) return <div>에러 발생</div>;
    if(!user) return null;

    return (
        <div>
            <h2>{user.username}</h2>
            <p>
                <b>Email : </b> {user.email}
            </p>
        </div>
    );
}

export default User;
```
