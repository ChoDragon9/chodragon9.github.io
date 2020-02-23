module.exports = {
  title: 'ChoDragon9',
  themeConfig: {
    nav: [
      {
        text: '객체지향',
        items: [
          { text: '객체 정리', link: '/oop/object/' },
          { text: 'produce 구현해보기 - OOP 버전', link: '/oop/produce-oop/' }
        ]
      },
      {
        text: '함수형',
        items: [
          { text: '함수형 프로그래밍 정리', link: '/fp/functional/' },
          { text: '함수형 프로그래밍 정리2', link: '/fp/functional2/' },
          { text: 'produce 구현해보기', link: '/fp/produce/' },
          { text: 'produce 구현해보기 - 불변성편', link: '/fp/produce-immutable/' },
        ]
      },
      {
        text: 'Javascript',
        items: [
          { text: '[ECMAScript] ES6 Overview', link: '/javascript/es6/' },
          { text: 'this, this is magic.', link: '/javascript/this/' },
          { text: '콜백 사용 시점', link: '/javascript/callback/' },
          { text: '안전한 체이닝을 위한 safeChain', link: '/javascript/safe-chain/' },
          { text: 'async await 정리', link: '/javascript/async-await-case/' },
          { text: '옵져버 매커니즘', link: '/javascript/observation-mechanism/' },
          { text: '코루틴을 사용한 지연 평가', link: '/javascript/call-stack-and-coroutine/' },
          { text: '[손에 잡히는 정규표현식] 역참조/전방탐색/후방탐색', link: '/javascript/regexp-book-backref/' },
          { text: 'Promise 정리', link: '/javascript/promise/' },
        ]
      },
      {
        text: 'Angular',
        items: [
          { text: 'RxJs 코드리뷰 사례', link: '/angular/rxjs-codereview/' },
          { text: 'Angular의 강력함과 아쉬운점', link: '/angular/angular/' }
        ]
      },
      {
        text: 'Vue',
        items: [
          { text: 'Nuxt에서 TypeScript로 개발하기', link: '/vue/nuxt-ts/' },
          { text: 'Nuxt v2.0에서 v2.11로 마이그레이션', link: '/vue/nuxt-migration/' },
        ]
      },
      {
        text: 'SML',
        items: [
          { text: '기초', link: '/sml/sml-basic/' },
          { text: '빌트인 자료형', link: '/sml/sml-builtin-datatype/' },
          { text: '자료형 정의', link: '/sml/sml-datatype/' },
          { text: '예외처리', link: '/sml/sml-exception/' },
          { text: '함수', link: '/sml/sml-function/' },
          { text: '고차함수', link: '/sml/sml-higher-order-function/' },
          { text: 'infix 정의', link: '/sml/sml-infix/' },
          { text: '모듈 시스템', link: '/sml/sml-module/' },
        ]
      },
      {
        text: '패턴',
        items: [
          { text: 'MVC', link: '/pattern/mvc/' },
          { text: 'MVVM', link: '/pattern/mvvm/' },
          { text: 'GoF 디자인 패턴 정리', link: '/pattern/gof-design-pattern-summary/' },
          { text: 'GoF 디자인 패턴 | 구조패턴', link: '/pattern/design-pattern-structural/' },
          { text: 'GoF 디자인 패턴 | 생성패턴', link: '/pattern/design-pattern-creational/' },
          { text: 'GoF 디자인 패턴 | 행동패턴', link: '/pattern/design-pattern-behavioral/' },
        ]
      },
      {
        text: '관리',
        items: [
          { text: '개발 일정산정', link: '/management/estimation/' },
          { text: '배포 어디까지 알고 있나요?', link: '/management/release/' },
          { text: '효율적인 회의를 위한 퍼실리테이션', link: '/management/facilitation-for-meeting/' },
          { text: '위험상황을 대비하는 위험관리', link: '/management/preventive-maintenance/' },
          { text: '형상관리 전략정리', link: '/management/git-scm-experience/' },
        ]
      },
      {
        text: '리팩토링',
        items: [
          { text: '[리펙토링] 구조 리펙토링 정리', link: '/refactoring/structure-refactoring/' },
          { text: '레거시 코드에서 이해하기 쉬운코드로 리팩토링', link: '/refactoring/legacy-code-to-easy-code/' },
          { text: '레거시 코드에서 이해하기 쉬운코드로 리팩토링 2', link: '/refactoring/legacy-code-to-easy-code-2/' },
          { text: '리펙토링 정의와 결과', link: '/refactoring/refactoring-meaning-and-result/' },
        ]
      },
    ]
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-135042351-1'
      }
    ]
  ]
}
