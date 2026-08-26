let testData = [
  { username: "admin", role: "manager" },
  { username: "john", role: "user" },
  { username: "alex", role: "guest" },
];

let usernames = testData.map((user) => user.username);

console.log(usernames);
