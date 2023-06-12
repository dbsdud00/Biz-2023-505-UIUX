console.log("반갑습니다");
const num1 = 100;
const num2 = 200;
const sum = num1 + num2;
console.log(num1, num2, sum);
/*
ES5 5+ 에서 탄생한 interpolation 문자열
문자열 Templete
변수를 직접 문자열처럼 코딩하는 방법
*/
console.log(`${num1} + ${num2} = ${sum}`);
// constant 변수, 불변변수, 상수
// 한번 값이 저장하면 다시 값을 저장할 수 없는 변수
const nation = "대한민국";
console.log(`우리나라는 ${nation} 입니다.`);

// js 의 초기코드에서는 변수를 선언할 필요가 없었다.
// 변수를 사용하려면 그냥 사용하면 된다
let nation1 = "Korea";
console.log(nation1);

