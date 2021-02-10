---
title: Web Vitals 정리
---
## 글의 목적
Web Vitals 이해하기!

#### 참고자료
- https://web.dev/vitals/

### Web Vitals은 무엇인가?
Web Vitals는 좋은 UX를 제공하기 위해 Google에서 제안하는 성능 품질 지침이다. Google에서 제공한 도구와 측정 항목은 숙련도에 따라서 UX 품질을 파악하기 힘들다는 사실을 발견했다. 그래서 Web Vitals은 환경을 단순화해서 품질 개선에 도움이 되는 것에 초점을 맞췄다.

### Web Vitals에서 어떤 성능 품질 지표를 가이드 할까?
로딩 시간, 상호작용 시간, 시각적 변화량 항목에 대한 좋음/나쁨을 판단할 수 있는 숫자 범위를 가이드한다.

### 로딩 시간 측정은 구체적으로 어떤 항목을 측정할까?
- [Time to First Byte (TTFB)](https://web.dev/time-to-first-byte/)
- [First Contentful Paint (FCP)](https://web.dev/fcp/)
- [Largest Contentful Paint (LCP)](https://web.dev/lcp/)

#### 로딩 시간에 따라 사용자에게 어떤 영향을 미칠까?
로딩 시간이 빠르게 될 수록 좋은 UX를 제공할 수 있다. 왜냐하면 [리서치 결과](https://www.nngroup.com/articles/response-times-3-important-limits/)를 봤을 때, 로딩 시간이 느릴 수록 사용자가 이탈할 수 있다는 결과가 있기 때문이다.

### 상호작용 시간 측정은 구체적으로 어떤 항목을 측정할까?
- [Total Blocking Time (TBT)](https://web.dev/tbt/)
- [Time to Interactive (TTI)](https://web.dev/tti/)
- [First Input Delay (FID)](https://web.dev/fid/)

#### 상호작용 시간에 따라 사용자에게 어떤 영향을 미칠까?
상호작용 시간이 빠를 수록 사용자에게 좋은 UX를 제공할 수 있다. 왜냐하면 [리서치 결과](https://www.nngroup.com/articles/response-times-3-important-limits/)를 봤을 때, 상호작용 시간이 느릴 수록 사용자는 직접 상호작용한다는 느낌을 잃게된다는 결과가 있기 때문이다.

### 시각정 변화량 측정은 구체적으로 어떤 항목을 측정할까?
- [Cumulative Layout Shift (CLS)](https://web.dev/cls/)

#### 시각적 변화량에 따라 사용자에게 어떤 영향을 미칠까?
시각적 변화량이 적을 수록 좋은 UX를 제공할 수 있다. 왜냐하면 상호작용을 할 때, 시각적 변화량이 높으면 의도하지 않은 위치를 클릭과 페이지 이동과 같은 부정적인 영향을 미칠 수 있기 때문이다.

### Core Web Vitals는 무엇인가?
성능 측정 항목 중 주요 지표인 [LCP](https://web.dev/lcp/), [FID](https://web.dev/fid/), [CLS](https://web.dev/cls/)를 의미한다.

#### LCP의 좋음/나쁨을 판단하는 구간은 어떻게 되는가?
- 좋음: 2.5초 미만
- 나쁨: 4초 초과

#### FID의 좋음/나쁨을 판단하는 구간은 어떻게 되는가?
- 좋음: 100ms 미만
- 나쁨: 300ms 초과

#### CLS의 좋음/나쁨을 판단하는 구간은 어떻게 되는가?
- 좋음: 0.1 미만
- 나쁨: 0.25 초과
