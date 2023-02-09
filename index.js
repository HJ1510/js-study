const num = [1, 2, 3];
const num2 = [...num];
const numPlus = [...num, 4];
const arr = [...num, ...numPlus];

console.log(num);
console.log(...num);
console.log(num2);
console.log(numPlus);
console.log(...numPlus);
console.log(arr);
console.log(...arr);

const introduce = (name, birth, favorite) => {
  console.log(`저는 ${name}입니다.`);
  console.log(`${birth}년생이고`);
  console.log(`${favorite}을 좋아합니다`);
};

const dooly = ["둘리", 1983, "라면"];
introduce(...dooly);

const users = ["둘리", "마이콜", "또치"];
const object = { ...users };

console.log(object);


const snacks = ['원카칩', '꿀버터칩', '헛스윙칩', '태양칩', '야채시간'];
const drinks = ['사이다', '콜라', '우유', '물', '커피', '레몬에이드'];

const mySnacks = (...snacks);
const myDrinks = [...drinks];

console.log(mySnacks);
console.log(myDrinks);