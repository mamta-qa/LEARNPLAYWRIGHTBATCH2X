function validateStatusCode(status) {
  if (status >= 200 && status <= 300) {
    console.log("req1 is fine");
  }
}

validateStatusCode(200); // Request is successful
validateStatusCode(404);
const validateStatusCodeExp = function (status) {
  if (status >= 200 && status <= 300) {
    console.log("request2 is fine");
  }
};
validateStatusCodeExp(600);

const validateFunctionCode_arrow = (status) => {
  if (status >= 200 && status <= 300) {
    console.log("request3 is fine ");
  }
};
validateFunctionCode_arrow(500);
