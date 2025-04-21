// 이벤트 (Event)

const parentEl = document.querySelector('.parent');
const childEl = document.querySelector('.child');
const childEls = document.querySelectorAll('.child');
const anchorEl = document.querySelector('a');
const anchorEls = document.querySelectorAll('a');

// 대상.addEventListener(이벤트종류, 핸들러)
// -> 대상에서 청취(Listen)할 이벤트 종류와 이벤트가 발생했을 때 호출할 콜백(Handler)을 등록
/* 
parentEl.addEventListener('click', () => {
	console.log(`I'm a parent!`);
});

childEl.addEventListener('click', () => {
	console.log(`I'm child~`);
});

// 모든 child 객체에 addEventListener 적용
childEls.forEach((el) => {
	el.addEventListener('click', () => {
		console.log(`I'm child~`);
	});
});
 */



// 대상.removeEventListener(이벤트종류, 핸들러)
// -> 대상에 등록했던 이벤트 핸들러를 제거
/* 
const handler = () => {
	console.log(`I'm a parent! Ver.2`);
};

parentEl.addEventListener('click', handler);
childEl.addEventListener('click', () => {
	parentEl.removeEventListener('click', handler);
});

// 모든 child 객체에 removeEventListener 적용
childEls.forEach((el) => {
	el.addEventListener('click', () => {
		console.log(`I'm child~ Ver.2`);
		parentEl.removeEventListener('click', handler);
	});
});
 */



// 이벤트 객체
// -> .addEventListener() 이벤트 핸들러의 첫 매개변수로, 발생한 이벤트의 정보를 가진 객체(이벤트 객체)를 전달함
/* 
// 'evt' 매개변수의 이벤트 객체
parentEl.addEventListener('click', evt => {
	console.log(parentEl); // <div class="parent">...</div>
	console.log(evt); // 매개변수에 할당된 이벤트 객체 정보 확인
	// PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
	console.log(evt.target); // .target : 이벤트 객체의 target이라는 프로토타입 객체를 확인 <div class="parent">...</div>
});

// 'inp' 매개변수의 이벤트 객체
const inputEl = document.querySelector('input');
inputEl.addEventListener('keydown', inp => {
	console.log(inp.key); // .key : 키보드로 입력한 값을 즉시 출력 (한글의 경우 자음, 모음 모두 별개로 즉시 출력 ex. 값 => ㄱ ㅏ ㅂ ㅅ)
	console.log(inputEl.value); // .value : 방금 입력한 값 이전에 입력했던 값들만 출력 (ex. 1 입력 => (없음) / 2 입력 => 1 / 3 입력 => 12 / 4 입력 => 123)
	// console.log(i.target.value); // inputEl.value와 동일
	console.log(inp.target); // .target : 이벤트 객체의 target이라는 프로토타입 객체를 확인 <input type="text">
});
 */



// 이벤트의 기본 동작 방지
// event.preventDefault()

// <a> 태그에서 페이지 이동 방지
// const anchorEl = document.querySelector('a');
anchorEl.addEventListener('click', evt => {
	evt.preventDefault();
});

// 모든 <a> 태그에 페이지 이동 방지 적용
// const anchorEls = document.querySelectorAll('a');
anchorEls.forEach(ac => {
	ac.addEventListener('click', evt => {
		evt.preventDefault();
	})
});

// 마우스 휠의 스크롤 동작 방지
// const parentEl = document.querySelector('.parent');
// parentEl.addEventListener('wheel', evt => {
// 	evt.preventDefault();
// });




// 이벤트 버블링
// event.stopPropagation()
// 하위 요소에서 상위 요소로의 이벤트 전파(버블)를 중지

// window.addEventListener('click', evt => {
// 	console.log('1) Window!');
// 	// evt.stopPropagation();
// });

// // documentElement = HTML 문서 요소
// document.documentElement.addEventListener('click', evt => {
// 	console.log('2) HTML!');
// 	// evt.stopPropagation();
// });

// document.body.addEventListener('click', evt => {
// 	console.log('3) Body!');
// 	// evt.stopPropagation();
// });

// parentEl.addEventListener('click', evt => {
// 	console.log('4) Parent!');
// 	// evt.stopPropagation();
// });

// childEl.addEventListener('click', evt => {
// 	console.log('5) Child!');
// 	// evt.stopPropagation();
// });

// anchorEl.addEventListener('click', evt => {
// 	console.log('6) Anchor!');
// 	// evt.stopPropagation();
// });


// 이벤트 버블링
// 두번째 예시 (클릭 이벤트로 툴팁 띄우고 닫기)
// const tooltipEl = document.querySelector('.tooltip');

// // 첫번째 child 요소 클릭시 tooltip 팝업 띄우기
// childEl.addEventListener('click', evt => {
// 	tooltipEl.classList.add('active'); // active 클래스 추가
// 	evt.stopPropagation(); // 이벤트 전파 중지
// });

// // 첫번째 child 요소 및 툴팁을 제외한 나머지 공간 클릭시 tooltip 팝업 닫기
// window.addEventListener('click', () => {
// 	tooltipEl.classList.remove('active'); // active 클래스 삭제
// });



// 이벤트 캡처링

// window.addEventListener('click', evt => {
// 	console.log('1) Window!');
// });

// // documentElement = HTML 문서 요소
// document.documentElement.addEventListener('click', evt => {
// 	console.log('2) HTML!');
// });

// document.body.addEventListener('click', evt => {
// 	console.log('3) Body!');
// }, {
// 	capture: true // 이벤트 캡처링
// });

// parentEl.addEventListener('click', evt => {
// 	console.log('4) Parent!');
// }, {
// 	capture: true // 이벤트 캡처링
// });

// childEl.addEventListener('click', evt => {
// 	console.log('5) Child!');
// });

// anchorEl.addEventListener('click', evt => {
// 	console.log('6) Anchor!');
// });



// 한글 입력 이벤트 중복
// 브라우저 입력기(IME)의 CJK(중국어, 일본어, 한글) 문자 구성 중에는 이벤트 핸들러가 2번 실행될 수 있음
// event.isComposing - 한글 입력 중인지 여부를 확인

const inputEl = document.querySelector('input');
inputEl.addEventListener('keydown', evt => {
	if (evt.isComposing) return; // 한글 입력중이면 true가 되어 다음 코드는 무시되어 H1 요소에 한번만 출력됨
	if (evt.key === 'Enter') {
		const h1El = document.createElement('h1');
		h1El.textContent = inputEl.value;
		document.body.append(h1El);
	}
});



// 양식 이벤트

const formEl = document.querySelector('#login');
const inputEls = document.querySelectorAll('input');

// input box 이벤트
inputEls.forEach(el => {
	// input 요소가 포커스인(focus) 됐을 때
	el.addEventListener('focus', () => {
		formEl.classList.add('active');
		// active 클래스 추가
	});
	// input 요소가 포커스아웃(blur) 됐을 때
	el.addEventListener('blur', () => {
		formEl.classList.remove('active');
		// active 클래스 삭제
	});
	// input 값이 변경되었을 때 (input / change)
	el.addEventListener('change', evt => {
		console.log(evt.target.value);
		// 입력한 ID, PW 값 출력
	});
});

// button 이벤트
// 로그인 (submit) 버튼
formEl.addEventListener('submit', evt => {
	evt.preventDefault();
	const loginData = {
		id: evt.target[0].value,
		pw: evt.target[1].value,
	};
	console.log('서버로 제출했습니다!', loginData);
	// 서버로 제출했습니다! {id: '20design', pw: '123456789'}
});

// 초기화 (reset) 버튼
formEl.addEventListener('reset', evt => {
	console.log('모든 값이 초기화되었습니다!');
	// 모든 값이 초기화되었습니다!
});