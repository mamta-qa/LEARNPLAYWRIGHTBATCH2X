let apiResponse = [
  [
    { id: 1, status: "passed" },
    { id: 2, status: "failed" },
  ],
  [
    { id: 3, status: "passed" },
    { id: 4, status: "failed" },
  ],
];

let flatApi = apiResponse.flat().map((item) => item.status);
console.log(flatApi);
let passCount = 0;
let failCount = 0;

for (let status of flatApi) {
  if (status === "passed") {
    passCount++;
  } else if (status === "failed") {
    failCount++;
  }
  console.log(passCount);
  console.log(failCount);
}
