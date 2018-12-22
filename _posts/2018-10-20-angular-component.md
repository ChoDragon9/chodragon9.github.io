---
layout: post
title:  "Angular Host"
date:   2018-10-20
description: Angular Host에 대한 정리이다.
tags: [angular, component]
---
### 컴포넌트 태그 접근 : Host
- Angular에서는 컴포넌트 정의시 커스텀 태그에 접근하는 것을 Host라고 한다.
- 커스텀 태그에 class 사용시 아래와 같이 사용할 수 있다.
```ts
@Component({
  selector: 'mytag',
  templateUrl: './layout.template.html',
  host: {
    'class' : 'myclass1 myclass2 myclass3'
  }
})
export class MyTagComponent {}
```

```html
<mytag></mytag>

// Result
<mytag class="myclass1 myclass2 myclass3"></mytag>
```

- 동적으로 프로퍼티 수정

```ts
@HostBinding('attr.something') 
get something() { 
  return this.somethingElse; 
}

@HostBinding('style.backgroundColor') c_colorrr = "red"; 

@HostListener('mouseenter') c_onEnterrr() {
  this.c_colorrr= "blue" ;
}

@HostListener('mouseleave') c_onLeaveee() {
  this.c_colorrr = "yellow" ;
} 
```

- 클래스 동적 수정 예

```ts
@HostBinding('class')
get class() {
  return `
    box_tf box_tf2
    ${this.isFocused ? 'tf_focus' : ''}
    ${this.isError ? 'tf_error' : ''}
    ${!this.isError ? 'on' : ''}
    ${this.disabled ? 'disabled' : ''}
  `;
}
```
***