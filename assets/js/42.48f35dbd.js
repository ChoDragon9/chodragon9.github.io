(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{313:function(t,e,r){"use strict";r.r(e);var s=r(28),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("blockquote",[r("p",[t._v("이 문서는 MVC 용어를 최초로 정의한 "),r("a",{attrs:{href:"http://heim.ifi.uio.no/~trygver/2007/MVC_Originals.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Model-View-Controller : Trygve Reenskaug : 1979.12.10"),r("OutboundLink")],1),t._v("에 대한 내용이다.")])]),t._v(" "),r("h2",{attrs:{id:"models"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#models"}},[t._v("#")]),t._v(" MODELS")]),t._v(" "),r("p",[t._v("모델은 지식을 나타냅니다. 모델은 단일 객체일 수도 있고, 또는 개체의 구조일 수도 있습니다.\n모델 소유주가 인지하는 대표 세계와 모델 간에는 모델 및 부품 간 일대일 통신이 있어야 한다.\n따라서 모델의 노드는 문제의 식별 가능한 부분을 나타내야 한다.")]),t._v(" "),r("p",[t._v("모델의 노드는 모두 동일한 문제 수준이어야 하며 문제 지향 노드(예: 일정 약속)와 구현 세부 정보를 혼합하는 것이 혼란스럽고 잘못된 형식(예: 단락)으로 간주됩니다.")]),t._v(" "),r("h2",{attrs:{id:"views"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#views"}},[t._v("#")]),t._v(" VIEWS")]),t._v(" "),r("p",[t._v("뷰는 모델의 시각적 표현입니다. 그것은 보통 모델의 특정 속성을 강조하고 다른 속성을 억압할 것이다. 따라서 표시 필터 역할을 합니다.\n뷰는 모델(또는 모델 부분)에 부착되며, 모델로부터 질문을 통해 프리젠테이션에 필요한 데이터를 얻습니다. 또한 적절한 메시지를 전송하여 모델을 업데이트할 수도 있습니다.")]),t._v(" "),r("p",[t._v("이러한 모든 질문과 메시지는 모델의 용어여야 합니다. 따라서 뷰는 모델이 나타내는 모델의 특성을 알아야 합니다.\n(예를 들어, 모델의 식별자를 요청할 수 있으며 텍스트 인스턴스를 요구할 수 있습니다. 모델이 클래스 텍스트라고 가정하지 않을 수 있습니다.)")]),t._v(" "),r("h2",{attrs:{id:"controllers"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#controllers"}},[t._v("#")]),t._v(" CONTROLLERS")]),t._v(" "),r("p",[t._v("컨트롤러는 사용자와 시스템 간의 링크입니다. 사용자는 관련 뷰를 배열하여 화면의 적절한 위치에 표시할 수 있습니다. 사용자에게 메뉴 또는 명령과 데이터를 제공하는 다른 방법을 제시하여 사용자 출력을 위한 수단을 제공합니다. 컨트롤러는 이러한 사용자 출력을 수신하여 적절한 메시지로 변환한 후 이 메시지를 하나 이상의 뷰에 전달합니다.")]),t._v(" "),r("p",[t._v("컨트롤러는 뷰를 보완해서는 안 됩니다. 예를 들어, 노드 사이에 화살표를 그려 노드 뷰를 연결하지 않아야 합니다.\n반대로 뷰는 마우스 작업 및 키 입력과 같은 사용자 입력에 대해 절대 알 수 없습니다. 사용자 명령의 순서를 정확하게 재현하는 뷰로 메시지를 전송하는 방법을 컨트롤러에 작성할 수 있어야 한다.")]),t._v(" "),r("h2",{attrs:{id:"editors"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#editors"}},[t._v("#")]),t._v(" EDITORS")]),t._v(" "),r("p",[t._v("컨트롤러는 모든 뷰에 연결되며, 컨트롤러의 부분이라고 합니다. 일부 뷰는 사용자가 뷰에 표시되는 정보를 수정할 수 있는 특수 컨트롤러, 편집기를 제공합니다. 그러한 편집자는 컨트롤러와 그것의 뷰 사이의 경로에 끼워질 수 있으며, 컨트롤러의 확장으로 작용한다. 편집 프로세스가 완료되면 편집기가 경로에서 제거되고 삭제됩니다.")]),t._v(" "),r("p",[t._v("편집기는 연결된 뷰의 은유법을 통해 사용자와 통신하므로 편집기는 뷰와 밀접하게 연결됩니다. 컨트롤러가 해당 뷰를 요청하면 편집기에서 다른 적절한 소스가 없습니다.")])])}),[],!1,null,null,null);e.default=a.exports}}]);