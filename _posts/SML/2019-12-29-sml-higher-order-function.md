---
layout: post
title:  "SML: Standard ML 고차함수"
date:   2019-12-29
description: Standard Meta Language 고차함수 정의 정리
tags: [FP]
category: SML
---
### 고차 함수
값 처럼 사용할 수 있는 함수를 고차 함수라고 한다. 익명함수, 람다식, 클로저가 있다.

```
val is_large = (fn x => x > 37)
val add_them = fn (a, b) => a + b

val check = is_large(38)
val added = add_them(2, 3)
```

클로저를 정의할 수 있다.

```
val cache_num = (fn (x) => (fn (y) => x * y))
val numFn = cache_num(1)
val result = numFn(2)
```

### List.map
```
fun toAlpha 0 = "A"
  | toAlpha 1 = "B"
  | toAlpha 2 = "C"
  | toAlpha n = "Z"
val numbers = [0, 1, 2, 3, 4]
val result = List.map(toAlpha)(numbers)
(* ["A", "B", "C", "Z", "Z"] *)
```

### List.filter
```
val isLarge = fn n => n > 2
val numbers = [0, 1, 2, 3, 4]
val result = List.filter(isLarge)(numbers)
(* [3, 4] *)
```

### 커스텀 `map` 함수 정의
- map 함수는 함수와 리스트를 인자로 받는다.
- 리스트 인자가 비어있으면 빈 리스트를 반환한다.
- 리스트가 비어있지 않으면 리스트(xs)에서 앞에 있는 값(x)을 꺼낸다.
  - x를 인자로 받은 함수(f)에 인자로 사용한다.
  - map 함수에 f, xs를 재귀적으로 호출한다.
  - map(f)(xs) 실행 결과의 리스트 앞에 f(x)의 값이 추가된다.
  
```
fun map f [] = []
  | map f (x  :: xs) = f(x) :: map(f)(xs)
fun toAlpha 0 = "A"
  | toAlpha 1 = "B"
  | toAlpha 2 = "C"
  | toAlpha n = "Z"
val numbers = [0, 1, 2, 3, 4]
val result = map(toAlpha)(numbers)
(* ["A", "B", "C", "Z", "Z"] *)
```