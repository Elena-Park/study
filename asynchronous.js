// 동기 (Synchronous)
// console.log(1);
// console.log(2);
// alert('확인!'); // 팝업 알림창이 뜨고 확인 버튼을 눌러야 다음 코드가 실행됨
// console.log(3);
// console.time('Loop'); // Loop라는 이름의 타이머 시작
// for (let i = 0; i < 1000000000; i++) {} // for문의 수행시간 출력
// console.timeEnd('Loop'); // Loop라는 이름의 타이머 종료
// console.log(4); // 마지막에 4 출력




// // 비동기 (Asynchronous)
// console.log(1);
// console.log(2);
// console.log(3);
// console.time('Loop')
// setTimeout(() => {
// 	for (let i = 0; i < 1000000000; i++) {}
// 	console.timeEnd('Loop')
// }, 2000) // Loop 타이머 사이 for문의 수행시간 + setTimeout에서 설정한 시간인 2초 뒤에 총합 시간 출력
// console.log(4); // 대기시간이 필요없는 4가 먼저 출력됨

// console.log(1);
// const h1El = document.querySelector('h1');
// h1El.addEventListener('click', () => {
// 	console.log('클릭!!');
// }) // 클릭하면 "클릭!!"이라는 문구 나옴
// console.log(2); // 2가 순차적으로 먼저 나옴

// console.log(1);
// fetch('https://www.naver.com/')
// 	.then(res => res.json())
// 	.then(data => console.log(data))
// console.log(2); // 2가 순차적으로 먼저 나옴


/* const h1El = document.querySelector('h1');
h1El.textContent = 'Loading';
const timer = setInterval(() => {
	h1El.textContent += '.';
}, 500); // 0.5초마다 점(.)을 하나씩 추가함 'Loading.....'

const imgEl = document.createElement('img');
imgEl.src = 'https://picsum.photos/3000/2000';
imgEl.addEventListener('load', () => {
	document.body.append(imgEl);
	clearInterval(timer);
	h1El.textContent = 'Done!';
}); // 이미지 로드가 완료되면 인터벌타이머를 종료하고 'Done!' 이라는 글자 출력 */



// 콜백과 콜백지옥

// 메인 JS
/* import { timer } from "./timer.js";
// timer 함수의 인수로 콜백함수를 넣어주고 실행될 코드를 작성
// 콘솔에서 2초 뒤에 timer 함수의 실행내용인 1이 출력되고 그 다음에 2가 출력됨
timer(() => {
	console.log(2);
}); */


/* // 콜백지옥 예시
function renderImage(callback) {
	const imgEl = document.createElement('img');
	imgEl.src = 'https://picsum.photos/2000/1200';
	imgEl.addEventListener('load', () => {
		document.body.append(imgEl);
		callback();
	});
}
// 순차적으로 실행하기 위해 콜백함수 안에 콜백함수를 반복적으로 넣게되면서 개미지옥처럼 보인다해서 콜백지옥이라 불림
renderImage(() => {
	console.log('Done 1');
	renderImage(() => {
		console.log('Done 2');
		renderImage(() => {
			console.log('Done 3');
			renderImage(() => {
				console.log('Done 4');
			});
		});
	});
}); */


/* // 콜백지옥 수정내용 (Promise 문법)
function renderImage() {
	return new Promise(callback => {
		const imgEl = document.createElement('img');
		imgEl.src = 'https://picsum.photos/2000/1200';
		imgEl.addEventListener('load', () => {
			document.body.append(imgEl);
			callback();
		});
	})
}

renderImage()
	.then(() => {
		console.log('Done 1');
		return renderImage();
	})
	.then(() => {
		console.log('Done 2');
		return renderImage();
	})
	.then(() => {
		console.log('Done 3');
		return renderImage();
	})
	.then(() => {
		console.log('Done 4');
		return renderImage();
	}); */




// Promise

// 콜백패턴
/* function timer(callback) {
	setTimeout(() => {
		console.log(1);
		// 매개변수 callback에 인수로 넣은 문자 데이터는 콜백함수의 매개변수(msg)로 들어감
		callback('1 is Done!');
	}, 2000);
}
// timer 함수의 인수로 콜백함수를 넣음
timer(msg => {
	console.log(msg); // msg = '1 is Done!'
	console.log(2);
}); */


// Promise 문법 (1)
function timer() {
	return new Promise(resolve => {
		setTimeout(() => {
			console.log(1);
			resolve('1 is Done!');
		}, 2000);
	});
}
/* function timer() {
	const promise = new Promise(resolve => {
		setTimeout(() => {
			console.log(1);
			resolve('1 is Done!');
		}, 2000);
	});
	return promise;
}
// 위와 같이 변수 선언 후 return 값으로 내보내도 되지만
// 여기서는 변수로 받아서 다른데서 사용하지 않고, 바로 내보내기만 할 것이기떄문에
// 변수는 사용하지 않아도 됨 */

// .then() 메서드 작성
timer().then(msg => {
	console.log(msg); // msg = '1 is Done!'
	console.log(2);
});

// .then() 메서드 여러개 사용시 반드시 직전 .then 메서드로 promise 인스턴스를 반환해줄 수 있어야 함
// 순차적으로 2초 간격으로 실행됨
timer()
	.then(msg => {
		console.log(msg);
		console.log('A');
		return timer(); // Promise 생성자 함수를 다시 반환하겠다(불러오겠다)는 뜻
	})
	.then(msg => {
		console.log(msg);
		console.log('B');
		return timer();
	})
	.then(msg => {
		console.log(msg);
		console.log('C');
	});


// Promise 문법 (2)
// img 요소와 이미지 load 이벤트만 생성
/* function loadImage(srcLink) {
	return new Promise(resolve => {
		const imgEl = document.createElement('img');
		imgEl.src = srcLink; // srcLink = 이미지주소
		imgEl.addEventListener('load', () => {
			resolve(imgEl); // 지정한 시점에 작업을 이행한다는 약속 (작업의 완료 시점)
		});
	})
}

// .then() 메서드를 사용하여 각각의 이미지에 각 작업내용 작성
// Promise 생성자 함수 호출시 지정한 인수 imgEl이 .then() 메서드의 매개변수로 들어감
loadImage('https://picsum.photos/2000/1200').then(imgEl => {
	document.body.append(imgEl);
	console.log('Done~~!');
});
loadImage('https://picsum.photos/100/100').then(imgEl => {
	document.body.append(imgEl);
	console.log('Well Done!');
}); */




// Async & Await

