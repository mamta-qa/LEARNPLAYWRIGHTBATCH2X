let testData = [
  { username: "admin ", role: "manager" },
  { username: "john", role: " user" },
  { username: "alex", role: "guest" },
];

let testdata2 = testData.map((user) => user.username);
console.log(testdata2);
