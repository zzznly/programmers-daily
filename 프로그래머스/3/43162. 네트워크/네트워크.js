function solution(n, computers) {
    let visited = new Array(n).fill(false);
    let count = 0;

    function dfs(node) {
        visited[node] = true; // 현재 노드 방문 처리
        for (let next = 0; next < n; next++) {
            if (computers[node][next] === 1 && !visited[next]) {
                dfs(next); // 연결된 노드 재귀 호출
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (!visited[i]) { // 방문하지 않은 노드 찾기
            dfs(i);
            count++; // DFS 탐색 완료 후 네트워크 개수 증가
        }
    }

    return count;
}
