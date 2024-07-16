// 사분면 - 백준도장 14681

let x = Math.ceil(Math.random() * 20);
let y = Math.ceil(Math.random() * 20);

x *= Math.random() > 0.5 ? 1 : -1;
y *= Math.random() > 0.5 ? 1 : -1;

    console.log(x, y);

    if (x > 0) {
        y > 0 ? console.log("1") : console.log("4");
    } else {
        y > 0 ? console.log("2") : console.log("3");
    }



    const readline = require('readline');
    const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
    })

    let input = []

    rl.on('line', function (line) {
        input.push(line)
    }).on('close', function () {
    input = input.map((value) => Number(value));
        const [a, b] = [...input];

    if (a > 0) {
        b > 0 ? console.log("1") : console.log("4");
    } else {
        b > 0 ? console.log("2") : console.log("3");
    }
        process.exit()
    })