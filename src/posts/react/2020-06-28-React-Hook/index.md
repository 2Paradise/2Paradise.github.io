---
hide: false
type: "post"
title: "React Hook"
tag: ["React", "React Hook", "Hook"]
date: "2020-06-28"
desc: "react component 가 처음 화면에 나타날 때, 사라질 때 특정 작업을 할 수 있게 해주고. 추가적으로 component의 props 나 상태가 바뀌어 업데이트 되거나 업데이트 되기 전에 작업을 등록 할 수 도 있다. 위와 같이 useEffect 함수를 import 한 후 호출 할 때 첫번째 파라미터에는 Mount 시점에 처리할 로직을 구현 하며, return 함수(Cleaner Function)로 "
cate: "react"
---

# React Hook

## useState

## useRef

## useEffect

react component 가 처음 화면에 나타날 때, 사라질 때 특정 작업을 할 수 있게 해주고. 추가적으로 component의 props 나 상태가 바뀌어 업데이트 되거나 업데이트 되기 전에 작업을 등록 할 수 도 있다. 

```jsx
import React, {useEffect} from "react";

function Test(){

    const {username, email, id, active} = user;
    useEffect(() => {
        console.log('Mount');
				return () => {
					console.log('Unmount');
				}
    }, []);

    return(
        <></>
    );
}
```

위와 같이 `useEffect` 함수를 import 한 후 호출 할 때 첫번째 파라미터에는 `Mount` 시점에 처리할 로직을 구현 하며, return 함수(Cleaner Function)로 `Unmount` 시점에 처리할 로직을 구현한다. 두번째 파라미터는 의존되는 배열 값 deps를 입력 한다. 

일반 적으로 `Mount` 시점은 DOM이 렌더링 된 이 후이며, 처리할 로직은

- props값을 state로 설정할 경우
- REST API 요청할 경우
- 외부라이브러리를 호출할 경우
- setInterval, setTimeout

`Unmount` 시점의 로직은

- clearInterval, clearTimeout
- 외부 라이브러리 인스턴스 제거

만약 DEPS 배열에 값을 설정할 경우 useEffect 의 첫번째 파라미터 함수는 dept 배열의 값이 update 된 배열 값을 핸들링 할 수 있고, 클리너 함수에서는 deps 배열 값이 바뀌기 전의 값을 핸들링 할 수 있게 된다. 

```jsx
useEffect(() => {
    console.log(user);
    console.log('deps 바뀐 배열 값');
    return () => {
        console.log(user);
        console.log('deps 바뀐 배열 값');
    }
}, [user]);
```

핸들링 할 값이 있다면 DEPS에 설정을 해주어야 최신의 값을 유지 할 수 있게 된다. 

만약 두번째 파라미터인 DEPS 영역을 입력하지 않은 경우 컴포넌트가 리렌더링이 된 후 호출 되며 변경이 발생할 경우 관련된 모든 DOM 이 리렌더링 되게 된다. 따라서 성능 최적화를 위해선 deps를 설정 해 주는 것이 좋다. 

> React 최적화를 위한 Hook

## useMemo

이전에 연산된 값을 재사용할 때 사용되며 성능 최적화에 많이 사용된다. 

다음과 같은 function 이 있을 때

```jsx
function countActiveUser(users){
    console.log('활성 사용자 수를 세는중 ...');
    return users.filter(user => user.active).length;
}

// const count = countActiveUser(users);
const count = useMemo(() => countActiveUser(users), [users]);

    return (
        <>
            <div style={style}>
                <div>활성 사용자 수 : {count}</div>
            </div>
        </>
    );
```

주석과 같이 단순히 function만 호출하여 count를 계산 할 경우 users 값이 변할 때 뿐 아니라, input의 key event 에도 function이 호출 되는 것을 확인 할 수 있다. 특정 조건에서만 작동 할 수 있도록 useMemo Hook을 활용하여 첫번째 파라미터는 작동 로직을 함수 형태 파라미터로 전달하고, 두번째 파라미터는 DEPS 배열을 지정하여 DEPS 배열에 해당하는 값이 변경될 때만 function을 실행 하도록 지정 할 수 있다. 

## useCallback

이전에 만들었던 함수를 재사용하는 방법을 알아보자. useMemo와 비슷하지만 함수를 위한 Hook이다. 함수를 새로 생성은 한다고 해서 부하가 많이 걸리지 않지만 한번 생성한 함수는 재사용하는 것이 좋다. 

```jsx
const onRemove = useCallback(id => {
      setUsers(users.filter(user => user.id !== id));
    }, [users]);
```

위와 같이 onRemove 함수를 useCallback으로 감싸고 deps에는 useCallback 내부에서 사용 하는 값을 넣어준다면 users의 값이 변경 될 때 해당 함수를 재사용하게 된다. 

## React.memo

```jsx
export default React.memo(CreateUser);
```

컴포넌트를 React.memo 로 감싸 export 해주며 해당 컴포넌트와 관련된 함수에서 사용되는 공통된 배열은 setUsers의 첫번째 함수형 파라미터로 변경하고 DEPS 에서 제거해 주어야 한다.

```jsx
const onRemove = useCallback(id => {
      setUsers(users => users.filter(user => user.id !== id));
    }, []);
```
