/*
문제 설명]
0 이상의 정수 n이 주어질 때, n의 이진 표현에서 인접한 두 1 사이의 가장 긴 거리를 출력하는 함수, solution을 완성해주세요.
예를 들어, n이 주어질 때의 결과는 다음과 같습니다.
> n : 5
> n의 이진 표현 : 101
> 결과 : 2

> n : 11
> n의 이진 표현 : 1011
> 결과 : 2

[입력 형식]
- n은 0 이상 10^9 이하의 정수입니다.

[출력 형식]
- n의 이진 표현에서 인접한 두 1 사이의 가장 긴 거리를 출력합니다.
 */

/**
 * @param n {number}
 * @return {number}
 */
function solution(n) {
	let maxDistance = 0;
	let curDistance = -1;

	// n이 0 이하가 될 때까지 반복한다.
	while (n > 0) {
		// n의 이진 표현중 최초 1이 나올때까지 거리를 재지 않는다.
		if (curDistance === -1) {
			// n의 이진 표현중 가장 우측값이 1이 나오면 초기화
			if ((n & 1) === 1) curDistance = 0;
		} else {
			// 거리를 1 증가 한다.
			curDistance++;

			// 인접한 1까지의 거리를 계산한다.
			if ((n & 1) === 1) {
				maxDistance = Math.max(maxDistance, curDistance);
				curDistance = 0;
			}
		}

		// n을 우측으로 쉬프트한다.
		n >>= 1;
	}

	return maxDistance;
}

solution;
