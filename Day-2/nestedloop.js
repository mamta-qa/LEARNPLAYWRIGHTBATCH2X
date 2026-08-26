let testCases = [
  ["TC001", "Login", "Pass"],
  ["TC001", "Register", "Fail"],
  ["TC003", "Logout", "Pass"],
];

for (let i = 0; i < testCases.length; i++) {
  for (let j = 0; j < testCases[i].length; j++) {
    console.log(testCases[i][j]);
    console.log("");
  }
}

for (let i = 0; i < testCases.length; i++) {
  console.log(testCases[i][1]);
}
for (let i = 0; i < testCases.length; i++) {
  console.log(testCases[i][0], testCases[i][1], testCases[i][2]);
}

for (let i = 0; i < testCases.length; i++) {
  if (testCases[i].includes("pass")) console.log(testCases[i]);
}
