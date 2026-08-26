function print() {
  console.log("normal function");
}
function placeOrder(ClipboardItem, mamtacallback) {
  console.log("hi your order is placed");

  mamtacallback();
}

placeOrder("Pizaa", print);

placeOrder("Burger", function () {
  console.log("annoy func i am also a funct without name ");
});
placeOrder("momo", () => {
  console.log("annoy  momo func i am also a funct without name ");
});
