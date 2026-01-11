/**
 * [Lv0 - 이어 붙인 수](https://school.programmers.co.kr/learn/courses/30/lessons/181928)
 * - 레벨: Lv0
 * - 유형: 구현, 리팩토링(성능 최적화)
 * - 언어: JavaScript
 * * * 📝 Summary:
 * 배열의 홀수와 짝수를 각각 이어 붙인 수의 합을 구하는 문제입니다.
 * 직관적인 filter 방식과 효율적인 reduce 방식 두 가지로 구현했습니다.
 */

// 방법 1. 가독성 중심 (filter & join)
function solution(num_list) {
  const odd = num_list.filter((n) => n % 2 !== 0).join('');
  const even = num_list.filter((n) => n % 2 === 0).join('');
  return Number(odd) + Number(even);
}

// 방법 2. 성능 최적화 중심 (단일 순회 reduce) - 최종 채택
function solution1(num_list) {
  const { odd, even } = num_list.reduce(
    (acc, cur) => {
      if (cur % 2 !== 0) acc.odd += cur;
      else acc.even += cur;
      return acc;
    },
    { odd: '', even: '' }
  );

  return Number(odd) + Number(even);
}

/**
 * 🧩 핵심 아이디어:
 * 1. 가독성 vs 성능: filter 방식은 로직이 명확하지만 배열을 2번 순회합니다. 반면 reduce 방식은 1번의 순회(Single Pass)로 결과를 도출하여 대량 데이터 처리에 유리합니다.
 * 2. 객체 구조 분해: reduce의 초기값으로 객체를 넘겨 홀/짝 상태를 한 번에 관리했습니다.
 * 3. 형 변환: 문자열 결합 후 최종 단계에서 Number()를 통해 산술 연산이 가능하도록 변환했습니다.
 * * ⏳ 시간 복잡도: O(N) (방법 2 기준, 배열 1회 순회)
 * * 💾 공간 복잡도: O(N) (결과를 담는 문자열 및 객체 생성)
 */

// --------------------------------------------------

/** 개인 풀이 */
function solution2(num_list) {
  let odd = '';
  let even = '';

  num_list.map((item) => {
    if (item % 2 === 0) {
      even += `${item}`;
    } else {
      odd += `${item}`;
    }
  });

  return Number(odd) + Number(even);
  sum1 * sum2 * sum3;
}

/** 추가 풀이 방법 */
function solution4(num_list) {
  let oddStr = '';
  let evenStr = '';

  for (const num of num_list) {
    if (num % 2 !== 0) oddStr += num;
    else evenStr += num;
  }

  return Number(oddStr) + Number(evenStr);
}
