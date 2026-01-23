/**
 * [Lv0 - 간단한 논리 연산](https://school.programmers.co.kr/learn/courses/30/lessons/181722)
 * - 레벨: Lv0
 * - 유형: 논리 연산
 * - 언어: JavaScript
 * * * 📝 Summary:
 * 주어진 논리식 (x1 ∨ x2) ∧ (x3 ∨ x4)를 JavaScript 연산자로 변환하여 계산합니다.
 */

function solution(x1, x2, x3, x4) {
  // ∨ (OR)는 || 연산자로, ∧ (AND)는 && 연산자로 대응됩니다.
  return (x1 || x2) && (x3 || x4);
}

/**
 * 🧩 핵심 아이디어:
 * 1. 기호 매칭:
 * - ∨ (논리합, OR): 둘 중 하나라도 true면 true → JS에서는 `||`
 * - ∧ (논리곱, AND): 둘 다 true여야 true → JS에서는 `&&`
 * 2. 연산자 우선순위: 괄호가 있으므로 괄호 안의 OR 연산이 먼저 수행된 후, 그 결과들을 AND 연산합니다.
 * * ⏳ 시간 복잡도: O(1)
 * * 💾 공간 복잡도: O(1)
 */

/** 개인 풀이 */
function bitOR(value1, value2) {
  return value1 === false && value2 === false ? false : true;
}

function bitAND(value1, value2) {
  return value1 === true && value2 === true ? true : false;
}

function solution1(x1, x2, x3, x4) {
  var answer = true;

  let x12 = bitOR(x1, x2);
  let x34 = bitOR(x3, x4);

  answer = bitAND(x12, x34);

  return answer;
}

/** 추가 풀이 방법 */
