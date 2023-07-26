let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let hour = Number(input[0].split(' ')[0]);
let minute = Number(input[0].split(' ')[1]);

if (minute < 45) {
    hour = hour - 1;
    minute = minute + 15;
    if(hour < 0) hour = 23;
} else {
    minute = minute - 45;
}

console.log(hour + " " + minute);