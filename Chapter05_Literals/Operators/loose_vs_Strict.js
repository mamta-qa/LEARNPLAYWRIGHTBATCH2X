// loose_vs_Strict.js
// Difference between == (loose equality) and === (strict equality)

let a = 5;
let b = '5';
let c = null;
let d = undefined;
let e = 0;
let f = false;

console.log('a == b ->', a == b);
console.log('a === b ->', a === b);

console.log('c == d ->', c == d);
console.log('c === d ->', c === d);

console.log('e == f ->', e == f);
console.log('e === f ->', e === f);

console.log('null == undefined ->', null == undefined);
console.log('null === undefined ->', null === undefined);

console.log('"" == 0 ->', '' == 0);
console.log('"" === 0 ->', '' === 0);

console.log('1 == true ->', 1 == true);
console.log('1 === true ->', 1 === true);

// Notes:
// == compares values after type coercion.
// === compares both value and type.
