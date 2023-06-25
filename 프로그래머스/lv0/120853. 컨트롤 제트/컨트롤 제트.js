function solution(s) {
    let numbers = [];
    let collectNumber = '';
    for(let i=0; i<s.length; i++) {
        const item = s[i];
        if(item === 'Z') {
            numbers.pop();
        } else if(item === ' ') {
            numbers.push(Number(collectNumber));
            collectNumber = '';
        } else {
            collectNumber = collectNumber + item;
        }
        
    }
    
    if(collectNumber !== '') {
        numbers.push(Number(collectNumber))
    }
    
    
    let sum = 0;
    for(let i=0; i<numbers.length; i++) {
        sum = sum + numbers[i];
    }
    return sum;
}