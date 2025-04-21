// 객체 리터럴
/* const neo = {
	name: 'Neo',
	age: 22,
	getBirthYear() {
		const year = new Date().getFullYear(); // 현재 년도 산출
		return year - this.age;
	},
};
const evan = {
	name: 'Evan',
	age: 7,
	getBirthYear() {
		const year = new Date().getFullYear(); // 현재 년도 산출
		return year - this.age;
	},
};

console.log(neo.getBirthYear()); // 2002
console.log(evan.getBirthYear()); // 2017 (getBirthYear 메서드가 없으면 TypeError 발생!)
console.log(neo.getBirthYear === evan.getBirthYear); // false */



// 프로토타입
/* function User(name, age) {
	this.name = name;
	this.age = age;
}
// 프로토타입 메서드
User.prototype.getBirthYear = function () {
	const year = new Date().getFullYear(); // 현재 년도 산출
	return year - this.age;
};

const neo = new User('Neo', 22);
const evan = new User('Evan', 7);

console.log(neo); // User {name: 'Neo', age: 22}
console.log(evan); // User {name: 'Evan', age: 7}
// ▼ User {name: 'Neo', age: 22}
//   age: 22
//   name: "Neo"
//   ▼ [[Prototype]]: Object
//     ▶︎ getBirthYear: ƒ () // 프로토타입 프로퍼티 내에 getBirthYear 함수가 들어있음
//     ▶︎ ...
console.log(neo.getBirthYear()); // 2002
console.log(evan.getBirthYear()); // 2017
console.log(neo.getBirthYear === evan.getBirthYear); // true */



// 클래스
/* // 클래스 선언문
class User {
	// 생성자
	constructor(name, age) {
		// 인스턴스 생성 및 초기화
		this.name = name;
		this.age = age;
	}
	// 프로토타입 메서드
	getBirthYear() {
		const year = new Date().getFullYear(); // 현재 년도 산출
		return year - this.age;
	}
}
// 인스턴스 생성
const neo = new User('Neo', 22);
const evan = new User('Evan', 7);
// 인스턴스의 참조
console.log(neo); // User {name: 'Neo', age: 22}
console.log(evan); // User {name: 'Evan', age: 7}
// 프로토타입 메서드 호출
console.log(neo.getBirthYear()); // 2002
console.log(evan.getBirthYear()); // 2017
// 프로토타입 메서드 일치여부 확인
console.log(neo.getBirthYear === evan.getBirthYear); // true */



// Getter & Setter
class UserInfo {
	constructor(first, last) {
		this.firstName = first;
		this.lastName = last;
	}
	get fullName() {
		return `${this.firstName} ${this.lastName}`
	}
	set fullName(value) {
		const names = value.split(' '); // 공백을 기준으로 쪼갠 후 배열로 반환
		this.firstName = names[0]; // 배열의 첫번째 아이템을 firstName으로 지정
		this.lastName = names[1]; // 배열의 두번째 아이템을 lastName으로 지정
	}
}

const elena = new UserInfo('Elena', 'Park');
// Get
console.log(elena.fullName); // Elena Park

// Set
elena.fullName = 'Lewis Kim';
console.log(elena); // UserInfo { firstName: 'Lewis', lastName: 'Kim', fullName: 'Lewis Kim' }




// 정적 메서드 (1)
const fruits = new Array('Apple', 'Banana', 'Cherry');
// const fruits = ['Apple', 'Banana', 'Cherry'];

Array.prototype.abc = function () {
	console.log(this); // this = fruits []
	// (3) ['Apple', 'Banana', 'Cherry']
	return this.map(item => item.slice(0, 1).toLowerCase()); // fruits.map();
};

const newFruits = fruits.abc(); // Array.prototype.abc의 map 메서드 결과값
console.log(newFruits); // (3) ['a', 'b', 'c']
console.log(Array.isArray(fruits)); // true
console.log(Array.isArray(newFruits)); // true

console.log(['Orange', 'Mango'].abc());
// (2) ['Orange', 'Mango'] (114번 줄에 대한 결과값)
// (2) ['o', 'm']


// 정적 메서드 (2)
class User {
	constructor(first, last) {
		this.firstName = first;
		this.lastName = last;
	}
	static isUser(user) {
		return user instanceof User;
	}
}

const neo = new User('Neo', 'Park');
const evan = new User('Evan', 'Yang');
const lewis = {
	name: 'Lewis Lee',
	age: 27
};

console.log(User.isUser(neo)); // true
console.log(User.isUser(evan)); // true
console.log(User.isUser(lewis)); // false

// 만약 static 키워드와 neo 생성자 함수도 없다면?
/* isUser(user) {
	return user instanceof User;
}
console.log(neo.isUser(lewis)); // Uncaught ReferenceError: neo is not defined 발생 */



// 상속
/* class User {
	constructor(name) {
		this.name = name;
	}
	getName() {
		return this.name;
	}
}
// Guest 클래스에 User 클래스를 상속받겠다는 의미 (User클래스 포함)
class Guest extends User {
	constructor(name) {
		// super 키워드는 객체 리터럴 또는 클래스의 [[Prototype]] 속성에 접근하거나 슈퍼클래스의 생성자를 호출하는데 사용
		super(name);
	}
}
// Member 클래스에 User 클래스를 상속받겠다는 의미 (User클래스 포함)
class Member extends User {
	constructor(name) {
		super(name);
		this.private = true;
	}
	getPrivate() {
		return this.private;
		// 생성된 인스턴스 내 [[Prototype]] 내부에서 확인가능
		// [[Prototype]]: User
		// 	constructor: class Member
		// 	getPrivate: ƒ getPrivate() ★
		// 	[[Prototype]]: Object
	}
}
// Admin 클래스에 Member 클래스를 상속받겠다는 의미 (Member, User클래스 포함)
class Admin extends Member {
	constructor(name) {
		super(name);
		this.admin = true;
	}
}

const neo = new Guest('Neo');
const evan = new Member('Evan');
const lewis = new Admin('Lewis');

console.log(neo); // Guest {name: 'Neo'}
console.log(evan); // Member {name: 'Evan', private: true}
console.log(lewis); // Admin {name: 'Lewis', private: true, admin: true} */
