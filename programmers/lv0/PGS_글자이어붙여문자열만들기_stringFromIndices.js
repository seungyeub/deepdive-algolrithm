/**
 * [Lv0 - 글자 이어 붙여 문자열 만들기](https://school.programmers.co.kr/learn/courses/30/lessons/181915)
 * - 레벨: Lv0
 * - 유형: 문자열 인덱싱, 배열 순회
 * - 언어: JavaScript
 * * * 📝 Summary:
 * index_list에 담긴 숫자를 인덱스로 삼아 my_string에서 해당 위치의 글자를 추출하고,
 * 이를 순서대로 이어 붙여 새로운 문자열을 생성합니다.
 */

function solution(my_string, index_list) {
  // 1. index_list를 순회하며 각 인덱스에 해당하는 글자로 변환
  // 2. 변환된 글자 배열을 하나의 문자열로 합침
  return index_list.map((index) => my_string[index]).join('');
}

/**
 * 🧩 핵심 아이디어:
 * 1. 배열 매핑: index_list의 숫자들을 `my_string[숫자]`라는 글자 데이터로 1:1 매핑합니다.
 * 2. join(''): 배열에 담긴 개별 문자를 빈 문자열 구분자 없이 하나로 연결합니다.
 * * ⏳ 시간 복잡도: O(N) (index_list의 길이에 비례)
 * * 💾 공간 복잡도: O(N) (새로 생성되는 문자열의 길이)
 */

/** 개인 풀이 */
function solution(my_string, index_list) {
  var answer = '';
  let stringList = my_string.split('');
  for (let i = 0; i < index_list.length; i++) {
    answer += stringList[index_list[i]];
  }
  return answer;
}

/** 추가 풀이 방법 */
