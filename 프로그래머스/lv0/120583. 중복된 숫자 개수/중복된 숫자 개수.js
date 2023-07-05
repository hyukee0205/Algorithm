function solution(array, n) {
    var answer = 0;
    
    for(let i=0; i<array.length; i++) {
        let item = array[i];
        if(item === n) {
            answer = answer + 1;
        }
    }
    
    return answer;
}