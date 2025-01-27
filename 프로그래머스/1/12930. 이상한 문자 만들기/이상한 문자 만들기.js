/*
1. 문자열을 단어별로 나누기
- 공백(" ")을 기준으로 문자열을 나눕니다.
- split(" ") 메서드를 사용해 각 단어를 배열로 나눕니다.

2. 단어 내 문자 변환
- 각 단어를 순회하며 짝수번째와 홀수번째 문자를 처리합니다.
- map()과 split("").map()을 사용해 각 문자에 접근합니다.

3. 변환된 단어들을 다시 합치기
- 변환된 단어 배열을 공백(" ")으로 다시 합칩니다.

4. 시간 복잡도
- 문자열의 길이가 n일 때, 공백 분리, 변환, 재조합 작업은 모두 O(n) 복잡도를 가집니다.
*/

// Best
function solution(s) {
  return s
    .split(" ")
    .map((word) =>
      word
        .split("")
        .map((char, i) =>
          i % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
        )
        .join("")
    )
    .join(" ");
}
