function solution(balls, share) {
    var answer = 0;
    const n = balls;
    const r = share;
     
    let one = 1;
    for(let i = n; i >= 1; i--) {
        one *= i;
    }
    
    let two = 1;
    for(let i = n-r; i >= 1; i--) {
        two *= i;
    }
    
    let three = 1;
    for(let i = r; i >= 1; i--) {
        three *= i;
    }
    
    answer = Math.round(one / (two * three));
    return answer;
}