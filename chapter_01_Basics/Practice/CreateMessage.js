let users = [
  { username: "mamta", status: "active" },
  { username: "Deejul", status: "not active" },
  { username: "Bhaavik", status: "active" },
  { username: "Mukesh", status: "inactive" },
];

let message = users.map((user) => `${user.username} is ${user.status}`);
console.log(message);
