---
sidebar: auto
title:  "테스트 종류"
date:   2018-05-17
description: 테스트 종류에 대한 전반적인 내용을 다룬다.
tags: [words, test]
comments: true
---
### [유닛 테스트](https://ko.wikipedia.org/wiki/%EC%9C%A0%EB%8B%9B_%ED%85%8C%EC%8A%A4%ED%8A%B8)
유닛 테스트는 소스 코드의 특정 모듈이 의도된 대로 정확히 작동하는지 검증하는 절차다. 즉, 모든 함수와 메소드에 대한 테스트 케이스
를 작성하는 절차를 말한다. 이를 통해서 언제라도 코드 변경으로 인해 문제가 발생할 경우, 단시간 내에 이를 파악하고 바로 잡을 수 있도록 해준다. 이상적으로, 각 테스트 케이스는 서로 분리되어야 한다. 이를 위해 가짜 객체를 생성하는 것도 좋은 방법이다. 유닛 테스트는 개발자 뿐만 아니라 보다 더 심도있는 테스트를 위해 테스터에 의해 수행되기도 한다.

### [통합 시험](https://ko.wikipedia.org/wiki/%ED%86%B5%ED%95%A9_%EC%8B%9C%ED%97%98)
통합 시험은 단위 테스트가 끝난 소프트웨어를 결합해 가며 시험 하는 방법이다. 단위 테스트가 끝난 모듈들을 좀 더 큰 단위의 집합으로 통합 구성한 후, 통합 시험 계획에 따라서 테스트를 수행한다. 통합 시험을 통과한 모듈 집합은 시스템 검사 단계의 테스트 대상으로서 넘어가게 된다.

### [시스템 검사](https://ko.wikipedia.org/wiki/%EC%8B%9C%EC%8A%A4%ED%85%9C_%EA%B2%80%EC%82%AC)
시스템 검사는 정보시스템이 완전히 통합되어 구축된 상태에서 정보시스템의 기능을 총체적으로 검사하는 것이다. 통합된 각 모듈들이 원래 계획했던 대로 작동하는지, 시스템의 실제 동작과 원래 의도했던 요구사항과는 차이가 없는지 등을 판단하게 된다. 수행 시간, 파일 저장 및 처리 능력, 최대 부하, 복구 및 재시동 능력, 수작업 절차 등을 점검한다. 시스템 검사는 시스템의 내부적인 구현 방식이나 설계에 대한 지식에 관계 없이 테스트를 수행하는 블랙박스 테스트의 일종으로 분류된다.

시스템 검사는 모든 통합 검사를 통과한 "통합된" 소프트웨어 컴포넌트들, 그리고 필요한 하드웨어들과 통합된 소프트웨어 시스템 전체를 대상으로 한다. 통합 검사는 서로 통합된 두 소프트웨어 혹은 하드웨어 단위 사이에 서로 잘 맞지 않는 부분이 있는지를 파악하기 위해서 수행된다. 시스템 검사는 "통합된 컴포넌트들 사이"에 발생하는 결함과 통합된 전체 시스템내에서 발생하는 결함 모두를 발견하기 위해서 수행된다.

### [회귀 테스트](https://ko.wikipedia.org/wiki/%ED%9A%8C%EA%B7%80_%ED%85%8C%EC%8A%A4%ED%8A%B8)
회귀 버그를 찾는 모든 소프트웨어 테스트 방식은 회귀 테스트라 할 수 있다. 회귀 버그는 이전에 제대로 작동하던 소프트웨어 기능에 문제가 생기는 것을 가리킨다. 일반적으로 회귀 버그는 프로그램 변경 중 뜻하지 않게 발생한다.

회귀 테스트로는 이전의 실행 테스트를 재 실행하며 이전에 고쳐졌던 오류가 재현되는지 검사하는 방법이 많이 사용된다.

### [정적 프로그램 분석](https://ko.wikipedia.org/wiki/%EC%A0%95%EC%A0%81_%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8_%EB%B6%84%EC%84%9D)
정적 프로그램 분석은 실제 실행 없이 컴퓨터 소프트웨어를 분석하는 것을 말한다. 대부분의 경우에 분석은 소스 코드의 버전 중 하나의 형태로 수행되며, 가끔은 목적 파일 형태로 분석된다. 이에 반하여 실행 중인 프로그램을 분석하는 것을 동적 프로그램 분석이라고 한다.

이 용어는 프로그램의 이해를 통해 인간에 의한 자동화된 툴을 사용한 분석, 또는 코드 검토에 적용된다. 소프트웨어 조사와 소프트웨어 검토는 후자의 경우에 사용된다.
