module.exports = {
  themeConfig: {
    nav: [
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
