# 🔠 JavaScript 문자열 인덱싱 (String Indexing)

> 문자열 내의 특정 문자에 접근하고, 이를 추출하여 결합하는 방법입니다.

## 🔑 특정 문자 접근 (Zero-based Indexing)
문자열의 각 문자는 0부터 시작하는 고유의 번호(인덱스)를 가집니다.

[Image showing zero-based indexing of a string "HELLO" where H is 0, E is 1, L is 2, L is 3, O is 4]

1. **대괄호 표기법 (Bracket Notation):** `str[index]` - 가장 많이 쓰이며 직관적입니다.
2. **charAt 메서드:** `str.charAt(index)` - 아주 오래된 방식이지만 가끔 쓰입니다.

```javascript
const word = "HELLO";
console.log(word[0]);      // "H" (첫 번째 글자)
console.log(word[word.length - 1]); // "O" (마지막 글자)
```

## 🛠️ 문자열 합치기 패턴 (The Join Pattern)
배열의 인덱스 리스트를 활용해 새로운 문자열을 만들 때 가장 효율적인 방식입니다.

mapping to characters "O", "E", "H" from "HELLO" and joining them to form "OEH"]

```javascript
// index_list 기반 글자 추출 패턴
const result = index_list.map(i => my_string[i]).join('');
```

## ⚠️ 주의사항
- **불변성 (Immutability):** 자바스크립트에서 문자열은 읽기 전용입니다. `word[0] = 'A'`라고 코드를 짜도 원본 `"HELLO"`는 변하지 않습니다. 수정을 원하면 반드시 새로운 문자열을 생성해야 합니다.
- **범위 초과:** 존재하지 않는 인덱스에 접근하면 `undefined`를 반환합니다.

---

### 🚀 추가 팁: `reduce`로 풀면 어떻게 될까?

사용자님께서 **"다른 방법은 없을까?"**라고 궁금해하실 수도 있을 것 같아, `join`을 쓰지 않고 문자열을 하나씩 누적하는 방식도 짧게 비교해 드릴게요.

```javascript
// reduce를 활용한 방식
function solution(my_string, index_list) {
    return index_list.reduce((acc, cur) => acc + my_string[cur], "");
}
```

- **비교:** `map().join('')`은 중간에 배열을 한 번 더 만들지만 코드가 매우 깔끔하고, `reduce`는 추가 배열 생성 없이 문자열에 바로 더해나가는 차이가 있습니다. (보통은 가독성이 좋은 `map().join('')`을 선호합니다!)