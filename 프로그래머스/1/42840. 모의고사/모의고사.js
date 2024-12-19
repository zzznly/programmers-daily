function solution(answers) {
    // O(NlogN), O(N)
    let answer = [];
    
    const supo1 = [1,2,3,4,5];
    const supo2 = [2,1,2,3,2,4,2,5];
    const supo3 = [3,3,1,1,2,2,4,4,5,5];
    
    const count = [0,0,0];
    
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === supo1[i % supo1.length]) count[0]++;
        if (answers[i] === supo2[i % supo2.length]) count[1]++;
        if (answers[i] === supo3[i % supo3.length]) count[2]++;
    }
    
    const max = Math.max(count[0], count[1], count[2]);
    for (let i = 0; i < count.length; i++) {
        if (max === count[i]) answer.push(i + 1);
    }
        
    return answer.sort((a,b) => a-b);
}