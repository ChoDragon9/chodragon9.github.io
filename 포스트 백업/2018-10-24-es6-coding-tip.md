---
sidebar: auto
title:  "[ECMAScript] ES6 코딩팁"
date:   2018-10-24
description: Pull Request에서 코멘트 받은 ES6 코딩팁을 정리한다. 
tags: [es6]
comments: true
---
# [ECMAScript] ES6 코딩팁
#### javascript style 작성 시
```js
// AS-IS
dom.style.color = '#fff'
dom.style.fontSize = '12px'

// TO-BE
Object.assign(dom.style, {
  color: '#fff',
  fontSize: '12px'
})
```

#### 조건 체크 후 기본값을 변경하는 경우
```js
// AS-IS
let latitude = ''
let longitude = ''

if (_.includes(gHeader, '/')) {
  [longitude, latitude] = gHeader.split('/')
  latitude = unbaseLatitude(latitude)
  longitude = unbaseLongitude(longitude)
}

// TO-BE
const [longitude = '', latitude = ''] = gHeader.split('/')
if (longitude && latitude) {
  latitude = unbaseLatitude(latitude)
  longitude = unbaseLongitude(longitude)
}
```

#### 하나의 값이 필요한 경우
```js
// AS-IS
const { isIOS } = state.env.agent

// TO-BE
const isIOS = state.env.agent.isIOS
```

#### 불필요한 기본값을 return 하는 경우
```js
// AS-IS
if (items) {
  return _.reduce(items, (sum, item) => sum + item.clientWidth, 0) +
    items.length * CINEMA_ITEM_MARGIN_LEFT_RIGHT
} else {
  return 0
}

// TO-BE
return _.reduce(items, (sum, item) => {
  return sum + item.clientWidth + CINEMA_ITEM_MARGIN_LEFT_RIGHT
}, 0)
```

#### 불필요한 메모리 생성하지 않기
배열을 만들게 되면 힙메모리에 생성 및 참조가 되므로 많이 사용될 수록 문제가 된다.
```js
// AS-IS
if (![TODAY_STRING, TOMORROW_STRING].includes(dateText)) {
 //Something
}

// TO-BE
if (dateText !== TODAY_STRING && dateText !== TOMORROW_STRING) {
  //Something
}
```

### 배열 비우기
```js
const arr = [0, 1, 2, 3]
console.log(arr) // [0, 1, 2, 3]
arr.length = 0
console.log(arr) // []
```

### 최대 길이 및 패턴 확인
```js
let value = this.value;
if (this.maxlength && this.maxlength < value.length) {
  value = Array.from({length: this.maxlength})
    .map((v, i) => value[i])
    .join('');
}
if (this.pattern) {
  const regExp = new RegExp(this.pattern);
  value = Array.from(value)
    .filter((txt: string) => regExp.test(txt))
    .join('');
}
this.value = value;
```
