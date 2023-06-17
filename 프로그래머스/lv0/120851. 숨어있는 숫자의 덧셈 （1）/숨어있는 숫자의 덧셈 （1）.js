function solution(my_string) {
    let KeepNumber = 0;
    for(let i=0; i < my_string.length; i++) {
        const item = Number(my_string[i]);
        if(Number.isNaN(item)) {
            continue;
        }
        KeepNumber = KeepNumber + item;
    }
    
    return KeepNumber;
}