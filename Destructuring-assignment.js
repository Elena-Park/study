// // 배열 구조 분해 할당
// const numbers = [1, 2, 3];
// const a = numbers[0];
// const b = numbers[1];
// const c = numbers[2];
// const [a, b, c] = numbers; // 동일한 결과값

// console.log(a, b, c); // 1 2 3



// // 선언과 분리
// const numbers = [1, 2, 3];
// let a;
// let b;
// let c;
// if (numbers.length) {
// 	[a, b, c] = numbers;
// 	// let [a, b, c] = numbers;
// 	// if 조건문의 중괄호 내에서 선언하면 안되는 이유
// 	// 유효범위(Scope)가 코드블록 내에서만 유효하기때문에, 선언 된 변수는 if 조건문 내 에서만 사용가능하며 코드블록 바깥에서는 사용이 불가능하기때문에 아래 console.log에서 참조가 불가능 (ReferenceError 발생)
// }

// console.log(a, b, c); // 1 2 3



// // 기본값
// const numbers = [, , 3];
// const [a = 0, b, c] = numbers; // a에 기본값 지정

// console.log(a, b, c); // 0 undefined 3

// const numbers = [7, , 3];
// const [a = 0, b, c] = numbers; // 기본값 무시됨

// console.log(a, b, c); // 7 undefined 3



// // 반환 값 무시
// const numbers = [1, 2, 3];
// const [, , c] = numbers; // 비어있는 위치는 무시됨
// // 두번째 자리에 c를 위치시키면 숫자값 2가 반환됨 (세 번째 자리의 쉼표는 삭제해도 무방)

// console.log(c); // 3



// 나머지 할당
// const numbers = [1, 2, 3];
// const [a, ...rest] = numbers; // 전개연산자를 사용하여 나머지 매개변수처럼 남은 배열 데이터를 또 다른 배열 데이터로 받음
// // let a;
// // let rest;
// // if (numbers.length) {
// // 	[a, ...rest] = numbers;
// // } // 동일한 결과값
// console.log(a, rest); // 1 [ 2, 3 ]



// 객체 구조 분해 할당
// const user = {
// 	name: 'Neo',
// 	age: 22,
// 	isValid: true,
// };
// // 변수 선언과 할당이 동시에 이뤄지는 경우엔 변수명 변경 가능
// const name = user.name;
// const age = user.age;
// const isValid = user.isValid;

// // 아래와 같이 중괄호로 묶어서 할당하는 경우엔 아래 "변수명 변경" 방법으로 변경 가능
// const { name, age, isValid } = user; // 위와 동일한 결과값
// // 객체 데이터는 순서가 없는 데이터이기 때문에 isValid, name, age 이런식으로 순서를 바꿔도 속성의 이름과 일치되서 할당되기 때문에 순서는 의미가 없음
// // console.log(name, age, isValid); // Neo 22 true (순서대로 출력)

// console.log(name); // Neo
// console.log(age); // 22
// console.log(isValid); // true



// 선언과 분리
// const user = {
// 	name: 'Neo',
// 	age: 22,
// 	isValid: true,
// };
// let name;
// let age;
// let isValid;
// if (user) {
// 	({ name, age, isValid } = user);
// 	// 객체 구조 분해 할당에서 선언과 분리하는 코드에서는 반드시 소괄호로 감싸줘야 함
// 	// if 조건문의 코드블록 내에서 선언 불가 내용은 배열의 구조 분해 할당과 동일함
// }
// console.log(name, age, isValid); // Neo 22 true



// 기본값
// const user = {
// 	name: 'Neo',
// 	age: 22,
// };

// const { isValid = false } = user;
// console.log(isValid); // false

// const { age = 37 } = user; // 기본값 무시됨
// console.log(age); // 22



// 변수명 변경
// const user = {
// 	name: 'Neo',
// 	age: 22,
// 	isValid: true,
// };
// const { name: nm, age: ag, isValid: iv } = user;
// // 프로퍼티 키: 새 변수명
// // 각각의 프로퍼티 키에 매핑되어 해당 프로퍼티 값이 지정한 변수명에 할당되는 구조
// console.log(nm, ag, iv); // Neo 22 true
// console.log(name, age, isValid); // ReferenceError 발생



// 기본값 + 변수명 변경
// const user = {
// 	name: 'Neo',
// 	age: 22,
// };
// const { name: nm, age: ag, isValid: iv = false } = user;
// console.log(nm, ag, iv); // Neo 22 false



// 나머지 할당
const user = {
	name: 'Neo',
	age: 22,
	isValid: true,
};
// const { name, ...rest } = user;
// console.log(name, rest); // Neo { age: 22, isValid: true }

const { age, ...rest } = user;
console.log(age, rest); // 22 { name: 'Neo', isValid: true }
// 앞에 정의한 변수를 제외한 나머지 프로퍼티들을 묶어 rest라는 변수에 객체 데이터로 할당됨