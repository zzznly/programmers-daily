function solution(numbers) {
  // 1. 숫자를 문자열로 변환합니다.
  const nums = numbers.map(String);
  
  // 2. 커스텀 정렬: 두 문자열을 이어 붙인 결과를 비교합니다.
  //    예를 들어, a와 b가 있을 때, (b+a)가 (a+b)보다 크면 b가 a보다 앞에 오도록 정렬합니다.
  nums.sort((a, b) => (b + a).localeCompare(a + b));
  
  // 3. 정렬된 문자열을 모두 이어 붙입니다.
  const answer = nums.join('');
  
  // 4. 가장 큰 수가 "0"으로 시작한다면(예: [0, 0, 0]인 경우) "0"을 반환합니다.
  return answer[0] === '0' ? '0' : answer;
}
