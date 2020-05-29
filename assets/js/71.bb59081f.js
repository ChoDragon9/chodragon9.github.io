(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{348:function(a,t,s){"use strict";s.r(t);var r=s(28),e=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"sml-standard-ml-함수"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sml-standard-ml-함수"}},[a._v("#")]),a._v(" SML: Standard ML 함수")]),a._v(" "),s("h3",{attrs:{id:"함수-선언"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#함수-선언"}},[a._v("#")]),a._v(" 함수 선언")]),a._v(" "),s("h5",{attrs:{id:"예제코드"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#예제코드"}},[a._v("#")]),a._v(" 예제코드")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("fun add (a, b) = a + b\nval it = add(1, 2);\n")])])]),s("h5",{attrs:{id:"실행결과"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#실행결과"}},[a._v("#")]),a._v(" 실행결과")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("val add = fn : int * int -> int\nval it = 3 : int\n")])])]),s("h3",{attrs:{id:"함수내-조건문"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#함수내-조건문"}},[a._v("#")]),a._v(" 함수내 조건문")]),a._v(" "),s("p",[a._v("긴함수는 가독성을 위해 개행 처리 할 수 있다.")]),a._v(" "),s("h5",{attrs:{id:"예제코드-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#예제코드-2"}},[a._v("#")]),a._v(" 예제코드")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('fun toAlpha (n) =\n  if n = 0\n    then "A"\n  else if n = 1\n   then "B"\n  else "C"\n\nval a = toAlpha(0)\nval b = toAlpha(1)\nval c = toAlpha(2)\n')])])]),s("h5",{attrs:{id:"실행결과-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#실행결과-2"}},[a._v("#")]),a._v(" 실행결과")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('val toAlpha = fn : int -> string\nval a = "A" : string\nval b = "B" : string\nval c = "C" : string\n')])])]),s("h3",{attrs:{id:"재귀"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#재귀"}},[a._v("#")]),a._v(" 재귀")]),a._v(" "),s("h5",{attrs:{id:"예제코드-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#예제코드-3"}},[a._v("#")]),a._v(" 예제코드")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("fun factorial (n) =\n  if n = 0\n    then 1\n  else n * factorial(n - 1)\nval result = factorial(3);\n")])])]),s("h5",{attrs:{id:"실행결과-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#실행결과-3"}},[a._v("#")]),a._v(" 실행결과")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("val factorial = fn : int -> int\nval result = 6 : int\n")])])]),s("h3",{attrs:{id:"함수내-변수-접근"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#함수내-변수-접근"}},[a._v("#")]),a._v(" 함수내 변수 접근")]),a._v(" "),s("p",[a._v("함수내에서는 변수를 변경할 수 없다. 그리고 함수 선언 뒤에 선언된 변수가 있더라도 이전에 할당된 변수를 사용한다. 함수를 선언할 때 해당 변수를 복사해두기 때문이다.")]),a._v(" "),s("h5",{attrs:{id:"예제코드-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#예제코드-4"}},[a._v("#")]),a._v(" 예제코드")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("val x = 2\nfun answer n = n + x\nval x = 1\nval result = answer(1)\n")])])]),s("h5",{attrs:{id:"실행결과-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#실행결과-4"}},[a._v("#")]),a._v(" 실행결과")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("val x = <hidden-value> : int\nval answer = fn : int -> int\nval x = 1 : int\nval result = 3 : int\n")])])]),s("h3",{attrs:{id:"패턴-매칭"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#패턴-매칭"}},[a._v("#")]),a._v(" 패턴 매칭")]),a._v(" "),s("p",[a._v("if 대신 패턴 매칭을 통해 정의할 수 있다.")]),a._v(" "),s("h5",{attrs:{id:"예제코드-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#예제코드-5"}},[a._v("#")]),a._v(" 예제코드")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("fun fibonacci 0 = 0\n  | fibonacci 1 = 1\n  | fibonacci n = fibonacci(n - 1) + fibonacci(n - 2)\n\nval result = fibonacci(5)\n")])])]),s("h5",{attrs:{id:"실행결과-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#실행결과-5"}},[a._v("#")]),a._v(" 실행결과")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("val fibonacci = fn : int -> int\nval result = 5 : int\n")])])]),s("h3",{attrs:{id:"이름있는-튜플을-튜플로-변환하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#이름있는-튜플을-튜플로-변환하기"}},[a._v("#")]),a._v(" 이름있는 튜플을 튜플로 변환하기")]),a._v(" "),s("h5",{attrs:{id:"예제코드-6"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#예제코드-6"}},[a._v("#")]),a._v(" 예제코드")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("fun rgbToTup ({r, g, b}) = (r, g, b)\nval rgb = { r=0.1, g=0.2, b=0.3 }\nval result = rgbToTup(rgb)\n")])])]),s("h5",{attrs:{id:"실행결과-6"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#실행결과-6"}},[a._v("#")]),a._v(" 실행결과")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("val rgbToTup = fn : {b:'a, g:'b, r:'c} -> 'c * 'b * 'a\nval rgb = {b=0.3,g=0.2,r=0.1} : {b:real, g:real, r:real}\nval result = (0.1,0.2,0.3) : real * real * real\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);