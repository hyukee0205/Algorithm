function solution(num_list, n) {
    const result = [];
        
    for(let i=0; i < num_list.length;) {
        const arrayResult=[];
        for(let j=0; j < n; j++) {
            arrayResult.push(num_list[i])
            i++
        }
        result.push(arrayResult);
    }
    
    
    return result;
}