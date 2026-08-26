let scores = [45, 65, 75, 85, 95];
let grades = scores.map((s) => (s > 70 ? "pass" : "fail"));
console.log(grades);

let scores1 = [50, 60, 70, 80, 90];

let grades1 = scores1.map((s) => (s > 70 ? "pass" : "fail"));

console.log(grades1);

//filter

let scoretest = [10, 20, 30, 40, 50, 60, 70, 80, 90];

let passing = scoretest.filter((s) => s > 45);

console.log(passing);

let total = scoretest.reduce((a, b) => a + b, 0);
console.log(total);

let nested = [[1, 2], [3, 4], [5, 6], [7]];
console.log(nested.flat());
