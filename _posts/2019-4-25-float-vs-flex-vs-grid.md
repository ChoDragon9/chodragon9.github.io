---
layout: post
title:  "Float/Flex/Grid 비교, Grid를 사용해야 하는 이유"
date:   2019-04-25
description: Float/Flex/Grid 비교를 비교하고 Grid를 사용해야 하는 이유를 설명합니다.
tags: [css]
comments: true
---
### 글의 목적
레이아웃을 코딩하는 방법은 다양한 방법이 있습니다. Float, Flex, Grid 순서로 레이아웃을 배치하는 방법이 발전되었습니다.
각 기술들의 차이와 가장 최근에 만들어진 Grid를 사용하면 어떤 장점이 있는 지 설명합니다.

### 그리드 시스템 구현
6 Grid를 1:3:2로 나누고 각각 같은 여백을 가질 때 코드를 비교해보겠습니다.

![스크린샷 2019-04-19 오후 6 45 16](https://user-images.githubusercontent.com/17817719/56418908-714cf080-62d3-11e9-9e57-fdc5bd1e1a4f.png)

#### Float
Float로 개발할 때는 가로 사이즈를 우리가 계산해서 작성을 해야 됬습니다. 그리고 `overflow: hidden`과 같인 특별한 방법을 사용해서 코딩을 해야 합니다. 전처리기를 사용하지 않으면 여백값 수정 시 많은 코드를 수정해야 됩니다.

```html
<div style="overflow: hidden">
  <div style="width: calc((100% - 20px) * 1 / 6); float: left">1/6</div>
  <div style="width: calc((100% - 20px) * 3 / 6); float: left; margin: 0 10px">3/6</div>
  <div style="width: calc((100% - 20px) * 2 / 6); float: left">2/6</div>
</div>
```

#### Flex
Flex가 도입이 되면서 좀더 추상적으로 기입이 가능했습니다. 1:3:2 비율을 자식 엘리먼트에 기입하면 레이아웃을 지정 가능합니다.

```html
<div style="display: flex;">
  <div style="flex: 1">flex(1)</div>
  <div style="flex: 3; margin: 0 10px">flex(3)</div>
  <div style="flex: 2">flex(2)</div>
</div>
```
#### Grid
Grid는 Flex처럼 추상적으로 비율이 기입 가능하고, 그것은 부모에서 가능하게 합니다. 자식들의 레이아웃을 부모에서 조작이 가능하므로
레이아웃 코딩은 한 부분에서 수정이 가능합니다.

```html
<div style="display: grid; grid-template-columns: 1fr 3fr 2fr; grid-gap: 10px">
  <div>1fr</div>
  <div>3fr</div>
  <div>2fr</div>
</div>
```

### 슬라이드
기능경기대회 과제 중 라디오 박스를 클릭하면 배경이 바뀌는 요구사항이 있습니다. CSS만으로 구현해야되어 억지스러운(?) 기능이라고 생각되지만 Grid를 사용하면 전혀 부자연스럽지 않습니다.
![](https://user-images.githubusercontent.com/17817719/56421526-dd345680-62dd-11e9-8eb9-6983017959d3.png)

#### Float
Float를 사용 할 때는 `position`의 `absolute`, `reletive`와 `top/bottom/left/right`와 같은 속성을 굉장히 세밀하게 다룰 수 있어야 했습니다. 이 방식은 굉장히 시간과 코딩양이 많아 집니다.
```css
.float__wrapper {position: relative; height: 300px; overflow: hidden}
.float__wrapper__content,
.float__wrapper__radio,
.float__wrapper_bg {position: absolute}
.float__wrapper__content {left: 10%; bottom: 30px; width: 80%; height: 100px}
.float__wrapper__radio {z-index: 2; right: calc(10% + 20px)}
.float__wrapper_bg {left: 0; top: 0; z-index: 1; width: 100%; height: 100%}
```
```html
<div class="float__wrapper">
  <div class="float__wrapper__content">&nbsp;</div>
  <input type="radio" class="float__wrapper__radio" style="bottom: 95px">
  <input type="radio" class="float__wrapper__radio" style="bottom: 75px">
  <input type="radio" class="float__wrapper__radio" style="bottom: 55px">
  <div class="float__wrapper_bg">&nbsp;</div>
</div>
```

#### Flex
Flex를 사용한다고 해서 `position`의 `absolute`, `reletive` 사용이 줄진 않았습니다. 단지 각 요소들간의 간격을 쉽게 맞출 수 있는 장점이 있습니다.

```css
.flex__wrapper {position: relative; height: 300px; display: flex; justify-content: center; align-items: flex-end; padding-bottom: 30px}
.flex__wrapper__content {width: 80%; height: 100px}
.flex__wrapper__radio,
.flex__wrapper_bg {position: absolute}
.flex__wrapper__radio {right: calc(10% + 20px); z-index: 2}
.flex__wrapper_bg {left: 0; top: 0; z-index: 1; width: 100%; height: 100%}
```
```html
<div class="flex__wrapper">
  <div class="flex__wrapper__content"></div>
  <input type="radio" class="flex__wrapper__radio" style="bottom: 95px">
  <input type="radio" class="flex__wrapper__radio" style="bottom: 75px">
  <input type="radio" class="flex__wrapper__radio" style="bottom: 55px">
  <div class="flex__wrapper_bg"></div>
</div>
```

#### Grid
Grid를 사용하면 2차원 배열을 만들어 자식 요소를 원하는 위치에 넣을 수 있습니다. `position`의 `absolute`, `reletive`를 사용하지 않고, `top/bottom/left/right`를 사용하지 않더라도 원하는 위치에 넣을 수 있습니다.

```css
.grid__wrapper {
  display: grid;
  height: 300px;
  grid-template:
    '. . . .' 170px
    '. . . .' 20px
    '. . radio1 .' 20px
    '. . radio2 .' 20px
    '. . radio3 .' 20px
    '. . . .' 20px
    '. . . .' 30px
  / 10% auto 32px 10%
}
.grid__wrapper__content {grid-area: 2 / 2 / 7 / 4}
.grid__wrapper__radio {z-index: 2}
.grid__wrapper_bg {grid-area: 1 / 1 / 8 / 5; z-index: 1}
```
```html
<div class="grid__wrapper">
  <div class="grid__wrapper__content"></div>
  <input type="radio" class="grid__wrapper__radio" style="grid-area: radio1">
  <input type="radio" class="grid__wrapper__radio" style="grid-area: radio2">
  <input type="radio" class="grid__wrapper__radio" style="grid-area: radio3">
  <div class="grid__wrapper_bg"></div>
</div>
```