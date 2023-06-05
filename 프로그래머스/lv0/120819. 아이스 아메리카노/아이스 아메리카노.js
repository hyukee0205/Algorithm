function solution(money) {
    const coffee = 5500;
    
    const coffeeCnt = Math.floor(money / coffee);
    const moneyLeft = money % coffee

    return [coffeeCnt, moneyLeft];
}

