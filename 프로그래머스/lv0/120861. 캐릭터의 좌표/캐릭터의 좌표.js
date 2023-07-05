function solution(keyinput, board) {
    
    
    let x = 0;
    let y = 0;
    let maxX = Math.floor(board[0]/2)
    let maxY = Math.floor(board[1]/2);

    
    for(let i=0; i < keyinput.length; i++) {
        let item = keyinput[i];

    
        if(item === "left" && x > -maxX) {
            x--;
        }
        
        if(item === "right" && x < maxX) {
            x++;
        }
        
        if(item === "up" && y < maxY) {
            y++;
        }
        
        if(item === "down" && y > - maxY) {
            y--;
        }
        
        
    }
    
    
    
    return [x, y];
}