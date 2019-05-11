---
layout: post
title:  "[리펙토링] 구조 리펙토링 정리"
date:   2019-05-11
description: 구조적인 레벨의 리펙토링 방법을 정리하고자 작성한 포스트
tags: [summary]
category: 연구자료
---
### 글의 목적
함수나 클래스 레벨의 코드를 수정하는 것은 굉장히 빈번하게 발생하고 익숙한 작업이다.
하지만 구조 레벨을 수정하는 것은 빈번하지 않고 큰 비용이 발생하는 작업이다.
**구조적인 리펙토링**은 함수과 클래스 로직적인 부분은 수정하지 않고
컴포넌트 단위를 역할과 책임 그리고 이해하기 쉬운 형태로 재정렬하는 것이다.

이해하기 쉬운 코드와 소프트웨어 철학을 학습했는 데도 불구하고 시간적인 여유가 없어
구조적인 리펙토링을 진행못할 때가 많다.
개인적으로 싫어하는 **탁상곤론**을 벗어나 구조적인 레벨의 리펙토링 방법을 정리하고자 작성한 포스트이다.

방법을 설명한 뒤에는 실제로 서비스에 적용한 부분을 설명한다.

### 표기정의
#### ngFor
Angular에서 사용하는 **리스트 렌더링 문법**이다. vue에서는 `v-for`를 사용한다.
#### ngIf
Angular에서 사용하는 **조건부 렌더링 문법**이다. vue에서는 `v-if`를 사용한다.

#### 컴포넌트
여기서 컴포넌트를 표현할 때는 박스를 통해서 표현한다. 컴포넌트의 내부에서 정의된 기능들을 `<feature>`로 표현하겠다.

![](https://chodragon9.github.io/assets/img/structure-refactoring/1.png)

### 구조 리펙토링
페이지 컴포넌트를 가정하고 각 경우에 대한 대응을 알아보도록 하겠다.
#### AS IS 모습
![](https://chodragon9.github.io/assets/img/structure-refactoring/2.png)
PageComponent는 헤더, 사이드 네비게이션, 타임라인 콘텐츠, 온라인중인 친구리스트로 구성된다.
PageComponent의 개선포인트는 3가지가 있다.

- **첫번째**는 SideNaviComponent의 역할인 `<hideSideNavi>`가 수행하고 있다.
- **두번째**는 `{timelineDatas}`데이터를 PageComponent에서는 구체적으로 다룰 필요가 없다.
- **세번째**는  온라인중인 친구리스트 UI 를 표시하는 OnlineListComponent는 의미가 모호하다.

#### 리펙토링을 위한 준비
리펙토링을 시작하기 앞서 설계작업을 하는 게 좋다. 먼저 이상적인 구조로 설계를 한다.
이상적인 구조는 이해하기 쉽고, 역할을 명확히 알 수 있게 구분하는 작업이다.

![](https://chodragon9.github.io/assets/img/structure-refactoring/3.png)
개선 포인트를 반영하여 재설계한 구조이다. 먼저 PageComponent에서는 컴포넌트로 추상화된 UI들로 구성된다.
UI 상으로 구분되어있는 부분들을 컴포넌트에도 반영한 것이다.

`<hideSideNavi>` 기능은 SideNaviComponent 내부로 이동되었다.
더이상 PageComponent에서는 SideNaviComponent의 구체적인 구현부분을 알필요가 없어졌다.

`{timelineDatas}`를 구체적으로 기술하는 부분을 위해 TimelineComponent를 만들었다.
TimelineComponent에서 `{timelineDatas}` 데이터를 다루게 되고,
PageComponent는 구체적인 부분을 다룰 필요가 없어졌다. 

OnlineListComponent는 **온라인중인 친구리스트**라는 의미를 명확히 하기 위해
OnlineFriendsComponent으로 네이밍이 변경됬다.

#### 구조 리펙토링 과정
![](https://chodragon9.github.io/assets/img/structure-refactoring/4.png)
리펙토링을 시작할 때는 먼저 볼륨이 작거나 쉽게 수정이 가능한 부분부터 해결한다.
여기서는 네이밍 변경과 역할을 이동하는 부분부터 진행한다.
![](https://chodragon9.github.io/assets/img/structure-refactoring/5.png)
이제 볼륨이 큰 부분을 작업한다. 컴포넌트를 생성하여 다른 컴포넌트에 이동하는 작업은 많은 작업을 동반하기 때문에 유의해야 한다.
이렇게 완료를 하면 한싸이크이 완료가 된다.

#### 구체적인 구조 리펙토링 과정
구체적으로 코드레벨에서는 아래와 같은 순서로 진행된다.
1. 마크업 옮기기
   - 마크업 부분을 복사&붙여넣기한다. 기능 동작을 확인해야 함으로 원본을 유지한다.
2. 마크업에서 사용되는 변수와 메소드 이동
   - 가장 위에 있는 라인부터 필요한 메소드를 찾아 이동할 위치에 복사&붙여넣기를 한다.
   - 에디터를 통해 옮기지 않은 부분이 있는 지 확인한다.
3. 기능확인
   - 원본 기능과 비교해 정상동작을 확인한다.
4. 원본 삭제
   - 원본 기능을 삭제하고, 신규로 옮긴 부분만 남긴다.
5. 커밋
   - 소스 커밋을 할 때는 앞에 `[리펙토링]`으로 시작하여 로그를 남기면 리펙토링 관련해서 로그를 파악하기 용이하다.
   
#### 중복코드가 발생될 때
PageComponent로 부터 컴포넌트를 만들때 생성된 컴포넌트나 역할이 이동된 컴포넌트에 중복된 코드가 생성될 수 있다.
구조레벨 수정중에 중복된 코드가 보여도 구조레벨 수정 완료후에 한번에 진행하는 것을 권한다.
중복 코드를 수정하는 작업은 코드레벨의 리펙토링이다.
다른 작업을 병렬적으로 작업하게 되면 실수할 여지가 있으므로 구조레벨의 리펙토링이 완료 후에 하는 것이 권한다.

### 실제로 리펙토링한 부분
UI 상으로는 이런 형태이다.

![](https://chodragon9.github.io/assets/img/structure-refactoring/6.png)
#### 리펙토링 결과
![](https://chodragon9.github.io/assets/img/structure-refactoring/7.png)

### 끝