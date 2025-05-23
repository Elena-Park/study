/*
배열 A는 십만전자의 일단위 주식가격이 들어있습니다.
해당 주식 가격 기준으로 매수와 매도를 1회씩 진행했을때 가능한 최대 수익을 구하는 함수를 작성하세요.

이때 매도는 항상 매수 이후에 이루어지며 수익을 낼수 없는 경우 0을 리턴하세요.

[입력]
주식의 일단위 주가 정보 배열 A

[출력]
최대 수익 값

매개변수 : int[] A
리턴타입 : int
*/

function solution(A) {
	var result = [];

	for (var i = 0; i < A.length - 1; i++) {
		for (var j = i + 1; j < A.length; j++) {
			if (A[i] < A[j]) {
				result.push(A[j] - A[i]);
			}
		}
	}

	return result.length == 0 ? 0 : Math.max.apply(null, result);
}
