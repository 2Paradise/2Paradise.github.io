---
hide: false
type: "post"
title: "Context에서 비동기 작업 상태 관리하기"
tag: ["React", "Context"]
date: "2020-07-11"
desc: "특정 컴포넌트에서 필요한 외부데이터는 컴포넌트 내부에서 useAsync 같은 hook을 사용하면 충분하지만 특정 데이터가 다양한 컴포넌트에서 필요한 경우가 있다. 예를 들어 로그인 상태같은 경우 이다."
cate: "react"
---

특정 컴포넌트에서 필요한 외부데이터는 컴포넌트 내부에서 `useAsync` 같은 hook을 사용하면 충분하지만 특정 데이터가 다양한 컴포넌트에서 필요한 경우가 있다. 예를 들어 로그인 상태같은 경우 이다. 여기저기서 필요한 상태를 비동기적으로 가져와 사용해야 할 경우 데이터를 `context`에 넣어 관리하는 것이 편하다. `context` 내부에서 비동기작업을 위한 상태 관리를 한다면 어떻게 한다면 효율적인지 알아보자.

UsesContext.js

```javascript
import React, {createContext, useReducer, useContext} from 'react';
import axios from 'axios';

const initialState ={
    users:{
        loading: false,
        data: null,
        error: null,
    },
    user: {
        loading: false,
        data : null,
        error : null
    }
};

const loadingState = {
    loading : true,
    data: null,
    error: null
};

const success = (data) => ({
    loading: false,
    data,
    error:null
});

const error = e => ({
    loading : false,
    data: null,
    error: e
});

// GET_USERS
// GET_USERS_SUCCESS
// GET_USERS_ERROR
// GET_USER
// GET_USER_SUCCESS
// GET_USER_ERROR
function usersReducer(state, action) {
    switch (action.type) {
        case 'GET_USERS':
            return {
              ...state,
              users: loadingState
            };
        case 'GET_USERS_SUCCESS':
            return {
                ...state,
                users : success(action.data)
            };
        case 'GET_USERS_ERROR':
            return {
                ...state,
                users:error(action.error)
            };
        case 'GET_USER':
            return {
                ...state,
                user: loadingState
            };
        case 'GET_USER_SUCCESS':
            return {
                ...state,
                user : success(action.data)
            };
        case 'GET_USER_ERROR':
            return {
                ...state,
                user:error(action.error)
            };
        default:
            return null;
    }
}

const UsersStateContext = createContext(null);
const UsersDispatchContext = createContext(null);

export function UsersProvider({children}){
    const [state, dispatch] = useReducer(usersReducer, initialState);
    return (
        <UsersStateContext.Provider value={state}>
            <UsersDispatchContext.Provider value={dispatch}>
                {children}
            </UsersDispatchContext.Provider>
        </UsersStateContext.Provider>
    );
}

export function useUsersState() {
    const state = useContext(UsersStateContext);
    if(!state){
        throw new Error("Cannot find UserProvier");
    }
    return state;
}

export function useUsersDispatch() {
    const dispatch = useContext(UsersDispatchContext);
    if(!dispatch){
        throw new Error("Cannot find UsersDispatchContext");
    }
    return dispatch;
}

export async function getUsers(dispatch){
    dispatch({type:'GET_USERS'});
    try{
        const response = await axios.get("https://jsonplaceholder.typicode.com/users/");
        dispatch({type:"GET_USERS_SUCCESS", data : response.data});
    }catch(e){
        dispatch({type:"GET_USERS_ERROR", error:e});
    }
}

export async function getUser(dispatch, id){
    dispatch({type:'GET_USER'});
    try{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        dispatch({type:"GET_USER_SUCCESS", data : response.data});
    }catch(e){
        dispatch({type:"GET_USER_ERROR", error:e});
    }
}
```

Users.js

```javascript
import React, {useState} from 'react';
import User from "./User";
import {useUsersDispatch, useUsersState, getUsers} from "./UsersContext";

function Users() {

    const [userId, setUserId] = useState(null);
    const state = useUsersState();
    const dispatch = useUsersDispatch();
    const {loading, data: users, error} = state.users;

    const fetchData = () => {
        getUsers(dispatch);
    };

    if(loading) return <div>로딩중</div>;
    if(error) return <div>에러 발생</div>;
    if(!users) return <button onClick={fetchData}>불러오기</button>;

    return (
        <>
            <ul>
                {users.map(user => (
                    <li key={user.id} onClick={() => setUserId(user.id)}>
                        {user.username} ({user.name})
                    </li>
                ))}
            </ul>
            <button onClick={fetchData}>다시 불러오기</button>
            {userId && <User id={userId}/>}
        </>
    );
}

export default Users;
```

User.js

```javascript
import React, {useEffect} from 'react';
import {useUsersDispatch, useUsersState, getUser} from "./UsersContext";

function User({id}) {

    const state = useUsersState();
    const dispatch = useUsersDispatch();

    useEffect(() => {
        getUser(dispatch, id);
    }, [dispatch, id]);

    const {loading, data:user, error} = state.user;

    if(loading) return <div>로딩중..</div>;
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
