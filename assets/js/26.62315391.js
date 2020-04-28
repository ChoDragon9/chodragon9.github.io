(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{343:function(t,s,a){"use strict";a.r(s);var e=a(28),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[a("code",[t._v("@vue/composition-api")]),t._v("의 릴리즈 노트를 통해 어떤 변경 사항이 생길지 예상하기 위해 정리한 포스트입니다.")])]),t._v(" "),a("h2",{attrs:{id:"v0-4-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v0-4-0"}},[t._v("#")]),t._v(" v0.4.0")]),t._v(" "),a("ul",[a("li",[t._v("[리팩토링] 이름변경 "),a("code",[t._v("createComponent")]),t._v(" => "),a("code",[t._v("defineComponent")])]),t._v(" "),a("li",[t._v("[라이프사이클] "),a("code",[t._v("onUnmounted")]),t._v("의 호출 시점이 "),a("code",[t._v("destroyed")]),t._v("와 "),a("code",[t._v("deactivated")]),t._v(" => "),a("code",[t._v("destroyed")]),t._v("로 변경 "),a("a",{attrs:{href:"https://github.com/vuejs/composition-api/pull/217/files#diff-3749ddba11f730d062a1c8aec308f09cL37",target:"_blank",rel:"noopener noreferrer"}},[t._v("#217"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"v0-3-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v0-3-3"}},[t._v("#")]),t._v(" v0.3.3")]),t._v(" "),a("ul",[a("li",[t._v("[라이프사이클] "),a("code",[t._v("onServerPrefetch")]),t._v(" 추가")]),t._v(" "),a("li",[t._v("[컨텍스트] "),a("code",[t._v("ssrContext")]),t._v(" 추가")]),t._v(" "),a("li",[t._v("[TypeScript] computed type 이슈 해결")])]),t._v(" "),a("h2",{attrs:{id:"v0-3-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v0-3-2"}},[t._v("#")]),t._v(" v0.3.2")]),t._v(" "),a("ul",[a("li",[t._v("[TypeScript] "),a("code",[t._v("props")]),t._v(" 옵션 타입 추론 개선")])]),t._v(" "),a("h2",{attrs:{id:"v0-3-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v0-3-1"}},[t._v("#")]),t._v(" v0.3.1")]),t._v(" "),a("ul",[a("li",[t._v("[Fix] watcher 콜백이 정상적인 시점에 해제 안되는 현상 해결")])]),t._v(" "),a("h2",{attrs:{id:"v0-3-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v0-3-0"}},[t._v("#")]),t._v(" v0.3.0")]),t._v(" "),a("ul",[a("li",[t._v("[TypeScript] TypeScript 타입 정의 개선")]),t._v(" "),a("li",[t._v("[컨텍스트] "),a("code",[t._v("context.slots")]),t._v("가 render전에 사용할 수 없는 현상 해결")])]),t._v(" "),a("h2",{attrs:{id:"v0-2-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v0-2-1"}},[t._v("#")]),t._v(" v0.2.1")]),t._v(" "),a("ul",[a("li",[t._v("[TypeScript] prop 타입을 직접 선언 가능함")])]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" createComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" createElement "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" h "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vue/composition-api'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Props")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  msg"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" MyComponent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" createComponent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Props"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  props"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n     msg"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// required by vue 2 runtime")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("props")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("h")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" props"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ul",[a("li",[t._v("[TypeScript] ref 타입 선언")])]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" dateRef "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ref"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Date"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"v0-2-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v0-2-0"}},[t._v("#")]),t._v(" v0.2.0")]),t._v(" "),a("ul",[a("li",[t._v("[리팩토링] 이름 변경 "),a("code",[t._v("onBeforeDestroy()")]),t._v(" => "),a("code",[t._v("onBeforeUnmount()")])]),t._v(" "),a("li",[t._v("[라이프사이클] "),a("code",[t._v("onCreated()")]),t._v(", "),a("code",[t._v("onDestroyed")]),t._v(" 제거")])]),t._v(" "),a("h2",{attrs:{id:"v0-1-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v0-1-0"}},[t._v("#")]),t._v(" v0.1.0")]),t._v(" "),a("ul",[a("li",[t._v("RFC로 되면서 패키지 이름 변경됨")])])])}),[],!1,null,null,null);s.default=n.exports}}]);