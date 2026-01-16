/**
 * [Lv0 - 수열과 구간 쿼리 2](https://school.programmers.co.kr/learn/courses/30/lessons/181923)
 * - 레벨: Lv0
 * - 유형: 배열 슬라이싱, 탐색, 수학
 * - 언어: JavaScript
 * * * 📝 Summary:
 * 각 쿼리 범위 [s, e] 내에서 k보다 큰 값들을 필터링한 후,
 * 그 중 가장 작은 값을 추출하는 문제입니다.
 */

function solution(arr, queries) {
  return queries.map(([s, e, k]) => {
    // 1. 범위 내의 원소 중 k보다 큰 값만 추출
    const filtered = arr.slice(s, e + 1).filter((v) => v > k);

    // 2. 결과가 없으면 -1, 있으면 최솟값 반환
    return filtered.length > 0 ? Math.min(...filtered) : -1;
  });
}

/**
 * 🧩 핵심 아이디어:
 * 1. 2차원 배열 구조분해: queries.map(([s, e, k]) => ...)를 사용하여 가독성을 높였습니다.
 * 2. 범위 추출: slice(s, e + 1)을 사용하여 필요한 구간만 잘라내어 연산 대상을 줄였습니다.
 * 3. 최댓값/최솟값: Math.min(...array) 스프레드 연산자를 사용하여 필터링된 결과 중 최솟값을 즉시 찾았습니다.
 * * ⏳ 시간 복잡도: O(Q * N) (Q: 쿼리 개수, N: 배열 길이. 최대 1,000 * 1,000 = 1,000,000으로 안정권)
 * * 💾 공간 복잡도: O(N) (필터링된 부분 배열 저장용)
 */

/** 개인 풀이 */

/** 추가 풀이 방법 */
// 🚀 추가 방법: 단일 순회 최적화 (for 루프 활용)
// 배열을 자르거나 거르지 않고, 인덱스로 직접 접근하여 최솟값을 갱신하는 방식입니다.
// - 장점:
//   - 1. 메모리 절약: slice()와 filter()는 새로운 배열을 메모리에 할당하지만, 이 방식은 변수 하나 (minVal) 만 사용하므로 매우 경제적입니다.
//   - 2. 속도 향상: 불필요한 배열 복사와 순회 과정을 생략하고, 한 번의 루프 안에서 조건 검사와 최솟값 비교를 동시에 끝냅니다.
//   - 3. 스택 안정성: Math.min(...filtered) 방식은 배열이 너무 크면 스택 오버플로우가 발생할 수 있지만, for문은 데이터 양에 상관없이 안정합니다.
function solution1(arr, queries) {
  return queries.map(([s, e, k]) => {
    let minVal = Infinity; // 최솟값을 찾기 위해 가장 큰 값으로 초기화

    for (let i = s; i <= e; i++) {
      if (arr[i] > k && arr[i] < minVal) {
        minVal = arr[i];
      }
    }

    return minVal === Infinity ? -1 : minVal;
  });
}
