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
// person을 복사할 때 (stringify) person 객체를 JSON 문자열로 만들고 (parse) 이 문자열을 다시 객체로 만들어서 copy변수에 할당하라는 뜻

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

// Collection 객체 자체가 Symbol.iterator 속성(property)을 가지고 있어야 동작 가능한 유형
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



// Method
// 함수 저장 : 배열의 요소(Element) 혹은 객체의 속성(Property)에 함수를 정의하여 저장 가능
// 객체에 저장된 값이 함수인 경우 이를 "메소드"라 부름

// 배열 내 함수
let list = [
	'John',
	27,
	function hello_func() {
		console.log('hello!!');
	},
];
// 객체 내 함수
let obj = {
	name: 'John',
	age: 27,
	hello_func() {
		console.log('hello~');
	},
};
// 함수 선언문
function hello_func() {
	console.log('hellooooo');
}

list[2](); // hello!!
obj.hello_func(); // hello~
hello_func(); // hellooooo

console.log(typeof list[2]); // function
console.log(typeof obj.hello_func); // function
console.log(typeof hello_func); // function

function func1() {
	console.log('HI~!');
}

function func2() {
	console.log('Nice to meet you!');
}

let obj2 = {
	name: 'Park',
	age: 30,
	func: func1,
};

func1(); // HI~!
func2(); // Nice to meet you!
obj2.func(); // HI~!
console.log(func1 == obj2.func); // true

obj2.func = func2;
obj2.func(); // Nice to meet you!
console.log(func2 == obj2.func); // true



// this
// 메소드에서 객체 내부의 속성(Property) 값에 접근할 수 있는 지시자
// this를 사용하는 method는 추가 가능하며, 이때 this는 runtime에 결정되어 호출한 객체에 따라 다름

let user2 = { name: 'Kim' };
let admin = { name: 'admin' };
// ② this는 각각의 name Property의 값을 불러옴
function hello_user() {
	console.log('Hello, ' + this.name + '!');
}
// ① 각각 객체의 메소드로 추가
user2.func = hello_user;
admin.func = hello_user;

user2.func(); // Hello, Kim!
admin.func(); // Hello, admin!



// .toString()
// 문자열 타입으로 변환
let numToString = 123;
console.log(numToString.toString()); // "123"
console.log(typeof numToString.toString()); // string
console.log(typeof String(numToString)); // string
console.log(typeof (numToString + '')); // string



// .toPrecision()
const num = 3.1415926535;
console.log(num.toPrecision(2)); // 3.1
console.log(Number(num.toPrecision(2))); // 3.1

console.log(typeof num.toPrecision(2)); // string
console.log(typeof Number(num.toPrecision(2))); // number



// Number.isFinite()
console.log(Number.isFinite(-123)); // true
console.log(Number.isFinite(12.45)); // true
console.log(Number.isFinite(0)); // true
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite('Hello')); // false



// String.indexOf()
const msg1 = 'Hello world!';
const msg2 = 'The quick brown fox jumps over the lazy dog.';

console.log(msg1.indexOf('l')); // 2
console.log(msg1.indexOf('l', 3)); // 3
console.log(msg1.lastIndexOf('l')); // 9

console.log(msg1.startsWith('ello')); // false
console.log(msg1.startsWith('ello', 1)); // true
console.log(msg1.endsWith('world')); // false



// 고차함수
// 고차함수를 이용한 함수의 공용화
const ascendingOrder = function (x, y) {
	if (typeof x === 'string') x = x.toUpperCase();
	if (typeof y === 'string') y = y.toUpperCase();
	return x > y ? 1 : -1;
};

const descendingOrder = function (x, y) {
	if (typeof x === 'string') x = x.toUpperCase();
	if (typeof y === 'string') y = y.toUpperCase();
	return x < y ? 1 : -1;
};

const numbers = [17, 20, 199, 5, 48];
const names = ['Choi', 'Byung', 'Kim', 'Park', 'ahn', 'kim'];

console.log(numbers.sort(ascendingOrder)); // [5, 17, 20, 48, 199]
console.log(numbers.sort(descendingOrder)); // [199, 48, 20, 17, 5]
console.log(names.sort(ascendingOrder)); // ['ahn', 'Byung', 'Choi', 'kim', 'Kim', 'Park']
console.log(names.sort(descendingOrder)); // ['Park', 'Kim', 'kim', 'Choi', 'Byung', 'ahn']

let nums = [1, 2, 3, 4, 5];
let callCount = 0; // 함수 콜수 카운팅

console.log('acc\titem\tindex'); // \t = 탭(Tab)
let plus = nums.reduce((acc, item, idx) => {
	// (계산, 배열아이템, 인덱스번호)
	console.log(acc, '\t\t', item, '\t\t', idx);
	callCount += 1;
	return acc + item;
}, 0);
/*
acc	item	index
0		1		0
1		2		1
3		3		2
6		4		3
10		5		4
*/

console.log(callCount); // 5
console.log(plus); // 15

console.log(2 ** 3); // 8
console.log(Math.pow(2, 3)); // 8 (지수 연산자와 동일한 결과)

console.log(Math.sqrt(4)); // 2 (2²)
console.log(Math.sqrt(9)); // 3 (3²)
console.log(Math.sqrt(16)); // 4 (4²)



// 벤치마크 성능 측정
// 밴치마크 측정 대상 함수 전후로 시간을 비교하여 알고리즘 성능 측정

function dateSub(old_date, now_date) {
	return now_date - old_date;
}

function getTimeSub(old_date, now_date) {
	return now_date.getTime() - old_date.getTime();
}

function benchmark(callback_func) {
	let date_1 = new Date(2024, 1, 1); // old_date
	let date_2 = new Date(); // now_date

	let start = Date.now(); // 현재시간
	for (let i = 0; i < 100000; i++) {
		callback_func(date_1, date_2); // (old_date, now_date)
	}
	return Date.now() - start; // Date.now() - Date.now() ?????
}

console.log(`dateSub: ${benchmark(dateSub)}ms`); // dateSub: 19ms
console.log(`getTimeSub: ${benchmark(getTimeSub)}ms`); // getTimeSub: 2ms



// 생성자 함수

// 빵틀
function FishBread(flavor, price) {
	this.Flavor = flavor;
	this.Price = price;
	this.Base = 'flour';
}

// 붕어빵
const bread_1 = new FishBread('cream', 1200);
const bread_2 = new FishBread('redbean', 1000);
const bread_3 = new FishBread('milk', 1500);

console.log(bread_1); // FishBread { flavor: 'cream', price: 1200, base: 'flour' }
console.log(bread_2); // FishBread { flavor: 'redbean', price: 1000, base: 'flour' }
console.log(bread_3); // FishBread { flavor: 'milk', price: 1500, base: 'flour' }


// 일반 함수
// 빵틀
function fishBread(flavor, price) {
	this.Flavor = flavor;
	this.Price = price;
	this.Base = 'flour';
	console.log(Flavor, Price, Base);
}
// 붕어빵
fishBread('cream', 1200); // cream 1200 flour
fishBread('redbean', 1000); // redbean 1000 flour
fishBread('milk', 1500); // milk 1500 flour

// new.target
function User(name, age, job) {
	// console.log(new.target);
	// if : new가 없어서 undefined가 반환되면 실행됨
	// return : new를 붙여서 자기 자신을 다시 한번 더 실행 (재귀함수)
	if (!new.target) return new User(name, age, job);
	this.Name = name;
	this.Age = age;
	this.Job = job;
}

const user_1 = new User('Kim', 39, 'Trainer');
const user_2 = User('Park', 35, 'Developer');

console.log(user_1); // User { name: 'Kim', age: 39, job: 'Trainer' }
console.log(user_2); // User { name: 'Park', age: 35, job: 'Developer' }



// Collection
// Map

const mapColl = new Map(); // 생성자 함수 (인수 없음)

// 요소 추가
mapColl.set('name', 'Park');
mapColl.set(123, 456);
mapColl.set('bool_type', true);
console.log(mapColl); // Map(3) { 'name' => 'Park', 123 => 456, 'bool_type' => true }

// 요소 접근(value 확인)
console.log(mapColl.get('name')); // Park
console.log(mapColl.get(123)); // 456
console.log(mapColl.get('bool_type')); // true

// 개수 확인
console.log(mapColl.size); // 3

// 요소 삭제
mapColl.delete(123);
console.log(mapColl); // Map(2) { 'name' => 'Park', 'bool_type' => true }

// 요소 전체 삭제
mapColl.clear();
console.log(mapColl); // Map(0) {}
console.log(mapColl.size); // 0

// 요소 추가 (메서드 체이닝)
mapColl.set(123, 789).set('Bool', false).set('Fruit', 'Apple');
console.log(mapColl); // Map(3) { 123 => 789, 'Bool' => false, 'Fruit' => 'Apple' }

// 요소 존재 여부 확인
console.log(mapColl.has('Bool')); // true
console.log(mapColl.has('bool_type')); // false (이전에 전체 삭제 했으므로..)


// Map 반복문
const recipeJuice = new Map([
	['Strawberry', 50],
	['Banana', 30],
	['Ice', 20],
]);

for (const item of recipeJuice.keys()) {
	console.log(item); // Strawberry   Banana   Ice
}

for (const amount of recipeJuice.values()) {
	console.log(amount); // 50   30   20
}

for (const entity of recipeJuice) {
	// recipeJuice.entries()를 사용해도 결과값은 동일
	console.log(entity); // (2) ['Strawberry', 50]   (2) ['Banana', 30]   (2) ['Ice', 20]
}

// Map => Object 변환
const recipeJuice_obj = Object.fromEntries(recipeJuice);
// Object => Map 변환
const recipeJuice_kv = Object.entries(recipeJuice_obj);
const recipeJuice_map = new Map(recipeJuice_kv);

console.log(recipeJuice); // Map(3) {'Strawberry' => 50, 'Banana' => 30, 'Ice' => 20}
console.log(recipeJuice_obj); // {Strawberry: 50, Banana: 30, Ice: 20}
console.log(recipeJuice_kv); // (3) [Array(2), Array(2), Array(2)]
console.log(recipeJuice_map); // Map(3) {'Strawberry' => 50, 'Banana' => 30, 'Ice' => 20}



// Collection
// Set

const setColl = new Set(); // 생성자 함수 (인수 없음)
const numSet = new Set([1, 2, 3, 4, 5]);
const strSet = new Set('Hello~!');

console.log(setColl); // Set(0) {size: 0}
console.log(numSet); // Set(5) {1, 2, 3, 4, 5}
console.log(strSet); // Set(6) {'H', 'e', 'l', 'o', '~', '!'}
// 중복된 데이터는 제거되어 'l'은 하나만 남음

// 요소 추가 & 개수 확인
setColl.add(1).add(1).add(10).add(20);
console.log(setColl); // Set(3) {1, 10, 20}
// 중복된 데이터는 제거되어 값'1'은 하나만 남음
console.log(setColl.size); // 3

// 요소 존재 여부 확인
console.log(setColl.has(1)); // true
console.log(setColl.has(2)); // false

// 요소 삭제
setColl.delete(1);
setColl.delete(-1);
console.log(setColl.delete(1)); // true (정상적으로 삭제되었다는 의미)
console.log(setColl.delete(-1)); // false (없는 값이기 때문에 삭제할 것이 없으므로 false)
console.log(setColl); // Set(2) {10, 20}


// Set 반복문
const str = new Set('Hello!');

console.log(str); // Set(5) {'H', 'e', 'l', 'o', '!'}

for (const item of str) {
	console.log(item); // H   e   l   o   !
}

// key값을 저장하진 않지만 value와 동일한 값을 반환
for (const item of str.keys()) {
	console.log(item); // H   e   l   o   !
}

for (const item of str.values()) {
	console.log(item); // H   e   l   o   !
}

// Map과의 호환성을 위해 존재하며, Map과 동일하게 key, value 형태로 반환
for (const item of str.entries()) {
	console.log(item); // [ 'H', 'H' ]   [ 'e', 'e' ]   [ 'l', 'l' ]   [ 'o', 'o' ]   [ '!', '!' ]
}



// 24.11.9 멘토님 답변 연습

// 생성자 함수
function Car(model) { // 관례적으로 대문자로 시작
	this.Model = model; // this는 새로 생성되는 객체를 가리킴
}
const myCar = new Car('Tesla'); // new 키워드와 함께 사용됨
console.log(myCar); // Car {model: 'Tesla'}


// 일반 함수
function car(model) { // 소문자로 시작
	this.Model = model; // this는 전역 객체(window)를 가리킴
	return console.log(this.Model); // 명시적으로 반환값 지정 필요
}
// 직접 호출
// 전역 객체를 오염시킴!
car('Tesla'); // Tesla



// 일반 함수의 객체 반환
function createCar(model) {
	return {
		Model: model,
		Start: function () {
			console.log(`${this.Model} 시동 걸림`);
		},
	};
}
const car01 = createCar('Tesla');
console.log(car01); // {Model: 'Tesla', Start: ƒ}
car01.Start(); // 'Tesla 시동 걸림'



// 생성자 함수로 변경 - 1 (this 키워드로 반환)
function createCar02(model) {
	// 1. new 키워드는 암묵적으로 빈 객체를 생성
	// 2. 이 빈 객체는 this에 바인딩됨
	this.Model = model;
	this.Start = `${this.Model} 시동 걸림`;
	// 3. 명시적인 return문이 없으면 this가 자동으로 반환됨
}
// createCar02 {Model: 'Tesla', Start: 'Tesla 시동 걸림'}

// 생성자 함수로 변경 - 2 (객체 리터럴로 반환)
// function createCar02(model) {
// 	// 1. new로 생성된 this 객체는 무시됨
// 	return { // 2. 직접 객체를 반환
// 		Model: model,
// 		Start: `${Model} 시동 걸림`, // this 키워드 작성시 'undefined 시동 걸림' 반환
// 	};
// }
// {Model: 'Tesla', Start: 'Tesla 시동 걸림'}
const car02 = new createCar02('Tesla');
console.log(car02);


// 원하는 것이 단순히 "객체 생성"이라면 객체 리터럴을 반환하는 팩토리 함수를 사용하는 것이 더 적절할 수 있음

// 1. 생성자 함수
function UserConstructor(name, age) {
	this.name = name;
	this.age = age;
	this.sayHi = function () {
		console.log(`안녕하세요, ${this.name}입니다!`);
	};
}
const user01 = new UserConstructor('Alice', 25); // new 키워드 필요
console.log(user01); // UserConstructor {name: 'Alice', age: 25, sayHi: ƒ}
user01.sayHi(); // '안녕하세요, Alice입니다!'

// 2. 팩토리 함수
function createUser(name, age) {
	return {
		name: name,
		age: age,
		sayHi() {
			console.log(`안녕하세요, ${this.name}입니다!`);
		},
	};
}
const user02 = createUser('Bob', 30); // new 키워드 불필요
console.log(user02); // {name: 'Bob', age: 30, sayHi: ƒ}
user02.sayHi(); // '안녕하세요, Bob입니다!'
