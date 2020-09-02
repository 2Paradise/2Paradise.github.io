---
hide: false
type: "post"
title: "Class 형 컴포넌트"
tag: ["React", "Class Component"]
date: "2020-07-03"
desc: "요즘 잘 사용하지 않지만 알아 둘 필요가 있다. 함수형 컴포넌트와 Hook으로 못하는 작업이 한 두가지 정도가 있다. 예전엔 class 형으로 만들었지만 지금은 hook으로 상태관리가 가능하기 때문에 함수형 컴포넌트가 주로 사용되고 있다."
cate: "react"
---

요즘 잘 사용하지 않지만 알아 둘 필요가 있다. 함수형 컴포넌트와 Hook으로 못하는 작업이 한 두가지 정도가 있다. 

```javascript
import React, {Component} from "react";
import './App.css';

class Hello extends Component {
    static defaultProps = {
        name : '이름 없음'
    };

    render() {
        const {color, isSpecial, name} = this.props;

        return (
            <div style={{color}}>
                {isSpecial && <b>*</b>}
                안녕하세요. {name}
            </div>
        );
    }
}
```

예전엔 class 형으로 만들었지만 지금은 hook으로 상태관리가 가능하기 때문에 함수형 컴포넌트가 주로 사용되고 있다. 

## LifeCycle Method

생명주기 메서드. 클래스형 컴포넌트에서만 사용할 수 있다. useEffect와 유사하다고 볼 수 있다. 이 개념에 대해 많은 시간을 쏟을 필요는 없다. 다만 어떤 것들이 있는지만 알아 두고 [메뉴얼](https://ko.reactjs.org/docs/state-and-lifecycle.html)을 통해 알아볼 수 있는 정도만 학습하면 된다.


