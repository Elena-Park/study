/*
[문제 설명]
블록으로 피라미드 모양의 탑을 쌓으려고 합니다. 피라미드 모양의 탑은 꼭대기는 1개의 블록을 사용하고, 그 아래는 2개의 블록, 그 아래에는 3개의 블록의 방식으로 쌓습니다.
n 층의 피라미드 모양의 탑을 쌓을 때, 필요한 블록의 수를 구하는 함수, solution을 완성해주세요.

예를 들어, 4층의 피라미드에는 총 10개의 블록이 필요합니다.
> 4층에 사용되는 블록 수 1개
> 3층에 사용되는 블록 수 2개
> 2층에 사용되는 블록 수 3개
> 1층에 사용되는 블록 수 4개
> 피라미드에 사용되는 블록의 총수는 10개입니다.

[입력 형식]
- n은 1 이상 1,000 이하의 정수입니다.

[출력 형식]
- 피라미드 모양의 탑을 쌓는데 필요한 블록의 총수를 구합니다.
*/

/**
 * @param n {number}
 * @returns {number}
 */
function solution(n) {
	return ((1 + n) * n) / 2;
}

solution;
