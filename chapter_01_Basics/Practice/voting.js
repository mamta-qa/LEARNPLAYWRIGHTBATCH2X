function checkvoting(age) {
  return age >= 18;
}

console.log(checkvoting(20));
function checkvoting1(age1) {
  if (age1 > 18) return "yes";
  else if (age1 < 18) return "No";
  else return "invalid";
}

console.log(checkvoting1());

function CheckAge(ages) {
  return ages >= 18 ? "yes" : "no";
}

console.log(CheckAge(56));
