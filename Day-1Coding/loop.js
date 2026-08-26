const user = {
  name: "Mamta",
  age: 30,
  role: "QA",
};

for (const key in user) {
  console.log(key);

  console.log(`${key} : ${user[key]}`);
}
