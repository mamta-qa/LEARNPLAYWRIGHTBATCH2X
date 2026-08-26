let str = "Hello,World";
console.log(str.toUpperCase());
console.log(str.toLocaleLowerCase());

console.log(str.substring(6, 10));

console.log(str.trim());
str.trimEnd();
str.trimStart();

let msg = "test :FAIL. Retry: FAIL.";
console.log(msg.replace("FAIL", "PASS"));
console.log(msg.replace(/FAIL/g, "PASS"));
