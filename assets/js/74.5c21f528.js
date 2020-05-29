(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{351:function(t,e,a){"use strict";a.r(e);var n=a(28),r=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"sml-standard-meta-language-모듈-시스템"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sml-standard-meta-language-모듈-시스템"}},[t._v("#")]),t._v(" SML: Standard Meta Language 모듈 시스템")]),t._v(" "),a("h3",{attrs:{id:"모듈-시스템"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#모듈-시스템"}},[t._v("#")]),t._v(" 모듈 시스템")]),t._v(" "),a("p",[t._v("SML은 모듈 시스템으로 계층적이고 조직화된 구조를 구축할 수 있다. 논리적으로 관련딘 유형 그리고 값 선언 요소들을 정의할 수 있다. SML의 모듈 시스템은 네임스페이스, 추상 자료형, 구현을 정의할 수 있는 모듈을 제공한다.")]),t._v(" "),a("p",[t._v("SML의 모듈 시스템은 세 가지 주요 구문 구조로 이뤄진다.\n"),a("code",[t._v("structure")]),t._v(", "),a("code",[t._v("signature")]),t._v(" 그리고 "),a("code",[t._v("functor")]),t._v("이다.")]),t._v(" "),a("p",[a("code",[t._v("structure")]),t._v("는 타입, 예외, 값, 서브 "),a("code",[t._v("structure")]),t._v("로 구성된 "),a("strong",[t._v("구현")]),t._v("을 정의하는 모듈이다.")]),t._v(" "),a("p",[a("code",[t._v("signature")]),t._v("는 "),a("code",[t._v("structure")]),t._v("의 "),a("strong",[t._v("타입")]),t._v("을 정의한다. "),a("code",[t._v("structure")]),t._v("에서 제공하는 기능을 모두 "),a("code",[t._v("signature")]),t._v("에 정의한다.")]),t._v(" "),a("p",[a("code",[t._v("functor")]),t._v("는 "),a("strong",[t._v("구현")]),t._v("을 정의하는 "),a("strong",[t._v("함수")]),t._v("이다. "),a("code",[t._v("functor")]),t._v("는 "),a("code",[t._v("signature")]),t._v("의 "),a("code",[t._v("structure")]),t._v("인 하나 이상의 인수를 받아들이고 그 결과로 "),a("code",[t._v("structure")]),t._v("를 생성한다. "),a("code",[t._v("functor")]),t._v("는 일반적인 데이터 구조와 알고리즘을 구현하는데 사용된다.")]),t._v(" "),a("p",[t._v("아래에서 예제를 통해 자세히 알아보자.")]),t._v(" "),a("h3",{attrs:{id:"signature"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#signature"}},[t._v("#")]),t._v(" Signature")]),t._v(" "),a("p",[a("code",[t._v("signature")]),t._v("는 "),a("a",{attrs:{href:"https://www.typescriptlang.org/docs/handbook/interfaces.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("TypeScript의 interface"),a("OutboundLink")],1),t._v("과 유사하게 인터페이스를 정의한다. 약간의 다른 점은 "),a("code",[t._v("namespace")]),t._v("처럼 내부에서 "),a("code",[t._v("type")]),t._v("을 정의할 수 있고, 내부에 정의된 모든 것은 밖에서 접근할 수 없다.")]),t._v(" "),a("p",[a("code",[t._v("signature <Name> = sig <Interface> end")]),t._v(" 형태로 정의한다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("signature RAT =\nsig\n  type rat\n  exception DivisionByZero\n  val makeRat : int * int -> rat\n  val plus : rat * rat -> rat\n  val minus : rat * rat -> rat\n  val times : rat * rat -> rat\n  val inverse : rat -> rat\n  val toString : rat -> string\nend\n")])])]),a("h4",{attrs:{id:"anonymous-signature"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#anonymous-signature"}},[t._v("#")]),t._v(" anonymous signature")]),t._v(" "),a("p",[a("code",[t._v("signature")]),t._v("를 정의하지 않고 "),a("code",[t._v("sig ... end")]),t._v("를 정의하여, "),a("code",[t._v("structure")]),t._v("에 사용할 수 있다. 이를 익명 시그니처(anonymous signature)라고 부른다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("structure Rat :\n  sig\n    type rat\n    exception DivisionByZero\n    val makeRat : int * int -> rat\n  end\n= struct (* implementation here *) end\n")])])]),a("h3",{attrs:{id:"structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#structure"}},[t._v("#")]),t._v(" Structure")]),t._v(" "),a("p",[a("code",[t._v("structure")]),t._v("는 Class와 유사하게 구현을 정의한다. 다른점은 내부적으로 "),a("code",[t._v("type")]),t._v("을 정의할 수 있고, "),a("code",[t._v("signature")]),t._v("와 함께 정의하여 모든 것을 접근할 수 있다.")]),t._v(" "),a("p",[a("code",[t._v("structure <Name>: <Signature Name> = struct <Implementation> end")]),t._v(" 형태로 정의한다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("structure Rat : RAT =\n  struct\n    type rat = int * int\n    exception DivisionByZero\n\n    fun gcd(0, m) = m\n      | gcd(n, m) = gcd(m mod n, n)\n    fun makeRat (_, 0) = raise DivisionByZero\n      | makeRat (x, y) = \n        if y < 0 then makeRat (~x, ~y)\n        else let val g = gcd(y,x) in\n          (x div g, y div g)\n        end\n    fun plus ((x, y), (z, t)) = makeRat (x*t+z*y, y*t)\n(* remaining functions ... *)\n  end\n")])])]),a("h4",{attrs:{id:"signature없이-structure-정의"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#signature없이-structure-정의"}},[t._v("#")]),t._v(" signature없이 structure 정의")]),t._v(" "),a("p",[a("code",[t._v("signature")]),t._v(" 없이 "),a("code",[t._v("structure")]),t._v("는 정의할 수 있다. "),a("code",[t._v("structure")]),t._v("에 정의한 모든 것은 외부에서 접근할 수 있다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("structure Rat = struct (* implementation *) end\n")])])]),a("h4",{attrs:{id:"anonymous-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#anonymous-structure"}},[t._v("#")]),t._v(" anonymous structure")]),t._v(" "),a("p",[a("code",[t._v("structure")]),t._v("은 "),a("code",[t._v("struct <구현> end")]),t._v(" 형태로 익명으로 정의할 수 있다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("structure Calc = Calculator (struct (* implementation here *) end)\n")])])]),a("h4",{attrs:{id:"unique-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unique-structure"}},[t._v("#")]),t._v(" unique structure")]),t._v(" "),a("p",[a("code",[t._v(":")]),t._v(" 대신 "),a("code",[t._v(":>")]),t._v("사용하여 unique한 structure를 정의할 수 있다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("structure Rat :> RAT = struct ... end\n")])])]),a("h3",{attrs:{id:"functor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#functor"}},[t._v("#")]),t._v(" Functor")]),t._v(" "),a("p",[a("code",[t._v("functor")]),t._v("는 "),a("code",[t._v("structure")]),t._v("을 인자로 받아 새로운 "),a("code",[t._v("structure")]),t._v("를 반환한다. "),a("code",[t._v("functor")]),t._v("는 반환 타입은 "),a("code",[t._v("signature")]),t._v("로 정의되고 "),a("code",[t._v("struct ... end")]),t._v(" 형태로 "),a("code",[t._v("structure")]),t._v("를 정의한다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("functor PQUEUE(type Item  \n               val > : Item * Item -> bool  \n              ):QueueSig =  \nstruct  \n    type Item = Item  \n    exception Deq  \n    fun insert e [] = [e]:Item list  \n      | insert e (h :: t) =  \n        if e > h then e :: h :: t  \n                 else h :: insert e t  \n \n    abstype Queue = Q of Item list  \n    with  \n        val empty          = Q []  \n        fun isEmpty (Q []) = true  \n          | isEmpty _      = false  \n \n        fun enq(Q q, e)    = Q(insert e q)  \n        fun deq(Q(h :: t)) = (Q t, h)  \n          | deq _          = raise Deq  \n    end  \nend;\n")])])]),a("h5",{attrs:{id:"사용예제"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#사용예제"}},[t._v("#")]),t._v(" 사용예제")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("structure IntPQ = PQUEUE(type Item = int  \n                         val op >  = op > : int * int -> bool)\n")])])]),a("h3",{attrs:{id:"예제코드"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#예제코드"}},[t._v("#")]),t._v(" 예제코드")]),t._v(" "),a("h4",{attrs:{id:"예제-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#예제-1"}},[t._v("#")]),t._v(" 예제 1")]),t._v(" "),a("h5",{attrs:{id:"example-1-sml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-1-sml"}},[t._v("#")]),t._v(" example-1.sml")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("signature S =\nsig\n  type t\n  val f : t -> t\n  val x : t\nend\n\nstructure S1: S =\nstruct\n  type t = int\n  val x = 0\n  fun f (x) = x + 1\nend\n")])])]),a("h5",{attrs:{id:"실행결과"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#실행결과"}},[t._v("#")]),t._v(" 실행결과")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('- use "example-1.sml";\n[opening example-1.sml]\nsignature S =\n  sig\n    type t\n    val f : t -> t\n    val x : t\n  end\nstructure S1 : S\nval it = () : unit\n- S1.f(5);\nval it = 6 : S1.t\n')])])]),a("h4",{attrs:{id:"예제-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#예제-2"}},[t._v("#")]),t._v(" 예제 2")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("signature MySig =  \nsig  \n    val run : int * int -> int\nend\n  \nstructure Add: MySig =  \nstruct\n    fun run (x, y) = x + y\nend\n\nfunctor toTwice(Something: MySig): MySig =\nstruct\n    val argRun = Something.run\n    fun run (x, y) = argRun(x, y) * 2\nend\n\nstructure Mul = toTwice(Add)\n")])])]),a("h5",{attrs:{id:"실행결과-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#실행결과-2"}},[t._v("#")]),t._v(" 실행결과")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("- Add.run(2, 3);\nval it = 5 : int\n- Mul.run(2, 3);\nval it = 10 : int\n")])])]),a("h4",{attrs:{id:"참고자료"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#참고자료"}},[t._v("#")]),t._v(" 참고자료")]),t._v(" "),a("ul",[a("li",[t._v("https://piazza.com/class_profile/get_resource/hpo8fqgcnhr585/hulvgokntfk6my")]),t._v(" "),a("li",[t._v("http://homepages.inf.ed.ac.uk/mfourman/teaching/mlCourse/notes/sml-modules.html")]),t._v(" "),a("li",[t._v("https://www.smlnj.org/doc/ML-Yacc/mlyacc008.html")])])])}),[],!1,null,null,null);e.default=r.exports}}]);