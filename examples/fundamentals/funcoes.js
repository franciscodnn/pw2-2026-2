"use strict";

function addition(param1, param2) {
    return param1 + param2;
}

console.log( addition(5, 10) );

console.log( typeof addition );

const somar = addition;

console.log( somar(10, 20) );

(() => {
  console.log('teste');
})();
/*
function addition(param1, param2) {
  return param1 + param2;
}
*/

function addition(...params) {
    let summation = 0;
    for (const value of params) {
        summation += value;
    }
    return summation;
}

addition(1, 5, 8, 10);

function callback() {
    return 'aqui é um texto em uma funcao';
}

function calculadora(p1, p2, callback) {
    return callback(p1, p2);
}

function somar(x, y) { 
    return x + y;
}

function subtrair(x, y) {
    return x - y;
}

console.log( calculadora(5, 10, somar) );
console.log( calculadora(10, 5, subtrair));
console.log( calculadora(2, 5, (x, y) => x * y) );