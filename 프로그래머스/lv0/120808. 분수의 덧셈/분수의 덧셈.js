function solution(numer1, denom1, numer2, denom2) {
    const denom = numer1 * denom2 + numer2 * denom1;
    const num = denom1 * denom2;
    
    let minNumber;
    if(denom < num) {
        minNumber = denom;
    } else {
        minNumber = num;
    }
    
    while(true) {
        if(denom % minNumber === 0) {
            if(num % minNumber === 0) {
                return [denom/minNumber, num/minNumber];
            }
        } 
        minNumber = minNumber - 1;
    }
    
}
    

// 1. 분모 덧셈
// 2. 분자분모의 최대 공약수로 나눠준다.
// 2-1. 분자분모중 작은 수를 찾기
// 2-2. 작은수를 분자분모로 나눠보기
// 2-2-1. 둘다 나누어 떨어지면 그 나눈 수가 최대 공약수
// 2-2-2. 안 나누어떨어지면 작은 수를 1 줄이고 2-2로 돌아가기


