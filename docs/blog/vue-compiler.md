---
title: Vue Compiler
sidebar: auto
---

## Vue3
### Virtual DOM Rewrite

#### Template
```html
<Comp></Comp>
<div>
  <span></span>
</div>
```

#### Compiler output
```js
render() {
  const Comp = resolveComponent('Comp', this)
  return createFragment([
    createComponentVNode(Comp, null, null, 0),
    createElementVNode('div', null, [
      createElementVNode('div', null, null, 0) 
    ], 2),
  ], 8)
}
```

### Optimized Slots Generation

#### Template
```html
<Comp>
  <div>{{ hello }}</div>
</Comp>
```

#### Compiler output
```js
render() {
  return h(Comp, null, {
    default: () => [h('div', this.hello)]
  }, 16)
}
```

### Static Tree Hoisting

#### Template
```html
<div>
  <span class="foo">
    Static
  </span>
  <span>
    {{ dynamic }}
  </span>
</div>
```

#### Compiler output
```js
const __static1 = h('span', {
  class: 'foo'
}, 'Static')

render() {
  return h('div', [
    __static1,
    h('span', this.dynamic)
  ])
}
```


### Static Props Hoisting

#### Template
```html
<div id="foo" class="bar">
  {{ text }}
</div>
```

#### Compiler output
```js
const __props1 = {
  id: 'foo',
  class: 'bar'
}

render() {
  return h('div', __props1, this.text)
}
```

## Vue2
Vue는 [Vue.compile](https://vuejs.org/v2/guide/render-function.html) API를 사용해서 `<template>`를 Virtual DOM으로 만든다.
각 요소별로 어떻게 변경하는 지 정리해봤다.

### Template Binding
#### Input
```html
<h1>{{blogTitle}}</h1>
```
#### Output
```js
render: function (createElement) {
  return createElement('h1', this.blogTitle)
}
```

### `createElement`
```js
// @returns {VNode}
createElement(
  // {String | Object | Function}
  // An HTML tag name, component options, or async
  // function resolving to one of these. Required.
  'div',

  // {Object}
  // A data object corresponding to the attributes
  // you would use in a template. Optional.
  {
    // (see details in the next section below)
  },

  // {String | Array}
  // Children VNodes, built using `createElement()`,
  // or using strings to get 'text VNodes'. Optional.
  [
    'Some text comes first.',
    createElement('h1', 'A headline'),
    createElement(MyComponent, {
      props: {
        someProp: 'foobar'
      }
    })
  ]
)
```
#### Data Object
```js
{
  // Same API as `v-bind:class`, accepting either
  // a string, object, or array of strings and objects.
  class: {
    foo: true,
    bar: false
  },
  // Same API as `v-bind:style`, accepting either
  // a string, object, or array of objects.
  style: {
    color: 'red',
    fontSize: '14px'
  },
  // Normal HTML attributes
  attrs: {
    id: 'foo'
  },
  // Component props
  props: {
    myProp: 'bar'
  },
  // DOM properties
  domProps: {
    innerHTML: 'baz'
  },
  // Event handlers are nested under `on`, though
  // modifiers such as in `v-on:keyup.enter` are not
  // supported. You'll have to manually check the
  // keyCode in the handler instead.
  on: {
    click: this.clickHandler
  },
  // For components only. Allows you to listen to
  // native events, rather than events emitted from
  // the component using `vm.$emit`.
  nativeOn: {
    click: this.nativeClickHandler
  },
  // Custom directives. Note that the `binding`'s
  // `oldValue` cannot be set, as Vue keeps track
  // of it for you.
  directives: [
    {
      name: 'my-custom-directive',
      value: '2',
      expression: '1 + 1',
      arg: 'foo',
      modifiers: {
        bar: true
      }
    }
  ],
  // Scoped slots in the form of
  // { name: props => VNode | Array<VNode> }
  scopedSlots: {
    default: props => createElement('span', props.text)
  },
  // The name of the slot, if this component is the
  // child of another component
  slot: 'name-of-slot',
  // Other special top-level properties
  key: 'myKey',
  ref: 'myRef',
  // If you are applying the same ref name to multiple
  // elements in the render function. This will make `$refs.myRef` become an
  // array
  refInFor: true
}
```

### `v-if`, `v-for`
#### Input
```html
<ul v-if="items.length">
  <li v-for="item in items">{{ item.name }}</li>
</ul>
<p v-else>No items found.</p>
```

#### Output
```js
props: ['items'],
render: function (createElement) {
  if (this.items.length) {
    return createElement('ul', this.items.map(function (item) {
      return createElement('li', item.name)
    }))
  } else {
    return createElement('p', 'No items found.')
  }
}
```

### `v-model`
#### Input
```html
<input v-model="text">
```

#### Output
```js
props: ['value'],
render: function (createElement) {
  var self = this
  return createElement('input', {
    domProps: {
      value: self.value
    },
    on: {
      input: function (event) {
        self.$emit('input', event.target.value)
      }
    }
  })
}
```
