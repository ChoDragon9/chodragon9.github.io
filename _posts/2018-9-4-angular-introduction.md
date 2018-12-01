---
layout: post
title:  "[Angular Development with TypeScript] Angular 시작하기"
date:   2018-09-04
description: Angular Development with TypeScript 책 정리
tags: [angular, book]
---
### 프레임워크과 라이브러리
**프레임워크**를 사용하면 프레임워크에서 제공하는 설계 구조를 사용하며 그 구조에 어울리는 방식으로 코드를 작성해야 한다.

**라이브러리**는 컴포넌트와 API를 중심으로 기능을 제공하며 어떠한 코드라도 필요에 맞춰서 사용할 수 있다.

### Angular 살펴보기
#### SystemJS
- 모듈 로더
- ES6 모듈 문법 사용
- systemjs.config.js 파일은 SystemJS의 설정 파일
```
<html>
<head>
  <script>
    System.import('app').catch((err) => console.error(err))
  </script>
</head>
<body>
  <app></app>
</body>
</html>
```

#### NgModule : 모듈 선언
#### Component
```ts
@Component({
  selector: 'search-product',
  template: `
    <form>
      <div>
        <input id="prodToFind" #prod>
        <button (click)="findProduct(prod.value)">Find Product</button>
        Product name: {{ product.name }}
      </div>
    </form>
  `
})
class SearchComponent {
  @Input () productID : number;
  product : Product; // Product 클래스의 내용은 생략한다.
  findProduct (prodName : string) {
  }
}
class Product {
  id : number,
  name : string;
  description : string;
  bid : number;
  price : number;
}
```

#### Angular 기능 구현 방식
- 업무 로직 구현 : 클래스 사용
- 클래스 멤버 참조 : this 사용
- 컴포넌트 구현 : @Component
- 템플릿 정의 : template, templateUrl in @Component
- HTML 조작 : ngIf, NgFor 또는 @Directive
- 프로퍼티 바인딩 : `<input [value]="greeting">`
- 이벤트 : `<button (click)="onClickEvent()">Get Products</button>`
- 양방향 바인딩 : `<input [(ngModel)]="myComponentProperty">`
- 컴포넌트에 데이터 전달 : @Input
- 컴포넌트에서 데이터 받기 : @Output, EventEmitter
- HTTP
  - 요청 : Http 객체 주입 후 `this.http.get('/products')`
  - 응답 : subscribe 함수, `this.http.get('/products').subscribe(...)`
  
### Angular 애플리케이션의 구성 요소
#### 모듈(Module)
모듈은 관련된 컴포넌트나 서비스, 디렉티브 등을 편하게 사용하기 위해 하나로 모은 것이다.
애플리케이션을 기능 단위로 구분하기 위해 사용한다. 모듈은 클래스에 `@NgModule` 어노테이션을 붙여서 지정하고, 이 어노테이션 안에서 모듈 내용을 설정한다.
```ts
@NgModule({
  imports: [BrowserModule],
  declarations: [HelloWorldComponent, HighlightDirective],
  bootstrap: [HelloWorldComponent] // 루트 컴포넌트로 렌더링 된다.
})
export class AppModule { }
```

#### 컴포넌트(Component)
컴포넌트는 Angular 애플리케이션을 구성하는 기본 요소이며, 화면을 정의하는 뷰와 컴포넌트의 동작을 정의하는 클래스로 구성된다.
컴포너트는 `@Component` 어노테이션을 붙여서 선언한다.
```ts
@Component({
  selector: 'app-component',
  template: '<h1>Hello</h1>'
})
class HelloComponent {}
```
#### 입력 프로퍼티
부모 컴포넌트에서 보내는 데이터는 @Input 데코레이터로 지정한 입력 프로퍼티로 받는다. @Input() 어노테이션을 사용하면 두 컴포넌트가 부모-자식 관계인것을 알 수 있다.
```ts
@Component({
  selector: 'order-procesor',
  template: `Buying {{ quantity }} shares of {{ stockSymbol }}`
})
class OrderComponent {
  @Input() stockSymbol : string;
  @Input() quantity : number;
}

@Component({
  selector: 'app',
  template: `
  <input type="text" (input)="onInputEvent($event)">
  <order-processor [stockSymbol]="stock" quantity="100"></order-processor>
  `
})
class AppComponent {
  stock: string;
  onInputEvent ({target}) : void {
    this.stock = target.value
  }
}
```

#### 출력 프로퍼티와 커스텀 이벤트
커스텀 이벤트를 보내려면 @Output() 어노테이션을 사용해서 출력 프로퍼티를 지정하고, EventEmitter 객체의 emit() 함수를 실행하면 이벤트 정보를 함께 전달하면 된다.
```ts
import { EventEmitter } from '@angular/core';

interface IPriceQuote {
  stockSymbol : string;
  lastPrice : number;
}
@Component({
  selector: 'order-procesor',
  template: `Buying {{ quantity }} shares of {{ stockSymbol }}`
})
class OrderComponent {
  @Output() lastPrice : EventEmitter<IPriceQuote> = new EventEmitter();
  constructor () {
    setInterval (() => {
      let priceQuote : IPriceQuote = {
        stockSymbol : this.stockSymbol
        lastPrice : 100 * Math.random()
      }

      this.lastPrice.emit(priceQuote)
    }, 1000)
  } 
}

@Component({
  selector: 'app',
  template: `
  <order-processor (lastPrice)="priceQuoteHandler($event)"></order-processor>
  `
})
class AppComponent {
  stockSymbol: string;
  price: number;
  priceQuoteHandler (event : IPriceQuote) {
    this.stockSymbol = event.stockSymbol;
    this.price = event.lastPrice;
  }
}
```

#### 디렉티브(Directive)
Angular의 디렉티브는 DOM의 동작을 추가할 수 있다. `@Directive` 어노테이션을 클래스에 붙여서 선언한다.
```ts
@Directive({
  selector: 'input[log-directive]',
  host: {
    '(input)': 'onInput($event)'
  }
})
class LogDirective {
  onInput (event) {
    console.log(event.target.value)
  }
}
```

```html
<input type="text" log-directive>
```

#### 데이터 바인딩 기초
```
// Property Value
<h1>Hello {{ name }}!!</h1>

// Property
<span [hidden]="isValid">The field is required</span>

// Event
<button (click)="placeBid()">Place Bid</button>

// Element Property
<input #title type="text">
<span>{{ title.value }}</span>
```

#### 파이프
파이프는 어떤 값의 형태를 바꿀 때 사용하는 템플릿 엘리먼트이다.
```ts
template: `<p>Your birthday is {{ birthday | date }}</p>`
```

#### 커스텀 파이프
@Pipe 어노테이션을 추가하고 PipeTransform 인터페이스를 사용해서 클래스를 작성하면 되는 데,
PipeTransform 인터페이스는 다음과 같이 정의되어 있다.
```ts
export interface PipeTransform {
  transform (value : any, ..args : any[]) : any;
}
```

```ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'temperature' })
export class TemperaturePipe implements PipeTransform {
  transform (value : any, fromTo : string) : any {
    return (fromTo === 'FtoC') ?
      (value - 32) * 5.0 / 9.0 : // F to C
      value * 9.0 / 5.0 + 32 : // F to C
  }
}
```