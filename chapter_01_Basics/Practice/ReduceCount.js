let results = ["pass", "fail", "pass", "error", "fail", "pass"];
let failedCount = results.reduce((count, result) => {
  if (result === "fail") {
    count++;
  }

  return count;
}, 0);

console.log("failed test:", failedCount);
