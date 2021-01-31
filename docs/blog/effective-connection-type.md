---
sidebar: auto
title: Effective Connection Type 정리
---
## 글의 목적
Effective connection type을 파악하고, 네트워크 성능 기준을 파악한다.

## Effective connection type이 무엇인가?
측정된 네트워크 성능을 나타낸다. WiFi나 유선 연결을 해도 네트워크 성능을 측정해 3G와 같은 성능 결과를 표시한다.

### 이 값을 어떻게 조회할 수 있을까?
`navigator.connection.effectiveType`로 조회할 수 있다.

### 네트워크 성능 결과는 어떤 항목들이 있나?
slow-2g, 2g, 3g, 4g와 같은 항목들이 있다.

#### slow-2g는 어떤 기준으로 성능을 측정할까?
- 최소 RTT: 2000ms
- 최대 Downlink: 50Kbps
- 텍스트 전용 페이지와 같은 소규모 전송에 적합하다.

#### 2g는 어떤 기준으로 성능을 측정할까?
- 최소 RTT: 1400ms
- 최대 Downlink: 70Kbps
- 작은 이미지 전송에 적합하다.

#### 3g는 어떤 기준으로 성능을 측정할까?
- 최소 RTT: 270ms
- 최대 Downlink: 700Kbps
- 고해상도 이미지, 오디오 및 SD 비디오와 같은 큰 리소스 전송에 적합하다.

#### 4g는 어떤 기준으로 성능을 측정할까?
- 최소 RTT: 0ms
- 최대 Downlink: ∞
- HD 비디오, 실시간 비디오에 적합하다.

### RTT란 무엇인가?
- Round Trip Time의 약자로 왕복 시간이라 한다.
- 네트워크 시작 지점에서 패킷이 타겟으로 전송되는 데 걸리는 시간과 해당 패킷의 승인이 네트워크 시작 지점에 다시 전송되는 시간을 의미한다.

### Downlink란 무엇인가?
- 기지국에서 단말기 방향의 링크다.

## 출처
- https://developer.mozilla.org/en-US/docs/Glossary/Effective_connection_type
- https://developer.mozilla.org/en-US/docs/Glossary/Round_Trip_Time_(RTT)
