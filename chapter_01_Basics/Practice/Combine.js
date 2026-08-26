let a = [1, 2];
let b = [3, 4];

let c = a + b;

let d = a.concat(b);
console.log(d);
console.log(c);

//spread concatination

let e = [...a, ...b];
console.log(e);

let s = ["pass", "fail", "blocked"].join("-");
console.log(s);

let rs = Array.isArray([1, 2, 3]);
console.log(rs);
let rs1 = Array.isArray("a");
console.log(rs1);

//every and some

//false

let result1 = Array.isArray("Test");
console.log(result1);

[200, 300, 400].every((statuscode) => statuscode > 200);
