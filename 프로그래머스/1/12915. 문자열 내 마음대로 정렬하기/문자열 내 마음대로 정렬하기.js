function solution(strings, n) {
    return strings.sort((a, b) => {
        if (a[n] > b[n]) return 1; // 오름차순
        else if (a[n] < b[n]) return -1; // 내림차순
        else return a > b ? 1 : -1
    })
}