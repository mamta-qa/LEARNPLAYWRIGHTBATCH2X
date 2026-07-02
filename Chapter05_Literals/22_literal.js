// 22_literal.js — examples of JavaScript literal types

// String literals
let nameStr = "Mamta"; // double-quoted
let greeting = "Hello"; // single-quoted
let template = `Hi, ${nameStr}!`; // template literal with interpolation and multiline support

// Numeric literals
let intNum = 25; // decimal
let floatNum = 3.1415; // floating point
let expNum = 1.2e3; // exponential
let hexNum = 0x1f; // hexadecimal
let octNum = 0o17; // octal
let binNum = 0b1111; // binary
let big = 9007199254740991n; // BigInt literal

// Boolean, null, undefined
let isActive = true; // boolean literal
let isDisabled = false;
let nothing = null; // null literal
let notDefined = undefined; // undefined value (no dedicated literal token)

// Symbol (created via function call)
let sym = Symbol("id");

// Object and Array literals
let obj = { id: 1, name: "Item", nested: { ok: true } };
let arr = [1, "two", true, null, { x: 5 }];

// RegExp literal
let re = /ab+c/i;

// Function expressions (not literal tokens but common inline values)
let fn = function (x) {
  return x * 2;
};
let arrow = (x) => x * 3;

// Display values
console.log("Strings:", nameStr, greeting, template);
console.log("Numbers:", intNum, floatNum, expNum, hexNum, octNum, binNum, big);
console.log(
  "Boolean / null / undefined:",
  isActive,
  isDisabled,
  nothing,
  notDefined,
);
console.log("Symbol:", String(sym));
console.log("Object:", obj);
console.log("Array:", arr);
console.log('RegExp test for "abbbbc":', re.test("abbbbc"));
console.log("Functions:", fn(2), arrow(2));

// Notes:
// - JavaScript literal types include numeric, BigInt, string, boolean, null, object, array, RegExp, and template literals.
// - Some values (Symbol, functions) are created via expressions, not by dedicated literal syntax.

let c = "c";
let c1 = "cc";
console.log("Character literals:", c, c1);
let firstName = "Maamttaa";
console.log("Template literal with custom tag:", firstName);
