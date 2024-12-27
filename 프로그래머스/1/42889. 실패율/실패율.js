function solution(N, stages) {
    // 스테이지에 도달한 플레이어 수
    const players = new Array(N + 2).fill(0);
    for (const stage of stages) {
        players[stage] += 1;
    }
    
    let total = stages.length;
    const fails = []; // 실패율 배열
    for (let i = 1; i <= N; i++) {
        if (players[i] === 0) {
            fails.push([i, 0])
        }
        else {
            fails.push([i, players[i] / total]);
            total -= players[i];
        }
    }
    
    return fails
        .sort((a, b) => b[1] - a[1])
        .map(([stage, _]) => stage);
}