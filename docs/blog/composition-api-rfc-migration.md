---
title: Composition API RFC Migration
sidebar: auto
---

## 세팅
### 설치
```bash
npm install @vue/composition-api
```

### 플러그인
```js
import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'

Vue.use(VueCompositionApi)
```

### 어뎁터
`@vue/composition-api`은 아직 프로덕션에 적용하지 않을 것을 권고하고 있지만 적용 할만한 가치가 있다. 하지만 릴리즈 노트를 통해서 아직 변경 가능성을 확인할 수 있기 때문에 어뎁터 패턴을 통해 해결했다.

`@vue/composition-api`를 업그레이드 했을 때 해당 모듈을 사용하는 개발자는 API 변경/삭제에 대한 권한이 없다. 그렇기 때문에 업그레이드 하는 동시에 영향을 받게 된다. 이런 부분을 나는 외부 의존성라고 부르고 있다.

외부 의존성은 조작할 수 있는 권한이 없으므로 의존성이 강하다. 의존성을 약하게 만드는 가장 쉬운 방법은 중간에 무언가를 껴넣는 것이다. 나는 그 방법을 어뎁터 패턴을 사용한다.

일반적으로 `[Custom Component] => [Vue]` 이런 형태로 라이브러리를 직접 사용하게 된다. 만약에 100개 이상의 `[Custom Component]`가 있다면 `[Vue]` 업그레이드 시 모든 해당 파일만큼 **수동 변경**이 필요하다.

어뎁터 패턴은 `[Custom Component] => [Vue Adaptor] => [Vue]` 형태 이다. `[Vue]`가 변경이 되도 `[Vue Adaptor]`의 변경만 발생한다. 하지만 `[Vue]` API의 이름변경이 발생되면 `[Custom Component]`도 변경하고 싶을 것이다. `[Vue Adaptor]`를 사용하는 의미는 IDE의 Refactor 기능을 통해 **자동 변경** 가능하다는 것이다.

실재로 코드로 보면 다음과 같다.
##### Custom Component
```html
<template>
</template>

<script lang="ts">
import { defineComponent, ref } from '~/vue-adaptor'

export default defineComponent({
  props: {
    id: String,
    label: String,
    disabled: Boolean,
    checked: Boolean
  },
  setup(props, context) {
    const isChecked = ref(props.checked)
    const toggleCheckBox = (): void => {
      isChecked.value = !isChecked.value
      context.emit('on-change', isChecked.value)
    }

    return { isChecked, toggleCheckBox }
  }
})
</script>

```

##### Vue Adaptor
`@vue/composition-api`에서 사용할 기능만 추출하고 `export`한다.
```js
export {
  defineComponent,
  onMounted,
  onBeforeMount,
  ref,
  reactive,
  toRefs,
  computed,
  watch
} from '@vue/composition-api'
```
## API Reference
```html
<template>
  <div>
    <div>{{ count }} {{ plusOne }}</div>
    <div>{{ obj.foo }}</div>
    <div>{{ firstName }} {{ lastName }}</div>
    <div ref="templateRef"></div>
    <a @click.prevent="increment">INCREMENT</a>
    
    <my-button></my-button>
  </div>
</template>

<script>
import {
  defineComponent,
  ref,
  reactive,
  computed,
  toRefs,
  watch,
  onMounted,
  onBeforeMount,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted
} from '@vue/composition-api'
import MyButton from './my-button.vue'

export default defineComponent({
  components: {
    MyButton
  },
  props: {
    name: String
  },
  setup(props, context) {
    console.log('[LIFECYCLE] beforeCreate, created')
    console.log(`name is: ${props.name}`)

    const count = ref(0)
    const plusOne = computed(() => count.value + 1)
    const obj = reactive({ foo: 'bar ' })
    const state = reactive({
      firstName: 'Peter',
      lastName: 'Cho'
    })
    const templateRef = ref(null)

    const increment = () => {
      count.value++
      context.emit('on-change', count.value)
    }

    watch(() => {
      console.log(`count is ${count.value}`)
    })

    onBeforeMount(() => {
      console.log('[LIFECYCLE] beforeMount')
    })
    onMounted(() => {
      console.log('[LIFECYCLE] mounted')
    })
    onBeforeUpdate(() => {
      console.log('[LIFECYCLE] beforeUpdate')
    })
    onUpdated(() => {
      console.log('[LIFECYCLE] updated')
    })
    onBeforeUnmount(() => {
      console.log('[LIFECYCLE] beforeDestroy')
    })
    onUnmounted(() => {
      console.log('[LIFECYCLE] destroyed')
    })

    return {
      count,
      plusOne,
      obj,
      ...toRefs(state),
      templateRef,
      increment
    }
  }
})
</script>
```

## 마이그레이션
### Props
#### 런타임과 컴파일타임의 타입 일치
props를 required로 지정하지 않으면 타입도 옵셔널로 처리가 된다.
```ts
export default defineComponent({
  props: {
    id: String, // string | undefined
  }
})
```

필수 props라면 required를 사용하면 필수 타입으로 처리된다.

```ts
export default defineComponent({
  props: {
    id: {
      type: String,
      required: true
    }, // string
  }
})
```

#### Props의 any 타입 정의
TypeScript로 props 타입 정의 시, `any` 또는 `unknown`이 필요할 때가 있다. 이때 props의 런타임의 타입은 `null`로 작성해야 한다.
Vue 가이드에서는 `undefined`와 `null`로 처리 가능한 것으로 가이드한다. 하지만 TypeScript로 정의된 Declaration 파일에서는 `null`만 허용한다.

```ts
interface CommonSelectOption {
  value: unknown;
}

export default defineComponent({
  props: {
    value: null,
  },
```

### State
`ref`를 사용하면 값을 접근할 때 `.value`를 사용해야 한다. 권고 사항데로 `reactive`로 상태를 정의하고, `toRefs`를 통해 반환하는 게 간편하다.

##### AS IS
```ts
setup(props, context) {
  const inputText = ref('')
  const isFocused = ref(false)

  const onChange = (): void => {
    context.emit('on-change', inputText.value)
  }
  const onFocus = (): void => {
    isFocused.value = true
  }

  const onBlur = (): void => {
    isFocused.value = false
  }

  onBeforeMount(() => {
    inputText.value = props.value
  })

  return {
    inputText,
    isFocused,
    onChange,
    onFocus,
    onBlur
  }
}
```

##### TO BE
```ts
setup(props, context) {
  const state = reactive({
    inputText: '',
    isFocused: false
  })

  const onChange = (): void => {
    context.emit('on-change', state.inputText)
  }
  const onFocus = (): void => {
    state.isFocused = true
  }

  const onBlur = (): void => {
    state.isFocused = false
  }

  onBeforeMount(() => {
    state.inputText = props.value
  })

  return {
    ...toRefs(state),
    onChange,
    onFocus,
    onBlur
  }
}
```

### Vuex
Options API와 Class-based API에서는 `this` 컨텍스트가 있기 때문에 `this.$store`를 사용하여 Vuex를 사용한다. Composition API는 `this` 컨텍스트가 없기 때문에 `setup()` 함수에 두번째 인자로 전달되는 `context.root.$store`를 사용하여 Vuex를 사용해야 한다.

`useXXX` 형태로 사용하면 다른 코드들과 잘 어울릴거라 생각한다.
```js
import { SetupContext } from '@vue/composition-api'

export const useStore = ({
  root: {
    $store: { state, getters, commit, dispatch }
  }
}: SetupContext) => {
  return { state, getters, commit, dispatch }
}
```

컴포넌트에서는 이런 형태로 사용한다. `state`는 `reactive`와 `ref`를 통해 반응형 상태를 만들어도 mutation의 변경을 감지하지 못한다. 때문에 `state`를 직접 사용해야 한다.
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

#### state 이름 충돌
`reactive`로 정의한 반응형 상태와 `useStore`를 통해 사용하는 스토어 상태의 명을 `state`로 사용하고 있다. `setup()` 내부에 사용할 경우 충돌이 되기 때문에 이름 변경이 필요하다.

`store`를 네임스페이스로 가지는 것두 방법일듯하다.
```ts
setup(props, context) {
  const store = useStore(context)
}
```

#### state 접근
모듈 형태인 state는 사용 시 깊은 접근이 필요하다. `computed`를 사용하면 기존 옵션 API 처럼 사용가능하다.

```ts
setup(props, context) {
  const store = useStore(context)
  const state = reactive({
    auth: computed(() => store.state.authModule.auth)
  })
}
```

### Nuxt
- `fetch` 라이프 사이클이 없음
- `middleware`로 사용할 것을 권고함
  - https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-564035362

### Type
#### `reactive` 필드의 필드 타입 문제
> [#261](https://github.com/vuejs/composition-api/pull/261), [#614](https://github.com/vuejs/vue-next/pull/614) 버전 업그레이드 후 반영될 것으로 보임

reactive의 필드로 지정된 타입이 객체일 때, 필드의 내부에 필드가 존재하게 된다.
작성 의도는 해당 필드의 타입이지만 현재 타입 추론으론 `UnwrapRef`이 되버린다.

```ts
enum Axis {
  One = 1,
  Two = 2
}
interface MyInterfaceInInterface {
  x: Axis // number or 1 | 2는 동작함
  y: Axis
}

interface MyInterface {
  field: MyInterfaceInInterface
}

export default defineComponent({
  setup() {
    const myState = reactive<MyInterface>({
      field: {
        x: 1,
        y: 2
      }
    })
    const add = (x: number, y: number) => x + y
    add(myState.field.x, myState.field.y)
    // Type Error 
  }
})
```
```
Argument type UnwrapRef3 is not assignable to parameter type number
Type UnwrapRef3 is not assignable to type number
```
