function solution(k, dungeons) {
    let maxCount = 0;
    const visited = Array(dungeons.length).fill(false);

    function dfs(currentP, count) {
        maxCount = Math.max(maxCount, count);
        
        for (let i = 0; i < dungeons.length; i++) {
            const [minP, consumeP] = dungeons[i];

            if (!visited[i] && currentP >= minP) {
                visited[i] = true;
                dfs(currentP - consumeP, count + 1);
                visited[i] = false;
            }
        }
    }

    dfs(k, 0);
    return maxCount;
}
