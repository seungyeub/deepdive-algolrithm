/**
 * [Lv0 - 콜라츠 수열 만들기](https://school.programmers.co.kr/learn/courses/30/lessons/181919)
 * 유형: 재귀, 구현
 * 언어: JavaScript
 */

function solution(n, sequence = []) {
  // 현재 숫자를 수열에 추가
  sequence.push(n);

  // 기초 조건 (Base Case): n이 1이 되면 수열 반환
  if (n === 1) {
    return sequence;
  }

  // 재귀 호출 (Recursive Case)
  if (n % 2 === 0) {
    return solution(n / 2, sequence);
  } else {
    return solution(3 * n + 1, sequence);
  }
}

// 핵심 아이디어:
// 1. 결과 배열(sequence)을 매개변수로 넘겨주며 상태를 유지함.
// 2. n이 1이 되는 순간 모든 재귀를 멈추고 최종 배열을 리턴함.

// 시간 복잡도: O(log N) (평균적으로 숫자가 줄어들지만, 콜라츠 추측의 특성상 정확한 예측은 어려움)

/** 개인 풀이 */
function solution(n) {
  var answer = [n];

  while (n !== 1) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = 3 * n + 1;
    }
    answer.push(n);
  }
  return answer;
}
