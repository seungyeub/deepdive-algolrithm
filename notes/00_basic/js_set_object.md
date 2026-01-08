# 💎 JavaScript Set 객체 활용법

> `Set`은 중복되지 않는 유일한 값들의 집합을 다루는 자료구조입니다.

## 🔑 주요 특징
1. **중복 자동 제거:** 동일한 값을 여러 번 추가해도 하나만 유지됩니다.
2. **빠른 존재 확인:** 특정 값이 있는지 확인하는 속도가 배열보다 빠릅니다.

## 🎲 알고리즘 문제에서의 활용: '중복 개수 판별'
여러 개의 변수 중 값이 같은 것이 몇 개인지 찾을 때 유용합니다.

```javascript
const values = [a, b, c];
const uniqueCount = new Set(values).size;

// uniqueCount가 1: 모든 값이 같음
// uniqueCount가 2: 두 개만 같고 하나는 다름
// uniqueCount가 3: 모든 값이 다름
```

## 🛠️ 주요 메서드
- `size`: 요소의 개수를 반환 (배열의 `length`와 유사)
- `add(value)`: 새로운 요소 추가 (이미 있는 값은 무시됨)
- `has(value)`: 특정 값의 존재 여부를 Boolean으로 반환
- `delete(value)`: 특정 값 삭제
- `clear()`: 모든 요소 제거

## 💡 실전 팁: 배열과 Set의 상호 변환
배열의 중복을 제거한 뒤 다시 배열로 만들 때 자주 사용되는 패턴입니다.
```javascript
const nums = [1, 2, 2, 3, 3, 3];
const uniqueNums = [...new Set(nums)]; // [1, 2, 3]
```

## 🚀 Growth Backlog
- [ ] 오늘 배운 `Set`의 `size` 패턴을 다른 '중복 찾기' 문제에도 적용해보기
- [ ] `a**2`와 `a*a` 중 어떤 것이 대규모 연산에서 유리할지 가볍게 찾아보기
