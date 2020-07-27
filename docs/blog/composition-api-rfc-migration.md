---
title: Composition API 경험 정리
sidebar: auto
---
# Composition API 경험 정리
> 초안작성일: 2020.03.02

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

### 의존성
`@vue/composition-api`가 변경 되었을 때 이를 사용하는 개발자는 API 변경/삭제에 대한 권한이 없다.
그래서 업데이트가 되는 순간 프로젝트에 직접적인 영향을 전파하게 된다. 이런 부분을 나는 `외부 의존성`이라고 부른다.

외부 의존성은 직접적으로 조작할 수 있는 권한이 없음으로 의존성이 강하다.
이를 약하게 만드는 가장 쉬운 방법은 중간에 무언가를 껴넣는 것이다.

#### 해결방안
외부 의존성을 최소화 하면서 Composition API를 안전하게 적용하기 위한 대안으로 Wrapper 패턴을 사용할 수 있다.

##### Vue Wrapper
다음과 같이 `@vue/composition-api`에서 사용할 기능만 추출하고 `export`한다.
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

##### Vue Wrapper Consumer
```html
<template>
</template>

<script lang="ts">
import { defineComponent, ref } from '~/vue-wrapper'

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

일반적으로 `Custom Component => Vue` 이런 형태로 라이브러리를 직접 사용하게 된다.
만약에 100개 이상의 `Custom Component`가 있다면 `Vue` 업그레이드 시 모든 `Custom Component`에 대한 **수동 변경**이 필요하다.

Wrapper 패턴을 적용하면 앞서 언급한 형태는 `Custom Component => Vue Wrapper => Vue` 이렇게 변경된다.
그래서 `Vue`에 변경이 발생했을 때 `Custom Component`가 아닌 `Vue Wrapper`만 수정하면 된다.

특히 Wrapper 패턴를 적용했을 때, `Vue`에서 API의 이름이 변경 되었을 때 IDE의 Refactor 기능을 통해 Function 이름을 **자동으로 변경** 할 수 있기 때문에 매우 편리하다.

## API Reference

Composition API는 다음과 같이 사용할 수 있다.

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

### 플러그인
Vue Options API에서 플러그인 사용 시, `this.$router` 형태로 사용했다. Composition API에서는 `setup(props, context)`의 두번째 인자로 전달되는 `context`를 사용한다. `context.root.$router` 형태로 플러그인을 사용할 수 있다.

## 마이그레이션
### Props
#### 런타임과 컴파일타임의 타입 일치
props를 required로 지정하지 않으면 [Optional](https://www.typescriptlang.org/docs/handbook/functions.html#optional-and-default-parameters)로 처리된다.
```ts
export default defineComponent({
  props: {
    id: String, // string | undefined
  }
})
```

required를 사용하면 필수 타입으로 처리된다.

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
- **(컴파일 타임)** TypeScript로 props 타입 정의 시, `any` 또는 `unknown`이 필요할 때가 있다. 
- **(런타임)** 이때 props의 타입은 `null`로 작성해야 한다. 

::: tip 
Composition API 공식 문서에는 `undefined`와 `null`로 처리 가능하다고 가이드하는데,
TypeScript로 정의된 Declaration 파일에서는 `null`만 허용한다.
:::

```ts
interface CommonSelectOption {
  value: unknown;
}

export default defineComponent({
  props: {
    value: null,
  },
  // ... 생략
})
```

### State
#### `ref`와 `reactive`
`ref`를 사용할 경우 값에 접근할 때 `.value`를 사용해야 한다.
그런데 나는 ref를 사용했을 때 불편함을 느꼈다.

그래서 특별한 경우가 아닌 이상 `ref` 대신에 `reactive`로 상태를 정의하고, `reactive`로 정의한 변수를 return할 때는`toRefs`를 사용하는 것이 경험적으로 좋았다.

##### AS IS (ref)
```ts
setup(props, context) {
  const inputText = ref('')
  const isFocused = ref(false)

  const onChange = (): void => {
    context.emit('on-change', inputText.value)
  }
  const onFocus = (): void => {
    isFocused.value = true // value에 할당
  }

  const onBlur = (): void => {
    isFocused.value = false // value에 할당
  }

  onBeforeMount(() => {
    inputText.value = props.value // value에 할당
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

##### TO BE (reactive)
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
    state.isFocused = true // state의 property를 통해 값을 할당한다.
  }

  const onBlur = (): void => {
    state.isFocused = false // state의 property에 값을 할당한다.
  }

  onBeforeMount(() => {
    state.inputText = props.value // state의 property에 값을 할당한다.
  })

  return {
    ...toRefs(state), // toRefs를 사용하여 ref로 변환한다.
    onChange,
    onFocus,
    onBlur
  }
}
```

#### 타입 정의
나는 `reactive`에 [Generic](https://www.typescriptlang.org/docs/handbook/generics.html)을 사용하는 것이 깔끔하다고 느꼈다.
 
```ts
interface Pagination {
  currentPage: number
  totalPage: number
}
const state = reactive<Pagination>({
  currentPage: 1,
  totalPage: 0
})
```

### TemplateRef
`<template>`내에서 `<div ref="box">`와 같이 `TemplateRef`를 사용할 때는 항상 `ref`로 정의한 `state`를 사용해야 한다.
`reactive`로 정의한 `state`는 정상적으로 참조되지 않는다.

### Vuex
내용이 많이 [Vuex 적용 경험 정리](/blog/vuex-in-composition-api/)에 분리함.

### Nuxt
> [v2.12.0](https://github.com/nuxt/nuxt.js/pull/6999)부터 새로운 `fetch` 인터페이스가 적용된다.
> `fetch(context){}` 형태였다면 `fetch(){}` 형태로 바뀐다. `middleware`를 사용할 것을 권장하며, `this`를 사용하도록 바뀐다.

#### composition api에서 `fetch` 관련 라이프 사이클이 없음
- `middleware`로 사용할 것을 [권장](https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-564035362)함

#### `fetch`, `layout`, `middleware` 타입 미지원
- `defineComponent` 함수에 `fetch`, `layout`, `middleware` 미지원
- 타입 확장으로 해결할 것을 [권장](https://github.com/vuejs/composition-api/issues/63#issuecomment-523429896)함

##### pages/index.ts
- `fetch`는 항상 `Promise<void>` 타입으로 반환해야 함
```ts
export default defineComponent({
  fetch(context): Promise<void> {
  }
})
```

##### types/vue-shim.d.ts
```ts
import Vue from 'vue'
import { Context, Middleware } from '@nuxt/types'

declare module '*.vue' {
  export default Vue
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    fetch?(ctx: Context): Promise<void> | void
    layout?: string | ((ctx: Context) => string)
    middleware?: Middleware | Middleware[]
  }
}
```

### Type
#### `reactive` 필드의 필드 타입 문제
> [#261](https://github.com/vuejs/composition-api/pull/261),
> [#614](https://github.com/vuejs/vue-next/pull/614) 버전 업그레이드 후 반영될 것으로 보임

reactive의 필드로 지정된 타입이 객체일 때, 필드의 내부에 필드가 존재하게 된다.
작성 의도는 해당 필드의 타입이지만 현재 타입 추론으론 `UnwrapRef`이 된다.

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

#### reactive 타입
`reactive`에 선언하는 타입은 의도한 대로 동작하지 않는 케이스가 존재한다.
예를 들면 셀렉트 박스에서 아이템을 선택하고, BackEnd API로 요청하는 사례이다.

##### /types/my-component.ts
```ts
interface Options {
  id: number
  value: string
}
interface State {
  options: Options[]
  selected: Options | null
}
interface RequestBody {
  selectedId: number
}
```

##### /components/my-component.ts
```ts
const state = reactive<State>({
  options: [],
  selected: null
})

const changeSelectedOption = (option) => {
  state.selected = option
}

const onSave = () => {
  if (state.selected === null) {
    return
  }
  const body: RequestBody = {
    selectedId: state.selected.id
  }
}
```
보기에는 정상적인 코드로 보이지만 `state.selected.id`에서 `TS2339: Property 'id' does not exist on type 'string'.` 에러가 발생한다.

의도한 대로 실행되게 하기 위해선 `Typecasting(as Type)`을 해야 한다.

```ts
// Not Cool
const state = reactive<State>({
  options: [],
  selected: null
})

// Cool
const state = reactive({
  options: [],
  selected: null
}) as State
```

## 컨벤션
프로젝트 개발중 개선해보고 싶었던 부분 정리함.

### 컴포넌트 Input/Output 정의
#### 용어정의
- Input: 컴포넌트 사용측에서 대상 컴포넌트에 주입할 값
- Output: 대상 컴포넌트에서 컴포넌트 사용측에 전달할 값

Vue 컴포넌트는 Input 역할을 하는 Props는 설정 레벨로 정의한다.
하지만 Emit는 설정 레벨로 정의되지 않고, 필요할 때 함수를 호출하는 형태로 구성된다.
컴포넌트의 스팩을 쉽게 파악하기 위해서는 해당 기능이 필요하다고 생각한다.

Composition API의 경우 최상단에 추가되면 쉽게 파악 가능할거라 생각한다.
```ts
setup (props: Props, context) {
  const emit = {
    change: state => context.emit('change', {...state.surveyForm}),
    changeImage: file => context.emit('change-image', file),
  };
```

### 컴포넌트 함수별 역할 분리
컴포넌트에 정의되는 함수의 역할은 상태변경, 이벤트 리스너, 헬퍼 함수가 있다.
각 함수는 같은 레벨로 정의하기 때문에 시각적 구분이 잘안된다고 생각한다.

또한 `setup` 함수 내부에 함수 추가 후 `<template>`에 사용하려면 할당 반환값에 추가가 필요하다.
객체에 담아 전달하면 번거로움과 반환값을 간소화 가능하다고 생각한다.

결론적으로 Vuex의 네이밍을 따라서 상태변경은 `mutation`,
이벤트 리스너는 `action`으로 정의되면 어떨가 생각해봤다.

```ts
// AS IS
setup() {
  const state = {}
  const onChange = () => {}
  const onClick = () => {}
  return {state, onChange, onClick}
}

// TO BE
setup() {
  const state = {}
  const actions = {
    onChange: () => {},
    onClick: () => {}
  }
  return {state, actions}
}
```
