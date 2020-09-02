---
hide: false
type: "post"
title: "Redux Middleware"
tag: ["React", "Redux", "Redux Middleware"]
date: "2020-07-23"
desc: "리덕스가 지닌 핵심 기능으로 context API, mobx 와 차별화 되는 강력한 기능이다. redux를 사용하는데 middleware를 사용하지 않으면 차라리 context API 나 useReducer를 사용하는게 나을 수도 있다. 미들웨어를 액션과 리듀서 사이의 중간자로 이해해도 좋다."
cate: "react"
---

리덕스가 지닌 핵심 기능으로 context API, mobx 와 차별화 되는 강력한 기능이다. redux를 사용하는데 middleware를 사용하지 않으면 차라리 context API 나 useReducer를 사용하는게 나을 수도 있다. 

미들웨어를 액션과 리듀서 사이의 중간자로 이해해도 좋다. 

![](./redux-middleware.png)

action이 dispatch 될때 middleware에서 특정 조건에 따라 무시 될 수도 있다. 또한 action이 reducer에 전달되기 전에 특정 코드를 실행 하게 할 수 도있다. action에 기반하여 비동기 작업을 수 행하는 것도 가능하다. 

## 주로 middleware는 비동기 작업을 처리 할 때 사용한다.

일반적으로 라이브러리로 만들어진 미들웨어를 많이 사용한다. 

- redux-thunk
- redux-sage
- redux-observable
- redux-promise-middleware

...

 이 라이브러리들은 각각 특성이 다르다. `Rxjs`를 공부하는 분들은 `redux-observable` 도 함께 공부하는 것이 좋다. 

```javascript
const middleware = store => next => action => {
	//하고 싶은 작업
}

-------------------------------------------------

function middleware (store) {
	return function (next) {
		return function (action) {
			// 하고 싶은 작업
		}
	}
}
```

생소한 `next` 를 알아야 한다. 

![](./next-vs-dispatch.png)

middleware 에서 action을 받아 왔을 때 다음 middleware 에게 전달하는 함수가 `next` 이다. 다음 middleware가 없다면 reducer에게 전달해 준다. 미들웨어 내부에서 next를 호출 하지 않는다면 action을 무시하게 되는 것이다. 

myLogger.js

```javascript
const myLogger = store => next => action => {
    console.log(action);
    console.log('\tPrev: ', store.getState());
    const result = next(action);
    console.log('\tNext: ', store.getState());
    return result;
}

export default myLogger;
```

미들웨어는 store를 생성할 때 함께 redux 모듈 안에있는 `applyMiddleware` 를 사용하여 설정한다. 

index.js

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from "redux";
import rootReducer from "./modules";
import myLogger from "./middleware/myLogger";

const store = createStore(rootReducer, applyMiddleware(myLogger));
```

오픈 소스로 공유된 미들웨어를 설치해서 사용하는 법을 알아 보자. 

## redux-logger

```javascript
$ yarn add redux-logger
```

middleware 개발자 도구 설치

```javascript
$ yarn add redux-devtools-extension
```

```javascript
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));
```

## redux-thunk

```javascript
$ yarn add redux-thunk
```

액션 객체가 아닌 함수를 dispatch 할 수 있게 해주는 Middleware 이다. redux 공식 메뉴얼에서도 이 Middleware를 사용하는 예시를 보여주고 있다. 

```javascript
const thunk = store => next => action =>
	typeof action === 'function'
		? action(store.dispatch, store.getState)
		: next(action)
```

액션 객체가 아닌 함수를 dispatch 할 수 있게 되었을 때 어떤 작업을 할 수 있는지 알아보다. 

```javascript
const getComments = () => (disapatch, getState) => {
	//이 안에서는 액션을 dispatch 할 수도 있고
	//getState를 사용하여 현재 상태도 조회 할 수 있다.
	const id = getState().post.activeId;

	// 요청이 시작했음을 알리는 액션
	dispatch({type: 'GET_COMMENTS'});

	// 댓글을 조회하는 프로미스를 반환하는 getComments 가 있다고 가정해 보자.
	api
		.getCommnets(id) // 요청을 하고
		.then(comments => dispatch({type: 'GET_COMMNETS_SUCCESS', id, comment})) //성공
		.catch(e => dispatch({type: 'GET_COMMENTS_ERROR', error: e})); //실패시
}

// 컴포넌트에서
dispatch(getComments());
```

위와 같은 `getComments` 와 같은 함수를 thunk 함수라고 한다. 

간단한 예시를 작성해 보다. 

index.js

```javascript
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import Reduxthunk from 'redux-thunk';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(Reduxthunk, logger)));
```

## redux-thunk로 Promise 다루기

가짜 API 함수를 만들어보자. 

api/posts.js

```javascript
const sleep = n => new Promise(resolve => setTimeout(resolve, n));

// {id, title, body}
const posts = [
    {
        id : 1,
        title : '리덕스 미들웨어를 배워봅시다.',
        body : '리덕스 미들웨어를 직접 만들어보면 이해하기가 쉽죠.'
    },
    {
        id : 2,
        title : 'redux-thunk를 사용해봅시다.',
        body : 'redux-thunk를 사용해서 비동기 작업을 처리해 봅시다.'
    },
    {
        id : 3,
        title : 'redux-saga도 배워 봅시다. ',
        body : '나중에 redux-saga를 사용해서 비동기 작업을 처리하는 방법도 배워볼 꺼애요.'
    }
];

export const getPosts = async () => {
    await sleep(500);
    return posts;
}

export const getPostById = async id => {
    await sleep(500);
    return posts.find(post => post.id === id);
}
```

modules/posts.js

```javascript
import * as postsAPI from '../api/posts';

const GET_POSTS = 'GET_POSTS';
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
const GET_POSTS_ERROR = 'GET_POSTS_ERROR';

const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';

export const getPosts = () => async dispatch => {
    // 요청이 시작됨을 알림
    dispatch({type: GET_POSTS});

    try{
        const posts = await postsAPI.getPosts();
        dispatch({type: GET_POSTS_SUCCESS, posts});
    } catch (e) {
        dispatch({type: GET_POSTS_ERROR, error: e});
    }
}

export const getPost = (id) => async dispatch => {
    // 요청이 시작됨을 알림
    dispatch({type: GET_POST});

    try{
        const posts = await postsAPI.getPostById(id);
        dispatch({type: GET_POST_SUCCESS, posts});
    } catch (e) {
        dispatch({type: GET_POST_ERROR, error: e});
    }
}
```

## Thunk 에서 리액트 라우터 history 사용하기

 thunk 내부에서 특정 주소로 이동하는 로직을 구현할 때 사용된다. 예를 들어 로그인 후 성공한다면 특정 경로로 이동하고 실패 시 현재 경로를 유지하는 것을 들 수 있다.

index.js

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from "redux";
import rootReducer from "./modules";
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const customHistory = createBrowserHistory();

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(
            ReduxThunk.withExtraArgument({history: customHistory}),
            logger
        )
    )
);

ReactDOM.render(
    <Router history={customHistory}>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
```

post.js

```javascript
export const goToHome = () => (dispatch, getState,  { history }) => {
    history.push('/')
};
```

PostContainer.js

```javascript
<button onClick={() => dispatch(goToHome())}>Home 으로 이동</button>
```

### JSONServer

rest api 호출과 같은 효과를 얻기 위해 프론트 학습용 JSON 서버를 만들어 보자. 

data.json 파일 생성

```javascript
{
  "posts":[
    {
      "id": 1,
      "title": "리덕스 미들웨어를 배워봅시다.",
      "body": "리덕스 미들웨어를 직접 만들어보면 이해하기가 쉽죠."
    },
    {
      "id": 2,
      "title": "redux-thunk를 사용해봅시다.",
      "body": "redux-thunk를 사용해서 비동기 작업을 처리해 봅시다."
    },
    {
    "id": 3,
    "title": "redux-saga도 배워 봅시다. ",
    "body": "나중에 redux-saga를 사용해서 비동기 작업을 처리하는 방법도 배워볼 꺼애요."
    }
  ]
}
```

```bash
$ npx json-server ./data.json --port 4000
```

`post man` 을 활용하는 것을 추천한다. 

### CORS 와 Webpack DevServer Proxy

## Redux-saga

redux-thunk 다음으로 가장 많이 사용되는 비동기 작업 관련 미들웨어이다. thunk는 함수를 dispatch 할 수 있게 해주는 미들웨어이고, saga의 경우 액션을 모니터링 하고 있다가 특정 액션이 발생하면 이에 따라 특정 작업을 하는 방식으로 사용된다. thunk로 처리하기 까다로운 작업을 saga에서는 할 수 있다. 

- 비동기 작업을 진행 할 때 기존 요청을 취소 할 수 있다.
- 특정 액션이 발생 했을 때 이에 따라 다른 액션을 디스패치 하거나 자바스크립트 코드를 실행 할 수 있다.
- 웹소켓을 사용하는 경우 Channel 기능을 사용하여 더욱 효율적으로 코드를 관리 할 수 있다.
- 비동기 작업이 실패 했을 때 재시도 하는 기능을 구현할 수 있다.

Javascript의 `Generator` 라는 문법을 사용한다.

### Generator

> 함수의 흐름을 특정 구간에 멈춰 놓았다가 다시 실행 할 수 있다. 
결과 값을 여러번 내보낼 수 있다.

```javascript
function* generatorFunction(){
	console.log('안녕하세요.');
	yield 1;
	console.log('제네레이터 함수');
	yield 2;
	console.log('function*');
	yield 3;
	return 4;
}

const generator = generatorFunction();

generator.next();
```

`next` 호출 할 때마다 `yield` 로 나누어 진 구간 까지 실행하는 함수이다. 

```javascript
function* sumGenerator(){
	console.log('sumGenerator Start');
	let a = yield;
	console.log('a 값을 받았습니다.');
	let b = yield;
	console.log('b 값을 받았습니다.');
	return a + b;
}

const sum = sumGenerator();

---------------------------------------------

sum.next();
sumGenerator Start
{value: undefined, done: false}
sum.next(2);
a 값을 받았습니다.
{value: undefined, done: false}
sum.next(3);
b 값을 받았습니다.
{value: 5, done: true}

```

```javascript
function* inifiniteAddGenerator() {
	let result = 0;
	while(true) {
		result += yield result;
	}
}

const add = inifiniteAddGenerator();
------------------------------------------------------------------
add.next();
{value: 0, done: false}done: falsevalue: 0__proto__: Object
add.next(10);
{value: 10, done: false}
add.next(100);
{value: 110, done: false}
```

redux-saga는 Generator 에 기반한 미들웨어이다.  하지만 유틸함수들이 다 Generator로 처리해주며 사용하는 방법만 익힌다면 충분하다. 

```bash
$ yarn add redux-saga
```

modules/counter.js

```javascript
import {delay, put, takeEvery, takeLatest} from 'redux-saga/effects';

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const INCREASE_ASYNC = 'INCREASE_ASYNC';
const DECREASE_ASYNC = 'DECREASE_ASYNC';

export const increase = () => ({type:INCREASE});
export const decrease = () => ({type:DECREASE});

export const increaseAsync = () => ({type:INCREASE_ASYNC});
export const decreaseAsync = () => ({type:DECREASE_ASYNC});

function* increaseSage() {
    yield delay(1000);
    yield put(increase());
}

function* decreaseSage() {
    yield delay(1000);
    yield put(decrease());
}

export function* counterSaga() {
    yield takeEvery(INCREASE_ASYNC, increaseSage);
    yield takeLatest(DECREASE_ASYNC, decreaseSage);
}

const initialState = 0;

export default function counter(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return state + 1;
        case DECREASE:
            return state - 1;
        default :
            return state;
    }
}
```

modules/index.js

```javascript
import {combineReducers} from "redux";
import counter, {counterSaga} from "./counter";
import posts from "./posts";
import {all} from 'redux-saga/effects';

const rootReducer = combineReducers({counter, posts});

export function* rootSaga() {
    yield all([counterSaga()]);
}

export default rootReducer;
```

index.js

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from "redux";
import rootReducer, {rootSaga} from "./modules";
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';

const customHistory = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(
            ReduxThunk.withExtraArgument({history: customHistory}),
            sagaMiddleware,
            logger
        )
    )
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Router history={customHistory}>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
```

```javascript
import {delay, put, takeEvery, takeLatest} from 'redux-saga/effects';
```

put - action을 dispatch 할 수 있도록 해준다. 

takeEvery - action 이 감지되는 매순간 마다 실행할 함수를 지정해 준다.

takeLatest - 연속적인 action이 감지될 때 가장 마지막 action에 만 반응하여 실행할 함수를 지정해 준다.

## Redux-Saga 를 통해 Promise를 다루기

비동기 작업을 시작하기 위해 순수액션 함수를 만들며, 이 액션이 Dispatch가 되었을 때 Saga에서 감지하여 처리할 수 있도록 할 수 있다. 

```javascript
export const getPost = id => ({type: GET_POST, payload: id, meta: id});

function* getPostSaga(action) {
	const id = action.payload;
	try {
		const post = yield call(postsAPI.getPistById, id);
		yield put({
			type: GET_POST_SUCCESS,
			payload: post,
			meta: id
		});
	} catch (e) {
		yield put({
			type: GET_POST_ERROR,
			error: true,
			payload: e,
			meta: id
		});
	}
}

dispatch(getPost(1));
```

### promise를 좀더 편하게 사용하기 위한 유틸함수 만들기

asyncUtils.js

```javascript
import {call, put} from 'redux-saga/effects';

export const createPromiseSaga = (type, promiseCreator) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

    return function* saga(action) {
        try{
            const result = yield call(promiseCreator, action.payload);
            yield put({
                type: SUCCESS,
                payload: result
            });
        }catch (e){
            yield put({
                type: ERROR,
                error: true,
                payload: e
            });
        }
    }
}

export const createPromiseSagaById = (type, promiseCreator) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
    return function* saga(action) {
        const id = action.meta;

        try{
            const result = yield call(promiseCreator, action.payload);
            yield put({
                type: SUCCESS,
                payload: result,
                meta: id
            });
        }catch (e){
            yield put({
                type: ERROR,
                error: true,
                payload: e,
                meta: id
            });
        }
    }
};
```

posts.js

```javascript
import * as postsAPI from '../api/posts';
import {call, put, takeEvery} from 'redux-saga/effects';
import {
    reducerUtils,
    handleAsyncActions,
    handleAsyncActionsById,
		createPromiseSaga,
		createPromiseSagaById
} from "../lib/asyncUtils";

const getPostsSaga = createPromiseSaga(GET_POSTS, postsAPI.getPosts);
const getPostSaga = createPromiseSagaById(GET_POST, postsAPI.getPostById);

export function* postsSaga(){
    yield takeEvery(GET_POSTS, getPostsSaga);
    yield takeEvery(GET_POST, getPostSaga);
}
```

## Redux-saga 에서 history 사용하기

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from "redux";
import rootReducer, {rootSaga} from "./modules";
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';

const customHistory = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware({
    context: {
        history : customHistory
    }
});
```

sagaMiddlewara를 호출 할때 context 객체를 설정해주면 가능하다. 

```javascript
import {takeEvery, getContext} from 'redux-saga/effects';

// redux-saga 에서 history 객체 사용하기
export const goToHome = () => ({type: GO_TO_HOME});

function* goToHomeSaga() {
    const history = yield getContext('history');
    history.push('/');
}

export function* postsSaga(){
    yield takeEvery(GO_TO_HOME, goToHomeSaga);
}
```

## Redux-saga 에서 select 를 통해 상태 조회하기

```javascript
import {takeEvery, getContext, select} from 'redux-saga/effects';

const PRINT_STATE = 'PRINT_STATE';

export const printState = () => ({type: PRINT_STATE});

export function* postsSaga(){
    yield takeEvery(PRINT_STATE, printStateSaga);
}

function* printStateSaga() {
    const state = yield select(state => state);
    console.log(state);
}
```
