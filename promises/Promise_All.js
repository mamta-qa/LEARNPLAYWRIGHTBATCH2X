let checkAuth = Promise.resolve("Auth OK");
let checkDb = Promise.resolve("db Ok");
let checkCache = Promise.resolve("Cache Ok");

Promise.all([checkAuth, checkDb, checkCache]).then(function (result) {});
console.log("All the checks are fine ");

Promise.all([
  Promise.resolve("OK"),
  Promise.reject("DB Down"),
  Promise.resolve("Ok"),
])
  .then(function (r) {
    console.log(r);
  })
  .catch(function (error) {
    console.log("Failed:", error);
  });
