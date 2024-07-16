/*
 *      if ()
 *      else if (
 *      ...
 *      else
 */
// score
let score = Math.ceil(Math.random() * 50) + 50;     // 51 ~ 100 사이의 정수
let grade = '';

if (score >= 90)
    grade = 'A';
else if (score >= 80)
    grade = 'B';
else if (score >= 70)
    grade = 'C';
else if (score >= 60)
    grade = 'D';
else
    grade = 'F';

console.log(`점수: ${score}, 학점: ${grade}`);

// FizzBuzz
// 숫자가 5로 나누어지면 Fizz, 7로 나누어지면 Buzz, 5와 7 둘다 나누어지면 FizzBuzz
// 위의 경우가 아니면 숫자를 출력

let num = Math.ceil(Math.random()*100);
let name = '';

if (num % 35 == 0)
    name = 'FizzBuzz';
else if (num % 7 == 0)
    name = 'Buzz';
else if (num % 5 == 0)
    name = 'Fizz';
else
    name = (num);

console.log(`${name}`);
