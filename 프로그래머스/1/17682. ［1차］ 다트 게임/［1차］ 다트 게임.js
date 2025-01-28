function solution(dartResult) {
    const scores = [];
    let currentScore = 0; // 현재 처리 중인 점수

    for (let i = 0; i < dartResult.length; i++) {
        const char = dartResult[i];

        if (!isNaN(char)) {
            // 숫자인 경우
            // 숫자가 두 자리일 경우(예: 10)
            if (char === '1' && dartResult[i + 1] === '0') {
                currentScore = 10;
                i++; // 다음 문자(0)도 처리했으므로 i를 증가시킴
            } else {
                currentScore = Number(char);
            }
        } else if (char === 'S') {
            scores.push(currentScore ** 1);
        } else if (char === 'D') {
            scores.push(currentScore ** 2);
        } else if (char === 'T') {
            scores.push(currentScore ** 3);
        } else if (char === '*') {
            // 스타상 처리
            if (scores.length > 1) {
                scores[scores.length - 2] *= 2; // 이전 점수 2배
            }
            scores[scores.length - 1] *= 2; // 현재 점수 2배
        } else if (char === '#') {
            // 아차상 처리
            scores[scores.length - 1] *= -1; // 현재 점수를 -1 배
        }
    }

    // 모든 점수 합산
    return scores.reduce((acc, cur) => acc + cur, 0);
}
