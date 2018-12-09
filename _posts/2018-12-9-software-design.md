---
layout: post
title:  "소프트웨어 설계 방법론"
date:   2018-12-09
description: 소프트웨어 설계 방법론 정리합니다.
tags: [design]
---
### 설계 방법론

#### CRC Card(Class-Responsibility-Collaboration Card)
> [CRC Card Demo Generator]({{'/demo/crc/index.html' | prepend: site.baseurl }})

객체 지향 소프트웨어 설계에서 사용되는 브레인 스토밍툴이다. `객체`-`책임`-`협력자`의 약자로
일반적으로 디자인을 시작할 때 어떤 객체가 필요하고 그들이 어떻게 상호 연계할지 여부를 결정하는 데 사용한다.

![]({{ '/assets/img/38777220-5f98e162-40df-11e8-82fc-6c48d00f6127.png' | prepend: site.baseurl }})

#### OMT(Object Modeling Technique)
> [설계 문서 웹서비스](https://www.draw.io/) 

객채 지향 모델 및 설계 방법으로 객체 또는 클래스, 객체의 속성, 메소드 및 관계를 설명한다.
다른 종류의 구성 요소를 위해 클래스를 나타내는 상자를 사용한다.
구성 요소를 연결하는 선별로 구성 요소 간의 연관, 집계 및 상속 관계를 나타낸다.

![]({{ '/assets/img/38777273-34b09796-40e0-11e8-862d-0df7e88fd730.png' | prepend: site.baseurl }})

#### OMSC(Object Modeling Sequence Charts)
메시지 시퀀스 차트는 프로세스나 하드웨어 요소와 같이 동시에 운영되는 개체 사이에서
프로토콜을 설계하고 지정하기 위한 표준 표기법이다. 도메인의 개체들 사이의 신호 흐름을
보여주는 시나리오를 지정합니다.

![]({{ '/assets/img/38777290-84424e12-40e0-11e8-9501-913bb8b19ab1.png' | prepend: site.baseurl }})
