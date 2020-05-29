(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{339:function(t,s,a){"use strict";a.r(s);var n=a(28),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"손에-잡히는-정규표현식-역참조-전방탐색-후방탐색"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#손에-잡히는-정규표현식-역참조-전방탐색-후방탐색"}},[t._v("#")]),t._v(" [손에 잡히는 정규표현식] 역참조/전방탐색/후방탐색")]),t._v(" "),a("h3",{attrs:{id:"_8장-역참조-사용하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8장-역참조-사용하기"}},[t._v("#")]),t._v(" 8장 역참조 사용하기")]),t._v(" "),a("p",[t._v("역참조는 정규 표현식 패턴으로, 앞서 일치한 부분을 다시 가리킵니다.")]),t._v(" "),a("h4",{attrs:{id:"검색"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#검색"}},[t._v("#")]),t._v(" 검색")]),t._v(" "),a("p",[t._v("시작태그와 종료태그를 찾을 때 역참조를 사용하면 유용합니다.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<body>\n<h1>Welcome to my Website</h1>\n<h2>ColdFusion</h1>\n<H3>Wireless</h3>\n</body>")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/<[hH][1-6]>.*?<\\/[hH][1-6]>/g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("시작태그와 종료태그가 다른이름인데도 일치되어 검색되었습니다. 하지만 종료태그가 다른 태그를 찾는 것은 의도와 다를 것입니다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('[\n  "<h1>Welcome to my Website</h1>",\n  "<h2>ColdFusion</h1>",\n  "<H3>Wireless</h3>"\n]\n')])])]),a("p",[t._v("역참조를 사용하면 하위표현식에 일치한 부분을 찾아 사용할 수 있습니다.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\n<body>\n<h1>Welcome to my Website</h1>\n<h2>ColdFusion</h1>\n<H3>Wireless</h3>\n</body>\n")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/<([hH][1-6])>.*?<\\/\\1>/g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// ["<h1>Welcome to my Website</h1>"]')]),t._v("\n")])])]),a("h4",{attrs:{id:"치환"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#치환"}},[t._v("#")]),t._v(" 치환")]),t._v(" "),a("p",[t._v("치환을 할 때도 역참조를 사용할 수 있습니다.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("Hello, ben@forta.com is my email address.")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/(\\w+\\@\\w+\\.\\w+)/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<a href=\"mailto:$1\">$1</a>'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "Hello, <a href="mailto:ben@forta.com">ben@forta.com</a> is my email address."')]),t._v("\n")])])]),a("h3",{attrs:{id:"_9장-전방탐색과-후방탐색"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9장-전방탐색과-후방탐색"}},[t._v("#")]),t._v(" 9장 전방탐색과 후방탐색")]),t._v(" "),a("h4",{attrs:{id:"전방탐색-앞으로-찾기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#전방탐색-앞으로-찾기"}},[t._v("#")]),t._v(" 전방탐색 - 앞으로 찾기")]),t._v(" "),a("p",[t._v("전방탐색(lookahead) 패턴은 일치 영역을 발견해도 그 값을 반환하지 않는 패턴을 말합니다.\n전방탐색은 실제로는 하위 표현식이며, 하위 표현식과 같은 형식으로 작성합니다.\n전방탐색 패턴의 구문은 ?=로 시작하고 등호(=) 다음에 일치할 텍스트가 오는 하위 표현식힙니다.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\nhttp://www.google.com\nhttps://www.naver.com\nftp://file.net\n")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/.+(?=:)/g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ['http', 'https', 'ftp']")]),t._v("\n")])])]),a("h4",{attrs:{id:"후방탐색-뒤로-찾기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#후방탐색-뒤로-찾기"}},[t._v("#")]),t._v(" 후방탐색 - 뒤로 찾기")]),t._v(" "),a("p",[t._v("후방탐색(lookbehind) 패턴의 구문은 ?<=로 시작하고 등호(=) 다음에 일치할 텍스트가 오는 하위 표현식입니다.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\nApple : $3.45\nOrange : $2.63\nBanana : $6.33\n")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/(?<=\\$)[0-9.]+/g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// ["3.45", "2.63", "6.33"]')]),t._v("\n")])])]),a("h4",{attrs:{id:"전방탐색과-후방탐색-함께-사용하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#전방탐색과-후방탐색-함께-사용하기"}},[t._v("#")]),t._v(" 전방탐색과 후방탐색 함께 사용하기")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<body>\n<h1>Welcome to my Website</h1>\n<h2>ColdFusion</h2>\n<h3>Wireless</h3>\n</body>")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/(?<=\\<h1\\>).*?(?=\\<\\/h1\\>)/g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// ["Welcome to my Website"]')]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);