function SumOfArray(arr) {
  let sum = 0;

  for (let num of arr) {
    sum += num;
  }

  return sum;
}
console.log(SumOfArray([1, 2, 3, 4, 5, 6]));
