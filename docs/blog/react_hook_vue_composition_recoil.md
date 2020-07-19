---
title: React Hook/Vue Composition/Recoil 정리
sidebar: auto
---

React Hook, Vue Composition API, Recoil의 발생 시기와 이유에 대한 정리자료다.

## React Hook
### 발생시기
> https://ko.reactjs.org/docs/hooks-intro.html#video-introduction

- [2018.10.25 09:00AM 세션](http://conf2018.reactjs.org/event.html?sophiebits)
- [React Conf 2018](http://conf2018.reactjs.org/)에서 Sophie Alpert와 Dan Abramov는 Hook를 소개했었다.

### Hook 이란
> https://ko.reactjs.org/docs/hooks-overview.html#state-hook

여기서 `useState`가 바로 **Hook** 입니다.

```jsx
import React, { useState } from 'react';

function Example() {
  // "count"라는 새 상태 변수를 선언합니다
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

> https://ko.reactjs.org/docs/hooks-overview.html#but-what-is-a-hook

Hook은 함수 컴포넌트에서 React state와 Lifecycle Features을 **연동(hook into)** 할 수 있게 해주는 함수다. Hook은 Class안에서는 동작하지 않는다. 대신 Class 없이 React를 사용할 수 있게 해주는 것이다.

#### Effect Hook
> https://ko.reactjs.org/docs/hooks-overview.html#effect-hook

React 컴포넌트 안에서 데이터를 가져오거나 구독하는 것을 볼 수 있다. 또한 DOM을 직접 조작하는 작업을 할 수 있다.
이런 모든 동작을 side effects 또는 effects라고 한다. 왜냐면 이런 동작은 다른 컴포넌트에 영향을 줄 수 있고, 렌더링 과정에서 구현할 수 없는 작업이기 때문이다.

`useEffect`는 함수 컴포넌트 내에서 이런 side effects를 수행할 수 있게 해준다.

```jsx
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // componentDidMount, componentDidUpdate와 비슷합니다
  useEffect(() => {
    // 브라우저 API를 이용해 문서의 타이틀을 업데이트합니다
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

#### Hook 사용 규칙
> https://ko.reactjs.org/docs/hooks-overview.html#rules-of-hooks

Hook은 JS 함수이지만, 두 가지 규칙을 준수해야 한다.

1. 최상위에서만 Hook을 호출한다.
   - 반복문, 조건문, 중첩된 함수 내에서 Hook을 실행해서는 안된다.
2. React 함수 컴포넌트 내에서만 Hook을 호출해야 한다.
   - 일반 JS 함수에서는 Hook을 호출해서는 안된다.

### 발생이유
> https://ko.reactjs.org/docs/hooks-intro.html#motivation

- 컴포넌트 사이에서 상태와 관련된 로직을 재사용하기 어렵다.
  - React는 컴포넌트에 재사용 가능한 행동을 붙이는 방법을 제공하지 않는다.
  - render props과 HOCs 패턴을 사용해도 컴포넌트를 재구성해야 하며 코드를 추적하기 어렵게 만든다.
    - 다른 추상화 레이어에 둘러 쌓여 Wrapper Hell을 볼 가능성이 높다.
- 복잡한 컴포넌트들은 이해하기 어렵다.
  - 유지하기 힘든 상태와 사이드 이펙트로 인해 버그가 쉽게 발생하고 무결성을 쉽게 해친다.
  - 상태 관련 로직이 모든 공간에 있기 때문에 작게 만들기 힘들고, 테스트하기도 어렵다.
- Class는 사람과 기계를 혼동시킨다.
  - 코드의 재사용성과 코드 구성을 좀 더 어렵게 만든다.
  - React를 배우는 데 큰 진입장벽이다.
  - JS의 this가 어떻게 동작하는 지 알아야 한다.
  - 숙련된 React 개발자 사이에서도 Class 컴포넌트들을 구별하고 각 요소를 언제 사용하는지 의견이 일치하지 않는다.
  - HMR에서 깨지기 쉽고 신뢰할 수 없게 만든다.

## Vue Composition API
### 발생시기
> https://vue-composition-api-rfc.netlify.app/#composition-api-rfc

- 2019.07.10
- Composition API RFC 시작 날짜

### Composition API 이란
컴포넌트 로직을 유연하게 구성할 수 있는 부가적인 함수기반 API 세트다. `reactive`, `computed`가 **Composition API** 중 하나이다.

```html
<template>
  <button @click="increment">
    Count is: {{ state.count }}, double is: {{ state.double }}
  </button>
</template>

<script>
import { reactive, computed } from 'vue'

export default {
  setup() {
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2)
    })

    function increment() {
      state.count++
    }

    return {
      state,
      increment
    }
  }
}
</script>
```

#### Composition API 사용 규칙
- Composition API의 진입점은 `setup` 함수를 사용한다.
- Lifecycle Hook은 `setup` 함수에 등록한다.

### 발생이유
- 로직 재사용 & 코드 구성
  - 시간이 지남에 따라 기능이 추가되는 컴포넌트는 추론하기 어렵다.
  - 여러 컴포넌트간의 논리를 추출하고 재사용하기 위한 깨끗하고 비용이 들지 않는 메커니즘을 Vue에서 재공하지 않는다.
- 더 좋은 타입 추론
  - Vue2 API는 단순히 타입 추론을 염두에 두고 설계되지 않아 TS와 잘 작동하도록 만들 때 많은 복잡성을 만든다.
    - Vue2 API는 `this` 컨텍스트를 의존하고 있기 때문에 TS 통합이 어렵다.
    - Vue2의 `this`는 JS 보다 마술적으로 동작한다.
    - 예를 들어 `methods` 아래에 중첩된 함수의 `this`는 `methods` 오브젝트가 아닌 컴포넌트 인스턴스를 가리킨다.
  - Class API로 제공하려고 시도했으나 Decorator를 의존해야 함으로 Vue3의 기반을 세우는 데, 위험하다고 판단했다.
  - 자연스럽게 친숙한 일반 변수와 함수를 사용하여, 메뉴얼 타입 힌트가 거의 필요없는 타입 추론을 할 수 있게 했다.

## Recoil
### 발생시기
- [2020.05.14 18:00 세션](https://www.react-europe.org/#slot-2358-state-management-for-today-s-react)
- ReactEurope에서 Dave McCabe는 Recoil을 소개했다.

### Recoil 이란
> https://recoiljs.org/docs/introduction/core-concepts

Recoil은 상태머신 라이브러리다. Atoms과 Selectors로 구성된다.

#### Atoms
```jsx
const fontSizeState = atom({
  key: 'fontSizeState',
  default: 14,
});

function FontButton() {
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  return (
    <button onClick={() => setFontSize((size) => size + 1)} style={{fontSize}}>
      Click to Enlarge
    </button>
  );
}

function Text() {
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  return <p style={{fontSize}}>This text will increase in size too.</p>;
}
```

#### Selectors
```jsx
const fontSizeLabelState = selector({
  key: 'fontSizeLabelState',
  get: ({get}) => {
    const fontSize = get(fontSizeState);
    const unit = 'px';

    return `${fontSize}${unit}`;
  },
});

function FontButton() {
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  const fontSizeLabel = useRecoilValue(fontSizeLabelState);

  return (
    <>
      <div>Current font size: ${fontSizeLabel}</div>

      <button onClick={() => setFontSize(fontSize + 1)} style={{fontSize}}>
        Click to Enlarge
      </button>
    </>
  );
}
```

#### Recoil 사용 규칙
- key는 고유한 키를 할당한다.
  - 디버깅과 영속성에 이점을 위함이다.
- Selectors는 순수함수로 정의한다.

### 발생이유
- React 컴포넌트는 공통 조상을 통해 공유할 수 있다. 하지만 여기에는 거대한 트리를 다시 렌더링해야 할 수 있다.
- Context는 각각 자체 Consumer가 있는 무한한 세트를 가지는 게 아닌 단일 값만 저장할 수 있다.
- 트리의 잎과 꼭대기의 코드분할을 힘들게 한다.

## 끝
### 같이 볼만한 자료
- 💻 [React 이해하기 - Kurly Tech Blog](https://helloworld.kurly.com/blog/thinking-in-react/)
- 💻 [Recoil - 또 다른 React 상태 관리 라이브러리? - TOAST UI](https://ui.toast.com/weekly-pick/ko_20200616/)
- 💻 [You Might Not Need Vuex with Vue 3](https://dev.to/blacksonic/you-might-not-need-vuex-with-vue-3-52e4)
- 📄 [v3.vuejs.org - Composition API](https://v3.vuejs.org/guide/composition-api-introduction.html#why-composition-api)
