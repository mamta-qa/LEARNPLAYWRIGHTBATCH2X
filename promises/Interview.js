let t1 = Promise.resolve("PASS");
let t2 = Promise.reject("FAIL");
let t3 = Promise.resolve("PASS");

Promise.all([t1, t2, t3])
  .then(function (r) {
    console.log("All:", r);
  })
  .catch(function (errparams) {
    console.log("Stopped:", errparams);
  });

Promise.allSettled([
  Promise.resolve("API 200"),
  Promise.reject("API 500"),
  Promise.resolve("API 201"),
]).then(function (results) {
  results.forEach(function (r) {
    let val = r.status === "fulfilled" ? r.value : r.reason;
    console.log(r.status + " -" + val);
  });
});
