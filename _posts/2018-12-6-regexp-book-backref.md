---
layout: post
title:  "[손에 잡히는 정규표현식] 8장 역참조 사용하기"
date:   2018-12-06
description: 역참조 사용방법을 정리합니다.
tags: [books, regexp]
---

역참조는 정규 표현식 패턴으로, 앞서 일치한 부분을 다시 가리킵니다.

시작태그와 종료태그를 찾을 때 역참조를 사용하면 유용합니다. 
```js
`<body>
<h1>Welcome to my Website</h1>
<h2>ColdFusion</h1>
<H3>Wireless</h3>
</body>`.match(/<[hH][1-6]>.*?<\/[hH][1-6]>/g);
```

시작태그와 종료태그가 다른이름인데도 일치되어 검색되었습니다. 하지만 종료태그가 다른 태그를 찾는 것은 의도와 다를 것입니다.
```
[
  "<h1>Welcome to my Website</h1>",
  "<h2>ColdFusion</h1>",
  "<H3>Wireless</h3>"
]
```

역참조를 사용하면 하위표현식에 일치한 부분을 찾아 사용할 수 있습니다. 
```js
`
<body>
<h1>Welcome to my Website</h1>
<h2>ColdFusion</h1>
<H3>Wireless</h3>
</body>
`.match(/<([hH][1-6])>.*?<\/\1>/g);
```
```
["<h1>Welcome to my Website</h1>"]
```