let scores = [45, 65, 80, 35, 90, 75];

let count = 0;

let highest = scores[0];

for (let i = 0; i < scores.length; i++) {
  if (scores[i] >= 60) {
    console.log(scores[i]);
  }
}

for (let score of scores) {
  if (score >= 60) {
    count++;
  }
}
console.log(count);

for (let score of scores) {
  if (score > highest) {
    highest = score;
  }
}
console.log(highest);
let testResults = ["pass", "fail", "pass", "blocked", "fail", "pass"];
let passcount = 0;
let failcount = 0;
let blockcount = 0;
for (let testResult of testResults) {
  if (testResult === "pass") {
    passcount++;
  } else if (testResult === "fail") {
    failcount++;
  } else if (testResult === "blocked") {
    blockcount++;
  }
}
console.log(passcount);
console.log(failcount);
console.log(blockcount);

for (let i = 0; i < testResults.length; i++) {
  if (testResults[i] === "pass") {
    passcount++;
  } else if (testResults[i] === "fail") {
    failcount++;
  } else if (testResults[i] === "blocked") {
    blockcount++;
  }
}
