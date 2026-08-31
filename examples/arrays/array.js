
const array = [1, 2, 3, 4, 5, 10];

// array.splice(1, 1);

// const arraySlice = array.slice(1);

// console.log(arraySlice);

// array.unshift(10);

// array.splice(2, 0, [3, 4]);

// console.log( array.flat(1) );

console.log(array);

/*
array.forEach(
    (elemento) => console.log(elemento**2)    
);
*/

const arrayPotencia = array.map( (elemento) => elemento**2 );

console.log(arrayPotencia);