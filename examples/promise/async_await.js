/*
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
*/

async function somaAsync(a, b) {
    if(typeof a !== 'number' || typeof b !== 'number') 
        throw new Error('Erro de tipo number');

    await new Promise( (resolve) => setTimeout(resolve, 1000) );

    return a + b;
}

// teste sem o await
const result = await somaAsync(10, 10);
console.log('-----');
console.log('Resultado:', result);