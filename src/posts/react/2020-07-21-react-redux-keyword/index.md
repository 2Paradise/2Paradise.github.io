---
hide: false
type: "post"
title: "Redux 에서 사용되는 키워드 숙지하기"
tag: ["React", "Redux"]
date: "2020-07-21"
desc: "키워드들 중 대부분 useReducer를 사용할 때 한번쯤 접해본 것들이다. 상태의 변화가 필요하게 될 때 action이 발생한다. 이는 하나의 객체로 표현이 된다. type 값은 필수로 있어야 하며, 다른 값들은 임의로 정의 할 수 있다. 업데이트를 할 때 어떻게 업데이트를 할지 정의하는 함수라고 할 수 있다."
---

키워드들 중 대부분 useReducer를 사용할 때 한번쯤 접해본 것들이다.

## Action

상태의 변화가 필요하게 될 때 action이 발생한다. 이는 하나의 객체로 표현이 된다.

```javascript
{
	type : "ADD_TODO",
	data : {
		id : 0,
		text: "리덕스 배우기"
	}
}
```

type 값은 필수로 있어야 하며, 다른 값들은 임의로 정의 할 수 있다. 업데이트를 할 때 어떻게 업데이트를 할지 정의하는 함수라고 할 수 있다.

## Action Creator

( 액션 생성 함수 )

파라미터를 받아 액션 객체를 만들어주는 함수이다.

```javascript
export function addTodo(data) {
	return {
		type : "ADD_TODO",
		data
	};
}

// 화살표 함수로도 만들 수 있다.
export const changeInput = text => ({
	type: "CHANGE_INPUT",
	text
});
```

`redux`를 사용할 때는 `action creator`를 사용하는 것이 필수는 아니지만 편하게 액션 객체를 만들 수 있다는 것만 알아 두면 된다. 

## Reducer

 변화를 일으키는 함수이며 `state` `action` 두 가지 파라미터를 가진다.

```javascript
function counter(state, action) {
	switch (action.type) {
		case 'INCREASE':
			return state + 1;
		case 'DECREASE':
			return state - 1;
		default:
			return state;
	}
}
```

`action type` 에 따라 다른 작업을 하도록 작성 한다. 객체나 배열일 경우 불변성을 유지하도록

 `spread` `concat`등을 활용하여야 한다.

`useReducer` 를 사용 할 때는 `default` 부분에 에러를 발생하는 것이 일반적인데  **redux**의 reducer 에서는 기존의 state를 그대로 반환하는 형태로 작성해야 한다. redux에서는 여러개의 reducer를 만들고 이를 합쳐 rootReducer를 만들게 되며 그 안에 작은 reducer를 subReducer 라고 부른다. 

## Store

redux는 한 application 당 하나의 store를 만들게 되며 , store 안에는 현재 app의 상태와 reducer 가 들어있고 추가적으로 몇가지 내장함수가 들어있다. 

**Dispatch**

```javascript
dispatch({type: 'INCREASE'});
```

action 객체를 만들어 dispatch 파라미터로 넣어 호출을 한다. 호출을 하게되면 해당 action이 reducer로 전달되어 새로운 상태를 반환하게 되며 store의 상태가 변경되게 되는 것이다. 

**Subscribe (구독)**

Store의 내장함수중 하나로 subscribe 함수를 호출 할 때 파라미터로 특정 함수를 넣어주면 action이 dispatch 될 때마다 설정한 함수가 호출되게 된다. store의 상태가 업데이트 될때마다 특정 함수를 호출 할 수 있게 해주는 것이다. 

 react 에서 redux를 사용할 때 이 함수를 직접 사용할 일은 없다. reat-redux 라이브러리에서 제공하는 `connect fucntion` , `useSelector hook` 사용하여 store이 상태가 업데이트 될때 컴포넌트가 리랜더링 되는 작업을 대신 처리해 준다.
