function sayHello() {
  console.log("hi");
  return "hello";
}

let relative = sayHello();
console.log(relative); // return value is assigned to relative

const add2 = (a, b) => a + b;
console.log(add2);
