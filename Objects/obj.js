const user = {
  name: "pramod",
  age: 34,
};

const calcultaor = {
  value: 0,
  add(n) {},

  substract(n) {},
};
calcultaor.add(10);

const user = { name1: "John", age: 30, city: "NYC" };

const data = {
  user: {
    name: "mamta",
    address: {
      city: "kaithal",
    },
  },
};

const {
  user: {
    address: { city },
  },
} = data;
console.log(data.user.address.city);
