function solution(n) {
    let answer = 0;
    
    const strN = String(n);
    for(let i=0; i < strN.length; i++) {
        const item = strN[i];
        answer = answer + Number(item);
        
    }
    
    return answer;
}