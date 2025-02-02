function solution(array, commands) {
  const answer = [];
  
  for (let [i, j, k] of commands) {
    // 1. array에서 i번째부터 j번째까지 자르기 (자바스크립트는 0-index이므로 i-1부터 j까지 자름)
    let sliced = array.slice(i - 1, j);
    
    // 2. 잘라낸 배열을 오름차순 정렬 (숫자 정렬을 위해 compare 함수를 사용)
    sliced.sort((a, b) => a - b);
    
    // 3. 정렬된 배열의 k번째 요소(0-index 기준 k-1)를 결과에 추가
    answer.push(sliced[k - 1]);
  }
  
  return answer;
}
