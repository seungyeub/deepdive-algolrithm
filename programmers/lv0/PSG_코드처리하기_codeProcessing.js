/**
 * [Lv0 - 코드 처리하기](https://school.programmers.co.kr/learn/courses/30/lessons/181932)
 * - 레벨: Lv0
 * - 유형: 구현, 시뮬레이션
 * - 언어: JavaScript
 * * * 📝 Summary:
 * 입력값 '1'을 기점으로 모드(0/1)를 전환하며, 각 모드별로 지정된 인덱스 조건(홀/짝)에
 * 맞는 문자만 추출하여 결과 문자열을 구성하는 문제입니다.
 */

function solution(code) {
  let mode = 0;
  let ret = '';

  for (let idx = 0; idx < code.length; idx++) {
    const char = code[idx];

    if (char === '1') {
      // [상태 제어] "1"을 만나면 모드 스위칭
      // 💡 산술 연산(1 - mode)을 활용하여 0과 1을 토글함
      mode = 1 - mode;
    } else {
      // [데이터 처리] 현재 mode에 따라 조건부 문자열 추가
      if (mode === 0) {
        // mode 0: idx가 짝수일 때만 추가
        if (idx % 2 === 0) ret += char;
      } else {
        // mode 1: idx가 홀수일 때만 추가
        if (idx % 2 !== 0) ret += char;
      }
    }
  }

  // 결과가 빈 문자열이면 "EMPTY" 반환
  return ret === '' ? 'EMPTY' : ret;
}

/**
 * 🧩 핵심 아이디어:
 * 1. 상태 관리 패턴: mode 변수를 플래그(Flag)로 활용하여 전체 로직의 흐름을 제어함.
 * 2. 분기 최적화: 모드 변경 조건과 문자 추가 조건을 분리하여 가독성을 높임.
 * 3. 예외 처리: 최종 결과값의 존재 여부에 따라 기본값("EMPTY")을 반환하는 예외 로직 포함.
 * * ⏳ 시간 복잡도: O(N) (code 문자열을 한 번 순회)
 * * 💾 공간 복잡도: O(N) (최악의 경우 전체 문자열 길이만큼 ret에 저장)
 */

/** 개인 풀이 */
