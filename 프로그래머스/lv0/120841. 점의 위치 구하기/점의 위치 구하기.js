function solution(dot) {
    const x = dot[0];
    const y = dot[1];
    let result;
    
    if(x > 0) {
        if(y > 0) {
            result = 1;
        } else {
            result = 4;
        }
    } else if(x < 0) {
        if( y > 0) {
            result = 2;
        } else {
            result = 3;
        }
    }
    
    return result;
}
