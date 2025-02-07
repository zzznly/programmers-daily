function solution(brown, yellow) {
    for (let height = 1; height <= Math.sqrt(yellow); height++) {
        if (yellow % height === 0) {
            let width = yellow / height;
            if (2 * (width + height) + 4 === brown) {
                return [width + 2, height + 2];
            }
        }
    }
}
