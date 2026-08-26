function ispalindrom(str) {
  return str === str.split("").reverse().join("");
}

console.log(ispalindrom("test"));
console.log(ispalindrom("madam"));
console.log(ispalindrom("SIS"));
