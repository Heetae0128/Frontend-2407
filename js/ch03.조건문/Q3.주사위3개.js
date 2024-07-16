// 주사위 3개 - 백준도장 2480

const { log } = require("console");

let A = Math.ceil(Math.random() * 6);
let B = Math.ceil(Math.random() * 6);
let C = Math.ceil(Math.random() * 6);
let prize = 0;

if (A == B && B == C)
  prize = 10000 + 1000 + A
else if (A == B)
  prize = 10000 + A * 100
else if (B == C)
  prize = 10000 + B * 100
else if (A == C)
  prize = 10000 + A * 100
else {
    let maxDice = A > B ? A : B;
    maxDice = maxDice > C ? maxDice : C;
    prize = maxDice * 100
}
console.log(A, B, C, '==>', prize);  

// Refactoring
if (A == B && B == C)
    prize = 10000 + 1000 + A
else if (A == B || A == C)
    prize = 10000 + A * 100
else if (B == C)
    prize = 10000 + B * 100
else {
    let maxDice = Math.max(A, B, C);
    prize = maxDice * 100
}
console.log(A, B, C, '==>', prize);  
