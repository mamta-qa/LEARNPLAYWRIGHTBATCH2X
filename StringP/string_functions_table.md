# JavaScript String Methods

This table lists the commonly used built-in string methods in JavaScript.

| Method                                  | Description                                                        | Example                           |
| --------------------------------------- | ------------------------------------------------------------------ | --------------------------------- |
| `charAt(index)`                         | Returns the character at a given index                             | `"hello".charAt(1)`               |
| `charCodeAt(index)`                     | Returns the Unicode value of the character at an index             | `"hello".charCodeAt(0)`           |
| `codePointAt(index)`                    | Returns the Unicode code point of the character at an index        | `"A".codePointAt(0)`              |
| `concat(str1, str2, ...)`               | Joins two or more strings                                          | `"Hello".concat(" ", "World")`    |
| `includes(searchValue)`                 | Checks whether a string contains another string                    | `"hello".includes("ell")`         |
| `endsWith(searchValue)`                 | Checks whether a string ends with a given value                    | `"hello".endsWith("lo")`          |
| `indexOf(searchValue)`                  | Returns the first index of a value                                 | `"hello".indexOf("l")`            |
| `lastIndexOf(searchValue)`              | Returns the last index of a value                                  | `"hello".lastIndexOf("l")`        |
| `localeCompare(compareString)`          | Compares strings based on locale                                   | `"apple".localeCompare("banana")` |
| `match(regex)`                          | Searches for a match using regex                                   | `"hello".match(/l/g)`             |
| `matchAll(regex)`                       | Returns all regex matches                                          | `"abc".matchAll(/a/g)`            |
| `normalize(form)`                       | Normalizes string into Unicode form                                | `"e\u0301".normalize()`           |
| `padEnd(targetLength)`                  | Pads the end of a string                                           | `"5".padEnd(3, "0")`              |
| `padStart(targetLength)`                | Pads the start of a string                                         | `"5".padStart(3, "0")`            |
| `repeat(count)`                         | Repeats a string a number of times                                 | `"ha".repeat(3)`                  |
| `replace(searchValue, replaceValue)`    | Replaces first matching substring                                  | `"hello".replace("l", "L")`       |
| `replaceAll(searchValue, replaceValue)` | Replaces all matching substrings                                   | `"hello".replaceAll("l", "L")`    |
| `search(regex)`                         | Searches for a match and returns index                             | `"hello".search(/ll/)`            |
| `slice(start, end)`                     | Extracts a substring between indexes                               | `"hello".slice(1, 4)`             |
| `split(separator)`                      | Splits a string into an array                                      | `"a,b,c".split(",")`              |
| `startsWith(searchValue)`               | Checks whether a string starts with a value                        | `"hello".startsWith("he")`        |
| `substring(start, end)`                 | Extracts characters between two indexes                            | `"hello".substring(1, 4)`         |
| `toLocaleLowerCase()`                   | Converts to lowercase using locale                                 | `"HELLO".toLocaleLowerCase()`     |
| `toLocaleUpperCase()`                   | Converts to uppercase using locale                                 | `"hello".toLocaleUpperCase()`     |
| `toLowerCase()`                         | Converts to lowercase                                              | `"HELLO".toLowerCase()`           |
| `toUpperCase()`                         | Converts to uppercase                                              | `"hello".toUpperCase()`           |
| `trim()`                                | Removes whitespace from both sides                                 | `"  hello  ".trim()`              |
| `trimStart()`                           | Removes whitespace from the start                                  | `"  hello".trimStart()`           |
| `trimEnd()`                             | Removes whitespace from the end                                    | `"hello  ".trimEnd()`             |
| `valueOf()`                             | Returns the primitive value of a string object                     | `"hello".valueOf()`               |
| `at(index)`                             | Returns the character at a given index, supports negative indexing | `"hello".at(-1)`                  |

## Notes

- String methods are called on string values.
- Some methods return a new string, while others return a boolean, number, or array.
- You can practice these methods in the JavaScript files inside the String and StringP folders.
