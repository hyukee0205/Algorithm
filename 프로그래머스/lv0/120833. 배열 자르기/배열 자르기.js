function solution(numbers, num1, num2) {
    let result = [];
    let cnt = num1;
    while(cnt <= num2) {
        result.push(numbers[cnt]);
        cnt = cnt + 1;
    }
    return result;
}



// numbers는 정수 배열이다.
// numbers[num1]번째부터 numbers[num2]까지 자른 정수 배열을 리턴한다.