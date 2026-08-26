const user = {
  name: "john",
  age: 30,
  email: "mamtadeejul@gmail.com",
};
console.log(user);
console.log(user.name);
console.log(user["age"]);

const key = "age";
console.log(user[key]);

user.city = "NYC";
user.age = 31;

console.log(user);
let obj = { name: "Login" };
console.log(Object.getOwnpropertyDescriptor(obj, "name"));
