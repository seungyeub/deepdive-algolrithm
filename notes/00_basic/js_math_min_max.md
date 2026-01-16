# 💎 JavaScript Math.min & Math.max 활용 가이드

> 여러 숫자 중 가장 작은 값 또는 큰 값을 찾는 내장 메서드입니다.

## 🔑 주요 특징
1. **스프레드 연산자 결합:** 배열의 원소들을 인자로 전달할 때 필수입니다.
   ```javascript
   const nums = [10, 20, 5];
   Math.min(...nums); // 5
   ```

2. **비어있는 배열 주의:** 빈 배열에 스프레드를 쓰면 `Math.min()`이 되어 `Infinity`가 반환됩니다.

## 🛠️ 실전 방어 코드 (Empty Array Case)
```javascript
  const result = arr.length > 0 ? Math.min(...arr) : -1;
```

## ⚠️ 성능 주의사항
- `...` 스프레드 연산자는 배열의 요소를 스택에 인자로 쌓기 때문에, 배열 크기가 수만 개 이상으로 매우 크다면 `RangeError: Maximum call stack size exceeded`가 발생할 수 있습니다.
- 대규모 배열은 `reduce((min, cur) => Math.min(min, cur))` 방식을 권장합니다.

## 🚀 성능 최적화: 단일 순회 최솟값 찾기
배열이 크거나 메모리 제한이 엄격할 때 사용하는 패턴입니다.

```javascript
let min = Infinity;
for (const val of arr) {
  if (val > condition && val < min) {
    min = val;
  }
}
const result = min === Infinity ? -1 : min;
```

## 💡 왜 Infinity를 쓰나요?
어떤 숫자와 비교해도 `Infinity`가 더 크기 때문에, 첫 번째로 조건을 만족하는 값을 안전하게 `min`에 저장할 수 있습니다.


# ♾️ JavaScript Infinity 활용

> 어떤 숫자보다도 큰 값을 나타내는 특별한 숫자 데이터입니다.

## 🔑 언제 사용하는가?
- **최솟값 찾기 알고리즘:** 초기 비교 대상이 무조건 통과하도록 `min` 변수를 설정할 때 사용합니다.
- **예외 처리:** 계산 결과가 너무 커서 숫자로 표현할 수 없을 때 발생합니다.

## 🛠️ 실전 패턴
```javascript
let minVal = Infinity; // 최솟값 찾기용 초기화
let maxVal = -Infinity; // 최댓값 찾기용 초기화 (마이너스 인피니티)

console.log(100 < Infinity); // true
console.log(-100 > -Infinity); // true
```

## ⚠️ 주의사항
- `typeof Infinity`는 `"number"`입니다.
- `Infinity`에 숫자를 더하거나 빼도 여전히 `Infinity`입니다.