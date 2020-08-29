---
hide: false
type: "post"
title: "Connect HOC 함수를 통해 Class형 component Redux 연동"
tag: ["React", "HOC", "Conncet HOC", "Redux"]
date: "2020-07-22"
desc: "최근 Reat 버전에서는 connect HOC를 쓸 일이 거의 없다. useSelector 와 useDispatch 사용이 우선되어야 한다. 예전에 만들어진 프로젝트의 클래스형 컴포넌트라던지 함수형 컴포넌트로는 구현할 수 없는 component deep catch lifeCycle 메소드를 쓴다면 Connect 라는 함수를 사용한다. component의 props를 통해 리덕스의 상태 또는 액션을 디스패치 하는 함수를 받아 올 수 있다. 예전에는 connect 함수 사용이 메인이었지만, useSelector와 useDispatch 가 등장하면서 사용되지 않는다."
---

최근 Reat 버전에서는 connect HOC를 쓸 일이 거의 없다. useSelector 와 useDispatch 사용이 우선되어야 한다. 예전에 만들어진 프로젝트의 클래스형 컴포넌트라던지 함수형 컴포넌트로는 구현할 수 없는 component deep catch lifeCycle 메소드를 쓴다면 Connect 라는 함수를 사용한다. 

 component의 props를 통해 리덕스의 상태 또는 액션을 디스패치 하는 함수를 받아 올 수 있다. 예전에는 connect 함수 사용이 메인이었지만, useSelector와 useDispatch 가 등장하면서 사용되지 않는다. 

## HOC ?

재사용 되는 값, 함수를 props로 받아 올 수 있게 해주는 옛날 패턴이다. 현재는 Hook으로 대체된 것이다. 

 Connect를 꼭 클래스형 컴포넌트에서 쓸 필요는 없다. 함수형이던 클래스형이던 사용방법이 다르진 않다. 

```javascript
import React from 'react';
import {bindActionCreators} from "redux";
import Counter from "../components/Counter";
import {connect} from "react-redux";
import {decrease, increase, setDiff} from "../modules/counter";

function CounterContainer({
    number,
    diff,
    increase,
    decrease,
    setDiff
}) {
    return (
        <Counter number={number} diff={diff} onIncrease={increase} onDecrease={decrease} onSetDiff={setDiff}/>
    );
}

const mapStateToProps = (state) => ({
    number : state.counter.number,
    diff : state.counter.diff
});

// const mapDispatchToProps = dispatch => ({
//     onIncrease: () => dispatch(increase()),
//     onDecrease: () => dispatch(decrease()),
//     onSetDiff: (diff) => dispatch(setDiff(diff)),
// });

// const mapDispatchToProps = dispatch => bindActionCreators({
//     increase,
//     decrease,
//     setDiff
// }, dispatch);

const mapDispatchToProps = {
    increase,
    decrease,
    setDiff
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
```

# Connect 에서 알아두면 좋은 것들

## 1. mapStateToProps의 두번째 파라미터로 ownProps를 사용

 이 파라미터는 생략이 가능하여 보통은 넣지 않는다. 컨테이너 컴포넌트를 랜더링 할 때 직접 넣어주는 props를 말한다. 

```javascript
const mapStateToProps = (state, ownProps) => ({
	todo: state.todos[ownProps.id]
});

<Container id={1} />
```

 리덕스안의 특정 값을 불러올 때 현재 props를 참고할 때 사용 가능 하다.

## 2. connect의 3번째 파라미터 mergeProps

하나의 함수인데 이를 통해 컴포넌트가 실제 전달 받는 props를 정의할 수 있다.

```javascript
(stateProps, dispatchProps, ownProps) => Object
```

## 3. connect 의 4번째 파라미터 options
