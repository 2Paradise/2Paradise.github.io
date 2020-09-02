---
hide: false
type: "post"
title: "TypeScript & Redux"
tag: ["Typescript", "React", "Redux"]
date: "2020-08-03"
desc: "기존에 학습 했던 redux를 사용한 TodoList 작성 코드를 참고하여 Typescript를 이용한 react - redux 코드는 위의 링크 또는 개인 프로젝트 학습 소스를 참고 한다."
cate: "typescript"
---

[https://react.vlpt.us/using-typescript/05-ts-redux.html](https://react.vlpt.us/using-typescript/05-ts-redux.html)

```javascript
$ yarn add redux react-redux
```

```javascript
$ yarn add @types/react-redux
```

기존에 학습 했던 redux를 사용한 TodoList 작성 코드를 참고하여 Typescript를 이용한 react - redux 코드는 위의 링크 또는 개인 프로젝트 학습 소스를 참고 한다. 

modules/todos.ts

```javascript
const ADD_TODO = 'todos/ADD_TODO' as const;
const TOGGLE_TODO = 'todos/TOGGLE_TODO' as const;
const REMOVE_TODO = 'todos/REMOVE_TODO' as const;

let nextId = 1;

export const addTodo = (text: string) => ({
    type: ADD_TODO,
    payload: {
        id: nextId++,
        text
    }
});

export const toggleTodo = (id: number) => ({
    type: TOGGLE_TODO,
    payload: id
});

export const removeTodo = (id: number) => ({
    type: REMOVE_TODO,
    payload: id
});

type TodosAction =
    | ReturnType<typeof addTodo>
    | ReturnType<typeof toggleTodo>
    | ReturnType<typeof removeTodo>;

export type Todo = {
    id: number;
    text: string;
    done: boolean;
}

type TodosState = Todo[];

const initialState: TodosState = [];

function todos(state: TodosState = initialState, action: TodosAction): TodosState {
    switch (action.type) {
        case "todos/ADD_TODO":
            return state.concat({
                id: action.payload.id,
                text: action.payload.text,
                done: false
            });
        case "todos/TOGGLE_TODO":
            return state.map(todo =>
                todo.id === action.payload ? { ...todo, done: !todo.done } : todo
            );
        case "todos/REMOVE_TODO":
            return state.filter(todo => todo.id !== action.payload);
        default:
            return state;
    }
}

export default todos;
```

modules/index.ts

```javascript
import {combineReducers} from "redux";
import todos from "./todos";

const rootReducer = combineReducers({
    todos
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
```

components/TodoInsert.tsx

```javascript
import React, {FormEvent, useState} from "react";

type TodoInsertProps = {
    onInsert: (text: string) => void;
}

function Todoinsert({onInsert}: TodoInsertProps) {
    const [value, setValue] = useState('');
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        onInsert(value);
        setValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                placeholder="할 일을 입력하세요."
                value={value}
                onChange={onChange}
            />
            <button type='submit'>등록</button>
        </form>
    );
}

export default Todoinsert;
```

components/TodoItem.tsx

```javascript
import React, {CSSProperties} from "react";
import {Todo} from '../modules/todos';

type TodoItemProps ={
    todo: Todo;
    onToggle: (id: number) => void;
    onRemove: (id: number) => void;
}

function TodoItem({ todo, onToggle, onRemove}: TodoItemProps) {
    const handleToggle = () => onToggle(todo.id);
    const handleRemove = () => onRemove(todo.id);
    const textStyle: CSSProperties = {
        textDecoration: todo.done ? 'line-through' : 'none'
    }
    const removeStyle: CSSProperties = {
        color: 'red',
        marginLeft: 8
    };

    return (
        <li>
            <span onClick={handleToggle} style={textStyle}>{todo.text}</span>
            <span onClick={handleRemove} style={removeStyle}>(X)</span>
        </li>
    );
}

export default TodoItem;
```

components/TodoList.tsx

```javascript
import React from "react";
import {Todo} from "../modules/todos";
import TodoItem from "./TodoItem";

type TodoListProps = {
    todos: Todo[];
    onToggle: (id: number) => void;
    onRemove: (id: number) => void;
}

function TodoList ({ todos, onToggle, onRemove}: TodoListProps) {
    if(todos.length === 0) return <p>등록된 항목이 없습니다.</p>;
    return (
        <ul>
            {todos.map(todo => (
              <TodoItem todo={todo} onToggle={onToggle} onRemove={onRemove} key={todo.id}/>
            ))}
        </ul>
    );
}

export default TodoList;
```

container/TodoApp.tsx

```javascript
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../modules";
import {addTodo, removeTodo, toggleTodo} from "../modules/todos";
import Todoinsert from "../components/TodoInsert";
import TodoList from "../components/TodoList";

function TodoApp() {
    const todos = useSelector((state: RootState) => state.todos);
    const dispatch = useDispatch();

    const onInsert = (text: string) => {
        dispatch(addTodo(text));
    }

    const onToggle = (id:number) => {
        dispatch(toggleTodo(id));
    }

    const onRemove = (id: number) => {
        dispatch(removeTodo(id));
    }

    return (
        <>
            <Todoinsert onInsert={onInsert} />
            <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove}/>
        </>
    );
}

export default TodoApp;
```

App.tsx

```javascript
import React from 'react';
import TodoApp from "./container/TodoApp";

const App: React.FC = () => {
    return (
        <TodoApp/>
    );
}

export default App;
```

## Redux module refactoring by `typesafe-action`

 타입스크립트를 사용할 때 액션 생성함수와 리듀서를 깔끔하게 코드 작성을 할 수 있도록 도와준다. 

```javascript
import {createStandardAction } from 'typesafe-action';

const add = createStandardAction('ADD')<number>();
```

설치

```javascript
$ yarn add typesafe-actions
```

```javascript
const ADD_TODO = 'todos/ADD_TODO' as const;
const TOGGLE_TODO = 'todos/TOGGLE_TODO' as const;
const REMOVE_TODO = 'todos/REMOVE_TODO' as const;

=========================================================

const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';
const REMOVE_TODO = 'todos/REMOVE_TODO';
```

modules/counter.ts

```javascript
import {createAction, ActionType, createReducer} from "typesafe-actions";

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_BY = 'counter/INCREASE_BY';

export const increase = createAction(INCREASE)();
export const decrease = createAction(DECREASE)();
export const increaseBy = createAction(INCREASE_BY)<number>();

type CounterState = {
    count: number;
}

const initialState: CounterState = {
    count: 0
}

// type CounterAction =
//     | ReturnType<typeof increase>
//     | ReturnType<typeof decrease>
//     | ReturnType<typeof increaseBy>
const actions = {increase, decrease, increaseBy};
type CounterAction = ActionType<typeof actions>;

// 오브젝트 맵방식의 reducer 작성
const counter = createReducer<CounterState, CounterAction>(initialState, {
   [INCREASE] : state => ({count: state.count + 1}),
   [DECREASE] : state => ({count: state.count - 1}),
   [INCREASE_BY] : (state, action) => ({count: state.count + action.payload})
});

export default counter;
```

```javascript
// 오브젝트 맵방식의 reducer 작성
const counter = createReducer<CounterState, CounterAction>(initialState, {
   [INCREASE] : state => ({count: state.count + 1}),
   [DECREASE] : state => ({count: state.count - 1}),
   [INCREASE_BY] : (state, action) => ({count: state.count + action.payload})
});
```

```javascript
// 메서드 체이닝 방식의 reducer 작성
const counter = createReducer<CounterState, CounterAction>(initialState)
    .handleAction(INCREASE, state => ({ count: state.count + 1}))
    .handleAction(DECREASE, state => ({count: state.count - 1}))
    .handleAction.(INCREASE_BY, (state, action) => ({
        count: state.count + action.payload
    }));
```

메서드 체이닝 방식은 액션의 타입이 아닌 액션생성 함수를 넣어도 작동을 하도록 되어있다. 

modules/todos.ts

```javascript
import {createAction, ActionType, createReducer} from "typesafe-actions";

const ADD_TODO = 'todos/ADD_TODO' as const;
const TOGGLE_TODO = 'todos/TOGGLE_TODO';
const REMOVE_TODO = 'todos/REMOVE_TODO';

let nextId = 1;

export const addTodo = (text: string) => ({
    type: ADD_TODO,
    payload: {
        id: nextId++,
        text
    }
});

export const toggleTodo = createAction(TOGGLE_TODO)<number>();
export const removeTodo = createAction(REMOVE_TODO)<number>();

const actions = {
    addTodo,
    toggleTodo,
    removeTodo
}

type TodosAction = ActionType<typeof actions>;

export type Todo = {
    id: number;
    text: string;
    done: boolean;
}

type TodosState = Todo[];

const initialState: TodosState = [];

const todos = createReducer<TodosState, TodosAction>(initialState, {
    [ADD_TODO] : (state, action) => state.concat({
        ...action.payload,
        done: false
    }),
    [TOGGLE_TODO]: (state, action) => state.map(
        todo => todo.id === action.payload
        ? { ...todo, done: !todo.done}
        : todo
    ),
    [REMOVE_TODO]: (state, action) => state.filter(
        todo => todo.id !== action.payload
    )
});

export default todos;
```
