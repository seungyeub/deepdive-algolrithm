# ✂️ JavaScript 문자열 자르기: slice() vs substring()

> 문자열의 특정 부분을 추출할 때 가장 자주 사용되는 메서드들입니다.

## 🔑 slice(start, end)
- **특징:** `start` 인덱스부터 `end` 인덱스 **직전**까지 추출합니다.
- **음수 인덱스:** 뒤에서부터의 위치를 의미합니다 (예: -1은 마지막 글자).

[Image illustrating the difference between slice start and end parameters on a string]

## 🛠️ 실전 활용: 특정 길이만큼 자르기
"인덱스 `s`부터 길이 `l`만큼 자르고 싶다"면 공식처럼 아래와 같이 사용합니다.
```javascript
const str = "123456789";
const s = 2, l = 4;

// s(2)부터 s+l(6) 직전까지 추출 -> "3456"
const result = str.slice(s, s + l);
```

## ⚠️ 주의사항
- 원본 문자열은 **변경되지 않습니다.** (새로운 문자열 반환)
- `end` 인덱스를 생략하면 문자열의 끝까지 추출합니다.