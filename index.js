let 안녕 = '하세요';
// let hi = 'hello';
let HI = 'HELLO';

console.log(안녕);
// console.log(hi);
console.log(HI);

const B = 123; // 상수 선언과 동시에 값 초기화
console.log(B);

// B = 456; // TypeError: Assignment to constant variable.

// const C;
// C = 123; // SyntaxError: Missing initializer in const declaration

// 선언 후 할당
let hi;
hi = 'hello';

// 선언과 동시에 초기화
let halo = 'hellowwww!';

// 한 즐에 여러 변수 선언하고 초기화
let name = 'Jhon',
	age = 13,
	msg = `My name is ${name}. I'm ${age} years old.`;

// 상수는 보통 대문자로 표기
const TESTCASE = 10;
const BIRTHDAY = '2020.01.20';

console.log(msg);
console.log(BIRTHDAY);

// 호이스팅

// var키워드 사용
console.log(name_1); // undefined
var name_1 = 'John';
console.log(name_1); // John

// 호이스팅(Hoisting)
var name_2;
console.log(name_2); // undefined
name_2 = 'Mike';
console.log(name_2); // Mike

// let, const 키워드 사용
/* console.log(name_3); // ReferenceError: Cannot access 'name_3' before initialization
let name_3 = 'Chris';

console.log(name_4); // ReferenceError: Cannot access 'name_4' before initialization
const name_4 = 'William'; */

let hello;
console.log(hello);

// 객체 데이터
let user = {
	name: 'David',
	age: 27,
};
console.log(user); // { name: 'David', age: 27 }

user.weight = 75;
console.log(user); // { name: 'David', age: 27, weight: 80 }

delete user.age;
console.log(user); // { name: 'David', weight: 80 }

// 객체 복사의 문제점 & 얕은 복사 & 깊은 복사
/* let person = {
	name: 'Samuel',
	age: 32,
};
let copy = person;

copy.name = 'Park';
console.log(copy.name); // Park
console.log(person.name); // Samuel Park

person.age = 45;
console.log(person.age); // 45
console.log(copy.age); // 32 45 */

// for in 반복문을 이용한 얕은 복사
/* let person = {
	name: 'Samuel',
	age: 32,
};
let copy = {};

for (let key in person) {
	copy[key] = person[key];
}

copy.name = 'Park';
console.log(copy.name); // Park
console.log(person.name); // Samuel

person.age = 45;
console.log(person.age); // 45
console.log(copy.age); // 32 */

// Object.assign() 메소드를 이용한 얕은 복사
/* let person = {
	name: 'Samuel',
	age: 32,
};
let copy = Object.assign({}, person);
// 빈 객체에 person 체를 Merge시켜서 copy변수에 할당하라는 뜻

copy.name = 'Park';
console.log(copy.name); // Park
console.log(person.name); // Samuel

person.age = 45;
console.log(person.age); // 45
console.log(copy.age); // 32 */

// 전개 연산자(...)를 이용한 얕은 복사
/* let person = {
	name: 'Samuel',
	age: 32,
};
let copy = { ...person };

copy.name = 'Park';
console.log(copy.name); // Park
console.log(person.name); // Samuel

person.age = 45;
console.log(person.age); // 45
console.log(copy.age); // 32 */

// JSON 객체를 이용한 깊은 복사
// stringify는 객체를 문자열로 변환하는데 이때 원본 객체와의 참조가 끊김
let person = {
	name: 'Samuel',
	age: 32,
	sizes: {
		height: 180,
		weight: 70,
	},
};
// stringify: js object -> string / parse: string -> js object
let copy = JSON.parse(JSON.stringify(person));
// person을 복사할 때 (stringify) person 객체를 문자열로 만들고 (parse) 다시 이 문자열을 객체로 만들어서 copy변수에 할당하라는 뜻

copy.sizes.height++;
copy.sizes.weight--;

// 결과값
console.log(copy.sizes.height); // 181
console.log(copy.sizes.weight); // 69
console.log(person.sizes.height); // 180
console.log(person.sizes.weight); // 70

// 타입변환

console.log(String(123)); // "123"
console.log(String(NaN)); // "NaN"
console.log(String(true)); // "true"

console.log(Number('')); // 0
console.log(Number('123')); // 123
console.log(Number('hello')); // NaN
console.log(Number('true')); // NaN
console.log(Number('undefined')); // NaN
console.log(parseInt(123.123)); // 123
console.log(parseFloat(123.123)); // 123.123

console.log(Boolean('')); // false
console.log(Boolean('123')); // true
console.log(Boolean(0)); // false
console.log(Boolean(123)); // true

console.log('hello' + 12);

// 연습 문제
const day = 10;
let weekend = '';

switch (day) {
	case 1:
		weekend = '월요일';
		break;
	case 2:
		weekend = '화요일';
		break;
	case 3:
		weekend = '수요일';
		break;
	case 4:
		weekend = '목요일';
		break;
	case 5:
		weekend = '금요일';
		break;
	case 6:
		weekend = '토요일';
		break;
	case 7:
		weekend = '일요일';
		break;
	default:
		weekend = '[Error] 1~7까지의 숫자만 입력해주세요!';
}
console.log(weekend);

// for of 반복문
// for (const 변수 of 배열(반복 가능한 데이터)) {}

//Collection 객체 자체가 Symbol.iterator 속성(property)을 가지고 있어야 동작 가능한 유형
// ES6에 새로 추가된 Collection 기반의 반복 구문
let language = 'Javascript';
let text = '';

for (let x of language) {
	text += x;
	console.log(x); // (한글자씩) J a v a s c r i p t
}
console.log(text); // Javascript

const colors = ['Red', 'Orange', 'Yellow', 'Green'];

for (const color of colors) {
	console.log(color);
}

// do ... while 반복문
let count = 0;

do {
	console.log(count); // 0 1 2
	count++;
} while (count < 3);

// 반복문 연습문제 (0부터 10까지의 숫자 중 짝수만 구해 그 짝수들의 합을 구하라)
const UNTIL_NUM = 10;
let sum = 0;

for (let i = 0; i <= UNTIL_NUM; i++) {
	if (i % 2 === 0) {
		// 0 2 4 6 8 10
		sum += i; // sum = sum + i -> 0 + 2 + 4 + 6 + 8 + 10 = 30
	}
}

console.log(sum); // 30

// 반복문 연습문제 2 (중첩 for문을 이용하여 2단부터 9단까지 출력해주는 코드 작성)
for (let i = 2; i <= 9; i++) {
	for (let j = 1; j <= 9; j++) {
		console.log(`${i} x ${j} = ${i * j}`);
	}
}

// 함수 연습문제 (두 정수를 입력받아 가장 큰 값을 출력해주는 함수를 작성하세요)

/* function MAX(x, y) {
	if (x > y) {
		return x;
	} else {
		return y;
	}
} */

function MAX(x, y) {
	return x > y ? x : y;
}

console.log(MAX(0, 3));
console.log(MAX(-1, 5));
console.log(MAX(100, 7));

// 함수 연습문제 (작은 값을 출력해주는 함수 작성)
function MIN(x, y) {
	return x < y ? x : y;
}

console.log(MIN(0, 3));
console.log(MIN(-1, 5));
console.log(MIN(100, 7));
