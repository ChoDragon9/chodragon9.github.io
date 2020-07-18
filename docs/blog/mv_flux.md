---
title: MV*/Flux 정리
sidebar: auto
---

## MVC
- 제작시기
  - 초안: 1979.12.10
  - 마지막: 2003.08.20
- 제작회사 및 관련언어
  - XEROX PARC
  - Smalltalk-80
- 제작목적
  - MVC의 기본 목적은 사용자의 멘탈모델과 컴퓨터에 존재하는 디지털 모델 간의 차이를 연결하는 것이다. 
  - 이상적인 MVC 솔루션은 사용자가 도메인 정보를 직접 보고 조작하는 착각을 지원한다.
- 특징
  - MVC는 Model-View-Controller로 구성된다.
  - Model은 도메인 데이터를 의미하며 순수한 데이터의 역할을 한다.
    - Model은 단일 객체일 수 있고, 어떤 객체의 구조일수 있다.
    - Model의 노드는 같은 수준으로 있어야 한다.
      - 문제 지향 노드(예: 달력 약속)와 구현 세부 정보(예: 단락)를 혼합하는 것은 혼란스럽고 잘못된 형태로 간주한다.
  - Controller는 사용자의 상호작용 담당을 한다.
    - View는 보완해서는 안된다.
  - View는 프레젠테이션을 담당한다.
    - View는 Model에게 필요한 데이터를 질의한다.
    - View는 적절한 메시지를 통해 업데이트를 할 수 있다.
- 출처
  - [The original MVC reports](http://heim.ifi.uio.no/~trygver/2007/MVC_Originals.pdf)
  - [MVC
XEROX PARC 1978-79](http://heim.ifi.uio.no/~trygver/themes/mvc/mvc-index.html)
  - [The Model-View-Controller (MVC) Its Past and Present](http://heim.ifi.uio.no/~trygver/2003/javazone-jaoo/MVC_pattern.pdf)

## MVVM
- 제작시기
  - 초안: 2005.10.08
- 제작회사 및 관련언어
  - Microsoft
  - WPF
- 참조된 패턴
  - MVC
- 제작목적
  - 현대 UI 개발 플랫폼에 맞게 제작
  - HTML 또는 XAML과 같은 선언적 형태로 항상 수행
- 특징
  - Model과 View는 MVC에서 정의된 역할과 동일합니다.
    - Model은 상태저장, 비즈니스 로직, 순수한 데이터입니다.
    - View는 시각적인 요소를 담당합니다.
  - ViewModel는 View가 데이터 바인딩에 사용할 수 있는 Model을 전문화합니다.
    - Model Type을 View Type으로 변환하는 데이터 변환기 역할
    - View가 Model과 상호작용 할 수 있게 하는 역할
    - UI의 재사용 가능한 부분에 대한 추상적 표현
    - Selection과 Commands를 포함
- 출처
  - [Introduction to Model/View/ViewModel pattern for building WPF apps](https://blogs.msdn.microsoft.com/johngossman/2005/10/08/introduction-to-modelviewviewmodel-pattern-for-building-wpf-apps/)

## MVP
- 제작시기
  - 초안: 2011.06
- 제작회사 및 관련언어
  - Taligent
  - C++, Java
- 참조된 패턴
  - MVC
- 제작목적
  - 기본 MVC 개념을 구성 요소로 분해하고 더욱 세분화하여 프로그래머가 보다 복잡한 애플리케이션을 개발하는 데 도움
  - 광범위한 애플리케이션 및 구성요소 개발 작업을 위한 강력하고 이해하기 쉬운 설계 방법을 제공
  - 여러 클라이언트/서버 및 다중 계층 애플리케이션 아키텍처에 걸쳐 적응
  - 주요 객체 지향 언어 환경에 걸쳐 통합된 개념 프로그래밍 모델을 제공
- 특징
  - 스몰토크의 프로그래밍 모델인 MVC는 세 가지 핵심 추상화를 사용한다. 모델은 데이터, 뷰는 화면에 그려지는 방법, 컨트롤러는 사용자 제스처 및 이벤트
  - 텔리전트의 전반적인 접근 방식 모델은 모델과 뷰-컨트롤러 간의 분리를 공식화한다. 모델은 데이터 관리, 뷰-컨트롤러은 사용자 인터페이스라는 두 가지 기본 개념을 세분화합니다.
  - 이 두 가지 개념은 프로그래머가 다뤄야 하는 가장 기본적인 두 가지 디자인 문제를 담고 있다.
    - 데이터를 어떻게 관리하지?
    - 사용자가 데이터와 어떻게 상호작용하지?
  - 데이터 관리를 세분화하여 Model/Selection/Command로 분리합니다.
    - Model : 캡슐화된 데이터, 읽기 및 쓰기 액세스 방법
    - Selection : 데이터 선택 방법, Model 데이터의 여러 하위 세트를 지정하기 위한 추상화
    - Command : 데이터 변경 방법, Model의 Selection에서 수행할 수 있는 작업을 나타내는 추상화
  - 사용자 인터페이스을 세분화하여 View/Interactor/Presenter로 분리합니다.
    - View : 데이터 표시
    - Interactor : 이벤트에 따른 데이터의 변경 사항 요청
    - Presenter : Interactor에 따른 적절한 Command를 매핑하는 비즈니스 로직
  - 기존의 Controller의 기능이지만 Interactor와 Command를 매핑하는 역할을 고려해서 Presenter라고 했다. 그래서 MVP의 어원이 탄생한다.
- 출처
  - [MVP: Model-View-Presenter The Taligent Programming Model for C++ and Java](https://www.researchgate.net/publication/255616200_MVP_Model-View-Presenter_The_Taligent_Programming_Model_for_C_and_Java_Taligent_Inc)

## Flux
- 제작시기
  - 초안: 2014.04.30 (f8 2014)
- 제작회사 및 관련언어
  - Facebook
  - JavaScript
- 참조된 패턴
  - MVC
- 제작목적
  - 대형 MVC 어플리케이션에서 나타나는 데이터 간의 의존성과 연쇄적인 갱신에서 발생되는 예측하기 힘든 데이터 흐름을 올바르게 다루기 위해
- 특징
  - Actions, Dispatcher, Stores, Views로 구성되며 각 부분들은 단방향으로만 데이터가 흐르게 됨
  - Action은 사용자의 상호작용와 서버 상호작용 등이 될 수 있으며 type 프로퍼티에 역할을 지정
  - Dispatcher는 모든 Action을 받으며, Stores가 콜백들 등록할 수 있음
  - Stores는 데이터와 비즈니스 로직을 담당하고 Views가 변경감시를 할 수 있도록 제공
  - Controller-Views-Views 형태를 이루고, Store에게 데이터를 가져와 View를 갱신
- 출처
  - [facebook/flux](https://facebook.github.io/flux/)
