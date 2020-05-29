(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{358:function(t,s,a){"use strict";a.r(s);var e=a(28),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vuex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuex"}},[t._v("#")]),t._v(" Vuex")]),t._v(" "),a("h2",{attrs:{id:"소개"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#소개"}},[t._v("#")]),t._v(" 소개")]),t._v(" "),a("p",[t._v("Vuex는 Vue 어플리케이션의 상태 관리 아키텍쳐를 라이브러리로 제공한 것이다.\nFlux, Redux, Elm 아키텍처에서 영감을 받아 Vue의 반응형 시스템을 활용하도록 특별히 고안된 아키텍쳐이다.\n애플리케이션의 모든 컴포넌트에 대한 중앙 집중식 저장소 역할을 하며 예측 가능한 방식으로 상태를 변경할 수 있다.")]),t._v(" "),a("p",[t._v("Vuex는 Store라는 컨테이너를 제공한다. Store는 State, Getters, Mutations, Actions, Modules로 이루어 진다.")]),t._v(" "),a("p",[t._v("State는 어플리케이션의 상태를 가지고, Getters는 State의 계산된 속성이다.\nMutations은 State의 변경을 위한 유일한 방법이고 Actions는 비동기 작업을 한다. Actions은 상태를 변경하기 위해 Mutations에게 전파한다.")]),t._v(" "),a("p",[t._v("마지막으로 Modules는 어플리케이션의 규모가 커질 때 State, Getters, Mutations, Actions를 분할하여 선언하는 역할을 한다.")]),t._v(" "),a("h2",{attrs:{id:"state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#state"}},[t._v("#")]),t._v(" State")]),t._v(" "),a("p",[t._v("State는 상태를 담당한다. Vuex는 단일 상태 트리를 가진다. 단일 객체는 어플리케이션의 모든 상태를 포함하며 원본 소스의 역할을 한다.\n어플리케이션마다 하나의 저장소만 갖게 된다. Vuex를 사용한다고 모든 상태를 Vuex에 넣어야 되는 것은 아니다.\n단일 컴포넌트에게만 속하는 상태의 경우 컴포넌트에 남겨 둘 수 있으며 기회비용을 판단하고 알맞는 위치에 정의해야 한다.")]),t._v(" "),a("h2",{attrs:{id:"getters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getters"}},[t._v("#")]),t._v(" Getters")]),t._v(" "),a("p",[t._v("Getters는 State를 기반하여 계산된 상태를 만들 수 있다. Getters의 계산 결과는 종속성에 따라 변경이 없을 경우 캐시된 결과를 반환한다. 일부의 종속성이 변경된 경우에만 다시 계산된다. 하지만 반환값이 함수일 경우 캐시가 안되기 때문에 유의해야 한다.")]),t._v(" "),a("h2",{attrs:{id:"mutations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mutations"}},[t._v("#")]),t._v(" Mutations")]),t._v(" "),a("p",[t._v("Mutations은 State를 변경하는 유일한 방법이다. Mutations은 이벤트와 유사하다. 각 Mutations은 핸들러 함수가 있고 핸들러 함수에서 실제 상태를 수정한다. 그리고 상태 변경은 비동기로 변경이 될 경우 추적하기 힘들기 때문에 Mutations은 동기적으로 동작되야 한다. 비동기 작업이 필요할 경우 Actions을 통해 호출되도록 해야 한다.")]),t._v(" "),a("h2",{attrs:{id:"actions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#actions"}},[t._v("#")]),t._v(" Actions")]),t._v(" "),a("p",[t._v("Actions은 비동기 작업과 Mutations에게 상태 변경 요청을 한다. 비동기 작업의 흐름 제어와 여러 개의 상태 변경을 요청하는 작업을 Actions에서 수행한다. 그리고 한 Action에 다른 Action을 포함하여 조작할 수 있다. 그래서 상태변경 작업와 비동기 작업을 분리하여 수행할 수 있다.")]),t._v(" "),a("h2",{attrs:{id:"modules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modules"}},[t._v("#")]),t._v(" Modules")]),t._v(" "),a("p",[t._v("Modules는 저장소를 모듈로 나누는 역할을 한다. 각 모듈은 자체적으로 State, Mutations, Actions, Getters을 가질 수 있으며 내부적으로 또 모듈을 가실 수 있다. 기본적으로 모듈 내의 각 요소들을 등록하더라도 전역에 등록이 된다. 독립적으로 동작을 하려면 네임스페이스 설정을 통해 가능하다.")]),t._v(" "),a("h2",{attrs:{id:"참고문헌"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#참고문헌"}},[t._v("#")]),t._v(" 참고문헌")]),t._v(" "),a("p",[t._v("https://vuex.vuejs.org/kr/")])])}),[],!1,null,null,null);s.default=r.exports}}]);