let testData = [
  { username: "admin", role: "manager" },
  { username: "john", role: "user" },
  { username: "alex", role: "guest" },
];

let testData2 = testData.map((user) => user.username);
console.log(testData2);
