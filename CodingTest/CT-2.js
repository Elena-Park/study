// function solution(s = 0) {
// 	const numbers = String(Math.floor(Math.random() * 1000000000) + s).split('');
// 	return numbers;
// }

// console.log(solution());
// console.log(Array.isArray(solution()));



// function solution(S) {
// 	if ((S % 2) = 0) {
// 		S / 2;
// 	} else {
// 		S - 1;
// 	}
// }

// console.log(solution(13));



// 문장 s가 주어질 때, 각 단어를 거꾸로 뒤집어 모은 문자열 배열을 출력하는 프로그램 구현
// function solution(s) {
// 	let fixMsg = s.replaceAll(/[^a-zA-Z0-9\s]/g, '').split('').reverse().join('').split(' ').reverse();
// 	return fixMsg;
// }

// console.log(solution('Hello, World!?'));



// 0보다 큰 숫자 N개의 모든 숫자를 아우르는 최대 공약수를 구하는 프로그램 구현
// function solution(A) {
//	// 공약수 개념부터 잘 모르겠습니다...
// }



// 마피아 게임 (5개의 숫자 중에 다른 수 2개에 대한 인덱스 번호를 오름차순으로 출력)
function solution(members) {
	for (let i = 0; i < members.length; i++) {
		for (let j = 1; j < members.length; j++) {
			if (members[i] !== members[j]) {
				continue;
			} else {
				return [members[i], members[j]];
			}
		}
		
	}
	var answer = [];
	return answer;
}

console.log(solution([4, 4, 10, 4, 10]));