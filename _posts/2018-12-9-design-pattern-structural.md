---
layout: post
title:  "GoF 디자인 패턴 | 구조패턴"
date:   2018-12-09
description: GoF 디자인 패턴 중 구조패턴을 정리합니다.
tags: [pattern]
comments: true
---

### [프록시(Proxy)](https://github.com/ChoDragon9/design-patterns/blob/master/structural/proxy.js)
다른 객체에 대한 접근을 제어하기 위한 대리자(Surrogate) 또는 자리채움자 역할을 하는 객체를 둡니다.

![]({{ '/assets/img/design-pattern/38173748-42e1e622-35fe-11e8-926e-86b5e7511c40.jpg' | prepend: site.baseurl }})

프록시 패턴은 단순한 포인터보다는 조금 더 다방면에 활용할 수 있거나 정교한 객체 참조가 필요한 때 적용할 수 있습니다.
- 원격지 프록시 : 서로 다른 주소 공간에 존재하는 객체를 가리키는 대표 객체로, 로컬 환경에 위치합니다.
- 가상 프록시 : 요청이 있을 때만 필요한 고비용 객체를 생성합니다.
- 보호용 프록시 : 원래 객체에 대한 실제 접근을 제어합니다. 이는 객체별로 접근 제어 권한이 다를 때 유용하게 사용할 수 있습니다.
- 스마트 참조자 : 원시 포인터의 대체용 객체로, 실제 객체에 접근이 일어날 때 추가적인 행동을 수행합니다. 전형적인 사용예는 다음과 같습니다.
  1) 실제 객체에 대한 참조 횟수를 저장하다가 더는 참조가 없을 때 해당 객체를 자동으로 없앱니다.
  2) 맨 처음 참조되는 시점에 영속적 저장소의 객체를 메모리로 옮깁니다.
  3) 실제 객체에 접근하기 전에, 다른 객체가 그것을 변경하지 못하도록 실제 객체에 대해 잠금(lock)을 겁니다.
  
```js
class GeoCoder {
  constructor () {}
  getLatLng (address) {
    switch (address) {
      case "Amsterdam" :
        return "52.3700° N, 4.8900° E"
      case "London" :
        return "51.5171° N, 0.1062° W"
      case "Paris" :
        return "48.8742° N, 2.3470° E"
      case "Berlin" :
        return "52.5233° N, 13.4127° E"
      default :
        return ""
    }
  }
 }
  
 class GeoProxy {
  constructor () {
    this.geocoder = new GeoCoder()
    this.geocache = {}
  }
  getLatLng (address) {
    if (!this.geocache[address]) {
        this.geocache[address] = this.geocoder.getLatLng(address);
    }
    console.log(address + ": " + this.geocache[address]);
    return this.geocache[address];
  }
  getCount () {
    let count = 0;
    for (let code in this.geocache) {
      count++;
    }
    return count;
  }
 }
```
```js
const geo = new GeoProxy();

// geolocation requests

geo.getLatLng("Paris");
geo.getLatLng("London");
geo.getLatLng("London");
geo.getLatLng("London");
geo.getLatLng("London");
geo.getLatLng("Amsterdam");
geo.getLatLng("Amsterdam");
geo.getLatLng("Amsterdam");
geo.getLatLng("Amsterdam");
geo.getLatLng("London");
geo.getLatLng("London");

console.log("Cache size: " + geo.getCount());
```
  
### [퍼사드(Facade)](https://github.com/ChoDragon9/design-patterns/blob/master/structural/facade.js)
한 서브시스템 내의 인터페이스 집합에 대한 획일화된 하나의 인터페이스를 제공하는 패턴으로, 서브시스템을 사용하기 쉽도록 상위 수준의 인터페이스를 정의합니다.

![]({{ '/assets/img/design-pattern/38358497-5a135164-3900-11e8-9b3e-78a23772642d.jpg' | prepend: site.baseurl }})

- 복잡한 서브시스템에 대한 단순한 인터페이스를 제공이 필요할 때, 시스템 범위가 확장되면, 또한 구체적으로 설계되면 서브시스템은 계속 복잡해집니다.
또한 패턴을 적용하면 확장성을 고려하여 설계하기 때문에, 작은 클래스가 만들어지게 됩니다. 이런 과정은 서브시스템을 재사용 가능한 것으로 만들어주고,
재정의할 수 있는 단위가 되도록 해 주기도 하지만, 실제 이런 상세한 재설계나 정제의 내용까지 파악할 필요가 없는 개발자들에게 복잡해진 각각의 클래스들을
다 이해하면서 서브시스템을 사용하기란 어려운 일입니다. 이럴 때 퍼사드 패턴은 서브시스템에 대한 단순하면서도 기본적인 인터페이스를 제공함으로써
대부분의 개발자들에게 적합한 클래스 형태를 제공합니다.
- 추상 개념에 대한 구현 클래스와 사용자 사이에 너무 많은 종속성이 존재할 때, 퍼사드의 사용을 통해 사용자와 다른 서브시스템 간의 결합도를 줄일 수 있습니다.
즉, 서브시스템에 정의된 모든 인터페이스가 공개되면 빈번한 메서드 호출이 있을 수 있으나, 이런 호출은 단순한 형태로 통합하여 제공하고 나머지 부분은 내부적으로
처리함으로써 사용자와 서브시스템 사이의 호출 횟수는 실질적으로 감소하게 되는 효과를 갖습니다.
- 서브시스템을 계층화시킬 때, 퍼사드 패턴을 사용하여 각 서브시스템의 계층에 대한 접근점을 제공합니다. 서브시스템이 다른 서브시스템에 종속적이라 하더라도,
각자가 제공하는 퍼사드를 통해서만 대화를 진행하게 함으로써 서브시스템 간의 종속성을 줄일 수 있습니다. 이로써 서브시스템 내부 설계의 변경이
다른 서브시스템에 독립적으로 자유롭게 될 수 있는 것입니다.

```js
class Mortgage {
  constructor (name) {
    this.name = name
  }
  applyFor (amount) {
    let result = "approved"
    if (!new Bank().verify(this.name, amount)) {
      result = "denied"
    } else if (!new Credit().get(this.name)) {
      result = "denied"
    } else if (!new Background().check(this.name)) {
      result = "denied"
    }
    return `${this.name} has been ${result} for a ${amount} mortgage`
  }
}

class Bank {
  constructor () {}
  verify (name, amount) {
    // complex logic ...
    return true
  }
}

class Credit {
  constructor () {}
  get (name) {
    // complex logic ...
    return true
  }
}

class Background {
  constructor () {}
  check (name) {
    // complex logic ...
    return true
  }
}
```
```js
const mortgage = new Mortgage("Joan Templeton")
const result = mortgage.applyFor("$100,000")

console.log(result)
```

### [장식자(Decorator)](https://github.com/ChoDragon9/design-patterns/blob/master/structural/decorator.js)
객체에 동적으로 새로운 책임을 추가할 수 있게 합니다. 기능을 추가하려면, 서브클래스를 생성하는 것보다 융통성 있는 방법을 제공합니다.(Wrapper)

![]({{ '/assets/img/design-pattern/38482088-ccf5a1ea-3c08-11e8-9f13-9f9406b58480.jpg' | prepend: site.baseurl }})

- 동적으로 또한 투명하게, 다시 말해 다른 객체에 영향을 주지 않고 개개의 객체를 새로운 책임을 추가하기 위해 사용합니다.
- 제거될 수 있는 책임에 대해 사용합니다.
- 실제 상속으로 서브클래스를 계속 만드는 방법이 실질적이지 못할 때 사용합니다. 너무 많은 수의 독립된 확장이 가능할 때 모든 조합을 지원하지 위해
이를 상속으로 해결하면 클래스 수가 폭발적으로 많아지게 됩니다. 아니면, 클래스 정의가 숨겨지든가, 그렇지 않더라도 서브클래싱을 할 수 없게 됩니다.

```js
class User {
  constructor (name) {
    this.name = name
  }
  say () {
    console.log("User: " + this.name)
  }
}

class DecoratedUser {
  constructor (user, street, city) {
    this.user = user
    this.name = user.name  // ensures interface stays the same
    this.street = street
    this.city = city
  }
  say () {
    console.log(`Decorated User: ${this.name}, ${this.street}, ${this.city}`)
  }
}
```
```js
const user = new User("Kelly")
user.say()

const decorated = new DecoratedUser(user, "Broadway", "New York")
decorated.say()
```

### [복합체(Composite)](https://github.com/ChoDragon9/design-patterns/blob/master/structural/composite.js)
부분과 전체의 계층을 표현하기 위해 객체들을 모아 트리 구조로 구성합니다. 사용자로 하여금 개별 객체와 복합 객체를 모두 동일하게 다룰 수 있도록 하는 패턴입니다.
기본 클래스와 이들의 컨테이너를 모두 표현할 수 있는 하나의 추상화 클래스를 정의하는 것입니다.

![]({{ '/assets/img/design-pattern/38484267-fa18f3b8-3c10-11e8-8375-f4dbb24b024f.jpg' | prepend: site.baseurl }})

- 부분~전체의 객체 계통을 표현하고 싶을 때
- 사용자가 객체의 합성으로 생긴 복합 객체와 개개의 객체 사이의 차이를 알지 않고도 자기 일을 할 수 있도록 만들고 싶을 때, 사용자는 복합 구조의 모든 객체를 똑같이 취급하게 됩니다.

```js
class Node {
  constructor (name) {
    this.children = []
    this.name = name 
  }
  add (child) {
    this.children.push(child)
  }
  remove (child) {
    const length = this.children.length
    for (let i = 0; i < length; i++) {
      if (this.children[i] === child) {
        this.children.splice(i, 1)
        return
      }
    }
  }
  getChild (i) {
    return this.children[i]
  }
  hasChildren () {
    return this.children.length > 0
  }
}


// recursively traverse a (sub)tree

function traverse(indent, node) {
  console.log(`${'--'.repeat(indent)} ${node.name}`)
  indent++

  for (let i = 0, len = node.children.length; i < len; i++) {
    traverse(indent, node.getChild(i))
  }
}
```
```js
const tree = new Node('root')

const left = new Node('left')
const leftleft = new Node('leftleft')
const leftright = new Node('leftright')

const right = new Node('right')
const rightleft = new Node('rightleft')
const rightright = new Node('rightright')

tree.add(left)
tree.add(right)
tree.remove(right)  // note: remove
tree.add(right)

left.add(leftleft)
left.add(leftright)

right.add(rightleft)
right.add(rightright)

traverse(0, tree)
```

### [가교(Bridge)](https://github.com/ChoDragon9/design-patterns/blob/master/structural/bridge.js)
구현에서 추상을 분리하여, 이들이 독립적으로 다양성을 가질 수 있도록 합니다.(Handle/Body)

![]({{ '/assets/img/design-pattern/38486883-4a89f43e-3c19-11e8-9025-ec560062fe4e.jpg' | prepend: site.baseurl }})

- 추상적인 개념과 이에 대한 구현 사이의 지속적인 종속 관계를 피하고 싶을 때, 이를테면 런타임에 구현 방법을 선택하거나 구현 내용을 변경하고 싶을 때가 여기에 해당합니다.
- 추상적 개념과 구현 모두가 독립적으로 서브클래싱을 통해 확장되어야 할 때. 이때, 가교 패턴은 개발자가 구현을 또 다른 추상적 개념과 연결할 수 있게 할 뿐 아니라, 각각을 독립적으로 확장가능하게 합니다.

```js
// input devices

class Gestures {
  constructor (output) {
    this.output = output 
  }
  tap () { this.output.click() }
  swipe () { this.output.move() }
  pan () { this.output.drag() }
  pinch () { this.output.zoom() }
}

class Mouse {
  constructor (output) {
    this.output = output
  }
  click () { this.output.click() }
  move () { this.output.move() }
  down () { this.output.drag() }
  wheel () { this.output.zoom() }
}

// output devices

class Screen {
  click () { console.log("Screen select") }
  move () { console.log("Screen move") }
  drag () { console.log("Screen drag") }
  zoom () { console.log("Screen zoom in") }
}

class Audio {
  click () { console.log("Sound oink") }
  move () { console.log("Sound waves") }
  drag () { console.log("Sound screetch") }
  zoom () { console.log("Sound volume up") }
}
```
```js
const screen = new Screen()
const audio = new Audio()

const hand = new Gestures(screen)
const mouse = new Mouse(audio)

hand.tap()
hand.swipe()
hand.pinch()
hand.pan()

mouse.click()
mouse.move()
mouse.wheel()
mouse.down()
```

### [적응자(Adapter)](https://github.com/ChoDragon9/design-patterns/blob/master/structural/adapter.js)
클래스의 인터페이스를 사용자가 기대하는 인터페이스 형태로 적응시킵니다. 서로 일치하지 않는 인터페이스를 갖는 클래스들을 함께 동작시킵니다.(Wrapper)

![]({{ '/assets/img/design-pattern/38487095-067ecd04-3c1a-11e8-8049-bc8b8fe88fe9.jpg' | prepend: site.baseurl }})

- 기존 클래스를 사용하고 싶은 데 인터페이스가 맞지 않을 때
- 아직 예측하지 못한 클래스나 실재 관련되지 않는 클래스들이 기존 클래스를 재사용하고자 하지만, 이미 정의된 재사용 가능할 클래스가 지금 요청하는 인터페이스를
꼭 정의하고 있지 않을 때. 다시 말해, 이미 만든 것을 재사용하고자 하나 이 재사용 가능한 라이브러리를 수정할 수 없을 때
- [객체 적응자] 이미 존재하는 여러 개의 서브 클래스를 사용해야 하는 데, 이 서브클래스들의 상속을 통해서 이들의 인터페이스를 다 개조 한다는 것이 현실성이 없을 때,
객체 적응자를 써서 부모 클래스의 인터페이스를 변경하는 것이 더 바람직함

```js
// old interface
class Shipping {
  request (zipStart, zipEnd, weight) {
    // ...
    return '$49.75'
  }
}

// new interface
class AdvancedShipping {
  login (credentials) { /* ... */ }
  setStart (start) { /* ... */ }
  setDestination (destination) { /* ... */ }
  calculate (weight) { return '$39.50' }
}

// adapter interface
class ShippingAdapter {
  constructor (credentials) {
    this.shipping = new AdvancedShipping()
    this.shipping.login(credentials)
  }
  request (zipStart, zipEnd, weight) {
    this.shipping.setStart(zipStart)
    this.shipping.setDestination(zipEnd)
    return this.shipping.calculate(weight)
  }
}
```
```js
const shipping = new Shipping()
const credentials = {token: '30a8-6ee1'}
const adapter = new ShippingAdapter(credentials)

// original shipping object and interface

const oldCost = shipping.request('78701', '10010', '2 lbs')
console.log(`Old cost: ${oldCost}`)

// new shipping object with adapted interface

const newCost = adapter.request('78701', '10010', '2 lbs')
console.log(`New cost: ${newCost}`)
```

### [플라이웨이트(Flyweight)](https://github.com/ChoDragon9/design-patterns/blob/master/structural/flyweight.js)
많은 수의 객체를 효율적으로 제공하기 위해 공유개념을 이용한다.

![]({{ '/assets/img/design-pattern/38487672-f008340a-3c1b-11e8-90ce-76d11056dae6.jpg' | prepend: site.baseurl }})

- 어플리케이션이 정말 많은 객체를 사용할 때
- 객체 개수가 많아서 저장비용이 높을 때
- 대부분의 객체의 상태가 부대적인 것일 때
- 부대적인 상태가 제거됐을 때에는 적은 수의 공유 객체로 많은 수의 객체를 대체할 수 있을 때
- 어플리케이션이 객체의 identity에 의존적이지 않을 때

```js
class Flyweight {
  constructor (make, model, processor) {
    this.make = make
    this.model = model
    this.processor = processor 
  }
}

const FlyWeightFactory = {
  flyweights: {},
  get (make, model, processor) {
    const objId = `${make} ${model} ${processor}`
    if (!this.flyweights[objId]) {
      this.flyweights[objId] = new Flyweight(make, model, processor)
    }
    return this.flyweights[objId]
  },
  getCount () {
    return Object.keys(this.flyweights).length
  }
}

class ComputerCollection {
  constructor () {
    this.computers = {}
    this.count = 0 
  }
  add (make, model, processor, memory, tag) {
    this.computers[tag] = new Computer(make, model, processor, memory, tag)
    this.count++
  }
  get (tag) {
    return this.computers[tag]
  }
  getCount () {
    return this.count
  }
}

class Computer {
  constructor (make, model, processor, memory, tag) {
    this.flyweight = FlyWeightFactory.get(make, model, processor)
    this.memory = memory
    this.tag = tag
  }
  getMake () {
    return this.flyweight.make
  }
  // ...
}
```
```js
const computers = new ComputerCollection()

computers.add("Dell", "Studio XPS", "Intel", "5G", "Y755P")
computers.add("Dell", "Studio XPS", "Intel", "6G", "X997T")
computers.add("Dell", "Studio XPS", "Intel", "2G", "U8U80")
computers.add("Dell", "Studio XPS", "Intel", "2G", "NT777")
computers.add("Dell", "Studio XPS", "Intel", "2G", "0J88A")
computers.add("HP", "Envy", "Intel", "4G", "CNU883701")
computers.add("HP", "Envy", "Intel", "2G", "TXU003283")

console.log("Computers: " + computers.getCount())
console.log("Flyweights: " + FlyWeightFactory.getCount())
```