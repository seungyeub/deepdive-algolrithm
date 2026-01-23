# ⚖️ JavaScript 논리 연산자 (Logical Operators)

## 🔑 기호 매칭 테이블

| 수학 기호 | 의미 | JavaScript 연산자 | 특징 |
| :---: | :--- | :---: | :--- |
| **∨** | 논리합 (OR) | `||` | 하나라도 true면 true |
| **∧** | 논리곱 (AND) | `&&` | 모두 true여야 true |
| **¬** | 부정 (NOT) | `!` | true <-> false 반전 |



## 🛠️ 실전 활용
```javascript
const a = true, b = false;

console.log(a || b); // true
console.log(a && b); // false
console.log(!a);    // false
```