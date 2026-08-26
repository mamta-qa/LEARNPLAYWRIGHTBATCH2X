const testcases = {
  id: "TC001",
  title: "This is my test case number 001",
  priority: "high",
  status: "Pass",
};

console.log(testcases.title);
testcases.status = "Fail";
testcases.Tester = "mamta";

console.log(testcases.status);

for (const key in testcases) {
  console.log(key, testcases[key]);
}
