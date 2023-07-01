function solution(num, k) {
        
    let Item = -1;
    const strNum = String(num);
    for(let i=0; i<strNum.length; i++) {
        const item = strNum[i];
        if(item === String(k)) {
            Item = i+1;
            break;
        }
    }
    
    return Item;
}