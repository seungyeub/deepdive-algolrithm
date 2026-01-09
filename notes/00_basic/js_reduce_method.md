# 💎 JavaScript Array.reduce() 완벽 가이드

> 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환합니다.

## 🔑 기본 문법

```javascript
array.reduce((accumulator, currentValue) => {
  return nextAccumulator;
}, initialValue);
```


## 🛠️ 실전 활용 패턴

1. **합계 구하기:** 초기값 `0` 사용

```javascript
  const sum = arr.reduce((acc, cur) => acc + cur, 0);
```

2. **모든 요소 곱하기:** `1` 사용

```javascript
  const product = arr.reduce((acc, cur) => acc * cur, 1);
```

3. **최댓값/최솟값 찾기:** 초기값 `Math.max` 활용

```javascript
  const max = arr.reduce((acc, cur) => Math.max(acc, cur), -Infinity);
```


## ⚠️ 주의사항

- **초기값의 중요성:** 곱셈 연산 시 초기값을 생략하거나 0으로 설정하면 의도치 않은 결과(0)가 나옵니다.
- **가독성:** 로직이 너무 복잡하다면 `reduce` 하나에 몰아넣기보다 일반 `for`문이나 여러 단계의 `map/filter`가 나을 수 있습니다.