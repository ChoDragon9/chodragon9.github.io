---
layout: post
title:  "SML: Standard ML 함수"
date:   2019-12-29
description: Standard Meta Language 함수 정의 정리
tags: [FP]
category: SML
---
### 함수 선언
```
fun add_them (a, b) = a + b
val test_it = add_them(1, 2) (* 3 *)
```

### 함수내 조건문
긴함수는 가독성을 위해 개행 처리 할 수 있다.

```
fun toAlpha (n) =
  if n = 0
    then "A"
  else if n = 1
   then "B"
  else "C"

val a = toAlpha(0)
val b = toAlpha(1)
val c = toAlpha(2)
```

### 재귀
```
fun factorial (n) =
  if n = 0
    then 1
  else n * factorial(n - 1)
val result = factorial(3);
```

### 함수내 변수 접근
함수내에서는 변수를 변경할 수 없다. 그리고 함수 선언 뒤에 선언된 변수가 있더라도 이전에 할당된 변수를 사용한다. 함수를 선언할 때 해당 변수를 복사해두기 때문이다.

```
val x = 2
fun answer n = n + x
val x = 1

val result = answer(1) (* 3 *)
```

### 패턴 매칭
if 대신 패턴 매칭을 통해 정의할 수 있다.

```
fun fibonacci 0 = 0
  | fibonacci 1 = 1
  | fibonacci n = fibonacci(n - 1) + fibonacci(n - 2)

val result = fibonacci(5)
```

### 이름있는 튜플을 튜플로 변환하기
```
fun rgbToTup ({r, g, b}) = (r, g, b)
val rgb = { r=0.1, g=0.2, b=0.3 }
val result = rgbToTup(rgb)
```