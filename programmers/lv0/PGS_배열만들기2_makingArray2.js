/**
 * [Lv0 - 배열 만들기 2](https://school.programmers.co.kr/learn/courses/30/lessons/181921)
 * - 레벨: Lv0
 * - 유형: 구현, 정규표현식
 * - 언어: JavaScript
 * * * 📝 Summary:
 * l부터 r까지의 숫자 중 "0"과 "5"로만 구성된 숫자를 필터링합니다.
 * 정규표현식을 사용하면 문자열 내 특정 숫자 포함 여부를 매우 간결하게 판별할 수 있습니다.
 */

function solution(l, r) {
  const result = [];

  // 💡 정규표현식 설명: ^[05]+$
  // ^: 시작, [05]+: 0 또는 5가 하나 이상 반복됨, $: 끝
  const regex = /^[05]+$/;

  for (let i = l; i <= r; i++) {
    // 숫자를 문자열로 바꾸어 정규표현식 검사
    if (regex.test(i.toString())) {
      result.push(i);
    }
  }

  return result.length > 0 ? result : [-1];
}

/**
 * 🧩 핵심 아이디어:
 * 1. 숫자 판별: 숫자를 문자열로 변환한 후, 정규표현식(/^[05]+$/)을 통해 0과 5 이외의 문자가 있는지 빠르게 확인합니다.
 * 2. 예외 처리: 결과 배열이 비어있을 경우 [-1]을 반환하는 조건을 삼항 연산자로 처리했습니다.
 * * ⏳ 시간 복잡도: O(N * M) (N: r-l의 차이, M: 숫자의 자릿수. 최대 1,000,000 * 7자리가 되므로 효율적임)
 * * 💾 공간 복잡도: O(K) (조건을 만족하는 숫자의 개수만큼 저장)
 */

/** 개인 풀이 */
function solution1(l, r) {
  var answer = [];

  for (let i = l; i <= r; i++) {
    const strValue = String(i);
    const checkArr = [...strValue].filter((item) => item.indexOf('5') > -1 || item.indexOf('0') > -1);
    if (strValue.length === checkArr.length) {
      answer.push(i);
    }
  }

  return answer.length === 0 ? [-1] : answer;
}

/** 추가 풀이 방법 */
// - 2진수의 원리를 활용하는 방법
function* generateSpecialNumbers() {
  let i = 1;
  while (true) {
    // 이진수 원리로 0과 5로만 된 숫자 생성
    yield Number(i.toString(2)) * 5;
    i++;
  }
}

function solution2(l, r) {
  const result = [];
  const gen = generateSpecialNumbers(); // 제너레이터 실행 준비

  for (let num of gen) {
    if (num > r) break; // r을 넘으면 즉시 중단
    if (num >= l) result.push(num); // l 이상이면 담기
  }

  return result.length ? result : [-1];
}
