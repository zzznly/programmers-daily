function solution(people, limit) {
    people.sort((a, b) => a - b); // 몸무게 오름차순 정렬
    let left = 0, right = people.length - 1;
    let boats = 0;

    while (left <= right) {
        if (people[left] + people[right] <= limit) {
            left++; // 가장 가벼운 사람도 태움
        }
        right--; // 무거운 사람은 항상 태움
        boats++; // 보트 개수 증가
    }

    return boats;
}
