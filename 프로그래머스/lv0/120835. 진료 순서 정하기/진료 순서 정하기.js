function solution(emergency) {
    
    let newArray = [];
    let cnt = 0;
    
    while(cnt < emergency.length) {
        newArray.push({value: emergency[cnt], idx: cnt});
        cnt = cnt + 1;
    }
    
    newArray.sort((a, b) => b.value-a.value);
    console.log(newArray)
    
    var answer = new Array(emergency.length);
    
    cnt = 0;
    while(cnt < newArray.length) {
        let item = newArray[cnt];
        answer[item.idx] = cnt + 1;
        cnt = cnt + 1;
    }    
    return answer;
}


