---
title: Composition API RFC 번역
sidebar: auto
---

::: warning
Composition API 학습을 위해 [Composition API RFC](https://vue-composition-api-rfc.netlify.com/)을 번역한 포스트입니다. 공식 문서가 아님을 밝힙니다.
:::

## 요약(Summary)
> Introducing the Composition API: a set of additive, function-based APIs that allow flexible composition of component logic.

컴포지션 API 소개: 컴포넌트 로직을 유연하게 구성할 수 있는 부가적인 함수기반 API 세트입니다.

## 기초 예제(Basic example)
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

## [Motivation](https://vue-composition-api-rfc.netlify.com/#motivation)
> 번역중

## [Detailed Design](https://vue-composition-api-rfc.netlify.com/#detailed-design)
> 번역중

## 문제점(Drawbacks)

### Refs 도입의 오버헤드(Overhead of Introducing Refs)

> Ref is technically the only "new" concept introduced in this proposal. It is introduced in order to pass reactive values around as variables without relying on access to `this`. The drawbacks are:

Ref는 기술적으로 이 제안에서 소개된 유일한 새로운 개념입니다. `this`에 대한 엑세스에 의존하지 않고 반응값을 변수로 전달하기 위해 도입되었습니다. 단점은:

> 1. When using the Composition API, we will need to constantly distinguish refs from plain values and objects, increasing the mental burden when working with the API. <br><br> The mental burden can be greatly reduced by using a naming convention (e.g. suffixing all ref variables as xxxRef), or by using a type system. On the other hand, due to the improved flexibility in code organization, component logic will more often be isolated into small functions where the local context is simple and the overhead of refs are easily manageable.

1. 컴포지션 API를 사용할 때, API와 작업 할 때 정식적 부담을 증가 시켜서 참조값과 일반값 및 객체를 지속적으로 구분해야 합니다.
   <br><br>
   명명 규칙(예: 모든 참조 변수의 접미사를 `xxxRef`로 사용)을 사용하거나 타입 시스템을 사용하면 정식적 부담을 크게 줄일 수 있습니다. 반면에, 코드 구성의 유연성이 향상되기 때문에 컴포넌트 로직이 로컬 컨텍스트가 단순하고 `refs`의 오버헤드를 쉽게 관리 할 수 있는 작은 기능으로 분리하는 경우가 더 많습니다.

> 2. Reading and mutating refs are more verbose than working with plain values due to the need for `.value`. <br><br>
>    Some have suggested compile-time syntax sugar (similar to Svelte 3) to solve this. While it is technically feasible, we do not believe it would make sense as the default for Vue (as discussed in Comparison with Svelte). That said, this is technically feasible in userland as a Babel plugin.

2. `refs`를 읽고 변경하는 것은 `.value`가 필요하기 때문에 일반값으로 작업하는 것보다 더 장황합니다. <br><br>
   일부는 이것을 해결하기 위해 컴파일 타임 신텍스 슈거(Svelte 3와 유사)을 제안했습니다. 기술적으로 실현 가능하지만 Vue의 기본값으로 의미가 있다고 생각하지 않습니다(Svelte와 비교에서 논의 됨). 즉, 이것은 Userland에서 Babel 플러그인으로 기술적으로 가능합니다.

> We have discussed whether it is possible to completely avoid the Ref concept and use only reactive objects, however:

우리는 Ref 개념을 완전히 피하고 반응성 객체만 사용할 수 있는지 여부에 대해 논의했습니다. 그러나:

> - Computed getters can return primitive types, so a Ref-like container is unavoidable.
> - Composition functions expecting or returning only primitive types also need to wrap the value in an object just for reactivity's sake. It's very likely that users will end up inventing their own Ref like patterns (and causing ecosystem fragmentation) if there is not a standard implementation provided by the framework.

- 계산된 게터는 기본 유형을 반환 할 수 있으므로 Ref와 유사한 컨테이너는 피할수 없습니다.
- 프리미티브 타입만 예상하거나 반환하는 컴포지션 함수는 반응성을 위해 객체의 값을 랩핑해야 합니다. 프레임워크에서 제공하는 표준 구현이 없는 경우 사용자는 자신만의 Ref와 유사한 패턴(그리고 에코시스템 파편화)을 개발하게 될 가능성이 큽니다.

### Ref vs. Reactive

> Understandably, users may get confused regarding which to use between ref and reactive. First thing to know is that you will need to understand both to efficiently make use of the Composition API. Using one exclusively will most likely lead to esoteric workarounds or reinvented wheels.

당연히, 사용자는 `refs`과 `reactive` 사이에서 어느 것을 사용해야 할지 혼동 될 수 있습니다. 알아야 할 첫 번째 사항은 Composition API를 효율적으로 사용하려면 두 가지를 모두 이해해야한다는 것입니다. 하나를 독점적으로 사용하면 난해한 해결 방법이나 [바퀴의 재발명](https://ko.wikipedia.org/wiki/%EB%B0%94%ED%80%B4%EC%9D%98_%EC%9E%AC%EB%B0%9C%EB%AA%85) 될 가능성이 높습니다.

> The difference between using ref and reactive can be somewhat compared to how you would write standard JavaScript logic:

`refs`와 `reactive`의 차이점은 표준 JavaScript 로직을 작성하는 방법과 다소 비교 될 수 있습니다.

```js
// 첫번째 스타일: 별도의 변수
let x = 0
let y = 0

function updatePosition(e) {
  x = e.pageX
  y = e.pageY
}

// --- 비교해서 ---

// 두번째 스타일: 단일 객체
const pos = {
  x: 0,
  y: 0
}

function updatePosition(e) {
  pos.x = e.pageX
  pos.y = e.pageY
}
```

> - If using `ref`, we are largely translating style (1) to a more verbose equivalent using refs (in order to make the primitive values reactive).
> - Using `reactive` is nearly identical to style (2). We only need to create the object with `reactive` and that's it.

- `ref`를 사용한다면, 우리는 첫번째 스타일을 `refs`를 사용하여 보다 기본적으로 동등한 표현으로 변환하고 있습니다(원시값을 반응적으로 만들기 위해).
- 반응성을 사용하는 것은 두번째 스타일과 거의 동일합니다. 우리는 `reactive`로만 객체를 생성하면 됩니다.

> However, the problem with going `reactive`-only is that the consumer of a composition function must keep the reference to the returned object at all times in order to retain reactivity. The object cannot be destructured or spread:

하지만 `reactive`만 사용하는 문제는 컴포지션 함수의 사용측에서 반응성을 유지하기 위해 항상 반환된 객체에 대한 참조를 유지해야 한다는 것입니다. 객체를 해체하거나 펼칠 수 없습니다.

```js
// 컴포지션 함수
function useMousePosition() {
  const pos = reactive({
    x: 0,
    y: 0
  })

  // ...
  return pos
}

// 사용측 컴포넌트
export default {
  setup() {
    // 반응성 손실됨!
    const { x, y } = useMousePosition()
    return {
      x,
      y
    }

    // 반응성 손실됨!
    return {
      ...useMousePosition()
    }

    // 이것이 반응성을 유지하는 유일한 방법입니다.
    // pos를 있는 그대로 반환하고 x와 y를 pos.x와 pos.y로 탬플릿에서 참조해야 합니다.
    return {
      pos: useMousePosition()
    }
  }
}
```

> The `toRefs` API is provided to deal with this constraint - it converts each property on a reactive object to a corresponding ref:

이 제약 조건을 처리하기 위해 `toRefs` API가 제공됩니다. 반응형 객체의 각 속성을 해당 참조로 반환합니다.

```js
function useMousePosition() {
  const pos = reactive({
    x: 0,
    y: 0
  })

  // ...
  return toRefs(pos)
}

// x & y are now refs!
const { x, y } = useMousePosition()
```

> To sum up, there are two viable styles:

요약하면 두 가지 실행 가능한 스타일이 있습니다.

> 1. Use `ref` and `reactive` just like how you'd declare primitive type variables and object variables in normal JavaScript. It is recommended to use a type system with IDE support when using this style.

1. 일반적인 JavaScript에서 프리미티브 타입 변수와 객체 변수를 선언하는 방식과 마찬가지로 `ref`와 `reactive`를 사용하십시오. 이 스타일을 사용할 때는 IDE를 지원하는 타입 시스템을 사용하는 것이 좋습니다.

> 2. Use `reactive` whenever you can, and remember to use `toRefs` when returning reactive objects from composition functions. This reduces the mental overhead of refs but does not eliminate the need to be familiar with the concept.

2. 가능하면 `reactive`를 사용하고 컴포지션 함수에서 반응형 객체를 반환할 때 `toRefs`를 사용해야합니다. 이렇게 하면 `refs`의 정신적인 오버헤드가 줄어들지만 개념에 익숙해질 필요는 없습니다.

> At this stage, we believe it is too early to mandate a best practice on `ref` vs. `reactive`. We recommend you to go with the style that aligns with your mental model better from the two options above. We will be collecting real world user feedback and eventually provide more definitive guidance on this topic.

이 단계에서는 `refs`와 `reactive` 에 대한 모범 사례를 요구하기에는 너무 이르다고 생각합니다. 위의 두 가지 옵션 중에서 멘탈 모델에 더 잘 맞는 스타일을 사용하는 것이 좋습니다. 우리는 실제 사용자 피드백을 수집하고 결국이 주제에 대한 보다 명확한 지침을 제공 할 것입니다.

### 반환문의 정확성(Verbosity of the Return Statement)

>  Some users have raised concerns about the return statement in `setup()` being verbose and feeling like boilerplate.

일부 사용자들은 `setup()` 의 반환문이 장황하고 보일럿 플레이트와 같은 느낌을 주는 것 아니냐는 우려를 제기하고 있습니다.

>  We believe an explicit return statement is beneficial for maintainability. It gives us the ability to explicitly control what gets exposed to the template, and serves as the starting point when tracing where a template property is defined in a component.

우리는 명시적인 반환문이 유지보수에 도움이 된다고 생각합니다. 이를 통해 템플릿에 노출되는 대상을 명시적으로 제어할 수 있으며 구성 요소에서 템플릿 속성이 정의된 위치를 추적할 때 시작 시점으로 사용됩니다.

> There were suggestions to automatically expose variables declared in `setup()`, making the return statement optional. Again, we don't think this should be the default since it would go against the intuition of standard JavaScript. However, there are possible ways to make it less of a chore in userland:

`setup()` 에 선언된 변수를 자동으로 노출하여 반환문을 선택적으로 만들자는 제안이 있었습니다. 다시 말하지만, 이것이 표준 JavaScript의 직관에 어긋날 것이기 때문에 이것이 기본값이라고 생각하지 않습니다. 그러나 사용자 영역에서 덜 번거롭게 만드는 방법이 있습니다.

> - IDE extension that automatically generates the return statement based on variables declared in `setup()`
> - Babel plugin that implicitly generates and inserts the return statement

- `setup()` 에 선언된 변수를 기반으로 반환문을 자동으로 생성하는 IDE 익스텐션
- 암시적으로 반환문을 생성하고 삽입하는 Babel 플러그인

### 유연성이 높을수록 더 많은 훈련이 필요합니다(More Flexibility Requires More Discipline)

> Many users have pointed out that while the Composition API provides more flexibility in code organization, it also requires more discipline from the developer to "do it right". Some worry that the API will lead to spaghetti code in inexperienced hands. In other words, while the Composition API raises the upper bound of code quality, it also lowers the lower bound.

많은 사용자들은 Composition API가 코드 구성에 더 많은 유연성을 제공하지만 개발자가 "올바로" 수행하는 데 더 많은 훈련이 필요하다고 지적했습니다. 일부는 API가 미숙한 손에 스파게티 코드로 이어질까 걱정합니다. 즉, Composition API는 코드 품질의 상한선을 높이는 동시에 하한선을 낮추기도 합니다.

>  We agree with that to a certain extent. However, we believe that:

우리는 어느 정보 동의합니다. 그러나 우리는 다음을 믿습니다:

> 1. The gain in the upper bound far outweighs the loss in the lower bound.
> 2. We can effectively address the code organization problem with proper documentation and community guidance.

1. 상한선의 이득이 하한선의 손실보다 큽니다.
2. 적절한 문서 및 커뮤니티 지침을 통해 코드 구성 문제를 효과적으로 해결할 수 있습니다.

> Some users used Angular 1 controllers as examples of how the design could lead to poorly written code. The biggest difference between the Composition API and Angular 1 controllers is that it doesn't rely on a shared scope context. This makes it significantly easier to split out logic into separate functions, which is the core mechanism of JavaScript code organization.

일부 사용자는 [Angular 1 컨트롤러](https://docs.angularjs.org/guide/controller)를 사용하여 디자인에서 코드 작성이 잘못되는 방법을 예로 들었습니다. Composition API와 Angular 1 컨트롤러의 가장 큰 차이점은 공유 범위 컨텍스트에 의존하지 않는다는 것입니다. 따라서 JavaScript 코드 구성의 핵심 매커니즘인 논리를 별도의 함수로 훨씬 쉽게 분리 할 수 있습니다.

>  Any JavaScript program starts with an entry file (think of it as the `setup()` for a program). We organize the program by splitting it into functions and modules based on logical concerns. The Composition API enables us to do the same for Vue component code. In other words, skills in writing well-organized JavaScript code translates directly into skills of writing well-organized Vue code when using the Composition API.

모든 JavaScript 프로그램은 엔트리 파일로 시작합니다(프로그램의 경우 `setup()` 이라고 생각하십시오). 논리적인 관심사에 따라 프로그램을 기능과 모듈로 분할하여 프로그램을 구성합니다. Composition API를 사용하면 Vue 구성 요소 코드에 대해서도 동일한 작업을 수행 할 수 있습니다. 다시 말해, 잘 구성된 JavaScript 코드 작성 기술은 Composition API를 사용할 때 잘 구성된 Vue 코드 작성 기술로 직접 변환됩니다.

## [Adoption strategy](https://vue-composition-api-rfc.netlify.com/#adoption-strategy)
> 번역중

## [Appendix](https://vue-composition-api-rfc.netlify.com/#appendix)
> 번역중
