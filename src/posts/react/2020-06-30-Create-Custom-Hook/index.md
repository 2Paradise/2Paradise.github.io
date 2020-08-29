---
hide: false
type: "post"
title: "Create Custom Hook"
tag: ["React", "Custom Hook", "Hook"]
date: "2020-06-30"
desc: "컴포넌트를 만들다 보면 반복되는 로직이 발생한다. input을 관리하는 꾀나 자주 작성하게되는 코드이다. 이런 경우 custom hook을 만들 수 있다. input 상태를 관리하는 hook을 만들어 보자. 아래는 useReducer 를 이용하여 만든 useInputs custom hook 이다."
---

컴포넌트를 만들다 보면 반복되는 로직이 발생한다. input을 관리하는 꾀나 자주 작성하게되는 코드이다. 

```javascript
cosnt onChange = (e) => {
	const {name, value} = e.target;
	setInputs({...inputs, [name] : value});
}
```

 이런 경우 custom hook을 만들 수 있다. input 상태를 관리하는 hook을 만들어 보자.

**useInputs.js**

```javascript
import {useState, useCallback} from 'react';

function useInputs(initialForm){

    const [form, setForm] = useState(initialForm);

    const onChange = useCallback(e => {
        const {name, value} = e.target;
        setForm(form => ({...form, [name]: value}));
    }, []);

    const reset = useCallback(() => setForm(initialForm), [initialForm]);

    return [form, onChange, reset];
}

export default useInputs;
```

아래는 useReducer 를 이용하여 만든 useInputs custom hook 이다.

**useInputs.js**

```javascript
import {useReducer, useCallback} from 'react';

function reducer(state, action){
    switch (action.type) {
        case 'CHANGE_INPUT':
            return {...state, [action.name] : action.value};
        case 'RESET' :
            return Object.keys(state).reduce((acc, current) => {
                acc[current] = '';
                return acc;
            }, {});
        default :
            throw new Error('Unhandeled action');
    }

}

function useInputs(initialForm){

    const [form, dispatch] = useReducer(reducer, [initialForm]);

    const onChange = useCallback(e => {
        const {name, value} = e.target;
        dispatch({
            type : 'CHANGE_INPUT',
            name,
            value
        });
    }, []);

    const reset = useCallback(() => {
        dispatch({type: 'RESET'});
    }, []);

    return [form, onChange, reset];
}

export default useInputs;
```
