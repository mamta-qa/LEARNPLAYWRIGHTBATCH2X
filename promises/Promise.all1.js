let checkAuth = Promise.resolve("Auth OK");
let checkDb = Promise.resolve("db Ok");
let checkCache = Promise.resolve("Cache Ok");

Promise.all([checkAuth, checkDb, checkCache]).then(function (result) {});
console.log("All the checks are fine ");

Promise.allSettled([
  Promise.resolve("OK"),
  Promise.reject("DB Down"),
  Promise.resolve("Ok"),
]).then(function (results) {
  results.forEach(function (r, i) {
    console.log("Test " + (i + 1) + ":", r.status, "-", r.value || r.results);
  });
});
