---
title: Vanilla JS
date: "2020-05-08T02:56:32.169Z"
description: "Vanilla JS 기초 개념 정리"
---

**항상 body 밑에 위치해야함**

### initialize

**let**

```javascript
let a = 220 // init
a -= 5 // use
console.log(a)

// 115 출력
```

**const**

```javascript
const a = 221
let b = a
console.log(b, a)
```

let: 바꿀 수 있는 것

const: 바꿀 수 없음. 값 바꾸려고 하면 에러 발생

**var** - could modified value

```javascript
var a = 221
var b = a - 5
a = 4
console.log(b, a)
```

let vs var

let은 a라는 변수를 다시 let a = "11"; 이런식으로 두번 "선언"해서 사용할 수 없음. 값을 바꾸는 것은 가능.

var는 같은 변수명이더라도 선언을 여러번 할 수 있음.

var 대신 let과 const를 사용하도록 하자!

**연산자**

= 대입

=== 비교 // c에서 ==와 같음

!== // !=

&& // and

|| // or

### Data Type

**string**

자료형 안적어도 됨!! ""이거만 !

" ", ' ' 다 스트링임

```javascript
const what = "Jiwon"
console.log(what)

// Jiwon
```

**boolean**

소문자, "" 없이! true=1 false=0

```javascript
const what = true
```

**number**

int 같은거

```javascript
const what = 60
```

**float**

```javascript
const what = 44.44
```

**array** [] 사용

```javascript
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

console.log(daysOfWeek)
```

**Object** {} 사용 - python dictionary 같은거

const object 안의 값은 변경할 수 있음

```javascript
const info = {
  name: "jiwon",
  age: 23,
  gender: "Female",
  isSmart: true,
}
console.log(info.gender)

info.gender = "Male"

console.log(info.gender)

// Female
// Male
```

Object.keys(object이름) - key만 모아서 배열 반환

Object.values(object이름) - value만 모아서 배열 반환

Object.entries(object이름) - object의 key, value를 [key,value]로 담은 배열을 반환함.

object안에 array도 넣을 수 있음.

object안의 요소들 나열하면서 comma(,) 꼭 넣어야 함!

```javascript
const info = {
  name: "jiwon",
  age: 23,
  gender: "Female",
  isSmart: true,
  favMovies: ["Mad Max", "Toy Story", "Moana"],
  favFood: [
    {
      name: "noodle",
      healty: true,
    },
    {
      name: "burger",
      healthy: false,
    },
  ],
}
console.log(info)
```

### Function

```javascript
function sayHello(potato) {
  console.log("Hello!", potato)
}

sayHello("James")
```

```javascript
function sayHello(name, age) {
  console.log(`Hello ${name} you are ${age} years old`) // `` 이게 포인트
}

sayHello("James", 20)

// Hello James you are 20 years old
```

```javascript
const calculator = {
  plus: function (a, b) {
    return a + b
  },
}

const plus = calculator.plus(5, 5)
console.log(plus)
```

모아서 가져오기는 ...

### DOM

; Document Object Model

웹페이지의 객체지향 표현

웹 브라우저가 HTML페이지를 인식하는 방식

tree구조로 생김

**API(web or XML page) = DOM + JS (scripting language)**

HTML의 그 태그들을 자바스크립트에서 객체로 만들어서 사용

css로 HTML 스타일 바꿀 수 있듯이

자바스크립트로도 할 수 있음!

아래는 웹 페이지, XML 페이지 스크립팅에서 DOM 을 사용하는 공통적인 API 들의 간략한 목록이다.

- `document.getElementById(id)`
- `document.getElementsByTagName(name)`
- `document.createElement(name)`
- `parentNode.appendChild(node)`
- `element.innerHTML`
- `element.style.left`
- `element.setAttribute`
- `element.getAttribute`
- `element.addEventListener`
- `window.content`
- `window.onload`
- `window.dump`
- `window.scrollTo`

**function**

```javascript
function handleResize() {
  console.log("I have been resized")
}

window.addEventListener("resize", handleResize)

// handleResize()면 바로 호출됨. 브라우저 열면 바로 뜨는거
// 지금은 resize되면 호출됨
```

```javascript
const title = document.getElementById("title")

function handleClick() {
  title.style.color = "red"
}

title.addEventListener("click", handleClick)

// 웹 페이지에서 타이틀 클릭하면
```

![1580040428104](C:\Users\ziwon\AppData\Roaming\Typora\typora-user-images\1580040428104.png)

**setInterval()**

```javascript
setInterval(func - name, interval - time)
```

interval time은 1초==1000

**ternary operator**

삼항 연산자

세갸 피 연산자 취할 수 있는 연산자로 mini if같은 느낌

```javascript
clockTitle.innerText = `${hours}:${minutes}:${
  seconds < 10 ? `0${seconds}` : seconds
}`
```

**local storage**

적은 JS 정보를 local user browser에 저장하는 것

**리스트 바로 만들기**

```javascript
function paintToDo(text) {
  const li = document.createElement("li")
  const delBtn = document.createElement("button")
  delBtn.innerHTML = "\u2717"
  const span = document.createElement("span")
  span.innerText = text
  li.appendChild(delBtn)
  li.appendChild(span)
  toDoList.appendChild(li)
}
```

부모.appendChild(자식) 형태로 생성

local storage는 자바스크립트의 data(object)를 저장할 수 없음. only string!

따라서, JSON.stringify()를 활용하면 됨

얘는 모든 자바스크립트의 데이터를 string으로 바꿔주는 역할.

JSON = javascript object notation, 데이터 전달할 때 object로 변환하는 거

JSON.parse(바꿀 친구);

하고 나면 string을 obejct로 인식해서 제대로 변환을 해줌. 원하는대로!

**forEach()**

array에 있는 항목을 하나씩 수행되게 해주는 함수

**filter**

function을 수행

각각의 item에 대해 수행됨

array 안에 있는 모든 toDos에 대해서 조건이 filterFn()에 대해 true인것만 return함.

true인 item들을 모아서 array를 리턴해주고 그 array에 대해 filter를 수행하는 것.

**클래스이름 주기**

image.classList.add("bgImage");

form.classList.remove(SHOWING_CN);

등등

image객체에 대해 클래스 이름을 주게 됨

클래스 이름이 있다면, css로 디자인을 할 수도 있고 다른 동작을 하기 위해 사용할 수도 있어서 중요함.

**API에서 데이터 가져오기**

```javascript
fetch(
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
)
```

포인트는 ``백틱 쓰는거랑 appid 추가 해주는 것!
