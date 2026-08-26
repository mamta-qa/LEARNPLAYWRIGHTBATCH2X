function greettester(name, callback) {
  console.log("Welcome," + name);
  callback();
}

greettester("Dev", function () {
  console.log("Let's Start testing!");
});

function runTest(testname, callback) {
  let status = "PASS";
  callback(testname, status);
}

runTest("login test", function (name, result) {
  console.log(name + "-" + result);
});

let bugs = ["UI glitch", "API Timeout", "Wrong redirect"];

bugs.forEach(function (bug, i) {
  console.log("Bug #" + (i + 1) + ": " + bug);
});
console.log("Total bugs:" + bugs.length);
