//promise is js way i will give you result later pending- resolved- cancelled
let order = new Promise(function (resolve, reject) {
  let foodready = true;
  if (foodready) {
    resolve("Pizza is deliverd food is ready");
  } else {
    reject("order cancelled");
  }
});

//console.log(order);
order.then();
