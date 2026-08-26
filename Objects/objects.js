let obj = {};

let obj1 = {
  name: "Mamta",
};

let obj2 = { name: "mamta", age: 11, rollnum: 123 };

let a = { status: "pass" };
//console.log(a.status);
//console.log(a["status"]);

//let a1 = { Status: "pass" };
//console.log(a1.status);

let b = a;
b.status = "fail";

console.log(a.status);
console.log(b.status);

let c = { status: "pass" };
let d = { status: "pass" };

console.log(c);
console.log(d);

if (b === a) {
  console.log("true");
} else {
  console.log("false");
}
