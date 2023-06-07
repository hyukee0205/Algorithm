function solution(n) {
    
    let result = 0;
    let cnt = 0;
    
    while(cnt <= n) {
        if(cnt % 2 === 0) {
            result = result + cnt;  
        }
        cnt = cnt + 1;
    };
    
    return result;   
}



// n이하의 짝수(n 포함)를 전부다 나열
// 나열한 숫자를 전부 더한다