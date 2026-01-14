/**
 * [Lv0 - 수 조작하기 2](https://school.programmers.co.kr/learn/courses/30/lessons/181925)
 * - 레벨: Lv0
 * - 유형: 구현, 성능 비교
 * - 언어: JavaScript
 * * * 📝 Summary:
 * 배열의 인접 원소 차이를 조작키로 역산하는 문제입니다.
 * 세 가지 방식(매핑, 함수형, 명령형)의 장단점을 비교 분석했습니다.
 */

// [방식 1] 매핑 테이블 + for 루프 (균형 잡힌 방식) - 최종 채택
function solution(numLog) {
  const controlMap = { 1: 'w', '-1': 's', 10: 'd', '-10': 'a' };
  let result = '';

  for (let i = 1; i < numLog.length; i++) {
    const diff = numLog[i] - numLog[i - 1];
    result += controlMap[diff];
  }
  return result;
}

/**
 * 🧩 핵심 아이디어:
 * 1. 비교 연산: i와 i-1을 비교할지, i와 i+1을 비교할지에 따라 루프의 시작과 끝 범위를 정확히 설정해야 합니다.
 * 2. 매핑 테이블: if문의 반복을 객체로 대체하여 가독성을 높였습니다.
 * 3. 공간 효율성: slice() 같은 복사 메서드는 대량의 데이터(10만 개) 처리 시 메모리 부하를 줄 수 있음을 인지해야 합니다.
 * * ⏳ 시간 복잡도: O(N)
 * * 💾 공간 복잡도: O(N)
 */

/** 개인 풀이 */
// [추가 방식 1] if 분기 & for 루프 (가장 빠른 방식)
// - 장점: 메모리 효율 최상, 직관적인 인덱스(i+1) 활용.
// - 단점: 분기문이 많아 코드가 길어짐.
function solution1(numLog) {
  let answer = '';
  for (let i = 0; i < numLog.length - 1; i++) {
    let diff = numLog[i + 1] - numLog[i];
    if (diff === 1) answer += 'w';
    if (diff === -1) answer += 's';
    if (diff === 10) answer += 'd';
    if (diff === -10) answer += 'a';
  }
  return answer;
}

/** 추가 풀이 방법 */
// [추가 방식 2] slice & map (함수형 접근)
// - 장점: 코드가 선언적이고 간결함.
// - 단점: slice()로 인한 메모리 추가 소비 (데이터가 많을 때 불리).
function solution2(numLog) {
  const convert = { 1: 'w', '-1': 's', 10: 'd', '-10': 'a' };
  return numLog
    .slice(1)
    .map((v, i) => convert[v - numLog[i]])
    .join('');
}
