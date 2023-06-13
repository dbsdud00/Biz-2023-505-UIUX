/*
func1 은 3개의 함수를 요소(멤버)로 포함하는 json 객체이다.
*/

const func1 = {
  // 2개의 숫자를 전달받아 두 숫자를 덧셈한 후  return 하기
  덧셈: (num1, num2) => num1 + num2,
  곱셈: (num1, num2) => num1 * num2,
  뺄셈: (num1, num2) => {
    return num1 - num2;
  },
};

console.log(func1.덧셈(100, 200));
const add = func1.덧셈(200, 500);
console.log(add);
