"use strict";

const nome = 'Francisco';

console.log( nome );
// console.log( idade );
/*
for (var i = 0; i < 3; i++) {
setTimeout(() => console.log(i), 0);
}

for (let j = 0; j < 3; j++) {
setTimeout(() => console.log(j), 0);
}

console.log(i);
console.log(j);
*/

let curso = 'ES';
curso = 'BES';

if(curso === 'BES') {
    console.log('V');
} else {
    console.log('F');
}

console.log(curso == 'BES' ? 'V' : 'F');

console.log(typeof +'5');

function teste() {
    console.log(email);

    // TDZ
    var email = 'teste@gmail.com';
}

teste();


const number1 = 10;
const number2 = 5;
const operator = '+';
let result;
switch (operator) {
case '+':
    result = number1 + number2;
    console.log(result);
    break;
case '-':
    result = number1 - number2;
    console.log(result);
    break;
default:
    result = 'Invalid operator';
    console.log(result);
}