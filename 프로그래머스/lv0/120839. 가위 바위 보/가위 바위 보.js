function solution(rsp) {
    let newRsp = rsp.split('');
    // console.log(newRsp)
    // newRsp[0] = 1;
    // console.log(newRsp)

    
    let cnt = 0;
    while(cnt <= rsp.length) {
        if(newRsp[cnt] === '2') {
            newRsp[cnt] = 0;
        }
        if(newRsp[cnt] === '0') {
             newRsp[cnt] = 5;
        }
        if(newRsp[cnt] === '5') {
            newRsp[cnt] = 2;
        }
        cnt = cnt + 1;
    }
    
    
    return newRsp.join('');    
    
}