# 🚀 Programmers 풀이 정리

> [Programmers](https://programmers.co.kr/) 코딩 테스트/연습 문제 풀이를 정리하는 공간입니다.
> 레벨별로 정리하며, 기업 코테 대비에 초점을 둡니다.

---

## 📂 폴더 구조

programmers/
  lv0/
  lv1/
  lv2/
  lv3/
  lv4/
  README.md    ← 현재 파일

- 기본은 **레벨별**로 폴더를 나누고,
- 필요하면 **기출 / 스킬 체크 / 코딩테스트 모의고사** 등으로 하위 폴더를 쪼갤 수 있습니다.
<!--
  - 예) `lv2/kakao/`, `lv2/skill-check/` 등
-->
---

## 🧾 파일 네이밍 규칙

- 형식

  `programmers/lv{레벨}/PGS_{문제이름_카멜케이스}.{언어확장자}`
<!--
- 예시

  - `programmers/lv2/PGS_기능개발_functionDevelopment.js`
  - `programmers/lv3/PGS_이중우선순위큐_doublePriorityQueue.py`
-->
> `PGS_` prefix로 프로그래머스 문제임을 구분합니다.

---

## 📋 풀이 목록

| 레벨 | 문제 이름 | 유형 | 언어 | 풀이 코드 | 비고 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 0 | 콜라츠 수열 만들기 | 재귀, 구현 | JS | [`lv0/PGS_콜라츠수열만들기_collatzSequence.js`](./lv0/PGS_콜라츠수열만들기_collatzSequence.js) | ✅ 재귀 기초 및 Base Case 연습 |
| 0 | 코드 처리하기 | 구현, 시뮬레이션 | JS | [`lv0/PGS_코드처리하기_codeProcessing.js`](./lv0/PGS_코드처리하기_codeProcessing.js) | 💡 상태(mode) 토글 로직 활용 |
| 0 | 주사위 게임 2 | 구현, 수학 | JS | [`lv0/PGS_주사위게임2_diceGame2.js`](./lv0/PGS_주사위게임2_diceGame2.js) | 🎲 Set을 활용한 중복 제거 패턴 |
| 0 | 원소들의 곱과 합 | 구현, 수학 | JS | [`lv0/PGS_원소들의곱과합_productAndSum.js`](./lv0/PGS_원소들의곱과합_productAndSum.js) | 🔢 reduce를 이용한 누적 연산 연습 |
| 0 | 이어 붙인 수 | 구현, 최적화 | JS | [`lv0/PGS_이어붙인수_concatenatedNumber.js`](./lv0/PGS_이어붙인수_concatenatedNumber.js) | 🚀 filter와 reduce 방식 비교 분석 |
| 0 | 수 조작하기 2 | 구현 | JS | [`lv0/PGS_수조작하기2_controlNumber2.js`](./lv0/PGS_수조작하기2_controlNumber2.js) | 🗝️ 객체 매핑을 활용한 역산 구현 |
| 0 | 수열과 구간 쿼리 2 | 탐색, 배열 | JS | [`lv0/PGS_수열과구간쿼리2_sequenceQuery2.js`](./lv0/PGS_수열과구간쿼리2_sequenceQuery2.js) | 🔍 범위 내 조건부 최솟값 찾기 |
| 0 | 배열 만들기 2 | 구현 | JS | [`lv0/PGS_배열만들기2_makingArray2.js`](./lv0/PGS_배열만들기2_makingArray2.js) | 🎯 정규표현식(Regex) 필터링 패턴 |
| 0 | 주사위 게임 3 | 구현 | JS | [`lv0/PGS_주사위게임3_diceGame3.js`](./lv0/PGS_주사위게임3_diceGame3.js) | 🎲 정렬 및 빈도수 분석 기법 비교 |
| 0 | 간단한 논리 연산 | 논리 연산 | JS | [`lv0/PGS_간단한논리연산_simpleLogic.js`](./lv0/PGS_간단한논리연산_simpleLogic.js) | ⚖️ 논리 기호와 연산자 매핑 |
| 0 | 글자 이어 붙여 문자열 만들기 | 문자열 | JS | [`lv0/PGS_글자이어붙여문자열만들기_stringFromIndices.js`](./lv0/PGS_글자이어붙여문자열만들기_stringFromIndices.js) | 🔠 배열 인덱싱과 문자열 결합 |

<!-- - 필요하면 “기업/공채/인적성/기출” 같은 컬럼을 추가해도 좋습니다. -->
<!--
    ✅ : 풀이 완료 및 복습 불필요
    🔄 : 풀었지만 다시 한번 풀어볼 필요 있음
    💡 : 새로운 접근 방식이나 개념을 배운 문제
    ⚠️ : 스택 오버플로나 성능 주의가 필요한 문제
 -->

---

## ✏️ 개별 문제 정리 방식

- 기본적으로는 아래 형식을 사용합니다.

  ### [Lv2 - 기능개발](https://school.programmers.co.kr/learn/courses/30/lessons/42586)

  - 레벨: 2
  - 유형: 큐, 시뮬레이션
  - 언어: JavaScript (Node.js)

  - 핵심 아이디어
    - 남은 작업 일수를 큐에 넣고,
    - 앞에서부터 배포 가능한 개수만큼 묶어서 꺼내기

  - 시간 복잡도
    - 문제 개수를 N이라 할 때, O(N)

  - 관련 개념
    - 큐, 배열 순회, 시뮬레이션
    - `notes/02_data_structure/stack_queue_deque.md` 참고

---

## ⚙️ 실행 방법 (예시)

- Node.js (JavaScript)

  - 프로그래머스는 보통 웹 상에서 실행하지만,
    로컬 테스트 시에는 간단한 입력/출력 래퍼를 만들어 테스트합니다.
<!--
  - 예)
    - `solution` 함수를 export 한 뒤, 테스트용 스크립트에서 임의 입력으로 호출
-->
---

## 🎯 목표

- **Lv1**
  - 기본 문법 및 간단한 구현 문제에 익숙해지기
- **Lv2**
  - 큐/스택/해시/정렬/완전탐색 등 코테 핵심 유형에 익숙해지기
- **Lv3 이상**
  - 그래프, 최단거리, DP, 고급 자료구조와 친해지기

> 실전 코딩 테스트를 대비해서,
> “어떤 기업 / 어떤 년도 기출인지”까지 나중에 표에 적어 두면
> 복습할 때 큰 도움이 될 것입니다.