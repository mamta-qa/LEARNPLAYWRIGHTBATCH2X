const greet = function (name1) {
  return name1;
};

let r = greet("Mamta");
console.log(r);

const greet2 = (name1) => name1;
let r2 = greet2("Mamta2");
console.log(r2);

const doubleIt = (n) => n * 2;
console.log(doubleIt(10));
const printIT = (name) => console.log(name);
printIT("mamta");

const funcname = (n) => n * 3;
console.log(funcname(10));
const nameIt = (nest) => console.log(nest);
nameIt("test");
