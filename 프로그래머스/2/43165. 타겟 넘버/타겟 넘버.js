function solution(numbers, target) {
    let count = 0;

    function dfs(index, sum) {
        // 모든 숫자를 다 사용했을 때만 결과를 비교해야 함
        if (index === numbers.length) {
            if (sum === target) {
                count++;
            }
            return;
        }

        // 현재 숫자를 더하는 경우
        dfs(index + 1, sum + numbers[index]);

        // 현재 숫자를 빼는 경우
        dfs(index + 1, sum - numbers[index]);
    }

    dfs(0, 0); // 초기값: 인덱스 0, 합계 0
    return count;
}
