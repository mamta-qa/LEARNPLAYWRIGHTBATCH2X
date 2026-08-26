//refrence: non primitive object, array,function
//primitive :
//project property

const user = {
  name: "pramod",
  age: 30,
  email: "mamtadeejul@gmail.com",
};
console.log(user);
console.log(user.name);
console.log(user["age"]);

//dynamic property access
const key = "age";
console.log(user[key]);

user.city = "NYC";
user.age = 31;
console.log(user);

let obj ={name ="Login"};
console.log(Object.getOwnPropertyDescriptor(obj,"name"));
