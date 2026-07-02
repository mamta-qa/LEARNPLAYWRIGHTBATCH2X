let temp = 40;
let feel = (temp = 45)
  ? "very hot"
  : temp >= 35
    ? "hot"
    : temp >= 25
      ? "mild"
      : "cold";
console.log("Temperature:", temp, "Feeling:", feel);
