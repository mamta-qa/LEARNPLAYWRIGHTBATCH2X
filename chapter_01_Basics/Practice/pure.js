function calculatepassRate(total, passed) {
  return ((passed / total) * 100).toFixed(2);
}

console.log(calculatepassRate(10, 7));
console.log(calculatepassRate(10, 8));
