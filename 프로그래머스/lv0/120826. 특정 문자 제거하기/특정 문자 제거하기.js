function solution(my_string, letter) {
    let result = ''
    let cnt = 0;
    while(cnt < my_string.length) {
        if(letter !== my_string[cnt]) {
            result += my_string[cnt]
        } 
        cnt = cnt + 1;
    }        
    return result;
}

