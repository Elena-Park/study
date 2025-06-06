// 문자(string)은 따옴표를 사용합니다.
const s1 = 'Neo';
const s2 = '123';
// * 참조 : 따옴표는 '큰 따옴표', '작은따옴표' 둘 중 아무거나 사용해도 무방 (단, 한가지로 통일하여 사용할 것)
// 1) 변수 : 데이터에 이름을 지정해, 그 이름으로 데이터를 재사용할 수 있도록 하는 것
// 2) 선언(Declaration) : 변수나 함수 등을 만들기 위해 작성한 코드를 말함.
// '변수 선언', '함수 선언'과 같이 부를 수 있음

// 템플릿 리터럴(Literal)은 백틱을 사용하며, ${} 안에 데이터를 보간(Interpolation) 합니다.
const s3 = `My name is ${s1}, I'm ${s2}`;

console.log(s3);

console.log('========================================================');

// 배열(Array)
const animals = ['Dog', 'Cat', 'Rabbit'];
const nums = [12, 27, 5, 9, 103];

// 배열의 길이를 확인합니다.
console.log(animals); // (3) ['Dog', 'Cat', 'Rabbit']
console.log(nums); // (5) [12, 27, 5, 9, 103]

// 배열의 아이템 번호(Index)로 아이템을 확인합니다.
// 숫자는 0부터 시작합니다. (Zero-based Numbering)
console.log(animals[2]); // Rabbit
console.log(nums[4]); // 103
// 배열 데이터의 아이템을 번호로 확인하는 것을 '배열 아이템을 인덱싱(indexing)한다'라고 부름 = 배열을 조회한다

// 배열의 모든 아이템을 순회하며 확인합니다.
for (let i = 0; i < animals.length; i += 1) {
	console.log(animals[i]); // Dog Cat Rabbit
}
for (let i = 0; i < nums.length; i += 1) {
	console.log(nums[i]); // 12 27 5 9 103
}

console.log('========================================================');

// 객체(Object) 데이터 순서가 없는 Key(키)와 Value(값)의 쌍으로 이루어진 데이터 집합입니다.
// 객체에 포함된 각 데이터를 속성(Property)라고 부르고,
// 만약 그 데이터가 함수인 경우에는, 메소드(Method)라고 부릅니다.

// const user = {
// 	// Key: Value
// 	name: 'Neo',
// 	age: 85,
// 	isValid: true,
// 	emails: ['neo@abc.com', 'neo@xyz.com'],
// 	hello: function () {
// 		return `My name is ${this.name}, I'm ${this.age}`;
// 	},
// };
// console.log(user); //⇒ { name: 'Neo', age: 85, isValid: true, emails: [ 'neo@abc.com', 'neo@xyz.com' ], hello: [Function: hello] }

// 점 표기법(Dot Notation)을 사용해, 객체의 속성이나 메소드에 접근할 수 있습니다.
// console.log(user.name); //⇒ Neo
// console.log(user.age); //⇒ 85
// console.log(user.isValid); //⇒ true
// console.log(user.emails); //⇒ [ 'neo@abc.com', 'neo@xyz.com' ]
// console.log(user.hello()); //⇒ My name is Neo, I'm 85

// 대괄호 표기법(Bracket Notation)을 사용해, 객체의 속성이나 메소드에 접근할 수 있습니다.
// console.log(user['name']); //⇒ Neo
// console.log(user['age']); //⇒ 85
// console.log(user['isValid']); //⇒ true
// console.log(user['emails']); //⇒ [ 'neo@abc.com', 'neo@xyz.com' ]
// console.log(user['hello']()); //⇒ My name is Neo, I'm 85

console.log('========================================================');

// '참'으로 평가되는 값 (Truthy)
if (true) {}
if ({}) {} // 빈 객체
if ([]) {} // 빈 배열
if (42) {} // 숫자타입 데이터 (0이 아닌 숫자)
if ('0') {} // 문자열타입의 0
if ('false') {} // 문자열타입의 false
if (new Date()) {} // 클래스
if (-42) {} // 음수
if (3.14) {} // 실수
if (-3.14) {} // 음의 실수
if (12n) {} // BigInd - 길이 제한이 없는 큰 정수 (Integer)를 표현하는 데이터타입의 일종
if (Infinity) {} // 무한대
if (-Infinity) {} // 음의 무한대
if (false) {} // 그 외 등등...

// '거짓'으로 평가되는 값 (falsy)
if ('') {} // 빈 문자열 (*주의: 띄어쓰기 한칸이라도 있으면 '일반 문자열'임)
if (false) {}
if (null) {}
if (undefined) {}
if (NaN) {} // Not a Number
if (0) {} // 숫자 0
if (-0) {} // 음의 0
if (0n) {} // BigInd의 0


/* const fruits = ['Apple', 'Banana'];
if (fruits.length) {
	console.log('과일이 있어요!');
	// 1) fruits 변수에 할당된 배열 데이터가 없다면 (빈 배열) length 속성의 값은 0이 됨
	// 2) 숫자 0은 Falsy 값이므로 false로 반환되어 if문은 동작하지 않게 됨
}


const h1El = document.querySelector('h1') // 요소를 잘 찾게되면 h1El 변수는 객체 데이터가 됨 이것을 '요소 참조 객체'라고 함
if (h1El) {
	// console.log(h1El.textContent)
	if (!h1El.textContent) {
		console.log('내용이 없습니다!');
	}  // 1) 현재 H1 엘리먼트 안의 텍스트컨텐츠가 없으므로 '빈 문자열'로 변환되면서 Falsy 값으로 반환됨
		// 2) 앞에 부정연산자(!)를 붙이므로서 False의 반대값인 True가 반환되면서 if문이 동작하게 됨
} */


console.log('========================================================');

const data = {
	string: '123',
	number: 123,
	boolean: true,
	null: null,
	undefined: undefined,
	array: [1, 2, 3],
	object: { a: 1, b: 2 },
	function: function () {},
};

// typeof 연산자
console.log(typeof data.string === 'string');
console.log(typeof data.number === 'number');
console.log(typeof data.boolean === 'boolean');
console.log(typeof data.null === 'object'); // null은 확인할 수 있는 typeof의 타입이 없음 ⭐
console.log(typeof data.undefined === 'undefined');
console.log(typeof data.array === 'object'); // ⭐
console.log(typeof data.object === 'object'); // ⭐
console.log(typeof data.function === 'function');

// 데이터.constructor
console.log(data.string.constructor === String);
console.log(data.number.constructor === Number);
console.log(data.boolean.constructor === Boolean);
// console.log(data.null.constructor); // Error!
// console.log(data.undefined.constructor); // Error!
console.log(data.array.constructor === Array); // ⭐
console.log(data.object.constructor === Object); // ⭐
console.log(data.function.constructor === Function);

console.log('========================================================');

// 삼항 연산자(Ternary Operator)
// 조건 ? (조건이 참일 때 실행) : (조건이 거짓일 때 실행)

/* const fruits = ['Apple', 'Banana', 'Cherry'];

// if 조건문
if (fruits.length > 0) {
	console.log('과일이 있어요!');
} else {
	console.log('과일이 없어요..');
} // 과일이 있어요!

// 삼항 연산자
const message = fruits.length > 0 ? '과일이 있어요!' : '과일이 없어요..';
console.log(message); // 과일이 있어요!

// // 삼항 연산자 - 예시 2
function includesText(el) {
	return el.textContent ? '글자 있음!' : '글자 없음!';
}

const h1El = document.querySelector('h1');
console.log(includesText(h1El)); // 글자 있음! */

console.log('========================================================');

// 전개 연산자(Spread Operator)

// 배열 데이터
const spread = [1, 2, 3];
console.log(spread); // [1, 2, 3]
console.log(...spread); // 1 2 3

const n1 = [1, 2, 3];
const n2 = [2, 3, 4];
const n3 = n1.concat(n2);
const n4 = [...n1, ...n2]; // ⭐
console.log(n3); // [ 1, 2, 3, 2, 3, 4 ]
console.log(n4); //  [ 1, 2, 3, 2, 3, 4 ]

// 객체 데이터
const o1 = { a: 1, b: 2, c: 3 };
const o2 = { b: 99, c: 100, d: 101 };
const o3 = Object.assign({}, o1, o2);
const o4 = { ...o1, ...o2 }; // ⭐
console.log(o3); // { a: 1, b: 99, c: 100, d: 101 }
console.log(o4); // { a: 1, b: 99, c: 100, d: 101 }

console.log('========================================================');

// 논리 연산자 (Logical Operator)

// 논리곱 연산자 (AND : &&)
const a = true;
const b = false;
if (a && b) {
	console.log('참!'); // if문 실행안됨..
}
console.log(a && b); // false

console.log(true && false); // false
console.log(1 && 0); // 0
console.log(1 && 7 && 0); // 0
console.log(1 && 0 && 7); // 0
console.log(0 && 1 && 7); // 0
console.log('X' && {} && null); // null
console.log({} && 'Y' && []); // [] (true)
console.log('' && 0 && undefined); // (아무값도 없음)

console.log('========================================================');

// 논리합 연산자 (OR : ||)
const c = true;
const d = false;
if (c || d) {
	console.log('참참!'); // if문 실행됨!
}
console.log(c || d); // true

console.log(false || true); // true
console.log(0 || 1); // 1
console.log(false || 0 || {}); // {}
console.log(false || 'AB' || null); // AB
console.log(function () {} || undefined || ''); // f () {}
console.log('' || 0 || NaN || false); // false

console.log('========================================================');

// 논리 부정 연산자

// 중첩 사용
console.log(!0); // true
console.log(!!0); // false
console.log(!!!0); // true
console.log(!!!!0); // false

// 거짓(Falsy)
console.log(!null); // true
console.log(!NaN); // true
console.log(!undefined); // true
console.log(!''); // true

// 참(Truthy)
console.log(!{}); // false
console.log(![]); // false
console.log(!'Henry'); // false

console.log('========================================================');

// if문
const age = 20;
if (age >= 18) {
	console.log('성인');
} // 성인

const no = 7;
if (no % 2 === 0) {
	console.log('짝수');
} else {
	console.log('홀수');
} // 홀수

/* 
const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const h1El = document.querySelector('h1');

buttonEl.addEventListener('click', function () {
	const score = Number(inputEl.value);
	if (score >= 90) h1El.textContent = 'A';
	else if (score >= 80) h1El.textContent = 'B';
	else if (score >= 70) h1El.textContent = 'C';
	else if (score >= 60) h1El.textContent = 'D';
	else h1El.textContent = 'F';
});
 */

console.log('========================================================');

// switch문

const prod = '노트북';

switch (prod) {
	case '노트북':
		console.log((3000000).toLocaleString() + '원');
		break;
	case '스마트폰':
		console.log((800000).toLocaleString() + '원');
		break;
	case '키보드':
	case '마우스':
		console.log((120000).toLocaleString() + '원');
		break;
	default:
		console.log('-');
} // 3,000,000원

const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const h1El = document.querySelector('h1.case');

buttonEl.addEventListener('click', function () {
	const prod = inputEl.value;
	switch (prod) {
		case '노트북':
			h1El.textContent = (3000000).toLocaleString() + '원';
			break;
		case '스마트폰':
			h1El.textContent = (800000).toLocaleString() + '원';
			break;
		case '키보드':
		case '마우스':
			h1El.textContent = (120000).toLocaleString() + '원';
			break;
		default:
			h1El.textContent = '-';
	}
});

console.log('========================================================');

/*
for (초기화문; 조건식; 증감식) {
	조건식이 참일 경우 반복 실행될 문;
}
*/

for (let i = 0; i < 10; i += 1) {
	if (i > 5) {
		break;
	} // i 값이 5보다 크면 코드를 중단하겠다는 뜻
	console.log(i);
} // 0 1 2 3 4 5

for (let i = 0; i < 10; i += 1) {
	if (i % 2 === 0) {
		continue;
	} // i 값을 2로 나눈 나머지 값이 0과 일치하면 콘솔에 출력하지 않고 넘어가겠다는 뜻
	console.log(i);
} // 1 3 5 7 9

console.log('========================================================');

/*
	while (조건식) {
		조건식이 참일 경우 반복 실행될 문;
	}
*/

let count = 0;

while (count <= 10) {
	const divEl = document.createElement('div');
	divEl.textContent = count;
	document.body.appendChild(divEl);
	count += 1; // count = count + 1;
} // 0 1 2 3 4 5 6 7 8 9 10

for (let i = 0; i <= 10; i += 1) {
	const divEl = document.createElement('div');
	divEl.textContent = i;
	document.body.append(divEl);
} // 0 1 2 3 4 5 6 7 8 9 10

console.log('========================================================');

// for (const 아이템변수 of 배열) {}

const colors = ['Red', 'Orange', 'Yellow', 'Green'];

for (const color of colors) {
	if (color === 'Yellow') {
		continue;
	}
	console.log(color);
	const divEl = document.createElement('div');
	divEl.textContent = color;
	document.body.appendChild(divEl);
} // Red Orange Green

console.log('========================================================');

// for (const 키변수 in 객체) {}

const profile = {
	name: 'Henry',
	age: 17,
	isValid: true,
	email: 'henrylove@gmail.com',
};

for (const prop in profile) {
	if (prop === 'age') {
		continue;
	} // age 프로퍼티는 스킵하겠다는 뜻
	console.log(prop, profile[prop]); // (콘솔창에서) name Henry   isValid true   email henrylove@gmail.com
	const divEl = document.createElement('div');
	divEl.innerHTML = `<b>${prop}</b>: ${profile[prop]}`;
	document.body.appendChild(divEl); // (웹 페이지상에서) name: Henry  isValid: true  email: henrylove@gmail.com
}

console.log('========================================================');

////////////////// 함수 //////////////////

function hello() {
	return 'Nice to meet U!';
}

// 함수 데이터(Data)
console.log(hello);
console.log(typeof hello);
// 함수라는 데이터 덩어리를 사용하는 개념

// 함수 호출(Call)
console.log(hello());
console.log(typeof hello());
// 함수의 코드 블록 내에 있는 코드에서 반환되는 값을 불러오는(호출하는) 개념
// hello라는 함수를 호출하는 것은 return 키워드로 반환되는 하나의 데이터가 그 자리에 남게 되는 개념

console.log('========================================================');

// 호이스팅(Hoisting)
hello(); // OK!

// 함수 선언문
function hello() {
	console.log('Hello~');
} // 호이스팅 현상으로 인해 코드 최상단으로 끌어올려진 것 처럼 작동함

// 함수 표현식
const world = function () {
	console.log('World~');
}; // 호이스팅 현상 발생 X

world(); // 에러발생

console.log('========================================================');

function sayHi(name) {
	return `Hi, ${name}~`;
	console.log('동작하지 않음!');
}

const h = sayHi('Neo');
console.log(h); // Hi, Neo~

console.log(sayHi('Neo')); // Hi, Neo~

console.log('========================================================');

// function a() {
// 	// return (생략)
// }

// function b() {
// 	return; // undefined (생략)
// }

// function c() {
// 	return undefined;
// }

// console.log(a()); // undefined
// console.log(b()); // undefined
// console.log(c()); // undefined
// 결과적으로 세 함수 모두 undefined를 반환하는 보이드 함수

console.log('========================================================');

// 인수와 매개변수

function add(a, b) {
	return a + b;
}
console.log(add(2, 1)); // 3
console.log(add(7, 4)); // 11
console.log(add('A', 'B')); // AB

// 매개변수 기본값 (Default Value)

function add(a, b = 1) {
	if (a === undefined) {
		console.log('첫번째 인수는 필수값입니다!');
		return; // 조건이 참이라면 if문이 실행되고 return키워드를 만나면서 뒤의 코드는 무시되고 함수 실행이 종료됨
	}
	return a + b;
}
console.log(add(2)); // 매개변수 b에 기본값이 지정되어 있으므로 기본값인 1이 할당됨
console.log(add(2, undefined)); // undefined는 아무것도 아닌 암시적인 값이기때문에 b 입장에선 아무것도 전달이 안된것과 동일함. 따라서 기본값인 1이 할당됨
// 결과적으로 1번과 2번은 같다고 보면 됨
console.log(add()); // undefined + 1 이라는 식이 되므로 이는 숫자로 표현할 수 없으므로 결과는 NaN가 나옴
console.log(add(7, 5)); // 12

// 나머지 매개변수 (Rest Parameter)

function restNumber(a, b, ...rest) {
	console.log(a, b, rest); // 1 2 ► (6) [3, 4, 5, 6, 7, 8]
	return rest.reduce((acc, cur) => acc + cur, 0);
}
const res = restNumber(1, 2, 3, 4, 5, 6, 7, 8);
console.log(res); // 33

console.log('========================================================');

// 화살표 함수 (Arrow Function)

// 일반 함수
function example1() {
	return 'Hello~';
}
const example2 = function (a, b) {
	return a + b;
};
const example3 = function (c) {
	console.log(c);
};

// 화살표 함수
const example11 = () => 'Hello~';
const example22 = (a, b) => a + b;
const example33 = (c) => {
	console.log(c);
};

const obj = {
	funcA() {},
	funcB: function () {},
	funcC: () => {},
};
(name, age) => ({ name: henry });

console.log('========================================================');

// 즉시실행함수 (IIFE, Immediately Invoked Function Expression)

// 함수 정의(표현)
const double = function () {
	console.log(123);
};

// 함수 실행(호출)
// 함수를 호출해야만 정의한 함수를 실행시킬 수 있음
double();

// 함수 정의 및 실행
// 즉시실행함수 (IIFE, Immediately Invoked Function Expression)
// (함수)();

(function () {
	console.log(123);
})();

// 즉시실행함수의 다양한 사용법
(() => {})(); // (화살표함수)();
(function () {})(); // (일반함수)();
(function () {})(); // (일반함수());

console.log('========================================================');

// 콜백(Callback)

const no1 = (callback) => {
	console.log('A');
	callback();
};
const no2 = () => {
	console.log('B');
};

no1(no2);

// function add(a, b, cb) {
// 	// 1초후 실행
// 	setTimeout(() => {
// 		cb(a + b);
// 	}, 1000);
// }
// add(3, 7, (result) => {
// 	console.log(result); // 10
// });

// const h1El2 = document.querySelector('h1');
// h1El2.addEventListener('click', () => {
// 	console.log(h1El.textContent);
// });

console.log('========================================================');

/* // 콜백을 호출하는 타이머 설정
const timeout = setTimeout(() => {
	console.log('Hello~');
}, 5000);

// 타이머 취소
const btnEl = document.querySelector('button.timer');
btnEl.addEventListener('click', () => {
	console.log('타이머 취소!');
	clearTimeout(timeout);
});

// 콜백을 반복 호출하는 타이머 설정
const timeInterval = setInterval(() => {
	console.log('Woooow~');
}, 3000);

// 인터벌 타이머 취소
const btnEl2 = document.querySelector('button.timer');
btnEl2.addEventListener('click', () => {
	console.log('인터벌 타이머 취소!');
	clearInterval(timeInterval);
}); */

console.log('========================================================');

// 표준 내장 객체 (Built-in Object)

// String (문자)

const msg1 = 'Hello world!';
const msg2 = 'The quick brown fox jumps over the lazy dog.';

// .length
console.log(msg1.length); // 12
console.log(msg2.length); // 44

const h2El = document.querySelector('h2.title');
h2El.textContent = msg2.length > 20 ? `${msg2.slice(0, 20)}...` : msg2; // The quick brown fox ...

// .includes()
console.log(msg1.includes('!')); // true
console.log(msg1.includes('dog')); // false

// .replace()
console.log(msg1.replace('world', 'earth')); // Hello earth!
console.log(msg2.replace('fox', 'cat')); // The quick brown cat jumps over the lazy dog.

// .replaceAll()
console.log(msg1.replace(' ', '')); // Helloworld!
console.log(msg2.replace(' ', '')); // Thequick brown fox jumps over the lazy dog.

console.log(msg1.replaceAll(' ', '')); // Helloworld!
console.log(msg2.replaceAll(' ', '')); // Thequickbrownfoxjumpsoverthelazydog.

// .slice()
console.log(msg1.slice(0, 5)); // Hello
console.log(msg1.slice(6, -1)); // -1은 맨 마지막 글자에서 바로 앞의 글자까지를 의미 // world
console.log(msg1.slice(6)); // 시작지점부터 맨끝까지 추출하고 싶다면 두번째 인수를 생략 // world!
console.log(msg2.slice(10, 19)); // brown fox
console.log(msg2.slice(35, -1)); // lazy dog

// .split()
// 띄어쓰기를 기준으로 나누어 배열로 반환
console.log(msg1.split(' ')); // (2) ['Hello', 'world!']
console.log(msg2.split(' ')); // (9) ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog.']

// 빈 문자열 : 모든 글자를 다 쪼갠 후 배열로 반환 (띄어쓰기 포함)
console.log(msg1.split('')); // (12) ['H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', '!']
// 빈 문자열(2) : 두번째 인수 => 반환할 배열 갯수 지정
console.log(msg1.split('', 5)); // (5) ['H', 'e', 'l', 'l', 'o']
console.log(msg1.split('').reverse().join('')); // 모든 글자를 다 쪼갠 후 반대로 뒤집어서 합친다는 의미 // !dlrow olleH

// .toLowerCase()
// .toUpperCase()
console.log(msg1.toLowerCase()); // hello world!
console.log(msg2.toLowerCase()); // the quick brown fox jumps over the lazy dog.

console.log(msg1.toUpperCase()); // HELLO WORLD!
console.log(msg2.toUpperCase()); // THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.

// .trim()
const msg = '  Hi, There!   ';

console.log(msg); // '  Hi, There!   '
console.log(msg.trim()); // 'Hi, There!'

const inputEl2 = document.querySelector('input.trim_txt');
const buttonEl2 = document.querySelector('button.trim_btn');

// Input Box에 값을 입력 후 엔터키를 쳤을때의 이벤트리스터 적용
inputEl2.addEventListener('keydown', (event) => {
	if (event.key === 'Enter') {
		const value = inputEl2.value.trim(); // Input Box에 입력된 값을 trim을 적용해서 value 변수에 할당한다는 의미
		if (value) {
			console.log(`//${value}//`); // value 변수의 값이 true이면(빈 문자열이 아니면) if문 실행
		}
	}
});

// 마우스 클릭 이벤트에도 동일한 이벤트리스너 적용
buttonEl2.addEventListener('click', (event) => {
	const value = inputEl2.value.trim();
	if (value) {
		console.log(`//${value}//`);
	}
});

console.log('--------------------------------------------------------');

// Number (숫자)

// .toFixed()
const num = 3.1415926535;

console.log(num.toFixed(2)); // '3.14' (문자열 타입)
console.log(Number(num.toFixed(2))); // 3.14 (숫자 타입)

// .toLocaleString()
const num1 = 1000;
const num2 = 100000000;
const num3 = num1.toLocaleString();
const num4 = num2.toLocaleString();

console.log(num3); // '1,000' (문자열 타입)
console.log(num4); // '100,000,000' (문자열 타입)
console.log(Number(num3.replaceAll(',', ''))); // 1000 (숫자 타입)
console.log(Number(num4.replaceAll(',', ''))); // 100000000 (숫자 타입)

// 프로토타입 메소드 (Prototype Method)

// Number()
// 더 광범위하게 해석하고 유연함
// Number(데이터)
console.log(Number('123')); // 123
console.log(Number('123.456')); // 123.456
console.log(Number('abc123')); // NaN
console.log(Number('123abc')); // NaN
console.log(Number('')); // 0
console.log(Number('abc')); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number({})); // NaN
console.log(Number([])); // 0

// 정적 메소드 (Static Method)

// Number.parseInt()
// 숫자를 추출해 명확하고 예측 가능하게 동작하며, 진접 지정 가능하고 정수로 변환함
// Number.parseInt(문자, 진수)
console.log(Number.parseInt('123', 10)); // 123
console.log(Number.parseInt('123.456', 10)); // 123
console.log(Number.parseInt('abc123', 10)); // NaN
console.log(Number.parseInt('123abc', 10)); // 123
console.log(Number.parseInt('', 10)); // NaN
console.log(Number.parseInt('abc', 10)); // NaN
console.log(Number.parseInt('true', 10)); // NaN
console.log(Number.parseInt('false', 10)); // NaN

// Number.parseFloat()
// parseInt 장점까지 포함하여 부동소수점 실수까지 처리 (부동소수점 실수로 변환함)
// Number.parseFloat(문자)
console.log(Number.parseFloat('123')); // 123
console.log(Number.parseFloat('123.456')); // 123.456
console.log(Number.parseFloat('abc123')); // NaN
console.log(Number.parseFloat('123abc')); // 123

// Number.isInteger()
console.log(Number.isInteger(123)); // true
console.log(Number.isInteger(3.14)); // false
console.log(Number.isInteger(-82)); // true
console.log(Number.isInteger(0)); // true
console.log(Number.isInteger('123')); // false
console.log(Number.isInteger('abc')); // false

// Number.isNaN()
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(123)); // false
console.log(Number.isNaN(Infinity)); // false
console.log(Number.isNaN('abc')); // false

console.log('--------------------------------------------------------');

// Math (수학)

console.log('// Math.abs() //');
console.log(Math.abs(7)); // 7
console.log(Math.abs(-7)); // 7
console.log(Math.abs(3.14)); // 3.14
console.log(Math.abs(-3.14)); // 3.14

console.log('// Math.ceil() //');
console.log(Math.ceil(3.415926535)); // 4
console.log(Math.ceil(3.1415926535 * 100) / 100); // 3.15

console.log('// Math.floor() //');
console.log(Math.floor(3.7415926535)); // 3
console.log(Math.floor(3.7415926535 * 100) / 100); // 3.74

console.log('// Math.round() //');
console.log(Math.round(3.141)); // 3
console.log(Math.round(3.786)); // 4

// Math.round를 이용헤 소수점 한자리까지 반올림한 값을 구하려 할 때
console.log(Math.round(3.141 * 10) / 10); // 3.1
console.log(Math.round(3.786 * 10) / 10); // 3.8

console.log('// Math.max() //');
console.log(Math.max(10, 128, 12, 49, 7)); // 128

console.log('// Math.min() //');
console.log(Math.min(10, 128, 12, 49, 7)); // 7

const mathNumbers = [10, 128, 12, 49, 7];
console.log(Math.max(...mathNumbers)); // 128
console.log(Math.min(...mathNumbers)); // 7
// 위의 전개연산자로 반환하는 것과 동일한 효과와 결과를 낳음
// 전개연산자가 더 간결하고 직관적이므로 전개연산자를 사용할 것을 권장
console.log(Math.max.apply(null, mathNumbers)); // 128
console.log(Math.min.apply(null, mathNumbers)); // 7

console.log('// Math.random() //');
console.log(Math.random()); // 0.9715976446671295 (랜덤)
console.log(Math.random()); // 0.2514900895845391 (랜덤)

// 원하는 범위의 무작위 정수를 얻는 함수
function roulette(min = 0, max = 10) {
	return Math.floor(Math.random() * (max - min)) + min;
}
console.log(roulette()); // 0~9
// Math.floor(0.8556375381451453 * (10 - 0)) + 0
// Math.floor(8.556375381451453) => 8

console.log(roulette(0, 100)); // 0~99
// Math.floor(0.8556375381451453 * (100 - 0)) + 0
// Math.floor(85.56375381451453) => 85

console.log(roulette(101, 200)); // 101~199
// Math.floor(0.8556375381451453 * (200 - 101 = 99)) + 101
// Math.floor(84.708116276369385) + 101
// Math.floor(185.708116276369385) => 185

console.log('--------------------------------------------------------');

// Date (날짜)

// 'new Date()'생성자 함수
let today = new Date();
console.log(today);

// 타임스탬프에서 각 정보를 얻을 수 있음
console.log(today.getFullYear()); // 년
console.log(today.getMonth() + 1); // 월 (0부터 시작하고 12월은 숫자 11임)
console.log(today.getDate()); // 일
console.log(getDayKR(today.getDay())); // 요일
console.log(today.getHours()); // 시
console.log(today.getMinutes()); // 분
console.log(today.getSeconds()); // 초

// 웹페이지에 시간 출력하기
const h1ElDate = document.querySelector('h1.date');

h1ElDate.textContent = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일 ${getDayKR(today.getDay())} ${today.getHours()}시 ${today.getMinutes()}분 ${today.getSeconds()}초`;

// 요일 : 숫자 => 한글로 바꾸기
function getDayKR(day) {
	switch (day) {
		case 0:
			return '일요일';
		case 1:
			return '월요일';
		case 2:
			return '화요일';
		case 3:
			return '수요일';
		case 4:
			return '목요일';
		case 5:
			return '금요일';
		case 6:
			return '토요일';
	}
}

// 날짜 직접 지정하기
// 년, 월, 일, 시, 분, 초 (요일은 자동설정)
let oldDate = new Date(2021, 11, 16, 17, 23, 31);
console.log(oldDate);

console.log('--------------------------------------------------------');

// .getTime()
// Date.now()

const date1 = new Date(); // 날짜 생성자 함수
const date2 = Date.now(); // 현재 시간을 유닉스 타임으로 반환

console.log(date1); // Thu Oct 17 2024 21:24:37 GMT+0900 (한국 표준시)
console.log(date1.getTime()); // 1729167877155
console.log(date2); // 1729167877155

/* setTimeout(() => {
	// 현재 시간에서 특정시간 빼기
	console.log(Date.now() - 1000000000000); // 729167877155
	// 정적 메소드와 변수 동시 호출
	console.log(Date.now(), date2); // 1729168528684 1729168527682
}, 1000); */

console.log('--------------------------------------------------------');

// .toISOString()
// 날짜 인스턴스의 협정 세계시(UTC)를 'ISO 8601' 포맷으로 반환
// 'ISO 8601'는 국제 표준 규격의 날짜와 시간

console.log(new Date()); // Thu Oct 17 2024 21:40:45 GMT+0900 (한국 표준시)
console.log(new Date().toISOString()); // 2024-10-17T12:40:45.689Z

console.log('------------------------ Array ------------------------');

// Array (배열)

const fruits = ['Apple', 'Banana', 'Cherry'];
const numbers = [17, 20, 199, 5, 48];
const users = [
	{ name: 'Neo', age: 12, email: 'neo@gmail.com' },
	{ name: 'Evan', age: 48, email: 'evan@gmail.com' },
	{ name: 'Lewis', age: 24 },
];

// .length
console.log(fruits.length); // 3

// .at()

// 기본적인 [ ] 대괄호 표기법 배열 인덱싱
console.log(fruits[0]); // Apple
console.log(fruits[fruits.length - 1]); // 끝에서부터 조회하는 방법 // Cherry
// .at() 배열 인덱싱
console.log(fruits.at(0)); // Apple
console.log(fruits.at(-2)); // Banana

// .concat()
const fruits1 = ['Apple', 'Banana', 'Cherry'];
const fruits2 = ['Cherry', 'Orange'];
const fruits3 = fruits1.concat(fruits2);
const fruits4 = [...fruits1, ...fruits2];

console.log(fruits1); // (3) ['Apple', 'Banana', 'Cherry']
console.log(fruits2); // (2) ['Cherry', 'Orange']
console.log(fruits3); // (5) ['Apple', 'Banana', 'Cherry', 'Cherry', 'Orange']
console.log(fruits4); // (5) ['Apple', 'Banana', 'Cherry', 'Cherry', 'Orange']

// .every()
// 배열 아이템을 순회하면서 모든 아이템의 숫자가 200보다 작은지 확인
// const isValid = numbers.every((item) => item < 200);
// console.log(isValid); // true

// 배열의 객체데이터를 순회하면서 모든 객체데이터중에 email 또는 age에 프로퍼티 값이 있는지 확인
console.log(users.every((member) => member.email)); // false
console.log(users.every((member) => member.age)); // true

// .filter()
// 배열 아이템을 순회하면서 30보다 작은 아이템을 찾음
const filteredNumber = numbers.filter((num) => num < 30);
console.log(filteredNumber); // (3) [17, 20, 5]

// 배열의 객체데이터를 순회하면서 콜백함수에서 지정한 프로퍼티를 테스트
const youngUsers = users.filter((member) => member.age < 30);
console.log(youngUsers);
// 0: {name: 'Neo', age: 12, email: 'neo@gmail.com'}
// 1: {name: 'Lewis', age: 24}
const usersWithEmail = users.filter((member) => member.email);
console.log(usersWithEmail);
// 0: {name: 'Neo', age: 12, email: 'neo@gmail.com'}
// 1: {name: 'Evan', age: 48, email: 'evan@gmail.com'}
const usersWithPhone = users.filter((member) => member.phone);
console.log(usersWithPhone); // []

// .find()
// 배열 아이템을 순회하면서 30보다 작은 아이템을 찾음 (단 찾으면 그 이후 아이템은 무시됨)
const foundNumber = numbers.find((num) => num < 30);
console.log(foundNumber); // 17

// 배열의 객체데이터 내의 email 프로퍼티를 테스트하여 email 값이 false인 요소를 찾음
const foundUser = users.find((member) => !member.email);
console.log(foundUser); // {name: 'Lewis', age: 24}

// .findIndex()
// 배열 아이템을 순회하면서 30보다 작은 아이템을 찾음 (단 찾으면 그 이후 아이템은 무시됨)
const findIndexNumber = numbers.findIndex((num) => num === 5);
console.log(findIndexNumber); // 3

// 배열의 객체데이터 내의 email 프로퍼티를 테스트하여 email 값이 false인 요소를 찾음
const findIndexUser = users.findIndex((member) => !member.email);
console.log(findIndexUser); // 2

// .forEach()
numbers.forEach((num) => {
	console.log(num); // 17 20 199 5 48
});

let sum = 0;
numbers.forEach((num) => {
	sum += num;
});
console.log('합계:', sum); // 합계: 289

for (const num of numbers) {
	if (num > 100) {
		break;
	}
	console.log(num); // 17 20
}

// .includes()
console.log(fruits.includes('Apple')); // true
console.log(fruits.includes('banana')); // false

console.log(numbers.includes(20)); // true
console.log(numbers.includes(200)); // false

// .join()
console.log(fruits.join()); // 작성안함 : Apple,Banana,Cherry (쉼표가 기본값)
console.log(fruits.join('')); // 빈 문자열 : AppleBananaCherry (띄어쓰기도 없이 다 붙여서 반환)
console.log(fruits.join(', ')); // 쉼표, 띄어쓰기 : Apple, Banana, Cherry
console.log(fruits.join('/')); // 슬래쉬 : Apple/Banana/Cherry

// 모든 글자를 다 쪼갠 후 반대로 뒤집어서 합친다는 의미 (10-1 String(문자)파트 내용과 동일)
const msg3 = '안녕하세요! 만나서 반가워요~';
console.log(msg3.split('').reverse().join('')); // !~dlroW olleH

// .map()
const doubleNumbers = numbers.map((num) => num * 2);
console.log(doubleNumbers); // (5) [34, 40, 398, 10, 96]
console.log(numbers); // (5) [17, 20, 199, 5, 48]

const capitalizedFruits = fruits.map((fruits) => fruits.toUpperCase());
console.log(capitalizedFruits); // (3) ['APPLE', 'BANANA', 'CHERRY']
console.log(fruits); // (3) ['Apple', 'Banana', 'Cherry']

const userEmails = users.map((member) => member.email);
console.log(userEmails); // (3) ['neo@gmail.com', 'evan@gmail.com', undefined]
console.log(userEmails.filter((email) => email)); // (2) ['neo@gmail.com', 'evan@gmail.com']



// .push()
// console.log(fruits.push('Durian')); // 4
// console.log(fruits.length); // 4
// console.log(fruits); // (4) ['Apple', 'Banana', 'Cherry', 'Durian']

// console.log(numbers.push(9, 10, 11)); // 8
// console.log(numbers.length); // 8
// console.log(numbers); // (8) [17, 20, 199, 5, 48, 9, 10, 11]

// // .pop()
// console.log(fruits.pop()); // Durian
// console.log(fruits.length); // 3
// console.log(fruits); // (3) ['Apple', 'Banana', 'Cherry']



// .reduce()
/* forEach 메소드로 합계 계산하기 */
let sum1 = 0;
numbers.forEach((num) => {
	sum1 += num;
});
console.log('합계:', sum1); // 합계: 289

/* reduce 메소드로 합계 계산하기 */
// .reduce(콜백함수, 초기값)
/* const sum2 = numbers.reduce((accumulator, num) => {
	return accumulator + num;
}, 0); */
const sum2 = numbers.reduce((acc, num) => acc + num, 0);
// 두번째 인수의 숫자 '0' : reduce 메소드의 콜백 함수가 처음 호출될때 사용할 초기값
// 1) reduce 메소드에 지정된 초기값 => 처음 실행될때 콜백함수의 첫번째 매개변수인 accumulator로 들어감
// 2) 첫번째 콜백함수 호출시 나온 0 + 17의 값 "17"은 두번째 콜백함수 호출시 다시 accumulator로 들어가서 다음 배열 아이템의 값 "20"과 더해지고, 더이상 호출할 아이템이 없을때까지 반복함
console.log('합계:', sum2); // 합계: 289

const sum3 = users.reduce((acc, member) => acc + member.age, 0);
// 원리는 위와 동일하며 차이점은 users 변수 내의 객체데이터 중 age 프로퍼티값만 추출하여 합계를 계산함
console.log(sum3); // 84

// .reverse()
const fruitsA = ['Apple', 'Banana', 'Cherry'];
console.log(fruitsA.reverse()); // (3) ['Cherry', 'Banana', 'Apple']
console.log(fruitsA); // (3) ['Cherry', 'Banana', 'Apple']

const fruitsB = ['Apple', 'Banana', 'Cherry'];
console.log([...fruitsB].reverse()); // (3) ['Cherry', 'Banana', 'Apple']
console.log(fruitsB); // (3) ['Apple', 'Banana', 'Cherry']

// split, reverse, join 메소드에 있는 글자 반전 효과와 동일한 내용 추가

// .slice()
const hundredNumbers = [100, 200, 300, 400, 500, 600, 700, 800, 900];
//                       0    1    2    3    4    5    6    7    8
//                      -9   -8   -7   -6   -5   -4   -3   -2   -1

console.log(hundredNumbers.slice(0, 3)); // (3) [100, 200, 300]
console.log(hundredNumbers.slice(4, -1)); // (4) [500, 600, 700, 800]
console.log(hundredNumbers.slice(4)); // (5) [500, 600, 700, 800, 900]
console.log(hundredNumbers.slice(-4)); // (4) [600, 700, 800, 900]
console.log(hundredNumbers.slice(-4, -1)); // (3) [600, 700, 800]
console.log(hundredNumbers); // (9) [100, 200, 300, 400, 500, 600, 700, 800, 900]

// .some()
const isValid = numbers.some((number) => number > 2);
console.log(isValid); // true

console.log(users.some((member) => member.email)); // true
console.log(users.some((member) => member.phone)); // false

// .sort()
// 콜백 미제공으로 유니코드 포인트 순서대로 정렬
numbers.sort();
console.log(numbers); // (5) [17, 199, 20, 48, 5]

// 오름차순으로 정렬
numbers.sort((a, b) => a - b); // 아이템이 a, b 매개변수에 순차적으로 들어가서 빼기 연산자로 나오는 결과는 양수, 음수, 0이며 그 값을 토대로 오름차순으로 정렬하는 것
console.log(numbers); // (5) [5, 17, 20, 48, 199]

// 내림차순으로 정렬
numbers.sort((a, b) => b - a);
console.log(numbers); // (5) [5, 17, 20, 48, 199]

// 나이 오름차순으로 정렬
users.sort((a, b) => a.age - b.age);
console.log(...users);
/* {name: 'Neo', age: 12, email: 'neo@gmail.com'}
{name: 'Lewis', age: 24}
{name: 'Evan', age: 48, email: 'evan@gmail.com'} */

// 나이 내림차순으로 정렬
users.sort((a, b) => b.age - a.age);
console.log(...users);
/* {name: 'Evan', age: 48, email: 'evan@gmail.com'}
{name: 'Lewis', age: 24}
{name: 'Neo', age: 12, email: 'neo@gmail.com'} */

const names = ['Choi', 'Byung', 'Kim', 'Park', 'ahn', 'kim'];
console.log(names.sort()); // ['Byung', 'Choi', 'Kim', 'Park', 'ahn', 'kim']

// abc순으로 정렬
names.sort((a, b) => {
	a = a.toUpperCase();
	b = b.toUpperCase();
	if (a > b) return 1;
	else if (b > a) return -1;
	else return 0;
});
console.log(names); // ['ahn', 'Byung', 'Choi', 'Kim', 'kim', 'Park']

// abc 역순으로 정렬
names.sort((a, b) => {
	a = a.toUpperCase();
	b = b.toUpperCase();
	if (a < b) return 1;
	else if (b < a) return -1;
	else return 0;
});
console.log(names); // ['Park', 'Kim', 'kim', 'Choi', 'Byung', 'ahn']



// .splice()
// 요소 추가
const animals1 = ['Dog', 'Cat', 'Rabbit'];
animals1.splice(2, 0, 'Tiger');
console.log(animals1); // (4) ['Dog', 'Cat', 'Tiger', 'Rabbit']

// 요소 삭제
const animals2 = ['Dog', 'Cat', 'Rabbit'];
animals2.splice(1, 1);
console.log(animals2); // (2) ['Dog', 'Rabbit']
// 요소 교체
const animals3 = ['Dog', 'Cat', 'Rabbit'];
animals3.splice(1, 1, 'Hamster', 'Duck', 'Bird');
console.log(animals3); // ['Dog', 'Hamster', 'Duck', 'Bird', 'Rabbit']
animals3.splice(3);
console.log(animals3); // ['Dog']



// .unshift()
console.log(fruits.unshift('Grape')); // 4
console.log(fruits.length); // 4
console.log(fruits); // (4) ['Grape', 'Apple', 'Banana', 'Cherry']

console.log(numbers.unshift(9, 10, 11)); // 8
console.log(numbers.length); // 8
console.log(numbers); // (8) [9, 10, 11, 17, 20, 199, 5, 48]

console.log(fruits.shift()); // Grape
console.log(fruits.length); // 3
console.log(fruits); // (3) ['Apple', 'Banana', 'Cherry']



// Array.isArray() & Array.from()
const arrayLikeFruits = {
	0: 'Apple',
	1: 'Banana',
	2: 'Cherry',
	length: 3,
}; // 유사 배열 객체

console.log(Array.isArray(fruits)); // true
console.log(Array.isArray(arrayLikeFruits)); // false

///////////////////////////////////

console.log(fruits); // (3) ['Apple', 'Banana', 'Cherry'] <= 배열 데이터
console.log(arrayLikeFruits); // {0: 'Apple', 1: 'Banana', 2: 'Cherry', length: 3} <= 객체 데이터

console.log(fruits[1]); // Banana
console.log(arrayLikeFruits[1]); // Banana

console.log(fruits.length); // 3
console.log(arrayLikeFruits.length); // 3

console.log(fruits.map((fruits) => fruits.toUpperCase())); // (3) ['APPLE', 'BANANA', 'CHERRY'] <= 배열 데이터
console.log(Array.from(arrayLikeFruits).map((fruits) => fruits.toUpperCase())); // (3) ['APPLE', 'BANANA', 'CHERRY'] <= 배열 데이터

// 배열 메소드의 콜백은 항상 현재 반복의 인덱스를 얻을 수 있음
numbers.every((num, idx) => {
	console.log(num, idx); // 17 0 / 20 1 / 199 2 / 5 3 / 48 4
	return true;
});

numbers.filter((num, idx) => {
	console.log(num, idx); // 17 0 / 20 1 / 199 2 / 5 3 / 48 4
});

numbers.reduce((acc, cur, idx) => {
	console.log(acc, cur, idx); // 0 17 0 / 17 20 1 / 37 199 2 / 236 5 3 / 241 48 4
	return acc + cur;
}, 0);

console.log('------------------------ Object ------------------------');

// Object (객체)

// Object.assign()
const target = { a: 1, b: 2 };
const source1 = { b: 4, c: 7 };
const source2 = { c: 9, d: 11 };

// const result = Object.assign(target, source1, source2);
// console.log(result); // {a: 1, b: 4, c: 9, d: 11}
// console.log(target); // {a: 1, b: 4, c: 9, d: 11}

const result = Object.assign({}, target, source1, source2);
console.log(result); // {a: 1, b: 4, c: 9, d: 11}
console.log(target); // {a: 1, b: 2}

const userA = {
	name: 'Young',
	age: 35,
};
const userB = {
	age: 27,
	email: 'youremail@gmail.com',
	isValid: true,
};

// const young = Object.assign(userA, userB);
// console.log(young); // {name: 'Young', age: 27, email: 'youremail@gmail.com', isValid: true}
// console.log(userA); // {name: 'Young', age: 27, email: 'youremail@gmail.com', isValid: true}

const young = Object.assign({}, userA, userB);
console.log(young); // {name: 'Young', age: 27, email: 'youremail@gmail.com', isValid: true}
console.log(userA); // {name: 'Young', age: 35}



// Object.keys()
const user = {
	name: 'Kim',
	age: 39,
	email: 'kim@gmail.com',
	isValid: true,
};
const keys = Object.keys(user);
console.log(keys); // (4) ['name', 'age', 'email', 'isValid']
// const keys = ['name', 'age', 'email', 'isValid']

keys.forEach((key) => {
	const el = document.createElement('div');
	el.innerHTML = `<strong>${key.charAt(0).toUpperCase() + key.slice(1)}</strong>: ${user[key]}`;
	document.body.append(el);
}); // (웹 페이지 상에서) name: Kim   age: 39   email: kim@gmail.com   isValid: true



// Object.values()
const values = Object.values(user);
console.log(values); // (4) ['Kim', 39, 'kim@gmail.com', true]
// const values = ['Kim', 39, 'kim@gmail.com', true]



// JSON
// 자바스크립트 데이터를 JSON 문자로 변환
const json = JSON.stringify(user);
console.log(json); // {"name":"Kim","age":39,"email":"kim@gmail.com","isValid":true}

// JSON 문자를 자바스크립트 데이터로 변환
console.log(JSON.parse(json)); // {name: 'Kim', age: 39, email: 'kim@gmail.com', isValid: true}
