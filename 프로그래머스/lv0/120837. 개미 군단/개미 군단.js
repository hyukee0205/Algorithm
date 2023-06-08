function solution(hp) {
    let hpCheck = hp;
    let a = 0;
    let b = 0;
    let c = 0;
    
    
    a = a + Math.floor(hpCheck / 5);
    hpCheck = hpCheck % 5;
    b = b + Math.floor(hpCheck / 3);    
    hpCheck = hpCheck % 3;
    c = c + Math.floor(hpCheck / 1);    

    let result = a + b + c;
    return result;
}

