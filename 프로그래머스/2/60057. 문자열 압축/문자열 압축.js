function solution(s) {
    let minLength = s.length; // 압축 전 문자열 길이를 최소 길이로 설정

    for (let unit = 1; unit <= Math.floor(s.length / 2); unit++) {
        let compressed = "";
        let prev = s.substring(0, unit);
        let count = 1;

        for (let j = unit; j < s.length; j += unit) {
            const current = s.substring(j, j + unit);
            
            if (prev === current) {
                count++; // 연속된 문자열이면 개수 증가
            } else {
                compressed += (count > 1 ? count : "") + prev;
                prev = current; // 새로운 문자열로 변경
                count = 1;
            }
        }
        
        compressed += (count > 1 ? count : "") + prev; // 마지막 압축 처리
        minLength = Math.min(minLength, compressed.length); // 최솟값 갱신
    }

    return minLength;
}
