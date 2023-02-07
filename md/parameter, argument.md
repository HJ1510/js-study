1.
~~~ js
function hello (name = 'hj') {
	console.log(`hello, ${name}`);
}
~~~
위와 같이 파라미터에 기본값이 지정되어 있는 경우
```hello (undefined); // hello, hj```
undefined로 기본값 호출 가능 (파라미터가 여러가지일 경우 활용)

2.
~~~ js
function exam (x, y=x+1) {
	console.log(`x: ${x}`);
	console.log(`y: ${y}`);
};
~~~

```exam (1); // x: 1 y: 2``` 
두 번째  argument가 없으면 기본값 활용
```exam (1, 4); // x: 1 y: 4```
두 번째  argument가 있으면 아규먼트값 활용

3. argument 유연하게 사용하기
~~~js
function print(a, b, c) {
	console.log(a);
	console.log(b);
	console.log(c);
	console.log(arguments);	
};
~~~
print("hi", "hello"); 
/* hi 
hello 
undefined 
Arguments(2) ['hi', 'hello', callee: ƒ, Symbol(Symbol.iterator): ƒ]*/ 

-arguments
유사 배열 (length, 인덱싱(arguments[0]...), for of문 활용 가능
arguments라는 이름의 객체는 생성하지 말것
배열의 메소드 사용 안됨
arguments는 아규먼트 전체를 다룸 일부만 선택해서 활용하려면 따로 인덱싱 과정 필요

4. rest parameter
일반 파라미터 앞에 ... (마침표 3개) 사용
~~~js
function firstWords() {
  let word = "";
  for (const arg of arguments) {
    word += arg[0];
  }
  console.log(word);
}
~~~
아래와 같이
~~~js
function firstWords(...args) {
  let word = "";
  for (const arg of args) {
    word += arg[0];
  }
  console.log(word);
}
~~~

rest parameter는 배열! 배열 메소드 사용 가능
일반 파라미터와 같이 사용할때는 맨 마지막에 써야함
