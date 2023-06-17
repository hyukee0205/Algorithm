function solution(my_string) {
    let answer = '';
    const str = ['a', 'e', 'i', 'o', 'u'];
    
    
    for(let i=0; i < my_string.length; i++) {
        const item = my_string[i];
        
        let isVowel = false;
        
        for(let j=0; j < str.length; j++) {
            if(item === str[j]) {
                isVowel = true;
                break;
            }
        }
        if(isVowel) continue;
        answer += item;
      
    };
    
    

    return answer;
}



