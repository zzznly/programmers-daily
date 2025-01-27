function solution(s) {
    let answer = [];
    const strings = s.split(' ');
    
    for (let i = 0; i < strings.length; i++) {
        let string = '';
        
        for (let j = 0; j < strings[i].length; j++) {
            if (j % 2 === 0) {
                string += strings[i][j].toUpperCase();
            } else {
                string += strings[i][j].toLowerCase();
            }
        }
        
        answer.push(string);
    }
    
    return answer.join(' ')
}