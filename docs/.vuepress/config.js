module.exports = {
  themeConfig: {
    nav: [
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
      }
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
