let apiCall = new Promise(function (resolve, reject) {
  resolve({
    status: 200,
    body: "user data",
  });
});

apiCall.then(function (response) {
  console.log(response.status);
});

let apiCalls = new Promise(function (resolve, reject) {
  reject("500 Error");
});

apiCalls
  .then(function (data) {
    console.log("Success or resolove");
  })
  .catch(function (error) {
    console.log(error);
  });
