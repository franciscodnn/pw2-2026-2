let idade = 40; // number
idade = '40'; // string

const nome = 'Francisco';
// nome = 'Dantas'; // Erro!

var tituloDisciplina;
tituloDisciplina = 'PW2';

let estaCursando = false; // boolean
let notaPW2; // undefined
notaPW2 = null; // null

idade = 40;
console.log(typeof idade);

const notas = [90, 95, '100'];
notas[2] = 100;
notas.push(95);

// console.log( typeof notas );

console.log(Array.isArray(notas));

/*
const user = {
    nome: 'Francisco',
    idade: 40
};
console.log(typeof user);
console.log(user.nome);
console.log(user['nome']);
*/

// console.log(Object.keys(user));

if(true) {
    var tituloAula = 'Fundamentos';
} else {
    console.log('variável não criada');
}
// a variável tituloAula existe?

console.log(tituloAula);

for(var i = 0; i < 3; i++) {
    console.log(`valor do i no bloco: ${i}`);
}
console.log(i);

const numbers = [1, , 3];
console.log(numbers);
console.log(numbers[1]);

numbers[1] = 3;
console.log(0 in numbers);
console.log(1 in numbers);

console.log( 3n );

console.log(NaN == NaN);

console.log( 2 == '2');
console.log( 2 === '2');