function solution(quiz) {
    const answer = [];

    for(let i=0; i < quiz.length; i++) {
        const item = quiz[i];
        const arr = item.split(' ');
        const firstNum = Number(arr[0]);
        const op = arr[1];
        const secondNum = Number(arr[2]);
        const result = Number(arr[4]);
        if(op === "+") {
            if(firstNum + secondNum === result) {
                answer.push("O")
            } else {
                answer.push("X")
            };
        } else {
            if(firstNum - secondNum === result) {
                answer.push("O")
            } else {
                answer.push("X")
            };
        }
    }  
    
    return answer;
}