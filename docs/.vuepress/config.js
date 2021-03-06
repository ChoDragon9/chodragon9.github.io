module.exports = {
  title: 'ChoDragon9',
  themeConfig: {
    nav: [
      {
        text: '성능',
        items: [
          {text: 'RAIL 정리', link: '/blog/rail/'},
          {text: 'Web Vitals 정리', link: '/blog/web-vitals/'},
          {text: 'Effective Connection Type 정리', link: '/blog/effective-connection-type/'},
        ]
      },
      {
        text: '설계',
        items: [
          {
            text: '좋은코드',
            items: [
              {text: '이해하기 쉬운 코드 작성방법 정리', link: '/blog/easy-code/'},
              {text: '코드의 위치를 정하는 기준', link: '/blog/code-position/'},
              {text: '재사용 가능한 코드 개발', link: '/blog/reusable-code/'},
              {text: '선언형으로 대체 가능한 문법들 정리', link: '/blog/declarative-function/'},
              {text: '강제성, 단일화 그리고 날짜 헬퍼 개발', link: '/blog/date-helper-development/'},
            ]
          },
          {
            text: '리팩토링',
            items: [
              {text: '구조 리펙토링 정리', link: '/blog/structure-refactoring/'},
              {text: '레거시 코드에서 이해하기 쉬운코드로 리팩토링', link: '/blog/legacy-code-to-easy-code/'},
              {text: '레거시 코드에서 이해하기 쉬운코드로 리팩토링 2', link: '/blog/legacy-code-to-easy-code-2/'},
              {text: '리펙토링 정의와 결과', link: '/blog/refactoring-meaning-and-result/'},
            ]
          },
          {
            text: '기타',
            items: [
              {text: '설계 방법론', link: '/blog/design-methodology/'},
            ]
          },
        ]
      },
      {
        text: '패턴',
        items: [
          {
            text: '패턴 비교',
            items: [
              {text: 'MV*/Flux 정리', link: '/blog/mv_flux/'},
              {text: 'React Hook/Vue Composition/Recoil 정리', link: '/blog/react_hook_vue_composition_recoil/'},
            ]
          },
          {
            text: 'Model-View 패턴',
            items: [
              {text: 'MVC 용어정의 1979/12/10', link: '/blog/mvc-word-1979-12-10/'},
              // {text: 'MVC Its Past and Present', link: '/blog/mvc-its-past-and-present/'},
              {text: 'MVC XEROX PARC', link: '/blog/mvc-xerox-parc/'},
              {text: 'MVP The Taligent Programming Model', link: '/blog/mvp-the-taligent-programming-model/'},
              {text: 'Introduction to MVVM for WPF', link: '/blog/introduction-to-mvvm-for-wpf/'},
              {text: 'Flux', link: '/blog/flux/'},
              {text: 'Vuex', link: '/blog/vuex/'},
              {text: 'MVC 정리', link: '/blog/mvc/'},
              {text: 'MVVM 정리', link: '/blog/mvvm/'},
            ]
          }
        ]
      },
      {
        text: '패러다임',
        items: [
          {
            text: '명령형',
            items: [
              {text: '명령형 프로그래밍 사고로 전환하기', link: '/blog/back-to-the-imperative/'},
            ]
          },
          {
            text: '객체지향',
            items: [
              {text: '객체 정리', link: '/blog/object/'},
              {text: 'immer 구현해보기 - OOP 버전', link: '/blog/produce-oop/'}
            ]
          },
          {
            text: '함수형',
            items: [
              {text: '함수형 프로그래밍 정리', link: '/blog/functional/'},
              {text: '함수형 프로그래밍 정리2', link: '/blog/functional2/'},
              {text: 'immer 구현해보기', link: '/blog/produce/'},
              {text: 'immer 구현해보기 - 불변성편', link: '/blog/produce-immutable/'},
            ]
          },
        ]
      },
      {
        text: '언어',
        items: [
          {
            text: '컴파일러',
            items: [
              {text: '컴파일러 이론 정리', link: '/blog/compiler-theory/'},
              {text: '탬플릿 컴파일러 만들기', link: '/blog/template-compiler/'},
              {text: 'Vue 컴파일러', link: '/blog/vue-compiler/'},
            ]
          },
          {
            text: 'TypeScript',
            items: [
              {text: '인하우스 서비스 구축하며 사용했던 TypeScript 문법 정리', link: '/blog/typescript-from-inhouse-service/'},
            ]
          },
          {
            text: 'Javascript',
            items: [
              {text: 'ES6 Overview', link: '/blog/es6/'},
              {text: 'this, this is magic.', link: '/blog/this/'},
              {text: 'Promise 정리', link: '/blog/promise/'},
              {text: 'async await 정리', link: '/blog/async-await-case/'},
              {text: '코루틴을 사용한 지연 평가', link: '/blog/call-stack-and-coroutine/'},
            ]
          },
          {
            text: 'SML',
            items: [
              {text: '기초', link: '/blog/sml-basic/'},
              {text: '빌트인 자료형', link: '/blog/sml-builtin-datatype/'},
              {text: '자료형 정의', link: '/blog/sml-datatype/'},
              {text: '예외처리', link: '/blog/sml-exception/'},
              {text: '함수', link: '/blog/sml-function/'},
              {text: '고차함수', link: '/blog/sml-higher-order-function/'},
              {text: 'infix 정의', link: '/blog/sml-infix/'},
              {text: '모듈 시스템', link: '/blog/sml-module/'},
            ]
          },
        ]
      },
      {
        text: '프레임워크',
        items: [
          {
            text: 'Vue Composition API',
            items: [
              {text: 'RFC 번역', link: '/blog/composition-api-rfc/'},
              {text: 'RFC 요약 및 자료 정리', link: '/blog/composition-api-rfc-summary/'},
              {text: 'RFC 릴리즈 노트 정리', link: '/blog/composition-api-rfc-release-notes/'},
              {text: 'Composition API 경험 정리', link: '/blog/composition-api-rfc-migration/'},
              {text: 'Vuex 적용 경험 정리', link: '/blog/vuex-in-composition-api/'},
            ]
          },
          {
            text: 'Vue',
            items: [
              {text: 'Vue ESLint 설정', link: '/blog/vue-eslint/'},
              {text: 'Nuxt v2.11 기반 nuxt/typescript 환경 세팅', link: '/blog/nuxt-2-11-typescript/'},
              {text: 'Nuxt v2.0에서 TypeScript로 개발하기', link: '/blog/nuxt-ts/'},
              {text: 'Nuxt v2.0에서 v2.11로 마이그레이션', link: '/blog/nuxt-migration/'},
            ]
          },
          {
            text: 'Angular',
            items: [
              {text: 'RxJs 코드리뷰 사례', link: '/blog/rxjs-codereview/'},
              {text: 'Angular의 강력함과 아쉬운점', link: '/blog/angular/'}
            ]
          },
          {
            text: 'React',
            items: [
              {text: '코드리뷰를 위한 React 컨벤션', link: '/blog/react-convention-for-codereview/'},
            ]
          },
        ]
      },
      {
        text: '정리',
        items: [
          {
            text: '경험',
            items: [
              {text: '사내 신규 서비스 경험기', link: '/blog/2019-new-service-building/'},
              {text: 'CORS와 HTTP Cookie', link: '/blog/cors-and-http-cookie/'},
              {text: '에러 처리 정리', link: '/blog/how-to-catch-error/'},
              {text: '추상화 정리', link: '/blog/abstract/'},
              {text: '분기를 작성하는 방법 n가지', link: '/blog/branch-n-case/'},
              {text: '콜백 사용 시점', link: '/blog/callback/'},
              {text: '경우에 따른 clone 함수', link: '/blog/clone-function/'},
              {text: '안전한 체이닝을 위한 safeChain', link: '/blog/safe-chain/'},
              {text: '옵져버 매커니즘', link: '/blog/observation-mechanism/'},
            ]
          },
          {
            text: '프로젝트 관리',
            items: [
              {text: '개발 일정산정', link: '/blog/estimation/'},
              {text: '배포 어디까지 알고 있나요?', link: '/blog/release/'},
              {text: '효율적인 회의를 위한 퍼실리테이션', link: '/blog/facilitation-for-meeting/'},
              {text: '위험상황을 대비하는 위험관리', link: '/blog/preventive-maintenance/'},
              {text: '형상관리 전략정리', link: '/blog/git-scm-experience/'},
            ]
          },
          {
            text: '도서',
            items: [
              {text: '프로그래밍의 정석 도서 정리', link: '/blog/programming-standards/'},
              {text: '소프트웨어의 핵심 비기능 요구사항', link: '/blog/non-functional-requirement/'},
              {text: '[손에 잡히는 정규표현식] 역참조/전방탐색/후방탐색', link: '/blog/regexp-book-backref/'},
            ]
          },
        ]
      },
      {text: 'About', link: '/about'},
      {text: 'Github', link: 'https://github.com/ChoDragon9', target: '_blank'}
    ]
  },
  head: [
    ['meta', {name: 'google-site-verification', content: 'yX6dHIw5DyDCd9iNbZSo2w8VjnED68OLdw6zu_Rm554'}]
  ],
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-135042351-1'
      }
    ],
    [
      'vuepress-plugin-clean-urls',
      {
        normalSuffix: '/',
        indexSuffix: '/',
        notFoundPath: '/404.html',
      },
    ],
  ]
}
