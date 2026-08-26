let results = ["pass", "fail", "pass", "error", "fail"];

let count = 0;
for (let result of results) {
  if (result === "fail") {
    count++;
  }
}
console.log(count);
