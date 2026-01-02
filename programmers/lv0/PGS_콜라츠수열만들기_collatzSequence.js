/**
 * [Lv0 - 콜라츠 수열 만들기](https://school.programmers.co.kr/learn/courses/30/lessons/181919)
 * - 레벨: Lv0
 * - 유형: 재귀, 구현
 * - 언어: JavaScript
 * * * 📝 Summary:
 * 1이 될 때까지 정해진 연산을 반복하는 콜라츠 추측을 재귀 구조로 구현했습니다.
 * 매 단계의 결과를 배열에 누적하여 반환합니다.
 */

function solution(n, sequence = []) {
  // 1. 상태 기록: 현재 숫자를 수열 배열에 추가
  sequence.push(n);

  // 2. 기초 조건 (Base Case): n이 1에 도달하면 재귀를 멈추고 최종 배열 반환
  if (n === 1) {
    return sequence;
  }

  // 3. 재귀 호출 (Recursive Step): 규칙에 따라 다음 숫자를 계산하여 자기 자신 호출
  // 💡 짝수면 n/2, 홀수면 3n+1로 문제를 쪼개어 내려감
  if (n % 2 === 0) {
    return solution(n / 2, sequence);
  } else {
    return solution(3 * n + 1, sequence);
  }
}

/**
 * 🧩 핵심 아이디어:
 * 1. 재귀 구조: 자기 자신을 호출함으로써 반복문 없이 수열의 다음 항을 찾아감.
 * 2. 상태 전달: 배열(sequence)을 함수의 인자로 계속 넘겨주어 전체 경로를 유지함.
 * 3. 종료 조건: n이 1이 된다는 것이 보장된 문제이므로, 이를 Base Case로 설정하여 무한 루프 방지.
 * * ⏳ 시간 복잡도: O(log N) (일반적으로 값이 감소하지만, 콜라츠 추측 특성상 정확한 단계는 가변적)
 * * 💾 공간 복잡도: O(N) (수열의 길이만큼 재귀 호출 스택과 배열 메모리 사용)
 */

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
