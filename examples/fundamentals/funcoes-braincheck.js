/*
// Existe const subtrai = Temporal Dead Zone (TDZ) ?


console.log(soma(2, 3));

console.log(subtrai(2, 3));

function soma(a, b) {
  return a + b;
}
const subtrai = (a, b) => a - b;
*/

// console.log(2 ** null);

/*
const dobro = (n) => n * 2;
const criar = (nome) => ({ nome }); // { nome: nome }
const errado = (nome) => { 
    nome 
};

console.log(dobro(5)); // 10
// console.log(criar('Fulano'));
console.log(errado('Fulano'));
*/

/*
const cursoBES = {
    nome: 'Engenharia de Software',
    qtdPeriodos: 10,
    projetoIntegradorCH: 500
};

const cursoRedes = {
    nome: 'Redes',
    qtdPeriodos: 6    
}

function formatarTextoCurso(objeto) {
    
    return `Nome: ${objeto.nome}, Períodos: ${objeto.qtdPeriodos}, CH Integrador: ${objeto.projetoIntegradorCH}`;
}

function formatarDesestruturacao( 
    { nome, qtdPeriodos, projetoIntegradorCH = 0 } ) {

    return `Nome: ${nome}, Períodos: ${qtdPeriodos}, CH Integrador: ${projetoIntegradorCH}`;
}

console.log( formatarTextoCurso(cursoRedes) );
console.log( formatarDesestruturacao(cursoRedes) );
*/

function closureTeste() {
    let ano = 2026;

    return {
        incrementar: () => this.ano++,
        getAno: () => this.ano
    }
}

let objeto = closureTeste();
objeto.incrementar();

console.log(objeto.getAno());