const student = {
  name: "Mamta",
  age: 35,
  job: "QA",
};

((student.age = 40), (student.job = "Automation"), console.log(student.name));
console.log(student.age);
console.log(student.job);
