---
title: Vuex 적용 경험 정리
sidebar: auto
---

# Vuex 적용 경험 정리
> 초안작성일: 2020.03.02

## useStore
Options API와 Class-based API에서는 `this` 컨텍스트가 존재 하므로 `this.$store`를 사용한다.
그러나 Composition API는 `this` 컨텍스트가 없기 때문에 `setup(props, context)`의 두 번째 인자로 전달되는 `context.root.$store`를 통하여 Vuex를 사용한다.

`useXXX` 형태로 사용하면 다른 코드들과 잘 어울리리라 생각한다.
```js
import {SetupContext} from '@vue/composition-api';

export const useStore = (context: SetupContext) => {
  const {
    root: {
      $store: {
        state,
        getters,
        commit,
        dispatch,
      },
    },
  } = context;
  return {
    state,
    getters,
    commit,
    dispatch,
  };
};
```

`state`는 `reactive`와 `ref`를 통해 반응형 상태를 만들어도 `mutation`을 감지하지 못하기 때문에 `state`를 직접 사용해야 한다.

```js
export default defineComponent({
  setup(props, context) {
    const { dispatch, state } = useStore(context)

    const fetchCheckLogin = (): Promise<void> => {
      return dispatch('auth/fetchCheckLogin')
    }
    const fetchLogout = (): Promise<void> => {
      return dispatch('auth/fetchLogout')
    }
    const isLogin = (): boolean => {
      return state?.auth?.auth?.success
    }
    const toAuthTitle = (): string => {
      return isLogin() ? '로그아웃' : '로그인'
    }
    const logout = (): void => {
      fetchLogout()
    }

    onMounted(() => {
      fetchCheckLogin()
    })

    return {
      toAuthTitle,
      logout
    }
  }
})
```

## state 이름 충돌
`reactive`로 정의한 반응형 상태와 `useStore`를 통해 사용하는 스토어 상태의 변수명을 `state`로 사용하고 있다.
`setup()` 내부에 사용할 경우 충돌이 되기 때문에 변수명의 변경이 필요하다.

`store`를 네임스페이스로 가지는 것도 하나의 대안이다.
```ts
setup(props, context) {
  const store = useStore(context) // store.state로 접근
}
```

## state 접근
모듈 형태인 state는 사용 시 깊은 접근이 필요하다. `computed`를 사용하면 기존 옵션 API 처럼 사용가능하다.

```ts
setup(props, context) {
  const store = useStore(context)
  const state = reactive({
    auth: computed(() => store.state.authModule.auth)
  })
}
```

## useAction
사용측에서 모듈명과 액션명은 이벤트 기반이기 때문에 런타임에서만 정상 작동을 확인할 수 있다.
`useAction`는 컴파일타임에 모듈명과 액션명이 정상적으로 사용되었음을 확인하기 위해 만들어졌다. 

`ModuleActions`에서 key는 모듈명, value는 액션명으로 타입을 정의했다.
- 모듈명과 파일명이 동일하도록 하드코딩해야 한다.
- 액션명은 `keyof typeof T` 형태로 타입이 정의되기 때문에 액션이 추가되면 자동으로 반영된다.

먼저 모듈명에 대해 타입 체크한 뒤, 해당 모듈의 액션명을 타입 체크한다.
하나라도 정의된 명을 사용하지 않으면 컴파일 타입 에러가 발생한다.

### /use/useStoreAction.ts
```ts
import { Dispatch } from 'vuex'
import { actions } from '~/store/auth'
import notice from '~/store/notice'

interface ModuleActions {
  auth: keyof typeof actions
  notice: keyof typeof notice.actions
}

type ActionHandle<Keys extends string> = {
  [key in Keys]: (payload?: any) => Promise<any>
}

export const useStoreAction = (dispatch: Dispatch) => {
  function useAction<T extends keyof ModuleActions>(
    moduleName: T,
    actions: ModuleActions[T][]
  ): ActionHandle<ModuleActions[T]> {
    return Object.assign(
      {},
      ...actions.map((action) => {
        return {
          [action]: (payload) => dispatch(`${moduleName}/${action}`, payload)
        }
      })
    )
  }

  return { useAction }
}
```

사용 측은 [mapActions](https://vuex.vuejs.org/guide/actions.html#dispatching-actions-in-components)와 유사한 형태로 사용한다.
첫 번째 인자는 모듈명, 두 번째 인자는 액션명을 배열로 사용하며 return type은 객체이기 때문에 Destructuring 하여 사용할 수 있다.
```ts
const { dispatch } = useStore(context)
const { useAction } = useStoreAction(dispatch)
const { fetchCheckLogin, fetchLogout } = useAction('auth', [
  'fetchCheckLogin',
  'fetchLogout'
])
```

## useGetter
[useAction](#useAction)과 같은 이유로 만들어진 Getter를 사용하기 위한 함수이다.

### /use/useStoreGetter.ts
```ts
import { getters } from '~/store/auth'

interface ModuleGetters {
  auth: keyof typeof getters
}

type Getters<Keys extends string> = {
  [key in Keys]: () => any
}

export const useStoreGetter = (getters: object) => {
  function useGetter<T extends keyof ModuleGetters>(
    moduleName: T,
    moduleGetters: ModuleGetters[T][]
  ): Getters<ModuleGetters[T]> {
    return Object.assign(
      {},
      ...moduleGetters.map((name) => {
        return {
          [name]: (): any => getters[`${moduleName}/${name}`]
        }
      })
    )
  }

  return { useGetter }
}
```

getter는 인자를 받지 않는 함수로 만들어진다.
```ts
const { getters } = useStore(context)
const { useGetter } = useStoreGetter(getters)
const { isLogin } = useGetter('auth', ['isLogin'])
const toAuthTitle = (): string => {
  return isLogin() ? '로그아웃' : '로그인'
}
```

## useAction, useGetter 이점
### 타입 추론
Store 모듈에 정의된 `Action`과 `Getter`의 타입을 추론할 수 있다.

### IDE 지원
정의부를 찾아주는 기능(Navigate to declaration)과 이름변경 기능(Rename 또는 Refactor)을 사용할 수 있다.
기존의 Vuex는 이러한 기능을 사용할 때 제한이 있었다.

### 재사용성 향상
두 함수는 `setup()`의 Context에 의존하지 않는다.
`useStoreAction`는 `Dispatch`에 의존하고, `useStoreGetter`는 `object` 타입에 의존한다.
즉, Middleware에서 재사용을 가능하게 해준다.

```ts
import { useStoreGetter } from '~/use/useStoreGetter'
import { useStoreAction } from '~/use/useStoreAction'

export default ({ store: { dispatch, getters } }) => {
  const { useAction } = useStoreAction(dispatch)
  const { useGetter } = useStoreGetter(getters)
  const { fetchCheckLogin, fetchLogout } = useAction('auth', [
    'fetchCheckLogin',
    'fetchLogout'
  ])
  const { isLogin } = useGetter('auth', ['isLogin'])

  return Promise.all([fetchCheckLogin(), fetchLogout()]).then(() =>
    console.log(isLogin())
  )
}
```

## useStorePlugin
> ActionTree를 사용하지 않고 Plugin을 사용한 케이스

Store에 ActionTree 타입을 사용하면 `Action명([key: string])`을 오직 `string` 으로 추론한다.
이에 대한 영향으로 useAction은 의도와 다르게 동작한다.

#### /vuex/types/index.d.ts
```ts
export interface ActionTree<S, R> {
  [key: string]: Action<S, R>;
}
```

만약에 ActionTree를 사용하지 않을 경우 Store내에서 `this`를 통해 플러그인에 접근할 수 없다.
그래서 고안해낸 방법이 useStorePlugin이며 이를 통해 플러그인에 접근할 수 있다.

### /use/useStorePlugin.ts
```ts
import { Store } from 'vuex'

export const useStorePlugin = (store: any) => {
  const { $axios } = store as Store<any>
  return { $axios }
}
```

### /store/auth.ts
```ts
export const actions = {
  fetchCheckLogin(context): Promise<void> {
    const { $axios } = useStorePlugin(this)
    return $axios.$get('/check_login')
  },
}
```

## useStoreAction, useStoreGetter 간소화
앞서 소개한 코드를 통하여 개발을 진행 했을 때 코드베이스가 ~~대폭까진 아니고~~소폭 증가했다.
그래서 기존에 사용 중이던 코드에 대해 동작은 동일하되 코드베이스를 간소화시키는 방안이 필요했다.

우선 useStoreAction 사용부를 개선할 필요가 있다고 느꼈다.
useStoreAction 사용부를 보면 무언가 많이 작성해줘야 하는 게 너무 많다.
현재 useStoreAction 사용부에는 `1) 사용할 모듈`, `2) 사용할 함수`, `3) 사용할 함수 해체의 코드` 등이 기술 되고 있다.

useStoreAction의 목적은 `타입 추론을 통한 선언부 추적`에 대한 비중이 크기 때문에 타입 추론 부분 이외에 대한 개선이 필요하다.

개선한 방향은 단순히 `1) 사용할 모듈`만 기술하는 것이다.

```diff
- const { fetchCheckLogin, fetchLogout } = useAction('auth', [
-   'fetchCheckLogin',
-   'fetchLogout'
- ])
+ const authActions = useAction('auth')
```

### /use/useStoreAction.ts
useStoreAction는 모듈명을 인자로 받고 액션을 모두 반환한다. 변경된 부분은 다음과 같다.

```ts {1-4,9,11,14}
const actionMap = new Map([
  ['auth', Object.keys(actions)],
  ['notice', Object.keys(notice.actions)]
]);

export const useStoreAction = (dispatch: Dispatch) => {
  function useAction<T extends keyof ModuleActions>(
    moduleName: T,
    actions?: ModuleActions[T][]
  ): ActionHandle<ModuleActions[T]> {
    const keys = actions || actionMap.get(moduleName) || [];
    return Object.assign(
      {},
      ...keys.map((action) => {
        return {
          [action]: (payload) => dispatch(`${moduleName}/${action}`, payload)
        }
      })
    )
  }

  return { useAction }
};
```
