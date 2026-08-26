let scores = [
  [85, , 90, 78],
  [60, 45, 70],
  [95, 88, 92],
];

let rowSums = scores.map((row) => row.reduce((a, b) => a + b, 0));

console.log(rowSums);

let suiteresults = [
  ["login-Pass", "register_pass", "Logout-Pass"],
  ["search-Pass", "Filter-fail", "Sort-Pass"],
  ["checkout-fail", "payment-fail", "confirm-pass"],
];

for (let i = 0; i < suiteresults.length; i++) {
  for (let j = 0; j < suiteresults[i].length; j++) {
    if (suiteresults[i][j].includes("fail")) {
      console.log(suiteresults[i][j]);
    }
  }
}
