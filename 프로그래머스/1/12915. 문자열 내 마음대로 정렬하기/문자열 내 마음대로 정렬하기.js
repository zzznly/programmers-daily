/*
  정렬이 핵심!
*/

// Best
function solution(strings, n) {
  return strings.sort((a, b) => {
    if (a[n] > b[n]) return 1; // 오름차순
    else if (a[n] < b[n]) return -1; // 내림차순
    else return a > b ? 1 : -1; // 사전순 비교 (n번째 문자열 같을 경우)
  });
}

// #1
function solution(strings, n) {
  return strings.sort((s1, s2) =>
    s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n])
  );
}
