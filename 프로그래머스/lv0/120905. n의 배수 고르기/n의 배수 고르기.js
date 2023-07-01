function solution(n, numlist) {
    let answer = [];
    
    for(let i=0; i < numlist.length; i++) {
        const item = numlist[i]
        if(item%n === 0) {
            answer.push(item);
        }
    }
    
    
    return answer;
}