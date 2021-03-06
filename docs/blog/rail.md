---
sidebar: auto
title: RAIL 정리
---
## 글의 목적
web.dev에 소개된 RAIL을 이해하고, 기억에 담는 것이 목적이다.

#### 참고자료
- [https://web.dev/rail/](https://web.dev/rail/)

## RAIL
### RAIL이 뭐지?
사용자 중심 성능 모델이다.

#### 성능 목표 항목들은 어떤 게 있을까?
웹 앱의 주요 작업인 응답, 애니메이션, 유휴, 로드가 있다.

#### RAIL로 얻을 수 있는 게 뭐지?
사용자의 경험을 주요 작업으로 나누고 각각의 성능 목표를 정의하는 데 도움이 된다.

#### 성능 목표는 어떤 기준인가?
[사용자가 지연을 인식하는 방식에 대한 컨텍스트 및 UX 연구](https://www.nngroup.com/articles/response-times-3-important-limits/)를 기반으로 정의한다.

## 사용자가 느끼는 것
### 사용자가 성능 지연 시간에 따라서 어떻게 느낄까?
#### 1. 0 ~ 16ms
이 기간 내에 응답하면 애니메이션이 부드럽다고 인식한다. 왜냐하면, 사용자는 모션 추적이 능숙하기 때문이다.

브라우저가 새 프레임을 화면에 그리는 데 걸리는 시간을 포함하면, 프레임당 16ms이다.

#### 2. 0 ~ 100ms
이 기간 내에 응답하면 즉각적인 반응으로 느낀다. 이 기간을 넘어가면 행동과 응답이 끊어졌다고 느낀다.

#### 3. 100 ~ 1000ms
이 기간 내에서는 자연스럽고 지속적인 작업 진행의 일부로 느낀다. 대부분 웹 페이지 로드나 페이지 변경 작업을 나타낸다.

#### 4. 1000ms 이상
1000ms를 넘으면 사용자는 수행 중인 작업에 집중하지 못한다.

#### 5. 10000ms 이상
10000ms를 넘으면 사용자는 실망하고 작업을 포기할 가능성이 크다. 나중에 다시 방문하지 않을 수 있다.

### 사용자는 네트워크 상태와 하드웨어에 따라 성능 지연을 어떻게 인식하지?
사용자는 본인의 네트워크 상태와 하드웨어에 따라 성능 지연을 다르게 인식한다.
빠른 네트워크 상태에 빠른 데스크톱 컴퓨터에서는 사이트를 로드하는 것을 1초 이내에 발생하는 것에 익숙하다.
하지만 느린 3G 연결로 모바일 장치에 사이트를 로드하는 것은 더 오래 걸리기 때문에 모바일 사용자는 인내심이 더 많다.
그래서 모바일에서는 5초 이내에 로드하는 것이 더 현실적인 목표다.

## RAIL 주요 작업 4가지
### 응답은 지연 시간이 얼마나 돼야 할까?
100ms 이내에 반응해야 한다. 사용자 입력이 시작하고 상호작용이 즉각적인 것처럼 느끼도록 하려면 100ms 이내에 반응해야 한다.

#### 이벤트 처리하는 코드의 실행시간은 얼마나 돼야 할까?
50ms 이내에 처리해야 한다. 버튼 클릭, 애니메이션 시작과 같은 대부분 입력에 적용된다. 하지만 터치 드래그 또는 스크롤에는 적용되지 않는다.

#### 50ms 이내에 처리 못 하는 것 어떻게 하나?
해당 사용자 입력 이벤트가 완료하는 데 50ms 이상 걸리면 사용자에게 다른 피드백을 먼저 제공한다.

#### 100ms 이내 반응해야 하는 데, 처리시간이 왜 50ms밖에 안될까?
> [1] [Idle Time Garbage Collection Scheduling > 4. Idle Task Scheduling](https://static.googleusercontent.com/media/research.google.com/ko//pubs/archive/45361.pdf)

크롬 브라우저에서는 유휴 시간을 50ms[1]로 제한한다. 사용자가 발생하는 입력은 최대 50ms 동안 대기할 수 있다. 그래서 입력 처리 시간은 최대 50ms 동안 사용할 수 있다고 가정하는 것이다.

### 애니메이션은 각 프레임의 시간을 얼마나 주어질까?
각 프레임을 10ms 이하로 생성해야 한다. 왜냐하면, 프레임의 최대 시간은 16ms이지만 브라우저는 렌더링하는 데 약 6ms가 필요하므로 처리시간은 10ms가 된다.

#### 어떤 것을 애니메이션이라 할까?
비주얼 애니메이션, 로딩, 스크롤, 드래그와 같은 것을 의미한다.

#### 애니메이션이 60fps가 안되면 어떻게 할까?
[렌더링 성능](https://developers.google.com/web/fundamentals/performance/rendering)을 참조해서 해결한다.

### 유휴 시간은 성능이랑 어떤 연관성이 있을까?
유휴 시간에 데이터 로드, 사용자 입력 응답이 발생하는 데, 유휴 시간을 가지지 않으면 이것들을 방해할 수 있다.

#### 유휴 시간은 어떻게 늘릴 수 있을까?
최대 유휴 시간인 50ms 내에 실행시간을 완료할 수 있도록 해야 한다.

### 로드 시간은 얼마나 돼야 빠르다고 느껴질까?
첫 번째 로드는 5초 이내에 로드 시간이 돼야 하고, 후속 로드는 2초 이내에 로드하는 것이 좋다.

모바일 사용자 장치와 느린 네트워크를 고려해서 5초 이내에 로드하는 게 좋다. 모든 것을 5초 내에 로드 할 필요는 없이 지연 로딩 이미지, 코드 번들링을 통해 지연 로드로 후속 로드를 하는 게 좋다.

#### 어떤 요소들이 로드에 영향을 미칠까?
네트워크 속도 및 대기 시간, 하드웨어(예: 느린 CPU), 캐시, JS 구문 분석이 로드에 영향을 미친다.

## 끝
