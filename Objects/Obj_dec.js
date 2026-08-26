const user = { name1: "John", age: 30, city: "NYC" };
const { name1, age } = user;
console.log(name1);
console.log(age);

const { name1: userName, age: userAge } = user;
console.log(userName);
console.log(userAge);

//const { age } = user;

const { country = "USA" } = user;
console.log(country);
console.log(user);

const data = {
  user: {
    name: "John",
    address: { city: "NYC" },
  },
};

const {
  user: {
    address: { city },
  },
} = data;
console.log(user);

console.log(data.user);
