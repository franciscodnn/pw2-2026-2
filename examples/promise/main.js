function soma(a, b) {
    return a + b;
}

console.log( 'Soma (síncrona):', soma(5, 10) );

// -----
function somaPromise(a, b) {
    return new Promise(
        (resolve, reject) => {
            if(typeof a === 'number' && typeof b === 'number'){
                console.log('impressão no executor da Promise...');
                resolve(a + b);
            }
            reject('Informar apenas números!');
        })
}

// ponto (A)

somaPromise(10, 10)
.then( result => 'Resultado: ' + result ) // return Promise 'Resultado: 20'
.then( resultComTexto => console.log( resultComTexto )) // return Promise undefined
// vai para a FIFO de microtasks
.catch( error => console.error('Erro: ', error));

somaPromise(5, 5)
.then( result => console.log('Resultado (2o sumPromise): ', result));

console.log('fim da main thread'); // 1a impressão depois do ponto (A)