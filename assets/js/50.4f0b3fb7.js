(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{327:function(t,e,s){"use strict";s.r(e);var a=s(28),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"nuxt-v2-0에서-v2-11로-마이그레이션"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nuxt-v2-0에서-v2-11로-마이그레이션"}},[t._v("#")]),t._v(" Nuxt v2.0에서 v2.11로 마이그레이션")]),t._v(" "),s("h3",{attrs:{id:"글의-목적"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#글의-목적"}},[t._v("#")]),t._v(" 글의 목적")]),t._v(" "),s("p",[t._v("트위터에서 Nuxt가 TypeScript를 공식적으로 지원함을 알게 되었었다. "),s("a",{attrs:{href:"https://github.com/nuxt/nuxt.js/releases/tag/v2.9.0",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nuxt v2.9.0"),s("OutboundLink")],1),t._v(" 부터 TypeScript에 대한 공식적인 가이드와 마이그레이션 가이드를 알렸다.")]),t._v(" "),s("p",[t._v("8월초 프로젝트를 셋업하는 당시는 공식적인 가이드를 제공하지 않았는 데, 프로젝트 셋업 후 공식 버전이 릴리즈 되었다. 이 포스트는 프로젝트 중간에 2.11.0으로 마이그레이션 한 내용에 대한 정리이다.")]),t._v(" "),s("h3",{attrs:{id:"목차"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#목차"}},[t._v("#")]),t._v(" 목차")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%ED%8C%8C%EC%9D%BC%EB%B3%84-%EC%97%85%EA%B7%B8%EB%A0%88%EC%9D%B4%EB%93%9C-%EB%82%B4%EC%97%AD"}},[t._v("파일별 업그레이드 내역")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%EB%A7%88%EC%9D%B4%EA%B7%B8%EB%A0%88%EC%9D%B4%EC%85%98-%EA%B3%BC%EC%A0%95"}},[t._v("마이그레이션 과정")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%EB%A7%88%EC%9D%B4%EA%B7%B8%EB%A0%88%EC%9D%B4%EC%85%98-%EC%8B%9C-%EB%B0%9C%EC%83%9D%ED%95%9C-%EC%9D%B4%EC%8A%88"}},[t._v("마이그레이션 시 발생한 이슈")])])]),t._v(" "),s("h3",{attrs:{id:"파일별-업그레이드-내역"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#파일별-업그레이드-내역"}},[t._v("#")]),t._v(" 파일별 업그레이드 내역")]),t._v(" "),s("h4",{attrs:{id:"nuxt-config-ts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nuxt-config-ts"}},[t._v("#")]),t._v(" nuxt.config.ts")]),t._v(" "),s("div",{staticClass:"language-diff extra-class"},[s("pre",{pre:!0,attrs:{class:"language-diff"}},[s("code",[s("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[t._v("- import NuxtConfiguration from '@nuxt/config'\n")]),s("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[t._v("+ import { Configuration } from '@nuxt/types'\n")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[t._v("- const config: NuxtConfiguration = {\n")]),s("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[t._v("+ const config: Configuration = {\n")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[t._v("-   devModules: [\n-     // Doc: https://github.com/nuxt-community/eslint-module\n-     '@nuxtjs/eslint-module'\n-   ],\n")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[t._v("+   buildModules: [\n+     [\n+       '@nuxt/typescript-build',\n+       {\n+         typeCheck: true,\n+         ignoreNotFoundWarnings: true\n+       }\n+     ]\n+   ],\n")])])])]),s("h4",{attrs:{id:"package-json"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#package-json"}},[t._v("#")]),t._v(" package.json")]),t._v(" "),s("div",{staticClass:"language-diff extra-class"},[s("pre",{pre:!0,attrs:{class:"language-diff"}},[s("code",[s("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[t._v('-    "dev": "nuxt",\n-    "build": "nuxt build",\n-    "generate": "nuxt generate",\n-    "start": "nuxt start",\n')]),s("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[t._v('+    "dev": "nuxt-ts --spa",\n+    "build": "nuxt-ts build --spa",\n+    "generate": "nuxt-ts generate",\n+    "start": "nuxt-ts start",\n')]),t._v('"dependencies": {\n'),s("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[t._v('+    "@nuxt/typescript-runtime": "^0.3.3",\n')]),s("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[t._v('-    "nuxt": "^2.0.0",\n')]),s("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[t._v('+    "nuxt": "^2.11.0",\n')]),t._v('"devDependencies": {\n'),s("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[t._v('-    "@nuxt/typescript": "^2.8.1",\n')]),s("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[t._v('+    "@nuxt/typescript-build": "^0.5.2",\n')])])])]),s("h4",{attrs:{id:"tsconfig-json"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tsconfig-json"}},[t._v("#")]),t._v(" tsconfig.json")]),t._v(" "),s("div",{staticClass:"language-diff extra-class"},[s("pre",{pre:!0,attrs:{class:"language-diff"}},[s("code",[s("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[t._v('-  "@nuxt/vue-app",\n-  "@nuxt/config"\n')]),s("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[t._v('+  "@nuxt/types"\n')])])])]),s("h4",{attrs:{id:"middleware"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#middleware"}},[t._v("#")]),t._v(" middleware")]),t._v(" "),s("div",{staticClass:"language-diff extra-class"},[s("pre",{pre:!0,attrs:{class:"language-diff"}},[s("code",[s("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[t._v("- import { Middleware } from '@nuxt/vue-app'\n")]),s("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[t._v("+ import { Middleware } from '@nuxt/types'\n")])])])]),s("h3",{attrs:{id:"마이그레이션-과정"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#마이그레이션-과정"}},[t._v("#")]),t._v(" 마이그레이션 과정")]),t._v(" "),s("p",[t._v("마이그레이션은 3단계로 진행했다. TypeScript를 공식지원하는 버전인 2.9.x의 이전과 다음 버전을 구분했다.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("1. 2.0.0 => 2.8.1\n2. 2.8.1 => 2.9.2\n3. 2.9.2 => 2.11.0\n")])])]),s("p",[t._v("각 버전의 의미는 다음과 같다.")]),t._v(" "),s("ul",[s("li",[t._v("2.0.0: 현재 버전")]),t._v(" "),s("li",[t._v("2.8.1: TypeScript 공식지원 버전의 바로 "),s("strong",[t._v("이전 버전")])]),t._v(" "),s("li",[t._v("2.9.2: TypeScript 공식지원 시작 버전(2.9.x) 중 가장 높은 버전")]),t._v(" "),s("li",[t._v("2.11.0: 가장 최신 버전")])]),t._v(" "),s("h3",{attrs:{id:"마이그레이션-시-발생한-이슈"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#마이그레이션-시-발생한-이슈"}},[t._v("#")]),t._v(" 마이그레이션 시 발생한 이슈")]),t._v(" "),s("p",[t._v("마이그레이션 시 발생한 이슈 "),s("code",[t._v("2.8.1")]),t._v(" => "),s("code",[t._v("2.9.2")]),t._v("에서 버전 업그레이드 후 발생한 이슈라고 볼 수 있다. 이외 다른 스팩에서는 이슈없이 바로 버전 업그레이드가 진행되었다.")]),t._v(" "),s("h4",{attrs:{id:"server-종료-되는-현상-해결"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#server-종료-되는-현상-해결"}},[t._v("#")]),t._v(" Server 종료 되는 현상 해결")]),t._v(" "),s("p",[s("code",[t._v("2.8.1")]),t._v(" => "),s("code",[t._v("2.9.2")]),t._v(" 버전 업그레이드 후 SPA 모드는 커멘드 옵션으로 변경되었다. 개발 단계 서버 실행 시, "),s("code",[t._v("nuxt --spa")]),t._v("로 실행해야 한다.")]),t._v(" "),s("h4",{attrs:{id:"scrollbehavior"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scrollbehavior"}},[t._v("#")]),t._v(" scrollBehavior")]),t._v(" "),s("p",[t._v("nuxt 2.9.x 부터 app/router.scrollBehavior.js로 처리")]),t._v(" "),s("h4",{attrs:{id:"decorator에러-발생"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#decorator에러-발생"}},[t._v("#")]),t._v(" Decorator에러 발생")]),t._v(" "),s("p",[t._v("nuxt.config.ts를 정상적으로 사용하기 위해서는 "),s("code",[t._v("@nuxt/typescript-runtime")]),t._v(" 모듈을 설치해야 한다.\nnuxt.config.ts에는 TypeScript를 사용하도록 설정하는 파일이 있다. 그렇기 때문에 Runtime 설정도 필요하다.")]),t._v(" "),s("p",[t._v("설치 후에는 "),s("code",[t._v("scripts")]),t._v("에 "),s("code",[t._v("nuxt")]),t._v("로 사용했던 명령어를 "),s("code",[t._v("nuxt-ts")]),t._v("로 변경이 필요하다.")]),t._v(" "),s("h3",{attrs:{id:"끄읕"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#끄읕"}},[t._v("#")]),t._v(" 끄읕")]),t._v(" "),s("p",[t._v("사실 Nuxt는 2.11.0으로 업그레이드한 이유는 단순히 마이그레이션의 목적이 아니였다. "),s("a",{attrs:{href:"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("TypeScript 3.7"),s("OutboundLink")],1),t._v("부터 "),s("a",{attrs:{href:"https://github.com/tc39/proposal-optional-chaining",target:"_blank",rel:"noopener noreferrer"}},[t._v("Optional Chaining"),s("OutboundLink")],1),t._v(" 스팩이 추가되었는 데, 객체의 프로퍼티 접근 관련해서 안전하고 가독성 좋은 방안을 찾고 있었던 시기였다. 결론적으로 Optional Chaining를 사용하기 위해서 버전 업그레이드에 대한 연쇄적으로 찾아본 결과 Nuxt를 최신 버전으로 업그레이드하게 된 것이다.")])])}),[],!1,null,null,null);e.default=n.exports}}]);