for (let i = 0; i <= 10; i++) {
  console.log(i);
}

for (let i = 0; i < 10; i++) {
  if (i == 5) break;
  console.log(i);
}

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) console.log(i, "i is even");
  else {
    console.log(i, "i is odd");
  }
}

for (i = 10; i > 0; i--) {
  console.log(i);
}

let sum = 0;
for (i = 1; i <= 5; i++) {
  sum = sum + i;
}
console.log(sum);
