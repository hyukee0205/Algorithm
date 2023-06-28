const numberString = ["ze", "on", "tw", "th", "fo", "fi", "si", "se", "ei", "ni"];


function solution(numbers) {
    let answer = '';
    
    for(let i=0; i < numbers.length; i++) {
        const compareString = numbers[i] + numbers[i+1];
        for(let j=0; j < numberString.length; j++) {
            if(compareString === numberString[j]) {
                answer = answer + j
            }
        }
    
    }
    
    return Number(answer);
}