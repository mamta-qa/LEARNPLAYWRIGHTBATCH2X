let results = ["pass", "fail", "pass", "error", "fail"];

console.log(results.indexOf("fail"));
console.log(results.indexOf("skip"));

console.log(results.lastIndexOf("fail"));

console.log(results.includes("pass"));
console.log(results.includes("skip"));

let nums = [10, 20, 25, 30, 40];
nums.find((x) => x > 20);

nums.findIndex((n) => n > 20);
nums.findLast((n) => n > 20);
console.log(nums.findLastIndex((n) => n > 20));
