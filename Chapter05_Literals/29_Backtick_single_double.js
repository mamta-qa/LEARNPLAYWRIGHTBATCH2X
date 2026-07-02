// 29_Backtick_single_double.js
// Demonstrate differences between single quotes, double quotes, and backticks (template literals)

// Single and double quotes behave the same for basic strings
let single = 'He said "Hello"';
let double = "It's a nice day";

// You can avoid escaping by using the other quote type
let singleWithDouble = 'She said "Hi"';
let doubleWithSingle = "Don't worry";

// Escaping examples
let escapedSingle = "It's escaped";
let escapedDouble = 'She said "Yes"';

// Backticks (template literals) — allow interpolation and multiline strings
let name = "Mamta";
let backtick = `Hello ${name}!`;
let expression = `2 + 3 = ${2 + 3}`;
let multiline = `This is line 1
This is line 2`;

// Backticks can contain both single and double quotes without escaping
let bothQuotes = `She said "Don't go" and left`;

// Raw template example (prevents escape processing)
let rawPath = String.raw`C:\Users\Mamta\folder\file.txt`;

console.log("single:", single);
console.log("double:", double);
console.log("singleWithDouble:", singleWithDouble);
console.log("doubleWithSingle:", doubleWithSingle);
console.log("escapedSingle:", escapedSingle);
console.log("escapedDouble:", escapedDouble);
console.log("backtick (interpolation):", backtick);
console.log("expression in template:", expression);
console.log("multiline (template):");
console.log(multiline);
console.log("bothQuotes (no escapes needed):", bothQuotes);
console.log("rawPath (String.raw):", rawPath);

// Notes:
// - Single and double quotes are interchangeable for string literals.
// - Backticks provide template features: interpolation (${...}), multiline, and tag functions.
// - Use the style consistent with your project's conventions (commonly camelCase variables and single or double quotes enforced by linter).

/* Conclusion (short table):
| Quote Type | Typical Use | Key Features |
|---|---|---|
| Single ('') | Simple strings | Same as double; escape single quotes inside |
| Double (") | Simple strings | Same as single; escape double quotes inside |
| Backtick (`) | Templates & multiline | Supports interpolation (${...}), multiline, and raw strings |
*/
