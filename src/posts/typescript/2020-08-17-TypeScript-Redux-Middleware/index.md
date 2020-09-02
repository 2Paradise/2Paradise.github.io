---
hide: false
type: "post"
title: "TypeScript & Redux Middleware"
tag: ["Typescript", "React", "Redux", "Redux Middleware"]
date: "2020-08-17"
desc: "quicktype 사이트를 이용하여 json data의 typescript interface 를 쉽게 얻을 수 있다. typescript가 적용 된 redux-middleware 작성 예제에 대해 살펴보고 사용방법에 대한 이해를 높이자."
cate: "typescript"
---

## redux-thunk

```bash
$ yarn add axios redux-thunk
```

index.tsx

```javascript
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./modules";
import Thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(Thunk));
```

GET https://api.github.com/users/2paradise

quicktype 사이트를 이용하여 json data의 typescript interface 를 쉽게 얻을 수 있다.

[Convert JSON to Swift, C#, TypeScript, Objective-C, Go, Java, C++ and more * quicktype](https://quicktype.io)

api/github.ts

```javascript
import axios from 'axios';

export async function getUserProfile(username: string) {
    const response = await axios.get<GithubProfile>(`https://api.github.com/users/${username}`);
    return response.data;
};

export type GithubProfile = {
    login:               string;
    id:                  number;
    node_id:             string;
    avatar_url:          string;
    gravatar_id:         string;
    url:                 string;
    html_url:            string;
    followers_url:       string;
    following_url:       string;
    gists_url:           string;
    starred_url:         string;
    subscriptions_url:   string;
    organizations_url:   string;
    repos_url:           string;
    events_url:          string;
    received_events_url: string;
    type:                string;
    site_admin:          boolean;
    name:                null;
    company:             null;
    blog:                string;
    location:            null;
    email:               null;
    hireable:            null;
    bio:                 null;
    twitter_username:    null;
    public_repos:        number;
    public_gists:        number;
    followers:           number;
    following:           number;
    created_at:          Date;
    updated_at:          Date;
};
```

modules/github/actions.ts

```javascript
import {GithubProfile} from "../../api/github";
import {AxiosError} from "axios";
import {createAsyncAction} from "typesafe-actions";

export const GET_USER_PROFILE = 'github/GET_USER_PROFILE';
export const GET_USER_PROFILE_SUCCESS = 'github/GET_USER_PROFILE_SUCCESS';
export const GET_USER_PROFILE_ERROR = 'github/GET_USER_PROFILE_ERROR';

// payload type generic 으로 설정
export const getUserProfileAsync = createAsyncAction(
    GET_USER_PROFILE,
    GET_USER_PROFILE_SUCCESS,
    GET_USER_PROFILE_ERROR)<undefined, GithubProfile, AxiosError>();
```

modules/github/types.ts

```javascript
import * as actions from './actions';
import {ActionType} from "typesafe-actions";
import {GithubProfile} from "../../api/github";

export type GithubAction = ActionType<typeof actions>;
export type GithubState = {
    userProfile: {
        loading : boolean;
        data: GithubProfile | null;
        error: Error | null;
    }
}
```

modules/github/thunks.ts

```javascript
import {Dispatch} from "redux";
import {getUserProfileAsync} from "./actions";
import {getUserProfile} from "../../api/github";

export function getUserProfileThunk(username: string){
    return async (dispatch: Dispatch) => {
        const {request, success, failure} = getUserProfileAsync;
        dispatch(request());
        try{
            const userProfile = await getUserProfile(username);
            dispatch(success(userProfile));
        } catch (e) {
            dispatch(failure(e));
        }
    };
}
```

modules/github/reducer.ts

```javascript
import {createReducer} from 'typesafe-actions';
import {GithubAction, GithubState} from "./types";
import {GET_USER_PROFILE, GET_USER_PROFILE_ERROR, GET_USER_PROFILE_SUCCESS} from "./actions";

const initialState: GithubState = {
    userProfile: {
        loading: false,
        error: null,
        data: null
    }
}

const github = createReducer<GithubState, GithubAction>(initialState, {
    [GET_USER_PROFILE]: (state) => ({
        ...state,
        userProfile: {
            loading: true,
            error: null,
            data: null
        }
    }),
    [GET_USER_PROFILE_SUCCESS]: (state, action) => ({
        ...state,
        userProfile: {
            loading: false,
            error: null,
            data: action.payload
        }
    }),
    [GET_USER_PROFILE_ERROR]: (state, action) => ({
        ...state,
        userProfile: {
            loading: false,
            error: action.payload,
            data: null
        }
    })
});

export default github;
```

modules/github/index.ts

```javascript
export {default} from './reducer';
export * from './actions';
export * from './types';
export * from './thunks';
```

modules/index.ts

```javascript
import {combineReducers} from "redux";
import counter from "./counter";
import todos from "./todos";
import github from "./github";

const rootReducer = combineReducers({
    counter,
    todos,
    github
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
```
