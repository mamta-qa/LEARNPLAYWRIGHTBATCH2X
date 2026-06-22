// JavaScript identifier naming styles

// camelCase: common in JavaScript for variables and functions
let firstName = "Alice";
let totalCount = 42;

// PascalCase: common for constructor functions and classes
let UserAccount = {
  id: 1,
  name: "Bob",
};

// snake_case: valid, but less common in JS
let user_name = "Charlie";
let total_count = 100;

// UPPER_SNAKE_CASE: often used for constants
const MAX_VALUE = 999;
const API_URL = "https://example.com";

// kebab-case: invalid in JavaScript identifiers
// let user-name = "David"; // syntax error
// let total-count = 5;     // syntax error

// Other valid examples
let _privateValue = true;
let $price = 19.99;
let p = 3.14159;

console.log(
  firstName,
  totalCount,
  UserAccount,
  user_name,
  MAX_VALUE,
  $price,
  p,
);
