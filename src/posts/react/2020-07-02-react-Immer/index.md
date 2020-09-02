---
hide: false
type: "post"
title: "Immer를 이용한 불변성 지키기"
tag: ["React", "Context API"]
date: "2020-07-02"
desc: "immer 를 사용하면 불변성을 해치는 코드를 작성하여도 대신 불변성을 지켜준다. 기존의 SPRED 를 이용한 처리 로직을 `immer` lib를 사용하여 변경해 보았다. TOGGLE_USER와 같이 복잡해 보이는 로직의 경우 `immer` 사용이 좀 더 직관적으로 소스를 이해하는데 도움이 되지만 굳이 꼭 사용해야 하는 lib는 아니다."
cate: "react"
---

immer 를 사용하면 불변성을 해치는 코드를 작성하여도 대신 불변성을 지켜준다. 

immer lib 설치

```bash
$ yarn add immer
```

사용할 js 에 import

```javascript
import produce from 'immer';
```

```javascript
function reducer(state, action) {
    switch (action.type) {
        case 'CREATE_USER':
            return produce(state, draft => {
                draft.users.push(action.user);
            });
            // return{
            //     inputs : initialState,
            //     users : state.users.concat(action.user)
            // };
        case 'TOGGLE_USER':
            return produce(state, draft => {
                const user = draft.users.find(user => user.id === action.id);
                user.active = !user.active;
            });
            // return{
            //     ...state,
            //     users : state.users.map(user => user.id === action.id ? {...user, active : !user.active} : user)
            // };
        case 'REMOVE_USER':
            return produce(state, draft =>{
                const index = draft.users.findIndex(user => user.id ===action.id);
                draft.users.splice(index, 1);
            });
            // return{
            //     ...state,
            //     users : state.users.filter(user => user.id !== action.id)
            // };
        default:
            throw new Error('Unhandeled action');

    }
}
```

기존의 SPRED 를 이용한 처리 로직을 `immer` lib를 사용하여 변경해 보았다. TOGGLE_USER와 같이 복잡해 보이는 로직의 경우 `immer` 사용이 좀 더 직관적으로 소스를 이해하는데 도움이 되지만 굳이 꼭 사용해야 하는 lib는 아니다.
