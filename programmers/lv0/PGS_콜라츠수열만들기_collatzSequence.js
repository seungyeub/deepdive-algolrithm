/**
 * [Lv0 - 콜라츠 수열 만들기](https://school.programmers.co.kr/learn/courses/30/lessons/181919)
 * - 레벨: Lv0
 * - 유형: 구현, 반복문 vs 재귀
 * - 언어: JavaScript
 * * * 📝 Summary:
 * n이 1이 될 때까지 짝수/홀수 조건에 따라 연산을 반복하는 콜라츠 수열을 구현합니다.
 * 반복문(While) 방식과 재귀(Recursion) 방식의 차이점을 분석했습니다.
 */

// [방법 1] while 반복문 (실무/성능 지향)
// - 장점: 메모리 효율이 좋고 연산 횟수가 많아도 안전함 (Stack Overflow 없음).
// - 단점: 외부 변수(result)를 직접 수정하는 '명령형' 방식임.
function solution(n) {
  const result = [n];
  while (n !== 1) {
    n = n % 2 === 0 ? n / 2 : 3 * n + 1;
    result.push(n);
  }
  return result;
}

/*
// [방법 2] 재귀 함수 (선언적/수학적 지향)
// - 장점: 코드가 간결하고 수학적 정의에 가까움.
// - 단점: 호출이 너무 깊어지면 스택 오버플로우 위험이 있음.
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
*/

/**
 * 🧩 핵심 아이디어:
 * 1. 종료 조건: 두 방식 모두 n이 1이 되는 시점을 종료 조건으로 잡아야 무한 루프에 빠지지 않습니다.
 * 2. 누적 저장: 중간 과정을 배열에 push()하여 수열의 전체 흐름을 기록합니다.
 * 3. 효율성: 일반적인 코딩 테스트나 실무에서는 while문이 더 안전한 선택인 경우가 많습니다.
 * * ⏳ 시간 복잡도: O(N) (수열의 길이에 비례)
 * * 💾 공간 복잡도: O(N) (수열 저장 공간)
 */

/** 개인 풀이 */
function solution1(n) {
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

/** 추가 풀이 방법 */
// 없음
