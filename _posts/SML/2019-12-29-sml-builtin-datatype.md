---
layout: post
title:  "SML: Standard ML 빌트인 자료형"
date:   2019-12-29
description: Standard Meta Language 빌트인 자료형 정리
tags: [FP]
category: SML
---
### 리스트
> 리스트는 메모리상에서 연속적으로 값이 할당된 자료형이다.

리스트를 선언할 때는 자바스크립트와 유사하게 선언 가능하다.

```
val numbers = [1, 3, 3, 7, 229, 230, 248]  (* : int list *)
val names = [ "Fred", "Jane", "Alice" ]    (* : string list *)
val groups = [ [ "Alice", "Bob" ],
               [ "Huey", "Dewey", "Louie" ],
               [ "Bonnie", "Clyde" ] ]     (* : string list list *)
```

#### 리스트 사이즈
```
val numbers = [1, 2, 3]
val count = List.length numbers (* 3 *)
```

#### 리스트 값 추가
- 앞으로 추가할 때는 `::` 연산자를 사용한다.
- 리스트를 병합하고 싶을 때는 `@` 연산자를 사용한다.

```
val numbers = [1, 2, 3]
val front_numbers = 0 :: numbers (* [0, 1, 2, 3] *)
val back_numbers = numbers @ [4]
```

### 이름있는 튜플
```
val rgb = { r=0.23, g=0.56, b=0.91 }
val r = #r rgb (* 0.23 *)
```