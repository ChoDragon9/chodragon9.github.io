!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);const n=()=>{},r=e=>t=>e,s=e=>(t=r({}))=>{const{beforeCreate:o=n}=e,s=l(e);let c=s(t);return o({render:a({dom:c,render:s,props:t}),props:t}),c},l=({data:e=r({}),template:t=n,components:o=r([]),methods:s=r([]),events:l=r([])})=>n=>{const r=e(),a=c(t({data:r,props:n}));return i(l(),s({dom:a,data:r,props:n}),a),d(o(),a,r),a},a=({dom:e,render:t,props:o})=>()=>{const n=t(o);e.replaceWith(n),e=n},c=e=>{var t=document.createElementNS("http://www.w3.org/2000/svg","svg");return t.innerHTML=e,t.children[0]},i=(e,t,o)=>{for(const[n,r,s]of e)u(n,o).forEach(e=>{e[r]=t[s]})},d=(e,t,o)=>{for(const[n,r]of e)u(n,t).forEach(e=>{a({dom:e,render:r,props:p(e,o)})()})},p=(e,t)=>{const o=g(e,"props");return o?t[o]?t[o]:o:{}},u=(e,t=document)=>t.querySelectorAll(e),g=(e,t)=>e.getAttribute(t),f=({state:e,set:t})=>{Object.entries(e).forEach(([e,o])=>t(e,o))},b=({store:e,subscriber:t})=>(o,n)=>{e.set(o,n),y({subscriber:t,store:e,key:o})},y=({subscriber:e,key:t,store:o})=>{if(e.has(t))for(const n of e.get(t))n(o.get(t))},m=({store:e})=>t=>e.get(t),v=({subscriber:e})=>(t,o)=>{let n;(n=e.has(t)?e.get(t):[]).push(o),e.set(t,n)},h=()=>{const e=$.get("coordinates"),t=e.reduce((e,t)=>({...e,[t]:$.get(t)}),{});(e=>{localStorage.setItem("Sketchbook",JSON.stringify(e))})({coordinates:e,...t})};let k={coordinates:["defaultRect","defaultTriangle","defaultStar"],defaultRect:[[100,100],[100,200],[200,200],[200,100]],defaultTriangle:[[350,100],[300,200],[400,200]],defaultStar:[[555,89],[538,124],[499,128],[521,162],[505,189],[538,188],[554,220],[576,186],[611,185],[587,152],[612,123],[572,125]],selectedPoint:{index:null,key:null},selectedPolygon:{key:null},prevCoordinate:null};const w=(()=>(()=>JSON.parse(localStorage.getItem("Sketchbook")))())();w&&(k={...k,...w});const $=((e={})=>{const t=new Map,o=new Map,n=b({store:t,subscriber:o});return f({state:e,set:n}),{set:n,get:m({store:t}),watch:v({subscriber:o})}})(k),x=(e,t)=>{const o=$.get("coordinates");$.set(e,t),o.push(e),$.set("coordinates",o),h()},P=({x:e,y:t})=>{const{index:o,key:n}=$.get("selectedPoint"),r=$.get(n);r[o]=[e,t],$.set(n,r),h()},S=({x:e,y:t})=>{const o=$.get("prevCoordinate");if(null===o)$.set("prevCoordinate",[e,t]);else{const n=$.get("selectedPolygon").key,r=$.get(n),s=e-o[0],l=t-o[1],a=r.map(([e,t])=>[e+s,t+l]);$.set(n,a),$.set("prevCoordinate",[e,t])}h()},O=s({data:()=>({strokeWidth:5,stroke:"rgba(255, 102, 51)"}),template({data:e,props:t}){const o=$.get(t);let n="";for(let t=0,r=o.length;t<r;t++){const s=t===r-1?0:t+1,[l,a]=o[t],[c,i]=o[s];n+=`<line x1="${l}" y1="${a}" x2="${c}" y2="${i}" \n              stroke-width="${e.strokeWidth}" stroke="${e.stroke}" data-index="${t}"></line>`}return`<g>${n}</g>`},events:()=>[["line","onclick","addPoint"]],methods:({props:e})=>({addPoint(t){t.preventDefault();const{pageX:o,pageY:n,target:r}=t,s=parseInt(r.getAttribute("data-index")),{left:l,top:a}=$.get("svgOffset"),c=$.get(e);c.splice(s+1,0,[o-l,n-a]),$.set(e,c)}}),beforeCreate({render:e,props:t}){$.watch(t,e)}}),C=s({data:()=>({radius:10,fill:"rgba(255, 102, 51)"}),template:({data:{radius:e,fill:t},props:o})=>`<g>${$.get(o).reduce((o,[n,r],s)=>o+=`<circle cx="${n}" cy="${r}" r="${e}" fill="${t}" data-index="${s}"></circle>`,"")}</g>`,events:()=>[["circle","onmousedown","select"],["circle","onmouseup","unselect"],["circle","onmouseleave","unselect"]],methods({props:e}){const t=e=>parseInt(e.getAttribute("data-index"));return{select(o){$.set("selectedPoint",{index:t(o.target),key:e})},unselect(){$.set("selectedPoint",{index:null,key:null})}}},beforeCreate({render:e,props:t}){$.watch(t,e)}}),M=s({data:()=>({fill:"rgba(255, 102, 51, .5)"}),template:({data:{fill:e},props:t})=>`<g>${`<polygon points="${$.get(t).map(e=>e.join(",")).join(" ")}" fill="${e}"></polygon>`}</g>`,beforeCreate({render:e,props:t}){$.watch(t,e)},events:()=>[["polygon","onmousedown","select"],["polygon","onmouseup","unselect"],["polygon","onmouseleave","unselect"]],methods:({props:e})=>({select(){$.set("selectedPolygon",{key:e})},unselect(){$.set("selectedPolygon",{key:null}),$.set("prevCoordinate",null)}})}),j=s({template:()=>`\n      <div class="sketchbook">\n        <svg width="100%"\n             height="100%"\n             xmlns="http://www.w3.org/2000/svg">\n          ${$.get("coordinates").map(e=>`<polygon props="${e}"></polygon>\n      <line props="${e}"></line>\n      <circle props="${e}"></circle>`)}\n        </svg>\n      </div>\n    `,components:()=>[["line",O],["circle",C],["polygon",M]],events:()=>[["svg","onmousemove","onMouseMove"]],methods:({dom:e})=>(setTimeout(()=>{$.set("svgOffset",e.getBoundingClientRect())}),{onMouseMove(e){const{pageX:t,pageY:o}=e;(({pageX:e,pageY:t})=>{const{left:o,top:n}=$.get("svgOffset"),r=e-o,s=t-n;switch(!0){case(e=>"number"==typeof e)($.get("selectedPoint").index):P({x:r,y:s});break;case(e=>"string"==typeof e)($.get("selectedPolygon").key):S({x:r,y:s})}h()})({pageX:t,pageY:o})}}),beforeCreate({render:e}){$.watch("coordinates",e)}}),T=()=>parseInt(1e6*Math.random()),_=s({template:()=>'<div class="container">\n      <div class="panel">\n        <button class="rect">사각형 추가</button>\n        <button class="triangle">삼각형 추가</button>\n        <ul>\n          <li>모양 추가 후 드래그 가능</li>\n          <li>라인 클릭 시 포인트 추가</li>        \n        </ul>\n      </div>\n      <sketchbook></sketchbook>\n    </div>',events:()=>[["button.rect","onclick","addRect"],["button.triangle","onclick","addTriangle"]],methods:()=>({addRect(){x(`coordinate${T()}`,[[100,100],[100,200],[200,200],[200,100]])},addTriangle(){x(`coordinate${T()}`,[[150,100],[100,200],[200,200]])}}),components:()=>[["sketchbook",j]]});window.onload=()=>{u("#container")[0].appendChild(_())}}]);