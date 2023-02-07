### null vs undefined
의미는 둘 다 '값이 없다'

1.null
'의도적으로' 없다는 값을 지정할 때는 null을 사용

2.undefined
값이 그냥 없음
선언만 하고 값을 넣지 않았을 때
undefined로도 값을 지정할 수 있지만 null과 차이를 명확히 하는 것이 좋기때문에 비추천

~~~js
let apple;
console.log(apple); //undefined
apple= null;
console.log(apple); //null


console.log(null  ==  undefined); //true
console.log(null  ===  undefined); //false
~~~
