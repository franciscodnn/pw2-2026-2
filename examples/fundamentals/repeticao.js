let flag = 1;
 
do {
  // console.log(flag);
  flag += 1;
} while (flag < 0);

for(let i = 0; i < 5; i++) {
    // console.log( ++i );
}

// console.log(i);

console.log( addition(5, 10) );

console.log( typeof addition );

const somar = addition;

console.log( somar(10, 20) );