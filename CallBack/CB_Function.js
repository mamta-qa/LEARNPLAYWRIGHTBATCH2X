function callWhenTableisReady() {
  console.log("caling 000000");
}

function cafe(item, callWhenTableisReady) {
  console.log("Finding..1");
  console.log("Finding..2");
  console.log("Finding..3");

  console.log("items");

  callWhenTableisReady();
}

function callWhenTableiRready() {
  console.log("calling 0000000");
}

cafe("Burger", callWhenTableisReady);

cafe("Pizza", function () {
  console.log("caliing 7899995522");
});

cafe("Momo", () => {
  console.log("calling 885558556565");
});
