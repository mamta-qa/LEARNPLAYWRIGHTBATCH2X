const marks = {
  hindiMarks: 10,
  engMarks: 30,
  sktmarks: 50,
};

let total = 0;
for (const subjects in marks) {
  total = total + marks[subjects];
}
console.log(total);
