---
title: "[C++] 전역변수 자동 초기화 이유"
date: "2020-05-14T01:36:32.169Z"
description: "C++에서 전역변수가 자동 초기화 되는 이유"
---

**질문: <https://www.acmicpc.net/board/view/50025#comment-88070**>

문제를 풀던 중에, 변수 선언 위치에 따라서 값이 달라지는 것을 알게되었다. 초기화를 안해서 생기는 문제였는데, 정적으로 선언한 경우에는 초기화가 자동으로 되었다. 그 차이가 궁금해서 질문했더니 C언어 규정상 타입에 맞게 자동으로 초기화 된다는 것을 알게되었다.

왜 자동으로 초기화가 되는지 궁금해서 더 찾아보니, Stack Overflow에서 답변을 찾을 수 있었다.

**답변: <https://stackoverflow.com/questions/14049777/why-are-global-variables-always-initialized-to-0-but-not-local-variables>**

> Because that's the way it is, according to the _C Standard_. The reason for that is efficiency:
>
> 그 이유는 C Standard에 따른 것으로 효율성 때문이다.
>
> - _static_ variables are initialized at _compile-time_, since their address is known and fixed. Initializing them to `0` does not incur a runtime cost.
>
>   static 변수는 컴파일 타임에 초기화되는데, 주소가 알려져 있고, 고정되어 있기 때문이다. 0으로 초기화 하면 runtime cost를 발생시키지 않는다.
>
> - _automatic_ variables can have different addresses for different calls and would have to be initialized at _runtime_ each time the function is called, incurring a runtime cost that may not be needed. If you do need that initialization, then request it.
>
>   automatic 변수는 다른 호출에 대해 다른 주소를 가지고 있고, runtime 때 함수 호출시마다 초기화 된다. 이는 runtime cost를 발생시킨다. 초기화가 필요하다면 요청하라.
