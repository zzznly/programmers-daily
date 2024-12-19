function solution(numbers) {
    // O(N^2)
    const temp = [];
    
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i+1; j < numbers.length; j++) {
            temp.push(numbers[i] + numbers[j]);
        }
    }
    
    return [...new Set(temp)].sort((a,b) => a-b)
}