let fruits = ["apple", "banana", "orange"];
fruits.sort();
console.log(fruits);

let numbers = [1, 2, 4, 6, 5, 3, 7, 8, 4, 9];
numbers.sort();
console.log(numbers);

let num = [10, 1, 21, 2];
num.sort();
console.log(num);

let number1 = [2, 10, 1, 21, 20, 4, 40, 33, 3, 8, 80];
number1.sort((a, b) => a - b); // ascending
console.log(number1);
number1.sort((a, b) => b - a); // descending
console.log(number1);

// by default aarays are sorted as  lexicographic
