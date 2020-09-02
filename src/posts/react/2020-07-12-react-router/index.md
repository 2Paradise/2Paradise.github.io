---
hide: false
type: "post"
title: "React Router"
tag: ["React", "Router", "SPA"]
date: "2020-07-12"
desc: "라우팅을 클라이언트가 담당하게 된다. 라우팅은 어떤 주소에 어떤 UI를 보여줄지 정하는 것을 말한다. 보통은 서버에서 처리했지만 SPA에서는 클라이언트가 담당하게 된다.사용자가 특정 페이지에 이동을 할때 서버에 요청없이 페이지를 보여줄 수 있게 되는 것이다. 동적인 값이 필요할 때는 API 요청을 통해 Json 형식으로 보여주게 된다. 이러한 구조를 통해 얻을 수 있는 이점으로 서버는 자원을 많이 아낄 수 있고 클라이언트 쪽은 더 좋은 사용자 경험을 제공 받을 수 있는 것이다."
cate: "react"
---

## SPA (Single Page Application)

 라우팅을 클라이언트가 담당하게 된다. 라우팅은 어떤 주소에 어떤 UI를 보여줄지 정하는 것을 말한다. 보통은 서버에서 처리했지만 SPA에서는 클라이언트가 담당하게 된다. 

 사용자가 특정 페이지에 이동을 할때 서버에 요청없이 페이지를 보여줄 수 있게 되는 것이다. 동적인 값이 필요할 때는 API 요청을 통해 Json 형식으로 보여주게 된다. 이러한 구조를 통해 얻을 수 있는 이점으로 서버는 자원을 많이 아낄 수 있고 클라이언트 쪽은 더 좋은 사용자 경험을 제공 받을 수 있는 것이다. 

 

 앱의 규모가 커질 수록 JS 파일의 크기가 많이 커질 수 있는데 `Code Splitting` 이라는 기술을 통해 해결 할 수 가 있다. 각 기능 별로 파일을 분리 시켜 필요한 시점에 불러오는 것이다. 

브라우저에서 JS 가 구동되지 않으면 UI를 볼 수 없다. 검색엔진에서 크롤링 같은 작업이 불가능 한 것이다. 이러한 문제점은 `Server Side Rendering` 이란 기술을 통해 해결 할 수 가 있다. 

Reat 에서 SPA 를 만들기 위해 많이 사용되는 라이브러리는 React-Router, Next 가 있다.

React Router

- 컴포넌트를 기반으로 라우팅을 한다. 필요한 값을 props로 넣어 랜더링 하는 방식이다.

JSX

```javascript
<Router>
	<div>
		<nav>
		</nav>
	</div>
	
	<Route path="/" exact component={Index} />
	<Route path="/about/" component={About} />	
	<Route path="/users/" component={Users} />	

</Router>
```

Next.js

- 서버사이드 렌더링을 쉽게 구현가능하다.
- 파일경로와 이름을 기반으로 라우트를 설정한다.

// pages/index.js

// pages/About.js

리액트에서 사용되는 주요 컴포넌트를 살펴 보자.

참고 Site [React Tranning - react router](https://reactrouter.com/core/guides/philosophy) 

## 1. BrowserRouter

HTML5 History API를 사용하여 브라우저의 주소표시줄 경로를 바꿔 줄 수 있는데 바꿀때 서버 요청없이 브라우저에서 주소만 바꾸는 것이 가능하다. 

## 2. HashRouter

주소뒤에 #를 넣는 방식이다. 옛날 브라우저에서도 작동한다.

example.com/#/path/to/route

## 3. MemoryRouter

브라우저의 주소와 무관하며 일체 건드리지 않기 때문에 브라우저가 아닌 환경에서 사용되기 좋다. 임베디드 웹앱, 리액트 네이티브 등에서 사용된다. 특정 페이지 일부를 react로 구현하여 사용하고 싶을 경우 유용하다.

## 4. StaticRouter

서버사이드 렌더링에서 사용하는 용도

## 5. Route

라우트를 정의할 때 사용하는 컴포넌트이다. 

## 6. Link

a태그로 구성되어 있지만 새로고침이 되지 않는다. 사용한 Roter의 주소를 바꿔 준다. 

## Parameter & Query

URL Parameter

```javascript
<Route path="/profiles/:username" component={Profile} />
```

```javascript
import React from 'react';

const profileData = {
    raccoon : {
        name : '이낙원',
        discription : '낙낙코딩'
    }
    , velopert : {
        name : '김민준',
        discription : 'Front Engineer @RIDI'
    }
}
function Profile({match}) {
    const {username} = match.params;
    const profile = profileData[username];

    if(!profile){
        return <div>존재하지 않는다.</div>
    }
    return (
        <div>
            <h3>{username} ({profile.name})</h3>
            <p>
                {profile.description}
            </p>
        </div>
    );
}

export default Profile;
```

Query

props로 전달되는 location 을 통해 query 정보를 가져 올 수 있으며 qs 라이브러리를 사용하여 편리하게 추출 가능하다. 

```javascript
$ yarn add qs
```

```javascript
import React from 'react';
import qs from 'qs';

function About({location}) {
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true
    });
    const detail = query.detail === 'true';

    console.log(query);
    return (
        <div>
            <h1>소개</h1>
            <p>
                이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트 입니다.
            </p>
            {detail && <p>detail 값이 true 입니다.</p>}
        </div>
    );
}

export default About;
```

# React Router 부가기능

## History 객체

라우트로 사용되는 컴포넌트에 props로 전달된다. 이 객체를 사용하여 컴포넌트에서 라우터에 직접적인 접근이 가능하다. 특정 함수를 호출 했을 때 특정 경로로 이동하거나 뒤로가거나 페이지 이탈을 방지할 수 있다. 

```javascript
import React, {useEffect} from 'react';

function HistorySample({history}) {
    const goBack = () => {
        history.goBack();
    }

    const goHome = () => {
        history.push('/');
    }

    const replaceToHome = () => {
        history.replace('/')
    }
    
    //페이지 이탈 방지
    useEffect(() => {
        console.log(history);
        const unblock = history.block('정말 떠나실건가요?');
        return() => {
            unblock();
        }
    }, [history]);

    return (
        <div>
            <button onClick={goBack}>뒤로가기</button>
            <button onClick={goHome}>홈으로</button>
            <button onClick={replaceToHome}>홈으로 (Replace</button>
        </div>
    );
}

export default HistorySample;
```

## withRouter

 라우터 컴포넌트가 아닌곳에서 `match` , `location` , `history` 를 props로 받아 사용 할 수 있게 해준다.

```javascript
import React from 'react';
import {withRouter} from 'react-router-dom';

function WithRouterSample({location, match, history}) {
    return (
        <div>
            <h4>location</h4>
            <textarea value={JSON.stringify(location, null, 2)} readOnly/>
            <h4>Match</h4>
            <textarea value={JSON.stringify(match, null, 2)} readOnly/>
            <button onClick={() => history.push('/')}>홈으로</button>
        </div>
    );
}

export default withRouter(WithRouterSample);
```

route로 사용되지 않은 컴포넌트에서 조건부로 이동해야 할 경우 주로 사용된다. 

## Switch

 여러가지 라우트 중에 가장 먼저 매칭된 라우트 만을 보여준다. 

```javascript
<div>
    <ul>
        <li>
            <Link to="/">홈</Link>
        </li>
        <li>
            <Link to="/about">소개</Link>
        </li>
        <li>
            <Link to="/profiles">프로필 목록</Link>
        </li>
        <li>
            <Link to="/history">예제</Link>
        </li>
    </ul>
    <hr/>
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={HistorySample} />
        <Route render={({location}) => <div><h2>이페이지는 존제하지 않습니다. </h2><p>{location.pathname}</p></div>}/>
    </Switch>
</div>
```

## NavLink

 링크와 비슷하다. 해당 링크 주소와 현재 브라우저의 주소와 일치한다면 특별한 스타일을 지정해 줄 수 있다.

```javascript
import React from 'react';
import Profile from './Profile';
import {NavLink, Route} from 'react-router-dom';

function Profiles() {
    return (
        <div>
            <h3>사용자 목록</h3>
            <ul>
                <li>
                    <NavLink
                        to="/profiles/raccoon"
                        activeStyle={{ background:'black', color:'white' }}
												activeClassName="active"
                    >
                        Raccoon
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/profiles/velopert"
                        activeStyle={{ background:'black', color:'white' }}
												activeClassName="active"
                    >
                        Velopert
                    </NavLink>
                </li>
            </ul>

            <Route path="/profiles" exact render={() => <div>사용자를 선택해 주세요</div>}/>
            <Route path="/profiles/:username" component={Profile}/>
        </div>
    );
}

export default Profiles;
```

## useReactRouterHook 사용하기

useReactRouter Hook 을 사용하여 withRouter 를 이용하지 않아도 router 관련 porps를 가져올 수 있다.

```javascript
$ yarn add use-react-router
```

```javascript
import React from 'react';
import useReactRouter from 'use-react-router';

function RouterHookSample() {
    const {history, location, match} = useReactRouter();
    console.log({history, location, match});
    return null;
}

export default RouterHookSample;
```
