/**
 * [Lv0 - 배열 만들기 5](https://school.programmers.co.kr/learn/courses/30/lessons/181912)
 * - 레벨: Lv0
 * - 유형: 문자열 조작, 필터링
 * - 언어: JavaScript
 * * * 📝 Summary:
 * 문자열 배열의 각 원소에서 특정 위치(s)부터 길이(l)만큼 잘라내어 숫자로 변환합니다.
 * 그중 기준값 k보다 큰 숫자들만 모아 새로운 배열로 반환합니다.
 */

function solution(intStrs, k, s, l) {
  const result = [];

  intStrs.forEach((str) => {
    // 1. s번 인덱스부터 l길이만큼 자르기 (s부터 s+l까지)
    const subStr = str.slice(s, s + l);

    // 2. 숫자로 변환
    const num = Number(subStr);

    // 3. k보다 큰 경우에만 결과 배열에 추가
    if (num > k) {
      result.push(num);
    }
  });

  return result;
}

/**
 * 🧩 핵심 아이디어:
 * 1. 문자열 자르기: `slice(s, s + l)`을 사용해 시작점 s부터 길이 l이 되는 지점인 s+l까지 정확히 추출합니다.
 * 2. 타입 변환: 추출된 부분 문자열을 `Number()` 또는 `parseInt()`를 사용하여 정수로 변환합니다.
 * 3. 효율적 필터링: `forEach`를 사용해 직접 push하거나, `reduce` 또는 `filter`를 조합해 가독성을 높일 수 있습니다.
 * * ⏳ 시간 복잡도: O(N) (intStrs의 길이에 비례)
 * * 💾 공간 복잡도: O(M) (조건을 만족하는 결과값의 개수만큼 저장)
 */

/** 개인 풀이 */
function solution1(intStrs, k, s, l) {
  var answer = [];

  intStrs.map((item) => {
    const sliceStr = Number(item.slice(s, s + l));
    if (sliceStr > k) {
      answer.push(sliceStr);
    }
  });

  return answer;
}

/** 추가 풀이 방법 */
function solution2(intStrs, k, s, l) {
  var answer = [];

  answer = intStrs.reduce((acc, cur) => {
    const sliceStr = Number(cur.slice(s, s + l));
    if (sliceStr > k) acc.push(sliceStr);
    return acc;
  }, []);

  return answer;
}
