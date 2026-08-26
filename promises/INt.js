Promise.resolve("start")
  .then(function (val) {
    console.log(val);

    throw new error("Broke at step 2");
  })

  .then(function () {
    console.log("this will not run");
  })
  .catch(function (err) {
    console.log("caught:", err.message);
  });
