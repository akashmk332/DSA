document.write(
  "Q4. Write a program to print the first non-repeated character from a string?" +
    "<br><br>"
);
const NO_OF_CHARS = 256;

/* The function returns index of the first
non-repeating character in a string. If
all characters are repeating then
returns Number.MAX_VALUE */
function firstNonRepeating(str) {
  let arr = new Array(NO_OF_CHARS);
  for (let i = 0; i < NO_OF_CHARS; i++) {
    arr[i] = [0, 0];
  }

  for (let i = 0; i < str.length; i++) {
    arr[str.charCodeAt(i)][0]++;
    arr[str.charCodeAt(i)][1] = i;
  }

  let res = Number.MAX_VALUE;
  for (let i = 0; i < NO_OF_CHARS; i++)
    // If this character occurs only
    // once and appears before the
    // current result, then update the
    // result
    if (arr[i][0] == 1) res = Math.min(res, arr[i][1]);

  return res;
}

/* Driver program to test above function */

let str = "address";
document.write("String is:" + str + "<br>");
let index = firstNonRepeating(str);
if (index == Number.MAX_VALUE)
  document.write("Either all characters are repeating or string is empty");
else document.write("First non-repeating character is: ", str[index]);
