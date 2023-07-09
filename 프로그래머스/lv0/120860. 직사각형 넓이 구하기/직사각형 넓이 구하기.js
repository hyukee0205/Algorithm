function solution(dots) {
    let garo = 0;
    let sero = 0;
    for (let i=0; i<dots.length-1; i++) {
        const [x, y] = dots[i];
        const [nx, ny] = dots[i+1];
        garo = Math.max(Math.abs(nx - x), garo);
        sero = Math.max(Math.abs(ny - y), sero);
    }
    
    return garo * sero;
}