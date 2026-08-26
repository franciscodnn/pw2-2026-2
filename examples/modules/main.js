import { sum } from './lib_math.js';
import LibMath from './lib_math.js';
import * as MathOps from './lib_math.js';

import { sqrt, equal } from 'mathjs';

// console.log( LibMath.sum(5, 10) );
// console.log( LibMath.mul(5, 10) );

console.log(MathOps.sum(10, 10));

console.log(Object.keys(MathOps));

console.log(MathOps.default.sum(5, 3));

console.log( sqrt(16) );
console.log( equal(3, 3) );