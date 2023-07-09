function solution(numbers) {
    let maxValue = -10000 * 10000 - 1;
    for(let i=0; i<numbers.length; i++) {
        for(let j=i+1; j<numbers.length; j++) {
            const item1 = numbers[i];
            const item2 = numbers[j];
            maxValue = Math.max(maxValue, item1 * item2);
        }
    }
    
    return maxValue;
}