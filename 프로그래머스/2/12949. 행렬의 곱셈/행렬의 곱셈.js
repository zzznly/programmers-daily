function solution(arr1, arr2) {
    const r1 = arr1.length;
    const c1 = arr1[0].length;
    const r2 = arr2.length;
    const c2 = arr2[0].length;
    
    const res = []; // 결과를 저장할 2차원 배열
    
    for (let i = 0; i < r1; i++) {
        res.push(new Array(c2).fill(0));
    }
    
    for (let i = 0; i < r1; i++) {
        for (let j = 0; j < c2; j++) {
            for (let k = 0; k < c1; k++) {
                res[i][j] += arr1[i][k] * arr2[k][j]
            }
        }
    }
    
    return res;
}