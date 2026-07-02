// increment_op.js
// Interview questions and cases on increment (++) and decrement (--)

console.log("=== PRE vs POST INCREMENT ===");

// Case 1: Pre-increment (++a)
let a = 10;
let b = ++a;
console.log("Case 1 - Pre-increment (++a):");
console.log("  a:", a, "b:", b);
console.log("  Explanation: a incremented first (11), then assigned to b");

// Case 2: Post-increment (a++)
let c = 10;
let d = c++;
console.log("Case 2 - Post-increment (a++):");
console.log("  c:", c, "d:", d);
console.log("  Explanation: d gets old value (10), then c incremented (11)");

console.log("\n=== PRE vs POST DECREMENT ===");

// Case 3: Pre-decrement (--e)
let e = 10;
let f = --e;
console.log("Case 3 - Pre-decrement (--e):");
console.log("  e:", e, "f:", f);
console.log("  Explanation: e decremented first (9), then assigned to f");

// Case 4: Post-decrement (e--)
let g = 10;
let h = g--;
console.log("Case 4 - Post-decrement (g--):");
console.log("  g:", g, "h:", h);
console.log("  Explanation: h gets old value (10), then g decremented (9)");

console.log("\n=== INTERVIEW GOTCHA CASES ===");

// Case 5: Multiple operations
let x = 5;
let y = ++x + x++;
console.log("Case 5 - Let x = 5, y = ++x + x++:");
console.log("  Result: x =", x, ", y =", y);
console.log(
  "  Explanation: ++x makes x=6, then x++ returns 6 (then increments x to 7), so y = 6 + 6 = 12",
);

// Case 6: In loops
console.log("Case 6 - Increment in loop:");
let sum = 0;
for (let i = 0; i < 3; i++) {
  sum += i;
}
console.log("  Loop with i++: sum =", sum);
console.log("  Explanation: i starts 0, incremented after each iteration");

// Case 7: In conditionals
let p = 5;
if (++p > 5) {
  console.log("Case 7 - Pre-increment in conditional:");
  console.log("  p:", p);
  console.log(
    "  Explanation: p incremented to 6, then compared (6 > 5 is true)",
  );
}

// Case 8: Return value difference
function testInc() {
  let val = 10;
  return ++val;
}

function testIncPost() {
  let val = 10;
  return val++;
}

console.log("Case 8 - Return values:");
console.log("  ++val returns:", testInc());
console.log("  val++ returns:", testIncPost());

console.log("\n=== SUMMARY ===");
console.log("++a (pre-increment): increments a, then returns new value");
console.log("a++ (post-increment): returns old value, then increments a");
console.log("--a (pre-decrement): decrements a, then returns new value");
console.log("a-- (post-decrement): returns old value, then decrements a");
