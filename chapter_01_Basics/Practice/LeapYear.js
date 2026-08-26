function leap(year) {
  if (year % 4 === 0) return "yes leap year";
  else if (year % 100 === 0) return "yes leap year";
  else if (year % 400 === 0) return "yes leap year";
  else return "not leap year";
}

console.log(leap(2003));

function leap1(year1) {
  return (
    year1 % 4 === 0 || year1 % 400 === 0 || (year1 % 100 === 0 ? "yes" : "no")
  );
}
console.log(leap1(4001));
