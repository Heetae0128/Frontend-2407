// 표준 내장 객체 - Number
let num = 273;
let numberFromConstructor = new Number(273);
console.log(num, numberFromConstructor);

const pi = Math.PI;
console.log(pi);
console.log(pi.toFixed(5));         // 소숫점 다섯번째 자리까지
console.log(pi.toExponential());    
console.log(pi.toPrecision(3));

console.log(Number.MAX_VALUE, Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
console.log(Math.pow(2, 53) - 1);
console.log(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);

// NaN (Not a Number)
let a = parseInt('string')
console.log(Number.isNaN(a));

console.log(Number.isFinite(9007199254740991), Number.isFinite(Infinity));