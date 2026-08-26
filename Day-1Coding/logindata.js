const testData = {
  testcasname: "mamta",
  testcaseId: 1234,
  testPassword: "@abc123",
  expectedURL: "/dashboard",
};

console.log(testData);

testData.testPassword = "@123";

console.log(testData);
