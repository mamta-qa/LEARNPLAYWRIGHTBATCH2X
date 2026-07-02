let num = 7;

if (num % 2 === 0) {
  console.log("number is even");
} else {
  console.log("number is  odd");
}

let number = 59;

if (number >= 90) {
  console.log("Grade A");
} else if (number >= 80) {
  console.log("B");
} else if (number >= 70) {
  console.log("C");
} else if (number >= 60) {
  console.log("D");
} else {
  console.log("fail");
}

let year = 20214;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(" year is leap");
} else {
  console.log("not leap");
}
