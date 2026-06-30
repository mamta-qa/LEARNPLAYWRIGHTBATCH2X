// Arithmetic_operators.js
// Examples of JavaScript arithmetic operators

let a = 10;
let b = 3;

// Addition
let sum = a + b;
console.log('Addition:', a, '+', b, '=', sum);

// Subtraction
let diff = a - b;
console.log('Subtraction:', a, '-', b, '=', diff);

// Multiplication
let prod = a * b;
console.log('Multiplication:', a, '*', b, '=', prod);

// Division
let quot = a / b;
console.log('Division:', a, '/', b, '=', quot);

// Remainder (modulus)
let rem = a % b;
console.log('Remainder:', a, '%', b, '=', rem);

// Exponentiation
let pow = a ** b;
console.log('Exponentiation:', a, '**', b, '=', pow);

// Increment
let inc = a;
inc++;
console.log('Increment:', inc);

// Decrement
let dec = b;
dec--;
console.log('Decrement:', dec);

// Combined shorthand operators
let total = 5;
total += 2; // same as total = total + 2
console.log('+= operator:', total);
total -= 1; // same as total = total - 1
total *= 3; // same as total = total * 3
total /= 2; // same as total = total / 2
total %= 4; // same as total = total % 4
console.log('%= operator:', total);

// Notes:
// - JavaScript arithmetic operators work with numbers, and + also concatenates strings.
// - Use parentheses to control evaluation order when expressions are combined.
