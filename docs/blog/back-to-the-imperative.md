---
title: 명령형 프로그래밍 사고로 전환하기
sidebar: auto
---

# 명령형 프로그래밍 사고로 전환하기

## 명령형과 함수형 비교

### 두 리스트 연결로 비교
> 순수 함수형 데이터 구조 도서

#### 명령형
명령형 방식에서는 리스트의 첫 셀과 마지막 셀에 대한 포인터를 유지함으로써 O(1)만에 두 리스트를 이어 붙일 수 있다. 첫 번째 리스트의 마지막 셀이 두 번째 리스트의 첫 번째 셀을 가리키도록 변경함으로써 쉽게 구현할 수 있다. 단 두 리스트를 모두 파괴한다는 점에 유의해야 한다. 두 리스트를 이어 붙인 뒤 두 리스트를 재사용할 수 없다.

#### 함수형
함수형 방식에서는 첫 번째 리스트의 마지막 셀을 이런 식으로 변경할 수 없다. 대신 우리가 마지막 셀을 복사하면서, 복사본에서 다음 셀을 가리키는 포인터가 두 번째 리스트의 첫 셀을 가리키게 만든다. 그런 다음, 끝에서 두 번째 셀을 복사하면서 꼬리 포인터가 방금 생긴 마지막 셀의 복사본을 가리키게 한다. 이런 과정을 첫 번째 리스트를 모두 다 복사할 때까지 반복한다. 이 경우 영속성이 생겨나는 대신 복사에 O(n)이라는 추가 비용이 든다.

### 에러 처리 비교
#### 명령형
**명령형** 코드에서 예외를 붙잡아 던지는 방법은 try-catch 에러 처리가 있다. 예외를 던질 가능성이 있는 것들을 try를 감싸고 예외를 발생하면 catch에서 처리하는 것이다. 반환값으로 실패 전달의 단점을 해결하여 원래하고 싶은 것을 기술한 코드와 실패했을 때의 처리를 분리할 수 있다.

#### 함수형
함수형 관점에서 try-catch 에러 처리는 다음과 같은 특징을 띈다.

- 다른 함수형 장치처럼 합성이나 체이닝을 할 수 없습니다.
- 예외를 던지는 행위는 함수 호출에서 빠져나갈 구멍을 찾는 것이므로 단일한, 예측 가능한 값을 지향하는 참조 투명성 원리에 위배됩니다.
- 예기치 않게 스택이 풀리면 함수 호출 범위를 벗어나 전체 시스템에 영향을 미치는 부수 효과를 일으킵니다.

**함수형** 에러 처리는 철저히 다른 방법으로 접근해 소프트웨어 시스템의 난관을 해결합니다. 기본 아이디어는 비슷합니다. 잠재적으로 위험한 코드 주위에 안전망(말하자면 컨테이너)을 설치하는 것입니다.

함수형 프로그램에서는 위함한 코드를 감싼다는 개념은 그대로 가져가되 try-catch 블록은 제거할 수 있습니다. 이것이 명령형과 가장 큰 차이점입니다. 함수형 자료형을 사용하여 불순함과의 분리를 일급 시민으로 만드는 것이지요.

### 반복 처리 비교
**명령형 프로그래밍**은 작업 수행에 필요한 전 단계를 노출하여 흐름이나 경로를 아주 자세히 서술한다. 보통 작업을 수행하는 단계는 루프와 분기문, 구문마다 값이 바뀌는 변수들로 빼곡히 들어찬다.

**함수형 프로그래밍**은 독립적인 블랙박스 연산들이 단순하게, 즉 최소한의 제어 구조를 통해 연결되어 추상화 수준이 높다. 실제로 함수형 프로그램은 데이터와 제어 흐름 자체를 고수준 컴포넌트 사이의 단순한 연결로 취급한다.

#### 1. 30세 이상인 users를 거른다.

##### 명령형
```js
const temp_users = [];
for (let i = 0; i < users.length; i++) {
  if (users[i].age >= 30) {
    temp_users.push(users[i]);
  }
}
```
##### 함수형
```js
const over_30 = users.filter(({age}) => age >= 30);
```

#### 2. 30세 이상인 users의 names를 수집한다.

##### 명령형
```js
const names = [];
for (let i = 0; i < temp_users.length; i++) {
  names.push(temp_users[i].name);
}
```
##### 함수형
```js
const names = over_30.map(({name}) => name);
```

#### 3. 30세 미만인 users를 거른다.

##### 명령형
```js
const temp_users2 = [];
for (let i = 0; i < users.length; i++) {
  if (users[i].age < 30) {
    temp_users2.push(users[i]);
  }
}
```
##### 함수형
```js
const under_30 = users.filter(({age}) => age < 30);
```

#### 4. 30세 미만인 users의 ages를 수집한다.

##### 명령형
```js
const ages = [];
for (let i = 0; i < temp_users2.length; i++) {
  ages.push(temp_users2[i].age);
}
```
##### 함수형
```js
const ages = under_30.map(({age}) => age)
```

## 명령형/객체지향/함수형 패러다임 구분하기
### 명령형
먼저 명령형은 작업 수행에 필요한 모든 단계를 노출하여 흐름이나 경로를 아주 자세히 작성합니다. 작업 수행에 필요한 단계의 예로는 루프, 분기, 값이 바뀌는 변수들이 있습니다.

##### [예시 2.1] 명령형 코드 예시
```js
const todoList = []

addItem(todoList, '새해인사', 20200101)
addItem(todoList, '화분 물주기', 20200102)
addItem(todoList, '분리수거', 20200103)

printTodoList(todoList)

/* 실행결과
[20200101] 새해인사
[20200102] 화분 물주기
[20200103] 분리수거
*/
```
```js
const addItem = (todoList, subject, date) => {
  const todoItem = toTodoItem(subject, date)
  todoList.push(todoItem)
}
const printTodoList = (todoList) => {
  const {length} = todoList
  let log = ``
  for (let i = 0; i < length; i++) {
    const todoItem = todoList[i]
    log += `${todoItemToString(todoItem)}`
    if (i < length - 1) {
      log += `\n`
    }
  }
  console.log(log)
}

const toTodoItem = (subject, date) => ({subject, date})
const todoItemToString = ({subject, date}) => `[${date}] ${subject}`
```

### 객체지향
다음으로 객체지향은 상태와 행동을 지닌 자율적인 객체에 역할과 책임을 부여하고 다른 객체들과 협력하여 시스템을 구성합니다.

##### [예시 2.2] 객체지향 코드 예시
```js
const todoList = new TodoList()
todoList.addItem('새해인사', 20200101)
todoList.addItem('화분 물주기', 20200102)
todoList.addItem('분리수거', 20200103)
todoList.print()

/* 실행결과
[20200101] 새해인사
[20200102] 화분 물주기
[20200103] 분리수거
*/
```
```js
class TodoList {
  constructor() {
    this.todoList = []
  }
  addItem(subject, date) {
    const todoItem = new TodoItem(subject, date)
    this.todoList.push(todoItem)
  }
  print() {
    const str = this.todoList
      .map((todoItem) => todoItem.toString())
      .join('\n')
    console.log(str)
  }
}

class TodoItem {
  constructor(subject, date) {
    this.subject = subject
    this.date = date
  }
  toString() {
    return `[${this.date}] ${this.subject}`
  }
}
```

### 함수형
마지막으로 함수형은 가변(可變) 상태를 멀리하고 불변(不變) 상태를 추구합니다. 가변 상태는 조작의 타이밍이나 순서에 따라 예상과 다르게 동작할 위험이 있으므로 불변 상태를 추구합니다.

##### [예시 2.3] 함수형 코드 예시
```js
const todoList = TodoList.create([])
  .addItem('새해인사', 20200101)
  .addItem('화분 물주기', 20200102)
const todoList2 = todoList
  .addItem('분리수거', 20200103)
```
```js
console.group('todoList')
console.log(todoList.toString())
console.groupEnd()

console.group('todoList2')
console.log(todoList2.toString())
console.groupEnd()

/* 실행결과
todoList
  [20200101] 새해인사
  [20200102] 화분 물주기
todoList2
  [20200101] 새해인사
  [20200102] 화분 물주기
  [20200103] 분리수거
 */
```
```js
class TodoList {
  constructor(todoList) {
    this.todoList = todoList
  }
  addItem(subject, date) {
    const todoItem = TodoItem.create(subject, date)
    const addedTodoList = this.todoList.concat(todoItem)
    return TodoList.create(addedTodoList)
  }
  toString() {
    return this.todoList
      .map(TodoItem.todoItemToString)
      .join('\n')
  }
  static create(todoList) {
    return new TodoList(todoList)
  }
}

class TodoItem {
  static create (subject, date) {
    return {subject, date}
  }
  static todoItemToString ({subject, date}) {
    return `[${date}] ${subject}`
  }
}
```

## 끝
