// timer.js 모듈
export function timer(callback) {
	setTimeout(() => {
		console.log(1);
		callback(); // 콜백함수로 원하는 실행시점을 지정해주는 역할
	}, 2000)
}