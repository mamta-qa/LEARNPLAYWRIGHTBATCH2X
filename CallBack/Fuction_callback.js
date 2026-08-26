function testcase(name, callback) {
  console.log("Running: " + name);

  callback();
}

testcase("Login test", function () {
  console.log("Login test completed");
});

function momsays(task, callback) {
  console.log(" mom say:" + task);
  callback();
}

momsays("brush your teeth", function () {
  console.log("child finished the homework");
});

function dadsay(person, callback) {
  console.log(person, "come here");
  callback();
}

dadsay("bring water", function () {
  console.log("hello Bhaavik");
});
