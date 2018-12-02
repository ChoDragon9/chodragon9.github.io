---
layout: post
title:  "MVC, MVP, MVVM 정리"
date:   2018-12-02
description: MVC, MVP, MVVM 정리 문서입니다. 
tags: [pattern]
---

### MVC
- MVC의 기본 목적은 사용자의 멘탈모델과 컴퓨터에 존재하는 디지털 모델 간의 차이를 연결하는 것이다. 
- 이상적인 MVC 솔루션은 사용자가 도메인 정보를 직접 보고 조작하는 착각을 지원합니다.

![]({{ '/assets/img/diagram/mvc.svg' | prepend: site.baseurl }})

### MVP
- 스몰토크의 프로그래밍 모델인 MVC는 세 가지 핵심 추상화를 사용한다. 모델은 데이터, 뷰는 화면에 그려지는 방법, 컨트롤러는 사용자 제스처 및 이벤트
- 텔리전트의 개방형 프로그래밍 모델은 모델과 뷰-컨트롤러 간의 분리를 공식화한다. 모델은 데이터 관리와 뷰-모델은 사용자 인터페이스라는 두 가지 기본 개념을 세분화합니다.
- 데이터 관리를 세분화하여 Model/Selection/Command로 분리합니다.
  - Model : 순수한 데이터
  - Selection : 데이터 선택
  - Command : 데이터 변경
- 사용자 인터페이스을 세분화하여 View/Interator/Presenter로 분리합니다.
  - View : 데이터 표시
  - Interator : 데이터 변경 사항 매핑
  - Presenter : 데이터 변경 사항과 데이터 변경 요청을 매핑
- Selection/Command/Interator를 추상화하지 않고 사용해도 되지만 추상화하면 이점이 있다.