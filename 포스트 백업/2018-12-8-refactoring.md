---
sidebar: auto
title:  "리펙토링 | 마틴 파울로"
date:   2018-12-08
description: 리펙토링 정의와 기법을 기술합티다.
tags: [book]
comments: true
---

### 리펙토링이란
리팩토링은 겉으로 드러나는 기능은 그대로 둔 채, 알아보기 쉽고 수정하기 간편하게 소프트웨어 내부를 수정하는 작업이다.
소프트웨어를 더 이해하기 쉽고 수정하기 쉽게 만들어 겉으로 드러나는 기능에 거의 또는 아예 영향을 주지 않으면서 소프트웨어의 각종 기능을 추가할 수 있다.
리팩토링 수행 후에 겉으로 드러나는 기능에 영향을 주지 않기 때문에 사용자는 소프트웨어의 변화를 눈치채지 못한다.

리팩토링은 **성능 최적화**와 상반되는 데, 같은 점은 수행 후에 기능이 변경되지 않는 것이다.
다른 점은 성능 최적화는 성능 향상을 위해 불가피하게 필요한 성능을 내기 위해 코드를 파악하기 더 어려워질 때가 많다.

리팩토링과 **기능 추가**는 동시에 진행되면 안된다. 동시에 진행하게 된다면 이슈 발생시 리팩토링으로 인한 이슈인지
기능상의 이슈인지 파악하기 어렵기 때문이다. 기능 추가시에 테스트 코드를 같이 추가하여 추후에 리팩토링 시 기능상의 이슈가 
발생하지 않도록 해야 한다.

#### 리팩토링의 결과
- 소프트웨어 설계 개선

단기적인 목적 때문에 코드를 수정하거나 코드의 설계를 완벽히 이해하지 않고 코드를 수정하면, 코드 구조가 뒤죽박죽되어
그 코드를 보고 설계를 파악하기가 어려워져 프로그램 설계가 점점 노후 된다.
정기적으로 리팩토링을 실시하면 코드 설계가 깔끔해진다.

- 소프트웨어 이해 쉬워짐

기능을 추가하면서 설계한 것들을 모두 기억할 수 없기 때문에 코드를 깔끔하게 만들지 않으면 복잡한 내용을 이해할 수 없다.

- 버그 찾기 쉬워짐

코드 리팩토링하면 구조가 명료하게 만들어서 디버그 시 쉽게 버그를 찾을 수 있다.

- 프로그래밍 속도 빨라짐

리팩토링을 하지 않으면 소프트웨어 개발이 진행되면서 개발 속도가 현저히 줄어들게 된다.
설계가 정돈되지 않으면 기능 추가 시 시간이 오래 걸릴 수 밖에 없으며, 버그 찾기에 많은 시간을 낭비하게 된다.
프로그래밍 속도를 빠르게 하려면 깔끔한 설계를 유지해 설계가 노후화되지 않게 해야 한다.

### 메서드 정리

#### 메서드 추출(Extract Method)
어떤 코드를 그룹으로 묶어도 되겠다고 판단될 때
```javascript
// Before
const printOwing = (amount) => {
  printBanner()
  console.log(`name:${_name}`)
  console.log(`amount:${amount}`)
}

// After
const printOwing = (amount) => {
  printBanner()
  printDetails(amount)
}
const printDetails = (amount) => {
  console.log(`name:${_name}`)
  console.log(`amount:${amount}`)
}
```

#### 메서드 내용 직접 삽입(Inline Method)
매서드 기능이 너무 단순해서 메서드명만 봐도 너무 뻔할 때
```javascript
// Before
const moreThanFiveLateDeliveries = () => {
  return _numberOfLateDeliveries > 5
}
const getRating = () => {
  return (moreThanFiveLateDeliveries()) ? 2 : 1
}

// After
const getRating = () => {
  return (_numberOfLateDeliveries > 5) ? 2 : 1
}
```

#### 임시변수 내용 직접 삽입(Inline Temp)
간단한 수식을 대입받는 임시변수로 인해 다른 리팩토링 기법 적용이 힘들 때
```javascript
// Before
const basePrice = anOrder.basePrice()
return basePrice > 1000

// After
return anOrder.basePrice() > 1000
```

#### 임시변수를 메서드 호출로 변환(Replace Temp with Query)
수식의 결과를 저장하는 임시변수가 있을 때
```javascript
// Before
const basePrice = _quantity * _itemPrice
if (basePrice > 1000) {
  return basePrice * 0.95
} else {
  return basePrice * 0.98
}

// After
const basePrice = () => _quantity * _itemPrice
if (basePrice() > 1000) {
  return basePrice() * 0.95
} else {
  return basePrice() * 0.98
}
```

#### 직관적 임시변수 사용(Introduce Explaining Variable)
사용된 수식이 복잡할 때

```javascript
// Before
if (
  platform.toUpperCase().indexOf('MAC') > -1 &&
  browser.toUpperCase().indexOf("IE") > -1 &&
  wasInitialized() && resize > 0 ) {
  // 기능 코드  
}

// After
const isMacOs = platform.toUpperCase().indexOf('MAC') > -1
const isIEBrowser = browser.toUpperCase().indexOf("IE") > -1 
const wasResized = resize > 0
if ( isMacOs && isIEBrowser && wasInitialized() && wasResized ) {
  // 기능 코드  
}
```

#### 임시변수 분리(Split Temporary Variable)
루프 변수나 값 누적용 임시변수가 아닌 임시변수에 여러 번 값이 대입될 

```javascript
// Before
let temp = 2 * (_height + _width)
console.log(temp)
temp = _height * _width
console.log(temp)

// After
const perimeter = 2 * (_height + _width)
console.log(perimeter)
const area = _height * _width
console.log(area) 
```

#### 매개변수로의 값 대입 제거(Remove Assignments to Parameters)
매개변수로 값을 대입하는 코드가 있을 때

```javascript
// Before
const discount = (inputVal, quantity, yearToDate) => {
  if (inputVal > 50) {
    inputVal -= 2
  }
}

// After
const discount = (inputVal, quantity, yearToDate) => {
  let result = inputVal
  if (inputVal > 50) {
    result -= 2
  }
}
```

#### 메서드를 메서드 객체로 전환(Replace Method with Method Object)
지역변수 때문에 메서드 추출을 적용할 수 없는 긴 메서드가 있을 때

그 메서드 자체를 객체로 전환해서 모든 지역변수를 객체의 필드로 만들자. 그런 다음 그 메서드를 객체 안의 여러 메서드로 쪼개면 된다.

```javascript
// Before
class Account {
  gamma (inputVal, quantity, yearToDate) {
    const val1 = (inputVal * quantity) + delta()
    let val2 = (inputVal * yearToDate) + 100
    if ( (yearToDate - val1) > 100) {
      val2 -= 20
    }
    const val3 = val2 * 7
    
    return val3 - 2 * val1
  }
}

// After
class Gamma {
  constructor (source, inputVal, quantity, yearToDate) {
    this.source = source
    this.inputVal = inputVal
    this.quantity = quantity
    this.yearToDate = yearToDate
  }
  compute () {
    const val1 = (this.inputVal * this.quantity) + this.source.delta()
    let val2 = (this.inputVal * this.yearToDate) + 100
    if ( (this.yearToDate - val1) > 100) {
      val2 -= 20
    }
    const val3 = val2 * 7
    
    return val3 - 2 * val1
  }
}

class Account {
  gamma (inputVal, quantity, yearToDate) {
    return new Gamma(this, inputVal, quantity, yearToDate).compute()
  }
}
```

#### 알고리즘 전환(Substitute Algorithm)
알고리즘을 더 분명한 것으로 교체해야 할 때

```javascript
// Before
const foundPerson = (people) => {
  for (let i = 0; i < people.length; i++) {
    if (people[i] === 'Don') {
      return 'Don'
    }
    if (people[i] === 'John') {
      return 'John'
    }
    if (people[i] === 'Kent') {
      return 'Kent'
    }
  }
  return ''
}

// After
const foundPerson = (people) => {
  const candidates = ['Don', 'John', 'Kent']
  for (let i = 0; i < people.length; i++) {
    if (candidates.contains(people[i])) {
      return people[i]
    }
  }
  return ''
}
```

### 객체 간의 기능 이동

#### 메서드 이동(Move Method)
메서드가 자신이 속한 클래스보다 다른 클래스의 기능을 더 많이 이용할 때

```javascript
// Before
class MyClass1 {
  aMethod () {}
}
class MyClass2 { }

// After
class MyClass1 { }
class MyClass2 {
  aMethod () {}
}
```

#### 필드 이동(Move Field)
어떤 필드가 자신이 속한 클래스보다 다른 클래스에서 더 많이 사용될 때

```javascript
// Before
class MyClass1 {
  constructor () {
    this.aField = 0
  } 
}
class MyClass2 { }

// After
class MyClass1 { }
class MyClass2 {
  constructor () {
    this.aField = 0
  } 
}
```

#### 클래스 추출(Extract Class)
두 클래스가 처리해야 할 기능이 하나의 클래스에 들어 있을 때

```javascript
// Before
class Person {
  constructor () {
    this.name = 1
    this.officeAreaCode = 2
    this.officeNumber = 3
  }
  getTelephoneNumber () { }
}

// After
class Person {
  constructor () {
    this.name = 1
  }
  getTelephoneNumber () { }
}

class TelephoneNumber {
  constructor () {
    this.areaCode = 2
    this.number = 3
  }
  getTelephoneNumber () { }
}
```

#### 클래스 내용 직접 삽입(Inline Class)
클래스에 기능이 너무 적을 때

```javascript
// Before
class Person {
  constructor () {
    this.name = 1
  }
  getTelephoneNumber () { }
}

class TelephoneNumber {
  constructor () {
    this.areaCode = 2
    this.number = 3
  }
  getTelephoneNumber () { }
}

// After
class Person {
  constructor () {
    this.name = 1
    this.officeAreaCode = 2
    this.officeNumber = 3
  }
  getTelephoneNumber () { }
}
```

#### 대리 객체 은폐(Hide Delegate)
클라이언트가 객체의 대리 클래스를 호출할 때

```javascript
// Before
class Person { }
class Department { }
class Client {
  constructor () {
    this.person = new Person()
    this.department = new Department()
  }
}

// After
class Department { }
class Person {
  constructor () {
    this.department = new Department()
  }
}
class Client {
  constructor () {
    this.person = new Person()
  }
}
```

#### 과잉 중개 메서드 제거(Remove Middle Man)
클래스에 자잘한 위임이 너무 많을 때

```javascript
// Before
class Department { }
class Person {
  constructor () {
    this.department = new Department()
  }
}
class Client {
  constructor () {
    this.person = new Person()
  }
}

// After
class Person { }
class Department { }
class Client {
  constructor () {
    this.person = new Person()
    this.department = new Department()
  }
}
```

#### 외래 클래스에 메서드 추가(Introduce Foreign Method)
사용 중인 서버 클래스에 메서드를 추가해야 하는 데 그 클래스를 수정할 수 없을 때

```javascript
// Before
const newStart = new Date(prevEnd.getYear(), prevEnd.getMonth(), prevEnd.getDate() + 1)

// After
const nextDay = (date) => {
  return new Date(date.getYear(), date.getMonth(), date.getDate() + 1)
}
const newStart = nextDay(prevEnd)
```

### 데이터 체계화
데이터 연동에 있어서 직접/간접/단방향/양방향 등과 같은 내용을 다룬다.

#### 필드 자체 캡슐화(Self Encapsulate Field)
필드에 직접 접근하던 중 그 필드로의 결합의 문제가 생길 때 읽기/쓰기 메서드를 작성해서 메서드를 통해서만 접근

```javascript
// Before
class MyClass {
  constructor () {
    this._low = null
    this._high = null
  }
  includes (arg) {
    return arg >= this._low && arg <= this._high
  }
}

// After
class MyClass {
  constructor () {
    this._low = null
    this._high = null
  }
  includes (arg) {
    return arg >= this.getLow() && arg <= this.getHigh()
  }
  getLow () { return this._low }
  getHigh () { return this._high }
}
```
#### 데이터 값을 객체로 전환(Replace Data Value with Object)
데이터 항목에 데이터나 기능을 더 추가해야 할 때
```javascript
// Before
class Order {
  constructor (customer) {
    this.customer = customer
  }
  getCustomer () { return this.customer }
  setCustomer (customer) { this.customer = customer }
}

// After
class Customer {
  constructor (name) {
    this.name = name
  }
  getName () { return this.name }
}
class Order {
  constructor (customer) {
    this.customer = new Customer(customer)
  }
  getCustomer () { return this.customer.getName() }
  setCustomer (customer) {
    this.customer = new Customer(customer) 
  }
}
```
#### 값을 참조로 전환(Change Value to Reference)
클래스에 같은 인스턴스가 많이 들어 있어서 이것들을 하나의 객체로 바꿔야 할 때
```javascript
// Before
class Customer {
  constructor (name) {
    this.name = name
  }
  getName () { return this.name }
}
class Order {
  constructor (customer) {
    this.customer = new Customer(customer)
  }
  getCustomer () { return this.customer.getName() }
  setCustomer (customer) {
    this.customer = new Customer(customer) 
  }
}

// After
class Customer {
  constructor (name) {
    this.name = name
  }
  getName () { return this.name }
  static create (name) { // Factory Method
    return new Customer(name)
  }
}
class Order {
  constructor (customer) {
    this.customer = Customer.create(customer)
  }
  getCustomer () {
    return this.customer.getName()
  }
  setCustomer (customer) {
    this.customer = Customer.create(customer) 
  }
}
```
#### 참조를 값으로 전환(Change Reference to Value)
참조 객체가 작고 수정할 수 없고 관리하기 힘들 때

#### 배열을 객체로 전환(Replace Array with Object)
배열을 구성하는 특정 원소가 별의별 의미를 지닐 때 각 배열을 각 원소마다 필드가 하나씩 있는 객체로 전환한다.

배열은 흔히 데이터 정리에 사용되는 구조로 같은 비슷한 데이터 구조일 때만 사용하자.

```javascript
// Before
const row = []
row[0] = "Liverpool"
row[1] = 15

// After
const row = new Performance()
row.setName("Liverpool")
row.setWins(15)
```

#### 관측 데이터 복제(Duplicate Observed Data)
도메인 데이터는 GUI 컨트롤 안에서만 사용 가능한데, 도메인 메서드가 그 데이터에 접근해야 할 때(Observer Pattern)

#### 클래스의 단방향 연결을 양방향으로 전환(Change Unidirectional Association to Bidirectional)
두 클래스가 서로의 기능을 사용해야 하는 데 한 방향으로만 연결되어 있을 

#### 클래스의 양방향 연결을 단방향으로 전환(Change Bidirectional Association to Unidirectional)
두 클래스가 양방향으로 연결되어 있는 데 한 클래스가 다른 클래스의 기능을 더 이상 사용하지 않게 되었을 때

#### 마법 숫자를 기호 상수로 전환(Replace Magic Number with Symbolic Constant)
특수 의미를 지닌 리터럴 숫자가 있을 때 의미를 살린 이름의 상수를 작성한 후 리터럴 숫자를 그 상수로 교체하자

#### 필드 캡슐화(Encapsulate Field)
public 필드가 있을 때 그 필드를 private로 만들고 필드용 읽기/쓰기 메서드를 작성하자

#### 컬렉션 캡슐화(Encapsulate Collection)
메서드가 컬렉션을 반환할 때 그 메서드가 읽기 전용 뷰를 반환하게 수정하고 추가 메서드와 삭제 메서드를 작성하자

```javascript
// Before
class Person {
  constructor () {
    this.set = new Set()
  }
  getCourses () {
    return this.set
  }
  setCourses (courses) {
    this.set = courses
  }
}

// After
class Person {
  constructor () {
    this.set = new Set()
  }
  getCourses () {
    return new Set(...this.set)
  }
  addCourses (course) {
    this.set.add(course)
  }
  removeCourses (course) {
    this.set.delete(course)
  }
}
```

#### 분류 부호를 하위클래스로 전환(Replace Type Code with Subclasses)
클래스 기능에 영향을 주는 변경불가 분류 부호가 있을 때 분류 부호를 하위 클래스로 만들자

```javascript
// Before
class Employee {
  constructor () {
    this.ENGINEER = 9
    this.SALESMAN = 4
    this.type = 0
  }
}

// After
class Employee {
  constructor () { }
}
class Engineer extends Exployee {
  constructor () { super() }
}
class Salesman extends Exployee {
  constructor () { super() }
}
```

#### 분류 부호를 상태/전략 패턴으로 전환(Replace Type Code with State/Strategy)
분류 부호가 클래스의 기능에 영향을 주지만 하위클래스로 전환할 수 없을 때 그 분류 부호를 상태 객체로 만들자

```javascript
class Employee {
  constructor () {
    this.ENGINEER = 9
    this.SALESMAN = 4
    this.type = 0
  }
}

// After
class Employee {
  constructor () {
    this.type = null
  }
  setType (type) {
    this.type = EmployeeType.newType(type)
  }
}
class EmployeeType {
  static newType (type) {
    switch (type) {
      case 'ENGINEER':
        return new Engineer()
      case 'SALESMAN':
        return new Salesman()
    }
  }
}
class Engineer {
  constructor () { }
}
class Salesman {
  constructor () { }
}
```

#### 하위클래스를 필드로 전환(Replace Subclass with Fields)
여러 하위클래스가 상수 데이터를 반환하는 메서드만 다룰 때 각 하위 클래스의 메서드를 상위클래스 필드로 전환하고 하위클래스는 전부 삭제하자

```javascript
// Before
class Person {
  getCode () { }
}
class Male extends Person {
  getCode () {
    return 'M'
  }
}
class Female extends Person {
  getCode () {
    return 'F'
  }
}

// After
class Person {
  constructor (isMale, code) {
    this.code = code
    this.isMale = isMale
  }
  static createMale () {
    return new Person(true, 'M')
  }
  static createFemale () {
    return new Person(false, 'F')
  }
}
```
### 조건문 간결화

#### 조건문 쪼개기(Decompose Conditional)
복잡한 조건문이 있을 때 각 부분을 메서드로 빼내자

```javascript
// Before
if (date.before(SUMMER_START) || date.after(SUMMER_END)) {
  charge = quantity * _winterRate + _winterServiceCharge
} else {
  charge = quantity * _summerRate
}

// After
const notSummer = (date) => date.before(SUMMER_START) || date.after(SUMMER_END)
const winterCharge = (quantity) => quantity * _winterRate + _winterServiceCharge
const summerCharge = (quantity) => quantity * _summerRate

if (notSummer(date)) {
  charge = winterCharge(quantity)
} else {
  charge = summerCharge(quantity)
}
```
#### 중복 조건식 통합(Consolidate Conditional Experssion)
여러 조건 검사식의 결과가 같을 때 하나의 조건문으로 합친 후 메서드로 빼내자

```javascript
// Before
const disabilityAmount = () => {
  if (_seniority < 2) return 0
  if (_monthDisabled > 12) return 0
  if (_isPartTime < 2) return 0
}

// After
const isNotEligableForDisability = () => {
  return _seniority < 2 || _monthDisabled > 12 || _isPartTime < 2
}
const disabilityAmount = () => {
  if (isNotEligableForDisability()) return 0
}
```
#### 조건문의 공통 실행 코드 빼내기(Consolidate Duplicate Conditional Fragments)
조건문의 모든절에 같은 실행 코드가 있을 때 같은 부분을 조건문 밖으로 빼자

```javascript
// Before
if (isSpecialDeal()) {
  total = price * 0.95
  send()
} else {
  total = price * 0.98
  send()
}

// After
if (isSpecialDeal()) {
  total = price * 0.95
} else {
  total = price * 0.98
}
send()
```
#### 제어 플래그 제거(Remove Control Frag)
논리 연산식의 제어 플래그 역할을 하는 변수가 있을 때 그 변수를 break문이나 return문으로 바꾸자
```javascript
// Before
const checkSecurity = (people) => {
  let found = ""
  for (let i = 0; i < people.length; i++) {
    if (!found) {
      if(people[i] === "Don") {
        sendAlert()
        found = "Don"
      }
      if(people[i] === "John") {
        sendAlert()
        found = "John"
      }
    }
  }
  someAfterCode(found)
}

// After
const findMiscreant = (people) => {
  for (let i = 0; i < people.length; i++) {
    if (!found) {
      if(people[i] === "Don") {
        sendAlert()
        return "Don"
      }
      if(people[i] === "John") {
        sendAlert()
        return "John"
      }
    }
  }
  return ""
}
const checkSecurity = (people) => {
  let found = findMiscreant(people)
  someAfterCode(found)
}
```
#### 여러 겹의 조건문을 감시 절로 전환(Replace Nested Conditional with Guard Clauses)
메서드에 조건문이 있어서 정상적인 실행 결로를 파악하기 힘들 때 모든 특수한 경우에 감시 절을 사용하자

```javascript
// Before
const getPayAmount = () => {
  let result = null
  if (_isDead) {
    result = deadAmount()
  } else {
    if (_isSeparated) {
      result = separatedAmount()
    } else {
      if (_isRetired) {
        result = retiredAmount()
      } else {
        result = normalPayAmount()
      }
    }
  }
  return result
}

// After
const getPayAmount = () => {
  if (_isDead) {
    return deadAmount()
  } 
  if (_isSeparated) {
    return separatedAmount()
  }
  if (_isRetired) {
    return retiredAmount()
  }
  return normalPayAmount()
}
```

#### 조건문을 재정의로 전환(Replace Conditional with Polymorphism)
객체 타입에 따라 다른 기능을 실행하는 조건문이 있을 땐 조건문의 각 절을 하위 클래스의 재정의 메서드 안으로 옮기고,
원본 메서드는 abstract 타입으로 수정하자.

```javascript
// Before
class Employee {
  payAmount () {
    switch (this.getType()) {
      case EmployeeType.ENGINEER:
        return this.getMonthlySalary()
      case EmployeeType.SALESMAN:
        return this.getMonthlySalary() + this.getCommission()
      case EmployeeType.MANAGER:
        return this.getMonthlySalary() + this.getBonus()
    }
  }
  getType () {
    return this.type
  }
  setType (type) {
    this.type = type
  }
}

// After
class Engineer {
  payAmount (emp) {
    return emp.getMonthlySalary()
  }
}
class Salesman {
  payAmount (emp) {
    return emp.getMonthlySalary() + emp.getCommission()
  }
}
class Manager {
  payAmount (emp) {
    return emp.getMonthlySalary() + emp.getBonus()
  }
}
class EmployeeType {
  static newType (type) {
    switch (type) {
      case EmployeeType.ENGINEER:
        return new Engineer()
      case EmployeeType.SALESMAN:
        return new Salesman()
      case EmployeeType.MANAGER:
        return new Manager()
    }
  }
}
class Employee {
  payAmount () {
    return this.state.payAmount(this)
  }
  getType () {
    return this.state
  }
  setType (type) {
    this.state = EmployeeType.newType(type)
  }
}

```
#### Null 검사를 Null 객체에 위임(Introduce Null Object)
null 값을 검사하는 코드가 계속 나올 땐 null 값을 널 객체로 만들자

```javascript
// Before
class Customer { }
class Site {
  getCustomer () {
    return this.customer
  }
  setCustomer () {
    this.customer = new Customer()
  }
}

const customer = new Site().getCustomer()

if (customer === null) plan = BillingPlan.basic()
else plan = customer.getPlan()

if (customer === null) customerName = "occupant"
else customerName = customer.getName()

// After
class NullCustomer {
  isNull () {
    return true    
  }
}
class Customer {
  isNull () {
    return false
  }
}
class Site {
  getCustomer () {
    return this.customer === null ?
      new NullCustomer() :
      this.customer
  }
  setCustomer () {
    this.customer = new Customer()
  }
}

const customer = new Site().getCustomer()

if (customer.isNull()) plan = BillingPlan.basic()
else plan = customer.getPlan()

if (customer.isNull()) customerName = "occupant"
else customerName = customer.getName()
```

#### 어설션 넣기(Introduce Assertion)
일부 코드가 프로그램의 어떤 상태를 전제할 뗀, 어설션을 넣어서 그 전제를 확실하게 코드로 작성하자

`어설션` : 항상 참으로 전제되는 조건문으로 실패하면 프로그래머가 오류를 범한 것으로 예외 통지를 하게 된다.

```javascript
// Before
const getExpenseLimit = () => {
  return (expenseLimit != NULL_EXPENSE) ?
    expenseLimit :
    primaryProject.getMemberExpenseLimit()
}

// After
class Assert {
  static isTrue (val) {
    if (val !== true) throw 'Error'
  }
}
const getExpenseLimit = () => {
  Assert.isTrue(expenseLimit !== NULL_EXPENSE || primaryProject !== null)
  return (expenseLimit != NULL_EXPENSE) ?
    expenseLimit :
    primaryProject.getMemberExpenseLimit()
}
```
### 메서드 호출 단순화
객체에서 가장 중요한 것은 인터페이스다. 이해와 사용이 쉬운 인터페이스를 작성하는 기술이야 말로 좋은 객체지향 소프트웨어 개발이다.

#### 메서드명 변경(Rename Method)
메서드명을 봐도 기능을 알 수 없을 땐 직관적인 이름으로 바꾸자.

```javascript
// Before
class Person {
  getTelephoneNumber () {
    return `(${officeAreaCode}) ${officeNumber}`
  }
}

// After
class Person {
  getOfficeTelephoneNumber () {
    return `(${officeAreaCode}) ${officeNumber}`
  }
}
```

#### 매개변수 추가(Add Parameter)
메서드가 자신을 호출한 부분의 정보를 더 많이 알아야 할 땐 객체에 그 정보를 전달할 수 있는 매개변수를 추가하자

```javascript
// Before
const getContract = () => {}

// After
const getContract = (Date) => {}
```

#### 매개변수 제거(Remove Parameter)
메서드가 어떤 매개변수를 더 이상 사용하지 않을 땐 그 매개변수를 제거하자

```javascript
// Before
const getContract = (Date) => {}

// After
const getContract = () => {}
```
#### 상태 변경 메서드와 값 반환 메서드를 분리(Separate Query from Modifier)
값 반환 기능과 객체 상태 변경 기능이 한 메서드에 들어 있을 땐 질의 메서드와 변경 메서드로 분리하자

```javascript
// Before
const getTotalOutStandingAndSetReadyForSummaries = () => {}

// After
const getTotalOutStanding = () => {}
const setReadyForSummaries = () => {}
```
#### 메서드를 매개변수로 전환(Parameterize Method)
여러 메서드가 기능은 비슷하고 안에 든 값만 다를 땐 서로 다른 값을 하나의 매개변수로 전달받는 메서드를 하나 작성하자

```javascript
// Before
const fivePercentRaise = () => {}
const tenPercentRaise = () => {}

// After
const raise = (percentage) => {}
```

#### 매개변수를 메서드로 전환(Replace Parameter with Explicit Methods)
매개변수로 전달된 값에 따라 메서드가 다른 코드를 실행할 땐 그 매개변수로 전달될 수 있는 모든 값에 대응하는 메서드를 각각 작성하자

```javascript
// Before
const setValue = (name, value) => {
  if (name === 'height') {
    height = value
    return
  }
  if (name === 'width') {
    width = value
    return
  }
}

// After
const setHeight = (value) => {
  height = value
}
const setWidth = (value) => {
  width = value
}
```
#### 객체를 통째로 전달(Preserve Whole Object)
객체에서 가져온 여러 값을 메서드 호출에서 매개변수로 전달할 땐 그 객체를 통째로 전달하게 수정하자.

객체가 나중에 새 데이터 값을 필요로 할 때마다 이 메서드 호출하는 모든 부분을 찾아서 수정해야 하는 문제가 있다.
```javascript
// Before
const low = daysTempRange().getLow()
const high = daysTempRange().getHigh()
const withinPlan = plan.withinRange(low, high)

// After
const withinPlan = plan.withinRange(daysTempRange())
```

#### 매개변수 세트를 메서드로 전환(Replace Parameter with Method)
객체가 A 메서드를 호출해서 그 결과를 B 메서드에 매개변수로 전달하는데, 결과를 매개변수로 받는 B 메서드로 직접 A 메서드를 호출할 수 있을 땐
매개변수를 없애고 A 메서드를 B 메서드가 호출하게 하자.

```javascript
// Before
const getDiscountLevel = () => 0.5
const discountedPrice = (basePrice, discountLevel) => {
  return basePrice - discountLevel * 10
} 
const basePrice = quantity + itemPrice
const discountLevel = getDiscountLevel()
const finalPrice = discountedPrice(basePrice, discountLevel)

// After
const getDiscountLevel = () => 0.5
const discountedPrice = (basePrice) => {
  return basePrice - getDiscountLevel() * 10
} 
const basePrice = quantity + itemPrice
const finalPrice = discountedPrice(basePrice)
```
#### 매개변수 세트를 객체로 전환(Introduce Parameter Object)
여러 개의 매개변수가 항상 붙어 다닐 땐 그 매개변수를 객체로 바꾸자.

```javascript
// Before
const amountInvoicedIn = (startDate, endDate) => {}
const amountReceivedIn = (startDate, endDate) => {}
const amountOverdueIn = (startDate, endDate) => {}

// After
const amountInvoicedIn = (DateRange) => {}
const amountReceivedIn = (DateRange) => {}
const amountOverdueIn = (DateRange) => {}
```

#### 쓰기 메서드 제거(Remove Setting Method)
생성시 지정한 필드 값이 절대로 변경되지 말아야 할 땐, 그 필드를 설정하는 모든 쓰기 메서드를 삭제하자

```javascript
// Before
class Employee {
  setImmutableValue () { }
}

// After
class Employee { }
```

#### 메서드 은폐(Hide Method)
메서드가 다른 클래스에 사용되지 않을 땐 그 메서드의 반환 타입을 private로 만들자

```javascript
// Before
class Employee {
  aMethod () { }
}

// After
class Employee {
  _aMethod () { }
}
```

#### 생성자를 팩토리 메서드로 전환(Replace Constructor with Factory Method)
객체를 생성할 때 단순한 생성만 수행하게 해야 할 땐 생성자를 팩토리 메서드로 교체하자.

```javascript
// Before
class Employee {
  constructor (type) {
    this.type = type
  }
}

const employee = new Employee('Manager')

// After
class Employee {
  constructor (type) {
    this.type = type
  }
  static create (type) {
    return new Employee(type)
  }
}

const employee = Employee.create('Manager')
```

#### 에러 부호를 예외 통지로 교체(Replace Error Code with Exception)
메서드가 에러를 나타내는 특수한 부호를 반환할 땐 그 부호 반환 코드를 예외 통지 코드로 바꾸자.

```javascript
// Before
const withDraw = (amount) => {
  if (amount > this.balance) {
    return -1
  } else {
    this.balance -= amount
    return 0
  }
}

// After
const withDraw = (amount) => {
  if (amount > this.balance) {
    throw "BalanceException"
  }
  this.balance -= amount
}
```

#### 예외 처리를 테스트로 교체(Replace Exception with Test)
호출 부분에 사전 검사 코드를 넣으면 될 상황인데 예외 통지를 사용했을 땐 호출 부분이 사전 검사를 실시하게 수정하자.

예외 처리는 예외적 기능, 즉 예기치 못한 에러에 사용해야 한다. 예외 처리를 조건문 대용으로 사용해서는 안된다.

```javascript
// Before
const getValueForPeriod = (periodNumber) => {
  try {
    return this.value[periodNumber]
  } catch (error) {
    return 0
  }
}

// After
const getValueForPeriod = (periodNumber) => {
  if (periodNumber >= this.value.length) {
    return 0
  }
  return this.value[periodNumber]
}
```
### 일반화 처리
일반화는 주로 상속 계층구조나 상속 계층의 위나 아래로, 즉 상위클래스나 하위클래스로 메서드를 옮기는 기법이다.

#### 필드 상향(Pull Up Field)
두 하위 클래스에 같은 필드가 들어 있을 땐 필드를 상위클래스로 옮기자.

여러 하위클래스에 중복된 기능이 들어 있는 경우가 많다. 특히 특정한 몇 개의 필드가 중복될 수 있다.
상위클래스로 옮기게 되면 데이터 선언의 중복이 없어지고 그 필드를 사용하는 기능이 하위클래스에서 상위클래스로 옮겨진다.

```javascript
// Before
class Employee { }
class Salesman { 
  constructor (name) {
    this.name = name
  }
}
class Engineer { 
  constructor (name) {
    this.name = name
  }
}

// After
class Employee {
  constructor (name) {
    this.name = name
  }
}
class Salesman { }
class Engineer { }
```

#### 메서드 상향(Pull Up Method)
기능이 같은 메서드가 여러 하위클래스에 들어 있을 땐 그 메서드를 상위클래스로 옮기자

```javascript
class Employee { }
class Salesman { 
  getName (name) {
    this.name = name
  }
}
class Engineer { 
  getName (name) {
    this.name = name
  }
}

// After
class Employee {
  getName (name) {
    this.name = name
  }
}
class Salesman { }
class Engineer { }
```

#### 생성자 내용 상향(Pull Up Constructor Body)
하위클래스마다 거의 비슷한 내용의 생성자가 있을 땐 상위클래스에 생성자를 작성하고, 그 생성자를 하위 클래스의 메서드에서 호출하자.

```javascript
// Before
class Employee { }
class Manager extends Employee {
  constructor (name, id, grade) {
    super()
    this.name = name
    this.id = id
    this.grade = grade
  }
}

// After
class Employee {
  constructor (name, id) {
    this.name = name
    this.id = id
  }
}
class Manager extends Employee {
  constructor (name, id, grade) {
    super(name, id)
    this.grade = grade
  }
}
```

#### 메서드 하향(Push Down Method)
상위클래스에 있는 기능을 일부 하위클래스만 사용할 땐 그 기능을 관련된 하위클래스 안으로 옮기자

```javascript
// Before
class Employee {
  getQuota () { }
}
class Salesman extends Employee {
  getData () {
    return super.getQuata()
  } 
}
class Engineer extends Employee {
  getData () {
    return 'Something'
  } 
}

// After
class Employee { }
class Salesman extends Employee {
  getQuota () { }
  getData () {
    return this.getQuata()
  } 
}
class Engineer extends Employee {
  getData () {
    return 'Something'
  } 
}
```

#### 필드 하향(Pull Down Field)
일부 하위클래스만이 사용하는 필드가 있을 땐 그 필드를 사용하는 하위클래스로 옮기자.

```javascript
// Before
class Employee {
  constructor () {
    this.quota = 1000
  }
}
class Salesman extends Employee {
  getData () {
    return super.quota
  } 
}
class Engineer extends Employee {
  getData () {
    return 'Something'
  } 
}

// After
class Employee { }
class Salesman extends Employee {
  constructor () {
    super()
    this.quota = 1000
  }
  getData () {
    return this.quota
  } 
}
class Engineer extends Employee {
  getData () {
    return 'Something'
  } 
}
```

#### 하위클래스 추출(Extract Subclass)
일부 인스턴스에만 사용되는 기능이 든 클래스가 있을 땐 그 기능 부분을 전담하는 하위클래스를 작성하자.

```javascript
// Before
class JobItem {
  getTotalPrice () { }
  getUnitPrice () { }
  getEmployee () { }
}

// After
class JobItem {
  getTotalPrice () { }
  getUnitPrice () { }
}

class LaborItem extends JobItem {
  getUnitPrice () { super.getUnitPrice() }
  getEmployee () { }
}
```

#### 상위클래스 추출(Extract Superclass)
기능이 비슷한 두 클래스가 있을 땐 상위클래스를 작성하고 공통된 기능들을 그 상위클래스로 옮기자

```javascript
// Before
class Department {
  getTotalAnnualCost () { }
  getName () { }
  getHeadCount () { }
}

class Employee {
  getAnnualCost () { }
  getName () { }
  getId () { }
}

// After
class Party {
  getAnnualCost () { }
  getName () { }
}

class Department extends Party {
  getAnnualCost () { super.getAnnualCost() }
  getHeadCount () { }
}

class Employee extends Party {
  getAnnualCost () { super.getAnnualCost() }
  getId () { }
}
```

#### 인터페이스 추출(Extract Interface)
클래스 인터페이스의 값을 부분을 여러 클라이언트가 사용하거나, 두 클래스에 인터페이스의 일부분이 공통으로 들어 있을 땐 공통 부분을 인터페이스로 빼내자.

```javascript
// Before
class Employee {
  getRate () { }
  hasSpecialSkill () { }
  getName () { }
  getDepartment () { }
}

// After
interface Billable {
  getRate ()
  hasSpecialSkill ()
}

class Employee implements Billable {
  getRate () { }
  hasSpecialSkill () { }
  getName () { }
  getDepartment () { }
}
```

#### 계층 병합(Collapse Hierarchy)
상위클래스와 하위클래스가 거의 다르지 않을 땐 둘을 합치자.

```javascript
// Before
class Employee { }
class Salesman extends Employee { }

// After
class Employee { }
```

#### 템플릿 메서드 형성(Form Template Method)
하위클래스 안의 두 메서드가 거의 비슷한 단계들을 같은 순서로 수행할 땐 그 단계들을 시그니쳐가 같은 두개의 메서드로 만들어서
두 원본 메서드를 같게 만든 후 두 메서드를 상위클래스를 옮기자

```javascript
// Before
class Site { }
class ResidentialSite extends Site {
  getBillableAmount () {
    const base = this.units * this.rate
    const tax = base * super.TAX_RATE
    return base * tax
  }
}
class LifelineSite extends Site {
  getBillableAmount () {
    const base = this.units * this.rate * 0.5
    const tax = base * super.TAX_RATE * 0.2
    return base * tax
  }
}

// After
class Site {
  constructor () {
    this.TAX_RATE = 1
  }
  getBillableAmount () {
    return getBaseAmount() + getTaxAmount()
  }
  getBaseAmount () { }
  getTaxAmount () { }
}
class ResidentialSite extends Site {
  constructor () {
    super()
    this.units = 1
    this.rate = 2
  }
  getBaseAmount () {
    return this.units * this.rate
  }
  getTaxAmount () {
    return this.getBaseAmount() * this.TAX_RATE
  }
}
class LifelineSite extends Site {
  constructor () {
    super()
    this.units = 1
    this.rate = 2
  }
  getBaseAmount () {
    return this.units * this.rate * 0.5
  }
  getTaxAmount () {
    return this.getBaseAmount() * this.TAX_RATE * 0.2
  }
}
```

#### 상속을 위임으로 전환(Replace Inheritance with Delegation)
하위클래스가 상위클래스 인터페이스의 일부반 사용할 때나 데이터를 상속받지 않게 해야 할 땐
상위클래스에 필드를 작성하고, 모든 메서드가 그 상위클래스에 위임하게 수정한 후 하위클래스를 없애자

```javascript
// Before
class Vector {
  isEmpty () { }
}

class Stack extends Vector { }

// After
class Vector {
  isEmpty () { }
}

class Stack {
  constructor () {
    this.vector = new Vector()
  }
  isEmpty () {
    return this.vector.isEmpty()
  }
}
```
#### 위임을 상속으로 전환(Replace Delegation with Inheritance)
위임을 이용 중인데 인터페이스 전반에 간단한 위임으로 도배하게 될 땐 위임클래스를 대리 객체의 하위클래스로 만들자.

```javascript
// Before
class Person {
  getName () { }
}
class Employee {
  constructor () {
    this.person = new Person()
  }
  getName () {
    return this.person.getName()
  }
}

// After
class Person {
  getName () { }
}
class Employee extends Person { }
```
### 복합 리팩토링

#### 상속 구조 정리(Tease Apart Interface)
하나의 상속 계층이 두 작업을 동시에 수행할 땐 상속 계층을 하나 더 만들어서 위임을 통해 다른 계층을 호출하자

```javascript
// Before
class Deal { }
class ActiveDeal extends Deal { }
class PassiveDeal extends Deal { }
class TabularActiveDeal extends ActiveDeal { }
class TabularPassiveDeal extends PassiveDeal { }

// After
class Deal {
  constructor () {
    this.presentationStyle = new PresentationStyle()
  }
}
class ActiveDeal extends Deal { }
class PassiveDeal extends Deal { }

class PresentationStyle { }
class TabularPresentationDeal extends PresentationStyle { }
class TabularPresentationDeal extends PresentationStyle { }
```

#### 절차 코드를 객체로 전환(Convert Procedual Design to Objects)
코드가 절차식으로 작성되어 있을 땐 데이터 레코드를 객체로 바꾸고, 기능을 쪼개서 각각의 객체로 옮기자

```javascript
// Before
class OrderCalculator {
  determinePrice (order) { }
  determineTaxes (order) { }
}
class Order { }
class OrderLine { }

// After
class Order {
  getPrice () { }
  getTaxes () { }
}
class OrderLine {
  getPrice () { }
  getTaxes () { }
}
```

#### 도메인 로직을 표현과 분리(Separate Domain from Presentation)
도메인 로직이 들어 있는 GUI클래스가 있을 땐 도메인 로직을 별도의 도메인 클래스로 떼어내자

```javascript
// Before
class OrderWindow { }

// After
class Order { }
class OrderWindow {
  constructor () {
    this.order = new Order()
  }
}
```

#### 계층구조 추출(Extract Hierarchy)
한 클래스에 기능이 너무 많고 일부분에라도 조건문이 많을 땐 각 조건에 해당하는 하위클래스를 작성해 계층구조를 만들자

```javascript
// Before
class BillingScheme { }

// After
class BillingScheme { }
class BusinessBillingScheme extends BillingScheme { }
class ResidentialBillingScheme extends BillingScheme { }
class DisabilityBillingScheme extends BillingScheme { }
```
