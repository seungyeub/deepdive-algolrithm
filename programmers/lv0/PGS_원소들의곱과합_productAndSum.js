/**
 * [Lv0 - 원소들의 곱과 합](https://school.programmers.co.kr/learn/courses/30/lessons/181929)
 * - 레벨: Lv0
 * - 유형: 구현, 수학
 * - 언어: JavaScript
 * * * 📝 Summary:
 * 배열 내 모든 원소의 곱과 합의 제곱을 비교하는 문제입니다.
 * `Array.prototype.reduce()`를 활용하여 누적 연산을 깔끔하게 처리했습니다.
 */

function solution(num_list) {
  // 1. 모든 원소들의 곱 계산
  const product = num_list.reduce((acc, cur) => acc * cur, 1);

  // 2. 모든 원소들의 합 계산
  const sum = num_list.reduce((acc, cur) => acc + cur, 0);

  // 3. 곱이 합의 제곱보다 작은지 비교
  return product < sum ** 2 ? 1 : 0;
}

/**
 * 🧩 핵심 아이디어:
 * 1. 누적 연산: 반복문 대신 `reduce`를 사용하여 코드의 선언적인 특성을 살림.
 * 2. 초기값 설정: 곱셈(`product`)의 초기값은 1, 덧셈(`sum`)의 초기값은 0으로 설정하는 것이 핵심.
 * 3. 거듭제곱: `sum * sum` 대신 `sum ** 2` 연산자를 활용함.
 * * ⏳ 시간 복잡도: O(N) (배열을 두 번 순회하거나 한 번의 순회로 동시 처리 가능)
 * * 💾 공간 복잡도: O(1) (결과값 저장을 위한 변수만 사용)
 */

/** 개인 풀이 */
function solution1(num_list) {
  const mul = num_list.reduce((acc, curr) => {
    return acc * curr;
  }, 1);

  const sum = num_list.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  return mul < sum ** 2 ? 1 : 0;
}

/** 추가 풀이 방법 */
function solution2(num_list) {
  let accMul = 1;
  let accSum = 0;
  for (const num of num_list) {
    accMul *= num;
    accSum += num;
  }
  return accMul < accSum ** 2 ? 1 : 0;
}
