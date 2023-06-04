function solution(array) {
    return array.sort((a, b) => a - b)[Math.floor(array.length / 2)]
}




// 1. 크기별로 들어온 숫자 정렬
// 1-1.배열에서 제일값 구하기
// 1-2. 찾으면 새 배열에 넣는다.
// 1-3. 원래 배열에 찾은 값은 지운다.
// 1-4. 만약 원래배열 길이만큼 반복했으면 끝낸다. 아니면 1-1로 돌아간다.
// 2. 가운데 숫자 선택
