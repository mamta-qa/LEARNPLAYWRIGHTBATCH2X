const product = {
  name: "iPhone",
  price: 5000,
  quantity: 2,
  inStock: true,
};

const totalprice = product.price * product.quantity;

console.log(totalprice);

if (product.inStock) {
  console.log("product available");
}
