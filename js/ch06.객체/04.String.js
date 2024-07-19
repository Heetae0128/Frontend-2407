// String 객체

let hello = '안녕하세요?';

// 속성
console.log(hello.length);

// 메소드(method)
console.log(hello[2], hello.charAt(2));
console.log(hello + ' 여러분!', hello.concat(' 여러분!'));
// 문자열에 특정 문자열이 있는지 없는지 확인할 때 사용          
console.log(hello.indexOf('세'), hello.indexOf('가'));          // '가' 처럼 없는 문자는 -1 로 해석 
console.log(hello.includes('세요'));                            // indexof를 이용해서 원하는 문자 숫자 등을 찾아낼 수 있다.
console.log('pineapple'.lastIndexOf('p'));

// 문자열을 분리하여 배열을 생성
let fruits = '수박,참외,포도';
let furitArray = fruits.split(',');
console.log(furitArray);

// 문자열 일부분(substring)
let today = new Date().toISOString();
console.log(today);
// 날짜 추출 - 2024-07-19
console.log(today.substring(0, 10));        // 0은 포함, 10은 포함하지 않는다. // substring 문자열 선택하기 
// 시간 추출 - 02:14:54
console.log(today.substring(11, 19));
console.log(new Date().toLocaleString());
console.log(new Date().toLocaleString().substring(16));

// 공백 제거
let space = '   Hello?  ';
console.log(space.trim());          // 양쪽의 white space: 공백, 탭, 공백에 관련된(\r, \n, \t)

// Method chaining
console.log(space.trim().substring(0,5).toUpperCase());         //touppercase 대문자로 바꾸기

// 문자열 변환
let sample = 'A quick brown fox';
console.log(sample.replace('A', 'The'));
console.log(sample.replace('o','O'));           //replace 문자열 바꾸기

// 정규표현식(Regular Expression)
sample = 'A quick brown fox - 3 - 갈색의 재빠른 여우 the lazy dog = 5 = 게으른 개';
// 영문자와 공백만 남기고 모두 지움
console.log(sample.replace(/[^A-Z a-z]/g, ''));
// 한글과 공백만 남기고 모두 지움
console.log(sample.replace(/[^가-힣ㄱ-ㅎ ㅏ-ㅣ]/g, ''));
// 숫자, 특수기호만 남기고 모두 지움
console.log(sample.replace(/[^0-9-=]/g, ''));

//